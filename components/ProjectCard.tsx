'use client';

import React from 'react';

export interface ProjectData {
  id: number;
  title: string;
  location: string;
  category: string;
  year?: string;
  image: string;
  images?: string[];
  details?: string;
  description?: string;
  fallback?: string;
  concept?: { text: string; image: string };
  form?: { text: string; image: string };
  space?: { text: string; image: string };
  material?: { text: string; image: string };
  result?: { text: string; image: string };
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  isHovered: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  style?: React.CSSProperties;
}

export default function ProjectCard({
  project,
  index,
  isHovered,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}: ProjectCardProps) {
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={style}
      className={`absolute cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group select-none ${
        isActive ? 'ring-2 ring-slate-900 shadow-2xl scale-[1.02]' : ''
      }`}
    >
      {/* Outer Card Frame */}
      <div
        className={`relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] overflow-hidden rounded-md border bg-slate-900 transition-all duration-500 ${
          isHovered
            ? 'border-slate-400/60 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)]'
            : 'border-slate-200/40 shadow-xl'
        }`}
      >
        {/* Base Image */}
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            if (project.fallback) {
              (e.target as HTMLImageElement).src = project.fallback;
            }
          }}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isHovered
              ? 'scale-110 brightness-90 filter contrast-[1.05]'
              : 'scale-100 brightness-[0.88] grayscale-[20%]'
          }`}
        />

        {/* Premium Architectural Blueprint / Linework SVG Overlay (Fades 0 -> 100% on hover) */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out ${
            isHovered ? 'opacity-90' : 'opacity-0'
          }`}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-20 mix-blend-overlay" />
          
          {/* SVG Linework Overlay */}
          <svg
            className="w-full h-full text-white/70"
            viewBox="0 0 360 450"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          >
            {/* Grid & Axis lines */}
            <line x1="30" y1="20" x2="330" y2="20" opacity="0.4" />
            <line x1="30" y1="430" x2="330" y2="430" opacity="0.4" />
            <line x1="30" y1="20" x2="30" y2="430" opacity="0.4" />
            <line x1="330" y1="20" x2="330" y2="430" opacity="0.4" />

            {/* Architectural Isometric / Dimension Linework */}
            <path d="M 60 360 L 180 280 L 300 360 L 180 440 Z" opacity="0.6" strokeDasharray="none" strokeWidth="1" />
            <path d="M 60 360 L 60 220 L 180 140 L 180 280 Z" opacity="0.7" strokeDasharray="none" strokeWidth="1" />
            <path d="M 300 360 L 300 220 L 180 140" opacity="0.7" strokeDasharray="none" strokeWidth="1" />
            <path d="M 120 180 L 240 260" opacity="0.5" />
            <path d="M 60 220 L 180 300 L 300 220" opacity="0.5" />

            {/* Corner Crosshairs & Labels */}
            <circle cx="60" cy="220" r="2" fill="white" opacity="0.8" />
            <circle cx="180" cy="140" r="2" fill="white" opacity="0.8" />
            <circle cx="300" cy="220" r="2" fill="white" opacity="0.8" />

            {/* Architectural Dimension Markings */}
            <text x="40" y="45" fill="white" fontSize="9" fontFamily="monospace" letterSpacing="1" opacity="0.9">
              SEC A-A' // ELEV. {(project.category || 'Architecture').toUpperCase()}
            </text>
            <text x="240" y="45" fill="white" fontSize="8" fontFamily="monospace" opacity="0.7">
              SCALE 1:100
            </text>

            <line x1="40" y1="410" x2="160" y2="410" strokeDasharray="none" strokeWidth="1" opacity="0.8" />
            <text x="80" y="402" fill="white" fontSize="8" fontFamily="monospace" opacity="0.9">
              14.80 m
            </text>
          </svg>
        </div>

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

        {/* Card Number Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs tracking-widest rounded-sm">
            {formattedNumber}
          </span>
        </div>

        {/* Hover Reveal Title + Location */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 z-20 transition-all duration-500 flex flex-col justify-end ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-85'
          }`}
        >
          <p className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-1">
            {formattedNumber} / {project.category || 'Architecture'} · {project.year || '2026'}
          </p>
          <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-slate-300 font-light tracking-wider mt-1 uppercase">
            {project.location}
          </p>

          {/* Interactive CTA line on hover */}
          <div
            className={`flex items-center gap-2 mt-3 pt-3 border-t border-white/20 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
            }`}
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-white">
              Explore Project Story
            </span>
            <svg className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
