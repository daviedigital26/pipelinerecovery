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
import { Footer } from './components/Footer';
import { SignupModal } from './components/SignupModal';
import { GuidePreviewModal } from './components/GuidePreviewModal';
import { MobileStickyBar } from './components/MobileStickyBar';

// Dedicated Landing Pages for Each Offer
import { AllOffersOverview } from './components/offers/AllOffersOverview';
import { PipelineRecoveryPage } from './components/offers/PipelineRecoveryPage';
import { HandoffAuditPage } from './components/offers/HandoffAuditPage';
import { ListingLaunchpadPage } from './components/offers/ListingLaunchpadPage';
import { SphereNurturePage } from './components/offers/SphereNurturePage';
import { ScriptVaultPage } from './components/offers/ScriptVaultPage';

export default function App() {
  const [currentOfferSlug, setCurrentOfferSlug] = useState<string | null>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    const validSlugs = ['pipeline-recovery', 'handoff-audit', 'listing-launchpad', 'sphere-nurture', 'script-vault'];
    return validSlugs.includes(hash) ? hash : null;
  });

  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const validSlugs = ['pipeline-recovery', 'handoff-audit', 'listing-launchpad', 'sphere-nurture', 'script-vault'];
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
    setCurrentOfferSlug(slug);
    if (slug) {
      window.location.hash = slug;
    } else {
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleExploreDemo = () => {
    const el = document.getElementById('try-your-name');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b101b] text-slate-100 flex flex-col font-sans pb-16 md:pb-0">
      {/* Global Navigation with Offer Switcher */}
      <OfferNav
        currentOfferSlug={currentOfferSlug}
        onSelectOffer={handleSelectOffer}
        onOpenTrial={() => setTrialModalOpen(true)}
      />

      {/* Main Funnel Flow */}
      <main className="flex-1">
        {currentOfferSlug === 'pipeline-recovery' && (
          <div>
            <PipelineRecoveryPage
              onOpenTrial={() => setTrialModalOpen(true)}
              showToast={showToast}
            />
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenTrial={() => setTrialModalOpen(true)}
            />
          </div>
        )}

        {currentOfferSlug === 'handoff-audit' && (
          <div>
            <HandoffAuditPage
              onOpenTrial={() => setTrialModalOpen(true)}
              showToast={showToast}
            />
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenTrial={() => setTrialModalOpen(true)}
            />
          </div>
        )}

        {currentOfferSlug === 'listing-launchpad' && (
          <div>
            <ListingLaunchpadPage
              onOpenTrial={() => setTrialModalOpen(true)}
              onPreviewGuide={() => setGuideModalOpen(true)}
              showToast={showToast}
            />
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenTrial={() => setTrialModalOpen(true)}
            />
          </div>
        )}

        {currentOfferSlug === 'sphere-nurture' && (
          <div>
            <SphereNurturePage
              onOpenTrial={() => setTrialModalOpen(true)}
              showToast={showToast}
            />
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenTrial={() => setTrialModalOpen(true)}
            />
          </div>
        )}

        {currentOfferSlug === 'script-vault' && (
          <div>
            <ScriptVaultPage
              onOpenTrial={() => setTrialModalOpen(true)}
              showToast={showToast}
            />
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenTrial={() => setTrialModalOpen(true)}
            />
          </div>
        )}

        {/* Default Main Studio Overview Flow */}
        {currentOfferSlug === null && (
          <>
            {/* 1. Hero with 6th-grade hook and before/after */}
            <Hero
              onOpenTrial={() => setTrialModalOpen(true)}
              onExploreDemo={handleExploreDemo}
            />

            {/* 2. Specialized Offers Hub Spotlight */}
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenTrial={() => setTrialModalOpen(true)}
            />

            {/* 3. Interactive "Try Your Name" Live Sample Kit */}
            <Personalizer
              onOpenTrial={() => setTrialModalOpen(true)}
              onPreviewGuide={() => setGuideModalOpen(true)}
              showToast={showToast}
            />

            {/* 4. The 4 Core Monthly Deliverables */}
            <WhatYouGet onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 5. Dead-Simple 3-Step Process & Agency Comparison */}
            <HowItWorks onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 6. The Commission ROI Calculator */}
            <RoiCalculator onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 7. Authentic Social Proof & Closings */}
            <Testimonials onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 8. Clear, No-Brainer Pricing with 14-day free trial */}
            <Pricing onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 9. 6th-Grade Plain English FAQ */}
            <Faq onOpenTrial={() => setTrialModalOpen(true)} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer onOpenTrial={() => setTrialModalOpen(true)} />

      {/* Mobile Conversion Sticky Bar (<15% viewport height) */}
      <MobileStickyBar onOpenTrial={() => setTrialModalOpen(true)} />

      {/* Interactive Free Trial Signup / Instant Download Modal */}
      <SignupModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        showToast={showToast}
      />

      {/* 12-Page Home Seller Guide Interactive Preview Modal */}
      <GuidePreviewModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
        onOpenTrial={() => setTrialModalOpen(true)}
      />

      {/* Global Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-16 md:bottom-6 right-4 left-4 md:left-auto md:max-w-md z-50 bg-slate-900 border border-amber-400/40 text-slate-100 text-xs sm:text-sm font-medium px-4 py-3 rounded-xl shadow-2xl shadow-black/80 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span className="flex-1">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
