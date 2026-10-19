import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Notices from "./components/Notices";
import About from "./components/About";
import Coaches from "./components/Coaches";
import FilterTurmas from "./components/FilterTurmas";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactLocation from "./components/ContactLocation";
import Footer from "./components/Footer";
import ModalAgendamento from "./components/ModalAgendamento";
import { schedulesData } from "./data/schoolData";

/**
 * =========================================================================================
 * PROJETO: Escola de Futebol "Craques do Futuro"
 * ARQUITETURA MODULAR & ESCALÁVEL
 *
 * App.tsx atua como orquestrador principal de estado global e montagem de componentes.
 * Todas as seções visuais estão desacopladas em src/components/ para fácil manutenção
 * e colaboração em equipe via Git.
 * =========================================================================================
 */
export default function App() {
  // Estado Global do Fluxo: controla a abertura do modal e o item/plano selecionado
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedPlan: "Aula Experimental Gratuita",
  });

  const handleOpenModal = (planName?: string) => {
    setModalState({
      isOpen: true,
      selectedPlan: planName || "Aula Experimental Gratuita",
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. Header & Barra de Navegação */}
      <Header onOpenModal={handleOpenModal} />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 2. Hero Section com CTA e Destaques */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 3. Mural de Avisos e Comunicados */}
        <Notices onOpenModal={handleOpenModal} />

        {/* 4. Sobre a Escola e Metodologia em 4 Pilares */}
        <About />

        {/* 5. Corpo Docente / Treinadores */}
        <Coaches onOpenModal={handleOpenModal} />

        {/* 6. Grade de Horários Interativa com Filtro de Categorias */}
        <FilterTurmas
          turmas={schedulesData}
          onAgendar={(turmaNome: string) => handleOpenModal(`Turma: ${turmaNome}`)}
        />

        {/* 7. Planos e Mensalidades */}
        <Plans onOpenModal={handleOpenModal} />

        {/* 8. Depoimentos de Pais e Alunos */}
        <Testimonials />

        {/* 9. Perguntas Frequentes (FAQ) */}
        <FAQ />

        {/* 10. Localização e Contato Direto */}
        <ContactLocation onOpenModal={handleOpenModal} />
      </main>

      {/* 11. Rodapé Institucional */}
      <Footer />

      {/* 12. Modal Global de Agendamento */}
      {modalState.isOpen && (
        <ModalAgendamento
          initialPlan={modalState.selectedPlan}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
