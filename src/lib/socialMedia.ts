import type { SocialItem } from "@/lib/types";

export function getSocialThumb(item: SocialItem) {
  return item.thumbnailUrl ?? item.mediaUrl ?? undefined;
}
