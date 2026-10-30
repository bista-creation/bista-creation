import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Film,
  HeartHandshake,
  MessageCircle,
  Music2,
  Smartphone,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";
import { jsonLdGraph, organizationNode, serviceCatalogNode, websiteNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Songs & Music Video Services — Bista Creation",
  },
  description:
    "Custom songs, wedding anthems, cinematic music videos and vertical cuts from Bista Creation in Nepal — scoped, quoted and delivered with clear milestones.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Custom Songs & Music Video Services — Bista Creation",
    description:
      "Custom songs, wedding anthems, cinematic music videos and short-form cuts, produced in Nepal with Suno AI Pro and Google Flow.",
    url: "/services",
  },
};

const services = [
  {
    id: "custom-song",
    number: "01",
    icon: Music2,
    title: "Custom songs & lyrics",
    summary:
      "An original song built from your story, your words, or a feeling you cannot name yet.",
    includes: [
      "Concept and lyric development",
      "Suno AI Pro vocal production",
      "Arrangement, mix and master",
      "Agreed revision rounds",
    ],
    deliverables: "WAV + MP3 master · lyric sheet",
    ideal: "Artists, gifts, brand stories",
  },
  {
    id: "anthem",
    number: "02",
    icon: HeartHandshake,
    title: "Wedding & anniversary anthems",
    summary:
      "A personal anthem for the moment you want to keep forever — written around the two of you.",
    includes: [
      "Story notes and lyric drafting",
      "Vocal and genre direction",
      "Cinematic arrangement and mix",
      "Instagram-ready vertical cut",
    ],
    deliverables: "Master audio · 9:16 social cut",
    ideal: "Weddings, anniversaries, proposals",
  },
  {
    id: "music-video",
    number: "03",
    icon: Film,
    title: "Cinematic music videos",
    summary:
      "A full visual world for your song, with a consistent look and a story that holds from first frame to last.",
    includes: [
      "Concept, mood and shot direction",
      "Google Flow / Veo visual generation",
      "Edit, grade and sound polish",
      "YouTube and vertical masters",
    ],
    deliverables: "4K 16:9 master · 9:16 cut",
    ideal: "Singles, EPs, release campaigns",
  },
  {
    id: "shorts",
    number: "04",
    icon: Smartphone,
    title: "Shorts, reels & social cuts",
    summary:
      "Your song reshaped for the scroll — hook-first, captioned and cinematic rather than clipped and rushed.",
    includes: [
      "Hook and section selection",
      "Vertical edit and captions",
      "Platform-safe exports",
      "Thumbnail-ready stills",
    ],
    deliverables: "3–5 vertical cuts",
    ideal: "Singles, teasers, always-on content",
  },
];

const included = [
  "Original lyric drafting",
  "Vocal production",
  "Mix & master",
  "16:9 + 9:16 masters",
  "Milestone updates",
];

const quoteFactors = [
  "Song length and arrangement",
  "Audio-only vs. full music video",
  "Number and length of vertical cuts",
  "Usage: personal, artist or brand",
  "Delivery timeline",
];

export default function ServicesPage() {
  return (
    <main id="main">
      <JsonLd
        data={jsonLdGraph([
          organizationNode(),
          websiteNode(),
          serviceCatalogNode(
            services.map((service) => ({
              name: service.title,
              description: service.summary,
            }))
          ),
        ])}
      />
      <PageHero
        eyebrow="Services"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        title={
          <>
            Songs, scored. <span className="nova-text">Videos, directed.</span>
          </>
        }
        lede="From a single custom song to a full cinematic release, every Bista Creation project is scoped around your story — with clear deliverables and milestones agreed before production begins."
      >
        <Link href="/commission" className="btn btn-gold">
          Start a brief
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-glass"
        >
          <MessageCircle className="h-4 w-4" />
          Talk on WhatsApp
        </a>
      </PageHero>

      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="glass liquid-edge glass-hover relative scroll-mt-28 overflow-hidden rounded-3xl p-7 sm:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-display text-xs font-semibold tracking-[0.3em] text-silver-500">
                      {service.number}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-white">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-silver-300">
                    {service.summary}
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-silver-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-7 grid gap-3 border-t border-white/10 pt-5 text-xs sm:grid-cols-2">
                    <div>
                      <dt className="font-semibold tracking-[0.18em] text-silver-500 uppercase">
                        Deliverables
                      </dt>
                      <dd className="mt-1.5 text-silver-300">{service.deliverables}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold tracking-[0.18em] text-silver-500 uppercase">
                        Ideal for
                      </dt>
                      <dd className="mt-1.5 text-silver-300">{service.ideal}</dd>
                    </div>
                  </dl>

                  <Link
                    href="/commission"
                    className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-gold-200 uppercase transition hover:text-gold-100"
                  >
                    Start this project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass liquid-edge rounded-3xl p-7 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="eyebrow">Every commission includes</span>
                <h2 className="mt-4 text-display text-2xl font-bold text-white sm:text-3xl">
                  One studio, end to end.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-silver-400">
                You are not stitching together a songwriter, a vocalist and an editor. The same
                studio carries the song and the visuals.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {included.map((item) => (
                <li
                  key={item}
                  className="glass-soft flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-sm text-silver-200"
                >
                  <Check className="h-4 w-4 shrink-0 text-gold-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="From a voice note to a finished release."
            lede="A clear, four-stage path with the scope, price and delivery schedule agreed up front."
          />
          <ProcessSteps className="mt-10" />
        </div>
      </section>

      <section className="relative section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="glass liquid-edge rounded-3xl p-7 sm:p-9">
              <span className="eyebrow">Investment</span>
              <h2 className="mt-4 text-display text-2xl font-bold text-white sm:text-3xl">
                How pricing works.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-silver-300">
                Every project is quoted individually. You get a clear scope, price and delivery
                schedule before work begins — no hidden add-ons and no payment taken through this
                website.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-silver-400">
                Share the brief and we will reply with the right option, or a smaller scope if that
                serves the song better.
              </p>
              <Link href="/commission" className="btn btn-gold btn-sm mt-7">
                Request a quote
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="glass liquid-edge rounded-3xl p-7 sm:p-9">
              <p className="eyebrow">What shapes the quote</p>
              <ul className="mt-5 space-y-3.5">
                {quoteFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-3 text-sm text-silver-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {factor}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-silver-500">
                Usage and licensing are agreed in writing per project. Third-party tools are used
                under their own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Pick a lane"
        title="Not sure which service fits?"
        description="Send the idea as it exists — a voice note, a paragraph, a reference track. We will recommend the right scope before you commit."
      />
    </main>
  );
}
