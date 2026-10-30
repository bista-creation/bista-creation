import { BistaBadge } from "@/components/logo";
import { site, socials } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <BistaBadge className="h-16 w-16" />
            <p className="mt-4 text-sm text-silver-400">{site.tagline}</p>
            <p className="mt-2 text-xs text-silver-500">Made in Nepal.</p>
          </div>

          <div>
            <p className="text-display text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">
              Follow
            </p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-silver-300 transition hover:text-gold-300">
                    {s.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-display text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-silver-300">
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-gold-300">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-silver-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Independent studio. Suno AI Pro and Google Flow are trademarks of their respective
            owners.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition hover:text-gold-300">Privacy</a>
            <a href="/terms" className="transition hover:text-gold-300">Terms &amp; Rights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
