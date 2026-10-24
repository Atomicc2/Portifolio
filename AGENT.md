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

## Regras gerais

- Todas as alterações devem ser feitas em português Brasileiro nos comentários e textos visíveis quando aplicável.
- Manter o código enxuto e bem organizado para facilitar edição futura.
- Não remover a cor de destaque teal `#2dd4bf` como padrão, a menos que seja intencional e feito via `@theme`.