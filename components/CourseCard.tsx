import { ExternalLink } from "@/components/ExternalLink";

type CourseCardProps = {
  title: string;
  provider: string;
  description: string;
  recommendedFor: string;
  href: string;
  isSponsored?: boolean;
};

export function CourseCard({
  title,
  provider,
  description,
  recommendedFor,
  href,
  isSponsored = false,
}: CourseCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase text-slate-500">
        {provider}
      </p>
      <h3 className="mt-2 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
      <p className="mt-3 text-sm text-slate-700">
        <span className="font-semibold text-slate-900">おすすめ:</span>{" "}
        {recommendedFor}
      </p>
      <ExternalLink
        href={href}
        isSponsored={isSponsored}
        className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900"
      >
        講座ページを見る
      </ExternalLink>
    </article>
  );
}
