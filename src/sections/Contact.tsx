import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/icons";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/Atomicc2",
    text: "github.com/Atomicc2",
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
    <section id="contato" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
        {/* Formulário */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="font-display text-3xl font-bold">Contato</h2>
            <p className="mt-3 max-w-prose text-muted">
              Para falar sobre vagas ou sobre qualquer um dos projetos, escreva
              por e-mail, LinkedIn ou preencha o formulário abaixo.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensagem enviada com sucesso! (simulação)");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="nome"
                  className="mb-1.5 text-sm font-semibold text-ink"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className="rounded-md border border-line bg-surface px-4 py-2.5 text-ink focus:border-accent focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1.5 text-sm font-semibold text-ink"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-line bg-surface px-4 py-2.5 text-ink focus:border-accent focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="tipo"
                className="mb-1.5 text-sm font-semibold text-ink"
              >
                Tipo do projeto
              </label>
              <select
                id="tipo"
                name="tipo"
                className="rounded-md border border-line bg-surface px-4 py-2.5 text-ink focus:border-accent focus:outline-none transition-colors"
              >
                <option value="estagio">Estágio</option>
                <option value="junior">Vaga Júnior</option>
                <option value="freelance">Freelance</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="orcamento"
                className="mb-1.5 text-sm font-semibold text-ink"
              >
                Orçamento (opcional)
              </label>
              <input
                id="orcamento"
                name="orcamento"
                type="text"
                className="rounded-md border border-line bg-surface px-4 py-2.5 text-ink focus:border-accent focus:outline-none transition-colors"
                placeholder="Ex: R$ 5.000,00"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="mensagem"
                className="mb-1.5 text-sm font-semibold text-ink"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                className="rounded-md border border-line bg-surface px-4 py-2.5 text-ink focus:border-accent focus:outline-none transition-colors"
                placeholder="Conte um pouco sobre o seu projeto..."
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-3 font-semibold text-bg transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        {/* Dados de contato */}
        <div className="flex-1 space-y-6 lg:space-y-0">
          <div className="space-y-4">
            {contacts.map(({ label, href, text, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-line hover:border-accent/50 hover:bg-accent/5 transition-colors"
              >
                <Icon className="h-5 w-5 text-muted group-hover:text-accent" />
                <div>
                  <span className="font-semibold text-ink group-hover:text-accent">
                    {label}
                  </span>
                  <span className="text-sm text-muted truncate">{text}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="font-display text-lg font-bold mb-3">Disponibilidade</h3>
            <p className="text-muted text-sm leading-relaxed">
              Disponível para estágio ou vaga júnior em fullstack. Resposta em até
              24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}