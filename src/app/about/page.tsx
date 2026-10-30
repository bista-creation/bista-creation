import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  AudioLines,
  Clapperboard,
  Handshake,
  Mountain,
  Music2,
  ShieldCheck,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BistaBadge } from "@/components/logo";
import {
  jsonLdGraph,
  organizationId,
  organizationNode,
  webPageNode,
  websiteNode,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Music Video Studio in Nepal — Bista Creation",
  },
  description:
    "Bista Creation is an independent Nepal-based studio making cinematic music videos and custom songs with Himalayan soul and next-generation tools.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Music Video Studio in Nepal — Bista Creation",
    description:
      "An independent Nepal-based creative studio making cinematic songs and music videos.",
    url: "/about",
  },
};

const principles = [
  {
    title: "Himalayan soul first",
    text: "Nepali stories, voices and landscapes are the centre of the work — not a texture layered on top.",
    icon: Mountain,
  },
  {
    title: "Craft over volume",
    text: "A small number of releases, each with a deliberate visual world and a finished mix.",
    icon: AudioLines,
  },
  {
    title: "Clear collaboration",
    text: "Scope, price, revisions and delivery are agreed in writing before production starts.",
    icon: Handshake,
  },
  {
    title: "Rights-first",
    text: "Your original lyrics and story stay yours. Usage and licensing are explicit from day one.",
    icon: ShieldCheck,
  },
];

const toolkit = [
  {
    title: "Suno AI Pro",
    text: "Vocal synthesis, arrangement and production for original songs across genres.",
    icon: Music2,
  },
  {
    title: "Google Flow & Veo",
    text: "Cinematic visual generation with character continuity and rhythmic camera language.",
    icon: Clapperboard,
  },
  {
    title: "Release mastering",
    text: "Mix and master passes prepared for YouTube, Instagram and streaming loudness.",
    icon: AudioLines,
  },
];

const facts = [
  ["Base", "Nepal"],
  ["Delivery", "Worldwide"],
  ["Formats", "16:9 · 9:16"],
  ["Model", "Independent studio"],
];

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd
        data={jsonLdGraph([
          organizationNode(),
          websiteNode(),
          webPageNode({
            type: "AboutPage",
            path: "/about",
            name: "Music Video Studio in Nepal — Bista Creation",
            description:
              "An independent Nepal-based creative studio making cinematic songs and music videos.",
            aboutId: organizationId,
          }),
        ])}
      />
      <PageHero
        eyebrow="The studio"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Studio", href: "/about" },
        ]}
        title={
          <>
            A spark, turned into <span className="nova-text">a studio.</span>
          </>
        }
        lede="Bista Creation is an independent creative studio in Nepal, making cinematic songs and music videos for artists, couples and brands — with Himalayan soul and a global frame."
      >
        <Link href="/work" className="btn btn-gold">
          See the work
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link href="/services" className="btn btn-glass">
          Explore services
        </Link>
      </PageHero>

      <section className="relative pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="glass liquid-edge rounded-3xl p-7 sm:p-10">
              <span className="eyebrow">Why we exist</span>
              <h2 className="mt-4 text-display text-3xl font-bold text-balance text-white sm:text-4xl">
                Nepal had the songs. It needed the pictures.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-silver-300 sm:text-base">
                <p>
                  Bista Creation began with a simple frustration: Nepal had incredible songs,
                  incredible voices and incredible landscapes — but almost no cinematic visual
                  world to put them in.
                </p>
                <p>
                  We build that world. Using next-generation AI visuals together with deep audio
                  craft, we make music videos that feel Nepali at the core and cinematic
                  everywhere else.
                </p>
                <p>
                  The name nods to the idea of a spark — a small light that becomes a wildfire of
                  sound and image. That is the studio in one sentence: start small, finish
                  cinematic.
                </p>
              </div>
            </div>

            <div className="glass liquid-edge flex flex-col items-center justify-center rounded-3xl p-7 sm:p-9">
              <div className="relative flex h-44 w-44 items-center justify-center">
                <div
                  className="nova-ring animate-spin-slow absolute inset-0 rounded-full opacity-60 blur-[1px]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-2 rounded-full border border-white/10 bg-ink-950/75 backdrop-blur"
                  aria-hidden="true"
                />
                <BistaBadge className="relative h-32 w-32" />
              </div>
              <dl className="mt-8 w-full space-y-3">
                {facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-[10px] font-semibold tracking-[0.2em] text-silver-500 uppercase">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-silver-200">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we believe"
            title="Four rules we do not trade away."
            lede="They shape every commission, from a single song to a full release campaign."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="glass liquid-edge glass-hover rounded-3xl p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">{principle.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
                    {principle.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass liquid-edge rounded-3xl p-7 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">The toolkit</span>
                <h2 className="mt-4 text-display text-2xl font-bold text-white sm:text-3xl">
                  Next-generation tools. Human direction.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-silver-400">
                AI is the instrument, not the artist. Every release is directed, written and
                finished by the studio.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {toolkit.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div key={tool.title} className="glass-soft rounded-2xl p-5">
                    <Icon className="h-5 w-5 text-gold-300" />
                    <h3 className="mt-4 text-sm font-semibold text-white">{tool.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-silver-400">{tool.text}</p>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-silver-500">
              Suno AI Pro and Google Flow are trademarks of their respective owners. Bista Creation
              is an independent studio, not affiliated with or endorsed by Suno AI or Google.
            </p>
          </div>
        </div>
      </section>

      <section className="relative section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/services"
              className="glass liquid-edge glass-hover group rounded-3xl p-7 sm:p-9"
            >
              <span className="eyebrow">Services</span>
              <h2 className="mt-4 text-2xl font-bold text-white">What we make</h2>
              <p className="mt-3 text-sm leading-relaxed text-silver-300">
                Custom songs, wedding anthems, cinematic music videos and vertical cuts — one
                studio from first note to final master.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-gold-200 uppercase">
                Explore services
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="glass liquid-edge glass-hover group rounded-3xl p-7 sm:p-9"
            >
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 text-2xl font-bold text-white">Talk to the studio</h2>
              <p className="mt-3 text-sm leading-relaxed text-silver-300">
                Send a voice note, a paragraph or a reference track. We will tell you honestly what
                the idea needs and what it costs.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-gold-200 uppercase">
                Start the conversation
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="Bring the story. We'll build the world around it."
        description="Every commission starts with a conversation, not a checkout. Tell us what you are hearing and we will shape the right scope."
      />
    </main>
  );
}
