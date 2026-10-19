import { testimonialsData } from "../data/schoolData";
import { Star } from "lucide-react";

// Fotos dos depoimentos
const testimonialAvatars: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  2: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  3: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
};

export default function Testimonials() {
  return (
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
  );
}
