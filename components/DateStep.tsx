
import React from 'react';

interface DateStepProps {
  onSelect: (date: string) => void;
}

export const DateStep: React.FC<DateStepProps> = ({ onSelect }) => {
  return (
    <div className="animate-in fade-in duration-1000 slide-in-from-left-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-amber-200">Kdy spolu oslavíme náš večer?</h2>
      <p className="text-emerald-100/80 text-center mb-10 leading-relaxed">
        Vyber si termín, který se ti nejvíc hodí.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          onClick={() => onSelect('Pondělí 16. 2.')}
          className="group relative overflow-hidden p-6 bg-emerald-950/20 border border-emerald-800/30 rounded-2xl hover:border-amber-500/50 hover:bg-emerald-900/30 transition-all text-left"
        >
          <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          </div>
          <span className="block text-2xl font-bold text-white mb-1">Pondělí 16. 2.</span>
          <span className="text-emerald-400/60 text-sm italic">Začátek týdne ve velkém stylu...</span>
        </button>

        <button 
          onClick={() => onSelect('Sobota 21. 2.')}
          className="group relative overflow-hidden p-6 bg-emerald-950/20 border border-emerald-800/30 rounded-2xl hover:border-amber-500/50 hover:bg-emerald-900/30 transition-all text-left"
        >
          <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          </div>
          <span className="block text-2xl font-bold text-white mb-1">Sobota 21. 2.</span>
          <span className="text-emerald-400/60 text-sm italic">Sobotní relaxace...</span>
        </button>
      </div>
      
      <p className="text-center text-emerald-500/60 mt-12 text-sm italic">
        stačí kliknout a já už se o zbytek postarám
      </p>
    </div>
  );
};
