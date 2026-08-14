'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      title: 'Interior Architecture',
      description: 'Custom tailored luxury interiors blending natural materials and warm ambient lighting.',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Landscape & Master Planning',
      description: 'Monolithic, sustainable architectural forms tailored to surrounding landscapes.',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Architectural Design',
      description: 'Precision engineering and seamless end-to-end execution exceeding industry standards.',
      type: 'image',
      image: '/images/about-2.png',
    },
    {
      id: 4,
      title: 'Construction & Turnkey',
      description: 'Precision engineering and seamless end-to-end execution exceeding industry standards.',
      type: 'red-card',
      color: '#d9232e',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const leftIndex = (activeIndex - 1 + items.length) % items.length;
  const rightIndex = (activeIndex + 1) % items.length;

  return (
    <section className="bg-white pt-12 md:pt-16 pb-8 md:pb-12 border-t border-slate-100 overflow-hidden">
      {/* Header - Two Column Layout matching Figma Screenshot (Left: Title, Right: Paragraph) */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Title Column - Exact Figma Typography Specs: Font: Satoshi, Weight: 300, Size: 48px, Line-height: 100%, Width: 541px */}
          <div className="md:col-span-6">
            <h2 className="font-['Satoshi',sans-serif] font-light text-[48px] text-slate-900 tracking-normal leading-[1.0] max-w-[541px]">
              Our Expertise Powers<br />
              Every Stage of Your<br />
              <span className="text-[#c8c8c8] font-light">Design and Construction<br />Journey</span>
            </h2>
          </div>

          {/* Right Description Column */}
          <div className="md:col-span-6 md:pl-8">
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-lg">
              With projects ranging from cozy cafes to sprawling residences, creative workspaces to retail identities — we approach each project with openness, rigor, and an obsession with detail.
            </p>
          </div>

        </div>
      </div>

      {/* Full-Bleed Responsive Edge-to-Edge Carousel Stage */}
      <div className="w-full relative overflow-hidden">
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-[1920px] h-[480px] sm:h-[580px] md:h-[661px] mx-auto px-2 md:px-6">
          
          {/* Left Card */}
          <motion.div
            layout
            onClick={handlePrev}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative flex-1 max-w-[280px] sm:max-w-[400px] md:max-w-[600px] h-full flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer hidden sm:block"
          >
            <AnimatePresence mode="wait">
              {items[leftIndex].type === 'red-card' ? (
                <motion.div
                  key={`red-left-${leftIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-[#d9232e] relative flex flex-col justify-center"
                >
                  <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-white/30" />
                </motion.div>
              ) : (
                <motion.img
                  key={`img-left-${leftIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={items[leftIndex].image}
                  alt={items[leftIndex].title}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}
            </AnimatePresence>

            {/* Left Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/40 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Previous card"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </motion.div>

          {/* Center Main Active Card */}
          <motion.div
            layout
            className="relative flex-[2.5] max-w-[1180px] w-full h-full flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg"
          >
            <AnimatePresence mode="wait">
              {items[activeIndex].type === 'red-card' ? (
                <motion.div
                  key={`red-center-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-[#d9232e] relative flex flex-col justify-center"
                >
                  <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-white/30" />
                </motion.div>
              ) : (
                <motion.img
                  key={`img-center-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              )}
            </AnimatePresence>

            {/* Mobile Navigation Arrow Overlay */}
            <div className="sm:hidden absolute inset-0 flex items-center justify-between px-3 pointer-events-none z-10">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center pointer-events-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center pointer-events-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            layout
            onClick={handleNext}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative flex-1 max-w-[280px] sm:max-w-[400px] md:max-w-[600px] h-full flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer hidden sm:flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {items[rightIndex].type === 'red-card' ? (
                <motion.div
                  key={`red-right-${rightIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-[#d9232e] relative flex flex-col justify-center"
                >
                  <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-white/30" />
                </motion.div>
              ) : (
                <motion.img
                  key={`img-right-${rightIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={items[rightIndex].image}
                  alt={items[rightIndex].title}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}
            </AnimatePresence>

            {/* Right Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/40 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Next card"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

        </div>

        {/* Bottom Label: Architectural Design - Exact Figma Specs: Font Satoshi, Weight 500 (Medium), Size 24px, Color #000000 */}
        <div className="text-center mt-5">
          <span className="font-['Satoshi',sans-serif] font-medium text-[24px] text-[#000000] leading-[1.0] tracking-normal inline-block">
            {items[activeIndex].title}
          </span>
        </div>
      </div>
    </section>
  );
}
