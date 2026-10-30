"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { YouTubeVideo } from "@/lib/types";

type Props = {
  initialVideo?: YouTubeVideo | null;
};

export function VideoModal({ initialVideo }: Props) {
  const [open, setOpen] = useState(Boolean(initialVideo));
  const [video, setVideo] = useState<YouTubeVideo | null>(initialVideo ?? null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!initialVideo) return;
    setVideo(initialVideo);
    setOpen(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [initialVideo]);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    }
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  if (!open || !video) return null;

  const embedUrl = `https://www.youtube.com/embed/${video.id}?rel=0`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={close}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={close}
        className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-silver-200 transition hover:border-gold-500/60 hover:text-gold-300"
        aria-label="Close video"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gold-500/25 bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="flex items-start justify-between gap-4 p-5">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-gold-400 uppercase">
              {video.isShort ? "Short • vertical" : "Music video"}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{video.title}</h3>
            <p className="mt-1 text-xs text-silver-400">{formatDate(video.publishedAt)}</p>
          </div>
          <a
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-500/60 bg-gold-500/10 px-4 py-2 text-xs font-bold tracking-[0.14em] text-gold-300 uppercase transition hover:bg-gold-500/20"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export function useVideoModal() {
  const [selected, setSelected] = useState<YouTubeVideo | null>(null);

  const open = useCallback((v: YouTubeVideo) => setSelected(v), []);
  const close = useCallback(() => setSelected(null), []);

  const modal = <VideoModal initialVideo={selected} />;

  return { selected, open, close, modal };
}
