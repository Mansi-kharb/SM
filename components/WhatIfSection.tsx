'use client';

import { useState } from 'react';

export default function WhatIfSection() {
  const [activeTab, setActiveTab] = useState(0);

  const concepts = [
    {
      number: 1,
      title: 'Sustainable',
      description: 'What once required extensive resources, now happens with minimal environmental impact.',
      image: '/images/project-1.svg'
    },
    {
      number: 2,
      title: 'Innovative',
      description: 'Where cutting-edge technology meets timeless design principles.',
      image: '/images/project-2.svg'
    },
    {
      number: 3,
      title: 'Accessible',
      description: 'No longer limited by convention, bringing design excellence to everyone.',
      image: '/images/project-3.svg'
    },
    {
      number: 4,
      title: 'Transformative',
      description: 'Where spaces tell stories and inspire human connection.',
      image: '/images/project-4.svg'
    },
    {
      number: 5,
      title: 'Human-Centered',
      description: 'Because design is ultimately about creating better spaces for people.',
      image: '/images/project-5.svg'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-wide text-gray-800">
              What if architecture could be...
            </h2>

            {/* Tab Numbers */}
            <div className="flex gap-4 mb-12">
              {concepts.map((concept, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-light transition-all duration-300 ${
                    activeTab === idx
                      ? 'bg-emerald-600 text-white scale-110'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {concept.number}
                </button>
              ))}
            </div>

            {/* Active Content */}
            <div className="min-h-[200px]">
              <div className="transition-all duration-500 ease-in-out">
                <h3 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
                  {concepts[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {concepts[activeTab].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <img
              key={activeTab}
              src={concepts[activeTab].image}
              alt={concepts[activeTab].title}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
