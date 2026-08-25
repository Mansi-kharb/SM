'use client';

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
            <h2 className="order-1 text-[27px] sm:text-4xl md:text-5xl font-light md:mb-8 tracking-wide leading-[1.15]">
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
