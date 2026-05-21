import type { ArticleMeta } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

type RelatedArticlesProps = {
  articles: ArticleMeta[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-slate-950">関連記事</h2>
      <div className="mt-5 grid gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
