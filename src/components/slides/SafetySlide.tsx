import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ThermometerSnowflake, Droplets, UserCheck, PackageCheck, Zap } from "lucide-react";
import elementImg from "../../assets/img/element-img.jpg";

const safetyPoints = [
  { icon: ShieldCheck, title: "Zero-Contact Prep", desc: "Automated packing and hygienic human oversight." },
  { icon: ThermometerSnowflake, title: "Cold Chain Logistics", desc: "Temperature-controlled transit for peak freshness." },
  { icon: Droplets, title: "Potable Water Control", desc: "RO purified water for all cooking and washing." },
  { icon: PackageCheck, title: "Eco-Seal Packs", desc: "Leek-proof, BPA-free, sustainable packaging." },
];

export default function SafetySlide() {
  return (
    <div className="slide-content">
      <div className="flex flex-col lg:flex-row gap-12 items-center flex-1">
        <div className="w-full lg:w-2/5 order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-3 py-1 bg-nutro-yellow/20 rounded-full text-nutro-yellow font-bold text-xs uppercase tracking-widest mb-6">
            <Zap size={14} /> The Nutro-Standard
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-display font-black text-white leading-[0.8] mb-12">
            Safety <br />
            <span className="text-nutro-yellow">Obsessed</span>
          </motion.h2>

          <div className="space-y-6">
            {safetyPoints.map((point, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-nutro-yellow/40 transition-colors">
                  <point.icon className="text-zinc-400 group-hover:text-nutro-yellow transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{point.title}</h4>
                  <p className="text-zinc-500 text-sm leading-tight">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: 20 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1 }} className="w-full lg:w-3/5 relative order-1 lg:order-2">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-800">
            <img src={elementImg} className="w-full h-full object-cover grayscale opacity-60" alt="Industrial Kitchen Hygiene" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-tr from-nutro-yellow/30 via-transparent to-transparent mix-blend-overlay" />

            {/* Overlay labels */}
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <div className="flex gap-4">
                <div className="px-6 py-4 bg-white items-center gap-3 rounded-2xl shadow-xl flex">
                  <UserCheck className="text-zinc-900" />
                  <div className="leading-none">
                    <span className="text-[10px] uppercase font-black text-zinc-400 block mb-1">Kitchen Status</span>
                    <span className="text-zinc-900 font-bold">BIO-SECURE ACTIVE</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-zinc-900/90 backdrop-blur-md border border-white/20 items-center gap-3 rounded-2xl flex">
                  <ThermometerSnowflake className="text-white" />
                  <div className="leading-none">
                    <span className="text-[10px] uppercase font-black text-zinc-400 block mb-1">Cold Chain</span>
                    <span className="text-white font-bold">4.2°C CONSTANT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
