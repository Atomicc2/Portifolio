import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/icons";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/Anderson-S",
    text: "github.com/Anderson-S",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anderson-santana-b99896351",
    text: "anderson-santana-b99896351",
    Icon: LinkedInIcon,
  },
  {
    label: "E-mail",
    href: "mailto:andersonacpemp@gmail.com",
    text: "andersonacpemp@gmail.com",
    Icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-4xl px-5 py-16">
      <h2 className="font-display text-3xl font-bold">Contato</h2>
      <p className="mt-3 max-w-prose text-muted">
        Para falar sobre vagas ou sobre qualquer um dos projetos, escreva por
        e-mail ou LinkedIn.
      </p>
      <ul className="mt-8">
        {contacts.map(({ label, href, text, Icon }) => (
          <li key={label} className="border-t border-line">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 py-4 transition-colors hover:text-accent"
            >
              <Icon className="h-5 w-5 text-muted group-hover:text-accent" />
              <span className="w-24 font-semibold">{label}</span>
              <span className="truncate text-muted group-hover:text-accent">{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
