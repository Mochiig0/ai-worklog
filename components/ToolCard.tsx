import { ExternalLink } from "@/components/ExternalLink";

type ToolCardProps = {
  name: string;
  description: string;
  bestFor: string;
  pricing: string;
  href: string;
  isSponsored?: boolean;
};

export function ToolCard({
  name,
  description,
  bestFor,
  pricing,
  href,
  isSponsored = false,
}: ToolCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-950">{name}</h3>
        {isSponsored ? (
          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
            PR
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
      <dl className="mt-4 grid gap-3 text-sm">
        <div>
          <dt className="font-semibold text-slate-900">向いている用途</dt>
          <dd className="mt-1 text-slate-700">{bestFor}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">料金メモ</dt>
          <dd className="mt-1 text-slate-700">{pricing}</dd>
        </div>
      </dl>
      <ExternalLink
        href={href}
        isSponsored={isSponsored}
        className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900"
      >
        公式サイトを見る
      </ExternalLink>
    </article>
  );
}
