import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "広告表記",
  description: "AI Worklogの広告・アフィリエイトリンクに関する表記方針です。",
  alternates: {
    canonical: "/disclosure",
  },
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "広告表記" }]} />
      <div className="mt-8">
        <SectionHeading eyebrow="Disclosure" title="広告表記" />
      </div>
      <div className="space-y-6 text-base leading-8 text-slate-700">
        <p>
          当サイトは、広告・アフィリエイトリンクを含む場合があります。リンクを経由して商品やサービスを購入・申し込みいただいた場合、運営者に報酬が発生することがあります。
        </p>
        <p>
          商品・サービスの内容、価格、キャンペーン、提供条件は変更される可能性があります。最終的な判断は、必ず公式サイトや販売ページの最新情報をご確認ください。
        </p>
        <p>
          紹介する内容は、実際に使ったもの、調べたもの、比較したものを中心にしています。誇大表現や根拠のない断定は避け、メリットだけでなく注意点や向いていないケースもできるだけ記載します。
        </p>
        <p>
          金融、投資、医療、健康など、判断に専門性が必要な領域では特に断定的な表現を避けます。必要に応じて専門家や公式情報をご確認ください。
        </p>
        <p>
          PR記事、広告リンク、アフィリエイトリンクを含む記事では、読者に分かりやすい場所にPR表記や広告表記を行う方針です。
        </p>
      </div>
    </div>
  );
}
