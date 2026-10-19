"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, FolderOpen } from "lucide-react";
import { allProjects, featuredProjects, type VideoProject } from "@/data/portfolioData";
import { prefetchVideo } from "@/utils/videoCache";
import VideoModal from "./VideoModal";

const CATEGORIES = [
  { id: "fashion", label: "Thời Trang" },
  { id: "health", label: "Sức Khỏe" },
  { id: "beauty", label: "Làm Đẹp" },
  { id: "fnb", label: "Ẩm Thực" },
  { id: "realestate", label: "Bất Động Sản" },
  { id: "events", label: "Nghệ Sĩ & Cưới" },
  { id: "logistics", label: "Logistics" },
];

export default function ProjectsShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)]">
              Dự án video thực tế đã sản xuất.
            </h2>
          </div>

          <p className="text-base text-[var(--muted)] max-w-xl leading-relaxed">
            Có kinh nghiệm freelance video editor 2 năm về các mảng thời trang, sức khỏe, làm đẹp, f&b, bất động sản,... và cộng tác với 1 số thương hiệu & cá nhân như Quỳnh Trần Daily, Dược sĩ Tống Đức, ca sĩ Akira Phan, mắt kính Anna Akiraphan, Chuỗi Coffee Four Season,...
          </p>
        </div>

        {/* Featured Showcase (6 Top Curated Campaigns) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
              Chiến Dịch Tiêu Biểu
            </h3>
            <span className="text-sm font-medium text-[var(--muted)]">
              6 dự án trọng điểm
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedVideo(project)}
                onMouseEnter={() => prefetchVideo(project.videoUrl)}
                className="editorial-card group cursor-pointer overflow-hidden flex flex-col justify-between bg-[var(--surface)] hover:bg-[var(--surface-card)] transition-colors duration-300"
              >
                {/* Real Video Thumbnail Container */}
                <div className="relative aspect-[9/12] w-full overflow-hidden bg-[var(--surface-card)]">
                  <Image
                    src={project.thumbnailUrl}
                    alt={`Khung hình video thực tế ${project.client}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Scrim overlay */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-sm font-semibold px-3 py-1 bg-[var(--surface)] text-[var(--accent)] rounded-md">
                      {project.categoryName}
                    </span>
                    <span className="text-sm font-medium px-2.5 py-1 bg-[var(--surface)] text-[var(--ink-secondary)] rounded-md">
                      {project.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                  </div>

                  {/* Bottom Aspect Badge */}
                  <div className="absolute bottom-3 left-3 pointer-events-none">
                    <span className="text-sm font-medium px-3 py-1 bg-[var(--surface)] text-[var(--muted)] rounded-md">
                      {project.aspectLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4 min-w-0">
                  <div className="space-y-2 min-w-0">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <h4 className="text-lg font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors truncate">
                        {project.client}
                      </h4>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                      />
                    </div>

                    <p className="text-base font-semibold text-[var(--accent)] line-clamp-1">
                      {project.headline}
                    </p>

                    <p className="text-base text-[var(--ink-secondary)] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-sm text-[var(--pink-ink)] bg-[var(--pink-pastel)] px-3 py-1 rounded-md font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Curated Showcase: 2 Videos per Category */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--ink)]">
                Tác Phẩm Tiêu Biểu Theo Từng Lĩnh Vực
              </h3>
              <p className="text-base text-[var(--muted)] pt-1">
                Tuyển chọn 2 video tiêu biểu cho mỗi lĩnh vực chuyên môn (Thời Trang, Sức Khỏe, Làm Đẹp, F&B, BĐS, Nghệ Sĩ, Logistics)
              </p>
            </div>
          </div>

          {/* 14 Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {CATEGORIES.flatMap((cat) =>
              allProjects.filter((p) => p.category === cat.id && p.aspect === "9:16").slice(0, 2)
            ).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo(project)}
                onMouseEnter={() => prefetchVideo(project.videoUrl)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-[var(--surface)] hover:bg-[var(--surface-card)] transition-colors duration-200 flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div
                  className={`relative w-full ${
                    project.aspect === "9:16" ? "aspect-[9/16]" : "aspect-[16/9]"
                  } overflow-hidden bg-[var(--surface-card)]`}
                >
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 14vw"
                  />

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center">
                      <Play size={18} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[var(--surface)]/90 rounded text-xs font-semibold text-[var(--ink)]">
                    {project.duration}
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[var(--surface)]/90 rounded text-xs font-semibold text-[var(--accent)]">
                    {project.categoryName}
                  </div>
                </div>

                {/* Meta details */}
                <div className="p-3 space-y-1 min-w-0">
                  <div className="text-xs font-bold text-[var(--accent)] truncate">
                    {project.client.replace(/ x .*/, "")}
                  </div>
                  <div className="text-xs font-medium text-[var(--ink)] truncate">
                    {project.title}
                  </div>
                  <div className="flex items-center justify-between text-xs text-[var(--muted)] pt-0.5">
                    <span>{project.aspect}</span>
                    <span className="text-[var(--pink-ink)] font-semibold">Xem Video</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Drive Full Archive CTA Banner */}
        <div className="p-8 md:p-12 rounded-2xl bg-[var(--surface-card)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--pink-pastel)] text-[var(--pink-ink)] text-sm font-semibold">
              <FolderOpen size={16} />
              <span>Kho Video Gốc Dung Lượng Cao</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-[var(--ink)]">
              Khám Phá Toàn Bộ Hàng Trăm Video Đầy Đủ (4K & Full HD)
            </h4>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Do giới hạn dung lượng tải của trang web, toàn bộ kho sản phẩm video hoàn chỉnh với số lượng phong phú và chất lượng gốc sắc nét nhất được lưu trữ trực tiếp tại Google Drive. Mời quý khách hàng và đối tác truy cập để trải nghiệm trọn vẹn toàn bộ các dự án.
            </p>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1hWIl5NPaJtCxKWni78beIPxgM2DuVfxK"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid text-center flex-shrink-0 text-base py-4 px-8 inline-flex items-center gap-3 whitespace-nowrap"
          >
            <span>Mở Kho Video Google Drive</span>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        project={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
