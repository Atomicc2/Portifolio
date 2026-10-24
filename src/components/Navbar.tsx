const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#conhecimentos", label: "Conhecimentos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3.5"
      >
        <a href="#topo" className="font-display text-lg font-bold text-ink">
          Anderson S.
        </a>
        <ul className="flex gap-4 text-sm text-muted sm:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
