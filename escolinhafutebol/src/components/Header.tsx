import { useState } from "react";
import { SoccerShieldLogo, SoccerBallSvg } from "./SoccerIcons";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenModal: (planName?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
            onClick={() => onOpenModal("Aula Experimental Gratuita")}
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
                onOpenModal("Aula Experimental Gratuita");
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
  );
}
