const experiences = [
  {
    role: "Desenvolvedor Front-End (Voluntário)",
    company: "ItatechJr",
    period: "2025 – Presente",
    highlights: [
      "Desenvolvo e mantenho interfaces web com HTML, CSS e JavaScript para demandas reais da organização",
      "Implemento layouts responsivos e melhorias de usabilidade, aplicando boas práticas de UI/UX",
      "Trabalho em equipe com versionamento de código em Git e GitHub",
      "Conduzi a migração do site para visualização mobile, elevando em 30% o número de acessos",
      "Utilizei o Figma para criar e validar protótipos de UI alinhados ao modelo definido pelo gestor",
      "Gerenciei o fluxo de tarefas da equipe via ClickUp e ferramenta estilo Jira, organizando prioridades",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-display text-3xl font-bold">Experiência</h2>
        <p className="mt-4 text-ink/90 max-w-2xl">
          Minha trajetória profissional e voluntária no desenvolvimento de software.
        </p>
      </div>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="rounded-xl border border-line bg-surface p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                <p className="text-accent font-semibold">{exp.company}</p>
              </div>
              <span className="text-sm text-muted whitespace-nowrap">{exp.period}</span>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-ink/90">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}