import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Designing for Purpose: How Function Shapes Form',
    description: 'A deep dive into how thoughtful spatial planning and user needs drive architectural aesthetics — not the other way around.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Beyond Walls: The Rise of Experiential Architecture',
    description: 'Explore how architecture today is moving beyond structure to create emotional, sensory, and immersive experiences.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Sustainable Spaces: Building for the Future',
    description: 'An exploration of eco-conscious materials, energy-efficient designs, and the shift toward regenerative architecture.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'The Power of Details: Small Elements, Big Impact',
    description: 'Discover how intricate finishes, textures, and material choices contribute to the overall narrative of a space.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function BlogSection() {
  return (
    <section id="blogs" className="bg-white py-5 md:py-12 px-6 md:px-12 font-sans border-t border-slate-100">
      <div className="max-w-[1720px] mx-auto">
        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-12">
          Discover More on <span className="text-slate-400 font-normal">Our Blog</span>
        </h2>

        {/* Responsive Layout: Touch Horizontal Scroll on Mobile (< sm), 4 Column Grid on Desktop (lg) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col w-[260px] sm:w-auto flex-shrink-0 snap-center">
              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl sm:rounded-none bg-slate-100 aspect-[4/5] mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-2 group-hover:text-[#0f5339] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
