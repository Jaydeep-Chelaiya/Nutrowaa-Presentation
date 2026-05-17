import React from 'react';
import { motion } from 'motion/react';
import { School, LineChart, Users, Star, CheckCheck, Landmark } from 'lucide-react';

const schoolBenefits = [
  { icon: LineChart, title: 'Higher Academic Score', desc: 'Well-fed students show 20% higher engagement index.' },
  { icon: Users, title: 'Community Trust', desc: 'Parents prefer schools that prioritize holistic wellness.' },
  { icon: Landmark, title: 'Brand Value', desc: 'Establish your school as a Tier-1 healthy campus.' },
  { icon: CheckCheck, title: 'Zero Hassle', desc: 'We manage everything—logistics, hygiene, and payments.' },
];

export default function SchoolBenefitsSlide() {
  return (
    <div className="slide-content justify-center">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div>
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-nutro-orange font-bold uppercase tracking-[0.3em] text-xs mb-4"
             >
               Strategic Partnership
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-5xl md:text-7xl font-display font-black text-white leading-tight"
             >
               Elevating Your <span className="text-nutro-orange">School Identity</span>
             </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-3xl"
              >
                <div className="w-12 h-12 bg-nutro-orange/10 rounded-2xl flex items-center justify-center shrink-0 border border-nutro-orange/20">
                  <benefit.icon className="text-nutro-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{benefit.title}</h4>
                  <p className="text-zinc-500 text-sm leading-snug">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5 }}
           className="relative w-full lg:w-[480px] bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <School size={300} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-10 tracking-tight">The "Healthy Campus" <br /><span className="text-nutro-orange">Scorecard</span></h3>
          
          <div className="space-y-10">
            <div className="space-y-3">
               <div className="flex justify-between items-end">
                 <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Attendance Boost</span>
                 <span className="text-3xl font-display font-black text-white">+15%</span>
               </div>
               <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-nutro-orange" />
               </div>
            </div>

            <div className="space-y-3">
               <div className="flex justify-between items-end">
                 <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Post-Lunch Focus</span>
                 <span className="text-3xl font-display font-black text-white">+40%</span>
               </div>
               <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="h-full bg-nutro-orange" />
               </div>
            </div>

            <div className="space-y-3">
               <div className="flex justify-between items-end">
                 <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Parent Satisfaction</span>
                 <span className="text-3xl font-display font-black text-white">9/10</span>
               </div>
               <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} className="h-full bg-nutro-orange" />
               </div>
            </div>
          </div>

          <div className="mt-12 p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
             <Star className="text-nutro-yellow fill-nutro-yellow" />
             <p className="text-xs text-zinc-400 italic">"The partnership with Nutrowaa transformed our student performance metrics in just one term."</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
