'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Initial consultation and creative ideation. We begin by listening — to your space, your goals, and the story you want your space to tell.',
    },
    {
      number: '02',
      title: 'Define',
      description: 'Detailed planning and 3D visualization. We translate insights into structured parameters with realistic project visualization and approval.',
      description2: 'Advanced 3D rendering for realistic project visualization.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Material selection and execution planning. Curated selection of premium materials and finishes with comprehensive project implementation strategy.',
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'With precision and passion, we turn every design into a finished reality that exceeds expectations. Complete project handover with quality assurance.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden border-t border-slate-100">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col space-y-20">
        
        {/* ROW 1: Headline (419px x 240px) + Step 01 & 02 (Cards 430px x 550px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Headline (Cols 1-4) - Exact Figma Box Specs: 419px x 240px */}
          <div className="lg:col-span-4 pt-2 pr-4">
            <h2 className="font-['Satoshi',sans-serif] text-3xl sm:text-4xl md:text-[40px] leading-[1.12] font-light text-slate-900 tracking-tight max-w-[419px]">
              From Insight to<br />
              Impact — <span className="text-[#a3a3a3] font-light">a journey<br />
              shaped by intent,<br />
              detail, and<br />
              collaboration.</span>
            </h2>
          </div>

          {/* Steps 01 & 02 (Cols 5-12) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Timeline Track 1 - Side by Side 2-Column on Mobile & Desktop */}
            <div className="relative flex items-center h-[40px] sm:h-[50px] mb-3 sm:mb-4">
              <div className="absolute left-0 -right-[100vw] h-[32px] sm:h-[40.26px] top-1/2 -translate-y-1/2 z-0 overflow-hidden">
                <svg className="w-full h-full" width="100%" height="40.26">
                  <defs>
                    <pattern id="tessellated-triangles-track-1" width="20" height="40.26" patternUnits="userSpaceOnUse">
                      <path d="M 0 0 L 10 20.13 L 20 0 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 40.26 L 20 40.26 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 0 L 0 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 20 0 L 20 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#tessellated-triangles-track-1)" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-10 w-full">
                <div className="flex items-center">
                  <span className="w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] bg-black text-white text-[11px] sm:text-sm font-mono font-medium rounded-[10px] sm:rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    01
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] bg-black text-white text-[11px] sm:text-sm font-mono font-medium rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    02
                  </span>
                </div>
              </div>
            </div>

            {/* Titles & Paragraphs 01 & 02 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-10 mb-4 sm:mb-6">
              <div>
                <h3 className="font-['Satoshi',sans-serif] text-sm sm:text-[18px] font-medium text-slate-900 mb-0.5 sm:mb-1">
                  {steps[0].title}
                </h3>
                <p className="font-['Satoshi',sans-serif] text-[10px] sm:text-[13px] text-slate-500 font-light leading-snug sm:leading-relaxed max-w-[266px]">
                  {steps[0].description}
                </p>
              </div>

              <div>
                <h3 className="font-['Satoshi',sans-serif] text-sm sm:text-[18px] font-medium text-slate-900 mb-0.5 sm:mb-1">
                  {steps[1].title}
                </h3>
                <p className="font-['Satoshi',sans-serif] text-[10px] sm:text-[13px] text-slate-500 font-light leading-snug sm:leading-relaxed max-w-[266px]">
                  {steps[1].description}
                </p>
              </div>
            </div>

            {/* Cards 01 & 02 - Side by Side 2-Column Layout */}
            <div className="grid grid-cols-2 gap-3 sm:gap-10">
              {/* Card 1: Discover - concept board & floor plans */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-xl sm:rounded-[28px] overflow-hidden bg-[#f4f7f5] border border-slate-200/60 shadow-sm group">
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-[#0f5339] z-20 shadow-sm" />
                <img
                  src="/images/process/discover.jpg"
                  alt="Discover - mood board, floor plans and concept sketches on a studio desk"
                  className="w-full h-full object-cover rounded-xl sm:rounded-[28px] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card 2: Define - 3D visualization in progress */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-xl sm:rounded-[28px] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm group">
                <img
                  src="/images/process/define.jpg"
                  alt="Define - designer refining a 3D model of the project on screen"
                  className="w-full h-full object-cover rounded-xl sm:rounded-[28px] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>

        </div>

        {/* ROW 2: Steps 03 & 04 (Cols 1-8) + Empty Space (Cols 9-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Steps 03 & 04 (Cols 1-8) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Timeline Track 2 extending from left edge to badge 04 */}
            <div className="relative flex items-center h-[50px] mb-4">
              <div className="absolute -left-[100vw] right-[calc(50%-41px)] sm:right-[calc(50%-49px)] h-[40.26px] top-1/2 -translate-y-1/2 z-0 overflow-hidden">
                <svg className="w-full h-full" width="100%" height="40.26">
                  <defs>
                    <pattern id="tessellated-triangles-track-2" width="20" height="40.26" patternUnits="userSpaceOnUse">
                      <path d="M 0 0 L 10 20.13 L 20 0 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 40.26 L 20 40.26 Z" fill="#ebf3ef" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 0 0 L 0 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M 10 20.13 L 20 0 L 20 40.26 Z" fill="#e2ede7" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#tessellated-triangles-track-2)" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-8 sm:gap-12 w-full">
                <div className="flex items-center">
                  <span className="w-[50px] h-[50px] bg-black text-white text-sm font-mono font-medium rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    03
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-[50px] h-[50px] bg-black text-white text-sm font-mono font-medium rounded-[14px] flex items-center justify-center tracking-wider shadow-md">
                    04
                  </span>
                </div>
              </div>
            </div>

            {/* Step Titles & Paragraphs 03 & 04 */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 mb-6">
              <div>
                <h3 className="text-base font-medium text-slate-900 mb-1">
                  {steps[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-[320px]">
                  {steps[2].description}
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-slate-900 mb-1">
                  {steps[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-[320px]">
                  {steps[3].description}
                </p>
              </div>
            </div>

            {/* Cards 03 & 04 */}
            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              {/* Card 3: Design - material & finish selection */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow group">
                <img
                  src="/images/process/design.jpg"
                  alt="Design - material and finish swatch board with specifications"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card 4: Deliver - completed space at handover */}
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] aspect-[290/370] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow group">
                <img
                  src="/images/process/deliver.jpg"
                  alt="Deliver - completed interior at handover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>

          {/* Empty Space (Cols 9-12) */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>

      </div>
    </section>
  );
}
