// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-zinc-900"
          >
            Kavya Verma
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition ${
                    isActive
                      ? "text-zinc-900"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-indigo-600" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
