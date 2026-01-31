// app/projects/page.tsx
import { Container } from "@/components/Container";
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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200/70 bg-white">
      <div className="absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-gray-300 blur-3xl" />
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
    </main>
  );
}
