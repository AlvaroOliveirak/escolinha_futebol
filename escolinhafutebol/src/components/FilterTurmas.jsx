// src/components/FilterTurmas.jsx
import React from "react";
import { turmasMock } from "../data/mockData";
import { useScheduleFilter } from "../hooks/useScheduleFilter";

/**
 * =========================================================================================
 * COMPONENTE: FilterTurmas
 * RESPONSÁVEL: Álvaro Oliveira (Lógica e Fluxo)
 *
 * GUIA DE INTEGRAÇÃO:
 * - Para o ESTILO: Você pode alterar livremente as classes, cores e estrutura HTML
 *   Apenas mantenha:
 *     1. Os botões de filtro chamando `setSelectedCategory(cat.key)`.
 *     2. O botão de ação chamando `onAgendar(turma.nome)`.
 * - Para o CONTEÚDO: Você pode passar sua lista oficial de turmas via prop `turmas={schedulesData}`.
 *   O hook já aceita tanto as propriedades em português (`categoria`, `nome`, `dias`, `horario`)
 *   quanto em inglês (`category`, `ageGroup`, `days`, `time`).
 * =========================================================================================
 */

export default function FilterTurmas({ onAgendar, turmas = turmasMock }) {
  // Consumo do hook de lógica de filtro
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredSchedules,
  } = useScheduleFilter(turmas);

  return (
    <section
      className="filter-turmas-section"
      style={{ margin: "24px 0", textAlign: "left" }}
    >
      <h2
        style={{ marginBottom: "12px", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        Grade de Horários
      </h2>

      {/* Botões do Filtro de Categorias */}
      <div
        className="filter-buttons"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: "600",
            alignSelf: "center",
            marginRight: "4px",
          }}
        >
          Filtrar:
        </span>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            style={{
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              fontWeight: selectedCategory === cat.key ? "bold" : "normal",
              cursor: "pointer",
              border: "1px solid #15803d",
              backgroundColor:
                selectedCategory === cat.key ? "#15803d" : "#f3f4f6",
              color: selectedCategory === cat.key ? "#ffffff" : "#374151",
              transition: "all 0.2s",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tabela / Lista de Horários Filtrados */}
      <div
        style={{
          overflowX: "auto",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#f9fafb",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "12px 16px" }}>Turma / Faixa</th>
              <th style={{ padding: "12px 16px" }}>Dias</th>
              <th style={{ padding: "12px 16px" }}>Horário</th>
              <th style={{ padding: "12px 16px" }}>Professor</th>
              <th style={{ padding: "12px 16px" }}>Disponibilidade</th>
              <th style={{ padding: "12px 16px", textAlign: "center" }}>
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.map((turma, idx) => (
              <tr
                key={turma.id}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f9fafb",
                }}
              >
                <td style={{ padding: "12px 16px", fontWeight: "600" }}>
                  {turma.nome || turma.ageGroup}
                </td>
                <td style={{ padding: "12px 16px" }}>
                  {turma.dias || turma.days}
                </td>
                <td style={{ padding: "12px 16px" }}>
                  {turma.horario || turma.time}
                </td>
                <td style={{ padding: "12px 16px" }}>
                  {turma.professor || turma.teacher || "-"}
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      backgroundColor: (
                        turma.vagas ||
                        turma.spots ||
                        ""
                      ).includes("cheia")
                        ? "#fee2e2"
                        : "#dcfce7",
                      color: (turma.vagas || turma.spots || "").includes(
                        "cheia",
                      )
                        ? "#b91c1c"
                        : "#15803d",
                    }}
                  >
                    {turma.vagas || turma.spots || "Vagas Abertas"}
                  </span>
                </td>
                <td style={{ padding: "12px 16px", textAlign: "center" }}>
                  <button
                    onClick={() =>
                      onAgendar?.(
                        turma.nome || turma.ageGroup || "Aula Experimental",
                      )
                    }
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#16a34a",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                    }}
                  >
                    Agendar Aula
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
