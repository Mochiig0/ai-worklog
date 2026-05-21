import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExternalLink } from "@/components/ExternalLink";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "AI Worklogへのお問い合わせページです。",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "お問い合わせ" }]} />
      <div className="mt-8">
        <SectionHeading
          eyebrow="Contact"
          title="お問い合わせ"
          description="現在はフォーム送信機能を準備中です。仮の連絡先としてメールとXアカウントを表示しています。"
        />
      </div>
      <div className="rounded-md border border-slate-200 bg-slate-50 p-5 text-base leading-8 text-slate-700">
        <p>
          記事内容の修正依頼、掲載についてのご相談、連絡事項がある場合は、以下の連絡先をご利用ください。
        </p>
        <dl className="mt-5 grid gap-4">
          <div>
            <dt className="font-bold text-slate-950">メール</dt>
            <dd>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-semibold text-sky-700 hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-bold text-slate-950">X</dt>
            <dd>
              <ExternalLink
                href={`https://x.com/${siteConfig.xAccount.replace("@", "")}`}
                className="font-semibold text-sky-700 hover:underline"
              >
                {siteConfig.xAccount}
              </ExternalLink>
            </dd>
          </div>
        </dl>
        <p className="mt-5 text-sm text-slate-600">
          将来的には、このページに問い合わせフォームを追加できるようにページ構造だけ先に用意しています。
        </p>
      </div>
    </div>
  );
}
