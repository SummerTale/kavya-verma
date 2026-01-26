// app/page.tsx
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const recent = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-zinc-200/70 bg-white">
        <Container>
          <div className="py-14 sm:py-20">
            <p className="text-sm font-medium text-zinc-500">
              Full-stack developer • Security-minded • Builds that ship
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Hi, I am Kavya — I build clean web products that hold up under real
              users.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-700">
              I like turning messy requirements into crisp interfaces, reliable
              APIs, and systems designed with practical security in mind. The
              goal: software that feels simple on the surface and solid
              underneath.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="primary">
                View Projects
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
              {/* Replace href with your resume file path once you add it */}
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 underline-offset-4 hover:underline"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Stat label="Focus" value="Full-stack & security" />
              <Stat label="Strength" value="Ship-ready UI + APIs" />
              <Stat label="Style" value="Simple, scalable, sharp" />
            </div>
          </div>
        </Container>
      </header>

      {/* RECENT PROJECTS */}
      <Section title="Recent builds" eyebrow="Latest work">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="/projects" variant="secondary">
            See all projects
          </ButtonLink>
        </div>
      </Section>

      {/* SKILLS SNAPSHOT */}
      <Section title="Skills snapshot" eyebrow="What I use to build">
        <div className="grid gap-4 lg:grid-cols-3">
          <SkillBlock
            title="Frontend"
            items={["React", "Next.js (App Router)", "TypeScript", "Tailwind"]}
          />
          <SkillBlock
            title="Backend"
            items={["Node.js", "Express", "REST APIs", "JWT auth patterns"]}
          />
          <SkillBlock
            title="Security & Quality"
            items={[
              "Input validation",
              "Secrets management",
              "OWASP awareness",
              "SAST/DAST familiarity",
            ]}
          />
        </div>
      </Section>

      {/* ENGINEERING VALUES */}
      <Section title="How I think when I build" eyebrow="Engineering values">
        <div className="grid gap-4 lg:grid-cols-3">
          <ValueCard
            title="Security-first"
            body="I treat security like a product feature — built-in by habit, not added by panic."
          />
          <ValueCard
            title="Practical architecture"
            body="Simple systems scale in clarity first. I avoid complexity until it earns its keep."
          />
          <ValueCard
            title="UX is engineering"
            body="Fast, accessible, and readable code creates experiences that feel effortless."
          />
        </div>
      </Section>

      {/* CONTACT STRIP */}
      <section className="border-t border-zinc-200/70 bg-white py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Want to build something solid?
              </h2>
              <p className="mt-2 text-zinc-700">
                I’m open to early-career software engineering roles and
                full-stack projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary">
                Reach out
              </ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                Browse work
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs font-medium text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-zinc-700">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700">{body}</p>
    </div>
  );
}
