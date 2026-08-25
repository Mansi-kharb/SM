'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/* How often the statement line replays while the section is on screen */
const REPLAY_MS = 6000;

/* Fluid type so all three phrases always hold a single line */
const LINE_TEXT =
  "font-['Satoshi',sans-serif] text-[clamp(0.8rem,3.6vw,5.5rem)] font-light tracking-[0.04em] whitespace-nowrap leading-none";

/* Triptych — one image per phrase in the line above:
   drawings -> materials -> finished work. */
const BAND = [
  {
    src: '/images/process/discover.jpg',
    alt: 'Studio desk with floor plans, concept sketches and a materials moodboard',
  },
  {
    src: '/images/process/design.jpg',
    alt: 'Material palette laid out — Carrara marble, natural oak, brass and linen',
  },
  {
    src: '/images/process/deliver.jpg',
    alt: 'Completed double-height living space in concrete and timber',
  },
];

/* Dark green triangle — scales with the headline via em units */
function Arrow({ delay, show }: { delay: number; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2, rotate: -45 }}
      animate={
        show
          ? { opacity: 1, scale: 1, rotate: 0 }
          : { opacity: 0, scale: 0.2, rotate: -45 }
      }
      transition={{ duration: 0.7, delay, ease: EASE }}
      className="flex-shrink-0"
    >
      <svg
        className="w-[0.52em] h-[0.52em] text-[#0f5339]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <polygon points="18,3 3,12 18,21" />
      </svg>
    </motion.div>
  );
}

export default function PhilosophySection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [cycle, setCycle] = useState(0);

  /* Track whether the statement line is on screen */
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  /* Replay the entrance every REPLAY_MS for as long as it stays in view.
     Bumping `cycle` remounts the row, so the whole sequence runs again. */
  useEffect(() => {
    if (!inView) return;

    const id = setInterval(() => setCycle((c) => c + 1), REPLAY_MS);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section className="bg-white pt-12 md:pt-16 lg:pt-20 pb-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Single line: WE DESIGN ◂ WE DETAIL ◂ WE DELIVER — replays every REPLAY_MS */}
        <div ref={lineRef} className="w-full flex items-center justify-center overflow-hidden">
          <div
            key={cycle}
            className={`flex flex-row items-center justify-center gap-[0.35em] ${LINE_TEXT}`}
          >

            {/* WE DESIGN - slides in from left */}
            <motion.h2
              initial={{ opacity: 0, x: '-40%' }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-40%' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-slate-900"
            >
              WE DESIGN
            </motion.h2>

            <Arrow delay={0.15} show={inView} />

            {/* WE DETAIL - rises in from centre */}
            <motion.h2
              initial={{ opacity: 0, y: '45%', scale: 0.92 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: '45%', scale: 0.92 }
              }
              transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
              className="text-slate-900"
            >
              WE DETAIL
            </motion.h2>

            <Arrow delay={0.37} show={inView} />

            {/* WE DELIVER - slides in from right with a settling scale */}
            <motion.h2
              initial={{ opacity: 0, x: '40%', scale: 0.92 }}
              animate={
                inView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: '40%', scale: 0.92 }
              }
              transition={{ duration: 0.9, delay: 0.44, ease: EASE }}
              className="text-slate-900"
            >
              WE DELIVER
            </motion.h2>

          </div>
        </div>

        {/* Intro statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-['Satoshi',sans-serif] text-[15px] sm:text-base text-slate-400 font-light leading-[1.75] text-center max-w-[540px] mx-auto mt-10 md:mt-12"
        >
          A multidisciplinary design practice creating architecture and interiors that
          are thoughtful in concept, refined in execution and timeless in character.
        </motion.p>
      </div>

      {/* Detail triptych — reveals once, then stays put */}
      <div className="container mx-auto px-6 mt-16 md:mt-24">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {BAND.map((item, i) => (
            <div
              key={item.src}
              className={`group ${i === 1 ? 'sm:mt-10' : ''} ${i === 2 ? 'sm:mt-20' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />

                {/* White curtain lifts once to reveal the image */}
                <motion.span
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  transition={{ duration: 1.1, delay: 0.12 * i, ease: EASE }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="absolute inset-0 bg-white origin-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
