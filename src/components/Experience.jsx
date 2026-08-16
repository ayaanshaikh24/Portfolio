import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../data/experience';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Scrub the vertical timeline line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: true,
            },
          }
        );
      }

      // Stagger timeline items
      gsap.fromTo(
        '.timeline-entry',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 sm:py-32 editorial-border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          index="04 / EXPERIENCE"
          title="Work History & Internships"
          subtitle="Chronological record of production engineering roles and full-stack software delivery."
        />

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Vertical scrubbed timeline line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-3 bottom-3 w-[1px] bg-cyan-400 origin-top will-change-transform"
          />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company + exp.duration}
                className="timeline-entry relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                {/* Node dot */}
                <div className="absolute -left-[27px] sm:-left-[43px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-[#0a0a0c]" />

                {/* Left Date / Company Monospace Column */}
                <div className="md:col-span-4 font-mono space-y-1">
                  <div className="text-xs text-cyan-500 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                    {exp.duration}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-[#ededed]">
                    {exp.company}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-[#686875]">
                    {exp.location} {exp.status === 'Current' && '// ACTIVE'}
                  </div>
                </div>

                {/* Right Narrative & Highlights Column */}
                <div className="md:col-span-8 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-[#ededed] font-heading">
                    {exp.role}
                  </h3>

                  <div className="space-y-2 text-sm text-slate-600 dark:text-[#8e8e99] leading-relaxed">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <span className="font-mono text-cyan-400 text-xs mt-0.5">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack row */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-[#111115] text-slate-700 dark:text-[#a0a0ab] border border-slate-200 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
