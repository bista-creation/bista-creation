import type { Metadata } from "next";
import { CommissionForm } from "@/components/commission-form";
import { Faq } from "@/components/faq";
import { FeaturedReleases } from "@/components/featured-releases";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { MediaHub } from "@/components/media-hub";
import { StudioSection } from "@/components/studio-section";
import { TechPipeline } from "@/components/tech-pipeline";
import { getFacebookPosts, getInstagramFeed } from "@/lib/social";
import { getYouTubeShorts, getYouTubeVideos } from "@/lib/youtube";
import type { SocialFeed, YouTubeVideo } from "@/lib/types";
import { site } from "@/lib/site";
import { jsonLdGraph, organizationNode, videoNode, websiteNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Bista Creation — Custom Songs & Cinematic Music Videos",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bista Creation — Custom Songs & Cinematic Music Videos",
    description:
      "Where Himalayan soul meets cinematic AI music. Custom songs and music videos made with Suno AI Pro and Google Flow.",
    url: "/",
  },
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

  const jsonLd = jsonLdGraph([
    organizationNode(),
    websiteNode(),
    ...(featured ? [videoNode(featured)] : []),
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
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
