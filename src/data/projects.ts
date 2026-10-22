export type ProjectLink = { label: string; url: string };

export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  /** Preencha só quando o projeto ainda não estiver concluído. */
  status?: string;
};

const gh = (repo: string) => `https://github.com/Atomicc2/${repo}`;

export const projects: Project[] = [
  {
    name: "AuthStack",
    summary:
      "Autenticação de ponta a ponta: uma API em Spring Boot que emite tokens JWT e um frontend em Angular que consome essa API.",
    highlights: [
      "Login com JWT e rotas protegidas pelo Spring Security",
      "Validação dos dados de entrada com Bean Validation",
      "Frontend e API em repositórios separados",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Angular", "TypeScript"],
    links: [
      { label: "Frontend", url: gh("AuthStackPage") },
      { label: "API", url: gh("auth-stack-api") },
    ],
  },
  {
    name: "WalletLedger",
    summary:
      "Carteira digital que registra cada movimentação como lançamentos de débito e crédito (partida dobrada). Chaves de idempotência evitam que uma requisição repetida duplique a operação.",
    highlights: [
      "Livro-razão com partida dobrada",
      "Idempotência em operações que podem ser reenviadas",
    ],
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker", "Maven"],
    links: [{ label: "Repositório", url: gh("WalletLedger") }],
  },
  {
    name: "AutoLabTC",
    summary:
      "Projeto da disciplina de Teoria da Computação para criar e simular autômatos, com visualização em grafo.",
    highlights: [
      "Grafo interativo com Cytoscape.js",
      "Funcionalidades ainda sendo ampliadas",
    ],
    tech: ["TypeScript", "Angular", "Cytoscape.js", "Tailwind CSS"],
    links: [{ label: "Repositório", url: gh("AutoLabTC") }],
    status: "Em desenvolvimento",
  },
  {
    name: "IMDb_database",
    summary:
      "Modelagem de banco de dados e consultas analíticas sobre a base pública do IMDb, com PostgreSQL e acesso por Java/JDBC.",
    highlights: [
      "Modelagem do banco a partir dos arquivos do IMDb",
      "Consultas SQL como diretores mais bem avaliados e notas por década",
    ],
    tech: ["Java 21", "JDBC", "PostgreSQL", "SQL"],
    links: [{ label: "Repositório", url: gh("IMDb_database") }],
  },
];
