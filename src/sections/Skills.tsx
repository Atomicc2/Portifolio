const groups = [
  { name: "Backend", items: "Java, Spring Boot, Spring Data JPA, Spring Security, APIs REST" },
  { name: "Banco de dados", items: "PostgreSQL, SQL, JDBC" },
  { name: "Frontend", items: "TypeScript, Angular, React, Tailwind CSS" },
  { name: "Ferramentas", items: "Git, GitHub, Maven, Docker" },
];

export default function Skills() {
  return (
    <section id="conhecimentos" className="mx-auto max-w-4xl px-5 py-16">
      <h2 className="font-display text-3xl font-bold">Conhecimentos técnicos</h2>
      <dl className="mt-8">
        {groups.map((g) => (
          <div
            key={g.name}
            className="grid gap-1 border-t border-line py-5 sm:grid-cols-[13rem_1fr] sm:gap-10"
          >
            <dt className="font-semibold">{g.name}</dt>
            <dd className="text-muted">{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
