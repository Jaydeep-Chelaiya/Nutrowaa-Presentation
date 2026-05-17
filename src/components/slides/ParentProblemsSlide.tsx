import React from "react";
import { motion } from "motion/react";
import { Clock, ShoppingCart, UtensilsCrossed, Angry, MessageSquareHeart } from "lucide-react";
import elementImg from "../../assets/img/element-img.jpg";

const scenarios = [
  {
    icon: Clock,
    title: "The Morning Rush",
    desc: "Between getting kids ready and managing work, quality cooking takes a backseat.",
    image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: UtensilsCrossed,
    title: "The Picky Eater",
    desc: 'Preparing "healthy" food children actually enjoy is a daily creative struggle.',
    image: elementImg,
  },
  {
    icon: MessageSquareHeart,
    title: "Balanced Guilt",
    desc: "Working parents often feel the guilt of relying on packaged or quick junk snacks.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2680&auto=format&fit=crop",
  },
];

export default function ParentProblemsSlide() {
  return (
    <div className="slide-content">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <span className="text-nutro-yellow font-bold uppercase tracking-[0.2em] text-xs">Parental Insights</span>
        <h2 className="text-5xl md:text-7xl font-display font-black text-white mt-4">
          The <span className="text-nutro-yellow">Struggle</span> is Real.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
        {scenarios.map((scenario, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
            <div className="absolute inset-0 z-0 bg-zinc-800">
              <img src={scenario.image} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" alt={scenario.title} referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="w-14 h-14 bg-nutro-yellow/10 rounded-2xl flex items-center justify-center mb-6 border border-nutro-yellow/20">
                <scenario.icon size={28} className="text-nutro-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{scenario.title}</h3>
              <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">{scenario.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6">
        <div className="p-3 bg-nutro-green/20 rounded-full shrink-0">
          <MessageSquareHeart className="text-nutro-green" />
        </div>
        <p className="text-sm font-medium italic text-zinc-400">
          "I want to feed my child healthy, but my morning shift starts at 8:00 AM. Nutrowaa would be a lifesaver." <span className="text-zinc-600 block mt-1 not-italic">— Mother of a Grade 2 student</span>
        </p>
      </motion.div>
    </div>
  );
}
