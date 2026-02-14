
import React from 'react';

interface GiftStepProps {
  onNext: () => void;
}

export const GiftStep: React.FC<GiftStepProps> = ({ onNext }) => {
  return (
    <div className="animate-in fade-in duration-1000 slide-in-from-right-4">
      <div className="flex justify-center mb-8">
        <div className="p-5 bg-emerald-950/40 rounded-3xl shadow-inner border border-emerald-500/10 relative group">
           <div className="absolute inset-0 bg-amber-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <svg className="w-16 h-16 text-amber-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
           </svg>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-emerald-50 text-center italic">Toto není dárek, toto je gesto...</h2>
      <div className="space-y-5 text-emerald-100/80 mb-10 text-center md:text-left">
        <p className="leading-relaxed">
          Tato klíčenka není jen kus kůže. Pamatuješ si moment, kdy jsi mi dal na Tinderu <span className="text-emerald-400 font-semibold">Super Like</span>? 
          Tehdy jsi začal psát naši knihu, která bude mít spoustu kapitol.
        </p>
        <p className="leading-relaxed">
          A teď ty klíče. Jsou tam proto, abys už nikdy nemusel mrznout v triku před domem, zatímco já se v klidu vracím z procházky. 
        </p>
        <p className="text-amber-400 font-medium italic text-lg text-center">
          Teď už můžeš být u mě doma kdykoli nás budeš chtít vidět.
        </p>
      </div>
      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 hover:shadow-amber-900/40"
        >
          A co nás spolu čeká?
        </button>
      </div>
    </div>
  );
};
