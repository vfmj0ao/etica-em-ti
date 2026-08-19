import { DemoLab } from "@/components/DemoLab";

const codeRoles = [
  {
    number: "01",
    title: "Princípios gerais",
    text: "Bem público, evitar danos, honestidade, justiça, autoria, privacidade e confidencialidade — a base do código da SBC.",
  },
  {
    number: "02",
    title: "Responsabilidade",
    text: "Qualidade, competência, respeito às regras, avaliação de riscos, acesso autorizado e sistemas seguros.",
  },
  {
    number: "03",
    title: "Liderança",
    text: "Quem influencia o trabalho alheio deve colocar pessoas no centro e não degradar a dignidade no ambiente.",
  },
  {
    number: "04",
    title: "Conformidade",
    text: "Reconhecer violação, agir e, quando couber, reportar à Comissão de Ética da SBC. O código não é um algoritmo.",
  },
];

const violations = [
  {
    title: "Dano omitido ou não mitigado",
    text: "Ações bem-intencionadas também causam dano. A SBC exige mitigar, relatar riscos relevantes e não silenciar por conveniência.",
    tags: "SBC 1.2 • SBC 2.9",
  },
  {
    title: "Desonestidade e conflito de interesse",
    text: "Declaração falsa, dado fabricado, suborno e omissão de limitações de um sistema violam o princípio 1.3.",
    tags: "SBC 1.3 • Transparência",
  },
  {
    title: "Discriminação e assédio",
    text: "Preconceito por origem, sexo, raça e outros fatores, além de assédio e falha de inclusão no projeto, são violação explícita.",
    tags: "SBC 1.4 • Justiça",
  },
  {
    title: "Desrespeito à autoria e às licenças",
    text: "Não creditar, ignorar GPL/patentes ou tratar vazamento como “já estava na internet” fere o trabalho alheio.",
    tags: "SBC 1.5 • SBC 2.8",
  },
  {
    title: "Privacidade e reidentificação",
    text: "Coletar além do mínimo, reutilizar dado sem consentimento ou mesclar bases “anônimas” que voltam a identificar pessoas.",
    tags: "SBC 1.6 • Minimização",
  },
  {
    title: "Sigilo quebrado no destino errado",
    text: "Confidencialidade cede só ante violação da lei ou do código, e mesmo então a revelação vai à autoridade competente — não à barganha nem ao vazamento amplo.",
    tags: "SBC 1.7 • SBC 4.2",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ética em TI — início">
          <span className="brand-mark">E/</span>
          <span>Ética em TI</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#codigo">O código</a>
          <a href="#violacoes">Violações</a>
          <a href="#laboratorio">Casos práticos</a>
        </nav>
        <a className="header-cta" href="#laboratorio">
          Explorar casos <span aria-hidden="true">↘</span>
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow" />
          <div className="hero-copy">
            <div className="tag">
              <span />
              Código de Ética e Conduta Profissional da SBC
            </div>
            <h1>
              Saber fazer.
              <br />
              Saber <em>como agir.</em>
            </h1>
            <p>
              Este site segue a Resolução 002/2024 da Sociedade Brasileira de
              Computação: o bem público vem primeiro, e o código é base para
              decidir — não um algoritmo que entrega a resposta pronta.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#codigo">
                Entender o código <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#laboratorio">
                Analisar casos práticos
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one">
              <span>BEM PÚBLICO</span>
            </div>
            <div className="orbit orbit-two">
              <span>SBC 002/2024</span>
            </div>
            <div className="core">
              <span>§</span>
              <strong>CONDUTA</strong>
              <small>NA PRÁTICA</small>
            </div>
            <div className="visual-note note-one">regra → decisão</div>
            <div className="visual-note note-two">ação → consequência</div>
          </div>

          <div className="hero-index">
            <span>01</span>
            <i />
            <span>06</span>
          </div>
        </section>

        <section className="intro-strip">
          <p>O bem público é sempre a primeira consideração.</p>
          <div aria-hidden="true">
            <span>SBC</span>
            <i>✦</i>
            <span>IFIP</span>
            <i>✦</i>
            <span>ACM</span>
          </div>
        </section>

        <section className="section principles-section" id="codigo">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 — Código da SBC</span>
              <h2>
                Quatro seções.
                <br />
                Um mesmo eixo: o bem público.
              </h2>
            </div>
            <p>
              A SBC traduz o código da IFIP/ACM para orientar profissionais,
              estudantes e quem usa computação com impacto social. Princípios
              diferentes podem pesar ao mesmo tempo; a consideração primordial
              continua sendo o público.
            </p>
          </div>

          <div className="principles-grid">
            {codeRoles.map((role) => (
              <article key={role.number} className="principle-card">
                <span>{role.number}</span>
                <div className="card-symbol" aria-hidden="true">
                  {role.number === "01" && "↳"}
                  {role.number === "02" && "◇"}
                  {role.number === "03" && "⊘"}
                  {role.number === "04" && "◎"}
                </div>
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section conduct-section" id="violacoes">
          <div className="conduct-title">
            <span className="section-kicker">
              02 — Violações no texto da SBC
            </span>
            <h2>
              O código nomeia
              <br />o que não se faz.
            </h2>
            <p>
              Declaração falsa, discriminação, reidentificação, suborno e
              omissão de risco não são “jeitinho”: estão descritos como
              violação.
            </p>
          </div>
          <div className="conduct-list">
            {violations.map((violation, index) => (
              <article key={violation.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{violation.title}</h3>
                  <p>{violation.text}</p>
                  <small>{violation.tags}</small>
                </div>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="section lab-section" id="laboratorio">
          <div className="section-heading light">
            <div>
              <span className="section-kicker">03 — Casos segundo a SBC</span>
              <h2>
                Princípios em conflito.
                <br />A ordem das letras muda.
              </h2>
            </div>
            <p>
              Cada dilema cita artigos do código. As quatro alternativas
              embaralham a cada vez: a conduta alinhada à SBC não fica sempre na
              letra A.
            </p>
          </div>
          <DemoLab />
        </section>

        <section className="quote-section">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            O bem público é sempre a <em>primeira</em> consideração.
          </blockquote>
          <p>Código de Ética e Conduta Profissional da SBC</p>
          <strong>Resolução nº 002, de 21 de março de 2024</strong>
        </section>

        <section className="sources-section" id="fontes">
          <div>
            <span className="section-kicker">Para continuar</span>
            <h2>Fontes e referências</h2>
          </div>
          <div className="source-links">
            <a
              href="https://www.sbc.org.br/etica-sbc/"
              target="_blank"
              rel="noreferrer"
            >
              <span>SBC</span>
              Ética SBC — códigos e Comissão de Ética
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href="https://www.sbc.org.br/wp-content/uploads/2026/02/Codigo-de-Etica-e-Conduta-Profissional-da-SBC_Resolucao_002-2024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>002/2024</span>
              Código de Ética e Conduta Profissional da SBC
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href="https://www.acm.org/code-of-ethics"
              target="_blank"
              rel="noreferrer"
            >
              <span>ACM</span>
              Código original adaptado pela IFIP e traduzido pela SBC
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#inicio">
          <span className="brand-mark">E/</span>
          <span>Ética em TI</span>
        </a>
        <p>Projeto educativo baseado na SBC • Nenhum dado é coletado</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}
