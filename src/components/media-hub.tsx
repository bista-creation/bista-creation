"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, ExternalLink, Play } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useVideoModal } from "@/components/video-modal";
import { site } from "@/lib/site";
import type { SocialFeed, YouTubeVideo } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Props = {
  fullVideos: YouTubeVideo[];
  shorts: YouTubeVideo[];
  instagram: SocialFeed;
  facebook: SocialFeed;
  youtubeUrl: string;
  instagramUrl: string;
  facebookUrl: string;
};

const tabs = [
  { id: "all", label: "All releases" },
  { id: "full", label: "Full music videos" },
  { id: "shorts", label: "Shorts & reels" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function MediaHub({
  fullVideos,
  shorts,
  instagram,
  facebook,
  youtubeUrl,
  instagramUrl,
  facebookUrl,
}: Props) {
  const [tab, setTab] = useState<TabId>("all");
  const { open, modal } = useVideoModal();

  const allVideos = [...fullVideos, ...shorts]
    .slice()
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 8);
  const visible = tab === "all" ? allVideos : tab === "full" ? fullVideos : shorts;

  return (
    <section id="social" className="relative scroll-mt-24 section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social wall"
          title="Watch the feed move."
          lede="Live YouTube releases, cinematic shorts and reels — straight from the studio feed."
          action={
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass btn-sm"
            >
              Subscribe on YouTube
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          }
        />

        <div className="mt-10">
          <div role="tablist" aria-label="Release filters" className="flex flex-wrap gap-2">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => setTab(item.id)}
                className={`rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase transition ${
                  tab === item.id
                    ? "border-gold-300 bg-gold-400 text-ink-950 shadow-[0_10px_30px_-12px_rgba(212,175,55,0.7)]"
                    : "border-white/12 bg-white/5 text-silver-300 hover:border-gold-400/40 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {visible.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => open(video)}
                  className="glass liquid-edge sheen group relative w-full overflow-hidden rounded-3xl text-left transition duration-500 hover:-translate-y-1 hover:border-gold-400/35"
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
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="glass mt-8 rounded-3xl p-10 text-center">
              <p className="text-display text-lg font-semibold text-white">
                No releases in this view yet.
              </p>
              <p className="mt-3 text-sm text-silver-400">
                Check back soon — new videos drop here.
              </p>
            </div>
          )}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="glass liquid-edge rounded-3xl p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="eyebrow text-[10px]">Instagram</span>
                <h3 className="mt-3 text-2xl font-bold text-white">The visual diary</h3>
              </div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow @${site.instagram.handle} on Instagram`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-silver-300 transition hover:border-gold-400/40 hover:text-gold-200"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-silver-300">
              Reels and behind-the-scenes visuals from the studio feed at{" "}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold-200 underline-offset-4 hover:underline"
              >
                @{site.instagram.handle}
              </a>
              .
            </p>

            {instagram.source === "live" && instagram.items.length > 0 ? (
              <div className="mt-7 grid grid-cols-2 gap-3">
                {instagram.items.slice(0, 4).map((item) => (
                  <a
                    key={item.id}
                    href={item.permalink ?? instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
                  >
                    {item.thumbnailUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.thumbnailUrl}
                        alt={item.caption ?? item.title ?? "Instagram reel"}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="aspect-[4/5] w-full bg-ink-800" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent opacity-60" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-display text-base font-semibold text-white">
                  Follow the studio on Instagram.
                </p>
                <p className="mt-2 text-sm text-silver-400">
                  Reels and cinematic behind-the-scenes drops are posted here.
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm mt-5"
                >
                  Follow @{site.instagram.handle}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          <div className="glass liquid-edge rounded-3xl p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="eyebrow text-[10px]">Community</span>
                <h3 className="mt-3 text-2xl font-bold text-white">Studio feed &amp; updates</h3>
              </div>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bista Creation on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-silver-300 transition hover:border-gold-400/40 hover:text-gold-200"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-silver-300">
              Production teasers, announcements and community notes from the Facebook page.
            </p>

            {facebook.source === "live" && facebook.items.length > 0 ? (
              <div className="mt-7 flex flex-col gap-3">
                {facebook.items.slice(0, 3).map((post) => (
                  <a
                    key={post.id}
                    href={post.permalink ?? facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-soft rounded-2xl p-4 transition hover:border-gold-400/35"
                  >
                    {post.mediaUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.mediaUrl}
                        alt={post.caption ?? "Facebook post"}
                        loading="lazy"
                        className="mb-4 aspect-video w-full rounded-xl object-cover"
                      />
                    ) : null}
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-sm font-semibold text-white">
                        {post.caption ?? "Studio update"}
                      </h4>
                      {post.timestamp ? (
                        <span className="inline-flex shrink-0 items-center gap-1 text-[10px] tracking-[0.16em] text-silver-500 uppercase">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDate(post.timestamp)}
                        </span>
                      ) : null}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-display text-base font-semibold text-white">Stay in the loop.</p>
                <p className="mt-2 text-sm text-silver-400">
                  Production teasers and studio announcements.
                </p>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm mt-5"
                >
                  Follow on Facebook
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {modal}
    </section>
  );
}
