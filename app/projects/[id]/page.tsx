'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  budget: string;
  duration: string;
  description: string;
  image: string;
  images: string[];
  details: string;
}

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch('/data/projects.json');
        const data = await res.json();
        const found = data.projects.find((p: Project) => p.id === parseInt(id));
        setProject(found || null);
      } catch (error) {
        console.error('Failed to fetch project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl mb-4">Project not found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <div className="md:col-span-2">
              <h1 className="text-5xl font-light mb-6 tracking-wide">
                {project.title}
              </h1>

              {/* Project Info Cards */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div>
                  <p className="text-gray-600 text-sm font-light mb-2">Location</p>
                  <p className="text-xl font-light">{project.location}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-light mb-2">Category</p>
                  <p className="text-xl font-light">{project.category}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-light mb-2">Duration</p>
                  <p className="text-xl font-light">{project.duration}</p>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed text-gray-700 font-light">
                  {project.details}
                </p>
              </div>

              {/* Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-light mb-8 tracking-wide">Gallery</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.map((img, idx) => (
                      <div key={idx} className="aspect-square overflow-hidden rounded bg-gray-300">
                        <img
                          src={img || `/images/project-${(idx % 12) + 1}.png`}
                          alt={`${project.title} ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-8 rounded sticky top-24">
                <h3 className="text-2xl font-light mb-6 tracking-wide">
                  Project Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 text-sm font-light mb-2">
                      Budget Range
                    </p>
                    <p className="text-lg font-light">{project.budget}</p>
                  </div>

                  <div>
                    <p className="text-gray-600 text-sm font-light mb-2">
                      Category
                    </p>
                    <p className="text-lg font-light">{project.category}</p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-600 font-light mb-4">
                      Interested in a similar project?
                    </p>
                    <Link
                      href="/#contact"
                      className="block w-full bg-black text-white text-center py-3 rounded hover:bg-gray-900 transition font-light"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-light mb-12 tracking-wide">
              More Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, idx) => (
                <Link key={idx} href={`/projects/${idx + 1}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square overflow-hidden rounded mb-4 bg-gray-300">
                      <img
                        src={`/images/project-${idx + 1}.png`}
                        alt="Related project"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-light group-hover:text-gray-600 transition">
                      Project Title
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
