import { SoccerBallSvg } from "./SoccerIcons";
import { schoolInfo } from "../data/schoolData";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

interface HeroProps {
  onOpenModal: (planName?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
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
                onClick={() => onOpenModal("Aula Experimental Gratuita")}
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
  );
}
