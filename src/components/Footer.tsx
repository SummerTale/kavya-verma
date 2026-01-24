// components/Footer.tsx
import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-900">
              Kavya Verma
            </p>
            <p className="text-sm text-zinc-600">
              Full-stack developer • Security-minded • Builds that ship
            </p>
          </div>

          {/* Center (optional quick nav) */}
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/"
              className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              Contact
            </Link>
          </nav>

          {/* Right */}
          <div className="flex gap-4 text-sm">
            {/* Replace with your real links */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-100 py-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} Kavya Verma. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
