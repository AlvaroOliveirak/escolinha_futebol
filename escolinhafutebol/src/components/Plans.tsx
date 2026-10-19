import { plansData } from "../data/schoolData";
import { SoccerBallSvg } from "./SoccerIcons";
import { ArrowRight, Check, Sparkles, Trophy } from "lucide-react";

interface PlansProps {
  onOpenModal: (planName?: string) => void;
}

export default function Plans({ onOpenModal }: PlansProps) {
  return (
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
                  onClick={() => onOpenModal(plano.nome)}
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
            onClick={() => onOpenModal("Aula Experimental Gratuita")}
            className="shrink-0 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
          >
            <SoccerBallSvg className="w-4 h-4 text-slate-950" />
            <span>Agendar Minha Aula Grátis</span>
          </button>
        </div>
      </div>
    </section>
  );
}
