"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-display text-6xl text-white sm:text-7xl">Signal lost</p>
      <h1 className="mt-4 text-display text-2xl text-white sm:text-3xl">
        Something went wrong while playing this reel.
      </h1>
      <p className="mt-4 max-w-md text-sm text-silver-300 sm:text-base">
        {error?.message ?? "An unexpected error occurred."}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-full border border-gold-500/60 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-300 transition hover:bg-gold-500/20"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-silver-300 transition hover:border-white/30"
        >
          Back home
        </Link>
      </div>
      {mounted && null}
    </div>
  );
}
