"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BistaBadge, BistaWordmark } from "@/components/logo";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div
          className={`mt-3 flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5 ${
            scrolled || open
              ? "glass-strong liquid-edge shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full"
            aria-label="Bista Creation home"
          >
            <BistaBadge className="h-10 w-10" />
            <BistaWordmark />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative text-xs font-semibold tracking-[0.18em] uppercase transition ${
                    active ? "text-gold-200" : "text-silver-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-gold-400 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/commission" className="btn btn-gold btn-sm">
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-silver-100 transition hover:border-gold-400/40 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div
            id="mobile-menu"
            className="glass-strong liquid-edge mt-2 rounded-2xl p-4 md:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-semibold tracking-[0.14em] uppercase transition ${
                      active
                        ? "bg-gold-500/12 text-gold-200"
                        : "text-silver-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-4">
              <Link href="/commission" className="btn btn-gold w-full">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass w-full"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
