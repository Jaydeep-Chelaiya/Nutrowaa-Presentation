import React from 'react';
import { motion } from 'motion/react';
import { Sandwich, Soup, Salad, Carrot, Leaf, Zap, Fish, Croissant } from 'lucide-react';
import { cn } from '../../lib/utils';

const ageCategories = [
  {
    range: 'Preschool (3–6)',
    desc: 'Soft textured, easy to chew, fun shapes, focused on calcium & brain growth.',
    menu: ['Mini Paneer Wraps', 'Moong Dal Idli', 'Fruity Yogurt', 'Vegetable Poha'],
    icon: Leaf,
    color: 'bg-nutro-green/10 border-nutro-green/20'
  },
  {
    range: 'Primary (7–12)',
    desc: 'Balanced carbs & proteins for steady classroom energy and concentration.',
    menu: ['Millet Thepla Rolls', 'Vegetable Pulav', 'Sprouts Mix', 'Stuffed Paratha'],
    icon: Zap,
    color: 'bg-nutro-yellow/10 border-nutro-yellow/20'
  },
  {
    range: 'Teenagers (13–18)',
    desc: 'High protein & fiber for rapid growth spurts and sports performance.',
    menu: ['Quinoa Paneer Salad', 'Whole Wheat Burger', 'Dry Fruit Box', 'Lentil Pasta'],
    icon: Fish,
    color: 'bg-nutro-orange/10 border-nutro-orange/20'
  }
];

export default function MealPlansSlide() {
  return (
    <div className="slide-content">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-nutro-green font-bold text-xs uppercase tracking-[0.4em]"
        >
          Taste the Balance
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-display font-black text-white"
        >
          Age-Wise <span className="text-nutro-green italic">Gourmet</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 flex-1">
        {ageCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className={cn("p-8 rounded-3xl border flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-zinc-900/40", cat.color)}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/5">
                <cat.icon size={28} className={cn(idx === 0 ? 'text-nutro-green' : idx === 1 ? 'text-nutro-yellow' : 'text-nutro-orange')} />
              </div>
              <span className="text-3xl font-display font-black text-white/10 group-hover:text-white/40 transition-colors">0{idx + 1}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">{cat.range}</h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed italic">
              {cat.desc}
            </p>

            <div className="mt-auto space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block font-mono">Sample Weekly Highlights</span>
              {cat.menu.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0 group-hover:border-white/10">
                   <div className="w-1.5 h-1.5 rounded-full bg-nutro-green" />
                   <span className="text-sm font-medium text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {['Chef Curated', 'Regional Flavors', 'Nutrient Dense', 'Eco-Packaging'].map((tag, i) => (
           <div key={i} className="py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-center">
             <span className="text-xs font-bold text-zinc-400 tracking-tighter uppercase">{tag}</span>
           </div>
        ))}
      </motion.div>
    </div>
  );
}
