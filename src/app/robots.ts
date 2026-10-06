import { dentist } from "@/data/dentist";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${dentist.siteUrl}/sitemap.xml`,
  };
}
