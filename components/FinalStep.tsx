
import React from 'react';

interface FinalStepProps {
  selectedDate: string;
}

export const FinalStep: React.FC<FinalStepProps> = ({ selectedDate }) => {
  return (
    <div className="text-center animate-in fade-in zoom-in duration-1000">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-rose-500/20 blur-2xl rounded-full" />
          <svg className="w-20 h-20 text-rose-500 relative z-10" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <h2 className="text-4xl font-bold mb-4 gradient-gold italic">Potvrzeno!</h2>
      <p className="text-xl text-emerald-50 mb-8">
        Takže <span className="text-amber-400 font-bold underline decoration-amber-500/30 underline-offset-8">{selectedDate}</span> platí.
      </p>
      
      <div className="bg-emerald-950/40 p-8 rounded-3xl border border-emerald-500/10 mb-10 shadow-xl">
        <p className="text-emerald-100 leading-relaxed italic text-lg">
          Už teď se usmívám, když si představuju, jak ten večer proběhne. Díky, že jsi do toho se mnou šel. Tenhle "Super Like" stál za to.
        </p>
      </div>

      <p className="text-emerald-500/60 text-xs tracking-wider uppercase">
        Teď už můžeš aplikaci zavřít... nebo si ji prostudovat znovu. 😉
      </p>
    </div>
  );
};
