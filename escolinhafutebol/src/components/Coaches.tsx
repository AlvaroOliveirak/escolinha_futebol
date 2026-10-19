import { coachesData } from "../data/schoolData";
import { ArrowRight, Award, Sparkles } from "lucide-react";

interface CoachesProps {
  onOpenModal: (planName?: string) => void;
}

// Fotos de futebol dos treinadores (com fallback gracioso)
const coachPhotos: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
};

export default function Coaches({ onOpenModal }: CoachesProps) {
  return (
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
                  onClick={() => onOpenModal(`Treinar com ${coach.nome}`)}
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
  );
}
