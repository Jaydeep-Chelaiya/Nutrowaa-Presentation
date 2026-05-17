import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Heart } from 'lucide-react';

export default function CoverSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden flex items-center justify-center bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-zinc-900">
        <img 
          src="https://images.unsplash.com/photo-1540317580114-ed6853f90135?q=80&w=2670&auto=format&fit=crop" 
          alt="Happy Indian kids eating healthy meals"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="inline-flex items-center gap-2 px-4 py-2 bg-nutro-green/20 border border-nutro-green/30 rounded-full text-nutro-green-light font-bold text-sm uppercase tracking-widest mb-8"
        >
          <Leaf size={16} /> 
          Nutrowaa - Indian Food Revolution
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-7xl md:text-9xl font-display font-black text-white mb-6 tracking-tighter leading-none"
        >
          Healthy Kids.<br />
          <span className="text-nutro-green">Smarter</span> Futures.
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-3xl text-zinc-300 font-medium mb-12 tracking-tight"
        >
          Stress-Free Mornings & Balanced School Meals for India's Future Stars.
        </motion.p>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <ShieldCheck className="text-nutro-green" />
            <span className="text-white font-bold">100% Hygienic</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <Leaf className="text-nutro-yellow" />
            <span className="text-white font-bold">Chef Prepared</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <Heart className="text-nutro-orange" />
            <span className="text-white font-bold">Nutrient Dense</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical rails */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden lg:block" />
    </div>
  );
}
