export default function ServicesSection() {
  const services = [
    {
      title: 'Residential Design',
      description: 'Custom homes and villas designed for modern living',
    },
    {
      title: 'Commercial Architecture',
      description: 'Office spaces, retail, and hospitality projects',
    },
    {
      title: 'Master Planning',
      description: 'Urban development and large-scale architectural projects',
    },
  ];

  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-wide">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl md:text-2xl font-light mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
