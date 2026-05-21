import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getCategoryCounts } from "@/lib/articles";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description: "AI Worklogのカテゴリ一覧。AI業務効率化、ChatGPT、Canva、自動化、Web制作、ガジェット、学習を扱います。",
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "カテゴリ一覧",
    description:
      "AI Worklogのカテゴリ一覧。AI業務効率化、ChatGPT、Canva、自動化、Web制作、ガジェット、学習を扱います。",
    url: "/categories",
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
    title: "カテゴリ一覧",
    description:
      "AI Worklogのカテゴリ一覧。AI業務効率化、ChatGPT、Canva、自動化、Web制作、ガジェット、学習を扱います。",
    images: [siteConfig.defaultOgImage],
  },
};

export default function CategoriesPage() {
  const categoryCounts = getCategoryCounts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Categories"
        title="カテゴリ一覧"
        description="目的に近いテーマから記事を探せます。今後のアフィリエイト導線や自作テンプレート販売にも広げやすい構成です。"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryCounts.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="rounded-md border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-300"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-bold text-slate-950">
                {category.name}
              </h2>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                {category.count}件
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
