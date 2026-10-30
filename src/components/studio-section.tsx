import Link from "next/link";
import { ArrowUpRight, Clapperboard, Handshake, Mountain, ShieldCheck } from "lucide-react";
import { BistaBadge } from "@/components/logo";

const principles = [
  {
    title: "Himalayan soul first",
    text: "Nepali stories, voices and landscapes at the centre — not decoration.",
    icon: Mountain,
  },
  {
    title: "Cinematic by default",
    text: "Every release is built with a visual world, not just a slideshow.",
    icon: Clapperboard,
  },
  {
    title: "Transparent commissions",
    text: "Scope, price and milestones agreed before a single note is made.",
    icon: Handshake,
  },
  {
    title: "Artist-first rights",
    text: "You keep your story. Usage and licensing are clear from day one.",
    icon: ShieldCheck,
  },
];

export function StudioSection() {
  return (
    <section id="studio" className="relative scroll-mt-24 section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass liquid-edge relative overflow-hidden rounded-[2.5rem] p-7 sm:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(233,200,119,0.16),transparent_68%)] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-gold-400/70" aria-hidden="true" />
                The studio
              </span>
              <h2 className="mt-5 text-display text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
                Small studio. Big cinematic sound.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-silver-300">
                Bista Creation began with a simple frustration: Nepal had incredible songs,
                incredible voices and incredible landscapes — but almost no cinematic visual
                world to put them in.
              </p>
              <p className="mt-4 text-base leading-relaxed text-silver-400">
                We build that world. Using next-generation AI visuals together with deep audio
                craft, we make music videos that feel Nepali at the core and cinematic
                everywhere else.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-silver-400">
                Our name nods to the idea of a spark — a small light that becomes a wildfire of
                sound and image.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-gold btn-sm">
                  Meet the studio
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/services" className="btn btn-glass btn-sm">
                  How we work
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
              <div
                className="nova-ring animate-spin-slow absolute inset-0 rounded-full opacity-55 blur-[1px]"
                aria-hidden="true"
              />
              <div
                className="absolute inset-3 rounded-full border border-white/10 bg-ink-950/70 backdrop-blur-xl"
                aria-hidden="true"
              />
              <BistaBadge className="relative h-40 w-40 drop-shadow-[0_24px_60px_rgba(212,175,55,0.25)] sm:h-44 sm:w-44" />

              <span className="glass-strong absolute! -top-2 right-0 rounded-full px-3.5 py-2 text-[10px] font-semibold tracking-[0.2em] text-gold-200 uppercase">
                Nepal
              </span>
              <span className="glass-strong absolute! -bottom-2 left-0 rounded-full px-3.5 py-2 text-[10px] font-semibold tracking-[0.2em] text-silver-300 uppercase">
                Worldwide delivery
              </span>
            </div>
          </div>

          <div className="relative mt-12 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="glass-soft glass-hover rounded-2xl p-5"
                >
                  <Icon className="h-4.5 w-4.5 text-gold-300" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold text-white">{principle.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-silver-400">{principle.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
