import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col items-center justify-between text-center mb-12 sm:flex-row sm:justify-start">
        <div>
          <h2 className="font-display text-3xl font-bold">Projetos</h2>
          <p className="mt-4 max-w-prose text-muted">
            Alguns dos projetos que desenvolvi, com código aberto no GitHub.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}