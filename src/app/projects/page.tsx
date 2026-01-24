// app/projects/page.tsx
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200/70 bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <p className="text-sm font-medium text-indigo-700">
              Selected work & build notes
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
              A mix of full-stack builds, API integrations, and security-minded
              engineering. Each project includes a short case study: what I
              built, why it matters, and how it works.
            </p>
          </div>
        </Container>
      </header>

      <Section title="Featured" eyebrow="Best signals">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {more.length > 0 ? (
        <Section title="More work" eyebrow="Other builds">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      ) : null}
    </main>
  );
}
