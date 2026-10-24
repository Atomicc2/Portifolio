import { GitHubIcon } from "./icons";

export default function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-6xl px-5 pb-24 pt-24 sm:pt-32">
      <div className="grid items-center gap-10 sm:grid-cols-12">
        <div
          className="rise sm:col-span-6 order-2 sm:order-1 flex flex-col items-center justify-center"
        >
          <div className="relative inline-block">
            <img
              src="/Imagens/Minha_Foto_sem_fundo.png"
              alt="Foto de Anderson Santana"
              className="rounded-2xl shadow-2xl border border-line/50 w-64 h-64 sm:w-80 sm:h-80 object-cover"
            />
            <div className="absolute -inset-1 rounded-2xl bg-accent blur opacity-20" />
          </div>
        </div>

        <div className="rise rise-2 sm:col-span-6 order-1 sm:order-2">
          <p className="text-muted">Desenvolvedor backend</p>
          <h1 className="mt-3 font-display text-6xl font-bold leading-none tracking-tight sm:text-8xl">
            Anderson S.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl border-l-2 border-accent pl-5 text-lg text-ink/90">
            Estudo Sistemas de Informação na UFS e gosto de trabalhar com a parte
            do servidor: APIs, banco de dados e autenticação. Trabalho
            principalmente com Java e Spring Boot e estou buscando estágio ou vaga
            júnior em backend.
          </p>
          <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Ver projetos
            </a>
            <a
              href="https://github.com/Anderson-S"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
