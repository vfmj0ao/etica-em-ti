import type { DemoId } from "@/lib/conduct-cases";

type CaseVisualProps = {
  demoId: DemoId;
  optionId: string | null;
};

function StatusPill({
  tone,
  children,
}: {
  tone: "idle" | "ok" | "warn" | "bad";
  children: string;
}) {
  return <em className={`scene-pill ${tone}`}>{children}</em>;
}

function SigiloVisual({ optionId }: { optionId: string | null }) {
  const merged = optionId === "approve" || optionId === "internal";
  const marketing = optionId === "marketing";
  const blocked = optionId === "refuse";

  return (
    <div className="scene-stack">
      <div className="fake-mail">
        <div className="fake-mail-row">
          <span>De</span>
          <strong>diretoria@saude.local</strong>
        </div>
        <div className="fake-mail-row">
          <span>Para</span>
          <strong>dados@saude.local</strong>
        </div>
        <p>
          {optionId === "refuse"
            ? "Cruzamento suspenso até avaliação de reidentificação e consentimento."
            : "Juntem a base anonimizada com o cadastro do programa social. Marketing também precisa."}
        </p>
      </div>
      <div className={`fake-sheet ${blocked ? "blocked" : ""}`}>
        <div className="fake-sheet-head">
          <span>
            {merged || marketing
              ? "consulta ⋈ cadastro_social"
              : "consultas_anon.csv"}
          </span>
          <StatusPill
            tone={
              blocked
                ? "ok"
                : optionId === "approve"
                  ? "bad"
                  : optionId
                    ? "warn"
                    : "idle"
            }
          >
            {blocked
              ? "fusão recusada"
              : optionId === "approve"
                ? "reidentificação provável"
                : optionId
                  ? "quase-identificadores"
                  : "anonimato aparente"}
          </StatusPill>
        </div>
        <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>Nasc.</th>
              <th>Consulta</th>
              <th>{merged || marketing ? "Nome" : "ID"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>69020-110</td>
              <td>14/03/1988</td>
              <td>02/04</td>
              <td>{merged || marketing ? "R. Nascimento" : "A-441"}</td>
            </tr>
            <tr>
              <td>76801-058</td>
              <td>09/11/1975</td>
              <td>02/04</td>
              <td>{merged || marketing ? "L. Pereira" : "A-902"}</td>
            </tr>
          </tbody>
        </table>
        {blocked && (
          <div className="scene-overlay ok">SBC 1.6 — propósito e mínimo</div>
        )}
        {marketing && (
          <div className="scene-overlay warn">
            Uso secundário sem consentimento
          </div>
        )}
      </div>
    </div>
  );
}

function AssedioVisual({ optionId }: { optionId: string | null }) {
  return (
    <div className="scene-stack">
      <div className="fake-meet">
        <div className="fake-meet-bar">
          <span>triagem • modelo v3</span>
          <StatusPill
            tone={
              optionId === "document"
                ? "ok"
                : optionId === "silence"
                  ? "bad"
                  : optionId
                    ? "warn"
                    : "idle"
            }
          >
            {optionId === "document"
              ? "uso decisório suspenso"
              : optionId === "silence"
                ? "viés em produção"
                : optionId === "threshold"
                  ? "ajuste opaco"
                  : "disparidade detectada"}
          </StatusPill>
        </div>
        <div className="meet-grid">
          <div className="meet-tile lead">PM</div>
          <div className="meet-tile">VC</div>
          <div className="meet-tile">RH</div>
          <div
            className={`meet-tile victim ${optionId === "silence" ? "isolated" : ""}`}
          >
            AN
          </div>
        </div>
        <div className="meet-chat">
          <p>
            <strong>Modelo</strong> Norte/Nordeste −18 pts • mulheres −11 pts
          </p>
          {optionId === "silence" && (
            <p className="bad-line">
              <strong>Você</strong> Arquivado até a captação.
            </p>
          )}
          {optionId === "threshold" && (
            <p className="warn-line">
              <strong>Você</strong> Sobe o corte em 4 pontos e segue.
            </p>
          )}
          {optionId === "victim" && (
            <p className="warn-line">
              <strong>Você</strong> Ana, se quiser denunciar, o material é seu.
            </p>
          )}
          {optionId === "document" && (
            <p className="ok-line">
              <strong>Você</strong> Congelo a triagem automática e registro o
              episódio no canal formal.
            </p>
          )}
          {!optionId && (
            <p>
              <strong>Líder</strong> Esse sotaque não fecha com investidor.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FraudeVisual({ optionId }: { optionId: string | null }) {
  const inflated = optionId === "lie" || optionId === "verbal" || !optionId;

  return (
    <div className="scene-stack">
      <div className="bid-grid">
        <article className={optionId === "disclose" ? "winner" : ""}>
          <span>teste interno</span>
          <strong>71%</strong>
          <small>falsos positivos em bairros pobres</small>
        </article>
        <article
          className={inflated && optionId !== "disclose" ? "winner dirty" : ""}
        >
          <span>slide da demo</span>
          <strong>{optionId === "disclose" ? "71%" : "98%"}</strong>
          <small>
            {optionId === "disclose"
              ? "métrica corrigida"
              : "afirmação ao secretário"}
          </small>
        </article>
      </div>
      <div className="gift-box">
        <div>
          <strong>ingressos do congresso</strong>
          <p>
            {optionId === "disclose"
              ? "Benefício recusado e conflito registrado."
              : optionId === "delayGift"
                ? "Aceitos depois da assinatura."
                : optionId === "lie"
                  ? "Aceitos em silêncio."
                  : optionId === "verbal"
                    ? "Oferta em aberto. Slide inflado permanece."
                    : "“Se o contrato sair, os convites saem.”"}
          </p>
        </div>
        <StatusPill
          tone={
            optionId === "disclose"
              ? "ok"
              : optionId === "lie"
                ? "bad"
                : optionId
                  ? "warn"
                  : "idle"
          }
        >
          {optionId === "disclose"
            ? "SBC 1.3"
            : optionId === "lie"
              ? "declaração falsa"
              : "conflito possível"}
        </StatusPill>
      </div>
    </div>
  );
}

function RecursosVisual({ optionId }: { optionId: string | null }) {
  return (
    <div className="scene-stack">
      <div className="fake-desktop">
        <div className="desktop-bar">
          <span>modulo_compressao</span>
          <StatusPill
            tone={
              optionId === "rewrite"
                ? "ok"
                : optionId === "copy" || optionId === "crack"
                  ? "bad"
                  : optionId
                    ? "warn"
                    : "idle"
            }
          >
            {optionId === "rewrite"
              ? "licença limpa"
              : optionId === "copy"
                ? "GPL violada"
                : optionId === "crack"
                  ? "software ilegal"
                  : "origem duvidosa"}
          </StatusPill>
        </div>
        <div className="installer">
          <p>
            {optionId === "crack"
              ? "CompressPro_Crack.exe"
              : optionId === "rewrite"
                ? "lib_compress @ MIT"
                : "codec.c — cabeçalho removido"}
          </p>
          <small>
            {optionId === "rewrite"
              ? "biblioteca licenciada • autoria preservada"
              : optionId === "comment"
                ? "TODO: crédito no comentário, licença ignorada"
                : "repositório vazado do concorrente • GPL"}
          </small>
          <div className="installer-actions">
            <span className={optionId === "rewrite" ? "ghost" : "danger"}>
              {optionId === "crack" ? "Instalar crack" : "Mesclar no produto"}
            </span>
            <span className={optionId === "rewrite" ? "ok" : "ghost"}>
              Reescrever
            </span>
          </div>
        </div>
        <div className="av-line">
          {optionId === "copy"
            ? "Trabalho alheio enviado como próprio"
            : optionId === "comment"
              ? "Crédito informal não cumpre a licença"
              : "SBC 1.5 — creditar e respeitar licenças"}
        </div>
      </div>
    </div>
  );
}

function SegurancaVisual({ optionId }: { optionId: string | null }) {
  const hidden = optionId === "erase";

  return (
    <div className="scene-stack">
      <div className="fake-files">
        {["backups_saude/", "access_11h.log", "pacientes.parquet"].map(
          (name) => (
            <div key={name} className={hidden ? "locked" : ""}>
              <i />
              <span>{hidden ? `${name} [apagado]` : name}</span>
            </div>
          ),
        )}
      </div>
      <div className="soc-card">
        <span>violação de dados</span>
        <strong>
          {optionId === "notify"
            ? "Incidente aberto • titulares notificados"
            : optionId === "wait"
              ? "Janela de 30 dias sem aviso"
              : optionId === "slack"
                ? "Aviso só no Slack interno"
                : optionId === "erase"
                  ? "Logs destruídos"
                  : "Bucket público por 11 horas"}
        </strong>
        <StatusPill
          tone={
            optionId === "notify"
              ? "ok"
              : optionId === "erase"
                ? "bad"
                : optionId
                  ? "warn"
                  : "idle"
          }
        >
          {optionId === "notify"
            ? "SBC 2.9"
            : optionId === "erase"
              ? "omissão de dano"
              : "notificação pendente"}
        </StatusPill>
      </div>
    </div>
  );
}

function ProfissionalVisual({ optionId }: { optionId: string | null }) {
  return (
    <div className="scene-stack">
      <div className="quote-card">
        <div className="fake-sheet-head">
          <span>dossiê_estudantes.xlsx</span>
          <StatusPill
            tone={
              optionId === "authorities"
                ? "ok"
                : optionId === "blackmail"
                  ? "bad"
                  : optionId
                    ? "warn"
                    : "idle"
            }
          >
            {optionId === "authorities"
              ? "autoridade competente"
              : optionId === "press"
                ? "conteúdo na imprensa"
                : optionId === "blackmail"
                  ? "dado como moeda"
                  : "confidencial"}
          </StatusPill>
        </div>
        <table>
          <thead>
            <tr>
              <th>Destino</th>
              <th>SBC 1.7</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comissão / autoridade</td>
              <td>
                {optionId === "authorities" ? "autorizado" : "não acionado"}
              </td>
            </tr>
            <tr>
              <td>Imprensa</td>
              <td>{optionId === "press" ? "dossiê enviado" : "não"}</td>
            </tr>
            <tr>
              <td>Barganha pessoal</td>
              <td>
                {optionId === "blackmail" ? "vaga em troca de silêncio" : "não"}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="quote-total">
          Exceção do sigilo:{" "}
          <strong>
            {optionId === "authorities"
              ? "só às autoridades competentes"
              : optionId === "private"
                ? "promessa privada, violação segue"
                : "conteúdo ainda em risco"}
          </strong>
        </p>
      </div>
    </div>
  );
}

export function CaseVisual({ demoId, optionId }: CaseVisualProps) {
  switch (demoId) {
    case "sigilo":
      return <SigiloVisual optionId={optionId} />;
    case "assedio":
      return <AssedioVisual optionId={optionId} />;
    case "fraude":
      return <FraudeVisual optionId={optionId} />;
    case "recursos":
      return <RecursosVisual optionId={optionId} />;
    case "seguranca":
      return <SegurancaVisual optionId={optionId} />;
    case "profissional":
      return <ProfissionalVisual optionId={optionId} />;
  }
}
