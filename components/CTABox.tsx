import { ExternalLink } from "@/components/ExternalLink";

export type CTAType =
  | "udemy"
  | "canva"
  | "n8n"
  | "make"
  | "amazon"
  | "rakuten"
  | "template"
  | "other";

type CTABoxProps = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  label?: string;
  type?: CTAType;
  isSponsored?: boolean;
};

const typeLabel: Record<CTAType, string> = {
  udemy: "学習",
  canva: "デザイン",
  n8n: "自動化",
  make: "自動化",
  amazon: "商品",
  rakuten: "商品",
  template: "テンプレート",
  other: "おすすめ",
};

export function CTABox({
  title,
  description,
  buttonText,
  href,
  label,
  type = "other",
  isSponsored = false,
}: CTABoxProps) {
  return (
    <aside className="my-8 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
          {label ?? typeLabel[type]}
        </span>
        {isSponsored ? (
          <span className="text-xs font-medium text-slate-500">PR</span>
        ) : null}
      </div>
      <p className="text-lg font-bold text-slate-950">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
      <ExternalLink
        href={href}
        isSponsored={isSponsored}
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
      >
        {buttonText}
      </ExternalLink>
    </aside>
  );
}
