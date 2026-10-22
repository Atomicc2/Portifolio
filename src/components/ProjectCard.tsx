import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-5 border-t border-line py-9 sm:grid-cols-[13rem_1fr] sm:gap-10">
      <div>
        <h3 className="font-display text-2xl font-bold">{project.name}</h3>
        {project.status && (
          <p className="mt-2 inline-block rounded border border-accent/40 px-2 py-0.5 text-sm text-accent">
            {project.status}
          </p>
        )}
      </div>

      <div>
        <p className="max-w-prose text-ink/90">{project.summary}</p>

        <ul className="mt-4 max-w-prose list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-muted">{project.tech.join(", ")}</p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline"
            >
              {l.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
