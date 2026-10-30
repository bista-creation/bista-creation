import Link from "next/link";
import { Facebook, Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import { BistaBadge } from "@/components/logo";
import { site } from "@/lib/site";

const explore = [
  { href: "/work", label: "Selected work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "The studio" },
  { href: "/commission", label: "Commission a song" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#custom-song", label: "Custom songs & lyrics" },
  { href: "/services#anthem", label: "Wedding & anniversary anthems" },
  { href: "/services#music-video", label: "Cinematic music videos" },
  { href: "/services#shorts", label: "Shorts & vertical cuts" },
];

const socialLinks = [
  { href: site.youtube.url, label: "YouTube", icon: Youtube },
  { href: site.instagram.url, label: "Instagram", icon: Instagram },
  { href: site.facebook.url, label: "Facebook", icon: Facebook },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-ink-950/55 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 hairline" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BistaBadge className="h-12 w-12" />
              <div>
                <p className="text-display text-sm font-semibold tracking-[0.28em] text-white uppercase">
                  Bista <span className="text-gold-400">Creation</span>
                </p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.22em] text-gold-300/90 uppercase">
                  Music videos • Shorts
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver-400">
              A Nepal-based creative studio making cinematic songs and music videos with
              Himalayan soul and next-generation tools.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Bista Creation on ${label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-silver-300 transition hover:border-gold-400/45 hover:bg-gold-500/10 hover:text-gold-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-[10px]">Explore</p>
            <ul className="mt-5 space-y-3">
              {explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-400 transition hover:text-gold-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[10px]">Services</p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-400 transition hover:text-gold-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[10px]">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-silver-300 transition hover:text-gold-200"
                >
                  <MessageCircle className="h-4 w-4 text-gold-400" />
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-silver-300 transition hover:text-gold-200"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  {site.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-silver-400 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Nepal-based · Worldwide
                </span>
              </li>
            </ul>
            <Link href="/commission" className="btn btn-glass btn-sm mt-6 w-full">
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-xs text-silver-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {site.name}. All rights reserved.</p>
            <p className="text-silver-500">
              Powered by Suno AI Pro &amp; Google Flow
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition hover:text-gold-200">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-gold-200">
                Terms &amp; rights
              </Link>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-[11px] leading-relaxed text-silver-500">
            Independent studio. Suno AI Pro and Google Flow are trademarks of their respective
            owners. Bista Creation is not affiliated with or endorsed by Suno AI or Google.
          </p>
        </div>
      </div>
    </footer>
  );
}
