export type YouTubeVideo = {
  id: string;
  title: string;
  description?: string;
  publishedAt: string;
  videoUrl: string;
  isShort: boolean;
  thumbnail: string;
};

export type SocialItem = {
  id: string;
  title?: string;
  caption?: string;
  mediaType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  permalink?: string;
  timestamp?: string;
  isReel?: boolean;
};

export type SocialFeed = {
  items: SocialItem[];
  source: "live" | "fallback";
  updatedAt: string;
  note?: string;
};
