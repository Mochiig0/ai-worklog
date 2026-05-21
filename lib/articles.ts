import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { cache } from "react";
import { categories, getCategory } from "@/lib/categories";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  title: string;
  description: string;
  slug: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  isRecommended?: boolean;
  hasAffiliate?: boolean;
  readingTime: string;
};

export type TableOfContentsItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type Article = ArticleMeta & {
  content: string;
  toc: TableOfContentsItem[];
};

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function stripMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~]/g, "")
    .trim();
}

export function createTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const usedIds = new Map<string, number>();
  const items: TableOfContentsItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const rawText = stripMarkdown(match[2]);
    const baseId = slugifyHeading(rawText);
    const count = usedIds.get(baseId) ?? 0;
    usedIds.set(baseId, count + 1);
    const id = count === 0 ? baseId : `${baseId}-${count}`;
    items.push({
      id,
      text: rawText,
      level: match[1] === "##" ? 2 : 3,
    });
  }

  return items;
}

function readArticleFile(fileName: string): Article {
  const fullPath = path.join(articlesDirectory, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    title: String(data.title),
    description: String(data.description),
    slug: String(data.slug ?? fileName.replace(/\.mdx?$/, "")),
    category: String(data.category),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    publishedAt: String(data.publishedAt),
    updatedAt: String(data.updatedAt),
    isRecommended: Boolean(data.isRecommended),
    hasAffiliate: Boolean(data.hasAffiliate),
    readingTime: `${Math.max(1, Math.ceil(stats.minutes))}分`,
    content,
    toc: createTableOfContents(content),
  };
}

export const getAllArticles = cache(() => {
  if (!fs.existsSync(articlesDirectory)) {
    return [] as Article[];
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readArticleFile)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
});

export function getArticleBySlug(slug: string) {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getRecommendedArticles(limit = 3) {
  return getAllArticles()
    .filter((article) => article.isRecommended)
    .slice(0, limit);
}

export function getArticlesByCategory(categorySlug: string) {
  return getAllArticles().filter((article) => article.category === categorySlug);
}

export function getRelatedArticles(article: Article, limit = 3) {
  return getAllArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const categoryScore = candidate.category === article.category ? 3 : 0;
      const tagScore = candidate.tags.filter((tag) =>
        article.tags.includes(tag),
      ).length;
      return { article: candidate, score: categoryScore + tagScore };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.article)
    .slice(0, limit);
}

export function getCategoryCounts() {
  const articles = getAllArticles();
  return categories.map((category) => ({
    ...category,
    count: articles.filter((article) => article.category === category.slug)
      .length,
  }));
}

export function getExistingArticleCategories() {
  return categories.filter((category) => getCategory(category.slug));
}
