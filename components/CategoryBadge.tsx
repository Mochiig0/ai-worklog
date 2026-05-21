import Link from "next/link";
import { getCategoryName } from "@/lib/categories";

type CategoryBadgeProps = {
  slug: string;
};

export function CategoryBadge({ slug }: CategoryBadgeProps) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800 transition hover:bg-sky-100"
    >
      {getCategoryName(slug)}
    </Link>
  );
}
