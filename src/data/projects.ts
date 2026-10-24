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

const gh = (repo: string) => `https://github.com/Atomicc2/${repo}`;

export const projects: Project[] = [
  {
    name: "WalletLedger - Carteira Digital",
    summary:
      "Carteira digital com transferências e débitos, baseada em ledger de partida dobrada (double-entry) para garantir consistência e rastreabilidade das transações. Implementa chaves de idempotência para evitar operações duplicadas e processamento assíncrono com eventos e CompletableFuture. Dados modelados e persistidos em PostgreSQL com transações ACID, containerizado com Docker e Docker Compose.",
    highlights: [
      "Ledger de partida dobrada (double-entry) para consistência e rastreabilidade",
      "Chaves de idempotência para evitar operações duplicadas (retry)",
      "Processamento assíncrono com eventos e CompletableFuture",
      "PostgreSQL com transações ACID",
      "Docker e Docker Compose",
    ],
    tech: [
      "Java 21",
      "Spring Boot 3",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "CompletableFuture",
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
    name: "AutoLabTC - Plataforma Web de Autômatos",
    summary:
      "Plataforma web para criação, simulação e análise de autômatos finitos e de pilha. Inclui visualização interativa em grafo com Cytoscape.js e validação de cadeias passo a passo, com salvamento e exportação dos autômatos criados.",
    highlights: [
      "Criação, simulação e análise de autômatos finitos e de pilha",
      "Visualização interativa em grafo com Cytoscape.js",
      "Validação de cadeias passo a passo",
      "Salvamento e exportação de autômatos criados",
    ],
    tech: ["Cytoscape.js", "React", "Angular", "Java", "Spring Boot"],
    links: [{ label: "Repositório", url: gh("AutoLabTC") }],
    status: "Em desenvolvimento",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3CAutoLabTC%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3CAutômatos Finitos%3C/text%3E%3C/svg%3E",
  },
  {
    name: "API REST com Deploy na AWS",
    summary:
      "API REST com CRUD completo, paginação e filtros para otimização de consultas. Integração com PostgreSQL via JPA/Hibernate e upload de arquivos com Amazon S3. Deploy realizado em instância AWS EC2.",
    highlights: [
      "CRUD completo de eventos",
      "Paginação e filtros de resultados",
      "PostgreSQL via JPA/Hibernate",
      "Upload de arquivos com Amazon S3",
      "Deploy em instância AWS EC2",
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "Amazon S3", "AWS EC2", "REST API"],
    links: [{ label: "Repositório", url: gh("javaEventTecApi") }],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230f1416'/%3E%3Crect x='40' y='40' width='320' height='220' fill='none' stroke='%232dd4bf' stroke-width='2' rx='12'/%3E%3Ctext x='200' y='150' font-family='sans-serif' font-size='18' fill='%238c9ca0' text-anchor='middle'%3CAPI REST%3C/text%3E%3Ctext x='200' y='175' font-family='sans-serif' font-size='14' fill='%232dd4bf' text-anchor='middle'%3CAWS Deploy%3C/text%3E%3C/svg%3E",
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