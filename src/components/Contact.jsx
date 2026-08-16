import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import MagneticElement from './MagneticElement';
import { ArrowUpRight, Download, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ayaanswork24@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 editorial-border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          index="07 / CONTACT"
          title="Direct Inquiries & Transmissions"
          subtitle="Open for full-stack engineering roles, freelance opportunities, and collaborative innovation."
        />

        {/* High-Impact Direct Contact Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Direct Contact Ledger */}
          <div className="lg:col-span-7 space-y-8 font-mono">
            <div className="text-xs text-slate-400 dark:text-[#686875] uppercase tracking-widest pb-3 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span>// DIRECT TRANSMISSION CHANNELS</span>
              <span className="text-cyan-400 font-semibold">[ STATUS: ACTIVE ]</span>
            </div>

            <div className="space-y-6">
              {/* Primary Email */}
              <div className="p-6 sm:p-8 bg-slate-50 dark:bg-[#111115] border border-slate-200 dark:border-white/10 transition-all duration-300 hover:border-cyan-400/50">
                <span className="text-[11px] text-slate-500 dark:text-[#686875] block uppercase tracking-wider mb-2">
                  01. PRIMARY ELECTRONIC MAIL
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href="mailto:ayaanswork24@gmail.com"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-[#ededed] hover:text-cyan-400 transition-colors font-sans break-all"
                  >
                    ayaanswork24@gmail.com
                  </a>
                  <div className="flex items-center gap-3">
                    <MagneticElement strength={0.2}>
                      <button
                        onClick={handleCopyEmail}
                        className="editorial-link text-xs text-cyan-400 hover:text-cyan-300 py-1"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 mr-1 inline" />
                            <span>[ COPIED! ]</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 mr-1 inline" />
                            <span>[ COPY ]</span>
                          </>
                        )}
                      </button>
                    </MagneticElement>

                    <MagneticElement strength={0.2}>
                      <a
                        href="mailto:ayaanswork24@gmail.com"
                        className="editorial-link text-xs text-slate-900 dark:text-[#ededed] hover:text-cyan-400 py-1"
                      >
                        <span>[ OPEN MAIL → ]</span>
                      </a>
                    </MagneticElement>
                  </div>
                </div>
              </div>

              {/* Phone & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="p-6 bg-slate-50 dark:bg-[#111115] border border-slate-200 dark:border-white/10">
                  <span className="text-[11px] text-slate-500 dark:text-[#686875] block uppercase tracking-wider mb-2">
                    02. DIRECT VOICE / CELL
                  </span>
                  <a
                    href="tel:+919607889594"
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#ededed] hover:text-cyan-400 transition-colors block"
                  >
                    +91 9607889594
                  </a>
                  <span className="text-[11px] text-slate-400 dark:text-[#686875] block mt-1">
                    Available for calls & WhatsApp
                  </span>
                </div>

                {/* Location */}
                <div className="p-6 bg-slate-50 dark:bg-[#111115] border border-slate-200 dark:border-white/10">
                  <span className="text-[11px] text-slate-500 dark:text-[#686875] block uppercase tracking-wider mb-2">
                    03. GEOGRAPHIC BASE
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#ededed]">
                    Mumbai, India
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-[#686875] block mt-1">
                    Maharashtra • IST (UTC+5:30)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profiles & Documentation */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            <div className="text-xs text-slate-400 dark:text-[#686875] uppercase tracking-widest pb-3 border-b border-slate-200 dark:border-white/10">
              // VERIFIED EXTERNAL PROFILES
            </div>

            <div className="space-y-4">
              <a
                href="https://github.com/ayaanshaikh24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-slate-50 dark:bg-[#111115] border border-slate-200 dark:border-white/10 flex items-center justify-between group hover:border-cyan-400 transition-all duration-200 block"
              >
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-[#686875] block uppercase">01. CODE REPOSITORIES</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-[#ededed] group-hover:text-cyan-400 transition-colors">
                    GitHub // @ayaanshaikh24
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/ayaan-shaikh-094b22331"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-slate-50 dark:bg-[#111115] border border-slate-200 dark:border-white/10 flex items-center justify-between group hover:border-cyan-400 transition-all duration-200 block"
              >
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-[#686875] block uppercase">02. PROFESSIONAL NETWORK</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-[#ededed] group-hover:text-cyan-400 transition-colors">
                    LinkedIn // ayaan-shaikh-094b22331
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Official Resume Download Card */}
              <div className="p-6 bg-slate-100 dark:bg-[#111115] border-l-2 border-cyan-400 space-y-3">
                <span className="text-[10px] text-slate-400 dark:text-[#686875] block uppercase tracking-wider">
                  // OFFICIAL CURRICULUM VITAE
                </span>
                <p className="text-xs text-slate-700 dark:text-[#a0a0ab] leading-relaxed font-sans">
                  Complete technical profile, verified internship logs, and academic credentials.
                </p>
                <div className="pt-1">
                  <MagneticElement strength={0.2}>
                    <a
                      href="/resume.pdf"
                      download="Ayaan_Shaikh_Resume.pdf"
                      className="editorial-link text-xs text-cyan-400 font-semibold uppercase"
                    >
                      <Download className="w-3.5 h-3.5 mr-1 inline" />
                      <span>[ DOWNLOAD RESUME PDF ]</span>
                    </a>
                  </MagneticElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
