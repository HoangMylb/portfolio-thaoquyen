"use client";

import { aiWorkflow } from "@/data/portfolioData";

export default function AiWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="py-28 md:py-36"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-2">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)]">
              Quy trình sản xuất video ứng dụng AI.
            </h2>
          </div>

          <p className="lg:col-span-5 text-base text-[var(--muted)] leading-relaxed">
            AI đóng vai trò mở rộng tư liệu hình ảnh và tự động hóa khâu tiền kỳ, tạo điều kiện tập trung 100% vào nhịp cắt và cảm xúc người xem.
          </p>
        </div>

        {/* 4-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiWorkflow.map((item, idx) => (
            <div
              key={item.step}
              className="editorial-card p-8 flex flex-col justify-between space-y-8 bg-[var(--surface)] hover:bg-[var(--surface-card)] transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-2xl font-bold text-[var(--ink)]">
                    Giai đoạn
                  </span>
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[var(--ink)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-[var(--muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="text-sm font-medium text-[var(--muted)] pt-4">
                Bước {idx + 1} trên 4
              </div>
            </div>
          ))}
        </div>

        {/* Efficiency Comparison Statement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-[var(--surface)] rounded">
            <span className="text-sm font-semibold text-[var(--accent)] block mb-2">
              Thời Gian Bàn Giao
            </span>
            <p className="text-lg font-bold text-[var(--ink)] mb-1">
              Tiết kiệm 60% thời gian tìm footage
            </p>
            <p className="text-sm text-[var(--muted)]">
              AI hỗ trợ phân loại source và tìm điểm cắt vàng tự động.
            </p>
          </div>

          <div className="p-6 bg-[var(--surface)] rounded">
            <span className="text-sm font-semibold text-[var(--accent)] block mb-2">
              Chất Lượng Kể Chuyện
            </span>
            <p className="text-lg font-bold text-[var(--ink)] mb-1">
              Tối đa hóa tỷ lệ giữ chân
            </p>
            <p className="text-sm text-[var(--muted)]">
              Cấu trúc hook 3s đầu và nhịp dựng dựa trên hành vi người xem.
            </p>
          </div>

          <div className="p-6 bg-[var(--surface)] rounded">
            <span className="text-sm font-semibold text-[var(--accent)] block mb-2">
              Màu Sắc & Âm Thanh
            </span>
            <p className="text-lg font-bold text-[var(--ink)] mb-1">
              Chuẩn màu điện ảnh chuyên nghiệp
            </p>
            <p className="text-sm text-[var(--muted)]">
              Đồng bộ color space và xử lý âm thanh cân bằng trên mọi thiết bị.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
