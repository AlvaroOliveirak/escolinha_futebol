// src/components/ModalAgendamento.jsx
import React, { useState, useEffect } from "react";

/**
 * =========================================================================================
 * COMPONENTE: ModalAgendamento
 * RESPONSÁVEL: Álvaro Oliveira (Lógica e Fluxo)
 * 
 * GUIA DE INTEGRAÇÃO:
 * - PROPS:
 *   - `isOpen` (boolean): Controla se o modal está visível.
 *   - `onClose` (function): Função chamada para fechar e resetar o modal.
 *   - `initialPlan` (string): Plano ou turma pré-selecionada que preenche o campo do formulário.
 * 
 * - FLUXO IMPLEMENTADO:
 *   1. Captura dos dados (Responsável, Aluno, Idade, WhatsApp com DDD, Categoria e Plano).
 *   2. Validação pura de campos obrigatórios e idades permitidas (4 a 18 anos).
 *   3. Envio com feedback de loading (`isSubmitting`).
 *   4. Tela de sucesso (`isSuccess`) com botão gerador do link oficial do WhatsApp.
 * 
 * - Para o ESTILO: Você pode aplicar livremente classes do Tailwind (ex: `bg-green-700`,
 *   `rounded-2xl`, etc.) na estrutura JSX. Apenas preserve os nomes dos inputs e os `onChange={handleChange}`.
 * =========================================================================================
 */

export default function ModalAgendamento({
  isOpen = true,
  onClose,
  initialPlan = "Aula Experimental Gratuita",
  planosMock = "",
}) {
  const defaultPlan = initialPlan || planosMock || "Aula Experimental Gratuita";

  // 1. Estados dos inputs
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
    // Limpa o erro do campo quando o usuário começa a digitar
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
      className="modal-backdrop"
      onClick={handleResetAndClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          maxWidth: "500px",
          width: "100%",
          padding: "24px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          position: "relative",
          textAlign: "left",
          color: "#1f2937",
        }}
      >
        <button
          onClick={handleResetAndClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "1.25rem",
            cursor: "pointer",
            color: "#6b7280",
          }}
          aria-label="Fechar"
        >
          ✕
        </button>

        {isSuccess ? (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#15803d", marginBottom: "8px" }}>
              Agendamento Confirmado!
            </h3>
            <p style={{ color: "#4b5563", fontSize: "0.95rem", marginBottom: "20px" }}>
              Recebemos os dados de <strong>{formData.aluno}</strong> ({formData.categoria}).
              Nossa equipe entrará em contato via WhatsApp no número <strong>{formData.whatsapp}</strong>.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={gerarLinkWhatsapp()}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#16a34a",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Confirmar agora no WhatsApp
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                style={{
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px", color: "#111827" }}>
              Agendar Aula Experimental
            </h3>

            {/* Responsável */}
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "4px" }}>
                Nome do Responsável *
              </label>
              <input
                name="responsavel"
                placeholder="Ex: Roberto Silva"
                value={formData.responsavel}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  boxSizing: "border-box",
                  fontSize: "0.9rem",
                }}
              />
              {errors.responsavel && (
                <span style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.responsavel}</span>
              )}
            </div>

            {/* Aluno e Idade */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "4px" }}>
                  Nome do Aluno *
                </label>
                <input
                  name="aluno"
                  placeholder="Ex: Enzo Silva"
                  value={formData.aluno}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    boxSizing: "border-box",
                    fontSize: "0.9rem",
                  }}
                />
                {errors.aluno && (
                  <span style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.aluno}</span>
                )}
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "4px" }}>
                  Idade *
                </label>
                <input
                  type="number"
                  name="idade"
                  placeholder="Ex: 8"
                  value={formData.idade}
                  onChange={handleChange}
                  min="4"
                  max="18"
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    boxSizing: "border-box",
                    fontSize: "0.9rem",
                  }}
                />
                {errors.idade && (
                  <span style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.idade}</span>
                )}
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "4px" }}>
                WhatsApp com DDD *
              </label>
              <input
                name="whatsapp"
                placeholder="(11) 98765-4321"
                value={formData.whatsapp}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  boxSizing: "border-box",
                  fontSize: "0.9rem",
                }}
              />
              {errors.whatsapp && (
                <span style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errors.whatsapp}</span>
              )}
            </div>

            {/* Turma e Plano */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "4px" }}>
                  Turma de Interesse
                </label>
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                    fontSize: "0.85rem",
                  }}
                >
                  <option value="Sub-7 (5 a 7 anos)">Sub-7 (5 a 7 anos)</option>
                  <option value="Sub-11 (8 a 11 anos)">Sub-11 (8 a 11 anos)</option>
                  <option value="Sub-15 (12 a 15 anos)">Sub-15 (12 a 15 anos)</option>
                  <option value="Sub-17 (16 e 17 anos)">Sub-17 (16 e 17 anos)</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", marginBottom: "4px" }}>
                  Plano / Interesse
                </label>
                <select
                  name="plano"
                  value={formData.plano}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                    fontSize: "0.85rem",
                  }}
                >
                  <option value="Aula Experimental Gratuita">Aula Experimental Gratuita</option>
                  <option value="Plano Mensal">Plano Mensal</option>
                  <option value="Plano Semestral">Plano Semestral</option>
                  <option value="Plano Avançado (Sub-17)">Plano Avançado (Sub-17)</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px" }}>
              <button
                type="button"
                onClick={handleResetAndClose}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: "8px 20px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#16a34a",
                  color: "#ffffff",
                  fontWeight: "bold",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              >
                {isSubmitting ? "Enviando..." : "Confirmar Agendamento"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
