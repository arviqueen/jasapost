import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jasapost.com";
  return [
    {
      url: `${base}/id`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/en`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
