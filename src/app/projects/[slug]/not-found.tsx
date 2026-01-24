// app/projects/[slug]/not-found.tsx
import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Container>
        <div className="py-16">
          <p className="text-sm font-medium text-indigo-700">Not found</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
            That project does not exist.
          </h1>
          <p className="mt-3 max-w-xl text-zinc-700">
            The link may be wrong, or the project is still being polished.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex text-sm font-medium text-indigo-700 underline-offset-4 hover:underline"
          >
            Back to Projects →
          </Link>
        </div>
      </Container>
    </main>
  );
}
