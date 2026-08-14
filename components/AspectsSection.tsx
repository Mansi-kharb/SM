'use client';

export default function AspectsSection() {
  const aspects = [
    {
      id: 1,
      title: 'Innovation',
      description: 'Cutting-edge design solutions',
      image: '/images/project-1.svg',
      icon: '◆'
    },
    {
      id: 2,
      title: 'Sustainability',
      description: 'Eco-friendly architectural practices',
      image: '/images/project-2.svg',
      icon: '◆'
    },
    {
      id: 3,
      title: 'Craftsmanship',
      description: 'Excellence in every detail',
      image: '/images/project-3.svg',
      icon: '◆'
    },
    {
      id: 4,
      title: 'Experience',
      description: 'Years of proven expertise',
      image: '/images/project-4.svg',
      icon: '◆'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-2">
            Four aspects to
          </h2>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800">
            know about our work
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {aspects.map((aspect) => (
            <div key={aspect.id} className="group">
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-200 aspect-square">
                <img
                  src={aspect.image}
                  alt={aspect.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex items-start gap-4">
                {/* Square Icon */}
                <div className="w-5 h-5 md:w-6 md:h-6 border border-black flex-shrink-0 mt-1"></div>

                {/* Text */}
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-2">
                    {aspect.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {aspect.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
