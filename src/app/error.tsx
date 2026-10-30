"use client";

import Link from "next/link";
import { Home, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center px-4 py-24">
      <div className="glass liquid-edge w-full max-w-xl rounded-[2rem] p-8 text-center sm:p-12">
        <p className="text-display text-5xl font-bold text-white sm:text-6xl">Signal lost</p>
        <h1 className="mt-4 text-display text-2xl font-bold text-balance text-white sm:text-3xl">
          Something went wrong while playing this reel.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-silver-300">
          Try the page again. If it keeps happening, message the studio and we will sort it out.
        </p>
        {error?.message ? (
          <p className="mx-auto mt-4 max-w-md rounded-xl border border-white/10 bg-ink-950/50 px-4 py-3 font-mono text-[11px] break-words text-silver-500">
            {error.message}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={() => reset()} className="btn btn-gold">
            <RotateCcw className="h-4 w-4" />
            Try again
          </button>
          <Link href="/" className="btn btn-glass">
            <Home className="h-4 w-4" />
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
