import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-4xl px-5 py-16">
      <h2 className="font-display text-3xl font-bold">Projetos</h2>
      <p className="mt-3 max-w-prose text-muted">
        Quatro projetos, com o código aberto no GitHub.
      </p>
      <div className="mt-8">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
