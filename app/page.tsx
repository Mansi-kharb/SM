'use client';

import { useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/herosection';
import PhilosophySection from '@/components/philosophy';
import AboutSection, {
  ApproachSection,
  TeamCareSection,
} from '@/components/aboutsection';
import ProjectsGridSection from '@/components/project';
import ExpertiseSection, { ProcessSection } from '@/components/services';
import ClosingSection from '@/components/closingsection';
import BlogSection from '@/components/blog';
import ContactSection from '@/components/contactsection';
import Footer from '@/components/footer';

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
