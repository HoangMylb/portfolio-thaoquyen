"use client";

import { useEffect, useRef, useState } from "react";
import { X, CheckCircle2, Zap } from "lucide-react";
import type { VideoProject } from "@/data/portfolioData";
import { isVideoCached } from "@/utils/videoCache";

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cached, setCached] = useState(false);

  useEffect(() => {
    if (!project) return;

    // Check if video is in cache
    isVideoCached(project.videoUrl).then(setCached);

    // Escape listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Lock body scroll
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#0a0d0b]/95"
      onClick={onClose}
    >
      <div
        data-ui="modal-content"
        className={`relative w-full ${
          isVertical ? "max-w-md max-h-[92vh]" : "max-w-4xl max-h-[90vh]"
        } bg-[var(--surface)] rounded-xl overflow-hidden flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[var(--surface-card)]">
          <div className="flex items-center gap-2.5 truncate pr-3">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--accent)]">
              {project.categoryName}
            </span>
            <span className="text-sm font-semibold text-[var(--ink)] truncate">
              {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng video"
            className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[300px]">
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
            onPlay={() => {
              setCached(true);
            }}
          />
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-[var(--surface)] space-y-2">
          <div className="flex items-center justify-between text-xs text-[var(--muted)]">
            <span className="font-medium text-[var(--ink)]">
              {project.title}
            </span>
            <span className="flex-shrink-0 ml-2">Thời lượng: {project.duration}</span>
          </div>

          <div className="flex items-center justify-between text-xs pt-2">
            <div className="flex items-center gap-1.5 text-[var(--muted)]">
              {cached ? (
                <>
                  <CheckCircle2 size={14} className="text-[var(--accent)]" />
                  <span className="text-[var(--accent)] font-medium">
                    Đã lưu vào bộ nhớ cache thiết bị (0ms tải lại)
                  </span>
                </>
              ) : (
                <>
                  <Zap size={14} className="text-[var(--accent)]" />
                  <span>Đang tải và tự động lưu cache cho các lần sau</span>
                </>
              )}
            </div>

            <span className="text-[var(--muted)] hidden sm:inline">
              Khung hình: {project.aspectLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
