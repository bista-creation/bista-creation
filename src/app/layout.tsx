import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bista Creation — Custom Songs & Cinematic Music Videos",
    template: "%s — Bista Creation",
  },
  description:
    "Bista Creation is a Nepal-based creative studio making cinematic music videos, Nepali AI remixes, and viral shorts — powered by Suno AI Pro and Google Flow.",
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    siteName: "Bista Creation",
    title: "Bista Creation — Custom Songs & Cinematic Music Videos",
    description:
      "Where Himalayan soul meets cinematic AI music. Custom songs and music videos made with Suno AI Pro and Google Flow.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bista Creation — Custom Songs & Cinematic Music Videos",
    description:
      "Where Himalayan soul meets cinematic AI music. Custom songs and music videos made with Suno AI Pro and Google Flow.",
  },
  icons: [
    { url: "/brand/logo.svg", type: "image/svg+xml", rel: "icon" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink-950 text-silver-400 font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
