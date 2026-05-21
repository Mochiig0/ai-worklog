export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "ai-productivity",
    name: "AI業務効率化",
    description:
      "AIを使って日々の調査、資料作成、文章作成、データ整理を効率化する実践ログ。",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT活用",
    description:
      "ChatGPTを仕事や副業の補助として使うためのプロンプト、検証、注意点をまとめます。",
  },
  {
    slug: "canva",
    name: "Canva活用",
    description:
      "SNS画像、資料、バナー、テンプレート作成をCanvaで時短する方法を扱います。",
  },
  {
    slug: "automation",
    name: "n8n・Make自動化",
    description:
      "n8n、Make、スプレッドシート連携など、ノーコード・ローコード自動化の考え方。",
  },
  {
    slug: "web-development",
    name: "Web制作",
    description:
      "HTML、CSS、JavaScript、React、Next.jsの学習ログと制作で使った知見。",
  },
  {
    slug: "gadgets",
    name: "作業環境・ガジェット",
    description:
      "AI作業、Web制作、学習が続けやすくなるデスク環境とガジェット選び。",
  },
  {
    slug: "learning",
    name: "Udemy・学習",
    description:
      "Udemy、書籍、学習教材を初心者目線で比較し、学びやすい選び方を整理します。",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryName(slug: string) {
  return getCategory(slug)?.name ?? slug;
}
