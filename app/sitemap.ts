import type { MetadataRoute } from "next";
import detailedProjectsData from "@/data/detailed-projects.json";

const siteUrl = "https://sadmansobhan.com";
const slugify = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = detailedProjectsData.detailedProjects.map((project) => ({
    url: `${siteUrl}/projects/${slugify(project.title)}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/resume`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/writing`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectRoutes,
  ];
}
