import React from 'react';
import { motion } from 'motion/react';
import { Brain, Zap, ShieldCheck, Trophy, CalendarCheck, Smile, Activity, Dumbbell } from 'lucide-react';
import { cn } from '../../lib/utils';

const benefits = [
  { icon: Brain, label: 'Cognitive Boost', desc: 'Improved memory and reaction time in class', color: 'text-nutro-green' },
  { icon: Activity, label: 'Stable Energy', desc: 'No sugar spikes, sustained focus all day', color: 'text-nutro-yellow' },
  { icon: ShieldCheck, label: 'Strong Immunity', desc: '50% reduction in seasonal sick days', color: 'text-nutro-orange' },
  { icon: Trophy, label: 'Sports Apex', desc: 'Faster recovery and better physical growth', color: 'text-nutro-green' },
];

const comparisons = [
  { type: 'Poor Diet', effects: ['Brain Fog', 'Afternoon Fatigue', 'Low Attention Span'], color: 'bg-red-500/10 border-red-500/20' },
  { type: 'Balanced Diet', effects: ['Sharp Memory', 'Consistent Energy', 'Active Engagement'], color: 'bg-nutro-green/10 border-nutro-green/20' },
];

export default function NutritionBenefitsSlide() {
  return (
    <div className="slide-content">
      <div className="mb-12 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 bg-nutro-green/10 rounded-full text-nutro-green font-bold text-xs tracking-widest uppercase mb-4"
        >
          Competitive Advantage
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-black text-white leading-tight"
        >
          Why Nutrition <span className="text-nutro-green">Matters</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl card-hover-effect flex flex-col items-center text-center group"
          >
            <div className={cn("p-4 rounded-2xl bg-zinc-800 mb-6 group-hover:bg-zinc-700 transition-colors", benefit.color)}>
              <benefit.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{benefit.label}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {comparisons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.2 }}
            className={cn("p-8 rounded-3xl border relative overflow-hidden", item.color)}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              {idx === 0 ? <Smile size={100} className="rotate-180" /> : <Smile size={100} />}
            </div>
            <h4 className="text-2xl font-display font-black text-white mb-6 uppercase tracking-tighter">{item.type}</h4>
            <ul className="space-y-4">
              {item.effects.map((effect, eIdx) => (
                <li key={eIdx} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <div className={cn("w-2 h-2 rounded-full", idx === 0 ? "bg-red-400" : "bg-nutro-green")} />
                  {effect}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
