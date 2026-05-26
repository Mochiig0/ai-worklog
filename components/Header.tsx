import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-3 text-xl font-bold text-slate-950"
        >
          <Image
            src={siteConfig.logoImage}
            alt={`${siteConfig.siteName} ロゴ`}
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-md object-cover"
          />
          <span>{siteConfig.siteName}</span>
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
