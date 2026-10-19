"use client";

import { personal, niches, stats } from "@/data/portfolioData";

export default function AboutBento() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container-custom space-y-20">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)]">
              Cấu trúc kể chuyện và nhịp điệu hình ảnh.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[var(--ink-secondary)] leading-relaxed">
            <p>
              Tôi là {personal.fullName}, hoạt động với tư cách Freelance Video Editor chuyên sâu cho các thương hiệu định vị cao cấp. Mỗi khung hình đều được tính toán kỹ lưỡng về nhịp cắt, màu sắc và âm thanh để tối đa hóa thời gian xem trung bình.
            </p>
            <p className="text-base text-[var(--muted)]">
              Sự kết hợp giữa tư duy biên tập điện ảnh truyền thống và công nghệ AI giúp quy trình sản xuất diễn ra nhanh chóng, sáng tạo và khác biệt rõ nét so với các video template đại trà.
            </p>
          </div>
        </div>

        {/* 6 Core Focus Niches */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
              Lĩnh Vực Trọng Tâm
            </h3>
            <span className="text-sm font-medium text-[var(--muted)]">
              Định dạng tối ưu 9:16 & 16:9
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((niche) => (
              <div
                key={niche.id}
                className="editorial-card p-8 flex flex-col justify-between space-y-6 bg-[var(--surface)] hover:bg-[var(--surface-card)] transition-colors rounded-2xl"
              >
                <div>
                  <span className="text-sm font-semibold text-[var(--accent)] px-3 py-1 rounded-md bg-[var(--accent-soft)] inline-block mb-4">
                    {niche.label}
                  </span>
                  <h4 className="text-xl font-bold text-[var(--ink)]">
                    {niche.label}
                  </h4>
                </div>

                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {niche.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Statistics Grid */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold tracking-tight text-[var(--ink)]">
            Hiệu Suất Thực Chiến
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2 p-6 rounded-2xl bg-[var(--surface)]">
                <span className="text-3xl md:text-4xl font-bold text-[var(--accent)] tracking-tight block">
                  {s.value}
                </span>
                <span className="text-base font-semibold text-[var(--ink)] block">
                  {s.label}
                </span>
                <span className="text-sm text-[var(--muted)] block">
                  {s.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
