'use client';

import React, { useState } from 'react';
import { ProjectData } from './ProjectCard';

interface InteractiveProjectShowcaseProps {
  projects: ProjectData[];
  activeProjectId: number | null;
  onSelectProject: (projectId: number) => void;
}

export default function InteractiveProjectShowcase({
  projects,
  activeProjectId,
  onSelectProject,
}: InteractiveProjectShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const list = projects && projects.length > 0 ? projects : [];

  return (
    <section
      id="selected-projects"
      className="relative bg-white pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden border-t border-slate-100 min-h-[760px] flex flex-col justify-between text-slate-900 select-none"
    >
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Section Header */}
        <div className="z-20 pt-2 flex items-end justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-light text-slate-900 tracking-tight leading-[1.05]">
              WE LOVE<br />
              <span className="text-slate-400 font-light">WHAT WE DO</span>
            </h2>
          </div>

          <a
            href="#selected-projects"
            className="hidden sm:inline-block text-lg md:text-xl font-light text-slate-800 underline underline-offset-8 hover:text-slate-500 transition-colors"
          >
            Our Projects
          </a>
        </div>

        {/* 3D Perspective Track for Mobile and Desktop */}
        <div className="relative w-full h-[480px] sm:h-[580px] md:h-[680px] my-2 flex items-center justify-end [perspective:2200px] [perspective-origin:65%_45%] overflow-visible pr-2 sm:pr-4 md:pr-12">
          <div className="relative w-full max-w-6xl h-full [transform-style:preserve-3d]">
            {list.map((item, idx) => {
              if (!item.id) return null;
              const slot = idx; // 0, 1, 2, 3, 4, 5
              const isHovered = hoveredId === item.id;
              const isActive = activeProjectId === item.id;

              // Step rightward (+120px) and UPWARD (-65px) matching exact Figma screenshot
              const stepX = slot * 65; // Scaled for mobile responsiveness
              const stepY = slot * -35;
              const stepZ = (list.length - slot) * 30;

              // 3D rotation matching Figma screenshot
              const baseRotateX = 18;   
              const baseRotateY = -28; 
              const baseRotateZ = 4; 

              const translateX = isHovered ? -40 : 0;
              const translateY = isHovered ? -15 : 0;
              const translateZ = isHovered ? 160 : 0;

              // Left-most card is at front (highest z-index), right-most steps behind into distance
              const restingZIndex = 100 + (list.length - slot) * 10;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelectProject(item.id)}
                  className="absolute transition-all duration-400 ease-out cursor-pointer group"
                  style={{
                    left: `calc(5% + ${stepX}px)`,
                    bottom: `calc(15% - ${stepY}px)`,
                    transform: `translate3d(${translateX}px, ${translateY}px, ${stepZ + translateZ}px) rotateX(${baseRotateX}deg) rotateY(${baseRotateY}deg) rotateZ(${baseRotateZ}deg)`,
                    transformStyle: 'preserve-3d',
                    zIndex: isHovered ? 500 : restingZIndex,
                  }}
                >
                  {/* Card Frame */}
                  <div
                    className={`relative w-[210px] sm:w-[360px] md:w-[420px] h-[140px] sm:h-[230px] md:h-[260px] overflow-hidden transition-all duration-300 shadow-2xl border-[1.5px] border-slate-300 bg-white ${
                      isHovered
                        ? 'shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] ring-4 ring-slate-900 scale-[1.05]'
                        : ''
                    } ${
                      isActive ? 'ring-2 ring-slate-900' : ''
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        if (item.fallback) {
                          (e.target as HTMLImageElement).src = item.fallback;
                        }
                      }}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isHovered ? 'scale-105 brightness-105' : 'brightness-95 group-hover:brightness-100'
                      }`}
                    />

                    {/* Category Label */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black/80 backdrop-blur-md text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[8px] sm:text-[10px] font-medium tracking-wider uppercase">
                      {item.category}
                    </div>
                  </div>

                  {/* Info Box */}
                  <div
                    className={`absolute top-2 left-[102%] transition-all duration-300 pointer-events-none whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-200 shadow-2xl ${
                      isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-3 scale-95'
                    }`}
                  >
                    <span className="text-[8px] sm:text-[10px] font-semibold text-slate-900 tracking-wider uppercase block bg-slate-100 px-2 py-0.5 rounded w-fit mb-1">
                      {item.category}
                    </span>
                    <span className="text-[12px] sm:text-[14px] font-medium text-slate-900 font-sans tracking-tight block">
                      {item.title}
                    </span>
                    <span className="text-[9px] sm:text-[11px] font-light text-slate-500 font-sans tracking-wider uppercase block">
                      {item.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Horizontal Mobile Swipeable Carousel (Shown only on small screens < sm) */}
        <div className="sm:hidden flex overflow-x-auto gap-4 py-6 px-4 no-scrollbar snap-x snap-mandatory">
          {list.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject(item.id)}
              className="relative w-[280px] h-[200px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-0.5 rounded w-fit mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-medium">{item.title}</h4>
                <p className="text-[11px] opacity-80">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
