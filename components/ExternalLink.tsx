import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  isSponsored?: boolean;
};

export function ExternalLink({
  href,
  children,
  isSponsored = false,
  className = "",
  rel,
  target,
  ...props
}: ExternalLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const computedRel = isExternal
    ? isSponsored
      ? "sponsored nofollow noopener noreferrer"
      : "noopener noreferrer"
    : rel;
  const computedTarget = isExternal ? "_blank" : target;

  return (
    <a
      {...props}
      href={href}
      target={computedTarget}
      rel={computedRel}
      className={className}
    >
      {children}
    </a>
  );
}
