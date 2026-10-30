import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Rights",
  description: "Bista Creation terms, commission rules and usage rights for commissioned music and videos.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-display text-xs font-semibold tracking-[0.38em] text-gold-400 uppercase">Legal</p>
      <h1 className="mt-4 text-display text-3xl font-bold text-white sm:text-5xl">Terms &amp; Rights</h1>
      <p className="mt-6 text-sm text-silver-400">Last updated: October 2026</p>

      <div className="mt-10 space-y-6 text-silver-300">
        <p>
          Bista Creation is an independent creative studio. Commissioned songs, lyrics, vocals and
          cinematic visuals are delivered for the agreed project scope.
        </p>
        <p>
          Copyright and usage rights remain the responsibility of the client and original rights
          holders, where applicable. Clients retain ownership of original lyrics and story content;
          licensing for third-party music remains with the original creators.
        </p>
        <p>
          AI-generated assets are used under the applicable terms of the tools involved (Suno AI Pro,
          Google Flow, Veo). Bista Creation is not affiliated with or endorsed by Suno AI or Google.
        </p>
        <p>
          This website and its content are provided for informational purposes. Nothing here creates
          an order, payment obligation or delivery commitment outside a confirmed commission agreement.
        </p>
      </div>

      <p className="mt-12 text-sm">
        <Link href="/" className="text-gold-300 underline-offset-4 hover:underline">Back to home</Link>
      </p>
    </main>
  );
}
