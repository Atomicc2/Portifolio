export type ProjectLink = { label: string; url: string };

export type Project = {
  name: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  /** Preencha só quando o projeto ainda não estiver concluído. */
  status?: string;
  /** Imagem do projeto (caminho absoluto da pasta public/). */
  image?: string;
};

const gh = (repo: string) => `https://github.com/Anderson-S/${repo}`;

export const projects: Project[] = [
  {
    name: "WalletLedger",
    summary:
      "Carteira digital experimental com ledger de partidas dobradas, idempotência, concorrência pessimista e liquidação assíncrona (webhook + fila). Backend em Java 21 + Spring Boot 3 e frontend em React 19 + TypeScript + Tailwind.",
    highlights: [
      "Ledger de dupla entrada: débito e crédito com soma algébrica rigorosamente zero",
      "Idempotência ponta a ponta via idempotency_key (sem gasto duplo)",
      "Lock pessimista (SELECT FOR UPDATE) para transferências seguras",
      "Estorno com lançamentos compensatórios invertidos para auditoria",
      "Webhook autenticado + worker/fila (@Scheduled) para liquidação assíncrona",
      "61 testes automatizados passando (unit, slice JPA, integração)",
    ],
    tech: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL 16",
      "Flyway",
      "JWT (JJWT)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Docker",
    ],
    links: [
      { label: "Repositório", url: gh("WalletLedger") },
      { label: "Demo Frontend", url: "https://wallet-ledger-liard.vercel.app" },
      { label: "Demo API", url: "https://walletledger-api.onrender.com" },
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3EWalletLedger%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3ECarteira Digital%3C/text%3E%3C/svg%3E",
  },
  {
    name: "AuthStack",
    summary:
      "Autenticação de ponta a ponta com API em Spring Boot emitindo tokens JWT e frontend em Angular consumindo a API. Repositórios separados para frontend e API.",
    highlights: [
      "Login com JWT e rotas protegidas pelo Spring Security",
      "Validação de entrada com Bean Validation",
      "Frontend Angular 17 e API Spring Boot em repositórios separados",
      "Fluxo completo de autenticação: login, cadastro e rotas protegidas",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Angular", "TypeScript"],
    links: [
      { label: "Frontend", url: gh("AuthStackPage") },
      { label: "API", url: gh("auth-stack-api") },
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3AuthStack%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3CAutenticação JWT%3C/text%3E%3C/svg%3E",
  },
  {
    name: "IMDb Database",
    summary:
      "Trabalho acadêmico de Estrutura de Dados que carrega e manipula dados públicos do IMDb a partir de arquivos TSV. Implementa estruturas de árvore (AVL e Binária), algoritmos de ordenação e pesquisa.",
    highlights: [
      "Leitura de arquivos TSV do banco público do IMDb",
      "Estruturas de dados: Árvore AVL e Árvore Binária",
      "Algoritmos de ordenação: QuickSort, MergeSort, SelectionSort, InsertionSort, BubbleSort",
      "Algoritmos de pesquisa: sequencial e binária",
    ],
    tech: ["Java 21", "JDBC", "PostgreSQL", "SQL", "Estruturas de Dados"],
    links: [{ label: "Repositório", url: gh("IMDb_database") }],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3CIMDb Database%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3CEstrutura de Dados%3C/text%3E%3C/svg%3E",
  },
  {
    name: "AutoLabTC",
    summary:
      "Plataforma computacional para construção, transformação e manipulação de autômatos finitos, integrada ao JFLAP. Projeto de pesquisa do Departamento de Sistemas de Informação da UFS, em fase de planejamento e definição de arquitetura.",
    highlights: [
      "Expressões Regulares, AFN e AFD",
      "Importação e exportação de arquivos .jff (JFLAP)",
      "Operações e transformações sobre autômatos",
      "Conversão AFN → AFD e minimização de AFD",
      "Visualização passo a passo dos algoritmos",
    ],
    tech: ["React", "Angular", "Spring Boot", "Java", "PostgreSQL", "JFLAP"],
    links: [{ label: "Repositório", url: gh("AutoLabTC") }],
    status: "Em desenvolvimento",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3CAutoLabTC%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3CAutômatos Finitos%3C/text%3E%3C/svg%3E",
  },
  {
    name: "API REST Eventos",
    summary:
      "API REST desenvolvida em Java com Spring Boot aplicando boas práticas de backend, modelagem de dados e deploy em cloud. Hospedada na AWS com EC2, RDS e S3.",
    highlights: [
      "CRUD completo de eventos",
      "Paginação e filtros de resultados",
      "Modelagem de dados com Spring Data JPA",
      "Upload de arquivos no Amazon S3",
      "PostgreSQL no RDS",
      "Deploy em instância EC2 com VPC",
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "AWS (EC2, RDS, S3, VPC)", "REST API"],
    links: [{ label: "Repositório", url: gh("javaEventTecApi") }],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3CAPI Eventos%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3CSpring Boot + AWS%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Resta Um (Jogo)",
    summary:
      "Jogo clássico Resta Um desenvolvido em C++ com interface gráfica usando Raylib. Trabalho acadêmico da disciplina Programação 2 da UFS, incluindo lógica completa do tabuleiro e detecção de movimentos.",
    highlights: [
      "Lógica completa do tabuleiro do Resta Um",
      "Detecção de movimentos válidos (saltar peça adjacente)",
      "Interface gráfica com Raylib",
      "Executável pronto para Windows",
    ],
    tech: ["C++", "Raylib", "OpenGL", "Programação 2 (UFS)"],
    links: [{ label: "Repositório", url: gh("JogoRestaUmUFS") }],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3CResta Um%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3CC++ + Raylib%3C/text%3E%3C/svg%3E",
  },
];