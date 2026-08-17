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
  const exposed = optionId === "send";
  const partial = optionId === "mask" || optionId === "whatsapp";
  const blocked = optionId === "refuse";

  return (
    <div className="scene-stack">
      <div className="fake-mail">
        <div className="fake-mail-row">
          <span>De</span>
          <strong>lucas.mendes@nexus.local</strong>
        </div>
        <div className="fake-mail-row">
          <span>Para</span>
          <strong>
            {optionId === "whatsapp"
              ? "WhatsApp • Lucas"
              : optionId === "refuse"
                ? "ti-suporte@nexus.local"
                : "lucas.mendes@gmail.com"}
          </strong>
        </div>
        <p>
          {optionId === "refuse"
            ? "Sistema instável. Preciso de acesso temporário no ambiente corporativo, sem extrair a base."
            : "O CRM caiu. Manda a planilha no meu pessoal? É só hoje, eu apago à noite."}
        </p>
      </div>

      <div className={`fake-sheet ${blocked ? "blocked" : ""}`}>
        <div className="fake-sheet-head">
          <span>clientes_ativo.xlsx</span>
          <StatusPill
            tone={blocked ? "ok" : exposed ? "bad" : partial ? "warn" : "idle"}
          >
            {blocked
              ? "acesso interno"
              : exposed
                ? "arquivo enviado"
                : partial
                  ? "cópia parcial"
                  : "dados em risco"}
          </StatusPill>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Cartão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ana Souza</td>
              <td>{exposed ? "452.118.903-22" : "•••.•••.•••-••"}</td>
              <td>
                {exposed || optionId === "mask"
                  ? "(11) 98821-4409"
                  : "(11) 9••••-••••"}
              </td>
              <td>{exposed ? "5162 88•• 4412" : "•••• ••••"}</td>
            </tr>
            <tr>
              <td>Igor Lima</td>
              <td>{exposed ? "307.664.128-90" : "•••.•••.•••-••"}</td>
              <td>
                {exposed || optionId === "mask"
                  ? "(21) 99704-1183"
                  : "(21) 9••••-••••"}
              </td>
              <td>{exposed ? "4111 12•• 9031" : "•••• ••••"}</td>
            </tr>
          </tbody>
        </table>
        {blocked && (
          <div className="scene-overlay ok">Envio externo bloqueado</div>
        )}
        {optionId === "whatsapp" && (
          <div className="scene-overlay warn">Print pode ser encaminhado</div>
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
          <span>daily • squad vendas</span>
          <StatusPill
            tone={
              optionId === "report"
                ? "ok"
                : optionId === "ignore"
                  ? "bad"
                  : optionId
                    ? "warn"
                    : "idle"
            }
          >
            {optionId === "report"
              ? "canal acionado"
              : optionId === "ignore"
                ? "abuso normalizado"
                : optionId === "joke"
                  ? "humor no lugar da correção"
                  : optionId === "private"
                    ? "omissão na hora"
                    : "reunião ao vivo"}
          </StatusPill>
        </div>
        <div className="meet-grid">
          <div className="meet-tile lead">RL</div>
          <div className={`meet-tile ${optionId === "ignore" ? "muted" : ""}`}>
            VC
          </div>
          <div className="meet-tile">JO</div>
          <div
            className={`meet-tile victim ${optionId === "ignore" ? "isolated" : ""}`}
          >
            MA
          </div>
        </div>
        <div className="meet-chat">
          <p>
            <strong>Renata L.</strong> Marina, deixa quieto. Esse perfil não
            combina com cliente grande.
          </p>
          {optionId === "ignore" && (
            <p className="bad-line">
              <strong>Você</strong> 😂
            </p>
          )}
          {optionId === "joke" && (
            <p className="warn-line">
              <strong>Você</strong> Relaxa, Renata tá só “brincando”...
            </p>
          )}
          {optionId === "private" && (
            <p className="warn-line">
              <strong>Você</strong> <em>permanece em silêncio</em>
            </p>
          )}
          {optionId === "report" && (
            <p className="ok-line">
              <strong>Você</strong> Vamos interromper aqui. Isso não é
              aceitável. Registro o ocorrido no canal.
            </p>
          )}
          {!optionId && (
            <p>
              <strong>Marina A.</strong> <em>câmera ligada, microfone mudo</em>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FraudeVisual({ optionId }: { optionId: string | null }) {
  const bWins = optionId === "accept";
  const conflict = optionId === "accept" || optionId === "delay";

  return (
    <div className="scene-stack">
      <div className="bid-grid">
        <article className={!bWins && optionId === "disclose" ? "winner" : ""}>
          <span>Proposta A</span>
          <strong>R$ 142.900</strong>
          <small>nota técnica 9,1</small>
        </article>
        <article className={bWins ? "winner dirty" : ""}>
          <span>Proposta B</span>
          <strong>R$ 181.400</strong>
          <small>nota técnica 7,4</small>
        </article>
      </div>
      <div className={`gift-box ${conflict ? "open" : ""}`}>
        <div>
          <strong>Notebook “cortesia”</strong>
          <p>
            {optionId === "disclose"
              ? "Devolvido e registrado em compliance."
              : optionId === "lunch"
                ? "Bem recusado. Almoço de R$ 420 aceito."
                : optionId === "delay"
                  ? "Na gaveta. Decisão pendente."
                  : optionId === "accept"
                    ? "Aceito em silêncio. B sobe no ranking."
                    : "O vendedor diz que não precisa declarar."}
          </p>
        </div>
        <StatusPill
          tone={
            optionId === "disclose"
              ? "ok"
              : optionId === "accept"
                ? "bad"
                : optionId
                  ? "warn"
                  : "idle"
          }
        >
          {optionId === "disclose"
            ? "conflito declarado"
            : optionId === "accept"
              ? "vantagem oculta"
              : "influência possível"}
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
          <span>PC-FINANCEIRO-04</span>
          <StatusPill
            tone={
              optionId === "ticket"
                ? "ok"
                : optionId === "disable" || optionId === "crack"
                  ? "bad"
                  : optionId === "personal"
                    ? "warn"
                    : "idle"
            }
          >
            {optionId === "disable"
              ? "proteção desligada"
              : optionId === "crack"
                ? "software ilegal"
                : optionId === "ticket"
                  ? "chamado 8841"
                  : "política de software"}
          </StatusPill>
        </div>
        <div className="installer">
          <p>DesignSuite_Pro_Crack.exe</p>
          <small>
            {optionId === "personal"
              ? "origem: notebook pessoal"
              : optionId === "ticket"
                ? "bloqueado pela TI"
                : "origem desconhecida • 48 MB"}
          </small>
          <div className="installer-actions">
            <span className={optionId === "ticket" ? "ghost" : "danger"}>
              {optionId === "disable" ? "Executar mesmo assim" : "Instalar"}
            </span>
            <span className={optionId === "ticket" ? "ok" : "ghost"}>
              Solicitar licença
            </span>
          </div>
        </div>
        <div className="av-line">
          {optionId === "disable"
            ? "Antivírus: desativado pelo usuário"
            : optionId === "crack"
              ? "Ameaça potencial ignorada"
              : "Antivírus: ativo • instalador bloqueável"}
        </div>
      </div>
    </div>
  );
}

function SegurancaVisual({ optionId }: { optionId: string | null }) {
  const spreading = optionId === "reboot" || optionId === "hide";

  return (
    <div className="scene-stack">
      <div className="fake-files">
        {[
          "folha_pagamento.xlsx",
          "contratos_2026.pdf",
          "backup_clientes.zip",
        ].map((name) => (
          <div key={name} className={spreading ? "locked" : ""}>
            <i />
            <span>{spreading ? `${name}.locked` : name}</span>
          </div>
        ))}
      </div>
      <div className="soc-card">
        <span>resposta a incidente</span>
        <strong>
          {optionId === "isolate"
            ? "Host isolado • ticket SOC-019"
            : optionId === "unofficial"
              ? "Conversa privada com a TI"
              : optionId === "reboot"
                ? "Evidências apagadas"
                : optionId === "hide"
                  ? "Pagamento iniciado"
                  : "Atividade anômala detectável"}
        </strong>
        <StatusPill
          tone={
            optionId === "isolate"
              ? "ok"
              : optionId === "unofficial"
                ? "warn"
                : optionId
                  ? "bad"
                  : "idle"
          }
        >
          {optionId === "isolate"
            ? "contenção em andamento"
            : optionId === "hide"
              ? "incidente oculto"
              : "janela de dano aberta"}
        </StatusPill>
      </div>
    </div>
  );
}

function ProfissionalVisual({ optionId }: { optionId: string | null }) {
  const rows = [
    {
      item: "Bateria original",
      need: "necessária",
      price:
        optionId === "inflate"
          ? "R$ 980"
          : optionId === "fake"
            ? "R$ 490"
            : "R$ 490",
    },
    {
      item: "SSD 1 TB",
      need:
        optionId === "upsell"
          ? "“preventivo”"
          : optionId === "fake"
            ? "forçado"
            : "opcional",
      price:
        optionId === "honest" || !optionId
          ? "—"
          : optionId === "inflate"
            ? "—"
            : "R$ 720",
    },
    {
      item: "Placa-mãe",
      need: optionId === "fake" ? "laudo falso" : "sem defeito",
      price: optionId === "fake" ? "R$ 1.350" : "—",
    },
  ];

  return (
    <div className="scene-stack">
      <div className="quote-card">
        <div className="fake-sheet-head">
          <span>ordem de serviço #317</span>
          <StatusPill
            tone={
              optionId === "honest"
                ? "ok"
                : optionId === "upsell"
                  ? "warn"
                  : optionId
                    ? "bad"
                    : "idle"
            }
          >
            {optionId === "honest"
              ? "laudo transparente"
              : optionId === "fake"
                ? "diagnóstico falso"
                : optionId === "inflate"
                  ? "preço abusivo"
                  : "assimetria de informação"}
          </StatusPill>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Status</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.need}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="quote-total">
          Total visível ao cliente:{" "}
          <strong>
            {optionId === "fake"
              ? "R$ 2.560"
              : optionId === "upsell"
                ? "R$ 1.210"
                : optionId === "inflate"
                  ? "R$ 980"
                  : "R$ 490"}
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
