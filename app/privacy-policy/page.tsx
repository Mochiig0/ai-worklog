import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "AI Worklogのプライバシーポリシー草案です。",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "プライバシーポリシー" }]} />
      <div className="mt-8">
        <SectionHeading eyebrow="Privacy" title="プライバシーポリシー" />
      </div>
      <div className="space-y-8 text-base leading-8 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-950">アクセス解析について</h2>
          <p className="mt-3">
            当サイトでは、サイト改善のためにアクセス解析ツールを使用する可能性があります。解析のためにCookie等を利用する場合がありますが、個人を直接特定することを目的としたものではありません。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-950">Cookieについて</h2>
          <p className="mt-3">
            当サイトでは、利便性向上、アクセス解析、広告配信などのためにCookieを使用する可能性があります。ブラウザ設定によりCookieを無効にすることもできます。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-950">アフィリエイトプログラムについて</h2>
          <p className="mt-3">
            当サイトでは、アフィリエイトプログラムを利用する可能性があります。商品やサービスに関する最終的な情報は、各公式サイトや販売元の表示をご確認ください。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-950">免責事項</h2>
          <p className="mt-3">
            掲載内容はできるだけ正確な情報を心がけますが、正確性や安全性を保証するものではありません。当サイトの情報を利用したことによる損害等について、運営者は責任を負いかねる場合があります。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-950">著作権について</h2>
          <p className="mt-3">
            当サイトに掲載している文章、画像、コード等の無断転載はご遠慮ください。引用の範囲で利用する場合は、出典を明記してください。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-950">お問い合わせについて</h2>
          <p className="mt-3">
            掲載内容や個人情報の取り扱いに関するお問い合わせは、お問い合わせページからご連絡ください。内容により返信できない場合があります。
          </p>
        </section>
      </div>
    </div>
  );
}
