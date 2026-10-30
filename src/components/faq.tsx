"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const faqs = [
  {
    q: "How does the commission process start?",
    a: "Share your song idea, lyrics, story or brief. We review it and send a quote, then agree scope, price and delivery before creation begins.",
  },
  {
    q: "Do you work with custom lyrics?",
    a: "Yes. We can write original lyrics from your story or adapt an existing idea into a custom song. You can also send finished lyrics for us to produce.",
  },
  {
    q: "What do you need to deliver a music video?",
    a: "A finished song reference or a strong brief, plus any visual references. We handle composition, AI-assisted production and cinematic visuals.",
  },
  {
    q: "How are payments handled?",
    a: "This is a paid commission studio. Pricing and milestones are finalised transparently via WhatsApp or email before work begins.",
  },
  {
    q: "Can you deliver for YouTube and Instagram?",
    a: "Yes — mastered delivery for YouTube 16:9 and Instagram 9:16, with the same grade and mix across both formats.",
  },
  {
    q: "Who owns the finished song and video?",
    a: "Ownership and usage rights are agreed in writing for each commission. Your original lyrics and story stay yours; third-party tools are used under their own terms.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 section-pad">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Questions"
          title="Before you commission."
          lede="The short answers to what most artists, couples and brands ask first."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`glass-soft rounded-2xl transition-colors ${
                  open ? "liquid-edge bg-white/[0.055]" : "hover:border-white/16"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    aria-controls={`faq-panel-${index}`}
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold-300 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open ? (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="px-5 pb-6 sm:px-6"
                  >
                    <p className="max-w-3xl text-sm leading-relaxed text-silver-300">{faq.a}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-silver-400">
          <span>Still curious?</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-gold-200 underline-offset-4 hover:underline"
          >
            Talk to the studio
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
