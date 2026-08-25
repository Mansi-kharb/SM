'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsGridSection from '@/components/ProjectsGridSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import AboutSection from '@/components/AboutSection';
import ApproachSection from '@/components/ApproachSection';
import TeamCareSection from '@/components/TeamCareSection';
import BlogSection from '@/components/BlogSection';
import ClosingSection from '@/components/ClosingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ProjectData } from '@/components/ProjectCard';

const DEFAULT_PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: "Gold's Gym Center",
    location: "Mumbai",
    category: "Gym",
    year: "2026",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    fallback: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop"
    ],
    details: "A state-of-the-art commercial gym facility engineered for optimal workout flow, acoustic isolation, custom lighting racks, and durable rubberized floor zoning.",
  },
  {
    id: 2,
    title: "The Gourmet Bistro",
    location: "Delhi",
    category: "Restaurant",
    year: "2025",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    fallback: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    details: "An ambient restaurant design featuring custom teak dining booths, warm architectural spotlighting, acoustic ceiling baffles, and open kitchen view integration.",
  },
  {
    id: 3,
    title: "Luxe Salon & Spa",
    location: "Mumbai",
    category: "Saloon",
    year: "2026",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    fallback: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"
    ],
    details: "A sophisticated hair & beauty salon interior featuring custom illuminated vanity mirrors, velvet plush seating, marble reception counter, and tranquil spa treatment suites.",
  },
  {
    id: 4,
    title: "Brew & Bean Specialty Cafe",
    location: "Bangalore",
    category: "Cafe",
    year: "2026",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    fallback: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop"
    ],
    details: "A warm and inviting specialty cafe design with terrazzo bar top, custom espresso bar layout, oak seating benches, and sunlit window nooks.",
  },
  {
    id: 5,
    title: "Modern Corporate Office",
    location: "Gurgaon",
    category: "Office",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    fallback: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
    ],
    details: "A futuristic office environment featuring soundproof glass meeting rooms, biophilic breakrooms, ergonomic workstations, and integrated smart lighting systems.",
  },
];

export default function Home() {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  return (
    <main className="bg-white min-h-screen text-slate-900 font-sans antialiased">
      <Header />
      <HeroSection />
      <PhilosophySection />

      {/* About Us Section right before Our Projects */}
      <AboutSection
        isPhilosophyOpen={isPhilosophyOpen}
        onTogglePhilosophy={() => setIsPhilosophyOpen((open) => !open)}
      />

      {/* Studio philosophy — how the work gets made */}
      <ApproachSection open={isPhilosophyOpen} />

      {/* Projects Grid Section - Big.dk Style */}
      <ProjectsGridSection />

      <ProcessSection />
      <ExpertiseSection />

      {/* Closing statement, straight after the services */}
      <ClosingSection />

      <TeamCareSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
