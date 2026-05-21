import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "記事一覧",
  description: "AI Worklogの全記事一覧。AI活用、Web制作、ガジェット、学習記事を新しい順に掲載しています。",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "記事一覧",
    description:
      "AI Worklogの全記事一覧。AI活用、Web制作、ガジェット、学習記事を新しい順に掲載しています。",
    url: "/articles",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "記事一覧",
    description:
      "AI Worklogの全記事一覧。AI活用、Web制作、ガジェット、学習記事を新しい順に掲載しています。",
    images: [siteConfig.defaultOgImage],
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Articles"
        title="記事一覧"
        description="全記事を新しい順に表示しています。カテゴリリンクからテーマ別にも読めます。"
      />
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
