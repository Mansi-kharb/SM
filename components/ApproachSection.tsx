'use client';

import { useRef } from 'react';
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
          onAnimationComplete={() => {
            if (!open || !ref.current) return;
            window.scrollTo({
              top: window.scrollY + ref.current.getBoundingClientRect().top - 96,
              behavior: 'smooth',
            });
          }}
          className="bg-white overflow-hidden"
        >
          <div ref={ref} className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 pt-8 pb-5 md:pt-14 md:pb-10">
            <div className="max-w-[1180px] mx-auto">

              <div className="flex flex-col gap-7 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-stretch">

                {/* Studio image — curtain lifts to reveal it */}
                <div className="order-2 lg:order-none lg:col-span-5 relative overflow-hidden aspect-[3/2] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[560px]">
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
                <div className="contents lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
                  <motion.h2
                    {...rise(0.25)}
                    className="order-1 lg:order-none text-4xl md:text-5xl font-light text-slate-900 tracking-wide leading-[1.15]"
                  >
                    From Concept to Completion.
                  </motion.h2>

                  <div className="order-4 lg:contents">
                    <motion.p
                      {...rise(0.36)}
                      className="text-[17px] md:text-xl text-slate-900 font-light leading-relaxed mt-6 md:mt-8"
                    >
                      For us, design does not stop at the drawing board.
                    </motion.p>

                    <motion.p
                      {...rise(0.46)}
                      className="text-[15px] sm:text-base md:text-lg text-gray-700 font-light leading-[1.6] sm:leading-relaxed mt-4 md:mt-5 max-w-[620px]"
                    >
                      We develop every project through a process of research, design
                      development, detailing, material selection and execution. This allows
                      us to maintain the integrity of the original idea all the way through
                      to the finished space.
                    </motion.p>

                  </div>

                  {/* Four pillars */}
                  <ul className="order-3 lg:order-none flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mt-7 md:mt-10 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-3 sm:overflow-visible sm:snap-none">
                    {PILLARS.map((pillar, i) => (
                      <motion.li
                        key={pillar}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.62 + 0.09 * i, ease: EASE }}
                        className="relative flex-shrink-0 snap-start w-[46%] flex flex-col gap-1.5 pt-7 pr-5 before:content-[''] before:absolute before:left-0 before:right-0 before:top-[3.5px] before:h-px before:bg-[#0f5339]/30 sm:w-auto sm:flex-shrink sm:flex-row sm:items-baseline sm:gap-3.5 sm:pt-0 sm:pr-0 sm:before:hidden"
                      >
                        <span className="sm:hidden absolute left-0 top-0 w-2 h-2 rounded-full bg-[#0f5339]" />
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
              <div className="mt-10 md:mt-16">

                <div className="flex gap-7 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-0 lg:overflow-visible lg:snap-none">
                  {CREDENTIALS.map((item, i) => (
                    <motion.div
                      key={item.value}
                      {...rise(1.18 + 0.09 * i)}
                      className="relative flex-shrink-0 snap-start w-[58%] sm:w-[38%] pb-2 lg:w-auto lg:flex-shrink lg:pt-8 lg:px-8 lg:first:pl-0 lg:last:pr-0"
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
