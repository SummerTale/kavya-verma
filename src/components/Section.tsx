// components/Section.tsx
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  title,
  eyebrow,
  children,
  className = "",
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-indigo-700">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-600" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {title}
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-indigo-600 to-transparent" />
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
