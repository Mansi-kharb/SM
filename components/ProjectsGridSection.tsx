'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
}

export default function ProjectsGridSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load projects from JSON
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects));
  }, []);

  return (
    <section id="projects" className="bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-wide">
          Our Projects
        </h2>

        {/* 4 column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {projects.map(project => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                    <h3 className="font-light text-sm md:text-base mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300">{project.location}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
