import Link from "next/link";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { AudioVisualizer } from "@/components/audio-visualizer";
import { site } from "@/lib/site";
import type { YouTubeVideo } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Props = {
  featured?: YouTubeVideo;
};

export function Hero({ featured }: Props) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_66%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.14),transparent_68%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-emerald-200 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Now booking commissions
            </div>

            <p className="mt-8 flex items-center gap-3 text-display text-[11px] font-semibold tracking-[0.34em] text-gold-300 uppercase sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
              AI music &amp; cinematic video studio
            </p>

            <h1 className="mt-6 text-display text-[2.75rem] leading-[0.98] font-bold text-balance text-white sm:text-6xl lg:text-[4.25rem]">
              Your story.{" "}
              <span className="nova-text">Composed. Filmed. Felt.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-pretty text-silver-200 sm:text-lg">
              Custom songs and cinematic music videos for artists, couples, brands and
              events — where Himalayan soul meets next-generation cinema.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/commission" className="btn btn-gold">
                Commission a song
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn btn-glass">
                <Play className="h-3.5 w-3.5 fill-current" />
                Watch the work
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold tracking-[0.18em] text-silver-400 uppercase">
              <a
                href={site.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gold-200"
              >
                YouTube
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gold-200"
              >
                Instagram
              </a>
              <a
                href={site.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gold-200"
              >
                Facebook
              </a>
              <span className="text-gold-300/90">Nepal-based · Worldwide delivery</span>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5 text-[10px] font-semibold tracking-[0.16em] text-silver-300 uppercase">
              {["16:9 + 9:16 delivery", "Suno AI Pro", "Google Flow / Veo", "Original lyrics"].map(
                (item) => (
                  <li
                    key={item}
                    className="glass-soft rounded-full px-3.5 py-2 text-silver-300"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {featured ? (
              <a
                href={featured.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass liquid-edge sheen group block overflow-hidden rounded-[2rem] p-2.5 transition duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden rounded-[1.55rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.thumbnail}
                    alt={featured.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-ink-950 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-gold-200 uppercase">
                    Latest release
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400 text-ink-950 shadow-[0_20px_50px_-12px_rgba(212,175,55,0.75)] transition duration-500 group-hover:scale-110 group-hover:bg-gold-300">
                      <Play className="h-6 w-6 fill-current" />
                    </span>
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                      Now screening
                    </p>
                    <h2 className="mt-2 line-clamp-2 text-sm leading-snug font-semibold text-white">
                      {featured.title}
                    </h2>
                    <p className="mt-1.5 text-xs text-silver-500">
                      {formatDate(featured.publishedAt)} · Official release
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 text-silver-300 transition group-hover:border-gold-400/50 group-hover:text-gold-200">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ) : (
              <div className="glass liquid-edge rounded-[2rem] p-8">
                <p className="eyebrow">Studio reel</p>
                <p className="mt-4 text-display text-2xl font-semibold text-white">
                  Cinematic sound, frame by frame.
                </p>
                <div className="mt-8 opacity-80">
                  <AudioVisualizer bars={40} height={120} />
                </div>
              </div>
            )}

            <div className="glass-strong absolute! -right-3 -bottom-5 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                  Nepali soul
                </p>
                <p className="text-xs text-silver-400">Global sound</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 opacity-45 [mask-image:linear-gradient(to_top,black,transparent)]"
        aria-hidden="true"
      >
        <AudioVisualizer className="h-full w-full" bars={64} height={128} />
      </div>
    </section>
  );
}
