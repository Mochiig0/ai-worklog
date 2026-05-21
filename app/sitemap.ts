import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/articles",
    "/categories",
    "/profile",
    "/disclosure",
    "/privacy-policy",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.siteUrl}/categories/${category.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = getAllArticles().map((article) => ({
    url: `${siteConfig.siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
