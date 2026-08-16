import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { GraduationCap, Award, Calendar, BookOpen, Check } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Qualifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Solid foundations in computer engineering, algorithm design, and computational sciences.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl glass-card p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 shadow-lg ${
                idx === 0
                  ? 'border-indigo-500/50 dark:border-indigo-500/40 ring-1 ring-indigo-500/30'
                  : 'border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/30'
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-600 text-white uppercase tracking-wider">
                    Current Degree
                  </span>
                </div>
              )}

              <div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 inline-flex mb-5">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{item.period}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading mb-2 leading-snug">
                  {item.degree}
                </h3>

                <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400 mb-3">
                  {item.institution}
                </p>

                {/* Score badge */}
                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-xs mb-4">
                  {item.score}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Coursework Tags */}
              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Core Subjects:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
