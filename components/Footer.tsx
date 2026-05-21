import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const footerLinks = [
  { label: "広告表記", href: "/disclosure" },
  { label: "プライバシーポリシー", href: "/privacy-policy" },
  { label: "お問い合わせ", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-lg font-bold text-slate-950">
              {siteConfig.siteName}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              {siteConfig.siteDescription}
            </p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="grid gap-2 text-sm">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-semibold text-slate-700 hover:text-slate-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.siteName}
        </p>
      </div>
    </footer>
  );
}
