import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Globe, ArrowRight, Handshake, CalendarCheck } from 'lucide-react';

export default function ProposalSlide() {
  return (
    <div className="slide-content justify-center relative">
       {/* Background Graphic */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nutro-green/5 rounded-full blur-[120px] -z-10" />

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-nutro-green font-bold uppercase tracking-[0.4em] text-xs mb-6"
            >
              Let's Build It
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-black text-white leading-tight mb-8"
            >
              Join the <br />
              <span className="text-nutro-green">Revolution</span>
            </motion.h2>

            <div className="space-y-6 mb-12">
               <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 p-6 bg-zinc-900 border border-zinc-800 rounded-3xl group hover:border-nutro-green/50 transition-all"
               >
                 <div className="w-14 h-14 bg-nutro-green/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Handshake className="text-nutro-green" size={28} />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl">Partnership Model</h4>
                   <p className="text-zinc-500 text-sm">Flexible collaboration models for schools of all sizes.</p>
                 </div>
                 <ArrowRight className="ml-auto text-zinc-700 group-hover:text-nutro-green transition-colors" />
               </motion.div>

               <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 p-6 bg-zinc-900 border border-zinc-800 rounded-3xl group hover:border-nutro-orange/50 transition-all"
               >
                 <div className="w-14 h-14 bg-nutro-orange/20 rounded-2xl flex items-center justify-center shrink-0">
                    <CalendarCheck className="text-nutro-orange" size={28} />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl">1 Week Pilot</h4>
                   <p className="text-zinc-500 text-sm">Experience the Nutrowaa magic with a zero-commitment trial.</p>
                 </div>
                 <ArrowRight className="ml-auto text-zinc-700 group-hover:text-nutro-orange transition-colors" />
               </motion.div>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.6 }}
             className="bg-white rounded-[3rem] p-12 text-zinc-900 shadow-2xl relative overflow-hidden"
          >
             <div className="relative z-10">
               <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8">Contact Information</h3>
               
               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                       <Globe size={20} className="text-zinc-900" />
                    </div>
                    <div>
                       <span className="text-xs font-bold text-zinc-400 block">Website</span>
                       <span className="text-lg font-bold">www.nutrowaa.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                       <Mail size={20} className="text-zinc-900" />
                    </div>
                    <div>
                       <span className="text-xs font-bold text-zinc-400 block">Email</span>
                       <span className="text-lg font-bold">hello@nutrowaa.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                       <Phone size={20} className="text-zinc-900" />
                    </div>
                    <div>
                       <span className="text-xs font-bold text-zinc-400 block">Hotline</span>
                       <span className="text-lg font-bold">+91 98765 43210</span>
                    </div>
                  </div>
               </div>

               <button className="w-full mt-12 py-5 bg-nutro-green text-white font-display font-black text-xl rounded-2xl shadow-xl shadow-nutro-green/30 hover:scale-[1.02] transition-transform active:scale-95">
                 SCHEDULE A MEETING
               </button>
             </div>

             {/* Decorative element */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-100 rounded-full" />
          </motion.div>
       </div>

       <div className="mt-20 pt-10 border-t border-zinc-900 flex justify-between items-center opacity-40">
          <div className="flex items-center gap-8">
            <span className="font-display font-black text-white/50 text-xl tracking-widest">UNICEF</span>
            <span className="font-display font-black text-white/50 text-xl tracking-widest">WHO</span>
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Trusted by India's Top Schools</p>
       </div>
    </div>
  );
}
