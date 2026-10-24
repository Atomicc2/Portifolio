# Portfólio de Anderson Santana — Plano de Implementação

## Estado atual do projeto

- **Stack:** Vite + React 18 + TypeScript + Tailwind CSS v4
- **Estrutura:**
  - `src/App.tsx` — monta Navbar, Hero, Projects, Skills, About, Contact, Footer
  - `src/components/` — Navbar, Hero, Footer, icons.tsx, ProjectCard
  - `src/sections/` — About, Contact, Projects, Skills
  - `src/data/projects.ts` — dados dos projetos
  - `src/index.css` — sistema de cores via `@theme` (Tailwind v4)
- **Cores padrão (manter como base):**
  - Fundo: `#0f1416`
  - Superfície: `#151c1f`
  - Linhas/bordas: `#243036`
  - Texto primário: `#e7eeef`
  - Texto secundário: `#8c9ca0`
  - **Destaque (teal/verde-azulado): `#2dd4bf`**
- **Fontes:** Bricolage Grotesque (títulos) + Hanken Grotesk (corpo)
- **Arquivos na raiz:**
  - `Anderson_Santana_CV.pdf` — currículo em PDF adicionado
  - `Imagens/Minha_Foto.jpeg` — foto já tratada (sem fundo, pronta para uso)
- **Git:** repositório configurado e logado. O perfil do GitHub pode ser acessado via Git CLI (`git remote -v`, `git clone`, etc.)
- **Dados do currículo:** todas as informações textuais do portfólio (sobre mim, habilidades, experiência, formação, projetos, contatos) devem ser preenchidas com base nos dados presentes no arquivo `Anderson_Santana_CV.pdf`. Sempre que houver dúvida sobre algum dado, consulte o PDF antes de preencher.

## Objetivo

Evoluir o portfólio gradativamente em direção ao modelo de referência (site estilo "Alex Morgan / DevFusion"), mantendo a identidade visual com o tom teal `#2dd4bf` e deixando o código bem estruturado para fácil edição ao longo do tempo.

## Padrão de cores fácil de trocar

Todas as cores estão centralizadas em `src/index.css` no bloco `@theme`. Para mudar a cor de destaque no futuro, edite apenas a variável `--color-accent` (atualmente `#2dd4bf`). Nenhum componente precisa ser alterado.

## Plano de implementação (fase por fase)

Cada fase é independente — pode-se parar em qualquer uma e o site continua funcionando.

### Fase 1 — Sistema de cores centralizado
Centralizar todas as cores semânticas em `src/index.css` (`@theme`):
- `--color-bg`, `--color-surface`, `--color-line`, `--color-ink`, `--color-muted`, `--color-accent`, `--color-accent-hover`, `--color-accent-muted`
- Usar variáveis CSS nos componentes via Tailwind (`bg-[var(--color-accent)]` etc.) para evitar hardcode.

### Fase 2 — Hero com foto sem fundo
Atualizar `src/components/Hero.tsx`:
- Layout em duas colunas (foto à esquerda ou direita, texto ao lado).
- Usar `public/Imagens/Minha_Foto.jpeg` (já sem fundo).
- Imagem com borda arredondada e sombra sutil.
- Botões de ação (Ver projetos, GitHub) mantendo a cor de destaque teal.

### Fase 3 — Seção "Sobre mim" expandida
Atualizar `src/sections/About.tsx`:
- Adicionar mini cards com estatísticas (anos de experiência, projetos, etc.) — opcional.
- Melhorar tipografia e espaçamento da bio atual.
- Layout responsivo (texto ao lado dos stats em desktop, empilhado em mobile).

### Fase 4 — Nova seção "Meus Serviços"
Criar `src/components/ServiceCard.tsx` e `src/sections/Services.tsx`:
- Cards com ícone, título, descrição curta, link "Saiba mais".
- Dados dos serviços em `src/data/services.ts` (fácil de editar).
- Cor de destaque teal em ícones e bordas de hover.

### Fase 5 — Skills com barras de progresso e ícones
Atualizar `src/sections/Skills.tsx`:
- Barras de progresso com percentuais.
- Grid de ícones de tecnologias (React, Node, PostgreSQL, Docker, Java, Spring Boot etc.).
- Dados em `src/data/skills.ts`.

### Fase 6 — Projetos com thumbnails
Atualizar `src/components/ProjectCard.tsx` e `src/data/projects.ts`:
- Adicionar campo `image` para thumbnail de cada projeto.
- Layout em grid (1 coluna mobile, 2–3 desktop).
- Manter links de GitHub/demo e pilha de tecnologias.

### Fase 7 — Seção "Testemunhais"
Criar `src/sections/Testimonials.tsx` e `src/data/testimonials.ts`:
- Cards com frase, nome, cargo/empresa, estrelas e avatar opcional.

### Fase 8 — Contato expandido
Atualizar `src/sections/Contact.tsx`:
- Layout em duas colunas: formulário à esquerda, dados de contato (e-mail, LinkedIn, localização, disponibilidade) à direita.
- Formulário com Nome, E-mail, Tipo do projeto, Orçamento, Mensagem e botão "Enviar".
- Botão e foco dos inputs usando cor de destaque teal.

### Fase 9 — Navbar e Footer aprimorados
- Navbar: indicar seção ativa ao rolar, menu hambúrguer para mobile.
- Footer: links rápidos (sobre, serviços, projetos, contato) e redes sociais com ícones.

### Fase 10 — Responsividade, acessibilidade e desempenho
- Garantir que todas as seções fiquem boas em mobile.
- Manter `scroll-behavior: smooth` e `prefers-reduced-motion`.
- Verificar contraste de texto sobre o fundo escuro com o teal de destaque.

## Estrutura sugerida de pastas à medida que o portfólio cresce

```
src/
  core/               # variáveis de tema, cores, tipografia (único lugar para mudar visual)
  components/         # componentes reutilizáveis (Button, Card, Section, Container, Icon)
  sections/           # seções da página (Hero, About, Services, Skills, Projects, Testimonials, Contact)
  data/               # conteúdo puro (projects.ts, skills.ts, services.ts, testimonials.ts)
  hooks/              # hooks customizados (useScroll, useMediaQuery)
  utils/              # funções utilitárias (formatDate, cn, etc.)
```

## Como acessar o GitHub pelo Git CLI

O repositório já está configurado e logado na conta do GitHub. Para acessar o perfil ou clonar repositórios:
- `git remote -v` — ver remotos configurados
- `git clone git@github.com:Anderson-S/<repositorio>.git` — clonar um repositório
- `gh auth status` — verificar autenticação do GitHub CLI (se instalado)

## Plano de Atualização baseado no currículo.md

O arquivo `curriculo.md` (cópia do PDF `Anderson_Santana_CV.pdf`) contém as informações atualizadas que devem ser refletidas no portfólio. Abaixo o plano de ajustes:

### Dados pessoais (já corretos no site)
- Nome: Anderson Santana ✅
- E-mail: andersonacpemp@gmail.com ✅
- LinkedIn: linkedin.com/in/anderson-santana-b99896351 ✅
- GitHub: github.com/Atomicc2 ✅ (corrigido para Atomicc2)
- Localização: Sergipe, Brasil ✅ (não está explícito no site, pode adicionar)

### Perfil profissional
- Título: "Desenvolvedor Full Stack" (site já atualizado para "Fullstack") ✅
- Resumo: estudante de SI na UFS, foco backend/fullstack com Java, Spring Boot, APIs REST, Spring Security, JWT, PostgreSQL, Docker, AWS. Busca estágio backend ou fullstack. (precisa ser incorporado na seção Sobre/Hero)

### Experiência (NOVO — não está no site)
- **Desenvolvedor Front-End (Voluntário) — ItatechJr — 2025 – Presente**
  - Interfaces web com HTML, CSS, JavaScript
  - Layouts responsivos e UI/UX
  - Git/GitHub
  - Migração para mobile (+30% acessos)
  - Figma para protótipos UI
  - ClickUp/Jira para gestão de tarefas
- **Ação:** Criar seção "Experiência" ou adicionar ao "Sobre mim".

### Formação (já está parcialmente no site)
- Universidade Federal de Sergipe (UFS) — Bacharelado em Sistemas de Informação ✅ (está no About)

### Projetos (atualizar com dados do currículo.md)
Projetos listados no currículo:
1. **WalletLedger — Carteira Digital** (2025–Presente) ✅ já no site
   - github.com/Atomicc2/WalletLedger
   - wallet-ledger-liard.vercel.app
   - Ledger de partida dobrada, idempotência, CompletableFuture, PostgreSQL ACID, Docker
2. **AutoLabTC — Plataforma Web de Autômatos** ✅ já no site
   - github.com/Atomicc2/AutoLabTC
   - Cytoscape.js, visualização em grafo, salvamento/exportação
3. **API REST com Deploy na AWS** ✅ já no site (como "API REST Eventos")
   - github.com/Atomicc2/javaEventTecApi
   - CRUD, paginação, filtros, JPA/Hibernate, Amazon S3, AWS EC2

**Ação:** Atualizar resumos e highlights dos projetos no `src/data/projects.ts` com base nos detalhes do currículo.md.

### Habilidades técnicas (atualizar Skills)
Lista do currículo:
Java, TypeScript, JavaScript, SQL, Python, C, Spring Data JPA, Hibernate, JWT, C++, Spring Boot, Spring Security, APIs REST, Arquitetura MVC, Maven, HTML, CSS, Tailwind CSS, PostgreSQL, MySQL, Angular, React, AWS (EC2, S3, RDS), Docker, Docker Compose, Linux, Git, GitHub, Postman, Agentes de código no terminal, Prompt Engineering, Revisão de código gerado por IA.

Certificações:
- Java (Básico e Intermediário) - Loiane Gronner, 2025
- Spring Boot e Estrutura de Dados - Loiane Gronner, 2025
- Angular 21 - Loiane Gronner, 2025
- CS50x: Introduction to Computer Science - Harvard University, 2025

**Ação:** Atualizar `src/data/skills.ts` com essas tecnologias e adicionar certificações se relevante.

### Remoção da seção "O que os clientes dizem" (Testimonials)
- Os depoimentos foram criados como placeholders fictícios.
- **Decisão:** não excluir os arquivos (`src/data/testimonials.ts`, `src/components/TestimonialCard.tsx`, `src/sections/Testimonials.tsx`).
- **Ação:** remover apenas a importação e renderização do `<Testimonials />` do `src/App.tsx`, deixando a seção fora do ar até que existam depoimentos reais.
- Arquivos permanecem no repositório para uso futuro.

## Regras gerais

- Todas as alterações devem ser feitas em português Brasileiro nos comentários e textos visíveis quando aplicável.
- Manter o código enxuto e bem organizado para facilitar edição futura.
- Não remover a cor de destaque teal `#2dd4bf` como padrão, a menos que seja intencional e feito via `@theme`.