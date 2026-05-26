export const siteConfig = {
  siteName: "AI Worklog",
  siteDescription:
    "ChatGPT、Canva、n8n、Web制作、作業環境を実践しながら、仕事と副業に役立つAI活用・業務効率化の方法を初心者目線で整理する個人メディアです。",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-worklog.vercel.app",
  brand: {
    logo: "/brand/logo.png",
    profileIcon: "/brand/x-profile-icon.png",
    banner: "/brand/x-banner.png",
    appleIcon: "/brand/apple-icon.png",
    icon512: "/brand/icon-512.png",
  },
  logoImage: "/brand/logo.png",
  appIconImage: "/brand/icon-512.png",
  appleIconImage: "/brand/apple-icon.png",
  defaultOgImage: "/og/default-og.png",
  defaultOgImageAlt: "AI Worklog - AI活用と業務効率化の実践ログ",
  authorName: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? "AI Worklog 運営者",
  authorDescription:
    "日本で働く会社員。Webマーケティング、求人サイト運営・改修、LP作成、ITを使った業務効率化に関心があり、AI活用、Web制作、作業環境改善を学びながら発信しています。",
  xAccount: process.env.NEXT_PUBLIC_X_ACCOUNT ?? "@ai_worklog",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  navItems: [
    { label: "記事", href: "/articles" },
    { label: "カテゴリ", href: "/categories" },
    { label: "プロフィール", href: "/profile" },
    { label: "広告表記", href: "/disclosure" },
  ],
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
