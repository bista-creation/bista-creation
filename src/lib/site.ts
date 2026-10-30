export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bista-creation.vercel.app"
).replace(/\/+$/, "");

export const site = {
  name: "Bista Creation",
  tagline: "Music Videos • Shorts",
  poweredBy: "Powered by Suno AI Pro & Google Flow",
  description:
    "Bista Creation is a Nepal-based creative studio making cinematic music videos, Nepali AI remixes, and viral shorts — powered by Suno AI Pro and Google Flow.",

  whatsappNumber: "+9779851150987",
  whatsappHref: "https://wa.me/9779851150987",
  whatsappDisplay: "+977 9851150987",
  email: "bistacreation@gmail.com",

  youtube: {
    handle: "@BistaCreationStudio",
    url: "https://www.youtube.com/@BistaCreationStudio",
    channelId: "UCLJK80I7OcbMTqIWNEpF5aw",
  },
  instagram: {
    handle: "pixelandpan",
    url: "https://www.instagram.com/pixelandpan/",
  },
  facebook: {
    handle: "bistacreations",
    url: "https://www.facebook.com/bistacreations",
  },
} as const;

export const socials = [
  { id: "youtube", label: "YouTube", href: site.youtube.url },
  { id: "instagram", label: "Instagram", href: site.instagram.url },
  { id: "facebook", label: "Facebook", href: site.facebook.url },
] as const;
