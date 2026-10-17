// src/components/ModalAgendamento.jsx
import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, Calendar, User, Phone, Trophy, Sparkles, Loader2 } from "lucide-react";
import { SoccerShieldLogo } from "./SoccerIcons";

/**
 * =========================================================================================
 * COMPONENTE: ModalAgendamento
 * RESPONSÁVEL: Álvaro Oliveira (Lógica e Fluxo) + Estilização Moderna de Futebol
 * 
 * GUIA DE INTEGRAÇÃO / REGRAS:
 * - Toda a lógica original de validação, estados e integração com WhatsApp é preservada.
 * - Estilização moderna com Tailwind CSS e temática profissional de futebol.
 * =========================================================================================
 */

export default function ModalAgendamento({
  isOpen = true,
  onClose,
  initialPlan = "Aula Experimental Gratuita",
  planosMock = "",
}) {
  const defaultPlan = initialPlan || planosMock || "Aula Experimental Gratuita";

  // 1. Estados dos inputs (Mantidos 100% idênticos)
  const [formData, setFormData] = useState({
    responsavel: "",
    aluno: "",
    idade: "",
    whatsapp: "",
    categoria: "Sub-7 (5 a 7 anos)",
    plano: defaultPlan,
  });

  // 2. Estados de controle de fluxo
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sincroniza plano inicial caso mude ao abrir
  useEffect(() => {
    if (defaultPlan) {
      setFormData((prev) => ({ ...prev, plano: defaultPlan }));
    }
  }, [defaultPlan]);

  if (!isOpen) return null;

  // Manipulador genérico de alteração de campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Regra de validação pura
  const validate = () => {
    const newErrors = {};
    if (!formData.responsavel.trim()) {
      newErrors.responsavel = "Nome do responsável é obrigatório";
    }
    if (!formData.aluno.trim()) {
      newErrors.aluno = "Nome do aluno é obrigatório";
    }
    if (
      !formData.idade ||
      Number(formData.idade) < 4 ||
      Number(formData.idade) > 18
    ) {
      newErrors.idade = "Idade deve ser entre 4 e 18 anos";
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 10) {
      newErrors.whatsapp = "Informe um WhatsApp válido com DDD";
    }
    return newErrors;
  };

  // 3. Submissão do fluxo
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simula envio para CRM / Backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  // 4. Fechamento e reset limpo do fluxo
  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrors({});
    onClose?.();
  };

  // 5. Integração externa (WhatsApp)
  const gerarLinkWhatsapp = () => {
    const msg = encodeURIComponent(
      `Olá! Acabei de solicitar o agendamento de aula experimental.\n` +
        `Aluno: ${formData.aluno} (${formData.idade} anos)\n` +
        `Responsável: ${formData.responsavel}\n` +
        `Turma: ${formData.categoria}\n` +
        `Plano/Interesse: ${formData.plano}`
    );
    return `https://wa.me/5511987654321?text=${msg}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 text-white my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Detalhe de fundo com luz verde de estádio */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Botão de Fechar */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* TELA DE SUCESSO MODERNA */
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Agendamento Pré-Confirmado!
              </span>
              <h3 className="text-2xl font-black text-white">
                Tudo pronto para entrar em campo!
              </h3>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-sm text-slate-300 text-left space-y-2">
              <p>
                Recebemos a solicitação para o atleta <strong className="text-emerald-400 font-bold">{formData.aluno}</strong> ({formData.categoria}).
              </p>
              <p className="text-xs text-slate-400">
                Interesse: <span className="text-white font-medium">{formData.plano}</span>
              </p>
              <p className="text-xs text-slate-400">
                Responsável: <span className="text-white font-medium">{formData.responsavel}</span> • WhatsApp: <span className="text-white font-medium">{formData.whatsapp}</span>
              </p>
            </div>

            <p className="text-xs text-slate-400">
              Para acelerar o atendimento e escolher a melhor data imediatamente, clique no botão abaixo para nos mandar uma mensagem direta no WhatsApp:
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={gerarLinkWhatsapp()}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Confirmar agora no WhatsApp
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          /* FORMULÁRIO DE AGENDAMENTO */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
              <SoccerShieldLogo className="w-12 h-12" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Escola de Futebol
                </span>
                <h3 className="text-xl font-black text-white">
                  Agendar Aula Experimental
                </h3>
              </div>
            </div>

            {/* Banner de Plano/Turma selecionada */}
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 flex items-center justify-between text-xs">
              <span className="text-slate-300">Opção Selecionada:</span>
              <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                {formData.plano}
              </span>
            </div>

            {/* Responsável */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-400" />
                Nome do Responsável *
              </label>
              <input
                type="text"
                name="responsavel"
                placeholder="Ex: Roberto Silva"
                value={formData.responsavel}
                onChange={handleChange}
                className={`w-full bg-slate-800/80 border ${
                  errors.responsavel ? "border-rose-500" : "border-slate-700"
                } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all`}
              />
              {errors.responsavel && (
                <span className="text-rose-400 text-xs mt-1 block font-medium">
                  {errors.responsavel}
                </span>
              )}
            </div>

            {/* Aluno e Idade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  Nome do Aluno (Atleta) *
                </label>
                <input
                  type="text"
                  name="aluno"
                  placeholder="Ex: Enzo Silva"
                  value={formData.aluno}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/80 border ${
                    errors.aluno ? "border-rose-500" : "border-slate-700"
                  } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all`}
                />
                {errors.aluno && (
                  <span className="text-rose-400 text-xs mt-1 block font-medium">
                    {errors.aluno}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  Idade * (4 a 18 anos)
                </label>
                <input
                  type="number"
                  name="idade"
                  placeholder="Ex: 8"
                  value={formData.idade}
                  onChange={handleChange}
                  min="4"
                  max="18"
                  className={`w-full bg-slate-800/80 border ${
                    errors.idade ? "border-rose-500" : "border-slate-700"
                  } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all`}
                />
                {errors.idade && (
                  <span className="text-rose-400 text-xs mt-1 block font-medium">
                    {errors.idade}
                  </span>
                )}
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp com DDD *
              </label>
              <input
                type="text"
                name="whatsapp"
                placeholder="(81) 98765-4321"
                value={formData.whatsapp}
                onChange={handleChange}
                className={`w-full bg-slate-800/80 border ${
                  errors.whatsapp ? "border-rose-500" : "border-slate-700"
                } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all`}
              />
              {errors.whatsapp && (
                <span className="text-rose-400 text-xs mt-1 block font-medium">
                  {errors.whatsapp}
                </span>
              )}
            </div>

            {/* Turma e Plano */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  Turma de Interesse
                </label>
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className="w-full bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white rounded-xl px-3 py-2.5 text-xs outline-none transition-all"
                >
                  <option value="Sub-7 (5 a 7 anos)">Sub-7 (5 a 7 anos)</option>
                  <option value="Sub-11 (8 a 11 anos)">Sub-11 (8 a 11 anos)</option>
                  <option value="Sub-15 (12 a 15 anos)">Sub-15 (12 a 15 anos)</option>
                  <option value="Sub-17 (16 e 17 anos)">Sub-17 (16 e 17 anos)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Plano / Interesse
                </label>
                <select
                  name="plano"
                  value={formData.plano}
                  onChange={handleChange}
                  className="w-full bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white rounded-xl px-3 py-2.5 text-xs outline-none transition-all"
                >
                  <option value="Aula Experimental Gratuita">Aula Experimental Gratuita</option>
                  <option value="Plano Mensal">Plano Mensal</option>
                  <option value="Plano Semestral">Plano Semestral</option>
                  <option value="Plano Avançado (Sub-17)">Plano Avançado (Sub-17)</option>
                </select>
              </div>
            </div>

            {/* Ações do Formulário */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    Processando...
                  </>
                ) : (
                  <>
                    Confirmar Agendamento ⚽
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
