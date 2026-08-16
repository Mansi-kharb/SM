'use client';

import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We begin by listening — to your space, your goals, and the story you want your space to tell.',
    },
    {
      number: '02',
      title: 'Define',
      description: 'We translate insights into structured parameters, setting the direction for design with clarity and intent.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'We begin by listening — to your needs, your goals, and the story you want your space to tell.',
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'With precision and passion, we turn every design into a finished reality that exceeds expectations.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden border-t border-slate-100">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col space-y-20">
        
        {/* ROW 1: Headline (419px x 240px) + Step 01 & 02 (Cards 430px x 550px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Headline (Cols 1-4) - Exact Figma Box Specs: 419px x 240px */}
          <div className="lg:col-span-4 pt-2 pr-4">
            <h2 className="font-['Satoshi',sans-serif] text-3xl sm:text-4xl md:text-[40px] leading-[1.12] font-light text-slate-900 tracking-tight max-w-[419px]">
              From Insight to<br />
              Impact — <span className="text-[#a3a3a3] font-light">a journey<br />
              shaped by intent,<br />
              detail, and<br />
              collaboration.</span>
            </h2>
          </div>

          {/* Steps 01 & 02 (Cols 5-12) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Timeline Track 1 - Side by Side 2-Column on Mobile & Desktop */}
            <div className="relative flex items-center h-[40px] sm:h-[50px] w-full mb-3 sm:mb-4">
              <div className="absolute left-[20px] sm:left-[25px] right-0 h-[32px] sm:h-[40.26px] top-1/2 -translate-y-1/2 z-0 overflow-hidden">
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
              {/* Card 1: Geometric Abstract Poster */}
              <div className="relative w-full aspect-[430/550] rounded-xl sm:rounded-[28px] overflow-hidden bg-[#f4f7f5] border border-slate-200/60 p-3 sm:p-6 flex flex-col justify-between shadow-sm">
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-[#0f5339] z-20 shadow-sm" />
                <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                  <svg className="w-full h-full" viewBox="0 0 430 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="card-tri-bg-m" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 0 30 L 15 0 L 30 30" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="430" height="550" fill="url(#card-tri-bg-m)" />
                    <g opacity="0.85">
                      <polygon points="215,80 140,200 290,200" fill="#cbd5e1" opacity="0.9" />
                      <polygon points="160,150 250,300 110,320" fill="#99f6e4" opacity="0.85" />
                      <polygon points="180,240 280,380 340,270" fill="#64748b" opacity="0.65" />
                      <polygon points="120,310 240,430 180,480" fill="#94a3b8" opacity="0.7" />
                      <polygon points="210,190 320,330 200,340" fill="#a7f3d0" opacity="0.8" />
                      <polygon points="210,380 300,480 390,400" fill="#475569" opacity="0.5" />
                      <polygon points="280,180 370,260 300,290" fill="#5eead4" opacity="0.8" />
                      <polygon points="90,420 130,470 70,480" fill="#cbd5e1" opacity="0.6" />
                      <polygon points="340,440 370,490 320,490" fill="#94a3b8" opacity="0.5" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Card 2: Luxury Villa Pool Photo */}
              <div className="relative w-full aspect-[430/550] rounded-xl sm:rounded-[28px] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm group">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                  alt="Luxury Modern Architecture Pool Villa"
                  className="w-full h-full object-cover rounded-xl sm:rounded-[28px] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>

        </div>

        {/* ROW 2: Steps 03 & 04 (Cols 1-8) + Empty Space (Cols 9-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Steps 03 & 04 (Cols 1-8) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Timeline Track 2 extending from left edge to badge 04 */}
            <div className="relative flex items-center h-[50px] w-full mb-4">
              <div className="absolute left-0 right-[calc(50%-25px)] h-[40.26px] top-1/2 -translate-y-1/2 z-0 overflow-hidden">
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
              {/* Card 3: Modern Concrete Architecture Patio with Pool Steps */}
              <div className="relative aspect-[430/550] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Concrete Interior Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card 4: Black & White Concrete Staircase Architecture */}
              <div className="relative aspect-[430/550] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow group">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                  alt="Minimalist Concrete Staircase Architecture"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
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
