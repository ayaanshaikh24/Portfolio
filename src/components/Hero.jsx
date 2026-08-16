import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';
import MagneticElement from './MagneticElement';

export default function Hero() {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const bioRef = useRef(null);
  const ctaRef = useRef(null);
  const metadataRef = useRef(null);

  const [typewriterText, setTypewriterText] = useState('');
  const fullMetadata = '[ FULL-STACK / MERN / OPEN TO WORK ]';

  // Typewriter effect for metadata line
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullMetadata.length) {
        setTypewriterText(fullMetadata.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // GSAP Character stagger & Masked wipe animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Split characters for name
      const nameChars = nameRef.current?.querySelectorAll('.char');
      if (nameChars && nameChars.length > 0) {
        gsap.fromTo(
          nameChars,
          { y: '120%', opacity: 0, rotateZ: 3 },
          {
            y: '0%',
            opacity: 1,
            rotateZ: 0,
            duration: 1,
            stagger: 0.04,
            ease: 'power4.out',
            delay: 0.2,
          }
        );
      }

      // Tagline masked slide-up
      gsap.fromTo(
        taglineRef.current,
        { y: '110%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.6,
        }
      );

      // Bio fade & rise
      gsap.fromTo(
        bioRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.8,
        }
      );

      // CTAs
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          delay: 1.0,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const fullName = "Ayaan Shaikh";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 sm:pt-36 sm:pb-16 editorial-border-b"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Monospace Metadata Line (Typewriter) */}
        <div ref={metadataRef} className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs text-cyan-400 tracking-wider">
            {typewriterText}
            <span className="animate-pulse">_</span>
          </span>
        </div>

        {/* Huge Solid Typography Name (Single column, clamp(3rem, 10vw, 8rem)) */}
        <div className="overflow-hidden py-2">
          <h1
            ref={nameRef}
            className="text-[clamp(3rem,9.5vw,8rem)] font-extrabold tracking-tighter text-slate-900 dark:text-[#ededed] leading-[0.9] flex flex-wrap"
          >
            {fullName.split("").map((char, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <span className="char inline-block will-change-transform">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Tagline masked wipe */}
        <div className="overflow-hidden mt-4 sm:mt-6 mb-6">
          <div ref={taglineRef} className="will-change-transform">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-slate-700 dark:text-[#a0a0ab] tracking-tight">
              Full-Stack Developer crafting scalable MERN applications & rapid hackathon prototypes.
            </h2>
          </div>
        </div>

        {/* Polished Editorial Bio */}
        <div ref={bioRef} className="max-w-2xl">
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#8e8e99] leading-relaxed">
            Computer Engineering student at <strong className="text-slate-900 dark:text-[#ededed] font-medium">VPP COE</strong> with hands-on full-stack development experience across two internships. Currently working at <strong className="text-slate-900 dark:text-[#ededed] font-medium">Labmentix</strong> (May 2026 – Nov 2026) building scalable MERN stack projects, previously at <strong className="text-slate-900 dark:text-[#ededed] font-medium">Code-Alpha</strong>. National-level hackathon winner (Quasar 4.0).
          </p>
        </div>

        {/* Refactored Minimal Bracketed/Underlined Action Links */}
        <div ref={ctaRef} className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
          <MagneticElement strength={0.2}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="editorial-link text-xs sm:text-sm font-mono text-slate-900 dark:text-[#ededed] hover:text-cyan-400 py-1"
            >
              <span>[ VIEW WORK → ]</span>
            </a>
          </MagneticElement>

          <MagneticElement strength={0.2}>
            <a
              href="/resume.pdf"
              download="Ayaan_Shaikh_Resume.pdf"
              className="editorial-link text-xs sm:text-sm font-mono text-slate-600 dark:text-[#8e8e99] hover:text-slate-900 dark:hover:text-[#ededed] py-1"
            >
              <Download className="w-3.5 h-3.5 mr-1 inline" />
              <span>[ DOWNLOAD CV ]</span>
            </a>
          </MagneticElement>

          <MagneticElement strength={0.2}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="editorial-link text-xs sm:text-sm font-mono text-slate-600 dark:text-[#8e8e99] hover:text-slate-900 dark:hover:text-[#ededed] py-1"
            >
              <span>[ GET IN TOUCH ]</span>
            </a>
          </MagneticElement>
        </div>
      </div>

      {/* Bottom Metadata & Monospace Social Row (Tucked into corner) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-16 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-[#686875]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block -ml-3.5" />
          <span>CURRENT: FULL-STACK INTERN @ LABMENTIX</span>
        </div>

        {/* Monospace tucked social links */}
        <div className="flex items-center gap-4 text-slate-600 dark:text-[#8e8e99]">
          <a
            href="https://github.com/Git-ayaanshaikh24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors uppercase"
          >
            GH
          </a>
          <span>/</span>
          <a
            href="#" // TODO: Ayaan, LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors uppercase"
          >
            LI
          </a>
          <span>/</span>
          <a
            href="#" // TODO: Ayaan, Twitter/X URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors uppercase"
          >
            X
          </a>
          <span>/</span>
          <a
            href="mailto:ayaanswork24@gmail.com"
            className="hover:text-cyan-400 transition-colors uppercase"
          >
            MAIL
          </a>
        </div>
      </div>
    </section>
  );
}
