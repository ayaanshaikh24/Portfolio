import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import MagneticElement from './MagneticElement';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const panelsContainerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Only apply horizontal scroll on desktop (>= 1024px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const panels = panelsContainerRef.current;
      if (!panels) return;

      const totalWidth = panels.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(panels, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${panels.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="editorial-border-b">
      {/* Pinned Container for Desktop */}
      <div ref={triggerRef} className="relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
          <SectionHeader
            index="03 / PROJECTS"
            title="Selected Engineering Works"
            subtitle="Full-stack MERN architectures, web scrapers, and software systems built for scale and reliability."
          />
        </div>

        {/* Horizontal Track (Desktop) / Vertical Stack (Mobile) */}
        <div
          ref={panelsContainerRef}
          className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:pl-12 lg:w-max will-change-transform"
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="w-full lg:w-[720px] px-6 sm:px-8 lg:px-8 shrink-0 flex flex-col justify-between group"
            >
              {/* Full-bleed panel separated by hairline border */}
              <div className="bg-slate-50 dark:bg-[#111115] border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:border-cyan-400/50">
                {/* Panel Header */}
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-slate-400 dark:text-[#686875] pb-4 mb-6 border-b border-slate-200 dark:border-white/10">
                    <span>// 0{idx + 1}. {project.category.toUpperCase()}</span>
                    {project.featured ? (
                      <span className="text-cyan-400 font-semibold">[ FEATURED WORK ]</span>
                    ) : project.isPlaceholder ? (
                      <span className="text-amber-400">[ READY FOR CUSTOM REPO ]</span>
                    ) : null}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#ededed] mb-2 font-heading">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-4 uppercase tracking-wider">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-[#8e8e99] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.features && (
                    <div className="space-y-2 mb-6 font-mono text-xs text-slate-700 dark:text-[#a0a0ab]">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <span className="text-cyan-400">→</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech tags & Actions */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 bg-slate-200/70 dark:bg-white/5 text-slate-800 dark:text-[#ededed] border border-slate-300/80 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 font-mono text-xs">
                    <MagneticElement strength={0.2}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link text-slate-900 dark:text-[#ededed] hover:text-cyan-400"
                      >
                        <Github className="w-3.5 h-3.5 mr-1 inline" />
                        <span>[ SOURCE CODE ]</span>
                      </a>
                    </MagneticElement>

                    <MagneticElement strength={0.2}>
                      <a
                        href={project.demo}
                        target={project.demo !== '#' ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (project.demo === '#') {
                            e.preventDefault();
                            alert("Demo URL configured in src/data/projects.js");
                          }
                        }}
                        className="editorial-link text-slate-600 dark:text-[#8e8e99] hover:text-slate-900 dark:hover:text-[#ededed]"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1 inline" />
                        <span>[ LIVE DEMO ]</span>
                      </a>
                    </MagneticElement>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
