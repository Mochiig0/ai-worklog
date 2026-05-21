import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "AI Worklogの運営者プロフィール。AI活用、Web制作、業務効率化、作業環境改善を初心者目線で発信しています。",
  alternates: {
    canonical: "/profile",
  },
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "プロフィール" }]} />
      <div className="mt-8">
        <SectionHeading eyebrow="Profile" title="運営者プロフィール" />
      </div>
      <div className="space-y-6 text-base leading-8 text-slate-700">
        <p>
          AI Worklogは、日本で働く会社員が運営する個人メディアです。Webマーケティング、求人サイトの運営・改修、LP作成、ITを使った業務効率化に関心があり、日々の学習と実務で試したことを記録しています。
        </p>
        <p>
          これまでにHTML、CSS、JavaScriptを学び、現在はReact、Next.js、Node.js、PostgreSQL、Git・GitHubを学習・実践中です。完璧な専門家としてではなく、実際につまずきながら理解したことを初心者目線で整理する方針です。
        </p>
        <p>
          発信テーマは、AI活用、Web制作、業務効率化、作業環境改善が中心です。読者が仕事や副業に役立つツール、教材、ガジェットを選びやすくなるように、実体験、学習過程、検証結果をもとに情報をまとめます。
        </p>
        <p>
          収益化のために広告やアフィリエイトリンクを設置することがありますが、使っていないものを過度にすすめたり、根拠のない断定をしたりしないことを大切にします。読者が自分で判断できる材料を増やすメディアを目指します。
        </p>
      </div>
    </div>
  );
}
