import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SAR Industries Network Dashboard",
    short_name: "SAR Dashboard",
    description: "Enterprise operations and analytics command center.",
    start_url: "/",
    display: "standalone",
    background_color: "#070809",
    theme_color: "#ff4d00",
    icons: [
      {
        src: "/sar-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
