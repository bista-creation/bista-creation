"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BistaBadge, BistaWordmark } from "@/components/logo";
import { site } from "@/lib/site";

const links = [
  { href: "#releases", label: "Releases" },
  { href: "#social", label: "Social Wall" },
  { href: "#tech", label: "Our Tech" },
  { href: "#commission", label: "Commission Song" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-gold-500/20 bg-ink-950/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Bista Creation home">
          <BistaBadge className="h-10 w-10" />
          <BistaWordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold tracking-[0.18em] text-silver-300 uppercase transition hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-500/60 bg-gold-500/10 px-5 py-2.5 text-xs font-bold tracking-[0.16em] text-gold-300 uppercase transition hover:bg-gold-500/20"
          >
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-silver-200 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold-500/20 bg-ink-950/95 px-4 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-[0.16em] text-silver-200 uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#22c55e] px-5 py-3 text-xs font-bold tracking-[0.16em] text-black uppercase"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
