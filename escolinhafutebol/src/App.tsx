import { useState } from "react";
import ModalAgendamento from "./components/ModalAgendamento";
import FilterTurmas from "./components/FilterTurmas";
import { planosMock } from "./data/mockData";

/**
 * =========================================================================================
 * PROJETO: Escola de Futebol "Craques do Futuro"
 * RESPONSÁVEL: Álvaro Oliveira (Lógica e Fluxo da Aplicação)
 *
 * GUIA DE INTEGRAÇÃO PARA A EQUIPE:
 * -----------------------------------------------------------------------------------------
 * 1. CONTEÚDO:
 *    - Crie o arquivo centralizado `src/data/schoolData.js` contendo todos os dados oficiais
 *      (avisos, professores, horários, planos, depoimentos e faq).
 *    - Quando subir seu arquivo, você pode substituir `planosMock` e `turmasMock` pelas suas
 *      constantes oficiais (`schedulesData`, `plansData`, etc.).
 *
 * 2.  ESTILO:
 *    - Você pode substituir os elementos visuais abaixo pelos seus componentes estilizados: `<Header />`, `<Home />`, `<Coaches />`, `<ScheduleAndPrices />`,
 *      `<Testimonials />`, `<FAQ />` e `<Footer />`.
 *    - IMPORTANTE PARA MANTER O FLUXO: Para disparar o modal a partir dos seus botões de ação
 *      (ex: botão da Hero ou botões "Tenho Interesse" dos cards de planos), basta passar a
 *      prop `onOpenTrialModal={handleOpenModal}` (ou chamar `handleOpenModal('Nome do Plano')`).
 * =========================================================================================
 */

export default function App() {
  // 1. ESTADO GLOBAL DO FLUXO (Controla abertura e plano selecionado no modal)
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedPlan: "Aula Experimental Gratuita",
  });

  // 2. FUNÇÕES DISPARADORAS DO FLUXO
  // Abre o modal recebendo o plano ou turma selecionada
  const handleOpenModal = (planName = "Aula Experimental Gratuita") => {
    setModalState({ isOpen: true, selectedPlan: planName });
  };

  // Fecha o modal e limpa o plano selecionado
  const handleCloseModal = () => {
    setModalState({ isOpen: false, selectedPlan: "" });
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* 
        [ÁREA DE INTEGRAÇÃO DE UI - ESTILO]
        Aqui o Estilo/UI irá encaixar o <Header /> com a navegação superior fixa.
      */}
      <header
        style={{
          borderBottom: "2px solid #e5e7eb",
          paddingBottom: "16px",
          marginBottom: "24px",
        }}
      >
        <h1
          style={{ fontSize: "1.8rem", color: "#15803d", marginBottom: "8px" }}
        >
          Escola de Futebol - Craques do Futuro
        </h1>
        <p style={{ color: "#4b5563" }}>
          Módulo de Lógica e Fluxo: Filtro interativo de turmas e agendamento de
          aulas.
        </p>
      </header>

      {/* 
        [FLUXO 1: CHAMADA DA HERO SECTION]
        Demonstra o disparo do agendamento vindo do botão principal do Banner (Hero).
        Na versão final, passe `onOpenTrialModal={handleOpenModal}` para o componente <Home />.
      */}
      <section
        style={{
          marginBottom: "24px",
          padding: "16px",
          backgroundColor: "#f0fdf4",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ marginBottom: "8px", fontWeight: "bold" }}>
          Ações Rápidas (Gatilho da Hero Section):
        </h3>
        <button
          onClick={() => handleOpenModal("Aula Experimental Gratuita")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#eab308",
            color: "#1e3a1e",
            fontWeight: "bold",
            border: "none",
            borderRadius: "9999px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Agendar Aula Experimental Gratuita
        </button>
      </section>

      {/* 
        [FLUXO 2: GRADE DE HORÁRIOS INTERATIVA]
        Componente de lógica do filtro de categorias. 
        Ao clicar em "Agendar", dispara o modal passando o nome da turma selecionada.
      */}
      <FilterTurmas
        onAgendar={(turmaNome: string) =>
          handleOpenModal(`Turma: ${turmaNome}`)
        }
      />

      {/* 
        [FLUXO 3: SELEÇÃO DE PLANOS E VALORES]
        Demonstra o disparo vindo de cada plano (Mensal, Semestral, etc.).
        Ao clicar em "Tenho Interesse", o modal abre com o plano específico pré-selecionado.
        Na versão final, o componente de Estilo pode renderizar os cards em Tailwind mantendo
        o evento `onClick={() => handleOpenModal(plano.nome)}`.
      */}
      <section style={{ marginTop: "32px", marginBottom: "32px" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          Planos e Valores
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {planosMock.map((plano) => (
            <div
              key={plano.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {plano.nome}
              </h3>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#15803d",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {plano.valor}
              </p>
              <button
                onClick={() => handleOpenModal(plano.nome)}
                style={{
                  width: "100%",
                  padding: "8px 16px",
                  backgroundColor: "#15803d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Tenho Interesse
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 
        [FLUXO 4: MODAL GLOBAL DE AGENDAMENTO / MATRÍCULA]
        Renderizado e controlado pelo estado do App.
        O  Estilo pode estilizar o interior com classes do Tailwind sem alterar
        as propriedades `initialPlan` e `onClose`.
      */}
      {modalState.isOpen && (
        <ModalAgendamento
          initialPlan={modalState.selectedPlan}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
