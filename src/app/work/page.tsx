import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { WorkGallery } from "@/components/work-gallery";
import { site } from "@/lib/site";
import type { YouTubeVideo } from "@/lib/types";
import { getYouTubeShorts, getYouTubeVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Watch Bista Creation's cinematic music videos, Nepali AI remixes and vertical shorts — built with Suno AI Pro and Google Flow.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work — Bista Creation",
    description:
      "Cinematic music videos, Nepali AI remixes and vertical shorts from the Bista Creation studio.",
    url: "/work",
  },
};

const channels = [
  {
    label: "YouTube",
    handle: site.youtube.handle,
    href: site.youtube.url,
    description: "Full music videos, remixes and shorts in one place.",
    icon: Youtube,
    cta: "Subscribe",
  },
  {
    label: "Instagram",
    handle: `@${site.instagram.handle}`,
    href: site.instagram.url,
    description: "Reels, visual experiments and behind-the-scenes cuts.",
    icon: Instagram,
    cta: "Follow",
  },
  {
    label: "Facebook",
    handle: `@${site.facebook.handle}`,
    href: site.facebook.url,
    description: "Studio updates, announcements and community notes.",
    icon: Facebook,
    cta: "Follow",
  },
];

export default async function WorkPage() {
  const [youtube, shorts] = await Promise.all([getYouTubeVideos(), getYouTubeShorts()]);

  const seen = new Set<string>();
  const videos: YouTubeVideo[] = [...youtube.items, ...shorts.items].filter((video) => {
    if (seen.has(video.id)) return false;
    seen.add(video.id);
    return true;
  });

  return (
    <main id="main">
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Nepali soul. <span className="nova-text">Global sound.</span>
          </>
        }
        lede="Music videos, remixes and shorts from Bista Creation — every frame built around the song, every release mastered for the platforms it lives on."
      >
        <a
          href={site.youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
        >
          Watch on YouTube
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <Link href="/commission" className="btn btn-glass">
          Start a project
        </Link>
      </PageHero>

      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkGallery videos={videos} />
        </div>
      </section>

      <section className="relative section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Follow the studio</span>
            <h2 className="mt-4 text-display text-3xl font-bold text-balance text-white sm:text-4xl">
              New drops, first on the feed.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-silver-300 sm:text-base">
              Each platform carries a different cut of the studio — subscribe where you
              actually watch.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass liquid-edge glass-hover group rounded-3xl p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-silver-500 transition group-hover:text-gold-200" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{channel.label}</h3>
                  <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-gold-300 uppercase">
                    {channel.handle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-silver-400">
                    {channel.description}
                  </p>
                  <span className="mt-5 inline-flex text-[11px] font-bold tracking-[0.18em] text-silver-300 uppercase">
                    {channel.cta} →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your story could be the next release."
        description="A custom song, a cinematic video, or both — built from your story and delivered ready for the platforms you use."
      />
    </main>
  );
}
