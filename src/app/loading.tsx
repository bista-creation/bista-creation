export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className="nova-ring absolute inset-0 animate-spin rounded-full opacity-60 blur-[1px]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-2 rounded-full border border-white/10 bg-ink-950/80"
            aria-hidden="true"
          />
          <div className="relative h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
        </div>
        <p className="text-display text-xs font-semibold tracking-[0.32em] text-gold-300 uppercase">
          Cueing the reel
        </p>
      </div>
    </div>
  );
}
