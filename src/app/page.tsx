import { DemoLab } from "@/components/DemoLab";
import type { DemoId } from "@/lib/conduct-cases";

const learningObjectives = [
  "Identificar os sete princípios gerais e as quatro seções do código da SBC.",
  "Reconhecer violações explicitamente nomeadas no texto oficial.",
  "Decidir dilemas práticos quando princípios entram em conflito.",
];

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

const generalPrinciples = [
  {
    id: "1.1",
    title: "Bem público",
    text: "Considerar o bem público como preocupação primordial. Em conflito entre princípios, priorizar quem é menos favorecido.",
  },
  {
    id: "1.2",
    title: "Evitar dano",
    text: "Minimizar danos negativos. Se o dano não for intencional, desfazê-lo ou mitigá-lo e relatar riscos relevantes.",
  },
  {
    id: "1.3",
    title: "Honestidade",
    text: "Ser transparente sobre recursos, limitações e problemas. Declarações falsas, suborno e conflito de interesse são violação.",
  },
  {
    id: "1.4",
    title: "Justiça",
    text: "Não discriminar por sexo, raça, origem ou outros fatores. Assédio, bullying e falha de inclusão também violam o código.",
  },
  {
    id: "1.5",
    title: "Autoria",
    text: "Dar crédito ao trabalho alheio e respeitar licenças, patentes e contratos. Não reivindicar como próprio o que é compartilhado.",
  },
  {
    id: "1.6",
    title: "Privacidade",
    text: "Coletar só o necessário, com finalidade legítima. Não reidentificar dados anônimos nem reutilizar sem consentimento.",
  },
  {
    id: "1.7",
    title: "Confidencialidade",
    text: "Preservar sigilo, salvo violação da lei ou do código — e, nesses casos, revelar só à autoridade competente.",
  },
];

const checklistItems = [
  {
    question: "O bem público está em primeiro lugar?",
    detail:
      "Se princípios colidem, a SBC manda priorizar quem é menos favorecido e o impacto social da decisão.",
  },
  {
    question: "Estou sendo transparente sobre limitações e riscos?",
    detail:
      "Omitir falhas de um sistema, métricas infladas ou conflito de interesse viola o princípio da honestidade (1.3).",
  },
  {
    question: "Há dano evitável ou não mitigado?",
    detail:
      "Boa intenção não basta: dano não intencional deve ser corrigido, mitigado e comunicado (1.2 e 2.9).",
  },
  {
    question: "Respeito autoria, privacidade e confidencialidade?",
    detail:
      "Licenças, minimização de dados e destino correto de informações sigilosas não são detalhes técnicos — são deveres éticos.",
  },
  {
    question: "Se há violação, vou agir pelos canais corretos?",
    detail:
      "Reconhecer a violação e reportar à Comissão de Ética da SBC, quando couber, faz parte da conformidade (seção 4).",
  },
];

const violations: {
  title: string;
  text: string;
  tags: string;
  caseId: DemoId;
}[] = [
  {
    title: "Dano omitido ou não mitigado",
    text: "Ações bem-intencionadas também causam dano. A SBC exige mitigar, relatar riscos relevantes e não silenciar por conveniência.",
    tags: "SBC 1.2 • SBC 2.9",
    caseId: "seguranca",
  },
  {
    title: "Desonestidade e conflito de interesse",
    text: "Declaração falsa, dado fabricado, suborno e omissão de limitações de um sistema violam o princípio 1.3.",
    tags: "SBC 1.3 • Transparência",
    caseId: "fraude",
  },
  {
    title: "Discriminação e assédio",
    text: "Preconceito por origem, sexo, raça e outros fatores, além de assédio e falha de inclusão no projeto, são violação explícita.",
    tags: "SBC 1.4 • Justiça",
    caseId: "assedio",
  },
  {
    title: "Desrespeito à autoria e às licenças",
    text: "Não creditar, ignorar GPL/patentes ou tratar vazamento como “já estava na internet” fere o trabalho alheio.",
    tags: "SBC 1.5 • SBC 2.8",
    caseId: "recursos",
  },
  {
    title: "Privacidade e reidentificação",
    text: "Coletar além do mínimo, reutilizar dado sem consentimento ou mesclar bases “anônimas” que voltam a identificar pessoas.",
    tags: "SBC 1.6 • Minimização",
    caseId: "sigilo",
  },
  {
    title: "Sigilo quebrado no destino errado",
    text: "Confidencialidade cede só ante violação da lei ou do código, e mesmo então a revelação vai à autoridade competente — não à barganha nem ao vazamento amplo.",
    tags: "SBC 1.7 • SBC 4.2",
    caseId: "profissional",
  },
];

const glossaryTerms = [
  {
    term: "Bem público",
    definition:
      "Impacto da computação sobre a sociedade como um todo. A SBC trata como a consideração primordial em qualquer decisão ética.",
  },
  {
    term: "Reidentificação",
    definition:
      "Recuperar a identidade de alguém a partir de dados aparentemente anônimos — por exemplo, cruzando CEP, data de nascimento e data de consulta.",
  },
  {
    term: "Conflito de interesse",
    definition:
      "Situação em que interesse pessoal ou comercial pode distorcer um julgamento profissional. Deve ser declarado, não ocultado.",
  },
  {
    term: "Minimização de dados",
    definition:
      "Coletar e usar apenas o estritamente necessário para a finalidade declarada — princípio central do 1.6 e alinhado à LGPD.",
  },
  {
    term: "Zona cinzenta",
    definition:
      "Escolha com boa intenção que ainda descumpre parte do código. No laboratório, aparece como alternativa parcialmente aceitável, mas arriscada.",
  },
  {
    term: "Comissão de Ética da SBC",
    definition:
      "Instância para reporte de violações do código por associados. Parte da seção 4 — Conformidade com o código.",
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
          <a href="#checklist">Checklist</a>
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
            <ul className="hero-objectives" aria-label="Objetivos de aprendizagem">
              {learningObjectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
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

          <div className="general-principles-block">
            <div className="general-principles-heading">
              <span className="section-kicker">Seção 1 — Os sete princípios gerais</span>
              <h3>Cada artigo orienta uma dimensão da conduta.</h3>
              <p>
                Os casos práticos deste site citam estes princípios. Eles não
                funcionam isolados: em dilemas reais, mais de um entra em jogo ao
                mesmo tempo.
              </p>
            </div>
            <div className="general-principles-grid">
              {generalPrinciples.map((principle) => (
                <article key={principle.id} className="general-principle-card">
                  <span>{principle.id}</span>
                  <h4>{principle.title}</h4>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section checklist-section" id="checklist">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Antes de decidir</span>
              <h2>
                Cinco perguntas
                <br />
                para usar na prática.
              </h2>
            </div>
            <p>
              O código da SBC não entrega uma resposta automática. Este checklist
              resume o que vale revisar quando princípios entram em conflito ou
              quando a pressão do prazo pesa.
            </p>
          </div>
          <ol className="checklist-grid">
            {checklistItems.map((item) => (
              <li key={item.question}>
                <strong>{item.question}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
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
              violação. Cada item abaixo leva a um caso no laboratório.
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
                <a
                  className="violation-case-link"
                  href={`#caso-${violation.caseId}`}
                >
                  Ver caso <span aria-hidden="true">→</span>
                </a>
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

        <section className="section glossary-section" id="glossario">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Termos-chave</span>
              <h2>
                Glossário
                <br />
                para consulta rápida.
              </h2>
            </div>
            <p>
              Conceitos que aparecem no código, nos casos e na LGPD. Use como
              apoio durante a leitura ou a apresentação.
            </p>
          </div>
          <dl className="glossary-grid">
            {glossaryTerms.map((entry) => (
              <div key={entry.term}>
                <dt>{entry.term}</dt>
                <dd>{entry.definition}</dd>
              </div>
            ))}
          </dl>
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
