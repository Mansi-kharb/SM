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

        {/* 3D Perspective Track matching Figma screenshot diagonal cascade */}
        <div className="relative w-full h-[620px] md:h-[680px] my-2 flex items-center justify-end [perspective:2200px] [perspective-origin:65%_45%] overflow-visible pr-4 md:pr-12">
          <div className="relative w-full max-w-6xl h-full [transform-style:preserve-3d]">
            {list.map((item, idx) => {
              if (!item.id) return null;
              const slot = idx; // 0, 1, 2, 3, 4, 5
              const isHovered = hoveredId === item.id;
              const isActive = activeProjectId === item.id;

              // Step rightward (+120px) and UPWARD (-65px) matching exact Figma screenshot
              const stepX = slot * 125;
              const stepY = slot * -55;
              const stepZ = (list.length - slot) * 40;

              // 3D rotation matching Figma screenshot
              const baseRotateX = 18;   
              const baseRotateY = -28; 
              const baseRotateZ = 4; 

              const translateX = isHovered ? -80 : 0;
              const translateY = isHovered ? -30 : 0;
              const translateZ = isHovered ? 260 : 0;

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
                    left: `calc(15% + ${stepX}px)`,
                    bottom: `calc(10% - ${stepY}px)`,
                    transform: `translate3d(${translateX}px, ${translateY}px, ${stepZ + translateZ}px) rotateX(${baseRotateX}deg) rotateY(${baseRotateY}deg) rotateZ(${baseRotateZ}deg)`,
                    transformStyle: 'preserve-3d',
                    zIndex: isHovered ? 500 : restingZIndex,
                  }}
                >
                  {/* Card Frame */}
                  <div
                    className={`relative w-[280px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[260px] overflow-hidden transition-all duration-300 shadow-2xl border-[1.5px] border-slate-300 bg-white ${
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
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded text-[10px] font-medium tracking-wider uppercase">
                      {item.category}
                    </div>
                  </div>

                  {/* Info Box */}
                  <div
                    className={`absolute top-4 left-[102%] transition-all duration-300 pointer-events-none whitespace-nowrap bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200 shadow-2xl ${
                      isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-3 scale-95'
                    }`}
                  >
                    <span className="text-[10px] font-semibold text-slate-900 tracking-wider uppercase block bg-slate-100 px-2 py-0.5 rounded w-fit mb-1">
                      {item.category}
                    </span>
                    <span className="text-[14px] font-medium text-slate-900 font-sans tracking-tight block">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-light text-slate-500 font-sans tracking-wider uppercase block">
                      {item.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
