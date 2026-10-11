// src/hooks/useScheduleFilter.js
import { useState, useMemo } from "react";
import { turmasMock } from "../data/mockData";

/**
 * =========================================================================================
 * HOOK: useScheduleFilter
 * RESPONSÁVEL: Álvaro Oliveira (Lógica e Fluxo)
 * 
 * OBJETIVO:
 * - Gerenciar a categoria de turmas ativa (`all`, `sub7`, `sub11`, `sub15`, `sub17`).
 * - Filtrar a lista de turmas dinamicamente com `useMemo` para evitar re-renderizações desnecessárias.
 * - Suporta de forma flexível objetos com propriedade `categoria` (PT) ou `category` (EN).
 * =========================================================================================
 */

export function useScheduleFilter(initialData = turmasMock) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: "Todas as Turmas" },
    { key: "sub7", label: "Sub-7 (5 a 7 anos)" },
    { key: "sub11", label: "Sub-11 (8 a 11 anos)" },
    { key: "sub15", label: "Sub-15 (12 a 15 anos)" },
    { key: "sub17", label: "Sub-17 (16 e 17 anos)" },
  ];

  const filteredSchedules = useMemo(() => {
    if (selectedCategory === "all") return initialData;
    return initialData.filter((item) => {
      const cat = item.categoria || item.category;
      return cat === selectedCategory;
    });
  }, [selectedCategory, initialData]);

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredSchedules,
  };
}

export default useScheduleFilter;
