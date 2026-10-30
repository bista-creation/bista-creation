import { site, siteUrl } from "@/lib/site";
import type { YouTubeVideo } from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export type JsonLdNode = Record<string, unknown>;

export type BreadcrumbEntry = {
  label: string;
  href: string;
};

export function organizationNode(): JsonLdNode {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId,
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.whatsappNumber,
      email: site.email,
      availableLanguage: ["English", "Nepali"],
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
        provider: { "@id": organizationId },
      },
    },
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": organizationId },
  };
}

export function webPageNode({
  type,
  path,
  name,
  description,
  aboutId,
}: {
  type: string;
  path: string;
  name: string;
  description: string;
  aboutId?: string;
}): JsonLdNode {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": websiteId },
    inLanguage: "en",
    ...(aboutId ? { about: { "@id": aboutId } } : {}),
  };
}

export function videoNode(video: YouTubeVideo): JsonLdNode {
  return {
    "@type": "VideoObject",
    "@id": `${video.videoUrl}#video`,
    name: video.title,
    description:
      video.description?.trim() || `${video.title} — a Bista Creation music release.`,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.publishedAt,
    url: video.videoUrl,
    contentUrl: video.videoUrl,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    publisher: { "@id": organizationId },
  };
}

export function videoItemListNode(videos: YouTubeVideo[]): JsonLdNode {
  return {
    "@type": "ItemList",
    name: "Bista Creation releases",
    numberOfItems: videos.length,
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: videoNode(video),
    })),
  };
}

export function serviceCatalogNode(
  services: Array<{ name: string; description: string }>
): JsonLdNode {
  return {
    "@type": "OfferCatalog",
    name: "Bista Creation services",
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.name,
        provider: { "@id": organizationId },
        areaServed: "Worldwide",
      },
    })),
  };
}

export function faqNode(faqs: ReadonlyArray<{ q: string; a: string }>): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl("/commission")}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbNode(entries: BreadcrumbEntry[]): JsonLdNode {
  const last = entries[entries.length - 1];
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(last.href)}#breadcrumb`,
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.label,
      item: absoluteUrl(entry.href),
    })),
  };
}

export function jsonLdGraph(nodes: JsonLdNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
