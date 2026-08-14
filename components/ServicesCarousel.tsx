'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ServicesCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const projectsList = [
    {
      id: 1,
      title: 'Vineyard Sanctuary',
      subtitle: 'Architecture & Estate',
      image: '/images/about-1.png',
      fallback: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'The Monolith',
      subtitle: 'Brutalist Structure',
      image: '/images/about-2.png',
      fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Timber & Flow',
      subtitle: 'Interior Experience',
      image: '/images/project-4.png',
      fallback: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 4,
      title: "Gold's Gym",
      subtitle: 'Commercial Space',
      image: '/images/project-2.png',
      fallback: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'The House of Rocks',
      subtitle: 'Coastal Architecture',
      image: '/images/project-3.png',
      fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Stone Haven',
      subtitle: 'Facade & Landscape',
      image: '/images/about-3.png',
      fallback: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 7,
      title: 'Glass Horizon',
      subtitle: 'Modern Villa',
      image: '/images/project-1.png',
      fallback: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  const visibleCount = 7;
  const visibleItems = Array.from({ length: visibleCount }).map((_, slotIdx) => {
    const projIdx = (startIndex + slotIdx) % projectsList.length;
    return { ...projectsList[projIdx], slotIdx };
  });

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length);
  };

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden border-t border-slate-100 min-h-[820px] flex flex-col justify-between select-none">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Title: WE LOVE WHAT WE DO */}
        <div className="z-20 pt-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-light text-slate-900 tracking-tight leading-[1.05]">
            WE LOVE<br />
            <span className="text-slate-400 font-light">WHAT WE DO</span>
          </h2>
        </div>

        {/* 3D Perspective Stage */}
        <div className="relative w-full h-[540px] md:h-[620px] my-2 flex items-center justify-center [perspective:1400px] [perspective-origin:25%_65%]">
          <div className="relative w-full max-w-5xl h-full [transform-style:preserve-3d]">
            {visibleItems.map((item) => {
              const slot = item.slotIdx; // 0 (bottom-left front) to 6 (top-right back)
              const isHovered = hoveredId === item.id;

              // 3D positioning coordinates
              const stepX = slot * 95;       // X position moving right
              const stepY = (6 - slot) * 60; // Y position moving up
              const stepZ = slot * -70;      // Z depth receding backwards into screen

              const baseRotateX = 14;  // Tilt top backward
              const baseRotateY = -24; // Angle right side toward viewer
              const baseRotateZ = 6;   // Slant angle

              // On hover: Card pops out forward (translateZ +90px & translateY -30px)
              const translateY = isHovered ? -30 : 0;
              const translateZ = isHovered ? 90 : 0;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="absolute transition-all duration-700 ease-out cursor-pointer group"
                  style={{
                    left: `calc(6% + ${stepX}px)`,
                    top: `calc(12% + ${stepY}px)`,
                    transform: `translate3d(0px, ${translateY}px, ${stepZ + translateZ}px) rotateX(${baseRotateX}deg) rotateY(${baseRotateY}deg) rotateZ(${baseRotateZ}deg)`,
                    transformStyle: 'preserve-3d',
                    zIndex: isHovered ? 100 : (70 - slot * 8),
                  }}
                >
                  {/* Card Element */}
                  <div
                    className={`relative w-[210px] sm:w-[260px] md:w-[300px] aspect-[4/5] overflow-hidden transition-all duration-300 ${
                      slot === 0
                        ? 'p-3 bg-white/95 shadow-2xl rounded-sm border border-slate-200'
                        : 'shadow-2xl rounded-sm border border-white/40'
                    } ${
                      isHovered ? 'shadow-[0_35px_80px_-15px_rgba(0,0,0,0.4)] ring-2 ring-slate-900/30' : ''
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = item.fallback;
                      }}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isHovered ? 'scale-110 brightness-105' : 'brightness-95 group-hover:brightness-100'
                      }`}
                    />
                  </div>

                  {/* Clean Angled Plain Text Title Label on Hover when Card Pops Out */}
                  <div
                    className={`absolute top-4 left-[102%] transition-all duration-300 pointer-events-none whitespace-nowrap ${
                      isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                  >
                    <span className="text-[11px] sm:text-xs font-normal text-slate-900 font-sans tracking-tight block">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation & Projects Link */}
        <div className="flex items-center justify-between pt-6 pb-2 z-20">
          <div className="w-24 hidden sm:block" />

          {/* Center Navigation Pill Controls */}
          <div className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-full shadow-xl">
            <button
              onClick={handlePrev}
              className="p-1 hover:text-slate-300 transition-colors"
              aria-label="Previous project"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="w-[1px] h-3.5 bg-slate-700" />
            <button
              onClick={handleNext}
              className="p-1 hover:text-slate-300 transition-colors"
              aria-label="Next project"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Link */}
          <div>
            <Link
              href="#projects"
              className="text-lg md:text-xl font-light text-slate-800 underline underline-offset-8 hover:text-slate-500 transition-colors"
            >
              Our Projects
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
