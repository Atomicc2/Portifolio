import { skills, skillCategories, certifications } from "../data/skills";

const Icons: Record<string, JSX.Element> = {
  database: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9c0 2.5 1 4.8 2.7 6.5" />
      <path d="M18 12a3 3 0 0 1-3 3" />
    </svg>
  ),
  monitor: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "hard-drive": (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M5 12a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" />
      <path d="M5 12a2 2 0 0 1 2 2h10a2 2 0 0 1-2 2" />
    </svg>
  ),
  code: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function Skills() {
  const grouped = skillCategories.map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.category === cat.key),
  }));

  return (
    <section id="conhecimentos" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="font-display text-3xl font-bold">Conhecimentos técnicos</h2>
        <p className="mt-4 text-ink/90 max-w-2xl">
          Tecnologias que utilizo no dia a dia para construir soluções
          digitais eficientes e escaláveis.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {grouped.map((cat) => (
          <div
            key={cat.key}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded bg-accent/10 p-2 inline-block">{Icons[cat.icon]}</div>
              <h3 className="font-display text-xl font-bold">{cat.label}</h3>
            </div>

            <div className="space-y-4">
              {cat.items.map((s) => (
                <div key={s.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-ink/90">{s.name}</span>
                    <span className="text-muted">{s.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full border border-line/50 overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500 ease-out"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certificações */}
      <div className="mt-12">
        <h3 className="font-display text-2xl font-bold mb-6 text-center">
          Certificações
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-line bg-surface p-4 text-center"
            >
              <p className="font-semibold text-ink">{c.name}</p>
              <p className="text-sm text-muted">
                {c.issuer} · {c.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}