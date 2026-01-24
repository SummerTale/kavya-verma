// components/ButtonLink.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-600"
      : "bg-white text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-50 focus:ring-zinc-900/20";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
