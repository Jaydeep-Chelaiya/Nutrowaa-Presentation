import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { AlertCircle, TrendingUp, UserX, EyeOff } from 'lucide-react';

const obesityData = [
  { name: '2010', value: 3.4 },
  { name: '2015', value: 5.2 },
  { name: '2020', value: 8.4 },
  { name: '2025 (Est)', value: 12.1 },
];

const deficiencyData = [
  { name: 'Micronutrient Deficiency', value: 68, color: '#f97316' },
  { name: 'Anemia in Kids', value: 53, color: '#ef4444' },
  { name: 'Poor Concentration', value: 45, color: '#facc15' },
];

export default function ProblemSlide() {
  return (
    <div className="slide-content justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-nutro-orange font-bold uppercase tracking-widest text-sm mb-4"
          >
            <AlertCircle size={18} /> The Indian Context
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-black text-white mb-6 leading-tight"
          >
            The <span className="text-nutro-orange">Silent Crisis</span> in Our Classrooms
          </motion.h2>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="w-12 h-12 bg-nutro-orange/20 rounded-full flex items-center justify-center shrink-0">
                <TrendingUp className="text-nutro-orange" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Rising Obesity</h4>
                <p className="text-zinc-400 text-sm italic">"India ranks 2nd globally in childhood obesity" - UNICEF Report</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="w-12 h-12 bg-nutro-yellow/20 rounded-full flex items-center justify-center shrink-0">
                <EyeOff className="text-nutro-yellow" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Vision & Cognitive Decline</h4>
                <p className="text-zinc-400 text-sm">Poor micronutrient intake linked to early-age specs and memory lapses.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                <UserX className="text-red-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Frequent Illness</h4>
                <p className="text-zinc-400 text-sm">Weak immunity leads to high absenteeism during weather changes.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-zinc-900 overflow-hidden rounded-3xl border border-zinc-800 p-8 shadow-2xl relative"
        >
          <div className="mb-8">
            <h3 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4">Childhood Obesity Growth (% in India)</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={obesityData}>
                  <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#f97316' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="value" fill="#f97316" radius={[6, 6, 0, 0]}>
                    {obesityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#ea580c' : '#f97316'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
             <h3 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-6">Student Health Deficiencies (NFHS-5 Data)</h3>
             <div className="space-y-6">
                {deficiencyData.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-zinc-500">{item.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: 0.8 + idx * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-zinc-800 text-[10px] text-zinc-600 flex justify-between font-mono">
             <span>Source: UNICEF / NFHS-5</span>
             <span>Report ID: NRW-2026-HC</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
