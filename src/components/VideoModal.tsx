"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Film, ArrowUpRight } from "lucide-react";
import type { VideoProject } from "@/data/portfolioData";
import { personal } from "@/data/portfolioData";

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!project) return;
    setHasError(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const isVertical = project.aspect === "9:16";

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-ui="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        data-ui="modal-content"
        className={`relative w-full ${
          isVertical ? "max-w-md max-h-[92vh]" : "max-w-4xl max-h-[90vh]"
        } bg-[var(--surface)] rounded-2xl overflow-hidden flex flex-col shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[var(--surface-card)]">
          <div className="flex items-center gap-3 truncate pr-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--surface)] text-[var(--accent)]">
              {project.categoryName}
            </span>
            <span className="text-sm font-bold text-[var(--ink)] truncate">
              {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng video"
            className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface)] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player or High-Res Poster Frame */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[320px]">
          {!hasError ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.thumbnailUrl}
              controls
              autoPlay
              playsInline
              preload="auto"
              className={`w-full ${
                isVertical ? "max-h-[70vh] object-contain" : "aspect-video object-contain"
              }`}
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center min-h-[360px] p-6 text-center">
              <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover opacity-35"
              />
              <div className="relative z-10 space-y-4 max-w-sm">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center mx-auto">
                  <Film size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Khung hình trích xuất từ video thực tế. Liên hệ trực tiếp để xem toàn bộ bản dựng hoàn chỉnh (Full HD / 4K).
                  </p>
                </div>
                <a
                  href={`https://zalo.me/${personal.contact.zalo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid text-xs py-2 px-4 inline-flex items-center gap-1.5"
                >
                  Nhận Video Demo Qua Zalo
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-5 bg-[var(--surface)] space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold text-[var(--ink)] truncate">
              {project.title}
            </span>
            <span className="text-xs font-semibold text-[var(--muted)] flex-shrink-0 ml-3">
              Thời lượng: {project.duration}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-[var(--muted)] pt-1">
            <span>Dựng bởi Trịnh Thảo Quyên</span>
            <span>Khung hình: {project.aspectLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
