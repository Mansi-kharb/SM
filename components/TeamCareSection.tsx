import React from 'react';

export default function TeamCareSection() {
  return (
    <section className="bg-white pt-6 md:pt-10 pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
      {/* Outer Grey Card - Square Sharp Edges (rounded-none) */}
      <div className="w-full max-w-[1720px] min-h-[520px] lg:min-h-[620px] mx-auto bg-[#f4f4f4] rounded-none p-8 sm:p-12 md:p-14 lg:p-16 flex items-center relative overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-center pl-2 sm:pl-6 lg:pl-8 pr-0 lg:pr-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extralight text-slate-900 tracking-normal leading-[1.12] mb-6">
              Behind Every Space Is A Team That Cares.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-md">
              At Studio Materium, design is a deeply collaborative process. Our team
              brings together creativity, technical expertise, and a shared sensitivity
              towards materials, context, and craftsmanship. From the first sketch to the
              final detail, we work with honesty, curiosity, and care&mdash;creating
              spaces that are thoughtful, enduring, and distinctly personal.
            </p>

            {/* Interlocking Alternating Up and Down Triangles Pattern with Zero Gap */}
            <div className="flex items-center -space-x-[3.5px] text-[#0f5339]">
              {Array.from({ length: 28 }).map((_, index) => (
                <svg
                  key={index}
                  style={{ width: '13.61px', height: '17.43px' }}
                  className="fill-current flex-shrink-0"
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

          {/* Right Image Container - Soft Rounded Corners & Reduced Mobile Height (260px) */}
          <div className="lg:col-span-7">
            <div className="w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[500px] overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[32px] shadow-sm">
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
