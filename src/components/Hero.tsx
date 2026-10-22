import { GitHubIcon } from "./icons";

export default function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-4xl px-5 pb-20 pt-20 sm:pt-28">
      <p className="rise text-muted">Desenvolvedor backend</p>
      <h1 className="rise rise-2 mt-3 font-display text-6xl font-bold leading-none tracking-tight sm:text-8xl">
        Atomicc2
      </h1>
      <p className="rise rise-3 mt-8 max-w-xl border-l-2 border-accent pl-5 text-lg text-ink/90">
        Estudo Sistemas de Informação na UFS e gosto de trabalhar com a parte
        do servidor: APIs, banco de dados e autenticação. Trabalho
        principalmente com Java e Spring Boot e estou buscando estágio ou vaga
        júnior em backend.
      </p>
      <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
        <a
          href="#projetos"
          className="rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Ver projetos
        </a>
        <a
          href="https://github.com/Atomicc2"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </section>
  );
}
