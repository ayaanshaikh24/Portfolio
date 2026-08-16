import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-100/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Hands-on professional engineering experience building production-level full-stack applications.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-800/40" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.duration}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10"
              >
                {/* Timeline Icon Node */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-600/20 z-10">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                          {exp.role}
                        </h3>
                        {exp.status === 'Current' && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold text-indigo-600 dark:text-cyan-400 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1 font-mono">
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-6">
                    {exp.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-cyan-400 shrink-0 mt-1" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mr-1">
                      Stack:
                    </span>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
