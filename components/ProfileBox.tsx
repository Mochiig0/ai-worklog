import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function ProfileBox() {
  return (
    <aside className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-sky-700">Profile</p>
      <h2 className="mt-2 text-xl font-bold text-slate-950">
        {siteConfig.authorName}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        {siteConfig.authorDescription}
        AI活用、Web制作、業務効率化、作業環境改善を実践しながら、初心者目線で記録しています。
      </p>
      <Link
        href="/profile"
        className="mt-4 inline-flex min-h-11 items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
      >
        プロフィールを見る
      </Link>
    </aside>
  );
}
