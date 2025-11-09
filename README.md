# Rede Viva — Plataforma Web para ONGs

Projeto acadêmico da disciplina Front-end Web (Turma 001/2025) para criar uma presença digital completa para organizações do terceiro setor. A proposta cobre semântica HTML5, responsividade CSS3, interatividade básica em JavaScript e práticas de acessibilidade, performance e documentação.

## Sobre o Projeto
Rede Viva é uma plataforma web front-end desenvolvida para dar visibilidade e infraestrutura digital para ONGs brasileiras, reunindo páginas institucionais, vitrine de projetos e um formulário unificado de engajamento. Este repositório concentra toda a base HTML, CSS e JavaScript necessária para a Entrega I da disciplina, servindo como ponto de partida para evoluções futuras (captação, dashboards e interações dinâmicas).

## Visão Geral
- **Contexto**: o terceiro setor brasileiro conta com +820 mil OSCs, mas apenas 30% possuem presença digital adequada. A plataforma Rede Viva busca democratizar ferramentas profissionais para ONGs.
- **Objetivo**: oferecer páginas institucionais, vitrine de projetos/voluntariado e formulário de cadastro unificado, atendendo às especificações da Entrega I (Fundamentos e Estruturação).
- **Personas atendidas**: administradores, voluntários, doadores/apoiadores e visitantes em geral.

## Estrutura de Pastas
```
frontend-web-turma001-2025/
├── index.html          # Página institucional com missão, histórico e contatos
├── projetos.html       # Vitrine de projetos, portal do voluntariado e campanhas de captação
├── cadastro.html       # Formulário completo com validações e máscaras
└── assets/
    ├── css/
    │   ├── base.css        # Tokens (cores, tipografia, espaçamentos) e resets
    │   ├── layout.css      # Leiautes gerais, grid de 12 colunas e containers
    │   ├── components.css  # Botões, cards, tabelas, formulários, alerts, etc.
    │   └── utilities.css   # Breakpoints, ajustes responsivos e prefers-reduced-motion
    ├── js/
    │   ├── masks.js        # Máscaras nativas para CPF, telefone e CEP
    │   └── ui.js           # Menu responsivo, dropdowns, modal e toasts
    └── images/             # Ilustrações SVG otimizadas usadas nas três páginas
```

## Destaques Técnicos
- **HTML5 semântico**: uso de `header`, `nav`, `main`, `section`, `article`, `footer`, hierarquia de títulos lógica e tabelas para relatórios/campanhas.
- **Formulário complexo** (`cadastro.html`): fieldsets lógicos, inputs HTML5 com validações (`required`, `pattern`, `type`, `autocomplete`) e máscaras acessíveis aplicadas via `data-mask`.
- **CSS3 responsivo**: abordagem mobile-first, grid adaptável (`repeat(auto-fit)`), tokens de cor/tipografia, componentes reutilizáveis (cards, badges, tabelas, botões) e suporte a `prefers-reduced-motion`.
- **Acessibilidade**: rótulos associados, `aria-label`/`aria-labelledby`, contraste adequado, foco em navegação por teclado e semântica coerente.
- **SEO/Metadados**: meta descrição, keywords, Open Graph, tema e canonical específicos por página.
- **Assets otimizados**: SVGs leves com descrições (`role="img"` + `aria-label`).

## Entrega II — Estilização e Leiautes
- **Design System**: 8+ cores, escala tipográfica em 5 níveis, espaçamentos modulares (8 a 64px), componentes documentados com exemplos de estados (primário, secundário, desabilitado).
- **CSS Modular**: separação clara entre tokens (`base`), leiautes (grid de 12 colunas + containers), componentes reutilizáveis e utilitários responsivos (5 breakpoints: 480, 640, 768, 1024 e 1280px).
- **Leiautes avançados**: hero e seções construídas com CSS Grid/Flexbox, `layout-grid` customizado com utilidades `col-span-*`, cards responsivos e tabelas adaptáveis.
- **Navegação interativa**: menu principal com dropdown (submenu) e versão mobile hambúrguer, incluindo bloqueio de scroll e sincronização automática em mudanças de breakpoint.
- **Componentes de UI**: badges/tags para categorização, alertas informativos, toast acionado por botão, modal acessível, formulários com feedback visual (`:invalid`) e filtros responsivos.

## Como Executar
1. Clone ou baixe o repositório.
2. Abra `index.html` (ou qualquer página) diretamente no navegador. Não há dependências externas.

## Validação Recomendada
- **HTML (W3C)**: acesse [https://validator.w3.org/](https://validator.w3.org/), selecione **Validate by File Upload** e envie cada arquivo `.html`. Corrija avisos, se aparecerem, antes da entrega final.
- **Acessibilidade**: utilize Lighthouse/axe ou o inspetor do navegador para verificar contraste e navegação por teclado.
- **Desempenho**: execute testes Lighthouse (Mobile) para garantir LCP < 5s com as mídias fornecidas.

### Validações já executadas
- `index.html`, `projetos.html` e `cadastro.html` foram verificados via API do W3C (validator.w3.org/nu) retornando **0 erros/avisos** (atualizado após a Entrega II).

## Publicação
1. Crie um repositório público no GitHub e envie todos os arquivos mantendo a estrutura apresentada.
2. (Opcional) Ative o GitHub Pages apontando para a branch principal para ter um link público navegável.
3. Inclua o link do repositório e, se houver, do GitHub Pages na submissão da disciplina.

## Próximos Passos Suggeridos
1. Adicionar conteúdo real das ONGs (textos, fotos e métricas) e transformar campos do formulário em integração com backend/ferramentas no-code.
2. Implementar estados de foco/hover mais detalhados e microinterações acessíveis.
3. Automatizar validação com ferramentas como `html-validate` ou `npm run lint:html` e configurar pipeline CI.
4. Preparar variantes WebP/AVIF das imagens caso surjam ativos rasterizados.

## Créditos
Desenvolvido por Eraldo Barbosa dos Anjos Filho para a disciplina Desenvolvimento Front-End Para Web — Turma 001/2025.

## Licença
Projeto distribuído sob a [licença MIT](LICENSE). Fique à vontade para reutilizar, adaptar e evoluir conforme as necessidades das próximas entregas.
