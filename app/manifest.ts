import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Velunix Studio",
    short_name: "Velunix",
    description: "Site-uri de prezentare pentru afaceri locale.",
    start_url: "/",
    display: "browser",
    background_color: "#0E0E10",
    theme_color: "#0E0E10",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
