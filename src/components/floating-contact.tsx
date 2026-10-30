import { Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-2.5 shadow-2xl sm:gap-3 sm:px-4">
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with Bista Creation on WhatsApp at ${site.whatsappDisplay}`}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#22c55e] transition hover:bg-green-400"
        >
          <span className="absolute h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-30" aria-hidden="true" />
          <MessageCircle className="h-5 w-5 text-black" />
        </a>
        <a
          href={`mailto:${site.email}`}
          aria-label={`Email Bista Creation at ${site.email}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-300 transition hover:bg-gold-500/20"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
