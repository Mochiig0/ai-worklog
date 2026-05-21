import type { TableOfContentsItem } from "@/lib/articles";

type TableOfContentsProps = {
  items: TableOfContentsItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="目次"
      className="rounded-md border border-slate-200 bg-slate-50 p-5"
    >
      <p className="text-sm font-bold text-slate-950">目次</p>
      <ol className="mt-3 space-y-2 text-sm leading-6">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
            <a href={`#${item.id}`} className="text-slate-700 hover:text-sky-800">
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
