'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle white/scrolled navbar style after scrolling past Hero (100px)
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ['about', 'selected-projects', 'expertise', 'team-care', 'blogs', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 font-['Satoshi',sans-serif] ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-none py-3 shadow-sm'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent backdrop-blur-xs py-5'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 flex justify-between items-center h-14">
        
        {/* Brand Logo - Left Aligned */}
        <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative w-36 sm:w-44 h-12 flex-shrink-0">
            <img
              src="/images/e839ecde-f9f5-4b2c-83ec-e5641a709c6a.png"
              alt="Studio Materium Logo"
              className={`w-full h-full object-contain transition-all duration-500 ${
                isScrolled ? 'brightness-0' : 'brightness-0 invert'
              }`}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-light">
          {navItems.map((item) => {
            const isContact = item.label === 'Contact';
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-all duration-300 flex items-center gap-1.5 ${
                  isContact
                    ? isScrolled
                      ? 'px-4 py-2 rounded-full bg-[#0f5339] text-white hover:bg-emerald-900 font-medium shadow-sm'
                      : 'px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 font-medium'
                    : isScrolled
                    ? 'text-slate-700 hover:text-[#0f5339]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {/* Small mint triangle accent on hover */}
                {!isContact && (
                  <span className="w-1.5 h-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-full h-full text-[#0f5339] fill-current" viewBox="0 0 13.61 17.43">
                      <polygon points="6.805,0 0,17.43 13.61,17.43" />
                    </svg>
                  </span>
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-light text-slate-800">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between hover:text-[#0f5339] transition-colors"
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
