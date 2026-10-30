import { Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <div className="glass-strong liquid-edge flex items-center gap-2 rounded-full p-2 shadow-2xl">
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with Bista Creation on WhatsApp at ${site.whatsappDisplay}`}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-ink-950 transition hover:bg-emerald-300"
        >
          <span
            className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-25"
            aria-hidden="true"
          />
          <MessageCircle className="relative h-5 w-5" />
        </a>
        <a
          href={`mailto:${site.email}`}
          aria-label={`Email Bista Creation at ${site.email}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 bg-gold-500/10 text-gold-200 transition hover:bg-gold-500/20"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
