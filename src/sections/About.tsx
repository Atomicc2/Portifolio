const stats = [
  { label: "Anos de experiência", value: "3+" },
  { label: "Projetos entregues", value: "4+" },
  { label: "Tecnologias", value: "8+" },
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
              Curso Sistemas de Informação na Universidade Federal de Sergipe
              (UFS). Parte dos meus projetos veio de disciplinas, como estruturas
              de dados, banco de dados e teoria da computação. O resto são projetos
              próprios, como o AuthStack e o WalletLedger.
            </p>
            <p>
              Tenho mais experiência com Java e Spring Boot, mas também uso
              TypeScript com Angular e React, e Python quando o problema pede.
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
