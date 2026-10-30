export function BistaBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Bista Creation logo"
    >
      <defs>
        <linearGradient id="goldOuterRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7e7bd" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#a8872b" />
          <stop offset="100%" stopColor="#f2dd9b" />
        </linearGradient>
        <linearGradient id="goldFontGradient" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#f7e7bd" />
          <stop offset="25%" stopColor="#d4af37" />
          <stop offset="60%" stopColor="#b08f2a" />
          <stop offset="90%" stopColor="#8a6d1f" />
          <stop offset="100%" stopColor="#f2dd9b" />
        </linearGradient>
        <linearGradient id="redPlayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d6a" />
          <stop offset="100%" stopColor="#e62143" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="196" fill="#09090b" />
      <circle cx="200" cy="200" r="192" stroke="url(#goldOuterRing)" strokeWidth="6" />
      <circle cx="200" cy="200" r="186" stroke="#18181b" strokeWidth="1.5" />

      {/* B monogram + music note */}
      <text
        x="158"
        y="238"
        fontFamily="'Cinzel', 'Times New Roman', serif"
        fontSize="182"
        fontWeight="700"
        fill="url(#goldFontGradient)"
        textAnchor="end"
        letterSpacing="-2"
      >
        B
      </text>
      <g transform="translate(182, 162)">
        <path
          d="M 16 0 C 18 20 28 42 36 50 C 44 58 48 55 42 42 C 38 32 30 18 24 2 Z"
          fill="url(#goldFontGradient)"
        />
        <path
          d="M 12 0 L 12 85 C 8 82 2 80 -6 82 C -18 84 -26 94 -24 104 C -22 114 -10 120 2 118 C 14 116 22 106 20 92 L 20 18 C 24 14 36 8 48 10 L 48 2 C 34 0 22 4 12 0 Z"
          fill="url(#goldFontGradient)"
        />
      </g>

      {/* C monogram */}
      <path
        d="M 296 146 C 282 134 262 126 238 126 C 194 126 162 160 162 210 C 162 262 196 294 242 294 C 266 294 286 286 300 272 L 292 258 C 280 270 264 276 242 276 C 198 276 172 250 172 210 C 172 170 196 144 230 144 C 250 144 266 150 278 160 Z"
        fill="url(#goldFontGradient)"
      />

      {/* Play triangle */}
      <path
        d="M 238 148 L 238 212 L 292 180 Z"
        fill="url(#redPlayGradient)"
      />

      {/* Gold waveform */}
      <path
        d="M 40 320 C 70 300, 90 300, 120 320 C 150 340, 170 340, 200 320 C 230 300, 250 300, 280 320 C 300 332, 320 332, 340 320"
        stroke="url(#goldFontGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function BistaWordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-3 ${className ?? ""}`}>
      <span className="text-display text-lg font-semibold tracking-[0.32em] text-white uppercase sm:text-xl">
        Bista <span className="text-gold-500">Creation</span>
      </span>
      <span className="hidden text-[10px] font-semibold tracking-[0.34em] text-gold-400 uppercase sm:inline">
        Music Videos • Shorts
      </span>
    </span>
  );
}
