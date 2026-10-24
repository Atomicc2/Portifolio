import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-line bg-surface overflow-hidden transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
      {project.image && (
        <div className="h-48 relative overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-4">
            <h3 className="font-display text-xl font-bold text-ink">{project.name}</h3>
          </div>
          {project.status && (
            <div className="absolute top-4 right-4">
              <span className="inline-block rounded border border-accent/40 px-2 py-0.5 text-xs text-accent">
                {project.status}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        {project.image ? null : (
          <div className="mb-4">
            <h3 className="font-display text-2xl font-bold">{project.name}</h3>
            {project.status && (
              <p className="mt-2 inline-block rounded border border-accent/40 px-2 py-0.5 text-sm text-accent">
                {project.status}
              </p>
            )}
          </div>
        )}
        <p className="max-w-prose text-ink/90">{project.summary}</p>

        <ul className="mt-4 max-w-prose list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-muted">{project.tech.join(", ")}</p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
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