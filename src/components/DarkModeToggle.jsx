import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DarkModeToggle({ isDark, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-amber-400 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 border border-slate-300/60 dark:border-slate-700/60 transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 fill-amber-400/20" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 fill-indigo-600/20" />
        )}
      </motion.div>
    </button>
  );
}
