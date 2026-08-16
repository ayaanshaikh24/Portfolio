import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Sparkles, AlertCircle } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl glass-card overflow-hidden border transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl ${
        project.featured
          ? 'border-indigo-500/50 dark:border-indigo-500/40 ring-1 ring-indigo-500/30'
          : 'border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40'
      }`}
    >
      {/* Featured / Placeholder Ribbon */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-md shadow-indigo-600/40">
            <Sparkles className="w-3 h-3" />
            Featured Project
          </span>
        </div>
      )}

      {project.isPlaceholder && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white shadow-md">
            <AlertCircle className="w-3 h-3" />
            Custom Project Slot
          </span>
        </div>
      )}

      {/* Project Image Banner / Mockup */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-900 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            // Elegant SVG tech placeholder fallback if physical image file hasn't been uploaded yet
            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='340' viewBox='0 0 600 340'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e1b4b'/%3E%3Cstop offset='100%25' stop-color='%230f172a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='340' fill='url(%23g)'/%3E%3Ccircle cx='300' cy='140' r='45' fill='%233b82f6' opacity='0.2'/%3E%3Ctext x='50%25' y='145' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' font-weight='bold' fill='%2338bdf8'%3E%26lt%3B%20${encodeURIComponent(project.title.split(':')[0])}%20%2F%26gt%3B%3C/text%3E%3Ctext x='50%25' y='190' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='13' fill='%2394a3b8'%3EMERN Stack Application%3C/text%3E%3C/svg%3E`;
          }}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        
        {/* Category tag on image */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-900/80 text-cyan-300 border border-slate-700/80 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading leading-tight mb-2">
          {project.title}
        </h3>
        
        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">
          {project.tagline}
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features list */}
        {project.features && project.features.length > 0 && (
          <div className="mb-5 space-y-1.5 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Key Highlights:
            </span>
            {project.features.map((feat, i) => (
              <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                <span className="text-indigo-500 font-bold">•</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mt-auto pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 text-white hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            <a
              href={project.demo}
              target={project.demo !== '#' ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (project.demo === '#') {
                  e.preventDefault();
                  alert("Live demo link can be configured in src/data/projects.js");
                }
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
