import { AudioLines, Clapperboard, Rocket } from "lucide-react";

const steps = [
  { title: "Brief", text: "Share the song, story, mood or brief." },
  { title: "Concept & lyrics", text: "We shape the concept and craft the lyrics." },
  { title: "Production", text: "Suno AI Pro vocals + Google Flow/Veo visuals." },
  { title: "Film & delivery", text: "Mastering and delivery for YouTube and Instagram." },
];

export function TechPipeline() {
  return (
    <section id="tech" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">
            Our Tech
          </p>
          <h2 className="mt-4 text-display text-3xl font-bold text-white sm:text-5xl">
            Built on the best in breed.
          </h2>
          <p className="mt-4 text-silver-300">
            Three disciplines, one studio: AI-assisted songwriting and production,
            cinematic generation, and delivery-grade mastering.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10">
              <AudioLines className="h-5 w-5 text-gold-300" />
            </div>
            <p className="mt-6 text-display text-xs font-semibold tracking-[0.3em] text-gold-400">01</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Suno AI Pro Audio Engineering</h3>
            <p className="mt-3 text-sm text-silver-400">
              Multi-genre vocal synthesis with Lok-Pop and Melodic EDM drop mastering.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10">
              <Clapperboard className="h-5 w-5 text-gold-300" />
            </div>
            <p className="mt-6 text-display text-xs font-semibold tracking-[0.3em] text-gold-400">02</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Google Flow &amp; Veo Cinematics</h3>
            <p className="mt-3 text-sm text-silver-400">
              Character continuity, 4K upscaling, and rhythmic camera cuts for cinematic AI video.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10">
              <Rocket className="h-5 w-5 text-gold-300" />
            </div>
            <p className="mt-6 text-display text-xs font-semibold tracking-[0.3em] text-gold-400">03</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Mastered Release Delivery</h3>
            <p className="mt-3 text-sm text-silver-400">
              Complete video mastering ready for YouTube 16:9 and Instagram 9:16.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-ink-900/70 p-6">
              <p className="text-display text-xs font-semibold tracking-[0.3em] text-gold-500">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-3 text-base font-semibold text-white">{s.title}</h4>
              <p className="mt-2 text-sm text-silver-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
