(function () {
  const Templates = {
    home() {
      return `
        <section class="section section--surface">
          <div class="container">
            <div class="hero">
              <div class="hero__grid">
                <div class="hero__content">
                  <p class="badge">+3 milhões de pessoas engajadas</p>
                  <h1 class="hero__title">Transformando impacto social em presença digital</h1>
                  <p>A Rede Viva apoia organizações da sociedade civil a ampliarem alcance, captarem recursos e engajarem voluntários com uma plataforma acessível e profissional.</p>
                  <div class="form-actions" style="margin-top: var(--space-3);">
                    <a class="button" href="#projects" data-route="projects">Conhecer projetos</a>
                    <a class="button button--secondary" href="#cadastro" data-route="cadastro">Quero participar</a>
                  </div>
                </div>
                <div class="hero__media">
                  <img src="assets/images/hero-collage.svg" alt="Voluntários participando de ações comunitárias" width="500" height="360" >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section--surface" aria-labelledby="missao">
          <div class="container">
            <div class="surface-card">
              <div class="layout-grid">
                <div class="col-span-7">
                  <h2 id="missao" class="section-title">Missão, visão e valores</h2>
                  <p class="section-subtitle">Baseamos nosso sistema em colaboração, transparência e tecnologia acessível.</p>
                  <div class="grid-stack">
                    <article class="card">
                      <h3>Missão</h3>
                      <p>Oferecer infraestrutura digital completa para ONGs brasileiras fortalecerem transparência, governança e impacto.</p>
                    </article>
                    <article class="card">
                      <h3>Visão</h3>
                      <p>Ser referência nacional em plataformas acessíveis para o terceiro setor, conectando projetos, voluntários e doadores.</p>
                    </article>
                    <article class="card">
                      <h3>Valores</h3>
                      <p>Transparência, inclusão digital, colaboração em rede, responsabilidade socioambiental e inovação aberta.</p>
                    </article>
                  </div>
                </div>
                <div class="col-span-5">
                  <h3 class="section-subtitle">Impacto Mensurável</h3>
                  <ul class="metrics">
                    <li class="metric">
                      <strong>120+</strong>
                      <span>ONGs atendidas</span>
                    </li>
                    <li class="metric">
                      <strong>R$ 5 mi</strong>
                      <span>Arrecadação em campanhas</span>
                    </li>
                    <li class="metric">
                      <strong>8.500</strong>
                      <span>Voluntários conectados</span>
                    </li>
                    <li class="metric">
                      <strong>15</strong>
                      <span>Estados com projetos ativos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="design-system" aria-labelledby="design-system-title">
          <div class="container">
            <div class="surface-card">
              <h2 id="design-system-title" class="section-title">Design system Rede Viva</h2>
              <p class="section-subtitle">Tokens de cor, tipografia e espaçamento garantem consistência em todos os módulos.</p>
              <div class="layout-grid">
                <div class="col-span-6">
                  <h3>Paleta de cores</h3>
                  <div class="swatch-grid" role="list">
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-primary-500); color: #fff;">Primária 500<br>#1f6f78</span>
                    </div>
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-primary-300);">Primária 300<br>#5ba199</span>
                    </div>
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-primary-900); color: #fff;">Primária 900<br>#0f3d3e</span>
                    </div>
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-accent-500);">Acento 500<br>#f4a259</span>
                    </div>
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-accent-600); color: #fff;">Acento 600<br>#f95f62</span>
                    </div>
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-success-500);">Sucesso<br>#2db36c</span>
                    </div>
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-warning-500);">Alerta<br>#f5c518</span>
                    </div>
                    <div class="swatch" role="listitem">
                      <span style="background-color: var(--color-neutral-300);">Neutro 300<br>#d0dad8</span>
                    </div>
                  </div>
                </div>
                <div class="col-span-6">
                  <h3>Tipografia & Espaçamentos</h3>
                  <div class="typography-scale">
                    <p style="font-size: var(--font-size-3xl); font-weight: 600;">Display / var(--font-size-3xl)</p>
                    <p style="font-size: var(--font-size-2xl); font-weight: 600;">Título / var(--font-size-2xl)</p>
                    <p style="font-size: var(--font-size-xl); font-weight: 600;">Subtítulo / var(--font-size-xl)</p>
                    <p style="font-size: var(--font-size-lg);">Corpo grande / var(--font-size-lg)</p>
                    <p style="font-size: var(--font-size-md);">Corpo padrão / var(--font-size-md)</p>
                    <p>Escala modular: 8, 16, 24, 32, 48 e 64px aplicada a paddings, gaps e margens.</p>
                  </div>
                  <div class="form-actions" role="group" aria-label="Exemplos de botões" style="margin-top: var(--space-3);">
                    <button class="button" type="button">Primário</button>
                    <button class="button button--ghost" type="button">Secundário</button>
                    <button class="button" type="button" disabled>Desabilitado</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section--surface" aria-labelledby="transparencia">
          <div class="container">
            <div class="surface-card">
              <h2 id="transparencia" class="section-title">Transparência e governança</h2>
              <p class="section-subtitle">Publicamos relatórios trimestrais com dados de arrecadação, custos e indicadores de impacto.</p>
              <div class="layout-grid">
                <div class="col-span-7">
                  <table class="table" aria-label="Relatórios publicados">
                    <thead>
                      <tr>
                        <th>Período</th>
                        <th>Tipo de relatório</th>
                        <th>Indicadores-chave</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2024 Q4</td>
                        <td>Impacto Social</td>
                        <td>87% dos projetos atingiram metas</td>
                      </tr>
                      <tr>
                        <td>2024 Q3</td>
                        <td>Financeiro</td>
                        <td>88% dos recursos destinados aos projetos</td>
                      </tr>
                      <tr>
                        <td>2024 Q2</td>
                        <td>Governança</td>
                        <td>100% das auditorias concluídas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-span-5">
                  <div class="alert alert--info" role="alert">
                    <strong>Auditoria independente</strong>
                    <p>Relatório completo disponível para download em PDF acessível e HTML responsivo.</p>
                  </div>
                  <div class="alert alert--success" role="alert">
                    <strong>Compliance atualizado</strong>
                    <p>Protocolos LGPD e políticas de voluntariado revisados em janeiro/2025.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="feedback">
          <div class="container">
            <div class="surface-card">
              <h2 id="feedback" class="section-title">Feedback em tempo real</h2>
              <p class="section-subtitle">Componentes de alertas, toasts e modais mantêm administradores informados.</p>
              <div class="layout-grid">
                <div class="col-span-6">
                  <p>Use notificações instantâneas para confirmar envios de formulários ou novas inscrições.</p>
                  <div class="form-actions" style="margin-top: var(--space-2);">
                    <button class="button button--ghost" type="button" data-toast-trigger>Mostrar notificações</button>
                    <button class="button" type="button" data-modal-open="compliance">Ver aviso de compliance</button>
                  </div>
                </div>
                <div class="col-span-6">
                  <div class="card">
                    <h3>Badges e Tags</h3>
                    <p>Classifique projetos por temas e status.</p>
                    <div class="card__meta">
                      <span class="tag">Educação</span>
                      <span class="tag">Voluntariado</span>
                      <span class="tag">Captar R$ 50k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal id="modal-compliance">
          <div class="modal__content" data-modal-content tabindex="-1">
            <h3 id="modal-title">Aviso de compliance</h3>
            <p>Todos os dados coletados passam por revisão semanal e seguem as diretrizes da LGPD. Os voluntários podem solicitar a remoção de dados a qualquer momento.</p>
            <div class="form-actions" style="margin-top: var(--space-3);">
              <button class="button button--ghost" type="button" data-modal-close>Fechar</button>
              <a class="button" href="#cadastro" data-route="cadastro">Atualizar cadastro</a>
            </div>
          </div>
        </div>

        <div class="toast" role="status" aria-live="polite" data-toast>
          <p>Inscrição registrada com sucesso. Confira seu e-mail para os próximos passos.</p>
          <button class="button button--ghost" type="button" data-toast-dismiss aria-label="Fechar notificação">Fechar</button>
        </div>
      `;
    },

    projects() {
      return `
        <section class="section section--surface">
          <div class="container">
            <div class="hero">
              <div class="hero__grid">
                <div>
                  <p class="badge">Rede de projetos ativos</p>
                  <h1 class="hero__title">Projetos sociais que fortalecem territórios</h1>
                  <p>Explore iniciativas de educação, economia solidária, cultura e sustentabilidade. Participe como voluntário ou apoiador financeiro.</p>
                  <a class="button" href="#projects" data-route="projects">Quero doar agora</a>
                </div>
                <div class="hero__media">
                  <img src="assets/images/projects.svg" alt="Gráfico com indicadores de projetos" width="360" height="240" >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section--surface" aria-labelledby="filtros">
          <div class="container">
            <div class="surface-card">
              <h2 id="filtros" class="section-title">Encontre o projeto ideal</h2>
              <form class="projects-filter" aria-label="Filtros de busca">
                <label>
                  <span>Área temática</span>
                  <select>
                    <option>Todos</option>
                    <option>Educação</option>
                    <option>Saúde</option>
                    <option>Direitos Humanos</option>
                    <option>Meio ambiente</option>
                  </select>
                </label>
                <label>
                  <span>Formato</span>
                  <select>
                    <option>Híbrido</option>
                    <option>Remoto</option>
                    <option>Presencial</option>
                  </select>
                </label>
                <label>
                  <span>Região</span>
                  <select>
                    <option>Nacional</option>
                    <option>Sudeste</option>
                    <option>Nordeste</option>
                    <option>Centro-Oeste</option>
                    <option>Sul</option>
                    <option>Norte</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="lista-projetos">
          <div class="container">
            <h2 id="lista-projetos" class="section-title">Projetos sociais em destaque</h2>
            <div class="grid-stack">
              <article class="card">
                <div class="card__meta">
                  <span class="tag">Educação</span>
                  <span class="tag">Tecnologia</span>
                </div>
                <h3>Laboratório Cidadão</h3>
                <p>Programa intensivo de tecnologia para jovens periféricos com foco em empregabilidade.</p>
                <p><strong>Necessidades:</strong> mentores de programação, notebooks doados.</p>
                <a class="button" href="#cadastro" data-route="cadastro">Participar</a>
              </article>
              <article class="card">
                <div class="card__meta">
                  <span class="tag">Meio Ambiente</span>
                  <span class="tag">Economia Solidária</span>
                </div>
                <h3>Rede Agroecológica</h3>
                <p>Fortalece famílias agricultoras com capacitações em produção orgânica e venda direta.</p>
                <p><strong>Necessidades:</strong> apoio logístico, microcrédito, voluntários em comunicação.</p>
                <a class="button" href="#cadastro" data-route="cadastro">Participar</a>
              </article>
              <article class="card">
                <div class="card__meta">
                  <span class="tag">Direitos Humanos</span>
                  <span class="tag">Empreendedorismo</span>
                </div>
                <h3>Mulheres em Movimento</h3>
                <p>Rede de proteção e empreendedorismo para mulheres sobreviventes de violência.</p>
                <p><strong>Necessidades:</strong> atendimento jurídico, oficinas de finanças e kits de higiene.</p>
                <a class="button" href="#cadastro" data-route="cadastro">Participar</a>
              </article>
            </div>
          </div>
        </section>

        <section class="section section--surface" aria-labelledby="voluntariado">
          <div class="container">
            <div class="surface-card">
              <div class="layout-grid">
                <div class="col-span-6">
                  <h2 id="voluntariado" class="section-title">Portal do voluntariado</h2>
                  <p>Receba convites personalizados, acompanhe horas dedicadas, emita certificados digitais e compartilhe suas experiências.</p>
                  <ul>
                    <li>Processo transparente de inscrição e seleção</li>
                    <li>Trilhas de capacitação on-line</li>
                    <li>Gamificação para reconhecer engajamento</li>
                  </ul>
                  <a class="button" href="#cadastro" data-route="cadastro">Quero ser voluntário</a>
                </div>
                <div class="col-span-6">
                  <div class="hero__media">
                    <img src="assets/images/volunteers.svg" alt="Rede de voluntários conectados" width="360" height="240" >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="doacoes" aria-labelledby="capitacao">
          <div class="container">
            <div class="surface-card">
              <h2 id="capitacao" class="section-title">Campanhas de captação</h2>
              <p class="section-subtitle">Transparência total sobre metas, repasses e prestação de contas. As doações podem ser únicas, recorrentes ou via empresas parceiras.</p>
              <table class="table" aria-label="Campanhas de arrecadação">
                <thead>
                  <tr>
                    <th>Campanha</th>
                    <th>Meta</th>
                    <th>Progresso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bolsa Educação</td>
                    <td>R$ 350.000</td>
                    <td>72% alcançado</td>
                  </tr>
                  <tr>
                    <td>Fundo Emergencial Amazônia</td>
                    <td>R$ 500.000</td>
                    <td>54% alcançado</td>
                  </tr>
                  <tr>
                    <td>Programa Primeira Infância</td>
                    <td>R$ 220.000</td>
                    <td>96% alcançado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      `;
    },

    cadastro() {
      return `
        <section class="section section--surface">
          <div class="container">
            <div class="hero">
              <div class="hero__grid">
                <div>
                  <p class="badge">Cadastro unificado</p>
                  <h1 class="hero__title">Entre para nossa rede de impacto</h1>
                  <p>Preencha seus dados para receber oportunidades de voluntariado, acompanhar projetos e apoiar campanhas.</p>
                </div>
                <div class="hero__media">
                  <img src="assets/images/form.svg" alt="Pessoa preenchendo formulário digital" width="360" height="240" >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section--surface" aria-labelledby="formulario-cadastro">
          <div class="container">
            <div class="surface-card">
              <h2 id="formulario-cadastro" class="section-title">Formulário de cadastro</h2>
              <p class="section-subtitle" id="validacao">Todos os campos essenciais contam com validação visual imediata.</p>
              <div class="alert alert--info" role="alert">
                <strong>Dado seguro:</strong> aplicamos máscaras de CPF, telefone e CEP e destacamos campos inválidos automaticamente.
              </div>
              <form class="form-section" data-validate>
                <fieldset>
                  <legend>Informações pessoais</legend>
                  <div class="form-group">
                    <label for="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" placeholder="Seu nome" autocomplete="name" required >
                  </div>
                  <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="nome@exemplo.com" autocomplete="email" required >
                  </div>
                  <div class="form-group">
                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" inputmode="numeric" maxlength="14" data-mask="cpf" placeholder="000.000.000-00" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" >
                  </div>
                  <div class="form-group">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" inputmode="tel" maxlength="15" data-mask="phone" placeholder="(00) 00000-0000" required pattern="\(\d{2}\) \d{4,5}-\d{4}" >
                  </div>
                  <div class="form-group">
                    <label for="nascimento">Data de nascimento</label>
                    <input type="date" id="nascimento" name="nascimento" required >
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Endereço</legend>
                  <div class="form-group">
                    <label for="endereco">Endereço</label>
                    <input type="text" id="endereco" name="endereco" placeholder="Rua, número, complemento" autocomplete="address-line1" required >
                  </div>
                  <div class="form-group">
                    <label for="cep">CEP</label>
                    <input type="text" id="cep" name="cep" inputmode="numeric" maxlength="9" data-mask="cep" placeholder="00000-000" required pattern="\d{5}-\d{3}" >
                  </div>
                  <div class="form-group">
                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade" name="cidade" required >
                  </div>
                  <div class="form-group">
                    <label for="estado">Estado</label>
                    <select id="estado" name="estado" required>
                      <option value="">Selecione</option>
                      <option>AC</option>
                      <option>AL</option>
                      <option>AP</option>
                      <option>AM</option>
                      <option>BA</option>
                      <option>CE</option>
                      <option>DF</option>
                      <option>ES</option>
                      <option>GO</option>
                      <option>MA</option>
                      <option>MT</option>
                      <option>MS</option>
                      <option>MG</option>
                      <option>PA</option>
                      <option>PB</option>
                      <option>PR</option>
                      <option>PE</option>
                      <option>PI</option>
                      <option>RJ</option>
                      <option>RN</option>
                      <option>RS</option>
                      <option>RO</option>
                      <option>RR</option>
                      <option>SC</option>
                      <option>SP</option>
                      <option>SE</option>
                      <option>TO</option>
                    </select>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Interesses</legend>
                  <div class="form-group">
                    <label for="perfil">Perfil de participação</label>
                    <select id="perfil" name="perfil" required>
                      <option value="">Escolha uma opção</option>
                      <option>Voluntário</option>
                      <option>Doador</option>
                      <option>ONG Parceira</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="areas">Áreas de interesse</label>
                    <textarea id="areas" name="areas" rows="3" placeholder="Educação, Saúde, Direitos Humanos..." required></textarea>
                  </div>
                  <div class="form-group">
                    <label><input type="checkbox" name="newsletter" checked > Desejo receber novidades e oportunidades por e-mail</label>
                  </div>
                </fieldset>

                <div class="form-actions">
                  <button type="submit" class="button">Enviar cadastro</button>
                  <a class="button button--ghost" href="#projects" data-route="projects">Ver projetos ativos</a>
                </div>
              </form>
            </div>
          </div>
        </section>
      `;
    },
  };

  window.Templates = Templates;
})();
