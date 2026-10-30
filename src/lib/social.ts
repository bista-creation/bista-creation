import { fallbackSocialItems, fallbackFacebookPosts } from "@/content/fallback";
import type { SocialFeed, SocialItem } from "@/lib/types";

export async function getInstagramFeed(): Promise<SocialFeed> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (token && accountId) {
    try {
      const version = process.env.META_GRAPH_VERSION ?? "v23.0";
      const url = `https://graph.facebook.com/${version}/${encodeURIComponent(
        accountId
      )}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,media_product_type&access_token=${encodeURIComponent(
        token
      )}&limit=12`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) {
        const json = (await res.json()) as { data?: Array<Record<string, unknown>> };
        const items: SocialItem[] = (json.data ?? []).map((entry) => ({
          id: String(entry.id ?? ""),
          caption: entry.caption ? String(entry.caption) : undefined,
          mediaType: String(entry.media_type ?? "IMAGE"),
          mediaUrl: entry.media_url ? String(entry.media_url) : undefined,
          thumbnailUrl: entry.thumbnail_url ? String(entry.thumbnail_url) : undefined,
          permalink: entry.permalink ? String(entry.permalink) : undefined,
          timestamp: entry.timestamp ? String(entry.timestamp) : undefined,
          isReel: String(entry.media_product_type ?? "") === "REELS",
        }));
        if (items.length > 0) {
          return { items, source: "live", updatedAt: new Date().toISOString() };
        }
      }
    } catch {
      // fall through to fallback
    }
  }

  return {
    items: fallbackSocialItems,
    source: "fallback",
    updatedAt: new Date().toISOString(),
    note: "Connect an Instagram Business/Creator account to stream live media.",
  };
}

export async function getFacebookPosts(): Promise<SocialFeed> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const version = process.env.META_GRAPH_VERSION ?? "v23.0";

  if (pageId && token) {
    try {
      const url = `https://graph.facebook.com/${version}/${encodeURIComponent(
        pageId
      )}/posts?fields=id,message,created_time,full_picture,permalink_url&access_token=${encodeURIComponent(
        token
      )}&limit=6`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) {
        const json = (await res.json()) as { data?: Array<Record<string, unknown>> };
        const items: SocialItem[] = (json.data ?? []).map((entry) => ({
          id: String(entry.id ?? ""),
          caption: entry.message ? String(entry.message) : undefined,
          mediaType: entry.full_picture ? "IMAGE" : "TEXT",
          mediaUrl: entry.full_picture ? String(entry.full_picture) : undefined,
          thumbnailUrl: entry.full_picture ? String(entry.full_picture) : undefined,
          permalink: entry.permalink_url ? String(entry.permalink_url) : undefined,
          timestamp: entry.created_time ? String(entry.created_time) : undefined,
        }));
        if (items.length > 0) {
          return { items, source: "live", updatedAt: new Date().toISOString() };
        }
      }
    } catch {
      // fall through to fallback
    }
  }

  return { items: fallbackFacebookPosts, source: "fallback", updatedAt: new Date().toISOString() };
}
