
import React from 'react';

interface PlanStepProps {
  onNext: () => void;
}

export const PlanStep: React.FC<PlanStepProps> = ({ onNext }) => {
  return (
    <div className="animate-in fade-in duration-1000 zoom-in-95">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-gold">Plán našeho večera</h2>
      
      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-rose-900/40 rounded-full flex items-center justify-center text-rose-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-rose-200 mb-2">Gastro-zápletka</h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Večeře pro dva. Možná se blýsknu v kuchyni já, nebo zavoláme profesionální gastro-posily v krabici. Ale slibuju, že tvoje chuťové buňky budou slavit taky.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-emerald-900/40 rounded-full flex items-center justify-center text-emerald-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.829c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-emerald-200 mb-2">Wellness & Doteky</h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Společná koupel při svíčkách, kde se zastaví čas. Potom něžná masáž masážní svíčkou, která se promění v horký olej... a zbytek večera? Ten už je v režii tvých přání. Cokoli si budeš přát, to se stane.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button 
          onClick={onNext}
          className="px-10 py-4 bg-gradient-to-r from-rose-800 to-rose-700 hover:from-rose-700 hover:to-rose-600 text-white font-bold rounded-xl shadow-2xl transition-all hover:shadow-rose-900/50"
        >
          Přejít k výběru termínu
        </button>
      </div>
    </div>
  );
};
