import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const catalogPath = path.join(ROOT_DIR, 'src/data/videoCatalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

// Curated metadata for featured projects
const FEATURED_DETAILS = {
  'fashion-17-hnh1': {
    client: 'Ecochic x Hồ Ngọc Hà',
    niche: 'Thời Trang',
    headline: 'Viral Lookbook Reel & Định Hình Phong Cách Thời Trang',
    description: 'Chiến dịch lookbook thời trang hợp tác cùng nghệ sĩ Hồ Ngọc Hà. Xử lý nhịp cắt chuyển động dứt khoát, bắt nhịp âm nhạc thời thượng và tối ưu tỷ lệ khung hình 9:16 cho nền tảng TikTok & Instagram Reels.',
    highlights: ['Nhịp dựng viral 9:16', 'Color grading cao cấp', 'Chiến dịch thương hiệu lớn'],
  },
  'health-08-dung-ton-tien-mua-glu': {
    client: 'Dược Sĩ Tống Đức',
    niche: 'Sức Khỏe',
    headline: 'Video Giáo Dục Y Khoa Chuyên Sâu & Kể Chuyện Giữ Chân Cao',
    description: 'Sản xuất chuỗi video chia sẻ kiến thức dược phẩm chuyên sâu. Thiết kế cấu trúc mở đầu (hook) 3 giây đầu tiên kích thích tò mò, lồng ghép motion graphics và phụ đề đồng bộ chuẩn xác.',
    highlights: ['Hook 3 giây giữ chân', 'Phụ đề & Motion Graphics', 'Nội dung y khoa đáng tin cậy'],
  },
  'beauty-09-1-ndln-tinhhuong-thermage-ultherapy': {
    client: 'Clinic & Beauty Care',
    niche: 'Làm Đẹp & Thẩm Mỹ',
    headline: 'Tình Huống Trải Nghiệm Công Nghệ Trẻ Hóa Thermage & Ultherapy',
    description: 'Dựng chuỗi video tình huống thực tế cho viện thẩm mỹ công nghệ cao. Kết hợp hiệu ứng zoom kịch tính, nhịp cắt hài hước giải trí tự nhiên nhưng vẫn truyền tải trọn vẹn thông điệp liệu trình thẩm mỹ.',
    highlights: ['Hiệu ứng biểu cảm trực quan', 'Nhịp cắt tình huống hài hước', 'Tăng tỷ lệ chuyển đổi dịch vụ'],
  },
  'fnb-05-viet-phuc': {
    client: 'Four Season Coffee',
    niche: 'Ẩm Thực (F&B)',
    headline: 'Cinematic B-Roll & Quảng Bá Không Gian Cà Phê Trải Nghiệm',
    description: 'Ghi lại không gian trải nghiệm văn hóa Việt phục tại chuỗi quán cà phê Four Season. Tinh chỉnh ánh sáng, màu sắc điện ảnh ấm cúng kết hợp âm thanh tự nhiên mang lại cảm giác thư thái và thu hút khách ghé thăm.',
    highlights: ['Màu sắc điện ảnh ấm cúng', 'Âm thanh tự nhiên (Foley)', 'Visual tôn vinh nét đẹp truyền thống'],
  },
  'realestate-01-centana': {
    client: 'Dự Án Căn Hộ Centana',
    niche: 'Bất Động Sản',
    headline: 'Phim Giới Thiệu Căn Hộ Mẫu & Trải Nghiệm Tiện Ích Đẳng Cấp',
    description: 'Dựng phim ngắn trải nghiệm không gian sống thực tế cho dự án căn hộ Centana. Xử lý đường bay flycam mượt mà, chuyển cảnh kiến trúc liền mạch và làm nổi bật các góc view đắt giá.',
    highlights: ['Flycam kiến trúc mượt mà', 'Chuyển cảnh không gian liền mạch', 'Hình ảnh căn hộ chuẩn điện ảnh'],
  },
  'events-14-a-recap-su-kien-13-nam': {
    client: 'Nghệ Sĩ & Sự Kiện',
    niche: 'Nghệ Sĩ & Sự Kiện',
    headline: 'Recap Kỷ Niệm 13 Năm & Cảm Xúc Sân Khấu Widescreen',
    description: 'Dựng phim tổng kết hành trình 13 năm đầy cảm xúc với chuẩn khung hình 16:9 Widescreen. Hòa âm phối khí nhịp nhàng với hình ảnh biểu diễn sân khấu và những khoảnh khắc hậu trường chân thực.',
    highlights: ['Khung hình Widescreen 16:9', 'Nhịp phim cảm xúc cao trào', 'Âm thanh đồng bộ hòa âm'],
  },
};

// Generate full portfolioData.ts
const code = `// ============================================================
// PORTFOLIO DATA - Trịnh Thảo Quyên
// Real Client Projects & Real Video Assets (Zero AI Slop)
// ============================================================

export interface VideoProject {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryName: string;
  aspect: "9:16" | "16:9";
  aspectLabel: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  headline?: string;
  description?: string;
  highlights?: string[];
  isFeatured?: boolean;
}

export const personal = {
  fullName: "Trịnh Thảo Quyên",
  firstName: "Thảo Quyên",
  dateOfBirth: "22/12/2003",
  role: "Video Editor & Visual Creator",
  tagline: "Kể chuyện bằng hình ảnh và quy trình dựng phim sắc sảo.",
  bio: "Hơn 2 năm kinh nghiệm thực chiến dựng phim chuyên nghiệp cho các thương hiệu hàng đầu: Ecochic (chiến dịch Hồ Ngọc Hà, Quỳnh Trần), Dược Sĩ Tống Đức, Thẩm mỹ viện công nghệ cao, chuỗi F&B Four Season và các sự kiện lớn. Chuyên sâu về nhịp cắt giữ chân (retention pacing), dựng phim ngắn chuẩn TikTok/Reels và phim quảng bá điện ảnh.",
  yearsExp: 2,
  contact: {
    phone: "0943851121",
    zalo: "0943851121",
    email: "trinhthaoquyen22@gmail.com",
  },
} as const;

export const niches = [
  {
    id: "fashion",
    label: "Thời Trang",
    code: "FSH-01",
    desc: "Short-form Reels, lookbooks Hồ Ngọc Hà, Quỳnh Trần & Ecochic",
  },
  {
    id: "health",
    label: "Sức Khỏe",
    code: "HLT-02",
    desc: "Series giáo dục y khoa, chuyên sâu dược phẩm cùng Dược Sĩ Tống Đức",
  },
  {
    id: "beauty",
    label: "Làm Đẹp",
    code: "BTY-03",
    desc: "Video trải nghiệm Thermage, Ultherapy, skincare & trị sẹo",
  },
  {
    id: "fnb",
    label: "Ẩm Thực",
    code: "FNB-04",
    desc: "Cinematic B-rolls, không gian trải nghiệm Four Season Coffee",
  },
  {
    id: "realestate",
    label: "Bất Động Sản",
    code: "BDS-05",
    desc: "Review căn hộ Centana, Galadia và hạ tầng đô thị hiện đại",
  },
  {
    id: "events",
    label: "Sự Kiện & Cưới",
    code: "EVT-06",
    desc: "Recap hành trình nghệ sĩ 13 năm, phóng sự cưới điện ảnh",
  },
] as const;

export const stats = [
  { value: "38+", label: "Dự án video hoàn thành", detail: "Đa dạng các lĩnh vực từ thời trang tới y khoa" },
  { value: "02+", label: "Năm dựng phim tự do", detail: "Đồng hành trực tiếp cùng các thương hiệu lớn" },
  { value: "9:16 & 16:9", label: "Đa dạng khung hình", detail: "Tối ưu cho cả TikTok, Reels và màn ảnh rộng" },
  { value: "100%", label: "Khách hàng hài lòng", detail: "Cam kết đúng tiến độ và hỗ trợ chỉnh sửa tận tâm" },
] as const;

export const aiWorkflow = [
  {
    step: "Khởi tạo",
    title: "Tiếp Nhận & Biên Tập Kịch Bản",
    desc: "Phân tích nội dung cốt lõi của thương hiệu, xây dựng hook 3 giây đầu tiên kích thích sự tò mò và lập danh sách shot list chi tiết.",
  },
  {
    step: "Tiền kỳ",
    title: "Tạo Sinh & Hỗ Trợ Công Cụ AI",
    desc: "Ứng dụng các công cụ AI hiện đại để tạo storyboard, tạo giọng đọc mẫu hoặc sinh b-roll bổ trợ, rút ngắn 40% thời gian tiền kỳ.",
  },
  {
    step: "Hậu kỳ",
    title: "Dựng Thô & Cắt Nhịp Giữ Chân",
    desc: "Ghép nối timeline theo nhịp điệu âm nhạc, loại bỏ khoảng lặng thừa, đồng bộ audio chặt chẽ để tạo trải nghiệm xem liền mạch, cuốn hút.",
  },
  {
    step: "Hoàn thiện",
    title: "Chỉnh Màu, Phụ Đề & Bàn Giao",
    desc: "Cân chỉnh màu sắc chuẩn điện ảnh, thiết kế phụ đề động bắt mắt, xuất file chất lượng cao tối ưu từng nền tảng phát hành.",
  },
] as const;

export const allProjects: VideoProject[] = ${JSON.stringify(
  catalog.map((item) => {
    const feat = FEATURED_DETAILS[item.id];
    return {
      id: item.id,
      title: feat?.headline || item.title,
      client: feat?.client || item.client,
      category: item.category,
      categoryName: item.categoryName,
      aspect: item.aspect,
      aspectLabel: item.aspect === '9:16' ? '9:16 Dọc (Reels/TikTok)' : '16:9 Ngang (Widescreen)',
      duration: item.duration,
      videoUrl: item.videoUrl,
      thumbnailUrl: item.thumbnailUrl,
      headline: feat?.headline || item.title,
      description:
        feat?.description ||
        `Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng ${item.client}.`,
      highlights: feat?.highlights || ['Chuẩn màu sắc', 'Nhịp cắt dứt khoát', 'Chất lượng cao'],
      isFeatured: !!feat,
    };
  }),
  null,
  2
)};

export const featuredProjects: VideoProject[] = allProjects.filter((p) => p.isFeatured);
`;

fs.writeFileSync(path.join(ROOT_DIR, 'src/data/portfolioData.ts'), code, 'utf-8');
console.log('Successfully generated src/data/portfolioData.ts with all 38 projects!');
