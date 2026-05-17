import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Menu, MessageSquare, Play, X, ExternalLink } from 'lucide-react';
import { SLIDES, SlideId } from '../types';
import { cn } from '../lib/utils';

// Lazy load slides
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import NutritionBenefitsSlide from './slides/NutritionBenefitsSlide';
import ParentProblemsSlide from './slides/ParentProblemsSlide';
import NutrowaaSolutionSlide from './slides/NutrowaaSolutionSlide';
import MealPlansSlide from './slides/MealPlansSlide';
import SchoolBenefitsSlide from './slides/SchoolBenefitsSlide';
import SafetySlide from './slides/SafetySlide';
import VisionSlide from './slides/VisionSlide';
import ProposalSlide from './slides/ProposalSlide';

const SLIDE_COMPONENTS: Record<SlideId, React.FC> = {
  cover: CoverSlide,
  problem: ProblemSlide,
  'why-nutrition': NutritionBenefitsSlide,
  'parent-problems': ParentProblemsSlide,
  'introducing-nutrowaa': NutrowaaSolutionSlide,
  'meal-plans': MealPlansSlide,
  'school-benefits': SchoolBenefitsSlide,
  safety: SafetySlide,
  vision: VisionSlide,
  proposal: ProposalSlide,
};

export default function Presentation() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentIdx < SLIDES.length - 1) {
      setDirection(1);
      setCurrentIdx(currentIdx + 1);
    }
  };

  const prevSlide = () => {
    if (currentIdx > 0) {
      setDirection(-1);
      setCurrentIdx(currentIdx - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx]);

  const currentSlide = SLIDES[currentIdx];
  const CurrentSlideComponent = SLIDE_COMPONENTS[currentSlide.id];

  return (
    <div className="relative w-screen h-screen bg-zinc-950 overflow-hidden flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-40 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-nutro-green rounded-full flex items-center justify-center p-2">
            <span className="font-display font-bold text-white text-xl">N</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white hidden md:block">Nutrowaa</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowMenu(true)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
          >
            <Menu size={20} />
          </button>
          <div className="h-6 w-px bg-zinc-800 mx-2" />
          <button 
            onClick={() => setShowNotes(!showNotes)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
              showNotes ? "bg-nutro-green text-white" : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
            )}
          >
            <MessageSquare size={14} />
            {showNotes ? "Hide Notes" : "Show Notes"}
          </button>
        </div>
      </nav>

      {/* Main Slide Area */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIdx}
            custom={direction}
            initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <footer className="h-16 flex items-center justify-between px-6 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800 z-40">
        <div className="text-xs font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-3">
          <span className="text-nutro-green font-bold">{String(currentIdx + 1).padStart(2, '0')}</span>
          <div className="w-12 h-px bg-zinc-800" />
          <span>{currentSlide.title}</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentIdx === 0}
            className="p-2 hover:bg-zinc-800 disabled:opacity-30 rounded-full text-zinc-300 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="text-sm font-mono text-zinc-500">
            {currentIdx + 1} / {SLIDES.length}
          </div>
          <button 
            onClick={nextSlide}
            disabled={currentIdx === SLIDES.length - 1}
            className="p-2 hover:bg-zinc-800 disabled:opacity-30 rounded-full text-zinc-300 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </footer>

      {/* Presenter Notes Panel */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            className="fixed bottom-16 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-6 z-50 h-48 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto">
              <h4 className="text-nutro-green text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <MessageSquare size={14} /> Presenter Notes
              </h4>
              <p className="text-zinc-300 leading-relaxed italic text-lg">
                {currentSlide.presenterNotes}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Navigation Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-display font-bold text-3xl text-white">Presentation Outline</h2>
              <button 
                onClick={() => setShowMenu(false)}
                className="p-3 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentIdx(idx);
                    setShowMenu(false);
                  }}
                  className={cn(
                    "group flex items-center gap-6 p-4 rounded-xl text-left transition-all",
                    currentIdx === idx 
                      ? "bg-nutro-green text-white shadow-lg shadow-nutro-green/20" 
                      : "hover:bg-white/5 text-zinc-400 hover:text-white"
                  )}
                >
                  <span className="text-2xl font-display font-black opacity-20 group-hover:opacity-100 transition-opacity">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">{slide.title}</h3>
                    <p className="text-xs opacity-60 uppercase tracking-tighter">Slide {idx + 1}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
