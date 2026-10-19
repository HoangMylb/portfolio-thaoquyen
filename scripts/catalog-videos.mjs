import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT_DIR = process.cwd();
const DATA_DIRS = [
  path.join(ROOT_DIR, 'src/data/data1'),
  path.join(ROOT_DIR, 'src/data/data2'),
];
const PUBLIC_VIDEOS = path.join(ROOT_DIR, 'public/videos');
const PUBLIC_THUMBS = path.join(ROOT_DIR, 'public/thumbnails');

if (!fs.existsSync(PUBLIC_VIDEOS)) fs.mkdirSync(PUBLIC_VIDEOS, { recursive: true });
if (!fs.existsSync(PUBLIC_THUMBS)) fs.mkdirSync(PUBLIC_THUMBS, { recursive: true });

function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

function slugify(str) {
  return removeAccents(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Category mappings
const CATEGORY_MAP = {
  'QUỲNH TRẦN ECOCHIC': { id: 'fashion', name: 'Thời Trang', client: 'Ecochic x Quỳnh Trần / Hồ Ngọc Hà' },
  'DƯỢC SĨ TỐNG ĐỨC': { id: 'health', name: 'Sức Khỏe', client: 'Dược Sĩ Tống Đức' },
  'LÀM ĐẸP': { id: 'beauty', name: 'Làm Đẹp & Thẩm Mỹ', client: 'Clinic & Beauty Care' },
  'CHUỖI COFFEE FOUR SEASON': { id: 'fnb', name: 'Ẩm Thực (F&B)', client: 'Four Season Coffee' },
  'NGHỆ SĨ': { id: 'events', name: 'Nghệ Sĩ & Sự Kiện', client: 'Wedding & Artist Event' },
  'BDS': { id: 'realestate', name: 'Bất Động Sản', client: 'Centana & Galadia Real Estate' },
  'LOGISTICS': { id: 'logistics', name: 'Logistics', client: 'Chuỗi Cung Ứng & Vận Tải' },
};

function normalizeFolderName(folder) {
  // Normalize Unicode to match CATEGORY_MAP keys
  const n = folder.normalize('NFD');
  for (const key of Object.keys(CATEGORY_MAP)) {
    if (key.normalize('NFD') === n) return CATEGORY_MAP[key];
  }
  return { id: 'other', name: folder, client: folder };
}

const allFiles = [];

for (const dir of DATA_DIRS) {
  if (!fs.existsSync(dir)) continue;
  const folders = fs.readdirSync(dir);
  for (const folder of folders) {
    if (folder.startsWith('.')) continue;
    const folderPath = path.join(dir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    const catMeta = normalizeFolderName(folder);
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      if (!file.endsWith('.mp4')) continue;
      const fullPath = path.join(folderPath, file);
      allFiles.push({
        fullPath,
        file,
        category: catMeta.id,
        categoryName: catMeta.name,
        client: catMeta.client,
      });
    }
  }
}

console.log(`Found ${allFiles.length} total videos across data1 and data2.`);

const processed = [];
let index = 1;

for (const item of allFiles) {
  try {
    // Generate clean slug
    const cleanFileName = item.file
      .replace(/^Bản sao của (Bản sao của )?/i, '')
      .replace(/\.mp4$/i, '');
    const slug = `${item.category}-${index.toString().padStart(2, '0')}-${slugify(cleanFileName)}`;
    const videoDest = path.join(PUBLIC_VIDEOS, `${slug}.mp4`);
    const thumbDest = path.join(PUBLIC_THUMBS, `${slug}.jpg`);

    // Create symlink
    if (fs.existsSync(videoDest)) {
      fs.unlinkSync(videoDest);
    }
    fs.symlinkSync(item.fullPath, videoDest);

    // Probe duration & resolution
    const probe = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of json "${item.fullPath}"`
    ).toString();
    const probeData = JSON.parse(probe);
    const stream = probeData.streams?.[0] || {};
    const width = stream.width || 1920;
    const height = stream.height || 1080;
    const durationSec = parseFloat(stream.duration || '10');
    const isVertical = height > width;
    const aspect = isVertical ? '9:16' : '16:9';

    // Extract thumbnail at 2 seconds or 20% of duration
    const seekTime = Math.min(2.5, Math.max(0.5, durationSec * 0.15)).toFixed(2);
    execSync(
      `ffmpeg -y -ss ${seekTime} -i "${item.fullPath}" -update 1 -frames:v 1 -q:v 2 "${thumbDest}" 2>/dev/null`
    );

    // Format display title
    const displayTitle = cleanFileName
      .replace(/_/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    processed.push({
      id: slug,
      title: displayTitle,
      category: item.category,
      categoryName: item.categoryName,
      client: item.client,
      aspect,
      width,
      height,
      duration: `${Math.round(durationSec)}s`,
      videoUrl: `/videos/${slug}.mp4`,
      thumbnailUrl: `/thumbnails/${slug}.jpg`,
      originalPath: item.fullPath,
    });

    console.log(`[${index}/${allFiles.length}] Processed: ${slug} (${aspect})`);
    index++;
  } catch (err) {
    console.error(`Error processing ${item.file}:`, err.message);
  }
}

fs.writeFileSync(
  path.join(ROOT_DIR, 'src/data/videoCatalog.json'),
  JSON.stringify(processed, null, 2),
  'utf-8'
);

console.log(`\nSuccessfully cataloged ${processed.length} videos into src/data/videoCatalog.json`);
