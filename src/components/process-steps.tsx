import { AudioLines, Clapperboard, ClipboardList, PenLine } from "lucide-react";

const steps = [
  {
    title: "Brief",
    text: "Share the song idea, lyrics, story, references or mood. We reply with the right scope.",
    icon: ClipboardList,
  },
  {
    title: "Concept & lyrics",
    text: "We shape the concept, write or refine the lyrics and lock the sonic direction.",
    icon: PenLine,
  },
  {
    title: "Production",
    text: "Suno AI Pro vocals and production, paired with Google Flow / Veo visuals.",
    icon: AudioLines,
  },
  {
    title: "Film & delivery",
    text: "Final mix, mastering and delivery for YouTube 16:9 and Instagram 9:16.",
    icon: Clapperboard,
  },
];

export function ProcessSteps({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div
          className="pointer-events-none absolute top-7 right-8 left-8 hidden h-px bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 lg:block"
          aria-hidden="true"
        />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="glass glass-hover relative rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-display text-xs font-semibold tracking-[0.28em] text-gold-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-400">{step.text}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-xs leading-relaxed text-silver-500">
        Scope, price, usage and delivery milestones are agreed in writing before production begins.
      </p>
    </div>
  );
}
