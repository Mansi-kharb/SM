'use client';

/* About: the introduction, the philosophy panel it opens, and the team card. */

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── AboutSection ─────────────────────────────────────────────── */

type AboutSectionProps = {
  isPhilosophyOpen?: boolean;
  onTogglePhilosophy?: () => void;
};

export default function AboutSection({
  isPhilosophyOpen = false,
  onTogglePhilosophy,
}: AboutSectionProps) {
  return (
    <section id="about" className="bg-white pt-4 md:pt-6 pb-4 md:pb-6">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {/* Text — `contents` on mobile lets the image grid slot in
              between the heading and the body copy */}
          <div className="contents md:block">
            <h2 className="order-1 font-serif text-[27px] sm:text-4xl md:text-5xl font-medium md:mb-8 tracking-wide leading-[1.15]">
              Spaces Designed With Intention.
            </h2>

            <div className="order-3 md:contents">
              <p className="text-gray-700 mb-3.5 sm:mb-5 font-light leading-[1.6] sm:leading-relaxed text-[15px] sm:text-base md:text-lg">
                Studio Materium is a multidisciplinary architecture and interior design
                studio based in Delhi NCR, working across residential, commercial,
                hospitality and bespoke spaces.
              </p>

              <p className="text-gray-700 mb-3.5 sm:mb-5 font-light leading-[1.6] sm:leading-relaxed text-[15px] sm:text-base md:text-lg">
                Our approach brings together design, materiality, functionality and
                execution to create spaces that are not only visually compelling, but
                considered down to the smallest detail.
              </p>

              <p className="text-slate-900 font-light leading-[1.6] sm:leading-relaxed text-[15px] sm:text-base md:text-lg">
                We believe good design is experienced&mdash;not simply seen.
              </p>

              {/* Reveals the studio philosophy panel below */}
              <button
                type="button"
                onClick={onTogglePhilosophy}
                aria-expanded={isPhilosophyOpen}
                aria-controls="studio-philosophy"
                className="group mt-7 md:mt-9 inline-flex items-center gap-5 border border-slate-900 px-6 py-3.5 cursor-pointer transition-colors duration-300 hover:bg-slate-900"
              >
                <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {isPhilosophyOpen ? 'Read Less' : 'Read More'}
                </span>
                <svg
                  className={`w-2.5 h-2.5 text-[#0f5339] transition-all duration-500 group-hover:text-white ${
                    isPhilosophyOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="3,6 21,6 12,20" />
                </svg>
              </button>
            </div>
          </div>

          {/* Images Grid */}
          <div className="order-2 md:order-none grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="/images/about-1.png"
              alt="About 1"
              className="w-full h-28 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/about-2.png"
              alt="About 2"
              className="w-full h-28 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/about-3.png"
              alt="About 3"
              className="w-full h-28 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/about-4.png"
              alt="About 4"
              className="w-full h-28 sm:h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


/* ── ApproachSection ─────────────────────────────────────────────── */

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

export function ApproachSection({ open = false }: { open?: boolean }) {
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
                    className="order-1 lg:order-none font-serif text-4xl md:text-5xl font-medium text-slate-900 tracking-wide leading-[1.15]"
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


/* ── TeamCareSection ─────────────────────────────────────────────── */

export function TeamCareSection() {
  return (
    <section className="bg-white pt-4 pb-8 md:pt-10 md:pb-16 px-4 sm:px-6 md:px-8">
      {/* Outer Grey Card - Square Sharp Edges (rounded-none) */}
      <div className="w-full max-w-[1720px] lg:min-h-[620px] mx-auto bg-[#f4f4f4] rounded-none p-6 sm:p-12 md:p-14 lg:p-16 flex items-center relative overflow-hidden">
        <div className="w-full flex flex-col gap-5 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Left Content Column */}
          <div className="contents lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:pl-8 lg:pr-4">
            <h2 className="order-1 lg:order-none font-serif text-[26px] sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-slate-900 tracking-normal leading-[1.12] lg:mb-6">
              Behind Every Space Is A Team That Cares.
            </h2>

            <div className="order-3 lg:contents">
              <p className="text-gray-600 text-[13px] sm:text-base font-light leading-[1.6] sm:leading-relaxed mb-5 lg:mb-8 max-w-md">
                At Studio Materium, design is a deeply collaborative process. Our team
                brings together creativity, technical expertise, and a shared sensitivity
                towards materials, context, and craftsmanship. From the first sketch to the
                final detail, we work with honesty, curiosity, and care&mdash;creating
                spaces that are thoughtful, enduring, and distinctly personal.
              </p>

              {/* Interlocking Alternating Up and Down Triangles Pattern with Zero Gap */}
              {/* Below lg the row runs the full width and is clipped, so the
                  band always reaches both edges whatever the card width.
                  At lg the original 28 triangles stand on their own. */}
              <div className="flex items-center -space-x-[3.5px] text-[#0f5339] w-full overflow-hidden lg:w-auto lg:overflow-visible">
                {Array.from({ length: 80 }).map((_, index) => (
                  <svg
                    key={index}
                    style={{ width: '13.61px', height: '17.43px' }}
                    className={`fill-current flex-shrink-0 ${
                      index >= 28 ? 'lg:hidden' : ''
                    }`}
                    viewBox="0 0 13.61 17.43"
                  >
                    {index % 2 === 0 ? (
                      /* Up Triangle ▲ */
                      <polygon points="6.805,0 0,17.43 13.61,17.43" />
                    ) : (
                      /* Down Triangle ▼ */
                      <polygon points="6.805,17.43 0,0 13.61,0" />
                    )}
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Container - Soft Rounded Corners & Reduced Mobile Height (260px) */}
          <div className="order-2 lg:order-none lg:col-span-7">
            <div className="w-full h-[190px] sm:h-[340px] md:h-[440px] lg:h-[500px] overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[32px] shadow-sm">
              <img
                src="/images/about-1.png"
                alt="Team that cares"
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[32px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
