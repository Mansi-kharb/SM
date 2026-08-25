'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  images?: string[];
  details?: string;
}

/* Mobile: a thumbnail in the sticky rail. The active one dims, since the
   detail for it is already open below. */
function RailCard({
  project,
  active,
  onSelect,
}: {
  project: Project;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex flex-col flex-shrink-0 snap-start w-[42%] text-left transition-opacity duration-300 ${
        active ? 'opacity-40' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-24 flex-shrink-0 overflow-hidden bg-slate-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="block text-[10px] font-light text-emerald-500 uppercase tracking-wider mt-2">
        {project.category}
      </span>
      <span className="block text-xs font-light text-slate-900 leading-snug mt-0.5">
        {project.title}
      </span>
    </button>
  );
}

/* Mobile: the selected project, opened below the rail. It sits in normal
   page flow — no inner scroller — so the page scrolls and the sticky rail
   stays reachable the whole way down. */
function MobileDetail({ project }: { project: Project }) {
  const images = project.images?.length ? project.images : [project.image];

  return (
    <div className="pt-7">
      <span className="text-xs font-light text-emerald-500 uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="text-2xl font-light text-slate-900 mt-2 mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-slate-600 font-light">{project.location}</p>

      <p className="text-xs font-light text-slate-500 uppercase tracking-wider mt-7 mb-3">
        Gallery
      </p>
      <div className="flex flex-col gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[4/3] overflow-hidden bg-slate-200"
          >
            <img
              src={img}
              alt={`${project.title} — image ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {project.details && (
        <div className="mt-8">
          <h4 className="text-sm font-light text-slate-900 uppercase tracking-wider mb-3">
            About This Project
          </h4>
          <p className="text-sm font-light text-slate-700 leading-relaxed">
            {project.details}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProjectsGridSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const expandedScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const pinFrameRef = useRef<number | null>(null);
  const [imageScrollIndex, setImageScrollIndex] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects);
        // No auto-expand - all projects closed by default
      })
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleDoubleClick = () => {
    setExpandedProjectId(null);
    setImageScrollIndex(0);
    // Scroll to projects section (same as arrow click)
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };

  const closeProject = () => {
    setExpandedProjectId(null);
    setImageScrollIndex(0);

    // measure after the detail unmounts, and clear the fixed header
    setTimeout(() => {
      const el = sectionRef.current;
      if (!el) return;
      window.scrollTo({
        top: window.scrollY + el.getBoundingClientRect().top - 96,
        behavior: 'smooth',
      });
    }, 60);
  };

  const scrollToTop = () => {
    if (expandedScrollRef.current) {
      expandedScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (expandedScrollRef.current) {
      expandedScrollRef.current.scrollTo({
        top: expandedScrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleExpandedScroll = () => {
    if (!expandedScrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = expandedScrollRef.current;
    const atBottom = scrollHeight - scrollTop - clientHeight < 100;
    setIsAtBottom(atBottom);
  };

  const toggleScroll = () => {
    if (isAtBottom) {
      scrollToTop();
    } else {
      // At top - close the expanded project and scroll back to carousel
      setExpandedProjectId(null);
      setImageScrollIndex(0);
      // Scroll to projects section
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedProjectId(null);
        setImageScrollIndex(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const container = expandedScrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleExpandedScroll);
      // Initial check for bottom state
      setTimeout(() => handleExpandedScroll(), 100);
      return () => container.removeEventListener('scroll', handleExpandedScroll);
    }
  }, []);

  useEffect(() => {
    if (expandedProjectId) {
      // When project expands, always start with UP arrow (not at bottom)
      setIsAtBottom(false);

      // Ensure scroll state is reset
      if (expandedScrollRef.current) {
        expandedScrollRef.current.scrollTop = 0;
      }

      // Vertical only — pinToCentre owns the horizontal axis while the
      // card grows. Avoid scrollIntoView, which nudges both.
      setTimeout(() => {
        const card = scrollContainerRef.current?.querySelector(
          `[data-project-id="${expandedProjectId}"]`
        ) as HTMLElement | null;
        if (!card) return;

        window.scrollTo({
          top: window.scrollY + card.getBoundingClientRect().top - 112,
          behavior: 'smooth',
        });
      }, 60);
    }
  }, [expandedProjectId]);

  useEffect(() => {
    return () => {
      if (pinFrameRef.current !== null) cancelAnimationFrame(pinFrameRef.current);
    };
  }, []);

  // Bring a card's centre to the scrollport's centre.
  const centreCard = (card: HTMLElement, smooth: boolean) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta =
      cardRect.left -
      containerRect.left -
      (container.clientWidth - cardRect.width) / 2;

    if (Math.abs(delta) < 0.5) return;
    container.scrollTo({
      left: container.scrollLeft + delta,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  // Hold the card at the centre for every frame of its width transition,
  // so growing outward never pushes it off-centre.
  const pinToCentre = (card: HTMLElement, duration: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Per-frame writes must not be smoothed, or they queue up and stutter.
    const previousBehavior = container.style.scrollBehavior;
    container.style.scrollBehavior = 'auto';

    let start: number | null = null;
    const step = (now: number) => {
      if (start === null) start = now;
      centreCard(card, false);
      if (now - start < duration) {
        pinFrameRef.current = requestAnimationFrame(step);
      } else {
        container.style.scrollBehavior = previousBehavior;
        pinFrameRef.current = null;
      }
    };
    pinFrameRef.current = requestAnimationFrame(step);
  };

  // Centre first, expand second.
  const openProject = (id: number) => {
    setImageScrollIndex(0);

    const container = scrollContainerRef.current;
    const card = container?.querySelector(
      `[data-project-id="${id}"]`
    ) as HTMLElement | null;

    if (!container || !card) {
      setExpandedProjectId(id);
      return;
    }

    centreCard(card, true);

    window.setTimeout(() => {
      setExpandedProjectId(id);
      pinToCentre(card, 900);
    }, 440);
  };

  const expandedProject = projects.find(p => p.id === expandedProjectId);
  const projectImages = expandedProject?.images?.length ? expandedProject.images : [expandedProject?.image].filter(Boolean);

  if (projects.length === 0) return null;

  return (
    <section ref={sectionRef} className="bg-white py-5 md:py-14 overflow-x-clip">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }


        @keyframes fadeInBlur {
          from {
            opacity: 0;
            filter: blur(10px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes expandCard {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .image-animate {
          animation: fadeInBlur 0.8s ease-out forwards;
        }

        .image-animate:hover {
          transform: scale(1.05);
          transition: transform 0.4s ease-out;
        }

        .expand-animation {
          animation: expandCard 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="mb-12 md:mb-16 max-w-full mx-auto">
          <h2 className="font-['Satoshi',sans-serif] text-4xl md:text-5xl font-light text-slate-900 mb-2 tracking-tight">
            Our Projects
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-3xl">
            From the first line on a drawing to the final material installed on site,
            we look at the complete picture.
          </p>
        </div>

        {/* Mobile: rail stays put at the top, the picked project opens
            underneath it */}
        <div className="md:hidden">
          <div className="sticky top-[80px] z-30 bg-white pt-2 pb-3">
            <div className="flex items-start gap-3 overflow-x-auto snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projects.map((project) => (
                <RailCard
                  key={project.id}
                  project={project}
                  active={project.id === expandedProjectId}
                  onSelect={() => setExpandedProjectId(project.id)}
                />
              ))}
            </div>

            {expandedProjectId !== null && (
              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={closeProject}
                  className="group inline-flex items-center gap-2 border border-slate-900 px-3 py-1.5 transition-colors duration-300 hover:bg-slate-900"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-900 transition-colors duration-300 group-hover:text-white">
                    Close
                  </span>
                  <svg
                    className="w-2 h-2 text-[#0f5339] transition-colors duration-300 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {expandedProject && <MobileDetail project={expandedProject} />}
        </div>

        <div className="hidden md:block relative -mx-6 sm:-mx-10 lg:-mx-16">
          <div
            ref={scrollContainerRef}
            className={`flex items-start gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-4 px-6 hide-scrollbar ${
              expandedProjectId !== null ? 'md:px-[16vw]' : 'sm:px-10 lg:px-16'
            }`}
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project) => {
              const isExpanded = expandedProjectId === project.id;
              const projectImgs = project.images?.length ? project.images : [project.image];

              return (
                <div
                  key={project.id}
                  data-project-id={project.id}
                  onDoubleClick={handleDoubleClick}
                  className={`flex-shrink-0 group transition-[width] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isExpanded ? 'w-full md:w-[70vw]' : 'w-1/3 md:w-1/4'
                  }`}
                >
                  {isExpanded ? (
                    <div className="flex flex-col h-full min-h-screen bg-white rounded-lg border-0 expand-animation">
                      <div className="px-6 md:px-8 pt-6 md:pt-8 flex-shrink-0 pb-6">
                        <span className="text-xs md:text-sm font-light text-emerald-500 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-light text-slate-900 mt-3 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 font-light">
                          {project.location}
                        </p>
                      </div>

                      <div ref={expandedScrollRef} className="flex-1 overflow-y-auto px-6 md:px-8 py-6 hide-scrollbar">

                        {/* Images Grid - All images scrollable */}
                        <div className="mb-12">
                          <p className="text-xs font-light text-slate-500 uppercase tracking-wider mb-4">
                            Gallery
                          </p>
                          <div className="grid grid-cols-1 gap-6">
                            {projectImgs.map((img, idx) => (
                              <div
                                key={idx}
                                className="relative w-full aspect-video bg-slate-200 overflow-hidden rounded cursor-pointer border-r border-slate-300"
                              >
                                <img
                                  src={img}
                                  alt={`Image ${idx + 1}`}
                                  className="w-full h-full object-cover image-animate"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        {project.details && (
                          <div className="mb-8">
                            <h4 className="text-sm font-light text-slate-900 uppercase tracking-wider mb-3">
                              About This Project
                            </h4>
                            <p className="text-sm font-light text-slate-700 leading-relaxed">
                              {project.details}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                          <div className="text-xs font-light text-slate-400 uppercase tracking-wider">
                            Double click to close - ESC to exit
                          </div>
                          <button
                            onClick={toggleScroll}
                            className="p-2 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-emerald-500 text-slate-700 hover:text-white transition-all duration-300"
                            title={isAtBottom ? "Scroll to top" : "Close project"}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => openProject(project.id)}
                      className="flex flex-col h-full cursor-pointer"
                    >
                      <div className="pb-4 md:pb-5 md:min-h-[8.75rem]">
                        <span className="text-xs md:text-sm font-light text-emerald-500 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-sm md:text-base font-light text-slate-900 mt-2 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 font-light">
                          {project.location}
                        </p>
                      </div>

                      <div className="relative w-full h-36 sm:h-48 md:h-64 overflow-hidden bg-slate-200 border border-slate-200 hover:border-slate-300 transition-all duration-300">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 group-hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-7-7m7 7l7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Gutter beside the expanded card. Hover shows the hint, double
              click goes back. md and up only — below that the card is
              full width, so there is no gutter (and no hover either). */}
          {expandedProjectId !== null &&
            (['left', 'right'] as const).map((side) => (
              <div
                key={side}
                onDoubleClick={handleDoubleClick}
                title="Double click to go back"
                className={`group/gutter hidden md:block absolute top-0 bottom-0 w-[15vw] z-20 cursor-pointer ${
                  side === 'left' ? 'left-0' : 'right-0'
                }`}
              >
                {/* sticky so the hint stays with the viewport however far
                    down the gallery the reader has scrolled */}
                <span className="sticky top-[45vh] block text-center px-4 text-[11px] font-light uppercase tracking-[0.18em] text-slate-400 leading-relaxed opacity-0 group-hover/gutter:opacity-100 transition-opacity duration-300 select-none">
                  Double click
                  <br />
                  to go back
                </span>
              </div>
            ))}

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-40 p-2 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-300 hidden lg:flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-40 p-2 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-300 hidden lg:flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}