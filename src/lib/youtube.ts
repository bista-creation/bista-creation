import { XMLParser } from "fast-xml-parser";
import { fallbackYouTubeShorts, fallbackYouTubeVideos } from "@/content/fallback";
import type { YouTubeVideo } from "@/lib/types";

const parser = new XMLParser({ ignoreAttributes: false, isArray: (name: string) => name === "entry" });

export const YOUTUBE_RSS_URL =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCLJK80I7OcbMTqIWNEpF5aw";
export const YOUTUBE_API_URL =
  "https://www.googleapis.com/youtube/v3/search";

export const YOUTUBE_DEFAULT_CHANNEL_ID = "UCLJK80I7OcbMTqIWNEpF5aw";

function text(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(text).join("");
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    return (
      (record["#text"] as string | undefined) ??
      Object.values(record).join(" ")
    );
  }
  return "";
}

function getChild(node: Record<string, unknown>, key: string): unknown {
  return node[key];
}

function extractVideoId(entry: Record<string, unknown>): string {
  const videoId = getChild(entry, "yt:videoId");
  const fromObject = text(videoId);
  if (fromObject) return fromObject;

  const idNode = getChild(entry, "id");
  const idText = text(idNode);
  const match = idText.match(/yt:video:([A-Za-z0-9_-]+)/);
  if (match) return match[1];

  const link = getChild(entry, "link");
  const linkValue = text(link);
  const shortMatch = linkValue.match(/shorts\/([A-Za-z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];

  const title = text(getChild(entry, "title"));
  const idMatch = title.match(/(?:v=|shorts\/)([A-Za-z0-9_-]{6,})/);
  return idMatch?.[1] ?? "";
}

function extractIsShort(entry: Record<string, unknown>, videoId: string): boolean {
  const link = getChild(entry, "link");
  const linkValue = text(link);
  if (linkValue.includes("/shorts/")) return true;
  const title = text(getChild(entry, "title"));
  if (title.includes("#shorts") || title.includes("#short")) return true;
  if (videoId.startsWith("shorts/")) return true;
  return false;
}

export async function getYouTubeVideos(): Promise<{
  items: YouTubeVideo[];
  source: "api" | "rss" | "fallback";
  updatedAt: string;
}> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID ?? YOUTUBE_DEFAULT_CHANNEL_ID;

  if (apiKey) {
    try {
      const url = `${YOUTUBE_API_URL}?key=${encodeURIComponent(apiKey)}&channelId=${encodeURIComponent(
        channelId
      )}&part=snippet,id&order=date&maxResults=8`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) {
        const json = (await res.json()) as { items?: Array<Record<string, unknown>> };
        const items: YouTubeVideo[] = (json.items ?? []).map((entry) => {
          const snippet = (entry.snippet ?? {}) as Record<string, unknown>;
          const snippetTitle = text(snippet.title) || "Untitled";
          const idRecord = entry.id as Record<string, unknown> | undefined;
          const videoId = String(idRecord?.videoId ?? entry.id ?? "");
          const isShort = snippetTitle.includes("#shorts") || snippetTitle.includes("#short");
          const videoUrl = videoId
            ? `https://www.youtube.com/watch?v=${videoId}`
            : "https://www.youtube.com/@BistaCreationStudio";
          const published = text(snippet.publishedAt) || new Date().toISOString();
          const id = videoId || snippetTitle;
          return {
            id,
            title: snippetTitle,
            publishedAt: published,
            videoUrl,
            isShort,
            thumbnail: id
              ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
              : "https://i.ytimg.com/vi/Bista1VideoPlaceholder/hqdefault.jpg",
          } satisfies YouTubeVideo;
        });
        if (items.length > 0) {
          return { items, source: "api", updatedAt: new Date().toISOString() };
        }
      }
    } catch {
      // fall through to RSS
    }
  }

  try {
    const res = await fetch(YOUTUBE_RSS_URL, { next: { revalidate: 3600 } });
    if (res.ok) {
      const xml = await res.text();
      const parsed = parser.parse(xml) as Record<string, unknown>;
      const feed = (parsed?.feed ?? {}) as Record<string, unknown>;
      const entries = (feed.entry ?? []) as Array<Record<string, unknown>>;

      const items: YouTubeVideo[] = (Array.isArray(entries) ? entries : [entries]).map(
        (entry) => {
          const videoId = extractVideoId(entry);
          const title = text(getChild(entry, "title")) || "Untitled";
          const published =
            text(getChild(entry, "published")) || new Date().toISOString();
          const link = text(getChild(entry, "link"));
          const isShort = extractIsShort(entry, videoId);
          const fullUrl =
            link || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "");
          return {
            id: videoId || title,
            title,
            publishedAt: published,
            videoUrl: fullUrl,
            isShort,
            thumbnail: videoId
              ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
              : "https://i.ytimg.com/vi/Bista1VideoPlaceholder/hqdefault.jpg",
          };
        }
      );

      if (items.length > 0) {
        return { items, source: "rss", updatedAt: new Date().toISOString() };
      }
    }
  } catch {
    // Network or parser failure — use curated fallback data below.
  }

  return {
    items: fallbackYouTubeVideos,
    source: "fallback",
    updatedAt: new Date().toISOString(),
  };
}

export async function getYouTubeShorts() {
  const data = await getYouTubeVideos();
  const shorts =
    data.source === "fallback"
      ? fallbackYouTubeShorts
      : data.items.filter((v) => v.isShort);

  if (shorts.length > 0) {
    return { items: shorts, source: data.source, updatedAt: data.updatedAt };
  }
  return { items: fallbackYouTubeShorts, source: "fallback", updatedAt: new Date().toISOString() };
}
