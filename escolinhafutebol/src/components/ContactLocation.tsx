import { schoolInfo } from "../data/schoolData";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface ContactLocationProps {
  onOpenModal: (planName?: string) => void;
}

export default function ContactLocation({ onOpenModal }: ContactLocationProps) {
  return (
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
                onClick={() => onOpenModal("Aula Experimental Gratuita")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all cursor-pointer"
              >
                Agendar Aula Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
