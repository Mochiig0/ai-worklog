import { ExternalLink } from "@/components/ExternalLink";

type ProductCardProps = {
  name: string;
  description: string;
  priceLabel: string;
  href: string;
  shopName: string;
  isSponsored?: boolean;
};

export function ProductCard({
  name,
  description,
  priceLabel,
  href,
  shopName,
  isSponsored = false,
}: ProductCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-950">{name}</h3>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
          {shopName}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
      <p className="mt-3 text-sm font-semibold text-slate-900">{priceLabel}</p>
      <ExternalLink
        href={href}
        isSponsored={isSponsored}
        className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900"
      >
        商品ページを見る
      </ExternalLink>
    </article>
  );
}
