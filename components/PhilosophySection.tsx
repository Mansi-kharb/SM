'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
  const [isInView, setIsInView] = useState(false);
  const [animTrigger, setAnimTrigger] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  // Repeating animation loop (triggers pulse/slide loop continuously every few seconds)
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setAnimTrigger((prev) => !prev);
    }, 4000); // Pulse / loop every 4 seconds continuously

    return () => clearInterval(interval);
  }, [isInView]);

  const active = isInView && animTrigger;

  return (
    <section ref={sectionRef} className="bg-white pt-12 md:pt-16 pb-4 md:pb-6">
      <div className="container mx-auto px-6">
        {/* Main Philosophy - Exact Figma Specs: Heading 802px x 116px, Paragraph 565px x 63px */}
        <div className="max-w-[802px] mx-auto text-center mb-16">
          <h2 className="font-['Satoshi',sans-serif] text-4xl sm:text-5xl md:text-[52px] font-light tracking-tight text-slate-900 leading-[1.1] mb-1">
            Detail is not just a part of our process
          </h2>
          <p className="font-['Satoshi',sans-serif] text-4xl sm:text-5xl md:text-[52px] font-light text-[#0f5339] italic mb-6 leading-[1.1]">
            it is our process.
          </p>
          <p className="font-['Satoshi',sans-serif] text-sm sm:text-base text-slate-500 font-light leading-relaxed max-w-[565px] mx-auto">
            We believe excellence lies in the smallest elements — the nuances that often
            go unnoticed but make all the difference. It's this attention to detail that
            transforms our work from functional to unforgettable.
          </p>
        </div>

        {/* Side Entry Scroll Motion: WE DESIGN slides from left, WE BUILD slides from right */}
        <div className="w-full flex items-center justify-center py-10 overflow-hidden">
          <div className="flex items-center justify-center gap-6 md:gap-10">
            
            {/* WE DESIGN - Slides in from Left */}
            <motion.h3
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: '-100px' }}
              className="font-['Satoshi',sans-serif] text-5xl sm:text-7xl md:text-8xl font-light tracking-wider text-slate-900 whitespace-nowrap"
            >
              WE DESIGN
            </motion.h3>

            {/* Dark Green Triangle Arrow - Rotates & Scales in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: '-100px' }}
              className="flex-shrink-0"
            >
              <svg className="w-12 h-12 md:w-20 md:h-20 text-[#0f5339]" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="18,3 3,12 18,21" />
              </svg>
            </motion.div>

            {/* WE BUILD - Slides in from Right */}
            <motion.h3
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: '-100px' }}
              className="font-['Satoshi',sans-serif] text-5xl sm:text-7xl md:text-8xl font-light tracking-wider text-slate-900 whitespace-nowrap"
            >
              WE BUILD
            </motion.h3>

          </div>
        </div>
      </div>
    </section>
  );
}
