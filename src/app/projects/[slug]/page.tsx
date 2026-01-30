// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { projects, projectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectBySlug(slug);
  if (!project) return notFound();

  const year = project.meta?.date ? new Date(project.meta.date).getFullYear() : null;

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Header / Hero */}
      <header className="relative overflow-hidden border-b border-zinc-200/70 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute -bottom-24 left-[-120px] h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        </div>

        <Container>
          <div className="relative py-10 sm:py-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/projects"
                className="text-sm font-medium text-zinc-600 underline-offset-4 hover:underline"
              >
                ← Back to Projects
              </Link>

              {year ? (
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100">
                  {year}
                </span>
              ) : null}

            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-base text-zinc-700 sm:text-lg">
              {project.tagline}
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-700">
              {project.overview}
            </p>

            {/* Links */}
            {project.links?.length ? (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={`${l.label}-${l.href}`}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}

            {/* Tech chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Quick highlights */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {project.highlights.slice(0, 3).map((h) => (
                <div
                  key={h}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                >
                  <p className="text-sm font-medium text-zinc-900">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </header>

      {/* Body */}
      <Container>
        <div className="py-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main case study */}
            <div className="lg:col-span-2 space-y-10">
              <CaseSection title="Problem">
                <p className="text-sm leading-relaxed text-zinc-700">
                  {project.caseStudy.problem}
                </p>
              </CaseSection>

              <CaseSection title="Goals">
                <ul className="space-y-2 text-sm text-zinc-700">
                  {project.caseStudy.goals.map((g) => (
                    <li key={g} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="Approach">
                <ul className="space-y-2 text-sm text-zinc-700">
                  {project.caseStudy.approach.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="Architecture">
                <ul className="space-y-2 text-sm text-zinc-700">
                  {project.caseStudy.architecture.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="Security notes">
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5">
                  <ul className="space-y-2 text-sm text-zinc-700">
                    {project.caseStudy.security.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CaseSection>

              <CaseSection title="Challenges">
                <ul className="space-y-2 text-sm text-zinc-700">
                  {project.caseStudy.challenges.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="Results">
                <ul className="space-y-2 text-sm text-zinc-700">
                  {project.caseStudy.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="Next steps">
                <ul className="space-y-2 text-sm text-zinc-700">
                  {project.caseStudy.nextSteps.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-zinc-900">
                  Build details
                </h2>

                <dl className="mt-4 space-y-4 text-sm">
                  {project.meta?.role ? (
                    <div>
                      <dt className="text-zinc-500">Role</dt>
                      <dd className="mt-1 font-medium text-zinc-900">
                        {project.meta.role}
                      </dd>
                    </div>
                  ) : null}

                  {project.meta?.team ? (
                    <div>
                      <dt className="text-zinc-500">Team</dt>
                      <dd className="mt-1 font-medium text-zinc-900">
                        {project.meta.team}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <div className="mt-6 h-px bg-zinc-100" />

                <div className="mt-6 space-y-4">
                  <StackBlock title="Frontend" items={project.stack.frontend} />
                  <StackBlock title="Backend" items={project.stack.backend} />
                  <StackBlock title="Data" items={project.stack.data} />
                  <StackBlock title="Tooling" items={project.stack.tooling} />
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-zinc-900">
                  Want the short version?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  I can explain this build in 60 seconds: the problem, the core
                  decisions, and what I would improve next.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-medium text-indigo-700 underline-offset-4 hover:underline"
                >
                  Contact me →
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Prev/Next navigation */}
        <div className="pb-14">
          <ProjectPager currentSlug={project.slug} />
        </div>
      </Container>
    </main>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-base font-semibold text-zinc-900">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function StackBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {title}
      </p>
      <ul className="mt-2 space-y-1 text-sm text-zinc-700">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectPager({ currentSlug }: { currentSlug: string }) {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <PagerCard direction="Previous" project={prev} />
      <PagerCard direction="Next" project={next} />
    </div>
  );
}

function PagerCard({
  direction,
  project,
}: {
  direction: "Previous" | "Next";
  project: { slug: string; title: string; tagline: string } | null;
}) {
  if (!project) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {direction}
        </p>
        <p className="mt-2 text-sm text-zinc-600">—</p>
      </div>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:ring-1 hover:ring-indigo-200"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {direction}
      </p>
      <p className="mt-2 text-sm font-semibold text-zinc-900">{project.title}</p>
      <p className="mt-1 text-sm text-zinc-600">{project.tagline}</p>
      <p className="mt-3 text-sm font-medium text-indigo-700">
        Open case study →
      </p>
    </Link>
  );
}
