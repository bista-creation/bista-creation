export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-gold-500/30 border-t-gold-500" />
        <p className="text-display text-lg tracking-[0.3em] text-gold-300/80 uppercase">
          Cueing the reel
        </p>
      </div>
    </div>
  );
}
