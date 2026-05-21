type ProsConsBoxProps = {
  pros?: string[] | string;
  cons?: string[] | string;
};

function normalizeItems(items: string[] | string | undefined) {
  if (Array.isArray(items)) {
    return items;
  }

  if (typeof items === "string") {
    return items
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

export function ProsConsBox({ pros, cons }: ProsConsBoxProps) {
  const prosItems = normalizeItems(pros);
  const consItems = normalizeItems(cons);

  if (prosItems.length === 0 && consItems.length === 0) {
    return null;
  }

  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
      <section className="rounded-md border border-emerald-200 bg-emerald-50 p-5">
        <h3 className="text-base font-bold text-emerald-950">メリット</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-900">
          {prosItems.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </section>
      <section className="rounded-md border border-rose-200 bg-rose-50 p-5">
        <h3 className="text-base font-bold text-rose-950">注意点</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-900">
          {consItems.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
