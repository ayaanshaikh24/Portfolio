import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Award, GraduationCap, CheckCircle2, Terminal, Cpu, Rocket } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Internships Completed / Active", value: "2+", icon: Briefcase, color: "text-indigo-500" },
    { label: "National Hackathons Won", value: "1st", icon: Award, color: "text-amber-500" },
    { label: "Engineering CGPA (VPP COE)", value: "7.8", icon: GraduationCap, color: "text-cyan-500" },
    { label: "Core Stack", value: "MERN", icon: Code, color: "text-emerald-500" },
  ];

  const highlights = [
    "Full-Stack MERN specialist (MongoDB, Express.js, React, Node.js) with production internship experience",
    "Proven track record of architecting scalable web applications, REST APIs, and automated scrapers",
    "Winner of Quasar 4.0 National Hackathon; represented VPP COE across competitive hackathons",
    "Advocate for modern web frameworks, fast edge architecture, and clean, maintainable codebases"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            <Rocket className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Ayaan Shaikh</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A developer dedicated to engineering robust, high-performance web systems and intuitive user interfaces.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-5 sm:p-6 text-center border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="inline-flex p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-500" />
                <span>Full-Stack Engineer with Practical Internship Mastery</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a Computer Engineering student at <strong>Vasantdada Patil Pratishthan's College of Engineering (VPP COE)</strong> with a strong academic foundation (7.8 CGPA) and real-world engineering experience. Currently, I work as a <strong>Full-Stack Development Intern at Labmentix</strong>, delivering production-ready MERN applications and freelancing part-time on market-ready products.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Prior to this, I honed my abilities as a <strong>Full-Stack Intern at Code-Alpha</strong>, developing scalable JavaScript backends, responsive user interfaces, and optimizing end-to-end API response cycles. Beyond client and corporate work, I actively lead hackathon teams, winning the national <strong>Quasar 4.0 Hackathon</strong> and representing my college in rapid engineering challenges.
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Key Strengths & Focus:
                </h4>
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Highlights / Architecture Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-3xl bg-gradient-to-br from-indigo-900/90 via-slate-900 to-slate-950 p-6 sm:p-8 text-white border border-indigo-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-600/30 border border-indigo-400/30">
                  <Cpu className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Engineering Philosophy</h4>
                  <p className="text-xs text-slate-400">Scale, Speed & Clean Architecture</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <p className="font-semibold text-white mb-1">01. Robust API & Schema Design</p>
                  <p className="text-xs text-slate-400">Crafting predictable REST APIs and optimized MongoDB database indexing for sub-second query performance.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <p className="font-semibold text-white mb-1">02. Modern React & UI Ergonomics</p>
                  <p className="text-xs text-slate-400">Building modular component hierarchies, reusable hooks, and accessible responsive interfaces.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <p className="font-semibold text-white mb-1">03. Rapid Prototyping Under Constraints</p>
                  <p className="text-xs text-slate-400">Proven track record in national hackathons delivering high-impact MVP software from concept to deployment.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
