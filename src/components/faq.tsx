"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the commission process start?",
    a: "Share your song idea, lyrics, story or brief. We review it and send a quote, then agree scope, price and delivery before creation begins.",
  },
  {
    q: "Do you work with custom lyrics?",
    a: "Yes. We can write original lyrics from your story or adapt an existing idea into a custom song.",
  },
  {
    q: "What do you need to deliver a music video?",
    a: "A finished song reference or strong brief, plus any visual references. We handle composition, AI-assisted production and cinematic visuals.",
  },
  {
    q: "How are payments handled?",
    a: "This is a paid commission studio. Pricing and milestones are finalized transparently via WhatsApp or email before work begins.",
  },
  {
    q: "Can you deliver for YouTube and Instagram?",
    a: "Yes — mastered delivery for YouTube 16:9 and Instagram 9:16 formats.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">
            Questions
          </p>
          <h2 className="mt-4 text-display text-3xl font-bold text-white sm:text-5xl">
            Before you commission.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-ink-900/70">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gold-400 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open ? <p className="px-6 pb-6 text-sm text-silver-400">{f.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
