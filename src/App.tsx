import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { SearchProblemComparison } from './components/SearchProblemComparison';
import { ThreeServiceEcosystem } from './components/ThreeServiceEcosystem';
import { SeoSection } from './components/SeoSection';
import { AeoSection } from './components/AeoSection';
import { GeoSection } from './components/GeoSection';
import { UnifiedGrowthEngine } from './components/UnifiedGrowthEngine';
import { BusinessBenefits } from './components/BusinessBenefits';
import { InteractiveAuditDemo } from './components/InteractiveAuditDemo';
import { PlatformsGrid } from './components/PlatformsGrid';
import { WhatWeOptimize } from './components/WhatWeOptimize';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ResultsMetrics } from './components/ResultsMetrics';
import { FaqSection } from './components/FaqSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [prefilledUrl, setPrefilledUrl] = useState('');
  const [prefilledCategory, setPrefilledCategory] = useState('');
  const [prefilledService, setPrefilledService] = useState('');

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const handleAuditFromDemo = (url: string, category: string, service: string) => {
    setPrefilledUrl(url);
    setPrefilledCategory(category);
    setPrefilledService(service);
  };

  const handleModalSuccess = (url: string) => {
    setPrefilledUrl(url);
  };

  return (
    <div className="min-h-screen bg-[#edf5fe] text-slate-900 relative font-sans overflow-x-hidden selection:bg-sky-500 selection:text-white">
      
      {/* Top Sticky Navigation */}
      <Navbar onOpenAuditModal={handleOpenAuditModal} />

      {/* Main Landing Page Content */}
      <main id="main-content">
        {/* 1. Hero Section with Central AI Search Orbit Visualization */}
        <Hero onOpenAuditModal={handleOpenAuditModal} />

        {/* 2. Trust Bar & Multi-Engine Credentials */}
        <TrustBar />

        {/* 3. Search Has Changed - Problem Statement Comparison */}
        <SearchProblemComparison />

        {/* 4. One Strategy. Three Search Engines. (Ecosystem) */}
        <ThreeServiceEcosystem />

        {/* 5. SEO Section - Traditional Search & Dynamic Google SERP */}
        <SeoSection onOpenAuditModal={handleOpenAuditModal} />

        {/* 6. AEO Section - Answer Engine Direct Snippet Extraction */}
        <AeoSection onOpenAuditModal={handleOpenAuditModal} />

        {/* 7. GEO Section - Generative Engine Optimization & LLM Recommendation */}
        <GeoSection onOpenAuditModal={handleOpenAuditModal} />

        {/* 8. Three Layers. One Growth Engine. */}
        <UnifiedGrowthEngine />

        {/* 9. Business Benefits - 6 Commercial Value Cards */}
        <BusinessBenefits />

        {/* 10. Interactive AI Visibility Demo Simulator */}
        <InteractiveAuditDemo onSelectForLeadAudit={handleAuditFromDemo} />

        {/* 11. Multi-Platform Coverage Grid */}
        <PlatformsGrid />

        {/* 12. What We Optimize - 13 Component Convergence Matrix */}
        <WhatWeOptimize />

        {/* 13. Execution Process - 6-Phase Timeline */}
        <ProcessTimeline />

        {/* 14. Why Choose Us - Agency Differentiators & Cyber Shield */}
        <WhyChooseUs onOpenAuditModal={handleOpenAuditModal} />

        {/* 15. Demonstrative Results & Enterprise Retrospective */}
        <ResultsMetrics />

        {/* 16. Comprehensive FAQ Accordion */}
        <FaqSection />

        {/* 17. High-Conversion Lead Capture Form */}
        <LeadCaptureSection
          initialWebsiteUrl={prefilledUrl}
          initialCategory={prefilledCategory}
          initialService={prefilledService}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <StickyMobileCta onOpenAuditModal={handleOpenAuditModal} />

      {/* Quick Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onSuccess={handleModalSuccess}
      />

    </div>
  );
}
