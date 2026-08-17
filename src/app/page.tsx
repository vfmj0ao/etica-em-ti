import { DemoLab } from "@/components/DemoLab";

const codeRoles = [
  {
    number: "01",
    title: "Orienta decisões",
    text: "Transforma valores como honestidade e respeito em critérios para situações reais de trabalho.",
  },
  {
    number: "02",
    title: "Protege pessoas",
    text: "Reduz riscos para clientes, colegas, organizações e para a sociedade que depende da tecnologia.",
  },
  {
    number: "03",
    title: "Previne abusos",
    text: "Define limites claros contra fraude, assédio, discriminação, vazamentos e uso indevido de recursos.",
  },
  {
    number: "04",
    title: "Gera responsabilidade",
    text: "Permite avaliar condutas, comunicar irregularidades e responsabilizar decisões profissionais.",
  },
];

const violations = [
  {
    title: "Vazamento de dados e sigilo",
    text: "Divulgação não autorizada de dados pessoais, senhas, documentos internos ou segredos industriais.",
    tags: "LGPD • Confidencialidade",
  },
  {
    title: "Assédio e discriminação",
    text: "Humilhação, isolamento, intimidação, conduta sexual indesejada ou tratamento desigual por características pessoais.",
    tags: "Dignidade • Equidade",
  },
  {
    title: "Fraude e corrupção",
    text: "Falsificação, manipulação de registros, suborno, vantagem indevida ou conflito de interesses oculto.",
    tags: "Integridade • Transparência",
  },
  {
    title: "Uso inadequado de recursos",
    text: "Software não autorizado, pirataria, conteúdo impróprio ou utilização abusiva de equipamentos e redes.",
    tags: "Patrimônio • Legalidade",
  },
  {
    title: "Violações de segurança",
    text: "Invasão, quebra de controles, compartilhamento indevido de acesso ou ocultação de incidentes.",
    tags: "Proteção • Resposta",
  },
  {
    title: "Conduta antiética profissional",
    text: "Má-fé, preço abusivo, diagnóstico falso, troca desnecessária de peças ou criação de programas ilegais.",
    tags: "Honestidade • Boa-fé",
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
              Código de conduta profissional em TI
            </div>
            <h1>
              Saber fazer.
              <br />
              Saber <em>como agir.</em>
            </h1>
            <p>
              Um código de conduta transforma valores em decisões: protege
              pessoas e dados, orienta profissionais e define limites para o uso
              responsável da tecnologia.
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
              <span>RESPONSABILIDADE</span>
            </div>
            <div className="orbit orbit-two">
              <span>INTEGRIDADE</span>
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
          <p>Conduta profissional é responsabilidade diária.</p>
          <div aria-hidden="true">
            <span>INTEGRIDADE</span>
            <i>✦</i>
            <span>RESPONSABILIDADE</span>
            <i>✦</i>
            <span>RESPEITO</span>
          </div>
        </section>

        <section className="section principles-section" id="codigo">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 — O código de conduta</span>
              <h2>
                Mais que regras:
                <br />
                um guia para agir.
              </h2>
            </div>
            <p>
              O código de conduta reúne deveres, limites e padrões esperados de
              quem trabalha com tecnologia. Ele orienta decisões quando a
              resposta técnica, sozinha, não é suficiente.
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
            <span className="section-kicker">02 — Principais violações</span>
            <h2>
              Quando a conduta
              <br />é quebrada.
            </h2>
            <p>
              Uma violação pode prejudicar pessoas, comprometer sistemas, gerar
              consequências legais e destruir a confiança na profissão.
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
              <span className="section-kicker">
                03 — Código de conduta na prática
              </span>
              <h2>
                Você decide.
                <br />A consequência responde.
              </h2>
            </div>
            <p>
              Cada caso tem quatro saídas. Algumas parecem razoáveis e ainda
              assim violam o código. A simulação mostra o efeito da escolha.
            </p>
          </div>
          <DemoLab />
        </section>

        <section className="quote-section">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            Competência técnica mostra o que <em>podemos</em> fazer. O código de
            conduta orienta o que <em>devemos</em> fazer.
          </blockquote>
          <p>Antes de cada decisão profissional, pergunte:</p>
          <strong>É legal, transparente, seguro e respeitoso?</strong>
        </section>

        <section className="sources-section" id="fontes">
          <div>
            <span className="section-kicker">Para continuar</span>
            <h2>Fontes e referências</h2>
          </div>
          <div className="source-links">
            <a
              href="https://www.acm.org/code-of-ethics"
              target="_blank"
              rel="noreferrer"
            >
              <span>ACM</span>
              Código de Ética e Conduta Profissional
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href="https://www.ieee.org/about/corporate/governance/p7-8.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>IEEE</span>
              Código de Ética
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href="https://www.gov.br/anpd/pt-br/assuntos/legislacao/lgpd"
              target="_blank"
              rel="noreferrer"
            >
              <span>LGPD</span>
              Lei Geral de Proteção de Dados
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
        <p>Projeto educativo • Nenhum dado é coletado</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}
