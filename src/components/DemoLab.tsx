"use client";

import { useState } from "react";
import { CaseVisual } from "@/components/CaseVisual";
import {
  conductCases,
  verdictCopy,
  type ConductCase,
  type DemoId,
} from "@/lib/conduct-cases";

function CaseSimulation({
  conductCase,
  onNext,
}: {
  conductCase: ConductCase;
  onNext: () => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = conductCase.options.find(
    (option) => option.id === selectedId,
  );
  const verdict = selected?.verdict ?? "waiting";

  return (
    <div className="case-simulation">
      <div className="case-context">
        <div className="case-meta">
          <span>Caso {conductCase.number}</span>
          <span>{conductCase.pressure}</span>
        </div>
        <p className="case-category">{conductCase.title}</p>
        <h3>{conductCase.context}</h3>
        <p className="case-question">{conductCase.question}</p>

        <div className="decision-options" role="listbox" aria-label="Respostas">
          {conductCase.options.map((option) => (
            <button
              type="button"
              role="option"
              key={option.id}
              className={
                selectedId === option.id ? `selected ${option.verdict}` : ""
              }
              aria-selected={selectedId === option.id}
              onClick={() => setSelectedId(option.id)}
            >
              <span>{option.label}</span>
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <div className={`case-stage ${verdict}`} aria-live="polite">
        <div className="visual-stage">
          <div className="visual-label">
            <span>Simulação</span>
            <span>
              {selected
                ? `efeito da alternativa ${selected.label}`
                : "cenário em andamento"}
            </span>
          </div>
          <CaseVisual demoId={conductCase.id} optionId={selectedId} />
        </div>

        {selected ? (
          <div className={`case-outcome compact ${selected.verdict}`}>
            <div className="outcome-status">
              <span>{verdictCopy[selected.verdict].mark}</span>
              <div>
                <small>Leitura da escolha</small>
                <strong>{verdictCopy[selected.verdict].title}</strong>
              </div>
            </div>
            <p className="outcome-copy">{selected.outcome}</p>
            <p className="verdict-hint">{verdictCopy[selected.verdict].hint}</p>
            <div className="rule-box">
              <small>O que o código orienta</small>
              <p>{conductCase.rule}</p>
            </div>
            <div className="recommended-action">
              <small>Como agir profissionalmente</small>
              <p>{conductCase.action}</p>
            </div>
            <div className="impact-tags">
              {conductCase.impacts.map((impact) => (
                <span key={impact}>{impact}</span>
              ))}
            </div>
            <div className="outcome-actions">
              <button type="button" onClick={() => setSelectedId(null)}>
                Refazer decisão
              </button>
              <button type="button" onClick={onNext}>
                Próximo caso →
              </button>
            </div>
          </div>
        ) : (
          <p className="stage-hint">
            Quatro caminhos. Nem toda boa intenção é conduta correta. Escolha
            uma alternativa para ver o efeito na simulação.
          </p>
        )}
      </div>
    </div>
  );
}

export function DemoLab() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("sigilo");
  const activeIndex = conductCases.findIndex(
    (conductCase) => conductCase.id === activeDemo,
  );
  const activeCase = conductCases[activeIndex];

  function goToNextCase() {
    const nextIndex = (activeIndex + 1) % conductCases.length;
    setActiveDemo(conductCases[nextIndex].id);
  }

  return (
    <div className="lab-shell">
      <div className="demo-tabs" role="tablist" aria-label="Casos de conduta">
        {conductCases.map((conductCase) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeDemo === conductCase.id}
            aria-controls="conduct-case-panel"
            key={conductCase.id}
            className={activeDemo === conductCase.id ? "active" : ""}
            onClick={() => setActiveDemo(conductCase.id)}
          >
            <span>{conductCase.number}</span>
            {conductCase.shortLabel}
          </button>
        ))}
      </div>
      <div id="conduct-case-panel" role="tabpanel" key={activeCase.id}>
        <CaseSimulation conductCase={activeCase} onNext={goToNextCase} />
      </div>
    </div>
  );
}
