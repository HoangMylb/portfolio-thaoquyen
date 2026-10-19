"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { personal } from "@/data/portfolioData";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="py-28 md:py-36"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container-custom space-y-20">
        {/* Main CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink)] leading-[1.1]">
              Sẵn sàng kể câu chuyện thương hiệu của bạn?
            </h2>
            <p className="text-lg md:text-xl text-[var(--ink-secondary)] max-w-xl font-normal leading-relaxed pt-2">
              Dù là một video reel ngắn định hình phong cách hay cả một chiến dịch ra mắt sản phẩm, Thảo Quyên luôn sẵn sàng lắng nghe và hiện thực hóa ý tưởng của bạn.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            <a
              href={`https://zalo.me/${personal.contact.zalo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid text-center w-full justify-between"
            >
              <span>Nhắn Zalo Trực Tiếp</span>
              <MessageCircle size={18} />
            </a>

            <a
              href={`tel:${personal.contact.phone}`}
              className="btn-outline text-center w-full justify-between"
            >
              <span>Gọi Điện: {personal.contact.phone}</span>
              <Phone size={18} />
            </a>

            <a
              href={`mailto:${personal.contact.email}`}
              className="btn-outline text-center w-full justify-between"
            >
              <span>Gửi Email Trao Đổi</span>
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-[var(--accent)]">
              Khu Vực Làm Việc
            </span>
            <p className="text-xl font-bold text-[var(--ink)]">
              Việt Nam • Làm Việc Từ Xa (Remote)
            </p>
            <p className="text-sm text-[var(--muted)]">
              Nhận dự án trên toàn quốc và quốc tế
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-sm font-semibold text-[var(--accent)]">
              Điện Thoại & Zalo
            </span>
            <p className="text-xl font-bold text-[var(--ink)]">
              {personal.contact.phone}
            </p>
            <p className="text-sm text-[var(--muted)]">
              Phản hồi nhanh trong ngày làm việc
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-sm font-semibold text-[var(--accent)]">
              Email Trực Tiếp
            </span>
            <p className="text-xl font-bold text-[var(--ink)]">
              {personal.contact.email}
            </p>
            <p className="text-sm text-[var(--muted)]">
              Gửi brief và kịch bản chi tiết qua email
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-[var(--muted)] gap-4">
          <p>© 2025 {personal.fullName} — Freelance Video Editor & Visual Creator</p>
          <p>Tất cả video và khung hình là sản phẩm thực tế dựng bởi Trịnh Thảo Quyên.</p>
        </div>
      </div>
    </footer>
  );
}
