import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { site, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Bista Creation about a custom song or cinematic music video. Reach the studio on WhatsApp or email, or send a structured brief.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Bista Creation",
    description:
      "Reach Bista Creation on WhatsApp or email to start a custom song or cinematic music video.",
    url: "/contact",
  },
};

const briefItems = [
  "Your name and the best way to reach you",
  "What you are making: song, video, or both",
  "The story, lyrics or feeling behind it",
  "Reference tracks or visual links",
  "Your target delivery date",
  "How the release will be used",
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what <span className="nova-text">you're hearing.</span>
          </>
        }
        lede="A voice note, a paragraph, a reference track — start wherever the idea is clearest. Every inquiry gets a real reply from the studio, not an automated funnel."
      >
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp the studio
        </a>
        <a href={`mailto:${site.email}`} className="btn btn-glass">
          <Mail className="h-4 w-4" />
          Email us
        </a>
      </PageHero>

      <section className="relative pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="glass liquid-edge glass-hover group rounded-3xl p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
                <MessageCircle className="h-5 w-5" />
              </span>
              <p className="mt-5 text-[10px] font-semibold tracking-[0.22em] text-silver-500 uppercase">
                WhatsApp
              </p>
              <p className="mt-2 text-base font-semibold text-white">{site.whatsappDisplay}</p>
              <p className="mt-2 text-sm leading-relaxed text-silver-400">
                Fastest reply. Voice notes and reference tracks welcome.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-gold-200 uppercase">
                Open chat
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="glass liquid-edge glass-hover group rounded-3xl p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                <Mail className="h-5 w-5" />
              </span>
              <p className="mt-5 text-[10px] font-semibold tracking-[0.22em] text-silver-500 uppercase">
                Email
              </p>
              <p className="mt-2 break-all text-base font-semibold text-white">{site.email}</p>
              <p className="mt-2 text-sm leading-relaxed text-silver-400">
                Best for brand briefs, documents and longer references.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-gold-200 uppercase">
                Write to us
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            <div className="glass liquid-edge rounded-3xl p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-silver-200">
                <MapPin className="h-5 w-5" />
              </span>
              <p className="mt-5 text-[10px] font-semibold tracking-[0.22em] text-silver-500 uppercase">
                The studio
              </p>
              <p className="mt-2 text-base font-semibold text-white">Nepal · Worldwide</p>
              <p className="mt-2 text-sm leading-relaxed text-silver-400">
                Remote-first collaboration. Finished releases delivered digitally.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-silver-300 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open for commissions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="glass liquid-edge rounded-3xl p-7 sm:p-9">
              <span className="eyebrow">Make the first message count</span>
              <h2 className="mt-4 text-display text-2xl font-bold text-white sm:text-3xl">
                What to include in your brief.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-silver-300">
                You do not need a finished pitch. These details just help us reply with an accurate
                scope instead of a guessing game.
              </p>
              <ul className="mt-6 grid gap-3">
                {briefItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-silver-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass liquid-edge flex flex-col justify-between rounded-3xl p-7 sm:p-9">
              <div>
                <span className="eyebrow">Prefer a structured form?</span>
                <h2 className="mt-4 text-display text-2xl font-bold text-white sm:text-3xl">
                  Build the brief step by step.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-silver-300">
                  The commission form walks through scope, genre, vocals, references and your
                  target date, then opens WhatsApp or your email app with everything filled in.
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Sparkles className="h-4 w-4 text-gold-300" />
                    No account. No payment. No stored form data.
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-silver-400">
                    The brief is composed in your browser and passed directly to WhatsApp or your
                    email app.
                  </p>
                </div>
              </div>
              <Link href="/commission" className="btn btn-gold mt-7 w-full">
                Open the commission form
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-silver-500 uppercase">
              Or follow the studio
            </span>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-soft rounded-full px-4 py-2 text-xs font-semibold text-silver-300 transition hover:border-gold-400/40 hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="The best brief is the one you actually send."
        description="Start with a voice note or three lines of text. We will take it from there and confirm scope, price and delivery before work begins."
      />
    </main>
  );
}
