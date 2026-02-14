
import React, { useState } from 'react';
import { WelcomeStep } from './components/WelcomeStep';
import { GiftStep } from './components/GiftStep';
import { PlanStep } from './components/PlanStep';
import { DateStep } from './components/DateStep';
import { FinalStep } from './components/FinalStep';
import { BackgroundDecor } from './components/BackgroundDecor';

enum Step {
  WELCOME = 'WELCOME',
  GIFT = 'GIFT',
  PLAN = 'PLAN',
  DATE = 'DATE',
  FINAL = 'FINAL'
}

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.WELCOME);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const nextStep = () => {
    switch (currentStep) {
      case Step.WELCOME: setCurrentStep(Step.GIFT); break;
      case Step.GIFT: setCurrentStep(Step.PLAN); break;
      case Step.PLAN: setCurrentStep(Step.DATE); break;
      case Step.DATE: setCurrentStep(Step.FINAL); break;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden selection:bg-emerald-500/30">
      <BackgroundDecor />
      
      <main className="relative z-10 w-full max-w-2xl bg-[#010a08]/70 p-8 md:p-12 rounded-3xl border border-emerald-500/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-1000">
        {currentStep === Step.WELCOME && <WelcomeStep onNext={nextStep} />}
        {currentStep === Step.GIFT && <GiftStep onNext={nextStep} />}
        {currentStep === Step.PLAN && <PlanStep onNext={nextStep} />}
        {currentStep === Step.DATE && (
          <DateStep 
            onSelect={(date) => {
              setSelectedDate(date);
              nextStep();
            }} 
          />
        )}
        {currentStep === Step.FINAL && <FinalStep selectedDate={selectedDate!} />}
      </main>

      <footer className="absolute bottom-6 z-10 text-emerald-900/40 text-[10px] tracking-[0.4em] uppercase font-light">
        Soukromá Pozvánka &bull; 2025
      </footer>
    </div>
  );
};

export default App;
