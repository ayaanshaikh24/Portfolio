import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/experience';
import { Trophy, Award, Flame, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-slate-100/30 dark:bg-slate-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-500">Achievements</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Recognition earned through competitive hackathons, leadership, and proactive tech evangelism.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300 shadow-lg"
            >
              {/* Background amber glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80">
                    {idx === 0 ? (
                      <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    ) : idx === 1 ? (
                      <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <Sparkles className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                  {item.event} • {item.date}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Achievement</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
