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
  label: string;
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
    title: "Conduta responsável",
    hint: "A decisão protege pessoas, dados e a organização.",
  },
  dubious: {
    mark: "~",
    title: "Zona cinzenta",
    hint: "Parece razoável, mas ainda cria risco ou omite deveres.",
  },
  violation: {
    mark: "!",
    title: "Violação do código",
    hint: "A escolha rompe sigilo, respeito, integridade ou segurança.",
  },
};

export const conductCases: ConductCase[] = [
  {
    id: "sigilo",
    number: "01",
    shortLabel: "Sigilo",
    title: "Vazamento de dados e sigilo",
    pressure: "Prazo apertado • sistema fora do ar",
    context:
      "O sistema interno caiu e um colega pede a planilha de clientes no Gmail pessoal. Ele diz que precisa só dos nomes para ligar hoje, e promete apagar o arquivo à noite.",
    question:
      "O pedido parece urgente e bem-intencionado. Qual resposta é profissionalmente defensável?",
    rule: "Dados pessoais só podem ser tratados com finalidade, necessidade, autorização e canal seguro. Boa intenção não substitui a LGPD.",
    action:
      "Recuse o envio externo, abra um chamado no canal oficial e ofereça um acesso temporário controlado, se a liderança autorizar.",
    impacts: ["LGPD", "Minimização", "Rastreabilidade"],
    options: [
      {
        id: "refuse",
        label: "A",
        text: "Recusar o e-mail pessoal e pedir acesso pelo sistema oficial, mesmo que o prazo atrase.",
        verdict: "responsible",
        outcome:
          "Os dados continuam no ambiente controlado. O atraso é registrável; um vazamento, não.",
      },
      {
        id: "mask",
        label: "B",
        text: "Enviar só nome e telefone, sem CPF, e pedir para ele apagar depois.",
        verdict: "dubious",
        outcome:
          "Ainda há dado pessoal fora do controle da empresa. Promessa de apagar não é garantia nem registro de tratamento.",
      },
      {
        id: "whatsapp",
        label: "C",
        text: "Mandar um print no WhatsApp “só por hoje”, para não gerar e-mail.",
        verdict: "dubious",
        outcome:
          "O print copia, encaminha e fica no celular. Canal informal aumenta o risco e some da auditoria.",
      },
      {
        id: "send",
        label: "D",
        text: "Enviar a planilha completa: o cliente não pode esperar e o colega é de confiança.",
        verdict: "violation",
        outcome:
          "CPF, telefone e outros dados saem da empresa. Confiança pessoal não autoriza tratamento nem evita responsabilidade.",
      },
    ],
  },
  {
    id: "assedio",
    number: "02",
    shortLabel: "Respeito",
    title: "Assédio e discriminação",
    pressure: "Reunião ao vivo • hierarquia envolvida",
    context:
      "Na daily, a líder interrompe Marina, imita o sotaque dela e diz que “esse perfil não combina com cliente grande”. Parte da sala ri. Marina fica em silêncio.",
    question:
      "Você não é a vítima nem a gestora. O que fazer agora, sem transformar o caso em fofoca nem em omissão?",
    rule: "Assédio e discriminação não se resolvem no humor nem no silêncio. Quem presencia também tem dever de cuidado.",
    action:
      "Interrompa com segurança, registre o ocorrido, ofereça apoio a Marina e acione RH ou o canal formal — sem expor a vítima em grupo.",
    impacts: ["Dignidade", "Não retaliação", "Dever de reportar"],
    options: [
      {
        id: "report",
        label: "A",
        text: "Interromper com calma, apoiar Marina em privado e registrar o fato no canal oficial.",
        verdict: "responsible",
        outcome:
          "A conduta é interrompida, a vítima não fica sozinha e a apuração pode ocorrer com proteção.",
      },
      {
        id: "private",
        label: "B",
        text: "Não falar nada agora para não piorar. Depois, consolar Marina e sugerir que ela mesma denuncie.",
        verdict: "dubious",
        outcome:
          "O acolhimento ajuda, mas transferir o ônus só para a vítima e deixar a humilhação seguir é omissão parcial.",
      },
      {
        id: "joke",
        label: "C",
        text: "Quebrar o clima com uma piada, para a líder perceber o exagero sem confronto.",
        verdict: "dubious",
        outcome:
          "Humor raramente corrige abuso. Pode parecer cumplicidade e ainda ridicularizar mais a pessoa atingida.",
      },
      {
        id: "ignore",
        label: "D",
        text: "Rir junto e seguir a reunião. Confrontar a líder pode prejudicar sua avaliação.",
        verdict: "violation",
        outcome:
          "O silêncio e o riso legitimam a discriminação. Medo de retaliação não autoriza participar do dano.",
      },
    ],
  },
  {
    id: "fraude",
    number: "03",
    shortLabel: "Integridade",
    title: "Fraude e corrupção",
    pressure: "Contrato de R$ 180 mil • presente na mesa",
    context:
      "Dois fornecedores competem. A proposta A é mais barata e atende ao edital. A B é mais cara, mas o vendedor deixa um notebook “de cortesia” e diz: “é relacionamento, não precisa declarar”.",
    question:
      "Recusar pode emperrar a parceria. Aceitar “cortesia” é comum no mercado. O que o código exige?",
    rule: "Vantagem indevida, mesmo disfarçada de cortesia, compromete a imparcialidade. Conflito de interesse precisa ser declarado, não negociado em silêncio.",
    action:
      "Recuse o bem, registre a tentativa, comunique compliance e avalie as propostas só por critérios técnicos e de preço.",
    impacts: ["Imparcialidade", "Compliance", "Conflito de interesses"],
    options: [
      {
        id: "disclose",
        label: "A",
        text: "Devolver o notebook, registrar o episódio e seguir a avaliação só pelos critérios do edital.",
        verdict: "responsible",
        outcome:
          "A contratação permanece auditável. A tentativa fica documentada e você se protege.",
      },
      {
        id: "lunch",
        label: "B",
        text: "Recusar o notebook, mas aceitar um almoço caro “para não constranger” o fornecedor.",
        verdict: "dubious",
        outcome:
          "O valor mudou, o conflito não. Hospitalidade excessiva ainda pode influenciar ou parecer influência.",
      },
      {
        id: "delay",
        label: "C",
        text: "Guardar o presente na gaveta e decidir depois, quando a pressão da compra passar.",
        verdict: "dubious",
        outcome:
          "Adiar não neutraliza o conflito. Enquanto o bem estiver com você, a imparcialidade já está comprometida.",
      },
      {
        id: "accept",
        label: "D",
        text: "Aceitar em silêncio e favorecer a proposta B: a diferença de preço “não é tão grande”.",
        verdict: "violation",
        outcome:
          "Há vantagem oculta e possível prejuízo à empresa. Isso pode configurar corrupção, não “relacionamento”.",
      },
    ],
  },
  {
    id: "recursos",
    number: "04",
    shortLabel: "Recursos",
    title: "Uso inadequado de recursos",
    pressure: "Entrega hoje • licença ainda não chegou",
    context:
      "Falta um editor pago para fechar o projeto. Um colega manda o instalador “crackeado” e diz que a TI demora semanas. Seu computador da empresa está com a proteção ativa.",
    question:
      "A entrega é real, a licença também. Qual atalho ainda é aceitável — se algum for?",
    rule: "Recurso da empresa, rede e licenças não são pessoais. Software não autorizado pode ser ilegal e abrir a porta para malware.",
    action:
      "Não instale. Peça licença emergencial, use ferramenta homologada ou renegocie o prazo com a liderança.",
    impacts: ["Licenciamento", "Malware", "Uso autorizado"],
    options: [
      {
        id: "ticket",
        label: "A",
        text: "Recusar o instalador, abrir chamado de licença emergencial e avisar o atraso com transparência.",
        verdict: "responsible",
        outcome:
          "O prazo vira decisão da gestão, não um risco escondido. A rede e as licenças permanecem íntegras.",
      },
      {
        id: "personal",
        label: "B",
        text: "Usar o programa pirata no notebook pessoal e só copiar o arquivo final para a empresa.",
        verdict: "dubious",
        outcome:
          "Tira o crack da rede corporativa, mas ainda há pirataria e o arquivo pode carregar código malicioso.",
      },
      {
        id: "crack",
        label: "C",
        text: "Instalar “só hoje” no PC da empresa e desinstalar amanhã, antes da auditoria.",
        verdict: "violation",
        outcome:
          "O software já viola licença e política. Desinstalar depois não apaga logs, nem o risco de infecção.",
      },
      {
        id: "disable",
        label: "D",
        text: "Desativar o antivírus, porque ele está bloqueando o instalador.",
        verdict: "violation",
        outcome:
          "Além da pirataria, você desliga um controle de segurança. Isso é violação grave, não produtividade.",
      },
    ],
  },
  {
    id: "seguranca",
    number: "05",
    shortLabel: "Incidentes",
    title: "Violações de segurança",
    pressure: "Arquivos cifrados • medo de demissão",
    context:
      "Você abriu um anexo de “boleto atualizado”. A tela congelou e pastas passaram a terminar em .locked. Ninguém viu. Uma mensagem pede silêncio e um pagamento para “não vazar a base”.",
    question:
      "Reportar pode expor seu erro. Tentar resolver sozinho parece proteger a equipe. O que reduz o dano de verdade?",
    rule: "Incidentes devem ser comunicados imediatamente. Ocultar, pagar resgate ou apagar rastros agrava o ataque e a responsabilidade.",
    action:
      "Isole o equipamento da rede, não pague, não apague evidências e acione a equipe de segurança pelo canal oficial.",
    impacts: ["Contenção", "Evidência", "Não ocultação"],
    options: [
      {
        id: "isolate",
        label: "A",
        text: "Desconectar da rede, preservar a máquina como está e acionar segurança agora, admitindo o clique.",
        verdict: "responsible",
        outcome:
          "A contenção começa cedo, as evidências permanecem e a equipe pode impedir que o ataque se espalhe.",
      },
      {
        id: "unofficial",
        label: "B",
        text: "Mandar mensagem só para um amigo da TI, pedindo para “dar uma olhada sem abrir chamado”.",
        verdict: "dubious",
        outcome:
          "Ajuda informal não substitui resposta a incidente. Sem registro, o tempo passa e outros dispositivos seguem expostos.",
      },
      {
        id: "reboot",
        label: "C",
        text: "Reiniciar, apagar os arquivos estranhos e esperar que tenha sido só um travamento.",
        verdict: "violation",
        outcome:
          "Reiniciar e apagar pode destruir evidências e dar tempo ao ransomware. Esperar é deixar o ataque trabalhar.",
      },
      {
        id: "hide",
        label: "D",
        text: "Pagar o valor pedido com dinheiro próprio para resolver quieto e proteger a reputação.",
        verdict: "violation",
        outcome:
          "Pagar não garante recuperação, financia o ataque e esconde um incidente que pode já ter saído da sua máquina.",
      },
    ],
  },
  {
    id: "profissional",
    number: "06",
    shortLabel: "Boa-fé",
    title: "Conduta antiética profissional",
    pressure: "Cliente leigo • meta de faturamento",
    context:
      "O notebook só precisa de bateria. O cliente pergunta se “não vale já trocar tudo”. A loja paga bônus por peças extras. Um colega murmura: “se você não vender, outro vende”.",
    question:
      "Informar pouco pode ser visto como “consultoria”. Cobrar a mais pode parecer cuidado. Onde está a má-fé?",
    rule: "O profissional não explora assimetria de informação. Diagnóstico, preço e necessidade do serviço devem ser claros e verdadeiros.",
    action:
      "Mostre o laudo, cobre o necessário, explique riscos reais da bateria e só execute extras com consentimento informado.",
    impacts: ["Boa-fé", "Consentimento", "Preço justo"],
    options: [
      {
        id: "honest",
        label: "A",
        text: "Entregar o laudo: só a bateria é necessária, com preço e prazo, e deixar extras como opção explícita.",
        verdict: "responsible",
        outcome:
          "O cliente decide com informação. Você perde o bônus fácil e preserva a reputação da categoria.",
      },
      {
        id: "upsell",
        label: "B",
        text: "Trocar a bateria e sugerir SSD “preventivo”, sem dizer que o atual está saudável.",
        verdict: "dubious",
        outcome:
          "Não é mentira direta, mas omite o essencial. Venda por omissão ainda explora quem não entende o laudo.",
      },
      {
        id: "inflate",
        label: "C",
        text: "Cobrar a bateria pelo dobro, porque “ele tem condição e não vai pesquisar”.",
        verdict: "violation",
        outcome:
          "Preço abusivo por assimetria de informação é má-fé. A vulnerabilidade técnica do cliente não é margem.",
      },
      {
        id: "fake",
        label: "D",
        text: "Dizer que a placa-mãe também falhou e trocar peças boas por novas.",
        verdict: "violation",
        outcome:
          "Há falsidade no diagnóstico e prejuízo deliberado. Isso é fraude, não “jeitinho comercial”.",
      },
    ],
  },
];
