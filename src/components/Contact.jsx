import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import SectionHeader from './SectionHeader';
import MagneticElement from './MagneticElement';
import { ArrowUpRight, CheckCircle2, AlertCircle, Download } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name field is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email field is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject field is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message field is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must contain at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // =========================================================================
      // TODO: Connect EmailJS or backend API here.
      // Example integration:
      // import emailjs from '@emailjs/browser';
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY');
      // =========================================================================

      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 7000);
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 editorial-border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          index="07 / CONTACT"
          title="Direct Inquiries & Transmissions"
          subtitle="Open for full-stack engineering roles, freelance opportunities, and collaborative innovation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monospace Directory */}
          <div className="lg:col-span-5 space-y-8 font-mono text-xs">
            <div>
              <span className="text-slate-400 dark:text-[#686875] uppercase tracking-widest block mb-4">
                // CONTACT DIRECTORY
              </span>

              <div className="space-y-4">
                <div className="py-2 border-b border-slate-200 dark:border-white/10">
                  <span className="text-slate-500 dark:text-[#686875] block text-[11px]">EMAIL</span>
                  <a
                    href="mailto:ayaanswork24@gmail.com"
                    className="text-slate-900 dark:text-[#ededed] hover:text-cyan-400 transition-colors font-medium text-sm"
                  >
                    ayaanswork24@gmail.com
                  </a>
                </div>

                <div className="py-2 border-b border-slate-200 dark:border-white/10">
                  <span className="text-slate-500 dark:text-[#686875] block text-[11px]">PHONE</span>
                  <a
                    href="tel:+919607889594"
                    className="text-slate-900 dark:text-[#ededed] hover:text-cyan-400 transition-colors font-medium text-sm"
                  >
                    +91 9607889594
                  </a>
                </div>

                <div className="py-2 border-b border-slate-200 dark:border-white/10">
                  <span className="text-slate-500 dark:text-[#686875] block text-[11px]">LOCATION</span>
                  <span className="text-slate-900 dark:text-[#ededed] font-medium text-sm">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div>
              <span className="text-slate-400 dark:text-[#686875] uppercase tracking-widest block mb-3">
                // EXTERNAL PROFILES
              </span>
              <div className="flex flex-wrap gap-4 text-xs">
                <a
                  href="https://github.com/Git-ayaanshaikh24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-slate-900 dark:text-[#ededed] hover:text-cyan-400"
                >
                  <span>[ GITHUB ]</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5 inline" />
                </a>

                <a
                  href="#" // TODO: Ayaan, LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-slate-900 dark:text-[#ededed] hover:text-cyan-400"
                >
                  <span>[ LINKEDIN ]</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5 inline" />
                </a>

                <a
                  href="#" // TODO: Ayaan, Twitter/X URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-slate-900 dark:text-[#ededed] hover:text-cyan-400"
                >
                  <span>[ TWITTER/X ]</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5 inline" />
                </a>
              </div>
            </div>

            {/* Resume button */}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                download="Ayaan_Shaikh_Resume.pdf"
                className="editorial-link text-xs text-cyan-400 font-semibold"
              >
                <Download className="w-3.5 h-3.5 mr-1 inline" />
                <span>[ DOWNLOAD RESUME PDF ]</span>
              </a>
            </div>
          </div>

          {/* Right Column: Underline-Only Form */}
          <div className="lg:col-span-7">
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-cyan-400/10 border-l-2 border-cyan-400 text-xs font-mono text-cyan-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>TRANSMISSION RECEIVED: Ayaan will reply within 24 hours.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-500/10 border-l-2 border-red-500 text-xs font-mono text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>ERROR: Please dispatch message directly to ayaanswork24@gmail.com</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative">
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8e8e99] mb-1">
                    01. YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent pb-2 border-b border-slate-300 dark:border-white/15 text-slate-900 dark:text-[#ededed] placeholder:text-slate-400 dark:placeholder:text-neutral-700 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono text-[11px] text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8e8e99] mb-1">
                    02. EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full bg-transparent pb-2 border-b border-slate-300 dark:border-white/15 text-slate-900 dark:text-[#ededed] placeholder:text-slate-400 dark:placeholder:text-neutral-700 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono text-[11px] text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8e8e99] mb-1">
                  03. SUBJECT *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Technical Collaboration"
                  className="w-full bg-transparent pb-2 border-b border-slate-300 dark:border-white/15 text-slate-900 dark:text-[#ededed] placeholder:text-slate-400 dark:placeholder:text-neutral-700 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
                {errors.subject && (
                  <p className="mt-1 font-mono text-[11px] text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8e8e99] mb-1">
                  04. MESSAGE BODY *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project specifications, timeline, engineering requirements..."
                  className="w-full bg-transparent pb-2 border-b border-slate-300 dark:border-white/15 text-slate-900 dark:text-[#ededed] placeholder:text-slate-400 dark:placeholder:text-neutral-700 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
                {errors.message && (
                  <p className="mt-1 font-mono text-[11px] text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Minimal Bracketed Submit Link */}
              <div className="pt-4">
                <MagneticElement strength={0.25}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="editorial-link font-mono text-sm uppercase text-slate-900 dark:text-[#ededed] hover:text-cyan-400 py-1 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>[ TRANSMITTING... ]</span>
                    ) : (
                      <span>[ SEND TRANSMISSION → ]</span>
                    )}
                  </button>
                </MagneticElement>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
