import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold text-slate-950">
          {siteConfig.siteName}
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className="flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
