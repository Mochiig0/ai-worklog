type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold text-sky-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
