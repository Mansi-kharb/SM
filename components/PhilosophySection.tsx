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
        {/* Main Philosophy - Reduced Bottom Margin */}
        <div className="max-w-[802px] mx-auto text-center mb-6">
          <h2 className="font-['Satoshi',sans-serif] text-4xl sm:text-5xl md:text-[52px] font-light tracking-tight text-slate-900 leading-[1.1] mb-1">
            Detail is not just a part of our process
          </h2>
          <p className="font-['Satoshi',sans-serif] text-4xl sm:text-5xl md:text-[52px] font-light text-[#0f5339] italic mb-4 leading-[1.1]">
            it is our process.
          </p>
          <p className="font-['Satoshi',sans-serif] text-sm sm:text-base text-slate-500 font-light leading-relaxed max-w-[565px] mx-auto">
            We believe excellence lies in the smallest elements — the nuances that often
            go unnoticed but make all the difference. It's this attention to detail that
            transforms our work from functional to unforgettable.
          </p>
        </div>

        {/* Side Entry Scroll Motion: WE DESIGN slides from left, Arrow scales, WE BUILD slides from right */}
        <div className="w-full flex items-center justify-center py-2 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 md:gap-10 max-w-full px-4 text-center">
            
            {/* WE DESIGN - Slides in from Left */}
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="font-['Satoshi',sans-serif] text-4xl sm:text-6xl md:text-8xl font-light tracking-wider text-slate-900 whitespace-nowrap"
            >
              WE DESIGN
            </motion.h3>

            {/* Dark Green Triangle Arrow - Scales & Fades in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.2, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex-shrink-0 my-1 sm:my-0 rotate-90 sm:rotate-0"
            >
              <svg className="w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#0f5339]" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="18,3 3,12 18,21" />
              </svg>
            </motion.div>

            {/* WE BUILD - Slides in from Right */}
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="font-['Satoshi',sans-serif] text-4xl sm:text-6xl md:text-8xl font-light tracking-wider text-slate-900 whitespace-nowrap"
            >
              WE BUILD
            </motion.h3>

          </div>
        </div>
      </div>
    </section>
  );
}
