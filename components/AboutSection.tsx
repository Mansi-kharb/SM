export default function AboutSection() {
  const stats = [
    { number: '150+', label: 'Projects' },
    { number: '12+', label: 'Years' },
    { number: '35+', label: 'Team\nDesigners' },
    { number: '20+', label: 'Awards' },
  ];

  return (
    <section id="about" className="bg-white pt-4 md:pt-6 pb-4 md:pb-6">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
              We Create Spaces That Inspire.
            </h2>
            <p className="text-gray-700 mb-6 font-light leading-relaxed text-base md:text-lg">
              We are a multidisciplinary design studio passionate about architecture and
              interior design. We believe the spaces we design shape the way people live
              and work.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 mt-10 pt-6 border-t border-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-2xl md:text-3xl font-light text-slate-900 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 font-light whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="/images/about-1.png"
              alt="About 1"
              className="w-full h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/about-2.png"
              alt="About 2"
              className="w-full h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/about-3.png"
              alt="About 3"
              className="w-full h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/about-4.png"
              alt="About 4"
              className="w-full h-40 md:h-48 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
