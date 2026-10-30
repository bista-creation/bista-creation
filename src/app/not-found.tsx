import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="relative flex min-h-[80vh] items-center justify-center px-4 py-24">
      <div className="glass liquid-edge w-full max-w-xl rounded-[2rem] p-8 text-center sm:p-12">
        <p className="nova-text text-display text-7xl font-bold sm:text-8xl">404</p>
        <h1 className="mt-4 text-display text-2xl font-bold text-balance text-white sm:text-3xl">
          This frame got lost in the mix.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-silver-300 sm:text-base">
          The page you are looking for does not exist. Let&apos;s get you back to the sound.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-gold">
            <ArrowLeft className="h-4 w-4" />
            Back to the studio
          </Link>
          <Link href="/work" className="btn btn-glass">
            <Play className="h-3.5 w-3.5 fill-current" />
            Explore the work
          </Link>
        </div>
      </div>
    </main>
  );
}
