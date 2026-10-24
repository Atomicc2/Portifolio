const stats = [
  { label: "Projetos entregues", value: "20+" },
  { label: "Tecnologias", value: "15+" },
  { label: "Disponibilidade", value: "Imediata" },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-8 sm:grid-cols-12">
        <div className="sm:col-span-6 order-2 sm:order-1">
          <h2 className="font-display text-3xl font-bold">Sobre mim</h2>
          <div className="mt-6 max-w-prose space-y-4 text-ink/90">
            <p>
              Estudante de Sistemas de Informação na Universidade Federal de
              Sergipe (UFS) com foco em desenvolvimento backend e full stack com
              Java e Spring Boot. Experiência prática em APIs REST, autenticação
              com Spring Security e JWT, modelagem de dados em PostgreSQL,
              containerização com Docker e deploy na AWS. Desenvolvo sistemas com
              atenção à consistência transacional e à arquitetura em camadas,
              e utilizo agentes de código com IA para acelerar a entrega,
              revisando criticamente o código gerado.
            </p>
            <p>
              Busco estágio em desenvolvimento backend ou full stack.
            </p>
          </div>
        </div>

        <div className="sm:col-span-6 order-1 sm:order-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-line bg-surface p-5"
              >
                <p className="text-2xl font-display font-bold text-accent">
                  {s.value}
                </p>
                <p className="text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
