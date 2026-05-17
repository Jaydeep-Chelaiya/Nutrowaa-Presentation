import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Truck, ShieldCheck, Heart, Apple, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const steps = [
  { icon: ChefHat, title: 'Expert Kitchen', desc: 'Centralized state-of-the-art kitchen facility.', color: 'border-nutro-green' },
  { icon: Apple, title: 'Nutrition First', desc: 'Menus designed by child nutritionists.', color: 'border-nutro-orange' },
  { icon: ShieldCheck, title: 'Quality Vault', desc: '3-tier hygiene and safety check protocol.', color: 'border-nutro-yellow' },
  { icon: Truck, title: 'On-Time Doorstep', desc: 'Direct delivery at the school gate.', color: 'border-white' },
];

export default function NutrowaaSolutionSlide() {
  return (
    <div className="slide-content">
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
        <div className="flex-1">
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-xs font-bold uppercase tracking-[0.3em] text-nutro-green mb-4"
          >
            Introducing the ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8"
          >
            Enter<br />
            <span className="text-nutro-green">Nutrowaa</span>
          </motion.h2>

          <div className="space-y-4">
             {['Farm-Fresh Ingredients', 'No Artificial Preservatives', 'Regional Indian Menus', 'Sustainability Focused Packaging'].map((item, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 text-zinc-300 font-medium"
               >
                 <CheckCircle2 size={18} className="text-nutro-green" />
                 {item}
               </motion.div>
             ))}
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="relative w-full lg:w-[500px] aspect-square"
        >
          {/* Animated Flow Circle */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-800 animate-spin-slow" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 bg-nutro-green rounded-full shadow-[0_0_80px_rgba(34,197,94,0.3)] flex flex-col items-center justify-center p-6 text-center transform hover:scale-105 transition-transform cursor-pointer">
              <span className="text-white font-display font-black text-4xl mb-1 italic">NUTRO</span>
              <span className="text-white font-medium text-xs opacity-80 uppercase tracking-widest">Core Ecosystem</span>
            </div>
          </div>

          {/* Orbiting Elements */}
          {steps.map((step, idx) => {
            const angle = (idx * 90) * (Math.PI / 180);
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + idx * 0.2 }}
                style={{ 
                  left: `calc(50% + ${x}px - 40px)`, 
                  top: `calc(50% + ${y}px - 40px)` 
                }}
                className={cn(
                  "absolute w-20 h-20 bg-zinc-900 rounded-2xl border flex items-center justify-center shadow-lg group hover:bg-zinc-800 transition-colors",
                  step.color
                )}
              >
                <step.icon className="text-zinc-400 group-hover:text-white transition-colors" size={32} />
                
                {/* Tooltip-style info */}
                <div className="absolute top-24 w-40 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <h4 className="text-white font-bold text-sm tracking-tight">{step.title}</h4>
                  <p className="text-zinc-500 text-[10px] leading-tight mt-1">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      <div className="mt-auto pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="flex items-center gap-4 border-l border-nutro-green pl-6">
            <span className="text-4xl font-display font-black text-white">0%</span>
            <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Added Sugar & Preservatives</p>
         </div>
         <div className="flex items-center gap-4 border-l border-nutro-orange pl-6">
            <span className="text-4xl font-display font-black text-white">100%</span>
            <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Nutritious Whole Foods</p>
         </div>
         <div className="flex items-center gap-4 border-l border-nutro-yellow pl-6">
            <span className="text-4xl font-display font-black text-white">4.8★</span>
            <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Average Taste Rating</p>
         </div>
      </div>
    </div>
  );
}
