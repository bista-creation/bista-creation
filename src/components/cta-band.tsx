import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CtaBand({
  eyebrow = "Ready when you are",
  title = "Let's make your next release cinematic.",
  description = "Bring the story, the lyrics or just a feeling. We'll shape it into a song and a visual world that feels unmistakably yours.",
}: Props) {
  return (
    <section className="relative pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass liquid-edge relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div
            className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(233,200,119,0.22),transparent_66%)] blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.16),transparent_68%)] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-gold-400/70" aria-hidden="true" />
                {eyebrow}
              </span>
              <h2 className="mt-5 max-w-2xl text-display text-3xl font-bold text-balance text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-silver-300 sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link href="/commission" className="btn btn-gold w-full sm:w-auto">
                Commission a song
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
