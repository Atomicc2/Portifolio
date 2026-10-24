import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./icons";

const footerLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const socials = [
  { href: "https://github.com/Atomicc2", Icon: GitHubIcon, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/anderson-santana-b99896351",
    Icon: LinkedInIcon,
    label: "LinkedIn",
  },
  { href: "https://wa.me/5579996758109", Icon: WhatsAppIcon, label: "WhatsApp" },
  { href: "mailto:andersonacpemp@gmail.com", Icon: Mail, label: "E-mail" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 mb-8">
          <div className="col-span-full lg:col-span-1">
            <a href="#topo" className="font-display text-lg font-bold text-ink">
              Anderson S.
            </a>
            <p className="mt-2 text-sm text-muted max-w-sm">
              Desenvolvedor Fullstack focado em Java, Spring Boot e APIs robustas.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-3">Contato</h4>
            <ul className="space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                  >
                    <s.Icon className="h-4 w-4" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-3">Disponível para</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Estágio · Fullstack</li>
              <li>Vaga Júnior · Fullstack</li>
              <li>Freelance · APIs REST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Anderson S.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>Feito com foco em código limpo e boas práticas.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}