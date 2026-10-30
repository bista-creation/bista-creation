"use client";

import { useState } from "react";
import { CalendarDays, ExternalLink, Play } from "lucide-react";
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
  { id: "all", label: "All Releases" },
  { id: "full", label: "Full Music Videos" },
  { id: "shorts", label: "Shorts & Reels" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white text-white" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

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

  const allVideos = [...fullVideos, ...shorts]
    .slice()
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 8);
  const visible = tab === "all" ? allVideos : tab === "full" ? fullVideos : shorts;

  return (
    <section id="social" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">
              Social Wall
            </p>
            <h2 className="mt-4 text-display text-3xl font-bold text-white sm:text-5xl">
              Watch the feed move.
            </h2>
            <p className="mt-4 text-silver-300">
              Live YouTube releases, cinematic shorts and reels — straight from the studio feed.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div role="tablist" aria-label="Release filters" className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase transition ${
                  tab === t.id
                    ? "border-gold-500/70 bg-gold-500/15 text-gold-300"
                    : "border-white/10 bg-white/5 text-silver-300 hover:border-white/30"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {visible.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((v) => (
                <a
                  key={v.id}
                  href={v.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 text-left transition hover:border-gold-500/60"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.thumbnail} alt={v.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
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
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="glass mt-8 rounded-2xl p-10 text-center">
              <p className="text-display text-lg font-semibold text-white">No releases in this view yet.</p>
              <p className="mt-3 text-sm text-silver-400">Check back soon — new videos drop here.</p>
            </div>
          )}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">
              Instagram
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">The visual diary</h3>
            <p className="mt-3 max-w-md text-silver-300">
              Reels and behind-the-scenes visuals from the studio feed at{" "}
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gold-300 underline-offset-4 hover:underline">
                @{site.instagram.handle}
              </a>
              .
            </p>

            {instagram.source === "live" && instagram.items.length > 0 ? (
              <div className="mt-8 grid grid-cols-2 gap-4">
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
                      <img src={item.thumbnailUrl} alt={item.caption ?? item.title ?? "Instagram reel"} loading="lazy" className="aspect-[4/5] w-full object-cover transition group-hover:scale-105" />
                    ) : (
                      <div className="aspect-[4/5] w-full bg-ink-800" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="glass mt-8 rounded-2xl p-8">
                <p className="text-display text-base font-semibold text-white">Follow the studio on Instagram.</p>
                <p className="mt-3 text-sm text-silver-400">
                  Reels and cinematic behind-the-scenes drops are posted here.
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/60 bg-gold-500/10 px-5 py-3 text-xs font-bold tracking-[0.16em] text-gold-300 uppercase transition hover:bg-gold-500/20"
                >
                  Follow @{site.instagram.handle} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          <div>
            <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">
              Community
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Studio feed &amp; updates</h3>
            <p className="mt-3 max-w-md text-silver-300">
              Production teasers, announcements and community notes from the Facebook page.
            </p>

            {facebook.source === "live" && facebook.items.length > 0 ? (
              <div className="mt-8 flex flex-col gap-4">
                {facebook.items.slice(0, 3).map((post) => (
                  <a
                    key={post.id}
                    href={post.permalink ?? facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/10 bg-ink-900 p-5 transition hover:border-gold-500/50"
                  >
                    {post.mediaUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.mediaUrl} alt={post.caption ?? "Facebook post"} loading="lazy" className="mb-4 aspect-video w-full rounded-xl object-cover" />
                    ) : null}
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-sm font-semibold text-white">{post.caption ?? "Studio update"}</h4>
                      {post.timestamp ? <span className="inline-flex shrink-0 items-center gap-1 text-[10px] tracking-[0.18em] text-silver-400 uppercase"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.timestamp)}</span> : null}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="glass mt-8 rounded-2xl p-8">
                <p className="text-display text-base font-semibold text-white">Stay in the loop.</p>
                <p className="mt-3 text-sm text-silver-400">Production teasers and announcements.</p>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/60 bg-gold-500/10 px-5 py-3 text-xs font-bold tracking-[0.16em] text-gold-300 uppercase transition hover:bg-gold-500/20"
                >
                  Follow on Facebook <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

