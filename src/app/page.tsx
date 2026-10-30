import type { Metadata } from "next";
import { CommissionForm } from "@/components/commission-form";
import { Faq } from "@/components/faq";
import { FeaturedReleases } from "@/components/featured-releases";
import { Hero } from "@/components/hero";
import { MediaHub } from "@/components/media-hub";
import { StudioSection } from "@/components/studio-section";
import { TechPipeline } from "@/components/tech-pipeline";
import { getFacebookPosts, getInstagramFeed } from "@/lib/social";
import { getYouTubeShorts, getYouTubeVideos } from "@/lib/youtube";
import type { SocialFeed, YouTubeVideo } from "@/lib/types";
import { site, siteUrl } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Bista Creation — Custom Songs & Cinematic Music Videos",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

export default async function Home() {
  const youtube = await getYouTubeVideos();
  const shorts = await getYouTubeShorts();
  const instagram = await getInstagramFeed();
  const facebook = await getFacebookPosts();

  const fullVideos: YouTubeVideo[] = youtube.items.filter((v) => !v.isShort);
  const shortsList: YouTubeVideo[] = shorts.items.filter((v) => v.isShort);
  const featured = fullVideos[0] ?? shortsList[0];

  const instagramFeed: SocialFeed = instagram;
  const facebookFeed: SocialFeed = facebook;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: site.name,
    alternateName: "Bista Creation Studio",
    description: site.description,
    url: siteUrl,
    logo: absoluteUrl("/brand/logo.svg"),
    email: site.email,
    telephone: site.whatsappNumber,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
    },
    sameAs: [site.youtube.url, site.instagram.url, site.facebook.url],
    knowsAbout: [
      "Custom songwriting",
      "AI music production",
      "Cinematic music videos",
      "Nepali Lok-Pop",
      "Short-form video",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom song and cinematic music video commissions",
        serviceType: "Music production and music video production",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <Hero featured={featured} />
        <FeaturedReleases videos={fullVideos} />
        <TechPipeline />
        <MediaHub
          fullVideos={fullVideos}
          shorts={shortsList}
          instagram={instagramFeed}
          facebook={facebookFeed}
          youtubeUrl={site.youtube.url}
          instagramUrl={site.instagram.url}
          facebookUrl={site.facebook.url}
        />
        <StudioSection />
        <Faq />
        <CommissionForm />
      </main>
    </>
  );
}
