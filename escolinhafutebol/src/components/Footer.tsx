import { SoccerShieldLogo } from "./SoccerIcons";
import { schoolInfo } from "../data/schoolData";

export default function Footer() {
  return (
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
  );
}
