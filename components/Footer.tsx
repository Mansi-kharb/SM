'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f5b43] text-white py-8 md:py-20 border-t border-emerald-900/40 relative">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Brand Logo & Reach Out (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            
            {/* Logo Image Asset */}
            <Link href="/" className="group mb-2 lg:mb-4 inline-block">
              <div className="w-40 sm:w-56 h-auto">
                <img
                  src="/images/e839ecde-f9f5-4b2c-83ec-e5641a709c6a.png"
                  alt="Studio Materium Logo"
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>

            {/* Mint Triangle Wave / Zigzag Pattern Line */}
            <div className="my-2 lg:my-3 flex items-center gap-1 opacity-90">
              {Array.from({ length: 18 }).map((_, i) => (
                <svg key={i} className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-emerald-200 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>
              ))}
            </div>

            {/* Reach out paragraph */}
            <p className="text-[13px] lg:text-sm font-light text-emerald-50/90 leading-relaxed mt-1 lg:mt-2 max-w-sm">
              Reach out to us anytime and<br />
              we&apos;ll happily answer your questions.
            </p>
          </div>

          {/* Center Column - Empty (Contact moved to dedicated section) */}
          <div className="hidden lg:block lg:col-span-5"></div>

          {/* Right Column: Nav Links, Social Icons, Copyright (Cols 9-12) */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between self-stretch gap-5 lg:gap-10 w-full lg:w-auto">
            
            {/* Navigation Links */}
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2.5 w-full lg:flex lg:flex-col lg:items-end lg:w-auto text-sm font-light text-emerald-50">
              <Link href="#work" className="hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#people" className="hover:text-white transition-colors">
                People
              </Link>
              <Link href="#about" className="hover:text-white transition-colors">
                About us
              </Link>
              <Link href="#blogs" className="hover:text-white transition-colors">
                Blogs
              </Link>
            </nav>

            {/* Social Icons & Copyright */}
            <div className="flex flex-col items-start lg:items-end gap-3 lg:gap-5 w-full lg:w-auto">
              
              {/* Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
                  aria-label="Instagram"
                >
                  <span className="text-xs font-semibold">@</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs font-semibold font-serif">in</span>
                </a>

                <a
                  href="mailto:contact@studiomaterium.com"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                <a
                  href="tel:+1234567890"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-emerald-300/40 flex items-center justify-center text-emerald-100 hover:bg-white hover:text-[#0f5b43] transition-all"
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
