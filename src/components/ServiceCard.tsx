import type { Service } from "../data/services";

const Icons: Record<string, JSX.Element> = {
  code: (
    <svg
      className="h-6 w-6"
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
  monitor: (
    <svg
      className="h-6 w-6"
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
  database: (
    <svg
      className="h-6 w-6"
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
  "hard-drive": (
    <svg
      className="h-6 w-6"
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
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = Icons[service.icon];

  return (
    <article className="rounded-xl border border-line bg-surface p-6 hover:border-accent/50 transition-colors">
      <div className="mb-4 rounded bg-accent/10 p-3 inline-block">{Icon}</div>
      <h3 className="font-display text-xl font-bold">{service.name}</h3>
      <p className="mt-3 text-ink/90 leading-relaxed">{service.description}</p>
    </article>
  );
}