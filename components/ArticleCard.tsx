import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { formatDate } from "@/lib/format";
import { CategoryBadge } from "@/components/CategoryBadge";
import { TagBadge } from "@/components/TagBadge";

type ArticleCardProps = {
  article: ArticleMeta;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300">
      <div className="mb-3">
        <CategoryBadge slug={article.category} />
      </div>
      <h2 className="text-xl font-bold leading-7 text-slate-950">
        <Link href={`/articles/${article.slug}`} className="hover:text-sky-800">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        {article.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagBadge key={tag}>{tag}</TagBadge>
        ))}
      </div>
      <dl className="mt-4 grid gap-1 text-xs text-slate-500 sm:grid-cols-3">
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
    </article>
  );
}
