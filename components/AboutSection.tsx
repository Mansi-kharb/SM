export default function AboutSection() {
  return (
    <section id="about" className="bg-white pt-4 md:pt-6 pb-4 md:pb-6">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
              About Us
            </h2>
            <p className="text-gray-700 mb-6 font-light leading-relaxed text-base md:text-lg">
              We are a team of award-winning architects dedicated to creating innovative,
              sustainable, and timeless structures. Our passion for design excellence
              drives us to deliver exceptional architectural solutions.
            </p>
            <p className="text-gray-700 font-light leading-relaxed text-base md:text-lg">
              With over 15 years of experience in architecture, we've designed and
              executed hundreds of projects across residential, commercial, and
              institutional sectors. Every project is an opportunity to push boundaries
              and create spaces that inspire and endure.
            </p>
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
