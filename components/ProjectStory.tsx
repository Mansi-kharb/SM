'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ProjectData } from './ProjectCard';

interface ProjectStoryProps {
  project: ProjectData | null;
  allProjects: ProjectData[];
  onSelectNextProject: (nextProjectId: number) => void;
  onCloseStory?: () => void;
}

export default function ProjectStory({
  project,
  allProjects,
  onSelectNextProject,
  onCloseStory,
}: ProjectStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Auto-close Project Story when user scrolls away to other sections
  useEffect(() => {
    if (!project || !onCloseStory) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If user scrolls section completely out of view, close story automatically
        if (!entry.isIntersecting && entry.boundingClientRect.top !== 0) {
          onCloseStory();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [project, onCloseStory]);

  if (!project) return null;

  // Build items array from the project's actual images/content ONLY
  const projectImages = (project.images && project.images.length > 0)
    ? project.images
    : [project.image];

  const storyItems = projectImages.map((imgUrl, idx) => ({
    num: String(idx + 1).padStart(2, '0'),
    title: project.title,
    location: project.location,
    category: project.category,
    details: project.details || project.description || 'Thoughtfully crafted space defined by authentic material expression, spatial volume, and natural light.',
    image: imgUrl,
  }));

  const scrollToStep = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth * 0.82;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveStepIndex(index);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth * 0.82;
    const newIdx = Math.round(container.scrollLeft / cardWidth);
    if (newIdx !== activeStepIndex && newIdx >= 0 && newIdx < storyItems.length) {
      setActiveStepIndex(newIdx);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="project-story-section"
      className="bg-white text-slate-900 border-t border-slate-100 scroll-mt-10 py-6 overflow-hidden transition-all duration-500"
    >
      {/* Sticky Header Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-5 px-6 sm:px-12 flex items-center justify-between">
        {/* Project Title matching site typography */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight leading-none">
            {project.title}{' '}
            <span className="text-slate-400 font-light text-base sm:text-lg ml-2">
              ({project.location})
            </span>
          </h2>
        </div>

        {/* Step Indicators & Close */}
        <div className="flex items-center gap-6">
          {storyItems.length > 1 && (
            <div className="hidden sm:flex items-center gap-2">
              {storyItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStep(idx)}
                  className={`w-7 h-7 rounded-full text-xs font-light transition-all flex items-center justify-center cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-slate-900 text-white font-normal'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {item.num}
                </button>
              ))}
            </div>
          )}

          {storyItems.length > 1 && (
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <button
                onClick={() => scrollToStep(Math.max(0, activeStepIndex - 1))}
                disabled={activeStepIndex === 0}
                className="p-1.5 rounded-full hover:bg-slate-100 disabled:opacity-25 disabled:cursor-not-allowed text-slate-800 transition-colors cursor-pointer"
                aria-label="Previous Story Step"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span className="text-xs font-light text-slate-500 min-w-[36px] text-center">
                {String(activeStepIndex + 1).padStart(2, '0')} / {String(storyItems.length).padStart(2, '0')}
              </span>

              <button
                onClick={() => scrollToStep(Math.min(storyItems.length - 1, activeStepIndex + 1))}
                disabled={activeStepIndex === storyItems.length - 1}
                className="p-1.5 rounded-full hover:bg-slate-100 disabled:opacity-25 disabled:cursor-not-allowed text-slate-800 transition-colors cursor-pointer"
                aria-label="Next Story Step"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {onCloseStory && (
            <button
              onClick={onCloseStory}
              className="text-xs font-light uppercase tracking-widest px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full transition-colors cursor-pointer border border-slate-200"
            >
              Close ✕
            </button>
          )}
        </div>
      </div>

      {/* HORIZONTAL STORY SCROLL TRACK (Only renders actual project images/content) */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto scrollbar-none flex gap-6 sm:gap-10 px-6 sm:px-12 py-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
      >
        {storyItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-none w-[88vw] sm:w-[75vw] lg:w-[1000px] snap-center bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm transition-all duration-500 hover:shadow-md hover:border-slate-300"
          >
            {/* Header label */}
            <div className="flex items-end justify-between border-b border-slate-100 pb-4">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl sm:text-4xl font-light text-slate-400">
                  {item.num}
                </span>
                <span className="text-xs font-light tracking-widest text-slate-500 uppercase">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* Actual Visual Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 group">
              <img
                src={item.image}
                alt={`${item.title} - View ${item.num}`}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Actual Narrative Text */}
            <div className="max-w-3xl text-slate-600 font-light text-base sm:text-lg leading-relaxed border-l border-slate-300 pl-6">
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar if multiple images */}
      {storyItems.length > 1 && (
        <div className="max-w-[1700px] mx-auto px-6 sm:px-12 mt-2">
          <div className="w-full h-[2px] bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-900 transition-all duration-300"
              style={{ width: `${((activeStepIndex + 1) / storyItems.length) * 100}%` }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
