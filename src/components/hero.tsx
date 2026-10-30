import { AudioVisualizer } from "@/components/audio-visualizer";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(230,33,67,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/90 to-ink-950" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.24em] text-green-300 uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Now booking commissions
          </div>

          <p className="mt-8 text-display text-xs font-semibold tracking-[0.42em] text-gold-300 uppercase sm:text-sm">
            Bista Creation — AI Music &amp; Cinematic Video Studio
          </p>

          <h1 className="mt-6 text-display text-5xl leading-[0.98] font-bold text-white sm:text-6xl lg:text-7xl">
            Your story.{" "}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent">
              Composed. Filmed. Felt.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-silver-300 sm:text-xl">
            Custom songs and cinematic music videos for artists, couples, brands and
            events — powered by Suno AI Pro and Google Flow.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#commission"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-black uppercase transition hover:bg-gold-400"
            >
              Commission a Song
            </a>
            <a
              href="#releases"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-silver-200 uppercase backdrop-blur transition hover:border-gold-500/60 hover:text-gold-300"
            >
              Watch Releases
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold tracking-[0.18em] text-silver-300 uppercase">
            <a href={site.youtube.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
              YouTube
            </a>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
              Instagram
            </a>
            <a href={site.facebook.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
              Facebook
            </a>
            <span className="text-gold-500">Nepal-based • Worldwide delivery</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 opacity-70" aria-hidden="true">
        <AudioVisualizer className="h-full w-full" bars={64} height={160} />
      </div>
    </section>
  );
}
