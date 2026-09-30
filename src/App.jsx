import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Trainers from './components/Trainers';
import JoinSection from './components/JoinSection';
import Gallery from './components/Gallery';
import Careers from './components/Careers';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import JoinModal from './components/JoinModal';
import { ArrowRight, Sparkles, X } from 'lucide-react';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [showDemoBanner, setShowDemoBanner] = useState(true);

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Studio Hiring & Demo Proposal Notification Bar */}
      {showDemoBanner && (
        <aside
          aria-label="Demo website proposal notice"
          className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black py-2 px-4 text-xs font-bold tracking-wider uppercase flex items-center justify-between z-50 sticky top-0 border-b border-black/10"
        >
          <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black text-amber-300 text-[10px] font-black shrink-0">
              <Sparkles className="w-3 h-3" />
              DEMO PROPOSAL
            </span>
            <span className="hidden sm:inline">
              UN-BEATEN FITNESS STUDIO &bull; 60 FT ROAD, KANNAGI NAGAR &bull; NOW HIRING: FITNESS TRAINER
            </span>
            <span className="sm:hidden">
              UN-BEATEN FITNESS STUDIO &bull; NOW HIRING
            </span>
            <a
              href="#careers"
              className="underline hover:text-neutral-900 ml-1 inline-flex items-center gap-0.5"
            >
              <span>View Openings</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={() => setShowDemoBanner(false)}
            className="text-black/70 hover:text-black p-1 ml-2 transition-colors cursor-pointer"
            aria-label="Close demo banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Main Navbar */}
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Programs Section */}
        <Programs onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Trainers Section */}
        <Trainers />

        {/* 6. Membership / Join Section */}
        <JoinSection onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 7. Gallery Section */}
        <Gallery />

        {/* 8. Careers Section (Hiring Notice) */}
        <Careers />

        {/* 9. Location Section */}
        <Location />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Interactive Join Now Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
