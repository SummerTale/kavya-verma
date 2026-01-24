// app/contact/page.tsx
"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

export default function ContactPage() {
  const email = "kavya@bu.edu"; // replace if you want a different contact email
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200/70 bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <p className="text-sm font-medium text-indigo-700">Let’s connect</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
              If you’re hiring for early-career software engineering roles, or
              want to chat about a project, I’d love to talk.
            </p>
          </div>
        </Container>
      </header>

      <Container>
        <div className="py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main card */}
            <div className="lg:col-span-2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-zinc-900">
                Email me
              </h2>
              <p className="mt-2 text-sm text-zinc-700">
                Fastest way to reach me:
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                >
                  {email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-50"
                >
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>

              <div className="mt-8 h-px bg-zinc-100" />

              <h3 className="mt-8 text-sm font-semibold text-zinc-900">
                Links
              </h3>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://github.com/SummerTale"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-700 underline-offset-4 hover:underline"
                >
                  GitHub →
                </a>
                <a
                  href="https://www.linkedin.com/kavya-verma-bu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-700 underline-offset-4 hover:underline"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900">
                  What to include
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {[
                    "Role + team (if applicable)",
                    "A quick description of what you’re building",
                    "Timeline and what you need help with",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Typical response time
                </h3>
                <p className="mt-2 text-sm text-zinc-700">
                  I usually respond within 1 to 2 days.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  );
}
