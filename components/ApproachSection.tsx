'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  'Thoughtful Design.',
  'Precise Detailing.',
  'Material Intelligence.',
  'Seamless Execution.',
];

const CREDENTIALS = [
  { value: '12+', label: 'Years of Design Experience' },
  { value: 'Pan India', label: 'Projects Across Diverse Contexts' },
  { value: 'Architecture + Interiors', label: 'Integrated Design Practice' },
  { value: 'Design to Execution', label: 'End-to-End Approach' },
];

/* Everything cascades top-to-bottom once the panel is open */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function ApproachSection({ open = false }: { open?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  /* Bring the panel into view once it has finished opening */
  useEffect(() => {
    if (!open) return;

    const id = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 260);

    return () => clearTimeout(id);
  }, [open]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.section
          id="studio-philosophy"
          key="studio-philosophy"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="bg-white overflow-hidden"
        >
          <div ref={ref} className="container mx-auto px-6 pt-10 pb-14 md:pt-14 md:pb-20">
            <div className="max-w-[1180px] mx-auto">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

                {/* Studio image — curtain lifts to reveal it */}
                <div className="lg:col-span-5 relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:min-h-[560px]">
                  <motion.img
                    src="/images/process/define.jpg"
                    alt="Architect developing a project model at the studio workstation"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <motion.span
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
                    className="absolute inset-0 bg-white origin-bottom"
                  />
                </div>

                {/* Copy */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <motion.h2
                    {...rise(0.25)}
                    className="text-4xl md:text-5xl font-light text-slate-900 tracking-wide leading-[1.15]"
                  >
                    From Concept to Completion.
                  </motion.h2>

                  <motion.p
                    {...rise(0.36)}
                    className="text-lg md:text-xl text-slate-900 font-light leading-relaxed mt-8"
                  >
                    For us, design does not stop at the drawing board.
                  </motion.p>

                  <motion.p
                    {...rise(0.46)}
                    className="text-base md:text-lg text-gray-700 font-light leading-relaxed mt-5 max-w-[620px]"
                  >
                    We develop every project through a process of research, design
                    development, detailing, material selection and execution. This allows
                    us to maintain the integrity of the original idea all the way through
                    to the finished space.
                  </motion.p>

                  {/* Four pillars */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mt-10">
                    {PILLARS.map((pillar, i) => (
                      <motion.li
                        key={pillar}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.62 + 0.09 * i, ease: EASE }}
                        className="flex items-baseline gap-3.5"
                      >
                        <span className="text-xs font-medium text-[#0f5339] tracking-[0.15em] flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-base md:text-lg font-light text-slate-900 leading-snug">
                          {pillar}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Credentials */}
              <div className="mt-14 md:mt-16">

                {/* Rule that draws across the full width */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.98, ease: EASE }}
                  className="block h-px w-full bg-[#0f5339]/30 origin-left"
                />

                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {CREDENTIALS.map((item, i) => (
                    <motion.div
                      key={item.value}
                      {...rise(1.18 + 0.09 * i)}
                      className="relative pt-8 pb-2 lg:px-8 lg:first:pl-0 lg:last:pr-0"
                    >
                      {/* Divider between columns */}
                      {i > 0 && (
                        <motion.span
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.8, delay: 1.12 + 0.09 * i, ease: EASE }}
                          className="hidden lg:block absolute left-0 top-8 bottom-2 w-px bg-[#0f5339]/25 origin-top"
                        />
                      )}

                      <p className="text-lg md:text-xl font-light text-slate-900 leading-snug">
                        {item.value}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed mt-2">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
