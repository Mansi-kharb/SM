'use client';

import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/* leading-[1.2] leaves room for descenders so the mask never clips them */
const STATEMENT =
  'block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.2]';

/* Each line rises out from behind a mask */
function Line({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className: string;
}) {
  return (
    /* The trigger lives on the wrapper: a child translated out of an
       overflow-hidden box is fully clipped, so IntersectionObserver would
       never report it in view and the reveal would never fire. */
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      className="block overflow-hidden"
    >
      <motion.span
        variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
        transition={{ duration: 1, delay, ease: EASE }}
        className={`${STATEMENT} ${className}`}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export default function ClosingSection() {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-20 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-[1100px] mx-auto text-center">

          <h2>
            <Line delay={0} className="text-slate-900">
              We don&rsquo;t just design spaces.
            </Line>
            <Line delay={0.14} className="text-[#0f5339]">
              We give them character.
            </Line>
          </h2>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            viewport={{ once: false, amount: 0.4 }}
            className="block h-px w-16 bg-[#0f5339]/40 mx-auto mt-8 md:mt-9 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease: EASE }}
            viewport={{ once: false, amount: 0.4 }}
            className="text-base md:text-lg text-gray-700 font-light leading-relaxed max-w-[640px] mx-auto mt-9 md:mt-10"
          >
            Because the difference between a good space and an exceptional one is often
            found in the details nobody notices at first&mdash;but everyone experiences.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
