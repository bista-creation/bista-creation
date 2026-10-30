"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useVideoModal } from "@/components/video-modal";
import type { YouTubeVideo } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Filter = "all" | "full" | "shorts";

const filters = [
  { id: "all", label: "All releases" },
  { id: "full", label: "Music videos" },
  { id: "shorts", label: "Shorts & reels" },
] as const;

export function WorkGallery({ videos }: { videos: YouTubeVideo[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const { open, modal } = useVideoModal();

  const sorted = videos
    .slice()
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const fullVideos = sorted.filter((video) => !video.isShort);
  const shorts = sorted.filter((video) => video.isShort);
  const visible = filter === "all" ? sorted : filter === "full" ? fullVideos : shorts;

  const counts: Record<Filter, number> = {
    all: sorted.length,
    full: fullVideos.length,
    shorts: shorts.length,
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Filter work" className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase transition ${
                filter === item.id
                  ? "border-gold-300 bg-gold-400 text-ink-950 shadow-[0_10px_30px_-12px_rgba(212,175,55,0.7)]"
                  : "border-white/12 bg-white/5 text-silver-300 hover:border-gold-400/40 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`ml-2 text-[10px] tabular-nums ${
                  filter === item.id ? "text-ink-900/70" : "text-silver-500"
                }`}
              >
                {counts[item.id]}
              </span>
            </button>
          ))}
        </div>
        <p className="text-xs tracking-[0.16em] text-silver-500 uppercase">
          {visible.length} {visible.length === 1 ? "release" : "releases"}
        </p>
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => open(video)}
              className="glass liquid-edge sheen group overflow-hidden rounded-3xl text-left transition duration-500 hover:-translate-y-1 hover:border-gold-400/35"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  loading="lazy"
                  unoptimized
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent opacity-85" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/20 transition group-hover:bg-ink-950/5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-ink-950 shadow-[0_16px_40px_-10px_rgba(212,175,55,0.7)] transition duration-500 group-hover:scale-110 group-hover:bg-gold-300">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-ink-950/65 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-gold-200 uppercase backdrop-blur-md">
                  {video.isShort ? "Short" : "Music video"}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                  {formatDate(video.publishedAt)}
                </p>
                <h3 className="mt-2 line-clamp-2 text-base leading-snug font-semibold text-white">
                  {video.title}
                </h3>
                <p className="mt-2.5 text-xs text-silver-500">
                  Powered by Suno AI Pro &amp; Google Flow
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="glass mt-8 rounded-3xl p-12 text-center">
          <p className="text-display text-xl font-semibold text-white">
            Nothing here yet — the next drop is in the mix.
          </p>
          <p className="mt-3 text-sm text-silver-400">
            New music videos and shorts land on the YouTube channel first.
          </p>
        </div>
      )}

      {modal}
    </div>
  );
}
