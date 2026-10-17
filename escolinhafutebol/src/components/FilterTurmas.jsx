// src/components/FilterTurmas.jsx
import React from "react";
import { turmasMock } from "../data/mockData";
import { useScheduleFilter } from "../hooks/useScheduleFilter";
import { Calendar, Clock, UserCheck, AlertCircle, CheckCircle, ArrowRight, Shield } from "lucide-react";

/**
 * =========================================================================================
 * COMPONENTE: FilterTurmas
 * RESPONSÁVEL: Álvaro Oliveira (Lógica e Fluxo) + Estilização Moderna de Futebol
 *
 * GUIA DE INTEGRAÇÃO / REGRAS:
 * - Mantém o hook `useScheduleFilter(turmas)`.
 * - Mantém os botões de filtro chamando `setSelectedCategory(cat.key)`.
 * - Mantém o botão de ação chamando `onAgendar(turma.nome || turma.ageGroup)`.
 * =========================================================================================
 */

export default function FilterTurmas({ onAgendar, turmas = turmasMock }) {
  // Consumo do hook de lógica de filtro (Mantido 100% idêntico)
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredSchedules,
  } = useScheduleFilter(turmas);

  return (
    <section id="horarios" className="w-full py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CALENDÁRIO & HORÁRIOS DE TREINOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Grade Oficial de Turmas
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Selecione a faixa etária do seu filho para filtrar os horários ideais. Turmas com número limitado de alunos para acompanhamento técnico individual.
          </p>
        </div>

        {/* Barra de Filtro de Categorias */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 shadow-lg shadow-emerald-500/30 scale-105"
                    : "bg-slate-800/80 hover:bg-slate-750 text-slate-300 border border-slate-700/60 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Resumo do filtro */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 mb-6 px-1">
          <span>
            Exibindo <strong className="text-emerald-400 font-bold">{filteredSchedules.length}</strong> {filteredSchedules.length === 1 ? "turma disponível" : "turmas disponíveis"}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Shield className="w-4 h-4 text-emerald-400" /> Vagas limitadas por turma
          </span>
        </div>

        {/* Visualização em Cards Modernos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchedules.map((turma) => {
            const nomeTurma = turma.nome || turma.ageGroup;
            const diasTurma = turma.dias || turma.days;
            const horarioTurma = turma.horario || turma.time;
            const professorTurma = turma.professor || turma.teacher || "-";
            const vagasTurma = turma.vagas || turma.spots || "Vagas Abertas";
            const isCheia = vagasTurma.toLowerCase().includes("cheia");

            return (
              <div
                key={turma.id}
                className="group relative bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/60 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/40 flex flex-col justify-between"
              >
                {/* Linha superior com Categoria e Status de Vagas */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {nomeTurma}
                    </span>

                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                        isCheia
                          ? "bg-rose-500/15 text-rose-300 border border-rose-500/20"
                          : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                      }`}
                    >
                      {isCheia ? (
                        <AlertCircle className="w-3 h-3 text-rose-400" />
                      ) : (
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      )}
                      {vagasTurma}
                    </span>
                  </div>

                  {/* Informações da Turma */}
                  <div className="space-y-3 mb-6 pt-2">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-emerald-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Dias da Semana</div>
                        <div className="font-semibold text-white">{diasTurma}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-amber-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Horário do Treino</div>
                        <div className="font-semibold text-white">{horarioTurma}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-blue-400">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Professor Responsável</div>
                        <div className="font-semibold text-white">{professorTurma}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão de Ação */}
                <button
                  onClick={() => onAgendar?.(nomeTurma || "Aula Experimental")}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isCheia
                      ? "bg-slate-750 hover:bg-slate-700 text-slate-200 border border-slate-600 hover:border-slate-500"
                      : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black shadow-emerald-950/40 group-hover:shadow-emerald-500/20"
                  }`}
                >
                  <span>{isCheia ? "Entrar na Fila de Espera" : "Agendar Aula Nesta Turma"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Tabela de apoio para visualização rápida em telas grandes */}
        <div className="mt-12 hidden lg:block bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-800/40 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Tabela Resumo Comparativa de Horários
            </span>
            <span className="text-xs text-emerald-400 font-semibold">
              Recife, PE • Craques do Futuro
            </span>
          </div>
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/80 text-xs uppercase font-bold text-slate-400">
              <tr>
                <th className="px-6 py-3.5">Turma / Categoria</th>
                <th className="px-6 py-3.5">Dias</th>
                <th className="px-6 py-3.5">Horário</th>
                <th className="px-6 py-3.5">Professor</th>
                <th className="px-6 py-3.5">Disponibilidade</th>
                <th className="px-6 py-3.5 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredSchedules.map((turma) => {
                const nomeTurma = turma.nome || turma.ageGroup;
                const diasTurma = turma.dias || turma.days;
                const horarioTurma = turma.horario || turma.time;
                const professorTurma = turma.professor || turma.teacher || "-";
                const vagasTurma = turma.vagas || turma.spots || "Vagas Abertas";
                const isCheia = vagasTurma.toLowerCase().includes("cheia");

                return (
                  <tr key={`tbl-${turma.id}`} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-white">{nomeTurma}</td>
                    <td className="px-6 py-4 text-slate-300">{diasTurma}</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">{horarioTurma}</td>
                    <td className="px-6 py-4 text-slate-300">{professorTurma}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          isCheia
                            ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                            : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {vagasTurma}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => onAgendar?.(nomeTurma || "Aula Experimental")}
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        Agendar <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
