import { useState, useEffect } from 'react';
import { OfferNav } from './components/OfferNav';
import { Hero } from './components/Hero';
import { Personalizer } from './components/Personalizer';
import { WhatYouGet } from './components/WhatYouGet';
import { HowItWorks } from './components/HowItWorks';
import { RoiCalculator } from './components/RoiCalculator';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ParallaxBackground } from './components/ParallaxBackground';

// Dedicated Landing & Offer Pages
import { AllOffersOverview } from './components/offers/AllOffersOverview';
import { PipelineRecoveryPage } from './components/offers/PipelineRecoveryPage';
import { PriceDropProPage } from './components/offers/PriceDropProPage';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { BlueprintPage } from './components/pages/BlueprintPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentOfferSlug, setCurrentOfferSlug] = useState<string | null>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    const validSlugs = [
      'realtor-pipeline-recovery',
      'pipeline-recovery',
      'price-drop-pro',
      'how-it-works',
      'revenue-architecture-blueprint',
      'blueprint',
      'resources',
      'about',
      'contact',
      'faq',
      'pricing',
      'free-pipeline-audit',
      'listing-relaunch-review'
    ];
    if (hash === 'pipeline-recovery') return 'realtor-pipeline-recovery';
    if (hash === 'blueprint') return 'revenue-architecture-blueprint';
    return validSlugs.includes(hash) ? hash : null;
  });

  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditModalType, setAuditModalType] = useState<'pipeline' | 'listing'>('pipeline');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash === 'free-pipeline-audit') {
        setAuditModalType('pipeline');
        setAuditModalOpen(true);
        return;
      }
      if (hash === 'listing-relaunch-review') {
        setAuditModalType('listing');
        setAuditModalOpen(true);
        return;
      }
      if (hash === 'pipeline-recovery') {
        setCurrentOfferSlug('realtor-pipeline-recovery');
        return;
      }
      if (hash === 'blueprint') {
        setCurrentOfferSlug('revenue-architecture-blueprint');
        return;
      }

      const validSlugs = [
        'realtor-pipeline-recovery',
        'price-drop-pro',
        'how-it-works',
        'revenue-architecture-blueprint',
        'resources',
        'about',
        'contact',
        'faq',
        'pricing'
      ];

      if (validSlugs.includes(hash)) {
        setCurrentOfferSlug(hash);
      } else if (!hash) {
        setCurrentOfferSlug(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectOffer = (slug: string | null) => {
    if (slug === 'free-pipeline-audit') {
      setAuditModalType('pipeline');
      setAuditModalOpen(true);
      return;
    }
    if (slug === 'listing-relaunch-review') {
      setAuditModalType('listing');
      setAuditModalOpen(true);
      return;
    }

    let targetSlug = slug;
    if (slug === 'pipeline-recovery') targetSlug = 'realtor-pipeline-recovery';
    if (slug === 'blueprint') targetSlug = 'revenue-architecture-blueprint';

    setCurrentOfferSlug(targetSlug);
    if (targetSlug) {
      window.location.hash = targetSlug;
    } else {
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuditModal = (type: 'pipeline' | 'listing' = 'pipeline') => {
    setAuditModalType(type);
    setAuditModalOpen(true);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleExploreProcess = () => {
    const el = document.getElementById('process-system');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleSelectOffer('how-it-works');
    }
  };

  return (
    <div className="min-h-screen bg-[#081020] text-slate-100 flex flex-col font-sans pb-16 md:pb-0 relative selection:bg-[#4F5DFF] selection:text-white">
      {/* 3D Dynamic Parallax Background with smooth scene crossfading */}
      <ParallaxBackground />

      {/* Global Navigation with Reale Revenue Systems Links */}
      <OfferNav
        currentOfferSlug={currentOfferSlug}
        onSelectOffer={handleSelectOffer}
        onOpenAudit={handleOpenAuditModal}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        
        {/* PAGE: REALTOR PIPELINE RECOVERY */}
        {currentOfferSlug === 'realtor-pipeline-recovery' && (
          <PipelineRecoveryPage
            onOpenAudit={() => handleOpenAuditModal('pipeline')}
            onBackHome={() => handleSelectOffer(null)}
            onSelectOffer={handleSelectOffer}
          />
        )}

        {/* PAGE: PRICE DROP PRO */}
        {currentOfferSlug === 'price-drop-pro' && (
          <PriceDropProPage
            onOpenListingAudit={() => handleOpenAuditModal('listing')}
            onBackHome={() => handleSelectOffer(null)}
          />
        )}

        {/* PAGE: HOW IT WORKS */}
        {currentOfferSlug === 'how-it-works' && (
          <HowItWorksPage
            onOpenAudit={() => handleOpenAuditModal('pipeline')}
            onBackHome={() => handleSelectOffer(null)}
          />
        )}

        {/* PAGE: REVENUE ARCHITECTURE BLUEPRINT */}
        {currentOfferSlug === 'revenue-architecture-blueprint' && (
          <BlueprintPage
            onOpenAudit={() => handleOpenAuditModal('pipeline')}
            onBackHome={() => handleSelectOffer(null)}
          />
        )}

        {/* PAGE: RESOURCES */}
        {currentOfferSlug === 'resources' && (
          <ResourcesPage
            onOpenAudit={handleOpenAuditModal}
            onBackHome={() => handleSelectOffer(null)}
          />
        )}

        {/* PAGE: ABOUT */}
        {currentOfferSlug === 'about' && (
          <AboutPage
            onOpenAudit={() => handleOpenAuditModal('pipeline')}
            onBackHome={() => handleSelectOffer(null)}
          />
        )}

        {/* PAGE: CONTACT */}
        {currentOfferSlug === 'contact' && (
          <ContactPage
            onOpenAudit={handleOpenAuditModal}
            onBackHome={() => handleSelectOffer(null)}
            showToast={showToast}
          />
        )}

        {/* PAGE: PRICING / COMMERCIAL STRUCTURE */}
        {currentOfferSlug === 'pricing' && (
          <div>
            <div className="bg-[#0c162c] border-b border-slate-800 py-3 px-4 text-center">
              <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => handleSelectOffer(null)}
                  className="text-slate-300 hover:text-white font-semibold cursor-pointer"
                >
                  ← Back to Home
                </button>
                <span className="text-[#2DD4BF] font-semibold">
                  Commercial Offer Structure &bull; Free Review &bull; $1,750 Blueprint
                </span>
              </div>
            </div>
            <Pricing onOpenAudit={handleOpenAuditModal} onSelectOffer={handleSelectOffer} />
            <Faq onOpenAudit={() => handleOpenAuditModal('pipeline')} />
            <FinalCta onOpenAudit={() => handleOpenAuditModal('pipeline')} />
          </div>
        )}

        {/* PAGE: FAQ */}
        {currentOfferSlug === 'faq' && (
          <div>
            <div className="bg-[#0c162c] border-b border-slate-800 py-3 px-4 text-center">
              <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => handleSelectOffer(null)}
                  className="text-slate-300 hover:text-white font-semibold cursor-pointer"
                >
                  ← Back to Home
                </button>
                <span className="text-[#4F5DFF] font-semibold">
                  Frequently Asked Questions &bull; Reale Revenue Systems
                </span>
              </div>
            </div>
            <Faq onOpenAudit={() => handleOpenAuditModal('pipeline')} />
            <FinalCta onOpenAudit={() => handleOpenAuditModal('pipeline')} />
          </div>
        )}

        {/* HOME PAGE */}
        {currentOfferSlug === null && (
          <>
            {/* 1. Hero */}
            <Hero
              onOpenAudit={() => handleOpenAuditModal('pipeline')}
              onExploreProcess={handleExploreProcess}
            />

            {/* 2. Interactive Pipeline Diagnostic directly below Hero */}
            <Personalizer
              onOpenAudit={() => handleOpenAuditModal('pipeline')}
              showToast={showToast}
            />

            {/* 3. The Next Good Conversation May Already Be in Your CRM */}
            <WhatYouGet
              onOpenAudit={() => handleOpenAuditModal('pipeline')}
              onSelectOffer={handleSelectOffer}
            />

            {/* 4. Find It. Fix It. Follow Through. (5-Step System & Blueprint) */}
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenAudit={() => handleOpenAuditModal('pipeline')}
            />

            {/* 5. How It Works (Start Small. Fix the Next Step. + Comparison Table) */}
            <HowItWorks onOpenAudit={() => handleOpenAuditModal('pipeline')} />

            {/* 6. Follow-Up Economics (Math on Quiet Leads vs $1,750 Blueprint) */}
            <RoiCalculator onOpenAudit={() => handleOpenAuditModal('pipeline')} />

            {/* 7. What Pipeline Recovery Looks Like (Process Deliverables & Case Studies) */}
            <Testimonials onOpenAudit={() => handleOpenAuditModal('pipeline')} />

            {/* 8. Commercial Offer Structure */}
            <Pricing onOpenAudit={handleOpenAuditModal} onSelectOffer={handleSelectOffer} />

            {/* 9. Shared FAQ */}
            <Faq onOpenAudit={() => handleOpenAuditModal('pipeline')} />

            {/* 10. Final CTA */}
            <FinalCta onOpenAudit={() => handleOpenAuditModal('pipeline')} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectRoute={handleSelectOffer}
        onOpenAudit={() => handleOpenAuditModal('pipeline')}
      />

      {/* Mobile Sticky Bar (<15% viewport height) */}
      <MobileStickyBar onOpenAudit={() => handleOpenAuditModal('pipeline')} />

      {/* Honest Audit / Listing Review Request Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        type={auditModalType}
        showToast={showToast}
        onSelectRoute={handleSelectOffer}
      />

      {/* Global Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-16 md:bottom-6 right-4 left-4 md:left-auto md:max-w-md z-50 bg-[#0c162c] border border-[#4F5DFF]/40 text-slate-100 text-xs sm:text-sm font-medium px-4 py-3 rounded-xl shadow-2xl shadow-black/80 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] shrink-0" />
          <span className="flex-1">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
