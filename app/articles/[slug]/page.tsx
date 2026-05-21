import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { AffiliateNotice } from "@/components/AffiliateNotice";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryBadge } from "@/components/CategoryBadge";
import { CTABox } from "@/components/CTABox";
import { mdxComponents } from "@/components/MDXComponents";
import { RelatedArticles } from "@/components/RelatedArticles";
import { TableOfContents } from "@/components/TableOfContents";
import { TagBadge } from "@/components/TagBadge";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { getCategoryName } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import { siteConfig } from "@/lib/siteConfig";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const url = `/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      siteName: siteConfig.siteName,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [siteConfig.authorName],
      tags: article.tags,
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [siteConfig.defaultOgImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { content } = await compileMDX({
    source: article.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  const relatedArticles = getRelatedArticles(article, 3);
  const articleUrl = `${siteConfig.siteUrl}/articles/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
    },
    mainEntityOfPage: articleUrl,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "記事", href: "/articles" },
          {
            label: getCategoryName(article.category),
            href: `/categories/${article.category}`,
          },
          { label: article.title },
        ]}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="min-w-0">
          <div className="mb-4">
            <CategoryBadge slug={article.category} />
          </div>
          <h1 className="text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {article.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
          <dl className="mt-5 grid gap-2 text-sm text-slate-500 sm:grid-cols-3">
            <div>
              <dt className="sr-only">公開日</dt>
              <dd>公開: {formatDate(article.publishedAt)}</dd>
            </div>
            <div>
              <dt className="sr-only">更新日</dt>
              <dd>更新: {formatDate(article.updatedAt)}</dd>
            </div>
            <div>
              <dt className="sr-only">読了目安</dt>
              <dd>読了: {article.readingTime}</dd>
            </div>
          </dl>

          <div className="mt-8">
            {article.hasAffiliate ? <AffiliateNotice /> : null}
          </div>

          <div className="mt-8 lg:hidden">
            <TableOfContents items={article.toc} />
          </div>

          <div className="mt-8 max-w-3xl">{content}</div>

          <CTABox
            title="この記事の続きは、関連カテゴリで更新していきます"
            description="AI活用、Web制作、作業環境の実践ログを少しずつ追加します。気になるテーマから読み進めてください。"
            buttonText="カテゴリ一覧を見る"
            href="/categories"
            label="内部リンク"
            type="template"
          />

          <RelatedArticles articles={relatedArticles} />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <TableOfContents items={article.toc} />
          </div>
        </aside>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
