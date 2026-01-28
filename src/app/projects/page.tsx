// app/projects/page.tsx
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200/70 bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <p className="text-sm font-medium text-indigo-700">
              Build notes & links
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
              A collection of projects I have built across the stack — each one has
              a short write-up and a GitHub link.
            </p>
          </div>
        </Container>
      </header>

      <Section title="All projects" eyebrow="Sorted by recency">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </main>
  );
}
