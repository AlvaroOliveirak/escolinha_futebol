import { useState } from "react";
import ModalAgendamento from "./components/ModalAgendamento";
import FilterTurmas from "./components/FilterTurmas";
import {
  schoolInfo,
  noticesData,
  coachesData,
  schedulesData,
  plansData,
  testimonialsData,
  faqData,
} from "./data/schoolData";
import {
  SoccerShieldLogo,
  SoccerBallSvg,
  TacticalPitchGraphic,
} from "./components/SoccerIcons";
import {
  Trophy,
  Users,
  Star,
  CheckCircle2,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Award,
  Zap,
  Activity,
  Check,
  Bell,
  MessageCircle,
} from "lucide-react";

/**
 * =========================================================================================
 * PROJETO: Escola de Futebol "Craques do Futuro"
 * RESPONSÁVEL ORIGINAL DA LÓGICA: Álvaro Oliveira
 * REESTILIZAÇÃO MODERNA E TEMÁTICA DE FUTEBOL
 *
 * PRESERVAÇÃO TOTAL DAS REGRAS E FLUXOS:
 * 1. modalState (isOpen, selectedPlan)
 * 2. handleOpenModal(planName)
 * 3. handleCloseModal()
 * 4. FilterTurmas conectado aos schedulesData e ao handleOpenModal
 * 5. Cards de planos conectados aos plansData e ao handleOpenModal
 * 6. ModalAgendamento com initialPlan e onClose
 * =========================================================================================
 */

export default function App() {
  // 1. ESTADO GLOBAL DO FLUXO (Controla abertura e plano selecionado no modal)
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedPlan: "Aula Experimental Gratuita",
  });

  // Estado para menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado para FAQ interativo (accordion)
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // 2. FUNÇÕES DISPARADORAS DO FLUXO (Mantidas 100% idênticas)
  const handleOpenModal = (planName = "Aula Experimental Gratuita") => {
    setModalState({ isOpen: true, selectedPlan: planName });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, selectedPlan: "" });
  };

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  // Fotos de futebol dos treinadores (com fallback gracioso)
  const coachPhotos: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  };

  // Fotos dos depoimentos
  const testimonialAvatars: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    2: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    3: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 
        ===================================================================
        1. NAVBAR / HEADER MODERNO FIXO
        ===================================================================
      */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo e Nome da Escola */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <SoccerShieldLogo className="w-11 h-11 transform transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                Craques do Futuro
              </span>
              <span className="text-[11px] font-semibold text-emerald-400/90 tracking-widest uppercase">
                Escola de Futebol
              </span>
            </div>
          </a>

          {/* Links de Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <a href="#inicio" className="hover:text-emerald-400 transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-emerald-400 transition-colors">
              Metodologia
            </a>
            <a href="#avisos" className="hover:text-emerald-400 transition-colors">
              Avisos
            </a>
            <a href="#professores" className="hover:text-emerald-400 transition-colors">
              Professores
            </a>
            <a href="#horarios" className="hover:text-emerald-400 transition-colors">
              Horários
            </a>
            <a href="#planos" className="hover:text-emerald-400 transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="hover:text-emerald-400 transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Botão de Ação Direta no Header */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleOpenModal("Aula Experimental Gratuita")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <SoccerBallSvg className="w-4 h-4 text-slate-950" />
              <span>Aula Experimental</span>
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Dropdown Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Metodologia
            </a>
            <a
              href="#avisos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Avisos
            </a>
            <a
              href="#professores"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Professores
            </a>
            <a
              href="#horarios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Grade de Horários
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Planos e Valores
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400"
            >
              Dúvidas Frequentes
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenModal("Aula Experimental Gratuita");
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 font-black text-sm flex items-center justify-center gap-2"
              >
                <SoccerBallSvg className="w-4 h-4 text-slate-950" />
                Agendar Aula Experimental Gratuita
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 
        ===================================================================
        2. HERO SECTION / BANNER PRINCIPAL COM FUTEBOL
        ===================================================================
      */}
      <section id="inicio" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Efeitos de Luz de Estádio e Gramado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-600/15 via-emerald-950/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna de Texto e Gatilhos da Hero */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge de Inscrições */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>⚽ Inscrições Abertas • Temporada 2026</span>
              </div>

              {/* Título Principal de Impacto */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Formando craques <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-amber-300">
                  dentro e fora de campo
                </span>
              </h1>

              {/* Slogan e Descrição Oficial */}
              <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                <strong className="text-emerald-400">{schoolInfo.slogan}</strong>
                <br />
                Proporcione ao seu filho um ambiente seguro, com metodologia moderna, foco no desenvolvimento motor, disciplina esportiva e muita diversão com novos amigos.
              </p>

              {/* Gatilhos de Ação da Hero */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => handleOpenModal("Aula Experimental Gratuita")}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <SoccerBallSvg className="w-5 h-5 text-slate-950 group-hover:rotate-45 transition-transform" />
                  <span>Agendar Aula Experimental Grátis</span>
                  <ArrowRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#horarios"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base border border-slate-700/80 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span>Ver Grade de Turmas</span>
                </a>
              </div>

              {/* Micro Benefícios / Indicadores de Confiança */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/60 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Turmas Sub-7 ao Sub-17</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Treinadores Qualificados</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Recife, Pernambuco</span>
                </div>
              </div>
            </div>

            {/* Coluna Visual: Imagem de Futebol e Cards Flutuantes */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Moldura com efeito gramado e iluminação */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-950/60 bg-gradient-to-b from-slate-900 to-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80"
                    alt="Treino oficial de futebol com bola no gramado"
                    className="w-full h-[400px] object-cover filter brightness-90 contrast-105 transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback elegante se estiver offline
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Gradiente de fusão inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Informação sobre a imagem */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-emerald-400">Ambiente Profissional</div>
                      <div className="text-sm font-bold text-white">Gramado de Alta Qualidade</div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>

                {/* Card Flutuante 1: Atletas Desenvolvidos */}
                <div className="absolute -top-6 -left-6 bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-3.5 shadow-xl shadow-black/50 hidden sm:flex items-center gap-3 animate-bounce [animation-duration:4s]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-slate-950 font-black">
                    <Trophy className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">+500 Atletas</div>
                    <div className="text-[11px] text-slate-400">Iniciação e Alto Nível</div>
                  </div>
                </div>

                {/* Card Flutuante 2: Vagas Abertas */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-3.5 shadow-xl shadow-black/50 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">Aula Experimental</div>
                    <div className="text-[11px] text-emerald-400 font-bold">100% Gratuita</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        3. AVISOS OFICIAIS DA ESCOLA (noticesData)
        ===================================================================
      */}
      <section id="avisos" className="py-12 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Mural da Coordenação
                </span>
                <h3 className="text-2xl font-black text-white">Avisos e Comunicados</h3>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md text-left md:text-right">
              Fique por dentro das datas, inscrições para aulas experimentais e organização das categorias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noticesData.map((aviso) => (
              <div
                key={aviso.id}
                className={`rounded-2xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  aviso.destaque
                    ? "bg-gradient-to-br from-emerald-950/70 to-slate-900 border-2 border-emerald-500/40 shadow-xl shadow-emerald-950/40"
                    : "bg-slate-900/80 border border-slate-800"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {aviso.data}
                    </span>
                    {aviso.destaque && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-sm">
                        <Sparkles className="w-3 h-3" /> Destaque
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{aviso.titulo}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{aviso.descricao}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-semibold">
                    {schoolInfo.nome}
                  </span>
                  <button
                    onClick={() => handleOpenModal("Aula Experimental Gratuita")}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Participar <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        4. METODOLOGIA E DIFERENCIAIS DA ESCOLA
        ===================================================================
      */}
      <section id="sobre" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Campo Tático e Estatísticas Visuais */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Treinamento Moderno
                </span>
                <h3 className="text-3xl font-black text-white">
                  Metodologia Formativa em 4 Pilares
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Desenvolvemos o atleta de maneira integral: habilidades técnicas individuais, leitura tática coletiva, preparação física saudável e conduta ética.
                </p>
              </div>

              {/* Gráfico Tático Ilustrativo */}
              <TacticalPitchGraphic className="w-full h-52 shadow-2xl shadow-emerald-950/40" />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-slate-400 font-semibold mt-1">
                    Treinadores Formados
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-amber-400">4 a 18</div>
                  <div className="text-xs text-slate-400 font-semibold mt-1">
                    Faixa Etária Atendida
                  </div>
                </div>
              </div>
            </div>

            {/* Os 4 Pilares */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <SoccerBallSvg className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Fundamentos Técnicos</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Exercícios dinâmicos de passe, domínio orientado, condução com as duas pernas, drible funcional e finalização com precisão.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Coordenação & Agilidade</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Circuitos com escadas de agilidade, cones e saltos que desenvolvem equilíbrio, velocidade de reação e prevenção de lesões.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Visão Tática e Posicional</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Jogos reduzidos para exercitar a tomada de decisão rápida, ocupação inteligente de espaços e comunicação em equipe.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Cidadania & Respeito</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Educação pelo esporte: cultivo do fair play, respeito aos colegas, professores e árbitros, lidando com vitórias e derrotas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        5. CORPO DOCENTE / PROFESSORES (coachesData)
        ===================================================================
      */}
      <section id="professores" className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <Award className="w-4 h-4" />
              EQUIPE TÉCNICA
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Professores e Treinadores
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Profissionais dedicados ao desenvolvimento técnico, tático e pedagógico de cada aluno, com olhar atento às diferentes fases de maturação motora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachesData.map((coach) => (
              <div
                key={coach.id}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/40 flex flex-col justify-between"
              >
                <div>
                  {/* Foto do Treinador */}
                  <div className="relative h-56 bg-slate-800 overflow-hidden">
                    <img
                      src={coachPhotos[coach.id] || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"}
                      alt={coach.nome}
                      className="w-full h-full object-cover filter brightness-95 contrast-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    {/* Badge de Cargo sobre a foto */}
                    <span className="absolute bottom-3 left-4 text-xs font-black uppercase tracking-wider bg-emerald-500 text-slate-950 px-3 py-1 rounded-full shadow-md">
                      {coach.cargo}
                    </span>
                  </div>

                  {/* Informações do Professor */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1.5">{coach.nome}</h3>
                    <div className="text-xs font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {coach.especialidade}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {coach.descricao}
                    </p>
                  </div>
                </div>

                {/* Rodapé do Card do Treinador */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => handleOpenModal(`Treinar com ${coach.nome}`)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Conhecer no Treino</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        6. GRADE DE HORÁRIOS INTERATIVA (FilterTurmas.jsx)
        Lógica e fluxo integrados mantendo o hook useScheduleFilter
        ===================================================================
      */}
      <FilterTurmas
        turmas={schedulesData}
        onAgendar={(turmaNome: string) => handleOpenModal(`Turma: ${turmaNome}`)}
      />

      {/* 
        ===================================================================
        7. PLANOS E MENSALIDADES (plansData)
        Gatilho do modal ao clicar em "Tenho Interesse"
        ===================================================================
      */}
      <section id="planos" className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <Trophy className="w-4 h-4 text-amber-400" />
              INVESTIMENTO NO FUTURO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Planos e Matrícula
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Valores acessíveis e transparentes para a formação do seu craque. Sem taxas ocultas e com aula experimental inclusa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plansData.map((plano) => {
              const isPopular = plano.nome.toLowerCase().includes("semestral");

              return (
                <div
                  key={plano.id}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                    isPopular
                      ? "bg-gradient-to-b from-slate-900 via-emerald-950/30 to-slate-950 border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 scale-105 z-10"
                      : "bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 shadow-xl"
                  }`}
                >
                  {/* Badge de Destaque no Plano Semestral */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Mais Escolhido pelos Pais
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{plano.nome}</h3>
                    <p className="text-xs text-slate-400 min-h-[36px]">{plano.descricao}</p>

                    <div className="my-6 pb-6 border-b border-slate-800">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {plano.valor}
                      </span>
                      <span className="text-xs text-slate-400 block mt-1">
                        Cancelamento flexível de acordo com o contrato
                      </span>
                    </div>

                    {/* Itens Inclusos */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Treinos práticos 2x na semana</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Acompanhamento pedagógico com professor</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Participação em amistosos internos</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Avaliação periódica de evolução</span>
                      </div>
                      {isPopular && (
                        <div className="flex items-center gap-2.5 text-xs text-emerald-300 font-semibold">
                          <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>Desconto especial na mensalidade</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Disparo do Modal com Plano Selecionado */}
                  <button
                    onClick={() => handleOpenModal(plano.nome)}
                    className={`w-full py-3.5 px-6 rounded-xl font-black text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                  >
                    <span>Tenho Interesse</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Banner de Aula Experimental Gratuita */}
          <div className="mt-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Sem custo inicial
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Ainda em dúvida? Faça uma aula experimental gratuita!
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Venha conhecer nosso campo, os professores e a metodologia sem nenhum compromisso financeiro.
              </p>
            </div>
            <button
              onClick={() => handleOpenModal("Aula Experimental Gratuita")}
              className="shrink-0 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <SoccerBallSvg className="w-4 h-4 text-slate-950" />
              <span>Agendar Minha Aula Grátis</span>
            </button>
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        8. DEPOIMENTOS (testimonialsData)
        ===================================================================
      */}
      <section id="depoimentos" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              VOZ DOS ALUNOS E PAIS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              O Que Dizem Sobre a Craques do Futuro
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              A satisfação das famílias e a evolução constante dos alunos são nossos maiores troféus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((depoimento) => (
              <div
                key={depoimento.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Estrelas */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Texto do Depoimento */}
                  <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                    "{depoimento.texto}"
                  </p>
                </div>

                {/* Autor */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <img
                    src={testimonialAvatars[depoimento.id] || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"}
                    alt={depoimento.nome}
                    className="w-10 h-10 rounded-full object-cover border border-emerald-500/40"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white">{depoimento.nome}</h5>
                    <span className="text-[11px] text-slate-400 block">{depoimento.observacao}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        9. PERGUNTAS FREQUENTES / FAQ (faqData)
        ===================================================================
      */}
      <section id="faq" className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              TIRE SUAS DÚVIDAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Confira as respostas para as principais dúvidas sobre matrícula, turmas e funcionamento.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => {
              const isOpen = openFaqId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base">{item.pergunta}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40 animate-fadeIn">
                      {item.resposta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        10. CONTATO E LOCALIZAÇÃO (schoolInfo)
        ===================================================================
      */}
      <section id="contato" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Fale Conosco
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Venha Conhecer Nosso Campo
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Estamos de portas abertas para receber você e sua família. Marque uma visita, assista a um treino ou tire todas as suas dúvidas diretamente com nossa equipe.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Localidade</div>
                    <div className="font-semibold text-white">{schoolInfo.endereco}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Telefone e WhatsApp</div>
                    <div className="font-semibold text-white">{schoolInfo.telefone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mail Institucional</div>
                    <div className="font-semibold text-white">{schoolInfo.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card com Botão de Ação Rápida */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 mx-auto sm:mx-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Atendimento Instantâneo via WhatsApp
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Fale diretamente com os coordenadores pedagógicos da escolinha para tirar dúvidas ou reservar a data do treino teste.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/5511987654321?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre a Escola de Futebol Craques do Futuro.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>
                <button
                  onClick={() => handleOpenModal("Aula Experimental Gratuita")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all"
                >
                  Agendar Aula Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        11. FOOTER
        ===================================================================
      */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <SoccerShieldLogo className="w-9 h-9" />
              <div>
                <span className="text-base font-black text-white block">
                  Craques do Futuro
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold">
                  Escola de Futebol • Recife - PE
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="hover:text-white transition-colors">Metodologia</a>
              <a href="#avisos" className="hover:text-white transition-colors">Avisos</a>
              <a href="#horarios" className="hover:text-white transition-colors">Horários</a>
              <a href="#planos" className="hover:text-white transition-colors">Planos</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {schoolInfo.nome}. Todos os direitos reservados.
            </p>
            <p className="text-slate-400">
              {schoolInfo.descricao}
            </p>
          </div>
        </div>
      </footer>

      {/* 
        ===================================================================
        12. MODAL GLOBAL DE AGENDAMENTO (ModalAgendamento.jsx)
        Lógica e fluxo integrados mantendo initialPlan e handleCloseModal
        ===================================================================
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
