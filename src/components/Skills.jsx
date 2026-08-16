import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories, allSkillsList } from '../data/skills';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate each progress bar width tied to ScrollTrigger
      barsRef.current.forEach((bar) => {
        if (!bar) return;
        const targetWidth = bar.getAttribute('data-level');
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${targetWidth}%`,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  let barIndex = 0;

  return (
    <section id="skills" ref={containerRef} className="py-24 sm:py-32 editorial-border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          index="02 / SKILLS"
          title="Technical Competencies & Stack"
          subtitle="System architecture, languages, and modern tooling categorized with verified proficiency metrics."
        />

        {/* Marquee / Clean Monospace Tag Ticker */}
        <div className="mb-16 pb-6 border-b border-slate-200 dark:border-white/10 overflow-hidden">
          <div className="font-mono text-xs text-slate-400 dark:text-[#686875] uppercase tracking-widest mb-3">
            // INDEXED KEYWORDS
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-slate-700 dark:text-[#a0a0ab]">
            {allSkillsList.map((skill, i) => (
              <span key={skill} className="hover:text-cyan-400 transition-colors cursor-default">
                <span className="text-cyan-400 mr-1.5">#</span>
                {skill}
                {i < allSkillsList.length - 1 && <span className="ml-4 text-slate-300 dark:text-neutral-800">/</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Kinetic Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-900 dark:text-[#ededed] font-semibold">
                  0{catIdx + 1}. {cat.category}
                </span>
                <span className="font-mono text-[10px] text-slate-400 dark:text-[#686875]">
                  [{cat.skills.length} ITEMS]
                </span>
              </div>

              {/* Skills in category */}
              <div className="space-y-5">
                {cat.skills.map((skill) => {
                  const currentIndex = barIndex++;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-baseline font-mono text-xs">
                        <span className="text-slate-800 dark:text-[#ededed]">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-[#8e8e99] text-[11px]">
                          {skill.proficiency} // {skill.level}%
                        </span>
                      </div>

                      {/* Kinetic Scroll-Triggered Bar */}
                      <div className="w-full h-[2px] bg-slate-200 dark:bg-white/10 overflow-hidden">
                        <div
                          ref={(el) => (barsRef.current[currentIndex] = el)}
                          data-level={skill.level}
                          className="h-full bg-cyan-400 will-change-[width]"
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
