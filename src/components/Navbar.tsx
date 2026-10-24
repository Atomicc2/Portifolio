import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#conhecimentos", label: "Conhecimentos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const registerSection = useCallback((id: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
    else sectionRefs.current.delete(id);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -60% 0%", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-md"
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"
        >
          <a
            href="#topo"
            className="font-display text-lg font-bold text-ink"
            onClick={() => setIsOpen(false)}
          >
            Anderson S.
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-muted transition-colors ${
                  active === l.href.replace("#", "")
                    ? "text-accent font-semibold"
                    : "hover:text-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Botão mobile */}
          <button
            className="md:hidden rounded-md p-2 text-muted hover:text-accent focus:outline-none"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden border-t border-line bg-bg/95 backdrop-blur px-5 pb-4">
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`block py-3 rounded-lg ${
                      active === l.href.replace("#", "")
                        ? "bg-accent/10 text-accent font-semibold"
                        : "text-muted hover:text-accent hover:bg-surface"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* âncoras invisíveis para scrollspy */}
      {links.map((l) => (
        <div
          key={l.href}
          id={l.href.replace("#", "")}
          ref={(el) => registerSection(l.href.replace("#", ""), el)}
          className="sr-only"
        />
      ))}
    </>
  );
}