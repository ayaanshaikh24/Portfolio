import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeader({ index, title, subtitle, className = '' }) {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  const words = title.split(' ');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { y: '110%', opacity: 0, rotateZ: 2 },
        {
          y: '0%',
          opacity: 1,
          rotateZ: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <div ref={containerRef} className={`mb-16 md:mb-20 ${className}`}>
      {/* Monospace Index Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 dark:text-cyan-400">
          [ {index} ]
        </span>
        <div className="h-[1px] w-12 bg-slate-300 dark:bg-white/10" />
      </div>

      {/* Main Heading with Word Mask Wipe */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-[#ededed] flex flex-wrap gap-x-3 gap-y-1">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-1">
            <span
              ref={(el) => (wordsRef.current[i] = el)}
              className="inline-block will-change-transform"
            >
              {word}
            </span>
          </span>
        ))}
      </h2>

      {/* Subtitle / Editorial summary */}
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-[#8e8e99] max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
