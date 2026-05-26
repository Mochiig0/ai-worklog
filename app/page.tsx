import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ProfileBox } from "@/components/ProfileBox";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/lib/categories";
import { getAllArticles, getRecommendedArticles } from "@/lib/articles";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "AI活用と業務効率化の実践ログ",
  description: siteConfig.siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI活用と業務効率化の実践ログ",
    description: siteConfig.siteDescription,
    url: "/",
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
    title: "AI活用と業務効率化の実践ログ",
    description: siteConfig.siteDescription,
    images: [siteConfig.defaultOgImage],
  },
};

const focusLinks = [
  {
    title: "AI業務効率化",
    description: "CSV整理、文章作成、調査、資料作成を小さく時短する。",
    href: "/categories/ai-productivity",
  },
  {
    title: "Web制作",
    description: "React、Next.js、LP改善の学習と実践を記録する。",
    href: "/categories/web-development",
  },
  {
    title: "ガジェット",
    description: "作業が続くデスク環境と周辺機器を検討する。",
    href: "/categories/gadgets",
  },
  {
    title: "学習コンテンツ",
    description: "Udemy、書籍、教材を目的別に選びやすくする。",
    href: "/categories/learning",
  },
];

export default function Home() {
  const articles = getAllArticles();
  const latestArticles = articles.slice(0, 4);
  const recommendedArticles = getRecommendedArticles(3);

  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] md:py-16">
          <div>
            <p className="text-sm font-semibold text-sky-700">
              AI / Web / Tools / Desk setup
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              仕事と副業に使えるAI活用を、実践ログとして積み上げる。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
              ChatGPT、Canva、n8n、Make、Excel、Web制作、作業環境を中心に、初心者が試して判断しやすいノウハウをまとめる個人メディアです。収益導線は置きつつ、まずは日々の仕事が少し楽になる検証を重視します。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/articles"
                className="inline-flex min-h-11 items-center rounded-md bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                最新記事を見る
              </Link>
              <Link
                href="/profile"
                className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                運営者について
              </Link>
            </div>
          </div>
          <ProfileBox />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
          <Image
            src={siteConfig.brand.banner}
            alt="AI Worklogのブランドバナー"
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, 80vw"
            className="h-auto w-full rounded-md object-cover"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <SectionHeading
          eyebrow="Categories"
          title="主要カテゴリ"
          description="AI活用だけに寄せすぎず、制作、学習、作業環境まで横断して整理します。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300"
            >
              <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <SectionHeading eyebrow="Latest" title="最新記事" />
        <div className="grid gap-5 md:grid-cols-2">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <SectionHeading
          eyebrow="Recommended"
          title="おすすめ記事"
          description="Xや検索から来た読者が最初に読みやすい記事を置いています。"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {recommendedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <SectionHeading eyebrow="All Topics" title="すべてのカテゴリ" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="rounded-md border border-slate-200 p-4 hover:bg-slate-50"
            >
              <h2 className="font-bold text-slate-950">{category.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
