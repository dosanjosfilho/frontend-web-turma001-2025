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
├── docs/
│   └── release-notes/  # Histórico das releases (ex.: v3.0.0)
└── assets/
    ├── css/
    │   ├── base.css        # Tokens (cores, tipografia, espaçamentos) e resets
    │   ├── layout.css      # Leiautes gerais, grid de 12 colunas e containers
    │   ├── components.css  # Botões, cards, tabelas, formulários, alerts, etc.
    │   └── utilities.css   # Breakpoints, ajustes responsivos e prefers-reduced-motion
    ├── js/
    │   ├── app.js          # Roteador SPA e renderização de templates
    │   ├── templates.js    # Templates JS das rotas (home, projetos, cadastro)
    │   ├── masks.js        # Máscaras nativas para CPF, telefone e CEP
    │   ├── forms.js        # Validação, avisos e salvamento local dos formulários
    │   └── ui.js           # Menu responsivo, dropdowns, modal e toasts
    └── images/             # Ilustrações SVG otimizadas usadas nas três páginas
├── scripts/build.js    # Pipeline de minificação para gerar artefatos em dist/
├── package.json        # Scripts npm (build) e metadados do projeto
└── .gitignore          # Ignora dist/ e node_modules/ no versionamento
```

## Destaques Técnicos
- **HTML5 semântico**: uso de `header`, `nav`, `main`, `section`, `article`, `footer`, hierarquia de títulos lógica e tabelas para relatórios/campanhas.
- **Formulário complexo** (`cadastro.html`): fieldsets lógicos, inputs HTML5 com validações (`required`, `pattern`, `type`, `autocomplete`) e máscaras acessíveis aplicadas via `data-mask`.
- **CSS3 responsivo**: abordagem mobile-first, grid adaptável (`repeat(auto-fit)`), tokens de cor/tipografia, componentes reutilizáveis (cards, badges, tabelas, botões) e suporte a `prefers-reduced-motion`.
- **Acessibilidade**: rótulos associados, `aria-label`/`aria-labelledby`, contraste adequado, foco em navegação por teclado e semântica coerente.
- **SEO/Metadados**: meta descrição, keywords, Open Graph, tema e canonical específicos por página.
- **Assets otimizados**: SVGs leves com descrições (`role="img"` + `aria-label`).
- **SPA e templates**: roteador hash-based (`app.js`) injeta templates JS para cada rota, mantendo estado consistente em todas as páginas HTML.
- **Validação e armazenamento local**: `forms.js` oferece verificação de consistência com mensagens visuais e persistência automática dos campos no `localStorage`, garantindo feedback claro ao usuário.

## Entrega II — Estilização e Leiautes
- **Design System**: 8+ cores, escala tipográfica em 5 níveis, espaçamentos modulares (8 a 64px), componentes documentados com exemplos de estados (primário, secundário, desabilitado).
- **CSS Modular**: separação clara entre tokens (`base`), leiautes (grid de 12 colunas + containers), componentes reutilizáveis e utilitários responsivos (5 breakpoints: 480, 640, 768, 1024 e 1280px).
- **Leiautes avançados**: hero e seções construídas com CSS Grid/Flexbox, `layout-grid` customizado com utilidades `col-span-*`, cards responsivos e tabelas adaptáveis.
- **Navegação interativa**: menu principal com dropdown (submenu) e versão mobile hambúrguer, incluindo bloqueio de scroll e sincronização automática em mudanças de breakpoint.
- **Componentes de UI**: badges/tags para categorização, alertas informativos, toast acionado por botão, modal acessível, formulários com feedback visual (`:invalid`) e filtros responsivos.

## Entrega III – Interatividade e Funcionalidades
- **SPA básica**: `app.js` controla rotas via hash e injeta templates JS, permitindo que `index.html`, `projetos.html` e `cadastro.html` carreguem a mesma aplicação com rotas específicas.
- **Sistema de templates**: `templates.js` armazena cada página como função JS reutilizável, facilitando manutenção do design e inclusão de novos módulos.
- **Manipulação do DOM e eventos**: rendering dinâmico, toasts, modais e menus são recriados a cada navegação, com `ui.js` tratando eventos via delegação.
- **Validação consistente**: `forms.js` verifica CPF, telefone, CEP, estados e textos mínimos, exibe mensagens inline e destaca grupos com erro.
- **Armazenamento local**: dados do formulário são salvos automaticamente no `localStorage` e rehidratados quando o usuário retorna, garantindo continuidade no preenchimento.

## Entrega IV – Versionamento, Acessibilidade e Deploy
- **GitFlow documentado**: fluxo `main` + `develop` + branches de feature/hotfix descrito neste README, além de notas de release em `docs/release-notes/v3.0.0.md` e tags semânticas (`v1.x`, `v2.x`, `v3.x`).
- **Acessibilidade WCAG 2.1**: navegação por teclado testada, roles ARIA em modais/toasts/tabelas, contraste mínimo garantido via tokens e duas variações de cor (modo escuro e alto contraste), além de estado `aria-pressed` nos seletores de tema.
- **Suporte a leitores de tela**: feedbacks (`aria-live`), `noscript` para SPA e atributos `aria-modal`, `role="status"`, `aria-current` atualizados dinamicamente.
- **Otimização para produção**: script `npm run build` minifica HTML/CSS/JS, copia SVGs otimizados e gera a pasta `dist/` pronta para o deploy no GitHub Pages.
- **Documentação profissional**: README consolidado com instruções de build/deploy, seção de acessibilidade, fluxo Git/GitHub e referência às notas de versão.
- **Release notes**: histórico do que entrou em cada release registrado em [`docs/release-notes/`](docs/release-notes/v3.0.0.md).

### Fluxo de Versionamento e Releases
1. `main` guarda releases estabilizadas; `develop` concentra o trabalho em andamento.
2. Cada módulo (ex.: “feature/spa-router”, “feature/a11y-dark-mode”) nasce de `develop` e volta via Pull Request documentado.
3. Hotfixes emergenciais partem de `main` e retornam para `main` + `develop`.
4. Releases seguem versionamento semântico (`v3.0.0` = entrega de interatividade + deploy) com changelog em `docs/release-notes/`.
- Issues/milestones documentam cada entrega no GitHub: abra uma issue por funcionalidade, vincule a uma milestone (ex.: “Entrega IV”) e conclua via Pull Request associado.
- Pull Requests: utilize mensagens semânticas (ex.: `feat: adicionar modo escuro`) descrevendo o contexto, screenshots e checklist de testes antes do merge.

> Referência: tags `v1.0.0` (estrutura HTML), `v2.0.0` (estilização/layout) e `v3.0.0` (SPA/acessibilidade/deploy). A próxima tag pode ser criada com `git tag -a v3.0.0 -m "Entrega IV"` seguida de `git push origin v3.0.0`.

### Acessibilidade e Modos de Cor
- Botões “Modo escuro” e “Alto contraste” estão presentes no cabeçalho, usam `aria-pressed` e armazenam preferência no `localStorage`.
- Tokens CSS são redefinidos para `data-theme="dark"` e `data-theme="contrast"`, garantindo contraste ≥4.5:1, especialmente em formulários, botões e texto primário.
- Navegação por teclado: todos os controles são `<button>` ou `<a>` com `:focus-visible`, dropdowns podem ser abertos via teclado e o hambúrguer bloqueia o scroll ao estar aberto.
- Modais e toasts têm `role` + `aria-live`, e o formulário exibe mensagens inline associadas ao campo (estrutura semântica + `aria-live` global).

### Build & Deploy
1. Instale dependências (nenhuma além do Node.js padrão).
2. Execute `npm run build` para gerar `dist/` com HTML/CSS/JS minificados e imagens otimizadas.
3. Publique `dist/` no GitHub Pages ou em qualquer CDN estática (ex.: `gh-pages` apontando para `dist`).
4. Deploy contínuo: abra um PR de `develop` → `main` após passar por revisão, gere a release/tag e publique o conteúdo de `dist`.

> As imagens permanecem em SVG (vetoriais), portanto já chegam comprimidas. O script de build apenas copia esses arquivos, mantendo-os prontos para CDNs.
>
> **Importante:** mantenha o repositório configurado como **público** no GitHub para que a banca consiga validar a entrega.

## Como Executar
1. Clone ou baixe o repositório.
2. Para desenvolvimento rápido, abra `index.html` (ou qualquer página) diretamente no navegador.
3. Para gerar a versão otimizada de produção, execute `npm run build` (Node 18+) e sirva os arquivos da pasta `dist/`.

## Validação Recomendada
- **HTML (W3C)**: acesse [https://validator.w3.org/](https://validator.w3.org/), selecione **Validate by File Upload** e envie cada arquivo `.html`. Corrija avisos, se aparecerem, antes da entrega final.
- **Acessibilidade**: utilize Lighthouse/axe ou o inspetor do navegador para verificar contraste e navegação por teclado.
- **Desempenho**: execute testes Lighthouse (Mobile) para garantir LCP < 5s com as mídias fornecidas.

### Validações já executadas
- `index.html`, `projetos.html` e `cadastro.html` foram verificados via API do W3C (validator.w3.org/nu) retornando **0 erros/avisos** (atualizado após a Entrega IV).

## Publicação
1. Crie um repositório público no GitHub e envie todos os arquivos mantendo a estrutura apresentada.
2. (Opcional) Ative o GitHub Pages apontando para a branch principal e publique o conteúdo de `dist/` (gerado via `npm run build`) para disponibilizar o link navegável.
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
