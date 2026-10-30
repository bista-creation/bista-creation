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
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = false;
    let visible = false;
    let last = 0;
    let gradient: CanvasGradient | null = null;

    const resize = () => {
      const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(height * dpr));
      canvas.width = width;
      canvas.height = h;
      gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, "#f7e7bd");
      gradient.addColorStop(0.5, "#d4af37");
      gradient.addColorStop(1, "#e62143");
    };

    const paint = (t: number) => {
      const w = canvas.width;
      const hh = canvas.height;
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

        if (gradient) ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, bh, barWidth / 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      raf = 0;
      if (!running) return;
      // Cap the decorative animation at roughly 30fps.
      if (t - last >= 33) {
        last = t;
        paint(t);
      }
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    paint(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      },
      { rootMargin: "200px" }
    );
    observer.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      paint(0);
    });
    resizeObserver.observe(canvas);

    return () => {
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [bars, height]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height }}
      aria-hidden="true"
    />
  );
}
