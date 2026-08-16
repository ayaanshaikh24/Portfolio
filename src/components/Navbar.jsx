import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import MagneticElement from './MagneticElement';

export default function Navbar({ isDark, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0c]/85 dark:bg-[#0a0a0c]/90 backdrop-blur-md editorial-border-b py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo / Plain text initials */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group font-mono text-xs tracking-wider uppercase flex items-center gap-2 focus:outline-none"
          >
            <span className="font-bold text-slate-900 dark:text-[#ededed] group-hover:text-cyan-400 transition-colors">
              AYAAN SHAIKH
            </span>
            <span className="text-slate-400 dark:text-neutral-500 font-normal">
              // MERN DEVELOPER
            </span>
          </a>

          {/* Right-aligned Minimalist Nav Cluster */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <MagneticElement key={link.name} strength={0.15}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`font-mono text-xs uppercase tracking-wider transition-colors relative py-1 ${
                        isActive
                          ? 'text-cyan-400 font-semibold'
                          : 'text-slate-600 dark:text-[#8e8e99] hover:text-slate-900 dark:hover:text-[#ededed]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-400" />
                      )}
                    </a>
                  </MagneticElement>
                );
              })}
            </nav>

            {/* Separator */}
            <div className="w-[1px] h-3 bg-slate-300 dark:bg-neutral-800" />

            {/* Right Cluster: Theme toggle & Minimal Resume text link */}
            <div className="flex items-center gap-5 font-mono text-xs">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 uppercase tracking-wider text-slate-900 dark:text-[#ededed] hover:text-cyan-400 transition-colors editorial-link"
              >
                <span>[ RESUME ]</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>

              <button
                onClick={toggleDarkMode}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="text-slate-600 dark:text-[#8e8e99] hover:text-slate-900 dark:hover:text-[#ededed] transition-colors p-1"
              >
                {isDark ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="text-slate-600 dark:text-[#8e8e99] hover:text-slate-900 dark:hover:text-[#ededed] p-1"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-slate-900 dark:text-[#ededed] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0c] editorial-border-b px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-mono text-xs uppercase tracking-wider flex items-center justify-between py-2 border-b border-white/5 ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-[#8e8e99] hover:text-[#ededed]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-neutral-600 font-mono">→</span>
                </a>
              );
            })}

            <div className="pt-3 flex items-center justify-between">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-1 py-1"
              >
                <span>[ VIEW RESUME / CV ]</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
