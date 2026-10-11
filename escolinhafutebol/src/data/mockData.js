// src/data/mockData.js
/**
 * =========================================================================================
 * DADOS MOCKADOS: Turmas e Planos
 * RESPONSÁVEL: Álvaro Oliveira (Lógica e Fluxo)
 * 
 * NOTA PARA O INTEGRANTE DE CONTEÚDO:
 * - Estes dados são temporários para viabilizar o desenvolvimento e teste da lógica de filtro
 *   e do modal de agendamento.
 * - Ao centralizar as informações da escolinha no arquivo oficial (ex: `src/data/schoolData.js`),
 *   você pode expandir ou substituir esses registros.
 * =========================================================================================
 */

export const turmasMock = [
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

export const planosMock = [
  { id: 1, nome: "Plano Mensal", valor: "R$ 150/mês" },
  { id: 2, nome: "Plano Semestral", valor: "R$ 130/mês" },
  { id: 3, nome: "Plano Avançado (Sub-17)", valor: "R$ 180/mês" },
];
