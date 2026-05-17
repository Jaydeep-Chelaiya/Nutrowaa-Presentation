import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Smile, Heart, Users } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs. Sharma',
    role: 'Working Mother',
    text: 'My son used to bring back his tiffin full. With Nutrowaa, his box is empty everyday. He loves the Paneer Wraps!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Dr. Patel',
    role: 'Paediatrician',
    text: 'The calorie mapping and focus on micronutrients is exactly what Indian school children need right now.',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop'
  }
];

export default function VisionSlide() {
  return (
    <div className="slide-content justify-center overflow-hidden">
      <div className="relative text-center max-w-4xl mx-auto mb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-20 h-20 bg-nutro-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
        >
          <Quote className="text-white fill-current" size={32} />
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter"
        >
          "Healthy children create <span className="text-nutro-green">stronger</span> nations."
        </motion.h2>

        <motion.div
           initial={{ width: 0 }}
           animate={{ width: '100px' }}
           className="h-1.5 bg-nutro-green mx-auto rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] flex gap-6 items-start relative group"
          >
            <div className="absolute top-6 right-8 flex gap-1">
               {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-nutro-yellow text-nutro-yellow" />)}
            </div>

            <img 
               src={t.avatar} 
               className="w-20 h-20 rounded-2xl object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
               alt={t.name}
               referrerPolicy="no-referrer"
            />
            
            <div className="flex-1">
              <h4 className="text-white font-bold text-xl mb-1">{t.name}</h4>
              <p className="text-nutro-green text-xs font-bold uppercase tracking-widest mb-4">{t.role}</p>
              <p className="text-zinc-400 italic leading-relaxed text-sm">"{t.text}"</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-20 flex justify-center items-center gap-10"
      >
        <div className="text-center">
          <p className="text-4xl font-display font-black text-white">5,000+</p>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Happy Students</p>
        </div>
        <div className="h-10 w-px bg-zinc-800" />
        <div className="text-center">
          <p className="text-4xl font-display font-black text-white">12+</p>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Partner Schools</p>
        </div>
        <div className="h-10 w-px bg-zinc-800" />
        <div className="text-center">
          <p className="text-4xl font-display font-black text-white">1M+</p>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Meals Served</p>
        </div>
      </motion.div>
    </div>
  );
}
