import { noticesData, schoolInfo } from "../data/schoolData";
import { ArrowRight, Bell, Clock, Sparkles } from "lucide-react";

interface NoticesProps {
  onOpenModal: (planName?: string) => void;
}

export default function Notices({ onOpenModal }: NoticesProps) {
  return (
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
                  onClick={() => onOpenModal("Aula Experimental Gratuita")}
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
  );
}
