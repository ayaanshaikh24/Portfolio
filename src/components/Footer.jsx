import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-black text-cyan-300 text-sm">
                  AS
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Ayaan Shaikh
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Full-Stack Developer specializing in MERN stack architectures, high-performance UI systems, and responsive modern web apps.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-cyan-400 border border-slate-700">
                <Code2 className="w-3.5 h-3.5" />
                Sqrock IT Solutions • Phase 2 Task 4
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Git-ayaanshaikh24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#" // TODO: Ayaan, add your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#" // TODO: Ayaan, add your Twitter/X URL
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:ayaanswork24@gmail.com"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-500 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Ayaan"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-slate-500">
              Email: ayaanswork24@gmail.com<br />
              Phone: +91 9607889594
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Ayaan Shaikh. Built with React & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
