export type DemoId =
  | "sigilo"
  | "assedio"
  | "fraude"
  | "recursos"
  | "seguranca"
  | "profissional";

export type Verdict = "responsible" | "dubious" | "violation";

export type CaseOption = {
  id: string;
  text: string;
  verdict: Verdict;
  outcome: string;
};

export type ConductCase = {
  id: DemoId;
  number: string;
  shortLabel: string;
  title: string;
  pressure: string;
  context: string;
  question: string;
  rule: string;
  action: string;
  impacts: string[];
  options: CaseOption[];
};

export const verdictCopy: Record<
  Verdict,
  { mark: string; title: string; hint: string }
> = {
  responsible: {
    mark: "✓",
    title: "Conduta alinhada à SBC",
    hint: "A escolha privilegia o bem público e aplica o princípio citado.",
  },
  dubious: {
    mark: "~",
    title: "Zona cinzenta",
    hint: "Há intenção compreensível, mas o código ainda é descumprido em parte.",
  },
  violation: {
    mark: "!",
    title: "Violação do código da SBC",
    hint: "A SBC trata essa conduta como incompatível com a ética profissional.",
  },
};

export const conductCases: ConductCase[] = [
  {
    id: "sigilo",
    number: "01",
    shortLabel: "Privacidade",
    title: "Reidentificação e uso secundário",
    pressure: "SBC 1.6 • diretoria pressiona o prazo",
    context:
      "Sua equipe tem uma base “anonimizada” de consultas de um ambulatório. A diretoria pede para cruzá-la com o cadastro público de um programa social, a fim de prever faltas. Marketing quer a mesma base para disparar campanha. O jurídico da empresa diz que, se não há nome, a LGPD “não se aplica”. Você percebe que CEP, data de nascimento e data da consulta reidentificam vários pacientes.",
    question:
      "Eficiência, parecer interno e anonimato aparente puxam para lados diferentes. O que o Código da SBC exige?",
    rule: "SBC 1.6: usar dados pessoais só para fim legítimo; coletar o mínimo; não reidentificar dados anônimos; não reutilizar dados para outro propósito sem consentimento; ter cuidado especial ao mesclar conjuntos de dados.",
    action:
      "Recuse a fusão e o uso secundário até haver avaliação de reidentificação, finalidade clara e consentimento informado. Documente o risco às partes apropriadas.",
    impacts: ["SBC 1.6", "Minimização", "Reidentificação"],
    options: [
      {
        id: "refuse",
        text: "Suspender o cruzamento, registrar o risco de reidentificação e exigir finalidade, minimização e consentimento antes de qualquer uso novo.",
        verdict: "responsible",
        outcome:
          "A SBC pede precisamente isso: o anonimato aparente não autoriza mesclar bases nem mudar o propósito do dado.",
      },
      {
        id: "internal",
        text: "Cruzar só internamente, sem enviar a Marketing, porque “ninguém fora da equipe vai ver o nome”.",
        verdict: "dubious",
        outcome:
          "O dano não depende de divulgação externa. A reidentificação já viola a privacidade, mesmo dentro da empresa.",
      },
      {
        id: "marketing",
        text: "Liberar para Marketing sem nomes, mas com CEP e data de nascimento, “para o disparo ficar preciso”.",
        verdict: "dubious",
        outcome:
          "Uso para outro fim e quase-identificadores. Consentimento e minimização foram ignorados, ainda que o arquivo não traga o nome completo.",
      },
      {
        id: "approve",
        text: "Autorizar o cruzamento: o parecer jurídico interno e o ganho de eficiência cobrem a decisão.",
        verdict: "violation",
        outcome:
          "Parecer conveniente não anula o 1.6. A SBC manda proteger contra reidentificação e contra uso não consentido.",
      },
    ],
  },
  {
    id: "assedio",
    number: "02",
    shortLabel: "Justiça",
    title: "Viés, silêncio e assédio",
    pressure: "SBC 1.4 • rodada de investimento em 20 dias",
    context:
      "O modelo de triagem de currículos reduz sistematicamente a nota de mulheres e de candidatos do Norte e Nordeste. Você mostrou o gráfico ao PM. Ele respondeu que “não houve intenção”. Na daily seguinte, a líder imita o sotaque de uma engenheira que questionou o modelo e diz que “perfil assim não fecha com investidor”. O RH pede que você espere a captação de recursos terminar antes de qualquer registro formal.",
    question:
      "Há dano não intencional no sistema e dano intencional na reunião. Qual resposta não transfere o ônus só para a vítima nem espera o dinheiro entrar?",
    rule: "SBC 1.4: discriminação por sexo, origem, raça e outros fatores é violação explícita; assédio e bullying são discriminação. Falhar em projetar inclusão também pode ser discriminação. SBC 1.2: dano não intencional deve ser mitigado. SBC 4.1: quem reconhece violação deve agir.",
    action:
      "Documente o viés, interrompa o uso decisório do modelo, acolha a colega sem expô-la e registre o assédio no canal formal — mesmo sob pressão comercial.",
    impacts: ["SBC 1.4", "SBC 1.2", "SBC 4.1"],
    options: [
      {
        id: "document",
        text: "Congelar o modelo para decisão de contratação, registrar o viés e o episódio da daily no canal formal e apoiar a colega em privado.",
        verdict: "responsible",
        outcome:
          "A SBC não exige intenção má para haver dano. Mitigar o sistema e recusar o assédio ao mesmo tempo é o dever.",
      },
      {
        id: "threshold",
        text: "Subir um pouco o limiar das notas “para equilibrar” sem auditoria, e deixar a piada passar para não piorar o clima antes do investimento.",
        verdict: "dubious",
        outcome:
          "Ajuste opaco não corrige discriminação. Silenciar o assédio para proteger a captação prioriza o negócio, não a justiça.",
      },
      {
        id: "victim",
        text: "Entregar os gráficos só à engenheira atingida e dizer que a denúncia, se houver, tem de partir dela.",
        verdict: "dubious",
        outcome:
          "Informar a vítima importa, mas o 4.1 não autoriza transferir todo o dever de agir para quem já está em posição frágil.",
      },
      {
        id: "silence",
        text: "Arquivar o achado até o dinheiro entrar. Sem intenção discriminatória, “não é violação de verdade”.",
        verdict: "violation",
        outcome:
          "A SBC trata discriminação e assédio como violação explícita. Atraso estratégico para o funding deixa o dano continuar.",
      },
    ],
  },
  {
    id: "fraude",
    number: "03",
    shortLabel: "Honestidade",
    title: "Limitação omitida e vantagem velada",
    pressure: "SBC 1.3 • licitação municipal amanhã",
    context:
      "Você vai demonstrar um detector de fraudes para a prefeitura. Os testes internos chegam a 71% em casos reais, com muitos falsos positivos contra bairros pobres. O slide de vendas diz “98% de acerto”. O fornecedor parceiro reserva dois ingressos caros para um congresso, “se o contrato sair”. Seu gestor lembra que a folha de pagamento da equipe depende desse edital e pede que você “não complique na frente do secretário”.",
    question:
      "Lealdade ao time, precisão técnica e um presente condicionado ao contrato estão na mesma mesa. O que é honesto segundo a SBC?",
    rule: "SBC 1.3: ser transparente sobre recursos, limitações e problemas; declarações falsas, suborno e conflito de interesse são violações. SBC 2.5: avaliar riscos, inclusive de aprendizado de máquina, e relatar grandes riscos às partes apropriadas. SBC 1.1: necessidades dos menos favorecidos têm prioridade em conflitos.",
    action:
      "Corrija a métrica por escrito, explique o risco de falso positivo e recuse o benefício vinculado ao contrato, registrando o conflito.",
    impacts: ["SBC 1.3", "SBC 2.5", "SBC 1.1"],
    options: [
      {
        id: "disclose",
        text: "Trocar o slide pela métrica real, explicar o viés dos falsos positivos e recusar os ingressos com registro formal.",
        verdict: "responsible",
        outcome:
          "Divulgação completa e recusa de vantagem. O bem público — inclusive de quem seria acusado à toa — vem antes do edital.",
      },
      {
        id: "verbal",
        text: "Deixar o 98% no slide, mas “mencionar de leve” a limitação só se o secretário perguntar.",
        verdict: "dubious",
        outcome:
          "Omissão seletiva ainda é declaração enganosa. A SBC pede divulgação completa às partes apropriadas, não um aparte opcional.",
      },
      {
        id: "delayGift",
        text: "Contar a métrica verdadeira e aceitar os ingressos depois, “quando o contrato já estiver assinado, para não influenciar”.",
        verdict: "dubious",
        outcome:
          "O benefício continua associado ao fechamento. Adiar o presente não apaga o conflito de interesse.",
      },
      {
        id: "lie",
        text: "Confirmar os 98% e aceitar os ingressos: o time precisa do contrato e “todo mundo infla métrica em demo”.",
        verdict: "violation",
        outcome:
          "Declaração falsa e vantagem indevida. São violações nominais do 1.3, independentemente do uso no mercado.",
      },
    ],
  },
  {
    id: "recursos",
    number: "04",
    shortLabel: "Autoria",
    title: "Código alheio, prazo e licença",
    pressure: "SBC 1.5 • entrega na sexta",
    context:
      "Falta um módulo de compressão. Um colega colou trechos de um repositório vazado do concorrente, com licença GPL, e removeu o cabeçalho. Outra pasta do time tem um instalador “crackeado” da ferramenta paga que faria o mesmo trabalho. O cliente é órgão público. O colega diz que o código “já estava na internet” e que creditar agora denunciaria o vazamento.",
    question:
      "Reescrever atrasa. Creditar pode expor a origem irregular. O crack “resolve hoje”. Qual caminho respeita o trabalho alheio sem criar dano novo?",
    rule: "SBC 1.5: dar crédito e respeitar licenças, patentes e contratos; não reivindicar como próprio o que é recurso compartilhado. SBC 2.8: não acessar sistema ou dados de outrem sem autorização. SBC 2.3: cumprir regras, inclusive de propriedade intelectual.",
    action:
      "Remova o trecho copiado, não use o crack e reescreva ou adote biblioteca licenciada de forma lícita, registrando o incidente internamente.",
    impacts: ["SBC 1.5", "SBC 2.8", "SBC 2.3"],
    options: [
      {
        id: "rewrite",
        text: "Retirar o código copiado, recusar o crack, reescrever ou usar biblioteca licenciada e comunicar o ocorrido à liderança técnica.",
        verdict: "responsible",
        outcome:
          "Autoria, licença e acesso autorizado são restaurados. O atraso vira decisão explícita, não um atalho oculto.",
      },
      {
        id: "comment",
        text: "Manter o trecho, devolver o nome do autor no comentário e seguir, sem avisar ninguém sobre o repositório vazado.",
        verdict: "dubious",
        outcome:
          "Crédito no comentário não cumpre a GPL nem legaliza material obtido de vazamento. O 1.5 pede respeito à licença, não só ao nome.",
      },
      {
        id: "crack",
        text: "Jogar fora o código do concorrente e instalar a versão crackeada da ferramenta oficial “só até a licença chegar”.",
        verdict: "violation",
        outcome:
          "Troca uma violação de autoria por outra. Software não autorizado segue sendo desrespeito ao trabalho alheio.",
      },
      {
        id: "copy",
        text: "Enviar o módulo como está: o código já era público e o órgão precisa da entrega.",
        verdict: "violation",
        outcome:
          "Reivindicar trabalho alheio e ignorar a licença. “Estava na internet” não é autorização.",
      },
    ],
  },
  {
    id: "seguranca",
    number: "05",
    shortLabel: "Danos",
    title: "Risco conhecido e notificação",
    pressure: "SBC 1.2 e 2.9 • medo de pânico público",
    context:
      "Um bucket de backups de um app de saúde ficou público por 11 horas. Você fechou o acesso. Os logs sugerem downloads, mas não provam quem baixou. O diretor pede para não notificar pacientes: “não temos certeza, vai gerar pânico e processo”. Um colega sugere apagar os logs “para não alimentar advogado”. O sistema entra em produção ampla na segunda.",
    question:
      "Incerteza sobre o exfiltrador, dever de mitigar dano e medo reputacional. Qual obrigação permanece mesmo sem certeza total?",
    rule: "SBC 1.2: evitar dano; se o dano não for intencional, desfazer ou mitigar; relatar sinais de risco, com cuidado contra alarme infundado. SBC 2.9: segurança robusta; notificar de forma oportuna e clara quem for afetado por violação de dados, com orientação e remediação.",
    action:
      "Preserve evidências, acione resposta a incidente e notifique as partes apropriadas — incluindo titulares, se dados pessoais puderam ser acessados — sem apagar rastros.",
    impacts: ["SBC 1.2", "SBC 2.9", "Mitigação"],
    options: [
      {
        id: "notify",
        text: "Preservar logs, abrir incidente formal e notificar as partes apropriadas com o que se sabe, inclusive a incerteza.",
        verdict: "responsible",
        outcome:
          "A SBC pede notificação oportuna e mitigação. Transparência sobre o que não se sabe ainda é divulgação honesta, não pânico gratuito.",
      },
      {
        id: "wait",
        text: "Manter o bucket fechado, observar 30 dias e só notificar se um jornalista ou um paciente reclamar.",
        verdict: "dubious",
        outcome:
          "Esperar o dano aparecer inverte o 2.9. Notificação oportuna não é notificação depois do escândalo.",
      },
      {
        id: "slack",
        text: "Avisar só o grupo interno no Slack, sem protocolo nem comunicação aos pacientes, “para não vazar”.",
        verdict: "dubious",
        outcome:
          "Canal informal não substitui as partes afetadas. Quem pode ter tido o dado exposto continua sem orientação.",
      },
      {
        id: "erase",
        text: "Apagar os logs e silenciar: sem prova cabal de download, “não houve incidente”.",
        verdict: "violation",
        outcome:
          "Destruir evidência e omitir risco previsível. É o oposto de relatar sinais de dano e de notificar violações.",
      },
    ],
  },
  {
    id: "profissional",
    number: "06",
    shortLabel: "Sigilo",
    title: "Confidencialidade contra denúncia",
    pressure: "SBC 1.7 e 4.2 • canal interno comprometido",
    context:
      "Você recebeu, em confiança, planilhas que mostram venda de dados de estudantes. O diretor implicado preside o “canal ético” da empresa. Uma jornalista conhecida pede o dossiê completo “pelo interesse público”. O colega envolvido admite o fato em mensagem e pede silêncio em troca de indicação para uma vaga melhor. Você também não é especialista em direito penal e hesita em “vazar” conteúdo confidencial.",
    question:
      "Quebrar o sigilo pode ser dever — ou nova violação — conforme o destinatário. Para quem a SBC autoriza revelar o conteúdo?",
    rule: "SBC 1.7: preservar confidencialidade, salvo evidência de violação da lei, de regra organizacional ou deste código; nesses casos, revelar só às autoridades competentes, sem espalhar o conteúdo. SBC 4.1 e 4.2: agir diante da violação e, se for associado, reportar à Comissão de Ética da SBC. SBC 2.3: contestar regra antiética pelos canais existentes antes de infringi-la.",
    action:
      "Leve o material às autoridades competentes (e à Comissão de Ética da SBC, se couber), sem entregar o dossiê à imprensa nem usá-lo como moeda de troca.",
    impacts: ["SBC 1.7", "SBC 4.1", "SBC 4.2"],
    options: [
      {
        id: "authorities",
        text: "Encaminhar o dossiê só a autoridades competentes e, se associado, à Comissão de Ética da SBC, sem publicar os arquivos.",
        verdict: "responsible",
        outcome:
          "A exceção do 1.7 existe, mas o destino é a autoridade competente — não o público amplo nem a barganha pessoal.",
      },
      {
        id: "press",
        text: "Entregar tudo à jornalista, porque o canal interno é do próprio acusado e “interesse público justifica”.",
        verdict: "dubious",
        outcome:
          "O canal interno viciado justifica buscar outra instância, não despejar dados de estudantes na imprensa. A SBC delimita o destinatário.",
      },
      {
        id: "private",
        text: "Aceitar a desculpa, guardar as provas e só agir se o colega repetir a venda.",
        verdict: "dubious",
        outcome:
          "Confrontar pode ser um passo do 4.1, mas parar na promessa deixa a violação sem remediação e os estudantes expostos.",
      },
      {
        id: "blackmail",
        text: "Usar o dossiê para garantir a indicação da vaga: “pelo menos alguém ético fica no lugar”.",
        verdict: "violation",
        outcome:
          "Chantagem com dado confidencial. O bem público vira moeda pessoal — o contrário do código.",
      },
    ],
  },
];
