import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  const metadataItems = [
    { label: "ACADEMICS", value: "VPP COE — B.E. Computer Engineering" },
    { label: "SCORE", value: "CGPA: 7.8" },
    { label: "CURRENT ROLE", value: "Full-Stack Intern @ Labmentix" },
    { label: "PAST INTERNSHIP", value: "Full-Stack Intern @ Code-Alpha" },
    { label: "HONOR", value: "Quasar 4.0 National Hackathon Winner" },
    { label: "CORE FOCUS", value: "MERN Stack Architecture & REST APIs" }
  ];

  const highlights = [
    "Full-Stack MERN specialist (MongoDB, Express.js, React, Node.js) with production internship delivery.",
    "Proven record architecting scalable web applications, robust endpoints, and custom web scrapers.",
    "Winner of Quasar 4.0 National Hackathon; represented VPP COE across competitive regional and national hackathons.",
    "Advocate for modern web technologies (React, Edge Functions, serverless architecture) transitioning legacy setups."
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 sm:py-32 editorial-border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          index="01 / ABOUT"
          title="Background & Engineering Philosophy"
          subtitle="Computer Engineering student and developer combining academic rigor with hands-on production internship experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monospace Metadata Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs text-slate-400 dark:text-neutral-500 uppercase tracking-widest pb-3 border-b border-slate-200 dark:border-white/10">
              // PROFILE SPECIFICATION
            </div>

            <div className="space-y-4 font-mono text-xs">
              {metadataItems.map((item, idx) => (
                <div
                  key={idx}
                  className="about-item flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-slate-200/60 dark:border-white/5 gap-1"
                >
                  <span className="text-slate-500 dark:text-[#686875] tracking-wider uppercase">
                    {item.label}
                  </span>
                  <span className="text-slate-900 dark:text-[#ededed] font-medium text-left sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial quote block */}
            <div className="about-item pt-6">
              <div className="p-6 bg-slate-100 dark:bg-[#111115] border-l-2 border-cyan-400">
                <p className="text-xs font-mono text-slate-700 dark:text-[#a0a0ab] leading-relaxed">
                  "Advocating for modern web standards, sub-second API latency, and bulletproof user interfaces."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Strengths */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-sm sm:text-base text-slate-600 dark:text-[#8e8e99] leading-relaxed">
              <p className="about-item">
                I am a Computer Engineering student at <strong>Vasantdada Patil Pratishthan's College of Engineering (VPP COE)</strong> with hands-on full-stack development experience across two internships. Currently, I work as a <strong>Full-Stack Development Intern at Labmentix</strong> (May 2026 – Nov 2026), building scalable MERN stack projects and freelancing part-time on market-ready products.
              </p>
              <p className="about-item">
                Previously, I interned at <strong>Code-Alpha</strong> (June 2026 – July 2026), where I developed and deployed scalable full-stack applications with modern JavaScript frameworks, optimized frontend performance, and streamlined backend API integrations for improved reliability.
              </p>
              <p className="about-item">
                As an active core member of the college <strong>Hackathon Club</strong>, I have represented VPP COE across competitive regional and national hackathons, winning 1st place in the national <strong>Quasar 4.0 Hackathon</strong> by designing and implementing high-pressure full-stack software prototypes.
              </p>
            </div>

            <div className="about-item pt-6 border-t border-slate-200 dark:border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-900 dark:text-[#ededed] block mb-4">
                // CORE VALUE PROPOSITIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 dark:bg-[#111115] border border-slate-200/80 dark:border-white/5 text-xs text-slate-700 dark:text-[#8e8e99] leading-relaxed"
                  >
                    <span className="font-mono text-cyan-400 font-bold block mb-1">
                      0{i + 1}.
                    </span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
