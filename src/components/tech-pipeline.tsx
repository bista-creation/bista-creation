import Link from "next/link";
import { ArrowUpRight, AudioLines, Clapperboard, Rocket } from "lucide-react";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";

const capabilities = [
  {
    title: "Suno AI Pro audio engineering",
    text: "Multi-genre vocal synthesis, Lok-Pop songwriting and melodic EDM drops, mixed and mastered for release.",
    icon: AudioLines,
    tag: "Sound",
  },
  {
    title: "Google Flow & Veo cinematics",
    text: "Character continuity, 4K upscaling and rhythmic camera language for a visual world that holds together.",
    icon: Clapperboard,
    tag: "Vision",
  },
  {
    title: "Mastered release delivery",
    text: "Complete masters ready for YouTube 16:9, Instagram 9:16 and the platforms that come next.",
    icon: Rocket,
    tag: "Delivery",
  },
];

export function TechPipeline() {
  return (
    <section id="tech" className="relative scroll-mt-24 section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our tech & process"
          title="Built on the best in breed."
          lede="Three disciplines, one studio: AI-assisted songwriting and production, cinematic generation, and delivery-grade mastering."
          action={
            <Link href="/services" className="btn btn-glass btn-sm">
              Explore services
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className="glass liquid-edge glass-hover sheen relative overflow-hidden rounded-3xl p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.24em] text-silver-500 uppercase">
                    {capability.tag} · {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">{capability.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-display text-xl font-semibold text-white">From brief to release</h3>
            <p className="text-xs font-semibold tracking-[0.18em] text-silver-500 uppercase">
              One clear path · milestone delivery
            </p>
          </div>
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}
