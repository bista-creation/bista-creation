"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-display text-7xl text-white sm:text-8xl">404</p>
      <h1 className="mt-4 text-display text-2xl text-white sm:text-3xl">
        This frame got lost in the mix.
      </h1>
      <p className="mt-4 max-w-md text-sm text-silver-300 sm:text-base">
        The page you are looking for does not exist. Let&apos;s get you back to the
        sound.
      </p>
      <a
        href="/"
        className="mt-8 rounded-full border border-gold-500/60 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-300 transition hover:bg-gold-500/20"
      >
        Back to the studio
      </a>
      {mounted && null}
    </div>
  );
}
