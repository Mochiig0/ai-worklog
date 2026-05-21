import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { CTABox } from "@/components/CTABox";
import { CourseCard } from "@/components/CourseCard";
import { ExternalLink } from "@/components/ExternalLink";
import { ProductCard } from "@/components/ProductCard";
import { ProsConsBox } from "@/components/ProsConsBox";
import { ToolCard } from "@/components/ToolCard";

export const mdxComponents: MDXComponents = {
  a: ({ href = "", children, ...props }) => {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className="font-semibold text-sky-700 underline-offset-4 hover:underline">
          {children}
        </Link>
      );
    }

    return (
      <ExternalLink
        href={href}
        className="font-semibold text-sky-700 underline-offset-4 hover:underline"
        {...props}
      >
        {children}
      </ExternalLink>
    );
  },
  h2: ({ children, ...props }) => (
    <h2
      className="mt-10 scroll-mt-24 text-2xl font-bold leading-8 text-slate-950"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="mt-8 scroll-mt-24 text-xl font-bold leading-7 text-slate-950"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-base leading-8 text-slate-700">{children}</p>
  ),
  pre: ({ children }) => (
    <pre className="mt-5 max-w-full overflow-x-auto rounded-md bg-slate-950 p-4 text-sm leading-7 text-slate-50">
      {children}
    </pre>
  ),
  code: ({ children, className }) => (
    <code
      className={
        className ??
        "rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-900"
      }
    >
      {children}
    </code>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 space-y-2 text-base leading-8 text-slate-700">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-8 text-slate-700">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-sky-300 bg-sky-50 py-3 pl-4 text-slate-700">
      {children}
    </blockquote>
  ),
  CTABox,
  ToolCard,
  CourseCard,
  ProductCard,
  ProsConsBox,
};
