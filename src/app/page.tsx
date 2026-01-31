// app/page.tsx
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { LogoLoop } from "@/components/LogoLoop";


const techLogos = [
  { src: "/logos/azure.png", alt: "Azure" },
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/next.png", alt: "Next.js" },
  { src: "/logos/ts.png", alt: "TypeScript" },
  { src: "/logos/nodejs.png", alt: "Node.js" },
  { src: "/logos/mongodb.png", alt: "MongoDB" },
  { src: "/logos/js.png", alt: "JavaScript" },
  { src: "/logos/tailwind.png", alt: "Tailwind CSS" },
  { src: "/logos/docker.png", alt: "Docker" },
  { src: "/logos/github.svg", alt: "GitHub" },
  { src: "/logos/visual.jpeg", alt: "VS Code" },
  { src: "/logos/cpp.png", alt: "C++" },
  { src: "/logos/python.png", alt: "Python" },
  { src: "/logos/php.png", alt: "PHP" },
  { src: "/logos/css.png", alt: "CSS" },
  { src: "/logos/html.png", alt: "HTML" },
  { src: "/logos/wordpress.png", alt: "Wordpress" },
  { src: "/logos/wix.png", alt: "Wix" },
];


export default function HomePage() {
  const recent = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-zinc-200/70 bg-white">
      <div className="absolute -top-24 right-[-90px] h-72 w-72 rounded-full bg-gray-300 blur-3xl" />
        <Container>
          <div className="py-14 sm:py-20">
            <p className="text-sm font-medium text-zinc-500">
              Full-stack developer • Security-minded • Builds that ship
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Hi, I am Kavya Verma!
            </h1>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              I build clean web products that hold up under real
              users.
            </h2>

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
              <a
                href="/KavyaVerma-Resume.pdf"
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

      {/* TECH LOGO LOOP */}
      <section className="py-14">
        <Container>
          <LogoLoop
            logos={techLogos}
            speed={25}
            gap={50}
            className="opacity-90"
          />
        </Container>
      </section>

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
                I am open to early-career software engineering and
                full-stack developer roles and projects.
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
