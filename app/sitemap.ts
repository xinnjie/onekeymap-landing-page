import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onekeymap.com";

  return [
    {
      url: `${baseUrl}/en/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/pricing/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/privacy/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/terms/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
