import { dentist } from "@/data/dentist";
import { treatments } from "@/data/treatments";
import { cases } from "@/data/cases";
import { articles } from "@/data/articles";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = dentist.siteUrl;

  const staticRoutes = [
    "",
    "/about",
    "/treatments",
    "/results",
    "/experience",
    "/technology",
    "/virtual-consultation",
    "/journal",
    "/faq",
    "/contact",
    "/book",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${base}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseRoutes = cases.map((c) => ({
    url: `${base}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/journal/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...caseRoutes, ...articleRoutes];
}
