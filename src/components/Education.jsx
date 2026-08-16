import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../data/education';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        '.edu-entry',
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
    <section id="education" ref={containerRef} className="py-24 sm:py-32 editorial-border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          index="05 / EDUCATION"
          title="Academic Credentials & Foundations"
          subtitle="Formal education in Computer Engineering and foundational natural sciences."
        />

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Vertical scrubbed line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-3 bottom-3 w-[1px] bg-cyan-400 origin-top will-change-transform"
          />

          <div className="space-y-16">
            {education.map((item, idx) => (
              <div
                key={item.degree}
                className="edu-entry relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                {/* Node dot */}
                <div className="absolute -left-[27px] sm:-left-[43px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-[#0a0a0c]" />

                {/* Left Date / Score Monospace Column */}
                <div className="md:col-span-4 font-mono space-y-1">
                  <div className="text-xs text-cyan-500 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                    {item.period}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-[#ededed]">
                    {item.score}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-[#686875]">
                    {item.institution}
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="md:col-span-8 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-[#ededed] font-heading">
                    {item.degree}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-[#8e8e99] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Coursework list */}
                  <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600 dark:text-[#a0a0ab]">
                    <span className="text-slate-400 dark:text-[#686875] mr-1">// KEY MODULES:</span>
                    {item.courses.map((c, cIdx) => (
                      <span key={c}>
                        {c}{cIdx < item.courses.length - 1 ? ',' : ''}
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
