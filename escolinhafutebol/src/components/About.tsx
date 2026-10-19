import { SoccerBallSvg, TacticalPitchGraphic } from "./SoccerIcons";
import { Activity, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
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
  );
}
