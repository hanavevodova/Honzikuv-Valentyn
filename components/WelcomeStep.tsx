
import React from 'react';

interface WelcomeStepProps {
  onNext: () => void;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <div className="text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold">
        (po)Valentýnská romantika
      </h1>
      <p className="text-lg text-emerald-100/90 leading-relaxed mb-8">
        Vítej ve své osobní aplikaci <span className="text-emerald-400 italic">(po)Valentýnská romantika</span>. 
        Naskenování QR kódu na dárkové taštičce byl tvůj první krok. Právě jsi odemkl společný zážitek, který nás čeká.
      </p>
      <p className="text-emerald-400/80 mb-10 italic">
        A protože 14. 2. nejsme spolu, musíme si to vynahradit se vší parádou.
      </p>
      <button 
        onClick={onNext}
        className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
      >
        Pokračovat k tajemství...
      </button>
    </div>
  );
};
