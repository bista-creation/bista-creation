"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useVideoModal } from "@/components/video-modal";
import type { YouTubeVideo } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Props = {
  videos: YouTubeVideo[];
};

export function FeaturedReleases({ videos }: Props) {
  const { open, modal } = useVideoModal();
  const featured = videos.slice(0, 3);

  return (
    <section id="releases" className="relative scroll-mt-24 section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Stories that hit hard."
          lede="Cinematic AI music videos and shorts from Bista Creation — Nepali soul, global sound, next-generation cinema."
          action={
            <Link href="/work" className="btn btn-glass btn-sm">
              All releases
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          }
        />

        {featured.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => open(video)}
                className="glass liquid-edge sheen group relative overflow-hidden rounded-3xl text-left transition duration-500 hover:-translate-y-1 hover:border-gold-400/35"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    loading="lazy"
                    unoptimized
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent opacity-90" />
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
                  <h3 className="mt-2 line-clamp-2 text-base leading-snug font-semibold text-white sm:text-lg">
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
          <div className="glass mt-12 rounded-3xl p-10 text-center">
            <p className="text-display text-lg font-semibold text-white">
              The next release is in the mix.
            </p>
            <p className="mt-3 text-sm text-silver-400">
              Follow the studio on YouTube to catch it first.
            </p>
          </div>
        )}
      </div>
      {modal}
    </section>
  );
}
