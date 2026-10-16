// ======================================================
// INFORMAÇÕES GERAIS DA ESCOLA
// ======================================================

export const schoolInfo = {
  nome: "Escola de Futebol Craques do Futuro",
  slogan: "Aprender futebol. Construir confiança. Jogar em equipe.",
  descricao:
    "Escola fictícia criada para um projeto acadêmico, com atividades esportivas para crianças e adolescentes.",
  localidade: "Recife, Pernambuco",
  endereco: "Endereço fictício — Recife, PE",
  telefone: "(81) 90000-0000",
  email: "contato@craquesdofuturo.example",
};

// ======================================================
// AVISOS
// ======================================================

export const noticesData = [
  {
    id: 1,
    titulo: "Aulas experimentais",
    descricao:
      "Consulte a equipe sobre a possibilidade de participar de uma aula experimental.",
    data: "Aviso demonstrativo",
    destaque: true,
  },
  {
    id: 2,
    titulo: "Turmas por faixa etária",
    descricao:
      "As atividades são organizadas de acordo com a idade e o desenvolvimento dos alunos.",
    data: "Aviso demonstrativo",
    destaque: false,
  },
];

// ======================================================
// PROFESSORES
// Os nomes correspondem aos professores do mockData.js.
// ======================================================

export const coachesData = [
  {
    id: 1,
    nome: "Prof. Carlos",
    cargo: "Professor de futebol",
    especialidade: "Fundamentos técnicos e iniciação esportiva",
    descricao:
      "Trabalha passe, domínio de bola, condução e cooperação entre os alunos. Perfil fictício.",
  },
  {
    id: 2,
    nome: "Prof. Marcos",
    cargo: "Professor de futebol",
    especialidade: "Coordenação motora e desenvolvimento técnico",
    descricao:
      "Propõe exercícios progressivos de controle de bola e movimentação. Perfil fictício.",
  },
  {
    id: 3,
    nome: "Prof. André",
    cargo: "Professor de futebol",
    especialidade: "Fundamentos táticos e jogo coletivo",
    descricao:
      "Trabalha posicionamento, tomada de decisão e jogo em equipe. Perfil fictício.",
  },
];

// ======================================================
// TURMAS E HORÁRIOS
// Mantém as categorias, os nomes e os professores do mock.
// ======================================================

export const schedulesData = [
  {
    id: 1,
    categoria: "sub7",
    nome: "Sub-7 (5 a 7 anos)",
    dias: "Terça e Quinta",
    horario: "08:30 às 10:00",
    professor: "Prof. Carlos",
    vagas: "3 vagas restantes",
  },
  {
    id: 2,
    categoria: "sub7",
    nome: "Sub-7 (5 a 7 anos)",
    dias: "Terça e Quinta",
    horario: "15:00 às 16:30",
    professor: "Prof. Marcos",
    vagas: "5 vagas restantes",
  },
  {
    id: 3,
    categoria: "sub11",
    nome: "Sub-11 (8 a 11 anos)",
    dias: "Segunda e Quarta",
    horario: "09:00 às 10:30",
    professor: "Prof. André",
    vagas: "2 vagas restantes",
  },
  {
    id: 4,
    categoria: "sub11",
    nome: "Sub-11 (8 a 11 anos)",
    dias: "Terça e Quinta",
    horario: "16:00 às 17:30",
    professor: "Prof. Carlos",
    vagas: "Turma cheia (fila de espera)",
  },
  {
    id: 5,
    categoria: "sub15",
    nome: "Sub-15 (12 a 15 anos)",
    dias: "Segunda e Quarta",
    horario: "15:30 às 17:00",
    professor: "Prof. Marcos",
    vagas: "4 vagas restantes",
  },
  {
    id: 6,
    categoria: "sub17",
    nome: "Sub-17 (16 e 17 anos)",
    dias: "Sexta-feira (Intensivo)",
    horario: "14:00 às 17:00",
    professor: "Prof. André",
    vagas: "6 vagas restantes",
  },
];

// ======================================================
// PLANOS
// Mantém os nomes e valores do mockData.js.
// ======================================================

export const plansData = [
  {
    id: 1,
    nome: "Plano Mensal",
    valor: "R$ 150/mês",
    descricao:
      "Plano demonstrativo para participação nas aulas regulares.",
  },
  {
    id: 2,
    nome: "Plano Semestral",
    valor: "R$ 130/mês",
    descricao:
      "Plano demonstrativo com permanência de seis meses.",
  },
  {
    id: 3,
    nome: "Plano Avançado (Sub-17)",
    valor: "R$ 180/mês",
    descricao:
      "Plano demonstrativo voltado à categoria Sub-17.",
  },
];

// ======================================================
// DEPOIMENTOS DEMONSTRATIVOS
// ======================================================

export const testimonialsData = [
  {
    id: 1,
    nome: "Responsável por aluno da categoria Sub-7",
    texto:
      "As atividades valorizam a participação, o respeito e a aprendizagem em equipe.",
    observacao: "Depoimento fictício para demonstração acadêmica.",
  },
  {
    id: 2,
    nome: "Responsável por aluno da categoria Sub-11",
    texto:
      "A proposta incentiva as crianças a aprender os fundamentos do futebol enquanto se divertem.",
    observacao: "Depoimento fictício para demonstração acadêmica.",
  },
  {
    id: 3,
    nome: "Aluno da categoria Sub-15",
    texto:
      "Os exercícios ajudam a praticar o passe, o domínio da bola e o trabalho em equipe.",
    observacao: "Depoimento fictício para demonstração acadêmica.",
  },
];

// ======================================================
// PERGUNTAS FREQUENTES
// ======================================================

export const faqData = [
  {
    id: 1,
    pergunta: "Qual é a idade mínima para participar?",
    resposta:
      "O projeto demonstrativo contempla turmas a partir dos 5 anos. Consulte a equipe para confirmar a categoria adequada.",
  },
  {
    id: 2,
    pergunta: "Como posso conhecer a escola?",
    resposta:
      "Consulte a equipe sobre os horários e a disponibilidade de uma aula experimental.",
  },
  {
    id: 3,
    pergunta: "Como descubro os horários das turmas?",
    resposta:
      "Consulte a seção de turmas e horários disponível no site.",
  },
  {
    id: 4,
    pergunta: "Quais são os valores das mensalidades?",
    resposta:
      "Consulte a seção de planos. Os preços apresentados neste projeto são fictícios.",
  },
  {
    id: 5,
    pergunta: "Onde fica a escola?",
    resposta:
      "A escola utilizada neste projeto é fictícia e está situada, como cenário acadêmico, em Recife, Pernambuco.",
  },
  {
    id: 6,
    pergunta: "O site realiza a matrícula automaticamente?",
    resposta:
      "Não. O projeto tem como objetivo divulgar a escola; não pressupõe cadastro de matrícula em banco de dados.",
  },
];
