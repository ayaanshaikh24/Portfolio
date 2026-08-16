import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ArrowRight, Github, Linkedin, Twitter, Mail, Award, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/5 via-violet-500/5 to-cyan-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-100/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
                <span>Full-Stack Development Intern @ Labmentix</span>
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-teal-300">
                Ayaan Shaikh
              </span>
            </motion.h1>

            {/* Tagline / Subheading */}
            <motion.div variants={itemVariants} className="mt-3 flex items-center gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 font-heading">
                Full-Stack Developer (MERN Stack)
              </span>
            </motion.div>

            {/* Polished Bio */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Computer Engineering student at <strong className="text-slate-900 dark:text-white font-semibold">VPP COE</strong> with proven hands-on full-stack development experience across two internships. Specializing in high-performance <strong className="text-slate-900 dark:text-white font-semibold">MERN stack</strong> applications, scalable REST APIs, and modern reactive UIs. National-level hackathon winner with a passion for turning complex problems into elegant web software.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              {/* Resume Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Ayaan_Shaikh_Resume.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-xs text-indigo-700 dark:text-cyan-300 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800 transition-all duration-200 hover:scale-[1.02]"
                  title="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 transition-all duration-200"
                  title="View Resume in new tab"
                >
                  <Eye className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Social Links & Quick Contact */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono font-semibold">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Git-ayaanshaikh24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#" // TODO: Ayaan, replace with your LinkedIn profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#" // TODO: Ayaan, replace with your Twitter/X profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter/X Profile"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="mailto:ayaanswork24@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-md"
            >
              {/* Decorative background glow behind profile card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Profile / Interactive Code Card */}
              <div className="relative rounded-2xl glass-card p-6 shadow-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                    ayaan-profile.js
                  </span>
                  <div className="w-8" />
                </div>

                {/* Profile Photo Placeholder with stylish avatar badge */}
                <div className="relative mb-5 flex flex-col items-center">
                  <div className="relative w-36 h-36 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-600 shadow-xl overflow-hidden group">
                    <img
                      src="/images/profile.jpg"
                      alt="Ayaan Shaikh"
                      onError={(e) => {
                        // High-tech stylized SVG avatar fallback if image is absent
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%231e1b4b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='38' font-weight='bold' fill='%2338bdf8'%3EAS%3C/text%3E%3C/svg%3E";
                      }}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                      <span className="text-[10px] text-white font-mono">Ayaan Shaikh</span>
                    </div>
                  </div>
                  
                  {/* National Hackathon Winner Floating Pill */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute -bottom-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Quasar 4.0 Winner</span>
                  </motion.div>
                </div>

                {/* Developer Code Snippet */}
                <div className="bg-slate-900/90 dark:bg-slate-950/80 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-1.5 border border-slate-800/80">
                  <p className="text-slate-500 dark:text-slate-500">// Core developer profile</p>
                  <p>
                    <span className="text-pink-400">const</span>{' '}
                    <span className="text-indigo-400">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-400">'Ayaan Shaikh'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">stack:</span>{' '}
                    <span className="text-cyan-400">['MongoDB', 'Express', 'React', 'Node']</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">internships:</span>{' '}
                    <span className="text-yellow-400">['Labmentix', 'Code-Alpha']</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">openToWork:</span>{' '}
                    <span className="text-emerald-400">true</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Tech chips footer */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 font-mono">
                    <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                    <span>MERN Stack</span>
                  </div>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <Sparkles className="w-3 h-3" />
                    Available for projects
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
