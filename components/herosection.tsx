'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is visible - play video
          video.play().catch(() => {
            // Autoplay might be blocked, but we tried
          });
        } else {
          // Section is not visible - pause video
          video.pause();
          video.currentTime = 0; // Reset to start
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100svh] bg-gray-100 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Hero%20Section%20video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Gradient Overlay for optimal mobile text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

      {/* Content - Left Bottom Positioned with Responsive Mobile Styling */}
      <div className="absolute bottom-14 sm:bottom-16 md:bottom-20 left-5 sm:left-12 md:left-16 right-5 sm:right-auto z-10 text-white">
        
        {/* Headline Box: Responsive font size & width */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-[52px] font-medium leading-[1.08] sm:leading-[1.02] tracking-tight text-white mb-4 sm:mb-6 text-left max-w-[522px] drop-shadow-md">
          Designing Extraordinary Spaces
        </h1>

        {/* Subtitle Box: Responsive text size & margin */}
        <p className="font-['Satoshi',sans-serif] text-xs sm:text-sm text-slate-100 font-light leading-relaxed mb-0.5 sm:mb-1 text-left max-w-[427px] opacity-95">
          Architecture | Interior Design
        </p>

        {/* Tags Box: Responsive text size */}
        <p className="font-['Satoshi',sans-serif] text-xs sm:text-sm text-slate-100 font-light leading-relaxed mb-4 sm:mb-6 text-left max-w-[427px] opacity-90">
          Workspace | Luxury Residences | Commercial
        </p>

        {/* Contact Button Box: Crisp White Text on Mobile for 100% contrast */}
        <button
          onClick={(e) => {
            e.preventDefault();
            // Dispatch event to open contact form
            window.dispatchEvent(new CustomEvent('openContactForm'));
            // Scroll to contact section
            setTimeout(() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
          className="inline-flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Triangle Icon ▲ */}
          <div className="w-[12px] h-[14px] flex items-center justify-center flex-shrink-0">
            <svg
              className="w-full h-full text-white fill-current group-hover:scale-110 transition-transform"
              viewBox="0 0 13.61 17.43"
            >
              <polygon points="6.805,0 0,17.43 13.61,17.43" />
            </svg>
          </div>

          <span className="font-['Satoshi',sans-serif] text-xs sm:text-sm font-medium uppercase tracking-wider text-white group-hover:text-emerald-200 transition-colors whitespace-nowrap drop-shadow">
            CONTACT OUR TEAM
          </span>
        </button>
      </div>
    </section>
  );
}
