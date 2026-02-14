
import React from 'react';

export const BackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#000000]">
      <style>{`
        @keyframes candle-flicker {
          0%, 100% { opacity: 0.3; transform: scale(1) translate(0, 0); }
          25% { opacity: 0.5; transform: scale(1.1) translate(2px, -2px); }
          50% { opacity: 0.4; transform: scale(0.95) translate(-1px, 1px); }
          75% { opacity: 0.6; transform: scale(1.05) translate(1px, -1px); }
        }
        @keyframes fall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(110vh) translateX(30px) rotate(360deg); opacity: 0; }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.8)); }
        }
        .heart {
          position: absolute;
          color: #7f1d1d; /* Richer Burgundy */
          user-select: none;
          pointer-events: none;
          animation: fall linear infinite;
          text-shadow: 0 0 10px rgba(127, 29, 29, 0.4);
        }
      `}</style>
      
      {/* Hlavní "záře svíčky" v pozadí */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(0,0,0,1)_70%)] animate-[candle-flicker_4s_infinite]"
      />

      {/* Zlaté atmosférické skvrny */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-950/10 rounded-full blur-[120px]" />

      {/* Detailnější plamen svíčky (abstraktní) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] animate-[candle-flicker_3s_infinite]" />
      
      {/* Padající vínová srdíčka - Výraznější */}
      {[...Array(25)].map((_, i) => (
        <div 
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 8 + 7}s`,
            animationDelay: `${Math.random() * 15}s`,
            fontSize: `${Math.random() * 20 + 15}px`,
            opacity: 0
          }}
        >
          ❤
        </div>
      ))}

      {/* Zlatý prach */}
      {[...Array(30)].map((_, i) => (
        <div 
          key={`dust-${i}`}
          className="absolute rounded-full bg-amber-200/30 blur-[1px]"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `fall ${Math.random() * 15 + 15}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}

      {/* Viněta pro hloubku */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};
