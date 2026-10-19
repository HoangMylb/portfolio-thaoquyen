// ============================================================
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
  bio: "Hơn 2 năm kinh nghiệm thực chiến dựng phim chuyên nghiệp cho các thương hiệu.",
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
  { value: "999+", label: "Dự án video hoàn thành", detail: "Đa dạng các lĩnh vực từ thời trang tới y khoa" },
  { value: "02+", label: "Năm dựng phim tự do", detail: "Đồng hành trực tiếp cùng các thương hiệu lớn" },
  { value: "100%", label: "Chuẩn tỷ lệ 9:16 & 16:9", detail: "Tối ưu cho cả TikTok, Reels và màn ảnh rộng" },
  { value: "4.9/5", label: "Đánh giá từ đối tác", detail: "Cam kết đúng tiến độ và hỗ trợ chỉnh sửa tận tâm" },
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

export const allProjects: VideoProject[] = [
  {
    "id": "realestate-01-centana",
    "title": "Phim Giới Thiệu Căn Hộ Mẫu & Trải Nghiệm Tiện Ích Đẳng Cấp",
    "client": "Dự Án Căn Hộ Centana",
    "category": "realestate",
    "categoryName": "Bất Động Sản",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "185s",
    "videoUrl": "/videos/realestate-01-centana.mp4",
    "thumbnailUrl": "/thumbnails/realestate-01-centana.jpg",
    "headline": "Phim Giới Thiệu Căn Hộ Mẫu & Trải Nghiệm Tiện Ích Đẳng Cấp",
    "description": "Dựng phim ngắn trải nghiệm không gian sống thực tế cho dự án căn hộ Centana. Xử lý đường bay flycam mượt mà, chuyển cảnh kiến trúc liền mạch và làm nổi bật các góc view đắt giá.",
    "highlights": [
      "Flycam kiến trúc mượt mà",
      "Chuyển cảnh không gian liền mạch",
      "Hình ảnh căn hộ chuẩn điện ảnh"
    ],
    "isFeatured": true
  },
  {
    "id": "realestate-02-charmora-city-cq",
    "title": "Charmora city CQ",
    "client": "Centana & Galadia Real Estate",
    "category": "realestate",
    "categoryName": "Bất Động Sản",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "58s",
    "videoUrl": "/videos/realestate-02-charmora-city-cq.mp4",
    "thumbnailUrl": "/thumbnails/realestate-02-charmora-city-cq.jpg",
    "headline": "Charmora city CQ",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Centana & Galadia Real Estate.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "realestate-03-galadia-1",
    "title": "GALADIA 1",
    "client": "Centana & Galadia Real Estate",
    "category": "realestate",
    "categoryName": "Bất Động Sản",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "92s",
    "videoUrl": "/videos/realestate-03-galadia-1.mp4",
    "thumbnailUrl": "/thumbnails/realestate-03-galadia-1.jpg",
    "headline": "GALADIA 1",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Centana & Galadia Real Estate.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fnb-04-hoa-tre-vai-fix-3",
    "title": "HOA TRỄ VAI FIX 3",
    "client": "Four Season Coffee",
    "category": "fnb",
    "categoryName": "Ẩm Thực (F&B)",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "55s",
    "videoUrl": "/videos/fnb-04-hoa-tre-vai-fix-3.mp4",
    "thumbnailUrl": "/thumbnails/fnb-04-hoa-tre-vai-fix-3.jpg",
    "headline": "HOA TRỄ VAI FIX 3",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Four Season Coffee.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fnb-05-viet-phuc",
    "title": "Cinematic B-Roll & Quảng Bá Không Gian Cà Phê Trải Nghiệm",
    "client": "Four Season Coffee",
    "category": "fnb",
    "categoryName": "Ẩm Thực (F&B)",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "73s",
    "videoUrl": "/videos/fnb-05-viet-phuc.mp4",
    "thumbnailUrl": "/thumbnails/fnb-05-viet-phuc.jpg",
    "headline": "Cinematic B-Roll & Quảng Bá Không Gian Cà Phê Trải Nghiệm",
    "description": "Ghi lại không gian trải nghiệm văn hóa Việt phục tại chuỗi quán cà phê Four Season. Tinh chỉnh ánh sáng, màu sắc điện ảnh ấm cúng kết hợp âm thanh tự nhiên mang lại cảm giác thư thái và thu hút khách ghé thăm.",
    "highlights": [
      "Màu sắc điện ảnh ấm cúng",
      "Âm thanh tự nhiên (Foley)",
      "Visual tôn vinh nét đẹp truyền thống"
    ],
    "isFeatured": true
  },
  {
    "id": "health-06-glutathione-co-tot",
    "title": "GLUTATHIONE CÓ TỐT",
    "client": "Dược Sĩ Tống Đức",
    "category": "health",
    "categoryName": "Sức Khỏe",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "62s",
    "videoUrl": "/videos/health-06-glutathione-co-tot.mp4",
    "thumbnailUrl": "/thumbnails/health-06-glutathione-co-tot.jpg",
    "headline": "GLUTATHIONE CÓ TỐT",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Dược Sĩ Tống Đức.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "health-07-vien-uong-khoe-trong-dep-ngoai",
    "title": "VIÊN UỐNG KHỎE TRONG ĐẸP NGOÀI",
    "client": "Dược Sĩ Tống Đức",
    "category": "health",
    "categoryName": "Sức Khỏe",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "125s",
    "videoUrl": "/videos/health-07-vien-uong-khoe-trong-dep-ngoai.mp4",
    "thumbnailUrl": "/thumbnails/health-07-vien-uong-khoe-trong-dep-ngoai.jpg",
    "headline": "VIÊN UỐNG KHỎE TRONG ĐẸP NGOÀI",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Dược Sĩ Tống Đức.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "health-08-dung-ton-tien-mua-glu",
    "title": "Video Giáo Dục Y Khoa Chuyên Sâu & Kể Chuyện Giữ Chân Cao",
    "client": "Dược Sĩ Tống Đức",
    "category": "health",
    "categoryName": "Sức Khỏe",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "47s",
    "videoUrl": "/videos/health-08-dung-ton-tien-mua-glu.mp4",
    "thumbnailUrl": "/thumbnails/health-08-dung-ton-tien-mua-glu.jpg",
    "headline": "Video Giáo Dục Y Khoa Chuyên Sâu & Kể Chuyện Giữ Chân Cao",
    "description": "Sản xuất chuỗi video chia sẻ kiến thức dược phẩm chuyên sâu. Thiết kế cấu trúc mở đầu (hook) 3 giây đầu tiên kích thích tò mò, lồng ghép motion graphics và phụ đề đồng bộ chuẩn xác.",
    "highlights": [
      "Hook 3 giây giữ chân",
      "Phụ đề & Motion Graphics",
      "Nội dung y khoa đáng tin cậy"
    ],
    "isFeatured": true
  },
  {
    "id": "beauty-09-1-ndln-tinhhuong-thermage-ultherapy",
    "title": "Tình Huống Trải Nghiệm Công Nghệ Trẻ Hóa Thermage & Ultherapy",
    "client": "Clinic & Beauty Care",
    "category": "beauty",
    "categoryName": "Làm Đẹp & Thẩm Mỹ",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "62s",
    "videoUrl": "/videos/beauty-09-1-ndln-tinhhuong-thermage-ultherapy.mp4",
    "thumbnailUrl": "/thumbnails/beauty-09-1-ndln-tinhhuong-thermage-ultherapy.jpg",
    "headline": "Tình Huống Trải Nghiệm Công Nghệ Trẻ Hóa Thermage & Ultherapy",
    "description": "Dựng chuỗi video tình huống thực tế cho viện thẩm mỹ công nghệ cao. Kết hợp hiệu ứng zoom kịch tính, nhịp cắt hài hước giải trí tự nhiên nhưng vẫn truyền tải trọn vẹn thông điệp liệu trình thẩm mỹ.",
    "highlights": [
      "Hiệu ứng biểu cảm trực quan",
      "Nhịp cắt tình huống hài hước",
      "Tăng tỷ lệ chuyển đổi dịch vụ"
    ],
    "isFeatured": true
  },
  {
    "id": "beauty-10-b-ndln-noi-uu-dai",
    "title": "B,NDLN NÓI ƯU ĐÃI",
    "client": "Clinic & Beauty Care",
    "category": "beauty",
    "categoryName": "Làm Đẹp & Thẩm Mỹ",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "44s",
    "videoUrl": "/videos/beauty-10-b-ndln-noi-uu-dai.mp4",
    "thumbnailUrl": "/thumbnails/beauty-10-b-ndln-noi-uu-dai.jpg",
    "headline": "B,NDLN NÓI ƯU ĐÃI",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Clinic & Beauty Care.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "logistics-11-1-fix",
    "title": "1 FIX",
    "client": "Chuỗi Cung Ứng & Vận Tải",
    "category": "logistics",
    "categoryName": "Logistics",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "30s",
    "videoUrl": "/videos/logistics-11-1-fix.mp4",
    "thumbnailUrl": "/thumbnails/logistics-11-1-fix.jpg",
    "headline": "1 FIX",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Chuỗi Cung Ứng & Vận Tải.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "logistics-12-3-fix",
    "title": "3 fix",
    "client": "Chuỗi Cung Ứng & Vận Tải",
    "category": "logistics",
    "categoryName": "Logistics",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "32s",
    "videoUrl": "/videos/logistics-12-3-fix.mp4",
    "thumbnailUrl": "/thumbnails/logistics-12-3-fix.jpg",
    "headline": "3 fix",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Chuỗi Cung Ứng & Vận Tải.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "logistics-13-8-fix",
    "title": "8 fix",
    "client": "Chuỗi Cung Ứng & Vận Tải",
    "category": "logistics",
    "categoryName": "Logistics",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "31s",
    "videoUrl": "/videos/logistics-13-8-fix.mp4",
    "thumbnailUrl": "/thumbnails/logistics-13-8-fix.jpg",
    "headline": "8 fix",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Chuỗi Cung Ứng & Vận Tải.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "events-14-a-recap-su-kien-13-nam",
    "title": "Recap Kỷ Niệm 13 Năm & Cảm Xúc Sân Khấu Widescreen",
    "client": "Nghệ Sĩ & Sự Kiện",
    "category": "events",
    "categoryName": "Nghệ Sĩ & Sự Kiện",
    "aspect": "16:9",
    "aspectLabel": "16:9 Ngang (Widescreen)",
    "duration": "77s",
    "videoUrl": "/videos/events-14-a-recap-su-kien-13-nam.mp4",
    "thumbnailUrl": "/thumbnails/events-14-a-recap-su-kien-13-nam.jpg",
    "headline": "Recap Kỷ Niệm 13 Năm & Cảm Xúc Sân Khấu Widescreen",
    "description": "Dựng phim tổng kết hành trình 13 năm đầy cảm xúc với chuẩn khung hình 16:9 Widescreen. Hòa âm phối khí nhịp nhàng với hình ảnh biểu diễn sân khấu và những khoảnh khắc hậu trường chân thực.",
    "highlights": [
      "Khung hình Widescreen 16:9",
      "Nhịp phim cảm xúc cao trào",
      "Âm thanh đồng bộ hòa âm"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-15-look-6",
    "title": "LOOK 6",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "25s",
    "videoUrl": "/videos/fashion-15-look-6.mp4",
    "thumbnailUrl": "/thumbnails/fashion-15-look-6.jpg",
    "headline": "LOOK 6",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-16-teasing-3",
    "title": "TEASING 3",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "26s",
    "videoUrl": "/videos/fashion-16-teasing-3.mp4",
    "thumbnailUrl": "/thumbnails/fashion-16-teasing-3.jpg",
    "headline": "TEASING 3",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-17-hnh1",
    "title": "Viral Lookbook Reel & Định Hình Phong Cách Thời Trang",
    "client": "Ecochic x Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "29s",
    "videoUrl": "/videos/fashion-17-hnh1.mp4",
    "thumbnailUrl": "/thumbnails/fashion-17-hnh1.jpg",
    "headline": "Viral Lookbook Reel & Định Hình Phong Cách Thời Trang",
    "description": "Chiến dịch lookbook thời trang hợp tác cùng nghệ sĩ Hồ Ngọc Hà. Xử lý nhịp cắt chuyển động dứt khoát, bắt nhịp âm nhạc thời thượng và tối ưu tỷ lệ khung hình 9:16 cho nền tảng TikTok & Instagram Reels.",
    "highlights": [
      "Nhịp dựng viral 9:16",
      "Color grading cao cấp",
      "Chiến dịch thương hiệu lớn"
    ],
    "isFeatured": true
  },
  {
    "id": "fashion-18-hnh2",
    "title": "HNH2",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "30s",
    "videoUrl": "/videos/fashion-18-hnh2.mp4",
    "thumbnailUrl": "/thumbnails/fashion-18-hnh2.jpg",
    "headline": "HNH2",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-19-hnh3",
    "title": "HNH3",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "35s",
    "videoUrl": "/videos/fashion-19-hnh3.mp4",
    "thumbnailUrl": "/thumbnails/fashion-19-hnh3.jpg",
    "headline": "HNH3",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "realestate-20-galadia-2",
    "title": "GALADIA 2",
    "client": "Centana & Galadia Real Estate",
    "category": "realestate",
    "categoryName": "Bất Động Sản",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "99s",
    "videoUrl": "/videos/realestate-20-galadia-2.mp4",
    "thumbnailUrl": "/thumbnails/realestate-20-galadia-2.jpg",
    "headline": "GALADIA 2",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Centana & Galadia Real Estate.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "realestate-21-ha-tang",
    "title": "HẠ TẦNG",
    "client": "Centana & Galadia Real Estate",
    "category": "realestate",
    "categoryName": "Bất Động Sản",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "212s",
    "videoUrl": "/videos/realestate-21-ha-tang.mp4",
    "thumbnailUrl": "/thumbnails/realestate-21-ha-tang.jpg",
    "headline": "HẠ TẦNG",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Centana & Galadia Real Estate.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fnb-22-free-de-xe-fix",
    "title": "FREE ĐỂ XE FIX",
    "client": "Four Season Coffee",
    "category": "fnb",
    "categoryName": "Ẩm Thực (F&B)",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "37s",
    "videoUrl": "/videos/fnb-22-free-de-xe-fix.mp4",
    "thumbnailUrl": "/thumbnails/fnb-22-free-de-xe-fix.jpg",
    "headline": "FREE ĐỂ XE FIX",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Four Season Coffee.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fnb-23-quan-nhu-nha-hoang-fixx",
    "title": "QUÁN NHƯ NHÀ HOANG FIXX",
    "client": "Four Season Coffee",
    "category": "fnb",
    "categoryName": "Ẩm Thực (F&B)",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "40s",
    "videoUrl": "/videos/fnb-23-quan-nhu-nha-hoang-fixx.mp4",
    "thumbnailUrl": "/thumbnails/fnb-23-quan-nhu-nha-hoang-fixx.jpg",
    "headline": "QUÁN NHƯ NHÀ HOANG FIXX",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Four Season Coffee.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "health-24-xu-ly-cac-tinh-trang-da",
    "title": "XỬ LÝ CÁC TÌNH TRẠNG DA",
    "client": "Dược Sĩ Tống Đức",
    "category": "health",
    "categoryName": "Sức Khỏe",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "32s",
    "videoUrl": "/videos/health-24-xu-ly-cac-tinh-trang-da.mp4",
    "thumbnailUrl": "/thumbnails/health-24-xu-ly-cac-tinh-trang-da.jpg",
    "headline": "XỬ LÝ CÁC TÌNH TRẠNG DA",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Dược Sĩ Tống Đức.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "beauty-25-scar-cauchuyen1-ver1",
    "title": "Scar CauChuyen1 ver1",
    "client": "Clinic & Beauty Care",
    "category": "beauty",
    "categoryName": "Làm Đẹp & Thẩm Mỹ",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "44s",
    "videoUrl": "/videos/beauty-25-scar-cauchuyen1-ver1.mp4",
    "thumbnailUrl": "/thumbnails/beauty-25-scar-cauchuyen1-ver1.jpg",
    "headline": "Scar CauChuyen1 ver1",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Clinic & Beauty Care.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "logistics-26-10-fix",
    "title": "10 fix",
    "client": "Chuỗi Cung Ứng & Vận Tải",
    "category": "logistics",
    "categoryName": "Logistics",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "42s",
    "videoUrl": "/videos/logistics-26-10-fix.mp4",
    "thumbnailUrl": "/thumbnails/logistics-26-10-fix.jpg",
    "headline": "10 fix",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Chuỗi Cung Ứng & Vận Tải.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "logistics-27-2-fix",
    "title": "2 fix",
    "client": "Chuỗi Cung Ứng & Vận Tải",
    "category": "logistics",
    "categoryName": "Logistics",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "31s",
    "videoUrl": "/videos/logistics-27-2-fix.mp4",
    "thumbnailUrl": "/thumbnails/logistics-27-2-fix.jpg",
    "headline": "2 fix",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Chuỗi Cung Ứng & Vận Tải.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "logistics-28-4-fix",
    "title": "4 fix",
    "client": "Chuỗi Cung Ứng & Vận Tải",
    "category": "logistics",
    "categoryName": "Logistics",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "41s",
    "videoUrl": "/videos/logistics-28-4-fix.mp4",
    "thumbnailUrl": "/thumbnails/logistics-28-4-fix.jpg",
    "headline": "4 fix",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Chuỗi Cung Ứng & Vận Tải.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "events-29-ab-recap-c-phuong",
    "title": "AB. recap c Phương",
    "client": "Wedding & Artist Event",
    "category": "events",
    "categoryName": "Nghệ Sĩ & Sự Kiện",
    "aspect": "16:9",
    "aspectLabel": "16:9 Ngang (Widescreen)",
    "duration": "84s",
    "videoUrl": "/videos/events-29-ab-recap-c-phuong.mp4",
    "thumbnailUrl": "/thumbnails/events-29-ab-recap-c-phuong.jpg",
    "headline": "AB. recap c Phương",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Wedding & Artist Event.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "events-30-10-follow-co-dau-chu-re",
    "title": "Phóng Sự Cưới & Khoảnh Khắc Nghệ Thuật (Follow Cô Dâu Chú Rể)",
    "client": "Wedding & Artist Event",
    "category": "events",
    "categoryName": "Nghệ Sĩ & Sự Kiện",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "36s",
    "videoUrl": "/videos/events-30-10-follow-co-dau-chu-re.mp4",
    "thumbnailUrl": "/thumbnails/events-30-10-follow-co-dau-chu-re.jpg",
    "headline": "Phóng Sự Cưới & Khoảnh Khắc Nghệ Thuật (Follow Cô Dâu Chú Rể)",
    "description": "Ghi lại trọn vẹn những khoảnh khắc xúc động và thiêng liêng nhất trong ngày trọng đại. Tinh chỉnh màu sắc trong trẻo chuẩn điện ảnh, nhịp cắt giàu cảm xúc kết hợp hòa âm lắng đọng.",
    "highlights": [
      "Màu phim trong trẻo chuẩn cảm xúc",
      "Bắt trọn khoảnh khắc vàng tự nhiên",
      "Định dạng dọc 9:16 tối ưu Reels/TikTok"
    ],
    "isFeatured": true
  },
  {
    "id": "events-31-4-follow-chu-re",
    "title": "Khoảnh Khắc Chuẩn Bị Của Chú Rể",
    "client": "Wedding & Artist Event",
    "category": "events",
    "categoryName": "Nghệ Sĩ & Sự Kiện",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "34s",
    "videoUrl": "/videos/events-31-4-follow-chu-re.mp4",
    "thumbnailUrl": "/thumbnails/events-31-4-follow-chu-re.jpg",
    "headline": "Khoảnh Khắc Chuẩn Bị Của Chú Rể",
    "description": "Video ngắn ghi lại cảm xúc và phong thái lịch lãm của chú rể trước giờ đón dâu với nhịp cắt hiện đại và màu sắc sắc nét.",
    "highlights": [
      "Màu sắc điện ảnh",
      "Nhịp cắt dứt khoát",
      "Chất lượng 9:16 sắc nét"
    ],
    "isFeatured": false
  },
  {
    "id": "events-32-8-follow-cd-cr-nha-gai",
    "title": "8. follow CD CR (nhà gái)",
    "client": "Wedding & Artist Event",
    "category": "events",
    "categoryName": "Nghệ Sĩ & Sự Kiện",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "31s",
    "videoUrl": "/videos/events-32-8-follow-cd-cr-nha-gai.mp4",
    "thumbnailUrl": "/thumbnails/events-32-8-follow-cd-cr-nha-gai.jpg",
    "headline": "8. follow CD CR (nhà gái)",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Wedding & Artist Event.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "events-33-9-nha-trai-toi",
    "title": "9. nhà trai tới",
    "client": "Wedding & Artist Event",
    "category": "events",
    "categoryName": "Nghệ Sĩ & Sự Kiện",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "33s",
    "videoUrl": "/videos/events-33-9-nha-trai-toi.mp4",
    "thumbnailUrl": "/thumbnails/events-33-9-nha-trai-toi.jpg",
    "headline": "9. nhà trai tới",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Wedding & Artist Event.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-34-look-4",
    "title": "LOOK 4",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "50s",
    "videoUrl": "/videos/fashion-34-look-4.mp4",
    "thumbnailUrl": "/thumbnails/fashion-34-look-4.jpg",
    "headline": "LOOK 4",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-35-look-5",
    "title": "LOOK 5",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "33s",
    "videoUrl": "/videos/fashion-35-look-5.mp4",
    "thumbnailUrl": "/thumbnails/fashion-35-look-5.jpg",
    "headline": "LOOK 5",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-36-teasing-1-fix",
    "title": "TEASING 1 FIX",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "42s",
    "videoUrl": "/videos/fashion-36-teasing-1-fix.mp4",
    "thumbnailUrl": "/thumbnails/fashion-36-teasing-1-fix.jpg",
    "headline": "TEASING 1 FIX",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-37-teasing-2",
    "title": "teasing 2",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "37s",
    "videoUrl": "/videos/fashion-37-teasing-2.mp4",
    "thumbnailUrl": "/thumbnails/fashion-37-teasing-2.jpg",
    "headline": "teasing 2",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  },
  {
    "id": "fashion-38-hnh-th-2",
    "title": "HNH-TH 2",
    "client": "Ecochic x Quỳnh Trần / Hồ Ngọc Hà",
    "category": "fashion",
    "categoryName": "Thời Trang",
    "aspect": "9:16",
    "aspectLabel": "9:16 Dọc (Reels/TikTok)",
    "duration": "28s",
    "videoUrl": "/videos/fashion-38-hnh-th-2.mp4",
    "thumbnailUrl": "/thumbnails/fashion-38-hnh-th-2.jpg",
    "headline": "HNH-TH 2",
    "description": "Sản phẩm video thực tế được dựng và hoàn thiện bởi Thảo Quyên cho khách hàng Ecochic x Quỳnh Trần / Hồ Ngọc Hà.",
    "highlights": [
      "Chuẩn màu sắc",
      "Nhịp cắt dứt khoát",
      "Chất lượng cao"
    ],
    "isFeatured": false
  }
];

export const featuredProjects: VideoProject[] = allProjects.filter((p) => p.isFeatured);
