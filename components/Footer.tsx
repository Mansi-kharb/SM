'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <footer id="contact" className="bg-[#0f5b43] text-white py-16 md:py-20 border-t border-emerald-900/40 relative">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Brand Logo & Reach Out (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            
            {/* Logo Image Asset */}
            <Link href="/" className="group mb-4 inline-block">
              <div className="w-48 sm:w-56 h-auto">
                <img
                  src="/images/e839ecde-f9f5-4b2c-83ec-e5641a709c6a.png"
                  alt="Studio Materium Logo"
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>

            {/* Mint Triangle Wave / Zigzag Pattern Line */}
            <div className="my-3 flex items-center gap-1 opacity-90">
              {Array.from({ length: 18 }).map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 text-emerald-200 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>
              ))}
            </div>

            {/* Reach out paragraph */}
            <p className="text-sm font-light text-emerald-50/90 leading-relaxed mt-2 max-w-sm">
              Reach out to us anytime and<br />
              we&apos;ll happily answer your questions.
            </p>
          </div>

          {/* Center Column: CONTACT OUR TEAM Text Link or Open Contact Form at top center */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start pt-2 w-full" id="contact-form">
            {!isFormOpen ? (
              /* State 1: Clean Text Link with Triangle Icon at top center */
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2.5 group cursor-pointer text-white hover:text-emerald-200 transition-colors"
              >
                {/* Black Triangle Icon ▲ */}
                <div className="w-[12px] h-[14px] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-full h-full text-white fill-current group-hover:translate-x-0.5 transition-transform"
                    viewBox="0 0 13.61 17.43"
                  >
                    <polygon points="6.805,0 0,17.43 13.61,17.43" />
                  </svg>
                </div>

                <span className="font-['Satoshi',sans-serif] text-sm font-medium uppercase tracking-wider whitespace-nowrap">
                  CONTACT OUR TEAM
                </span>
              </button>
            ) : (
              /* State 2: Center Box Contact Form with Close (X) Button */
              <div className="w-full max-w-lg p-6 rounded-2xl bg-emerald-950/60 border border-emerald-400/30 backdrop-blur-md shadow-2xl relative animate-fadeIn">
                
                {/* Header with Title & Close (X) button */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-800/60">
                  <h3 className="text-lg font-light text-white tracking-wide">Contact Our Team</h3>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="w-8 h-8 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Close form"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you! Your message has been sent to our team.');
                    setIsFormOpen(false);
                  }}
                  className="flex flex-col gap-3"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-light text-emerald-200 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-emerald-900/40 border border-emerald-400/30 rounded-lg px-3.5 py-2 text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-light text-emerald-200 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-emerald-900/40 border border-emerald-400/30 rounded-lg px-3.5 py-2 text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-light text-emerald-200 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-emerald-900/40 border border-emerald-400/30 rounded-lg px-3.5 py-2 text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-light text-emerald-200 mb-1">Description / Message</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-emerald-900/40 border border-emerald-400/30 rounded-lg px-3.5 py-2 text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 w-full py-2.5 bg-white text-[#0f5b43] font-medium text-xs uppercase tracking-widest rounded-lg hover:bg-emerald-100 transition-colors shadow-sm cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Nav Links, Social Icons, Copyright (Cols 9-12) */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between self-stretch gap-10">
            
            {/* Navigation Links */}
            <nav className="flex flex-col items-start lg:items-end gap-3 text-sm font-light text-emerald-50">
              <Link href="#work" className="hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#people" className="hover:text-white transition-colors">
                People
              </Link>
              <Link href="#about" className="hover:text-white transition-colors">
                About us
              </Link>
              <button
                onClick={() => setIsFormOpen(true)}
                className="hover:text-white transition-colors text-left lg:text-right"
              >
                Contact us
              </button>
              <Link href="#blogs" className="hover:text-white transition-colors">
                Blogs
              </Link>
            </nav>

            {/* Social Icons & Copyright */}
            <div className="flex flex-col items-start lg:items-end gap-5">
              
              {/* Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
                  aria-label="Instagram"
                >
                  <span className="text-xs font-semibold">@</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs font-semibold font-serif">in</span>
                </a>

                <a
                  href="mailto:contact@studiomaterium.com"
                  className="w-8 h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                <a
                  href="tel:+1234567890"
                  className="w-8 h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
                  aria-label="Phone"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-[11px] font-light text-emerald-200/80 tracking-wide">
                © Studio Materium 2026. All Rights Reserved
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
