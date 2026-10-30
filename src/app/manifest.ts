import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bista Creation",
    short_name: "Bista",
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#05050a",
    theme_color: "#05050a",
    categories: ["music", "entertainment"],
    icons: [
      {
        src: "/brand/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
