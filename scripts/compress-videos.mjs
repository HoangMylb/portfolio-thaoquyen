import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const catalogPath = path.resolve("src/data/videoCatalog.json");
const outputDir = path.resolve("public/videos");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
console.log(`Starting compression for ${catalog.length} videos...`);

let totalSize = 0;

for (let i = 0; i < catalog.length; i++) {
  const item = catalog[i];
  const src = item.originalPath;
  const dest = path.join(outputDir, `${item.id}.mp4`);

  console.log(`[${i + 1}/${catalog.length}] Compressing: ${item.title}...`);

  if (!fs.existsSync(src)) {
    console.error(`  Warning: File not found: ${src}`);
    continue;
  }

  // Determine scale depending on aspect
  const scaleFilter = item.aspect === "9:16" 
    ? "scale=-2:min(ih\\,960)" 
    : "scale=min(iw\\,960):-2";

  // Web optimized H.264, faststart for instant playback, max 40 seconds preview
  const cmd = `ffmpeg -y -i "${src}" -t 45 -vf "${scaleFilter}" -c:v libx264 -crf 28 -preset faster -c:a aac -b:a 96k -movflags +faststart "${dest}"`;

  try {
    execSync(cmd, { stdio: "ignore" });
    const stat = fs.statSync(dest);
    const mb = (stat.size / (1024 * 1024)).toFixed(2);
    totalSize += stat.size;
    console.log(`  -> Saved: ${dest} (${mb} MB)`);
  } catch (err) {
    console.error(`  Error compressing ${item.title}:`, err.message);
  }
}

const totalMB = (totalSize / (1024 * 1024)).toFixed(2);
console.log(`\nCOMPLETED! Total size of all 38 videos: ${totalMB} MB`);
