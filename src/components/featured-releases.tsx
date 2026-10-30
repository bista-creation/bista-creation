"use client";

import { useVideoModal } from "@/components/video-modal";
import { formatDate } from "@/lib/utils";
import type { YouTubeVideo } from "@/lib/types";

type Props = {
  videos: YouTubeVideo[];
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white text-white" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function FeaturedReleases({ videos }: Props) {
  const { open, modal } = useVideoModal();

  return (
    <section id="releases" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">
              Selected Work
            </p>
            <h2 className="mt-4 text-display text-3xl font-bold text-white sm:text-5xl">
              Stories that hit hard.
            </h2>
            <p className="mt-4 text-silver-300">
              Cinematic AI music videos and shorts from Bista Creation — Nepali soul,
              global sound, next-gen cinema.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@BistaCreationStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/60 bg-gold-500/10 px-5 py-3 text-xs font-bold tracking-[0.16em] text-gold-300 uppercase transition hover:bg-gold-500/20"
          >
            All releases
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => open(v)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 text-left transition hover:border-gold-500/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/30 transition group-hover:bg-ink-950/10">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 shadow-[0_10px_40px_rgba(230,33,67,0.45)] transition group-hover:scale-110 group-hover:bg-red-500">
                    <PlayIcon />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-semibold tracking-[0.28em] text-gold-400 uppercase">
                  {v.isShort ? "Short" : "Music video"} • {formatDate(v.publishedAt)}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">{v.title}</h3>
                <p className="mt-2 text-xs text-silver-400">Powered by Suno AI Pro & Google Flow</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {modal}
    </section>
  );
}
