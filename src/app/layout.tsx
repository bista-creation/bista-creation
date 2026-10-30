import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/footer";
import { SiteBackdrop } from "@/components/site-backdrop";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bista Creation — Custom Songs & Cinematic Music Videos",
    template: "%s — Bista Creation",
  },
  description:
    "Bista Creation is a Nepal-based creative studio making cinematic music videos, Nepali AI remixes, and viral shorts — powered by Suno AI Pro and Google Flow.",
  applicationName: "Bista Creation",
  authors: [{ name: "Bista Creation", url: siteUrl }],
  creator: "Bista Creation",
  category: "music",
  keywords: [
    "Bista Creation",
    "music videos Nepal",
    "AI music videos",
    "Suno AI Pro",
    "Google Flow",
    "Veo",
    "custom song",
    "Nepali music video",
    "cinematic music video",
    "AI remix",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bista Creation",
    title: "Bista Creation — Custom Songs & Cinematic Music Videos",
    description:
      "Where Himalayan soul meets cinematic AI music. Custom songs and music videos made with Suno AI Pro and Google Flow.",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bista Creation — Custom Songs & Cinematic Music Videos",
    description:
      "Where Himalayan soul meets cinematic AI music. Custom songs and music videos made with Suno AI Pro and Google Flow.",
  },
  icons: [{ url: "/brand/logo.svg", type: "image/svg+xml", rel: "icon" }],
};

export const viewport: Viewport = {
  themeColor: "#05050a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-950 font-sans text-silver-300 antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteBackdrop />
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <Footer />
          <FloatingContact />
        </div>
      </body>
    </html>
  );
}
