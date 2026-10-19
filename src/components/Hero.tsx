"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { personal } from "@/data/portfolioData";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <header
      ref={containerRef}
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-16"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Navigation */}
      <nav className="container-custom flex items-center justify-between z-20 gap-4">
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 flex-shrink-0"
        >
          <span>{personal.fullName}</span>
          <span className="w-2 h-2 rounded-full bg-[var(--pink)] flex-shrink-0" />
        </a>

        <div className="flex items-center gap-5 sm:gap-8 text-sm sm:text-base font-medium text-[var(--ink-secondary)]">
          <a href="#about" className="hover:text-[var(--accent)] transition-colors hidden sm:block">
            Giới Thiệu
          </a>
          <a href="#projects" className="hover:text-[var(--accent)] transition-colors">
            Tác Phẩm
          </a>
          <a href="#ai-workflow" className="hover:text-[var(--accent)] transition-colors hidden sm:block">
            Quy Trình AI
          </a>
          <a
            href="#contact"
            className="text-[var(--accent)] font-semibold hover:text-[var(--accent-hover)] transition-colors"
          >
            Liên Hệ
          </a>
        </div>
      </nav>

      {/* Hero Main Content */}
      <div className="container-custom my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bold Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] leading-[1.08] animate-enter-1">
              Kể chuyện bằng hình ảnh.
            </h1>

            <p className="text-lg md:text-xl text-[var(--ink)] max-w-xl font-normal leading-relaxed pt-2 animate-enter-2">
              <span className="font-semibold text-[var(--accent)]">{personal.fullName}</span> — Freelance Video Editor & Visual Creator. Hơn 2 năm kinh nghiệm thực chiến dựng phim chuyên nghiệp cho các thương hiệu.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 animate-enter-3">
            <a href="#projects" className="btn-solid">
              Khám Phá Tác Phẩm
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Core Niches List */}
          <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-[var(--muted)] font-medium animate-enter-3">
            <span>Thời Trang</span>
            <span className="text-[var(--pink)]">•</span>
            <span>Sức Khỏe</span>
            <span className="text-[var(--pink)]">•</span>
            <span>Làm Đẹp</span>
            <span className="text-[var(--pink)]">•</span>
            <span>Ẩm Thực</span>
            <span className="text-[var(--pink)]">•</span>
            <span>Bất Động Sản</span>
          </div>
        </div>

        {/* Right Column: Real Portrait of Trịnh Thảo Quyên */}
        <div className="lg:col-span-5 relative animate-enter-4">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-[var(--surface-card)]">
            <Image
              src="/ThaoQuyen/ThaoQuyen.png"
              alt="Chân dung Trịnh Thảo Quyên - Video Editor"
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[var(--surface)] p-4 rounded-xl flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-base font-bold text-[var(--ink)] block">
                  {personal.fullName}
                </span>
                <span className="text-sm text-[var(--muted)] block">
                  Freelance Video Editor
                </span>
              </div>
              <span className="px-3 py-1 rounded text-sm font-semibold bg-[var(--accent-soft)] text-[var(--accent)] flex-shrink-0 ml-2">
                2+ năm kinh nghiệm
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Navigation Cue */}
      <div className="container-custom flex items-center justify-end">
        <a href="#about" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2">
          Cuộn để khám phá
          <ArrowDown size={14} />
        </a>
      </div>
    </header>
  );
}
