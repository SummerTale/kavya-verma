// app/about/page.tsx
import { Container } from "@/components/Container";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200/70 bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <p className="text-sm font-medium text-indigo-700">A little context</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              About
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
              I’m a full-stack developer who enjoys building clean products with
              secure, thoughtful engineering — the kind of work that ships and
              stays maintainable.
            </p>
          </div>
        </Container>
      </header>

      <Container>
        <div className="py-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-base font-semibold text-zinc-900">
                  What I’m focused on
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  I like building end-to-end experiences: a crisp UI, an API that
                  behaves predictably, and data models that make features easy to
                  extend. I’m especially interested in practical security —
                  validating inputs, managing secrets correctly, and designing
                  systems that don’t fall apart under edge cases.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-900">
                  How I work
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {[
                    "Start with the problem, not the tech",
                    "Keep scope tight so the product is polished",
                    "Design data models early to avoid rewrite pain",
                    "Treat security and UX as first-class requirements",
                    "Prefer simple systems that scale in clarity",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-900">
                  What I’m looking for
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  Early-career software engineering roles where I can contribute
                  to product features, improve reliability, and build strong
                  foundations. I’m happy working across the stack, especially in
                  React/Next.js and Node-based systems.
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Skills snapshot
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "REST APIs",
                    "JWT",
                    "OWASP basics",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Quick note
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  I like projects that feel “simple” to use — and are engineered
                  to be resilient behind the scenes.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  );
}
