import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, allSkillsList } from '../data/skills';
import { Code2, Layers, Database, Wrench, Sparkles, Check } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case 'Frameworks & Libraries':
        return <Layers className="w-5 h-5 text-cyan-500" />;
      case 'Database & Backend':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'Tools & DevOps':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Tech Stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of the programming languages, full-stack frameworks, databases, and tooling I use in daily development.
          </p>
        </motion.div>

        {/* Quick Tag Cloud Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-12"
        >
          {allSkillsList.map((skill, index) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.06, y: -2 }}
              className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-sm cursor-default flex items-center gap-1.5 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-cyan-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', 'Programming Languages', 'Frameworks & Libraries', 'Database & Backend', 'Tools & DevOps'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Categorized Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {filteredCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-lg relative overflow-hidden group hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                      {cat.category}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-indigo-600 dark:text-cyan-400 font-semibold">
                          {skill.proficiency}
                        </span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
