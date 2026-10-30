"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { YouTubeVideo } from "@/lib/types";

type Props = {
  video: YouTubeVideo;
  onClose: () => void;
};

export function VideoModal({ video, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const embedUrl = `https://www.youtube.com/embed/${video.id}?rel=0`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-silver-200 transition hover:border-gold-500/60 hover:text-gold-300"
        aria-label="Close video"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gold-500/25 bg-ink-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
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

  const open = useCallback((video: YouTubeVideo) => setSelected(video), []);
  const close = useCallback(() => setSelected(null), []);

  const modal = selected ? (
    <VideoModal key={selected.id} video={selected} onClose={close} />
  ) : null;

  return { selected, open, close, modal };
}
