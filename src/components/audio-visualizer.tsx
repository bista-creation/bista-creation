"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  bars?: number;
  height?: number;
};

export function AudioVisualizer({ className, bars = 48, height = 140 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth * dpr;
    const h = height * dpr;
    canvas.width = width;
    canvas.height = h;

    let raf = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (t: number) => {
      const w = canvas.clientWidth;
      const hh = height;
      ctx.clearRect(0, 0, w, hh);

      const gap = 2 * dpr;
      const step = w / bars;
      const barWidth = Math.max(1.5 * dpr, step - gap);

      for (let i = 0; i < bars; i += 1) {
        const phase = (i / bars) * Math.PI * 2;
        const amp =
          Math.sin(t / 900 + phase) * 0.35 +
          Math.sin(t / 430 + phase * 2.2) * 0.35 +
          Math.sin(t / 170 + phase * 4.1) * 0.3;
        const bh = Math.max(4 * dpr, (amp * 0.5 + 0.5) * (hh - 12 * dpr));
        const x = i * step + gap / 2;
        const y = hh - bh;

        const grad = ctx.createLinearGradient(0, y, 0, hh);
        grad.addColorStop(0, "#f7e7bd");
        grad.addColorStop(0.5, "#d4af37");
        grad.addColorStop(1, "#e62143");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, bh, barWidth / 2);
        ctx.fill();
      }

      if (!reduced) {
        raf = requestAnimationFrame(draw);
      }
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [bars, height]);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height }} aria-hidden="true" />;
}
