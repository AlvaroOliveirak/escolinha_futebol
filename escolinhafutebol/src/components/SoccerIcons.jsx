import React from "react";

// Escudo Oficial da Escola Craques do Futuro
export function SoccerShieldLogo({ className = "w-10 h-10" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#052e16" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        
        {/* Contorno externo do escudo */}
        <path
          d="M50 5 L88 20 C88 58 72 82 50 95 C28 82 12 58 12 20 Z"
          fill="url(#shieldGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
        />

        {/* Linha interna dourada */}
        <path
          d="M50 11 L82 24 C82 54 68 76 50 88 C32 76 18 54 18 24 Z"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* Listras de fundo estilo clube */}
        <path d="M38 18 L38 82 C42 85 46 87 50 88 L50 11 C46 13 42 16 38 18 Z" fill="#16a34a" opacity="0.3" />
        <path d="M62 18 L62 82 C58 85 54 87 50 88 L50 11 C54 13 58 16 62 18 Z" fill="#16a34a" opacity="0.3" />

        {/* Bola de Futebol Central */}
        <g transform="translate(50, 48) scale(0.38)">
          <circle cx="0" cy="0" r="45" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          <polygon points="0,-16 15,-5 9,13 -9,13 -15,-5" fill="#1e293b" />
          <line x1="0" y1="-16" x2="0" y2="-43" stroke="#1e293b" strokeWidth="3" />
          <line x1="15" y1="-5" x2="39" y2="-17" stroke="#1e293b" strokeWidth="3" />
          <line x1="9" y1="13" x2="27" y2="34" stroke="#1e293b" strokeWidth="3" />
          <line x1="-9" y1="13" x2="-27" y2="34" stroke="#1e293b" strokeWidth="3" />
          <line x1="-15" y1="-5" x2="-39" y2="-17" stroke="#1e293b" strokeWidth="3" />
        </g>

        {/* Estrelas no topo */}
        <polygon points="50,14 52,18 56,18 53,21 54,25 50,22 46,25 47,21 44,18 48,18" fill="url(#goldGrad)" />
      </svg>
    </div>
  );
}

// Ilustração de Campo de Futebol Tático
export function TacticalPitchGraphic({ className = "w-full h-48" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-900 to-green-950 border border-emerald-500/30 p-4 ${className}`}>
      <svg viewBox="0 0 400 240" className="w-full h-full opacity-60">
        {/* Gramado listrado */}
        <rect x="0" y="0" width="40" height="240" fill="#ffffff" fillOpacity="0.04" />
        <rect x="80" y="0" width="40" height="240" fill="#ffffff" fillOpacity="0.04" />
        <rect x="160" y="0" width="40" height="240" fill="#ffffff" fillOpacity="0.04" />
        <rect x="240" y="0" width="40" height="240" fill="#ffffff" fillOpacity="0.04" />
        <rect x="320" y="0" width="40" height="240" fill="#ffffff" fillOpacity="0.04" />

        {/* Linhas externas do campo */}
        <rect x="20" y="15" width="360" height="210" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" rx="4" />
        {/* Linha de meio-campo */}
        <line x1="200" y1="15" x2="200" y2="225" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />
        {/* Círculo central */}
        <circle cx="200" cy="120" r="35" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />
        <circle cx="200" cy="120" r="3" fill="#ffffff" fillOpacity="0.9" />

        {/* Grande área esquerda */}
        <rect x="20" y="60" width="60" height="120" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />
        {/* Pequena área esquerda */}
        <rect x="20" y="85" width="25" height="70" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />
        {/* Marca do pênalti esquerda */}
        <circle cx="65" cy="120" r="2.5" fill="#ffffff" fillOpacity="0.8" />
        <path d="M 80 95 A 35 35 0 0 1 80 145" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />

        {/* Grande área direita */}
        <rect x="320" y="60" width="60" height="120" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />
        {/* Pequena área direita */}
        <rect x="355" y="85" width="25" height="70" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />
        {/* Marca do pênalti direita */}
        <circle cx="335" cy="120" r="2.5" fill="#ffffff" fillOpacity="0.8" />
        <path d="M 320 95 A 35 35 0 0 0 320 145" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />

        {/* Jogadores táticos demonstrativos */}
        <circle cx="120" cy="80" r="7" fill="#eab308" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="120" cy="160" r="7" fill="#eab308" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="160" cy="120" r="7" fill="#eab308" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="270" cy="100" r="7" fill="#22c55e" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="270" cy="140" r="7" fill="#22c55e" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// Ícone Bola de Futebol
export function SoccerBallSvg({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7" fill="#ffffff" />
      <polygon points="12,8 15.5,10.5 14,14.5 10,14.5 8.5,10.5" fill="currentColor" />
      <line x1="12" y1="8" x2="12" y2="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="15.5" y1="10.5" x2="21.5" y2="9" stroke="currentColor" strokeWidth="1.5" />
      <line x1="14" y1="14.5" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="14.5" x2="6" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8.5" y1="10.5" x2="2.5" y2="9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

