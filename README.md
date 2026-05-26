# AI Worklog

AI Worklogは、AI活用、業務効率化、Web制作、作業環境改善を扱うNext.js製の個人ブログ型メディアです。

ChatGPT、Canva、n8n、Make、Excel / CSV、Web制作、ガジェット、学習コンテンツなどをテーマに、実践ログとして記事を公開できるMVP構成にしています。

## 主な技術

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX / Markdown

## 主なページ

- `/`
- `/articles`
- `/articles/[slug]`
- `/categories`
- `/categories/[slug]`
- `/profile`
- `/disclosure`
- `/privacy-policy`
- `/contact`

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

開発サーバー:

```txt
http://localhost:3000
```

## ビルド

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## 環境変数

`.env.example` をもとに `.env.local` を作成します。

```txt
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_CONTACT_EMAIL
NEXT_PUBLIC_X_ACCOUNT
NEXT_PUBLIC_AUTHOR_NAME
```

## 記事追加方法

`content/articles` にMDXファイルを追加し、frontmatterを書きます。

```mdx
---
title: "記事タイトル"
description: "記事の説明文"
slug: "article-slug"
category: "chatgpt"
tags: ["ChatGPT", "CSV"]
publishedAt: "2026-05-20"
updatedAt: "2026-05-20"
isRecommended: true
hasAffiliate: true
---
```

カテゴリ定義は `lib/categories.ts` で管理しています。

## アフィリエイトリンク管理

アフィリエイトリンクは `lib/affiliateLinks.ts` で一元管理します。

承認前は `normalUrl` を使い、承認後に `affiliateUrl` と `isActive` を更新することで、記事やコンポーネント側を大きく変更せずに差し替えられる設計です。

## OGP画像

デフォルトOGP画像は以下に配置しています。

```txt
public/og/default-og.png
```

画像アセット（整理後）
- `public/brand`: サイトロゴ、プロフィール画像、X用バナー、favicon/アプリアイコン
- `public/og`: SNSシェア用OGP画像

本番運用時は、サイト名やドメインに合わせて正式な画像に差し替えてください。

## 注意

- `.env.local` はコミットしません。
- `.env`、`.env.*.local` もコミット対象外です。
- 本番URL、OGP画像、アフィリエイトURLは運用開始時に更新してください。
- `npm audit fix --force` は依存関係の大きな変更につながる可能性があるため、内容を確認してから判断してください。
