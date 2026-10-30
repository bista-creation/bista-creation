export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink-950" />

      <div className="absolute inset-0 grid-lines opacity-70" />

      <div className="aurora-orb animate-aurora absolute -top-56 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(212,175,55,0.24),transparent_66%)]" />
      <div className="aurora-orb animate-aurora absolute top-[28%] -left-48 h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(244,63,94,0.16),transparent_68%)] [animation-delay:-6s]" />
      <div className="aurora-orb animate-aurora absolute top-[55%] -right-40 h-[34rem] w-[34rem] bg-[radial-gradient(circle,rgba(139,233,255,0.1),transparent_68%)] [animation-delay:-11s]" />
      <div className="aurora-orb absolute bottom-[-18rem] left-1/3 h-[30rem] w-[44rem] bg-[radial-gradient(circle,rgba(205,184,255,0.1),transparent_70%)]" />

      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
