import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagneticElement from './MagneticElement';

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
    <footer className="bg-[#08080a] text-slate-400 py-16 font-mono text-xs border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Col 1 */}
          <div className="md:col-span-6 space-y-3">
            <div className="font-bold text-sm text-slate-900 dark:text-[#ededed] uppercase">
              AYAAN SHAIKH
            </div>
            <p className="text-slate-500 dark:text-[#686875] max-w-md leading-relaxed text-xs">
              Full-Stack Developer (MERN Stack) • VPP COE Computer Engineering • Quasar 4.0 Hackathon Winner.
            </p>
            <div className="pt-2 text-[11px] text-cyan-400">
              SQROCK IT SOLUTIONS // PHASE 2 TASK 4
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-slate-500 dark:text-[#686875] uppercase text-[11px] mb-2">
              // INDEX
            </div>
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 dark:text-[#8e8e99] hover:text-cyan-400 transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Outbound */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-slate-500 dark:text-[#686875] uppercase text-[11px] mb-2">
              // EXTERNAL
            </div>
            <div className="flex flex-col space-y-1.5">
              <a
                href="https://github.com/ayaanshaikh24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayaan-shaikh-094b22331"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="mailto:ayaanswork24@gmail.com"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <span>EMAIL</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-slate-500 dark:text-[#686875] text-[11px]">
          <div>
            © {new Date().getFullYear()} AYAAN SHAIKH. KINETIC EDITORIAL PORTFOLIO.
          </div>

          <MagneticElement strength={0.2}>
            <button
              onClick={scrollToTop}
              className="editorial-link uppercase text-slate-900 dark:text-[#ededed] hover:text-cyan-400"
            >
              [ BACK TO TOP ↑ ]
            </button>
          </MagneticElement>
        </div>
      </div>
    </footer>
  );
}
