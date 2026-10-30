import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import { FeaturedReleases } from "@/components/featured-releases";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { MediaHub } from "@/components/media-hub";
import { CommissionForm } from "@/components/commission-form";
import { StudioSection } from "@/components/studio-section";
import { TechPipeline } from "@/components/tech-pipeline";
import { SiteHeader } from "@/components/site-header";
import { getFacebookPosts, getInstagramFeed } from "@/lib/social";
import { getYouTubeShorts, getYouTubeVideos } from "@/lib/youtube";
import type { SocialFeed, YouTubeVideo } from "@/lib/types";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bista Creation — Custom Songs & Cinematic Music Videos",
  description: site.description,
};

export default async function Home() {
  const youtube = await getYouTubeVideos();
  const shorts = await getYouTubeShorts();
  const instagram = await getInstagramFeed();
  const facebook = await getFacebookPosts();

  const fullVideos: YouTubeVideo[] = youtube.items.filter((v) => !v.isShort);
  const shortsList: YouTubeVideo[] = shorts.items.filter((v) => v.isShort);

  const instagramFeed: SocialFeed = instagram;
  const facebookFeed: SocialFeed = facebook;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
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
      <Footer />
      <FloatingContact />
    </>
  );
}
