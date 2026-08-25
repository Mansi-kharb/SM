'use client';

/* Services: what the studio offers, and the process behind it. */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── ExpertiseSection ─────────────────────────────────────────────── */

export default function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      title: 'Architecture',
      description: 'Building design, planning and architectural expression.',
      type: 'image',
      image: '/images/Architecture.png',
    },
    {
      id: 2,
      title: 'Interior Design',
      description: 'Spatial planning, materiality, detailing and bespoke interiors.',
      type: 'image',
      image: '/images/Residential.png',
    },
    {
      id: 3,
      title: 'Hospitality & Commercial',
      description: 'Distinctive environments designed around experience and functionality.',
      type: 'image',
      image: '/images/Retail-Design.png',
    },
    {
      id: 4,
      title: 'Residential',
      description: 'Personalised spaces shaped around the way people live.',
      type: 'image',
      image: '/images/Landscape.png',
    },
    {
      id: 5,
      title: 'Design & Detailing',
      description: 'Furniture, materials, lighting, junctions and the finer elements that bring a space together.',
      type: 'image',
      // TODO: swap for a real joinery / material detail shot
      image: '/images/project-3.png',
    },
    {
      id: 6,
      title: 'Execution & Coordination',
      description: 'Design intent carried through with clarity from drawings to site.',
      type: 'image',
      image: '/images/Turnkey-Execution.png',
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
    <section id="services" className="bg-white pt-4 md:pt-16 pb-4 md:pb-12 border-t border-slate-100 overflow-hidden">
      {/* Header - Section Title */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-4 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Title Column - Responsive mobile typography */}
          <div className="md:col-span-8">
            <h2 className="font-['Satoshi',sans-serif] font-medium sm:font-light text-2xl sm:text-4xl md:text-[48px] text-slate-900 tracking-tight sm:tracking-normal leading-[1.12] sm:leading-[1.06] max-w-[541px]">
              WE THINK BEYOND THE SPACE.
            </h2>
          </div>

        </div>
      </div>

      {/* Full-Bleed Edge-to-Edge Carousel Stage - Exact Green Box Proportions (Center 1180px, Side Previews 320px) */}
      <div className="w-full relative overflow-hidden py-4">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-[1920px] mx-auto px-2 sm:px-4">
          
          {/* Left Card */}
          <motion.div
            layout
            onClick={handlePrev}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative hidden sm:block w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[180px] sm:h-[280px] md:h-[440px] flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer opacity-95 hover:opacity-100 transition-opacity"
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
                  <div className="absolute bottom-20 left-0 right-0 h-[2px] bg-white/30" />
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
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/30 backdrop-blur-md hover:bg-white/50 text-white flex items-center justify-center transition-colors z-10 shadow-lg"
              aria-label="Previous card"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </motion.div>

          {/* Center Main Active Card - Scaled for Mobile (260px) */}
          <motion.div
            layout
            className="relative w-full sm:w-[58%] lg:w-[56%] max-w-[1180px] h-[180px] sm:h-[280px] md:h-[440px] flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden group shadow-2xl z-20 border border-slate-200/60"
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
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              )}
            </AnimatePresence>

            {/* Mobile Navigation Arrows Overlay */}
            <button
              onClick={handlePrev}
              className="sm:hidden absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md text-white flex items-center justify-center z-30"
              aria-label="Previous card"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md text-white flex items-center justify-center z-30"
              aria-label="Next card"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Right Card */}
          <motion.div
            layout
            onClick={handleNext}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative hidden sm:block w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[180px] sm:h-[280px] md:h-[440px] flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer opacity-95 hover:opacity-100 transition-opacity"
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
                  <div className="absolute bottom-20 left-0 right-0 h-[2px] bg-white/30" />
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
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/30 backdrop-blur-md hover:bg-white/50 text-white flex items-center justify-center transition-colors z-10 shadow-lg"
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
          <p className="font-['Satoshi',sans-serif] text-sm md:text-[15px] text-slate-500 font-light leading-relaxed max-w-[520px] mx-auto mt-3">
            {items[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}


/* ── ProcessSection ─────────────────────────────────────────────── */

/* The tessellated band that runs behind a step number. Each instance needs
   its own pattern id, since ids are document-global. */
function TrackBand({ id }: { id: string }) {
  return (
    <div className="absolute left-0 right-0 h-[32px] top-1/2 -translate-y-1/2 z-0 overflow-hidden">
      <svg className="w-full h-full" width="100%" height="40.26">
        <defs>
          <pattern id={id} width="20" height="40.26" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 10 20.13 L 20 0 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
            <path d="M 10 20.13 L 0 40.26 L 20 40.26 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
            <path d="M 10 20.13 L 0 0 L 0 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
            <path d="M 10 20.13 L 20 0 L 20 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      image: '/images/process/discover.jpg',
      alt: 'Discover - mood board, floor plans and concept sketches on a studio desk',
      description: 'Every meaningful space begins with understanding. We listen closely to your aspirations, functional needs, site context, and budget to establish a clear and purposeful design direction.',
    },
    {
      number: '02',
      title: 'Define',
      image: '/images/process/define.jpg',
      alt: 'Define - designer refining a 3D model of the project on screen',
      description: 'Ideas take form through thoughtful planning, material exploration, and detailed 3D visualisation. Together, we refine every element before moving towards execution.',
    },
    {
      number: '03',
      title: 'Design',
      image: '/images/process/design.jpg',
      alt: 'Design - material and finish swatch board with specifications',
      description: 'The vision evolves into a cohesive design through spatial planning, material selection, technical detailing, and execution strategy. Every decision is carefully considered for beauty, function, and longevity.',
    },
    {
      number: '04',
      title: 'Deliver',
      image: '/images/process/deliver.jpg',
      alt: 'Deliver - completed interior at handover',
      description: 'We bring the approved design to life through coordinated execution, close supervision, and uncompromising attention to detail—delivering a refined space that remains true to the original vision.',
    },
  ];

  return (
    <section id="process" className="bg-white pt-6 pb-4 md:py-24 overflow-hidden border-t border-slate-100">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col space-y-10 md:space-y-20">
        
        {/* ROW 1: Headline (419px x 240px) + Step 01 & 02 (Cards 430px x 550px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Headline (Cols 1-4) - Exact Figma Box Specs: 419px x 240px */}
          <div className="lg:col-span-4 pt-2 pr-4">
            <h2 className="font-['Satoshi',sans-serif] text-3xl sm:text-4xl md:text-[40px] leading-[1.12] font-light text-slate-900 tracking-tight max-w-[419px]">
              A thoughtful journey{' '}
              <span className="text-[#a3a3a3] font-light">
                shaped by context, creativity, materiality, and collaboration.
              </span>
            </h2>
          </div>

          {/* Steps 01 & 02 (Cols 5-12) */}
          <div className="hidden md:flex lg:col-span-8 flex-col">
            
            {/* Timeline Track 1 - Side by Side 2-Column on Mobile & Desktop */}
            <div className="relative flex items-center h-[40px] sm:h-[50px] mb-3 sm:mb-4">
              <div className="absolute left-0 -right-[100vw] h-[32px] sm:h-[40.26px] top-1/2 -translate-y-1/2 z-0 overflow-hidden">
                <svg className="w-full h-full" width="100%" height="40.26">
                  <defs>
                    <pattern id="tessellated-triangles-track-1" width="20" height="40.26" patternUnits="userSpaceOnUse">
                      <path d="M 0 0 L 10 20.13 L 20 0 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 40.26 L 20 40.26 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 0 L 0 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 20 0 L 20 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#tessellated-triangles-track-1)" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-10 w-full">
                <div className="flex items-center">
                  <span className="w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] bg-black text-white text-[11px] sm:text-sm font-mono font-medium rounded-[10px] sm:rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    01
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] bg-black text-white text-[11px] sm:text-sm font-mono font-medium rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    02
                  </span>
                </div>
              </div>
            </div>

            {/* Titles & Paragraphs 01 & 02 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-10 mb-4 sm:mb-6">
              <div>
                <h3 className="font-['Satoshi',sans-serif] text-sm sm:text-[18px] font-medium text-slate-900 mb-0.5 sm:mb-1">
                  {steps[0].title}
                </h3>
                <p className="font-['Satoshi',sans-serif] text-[10px] sm:text-[13px] text-slate-500 font-light leading-snug sm:leading-relaxed max-w-[266px]">
                  {steps[0].description}
                </p>
              </div>

              <div>
                <h3 className="font-['Satoshi',sans-serif] text-sm sm:text-[18px] font-medium text-slate-900 mb-0.5 sm:mb-1">
                  {steps[1].title}
                </h3>
                <p className="font-['Satoshi',sans-serif] text-[10px] sm:text-[13px] text-slate-500 font-light leading-snug sm:leading-relaxed max-w-[266px]">
                  {steps[1].description}
                </p>
              </div>
            </div>

            {/* Cards 01 & 02 - Side by Side 2-Column Layout */}
            <div className="grid grid-cols-2 gap-3 sm:gap-10">
              {/* Card 1: Discover - concept board & floor plans */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-xl sm:rounded-[28px] overflow-hidden bg-[#f4f7f5] border border-slate-200/60 shadow-sm group">
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-[#0f5339] z-20 shadow-sm" />
                <img
                  src={steps[0].image}
                  alt={steps[0].alt}
                  className="w-full h-full object-cover rounded-xl sm:rounded-[28px] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card 2: Define - 3D visualization in progress */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-xl sm:rounded-[28px] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm group">
                <img
                  src={steps[1].image}
                  alt={steps[1].alt}
                  className="w-full h-full object-cover rounded-xl sm:rounded-[28px] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Mobile: one step per screen, swiped. The desktop rows above
            stand down below md, where two narrow columns of long copy
            made this section several screens tall. */}
        <div className="md:hidden mb-0 -mx-6 px-6 scroll-pl-6 flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((step, i) => (
            <div key={step.number} className="flex-shrink-0 snap-start w-[86%] pr-5">
              <div className="relative flex items-center h-[42px] -mr-5">
                {i < steps.length - 1 && (
                  <TrackBand id={`process-track-m-${step.number}`} />
                )}
                <span className="relative z-10 w-[42px] h-[42px] bg-black text-white text-[11px] font-mono font-medium rounded-[12px] flex items-center justify-center tracking-wider shadow-md">
                  {step.number}
                </span>
              </div>

              <h3 className="font-['Satoshi',sans-serif] text-[19px] font-medium text-slate-900 mt-5 mb-3">
                {step.title}
              </h3>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-['Satoshi',sans-serif] text-[13px] text-slate-500 font-light leading-relaxed mt-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROW 2: Steps 03 & 04 (Cols 1-8) + Empty Space (Cols 9-12) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Steps 03 & 04 (Cols 1-8) */}
          <div className="hidden md:flex lg:col-span-8 flex-col">
            
            {/* Timeline Track 2 extending from left edge to badge 04 */}
            <div className="relative flex items-center h-[50px] mb-4">
              <div className="absolute -left-[100vw] right-[calc(50%-41px)] sm:right-[calc(50%-49px)] h-[40.26px] top-1/2 -translate-y-1/2 z-0 overflow-hidden">
                <svg className="w-full h-full" width="100%" height="40.26">
                  <defs>
                    <pattern id="tessellated-triangles-track-2" width="20" height="40.26" patternUnits="userSpaceOnUse">
                      <path d="M 0 0 L 10 20.13 L 20 0 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 40.26 L 20 40.26 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 0 L 0 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 20 0 L 20 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#tessellated-triangles-track-2)" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-8 sm:gap-12 w-full">
                <div className="flex items-center">
                  <span className="w-[50px] h-[50px] bg-black text-white text-sm font-mono font-medium rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    03
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-[50px] h-[50px] bg-black text-white text-sm font-mono font-medium rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    04
                  </span>
                </div>
              </div>
            </div>

            {/* Step Titles & Paragraphs 03 & 04 */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 mb-6">
              <div>
                <h3 className="text-base font-medium text-slate-900 mb-1">
                  {steps[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-[320px]">
                  {steps[2].description}
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-slate-900 mb-1">
                  {steps[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-[320px]">
                  {steps[3].description}
                </p>
              </div>
            </div>

            {/* Cards 03 & 04 */}
            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              {/* Card 3: Design - material & finish selection */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow group">
                <img
                  src={steps[2].image}
                  alt={steps[2].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card 4: Deliver - completed space at handover */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow group">
                <img
                  src={steps[3].image}
                  alt={steps[3].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>

          {/* Empty Space (Cols 9-12) */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>

      </div>
    </section>
  );
}
