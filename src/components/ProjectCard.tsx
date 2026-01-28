// components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:ring-1 hover:ring-indigo-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
            <Link
              href={`/projects/${project.slug}`}
              className="outline-none focus:underline"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-zinc-600">{project.tagline}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-700">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 group-hover:border-indigo-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="font-medium text-indigo-700 underline-offset-4 hover:underline"
        >
          Read the build notes →
        </Link>

        {project.links
          .filter((l) => l.label === "GitHub" || l.label === "Live")
          .map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 underline-offset-4 hover:underline"
            >
              {l.label}
            </a>
          ))}
      </div>


    </div>
  );
}
