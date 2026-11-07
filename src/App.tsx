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
import { SignupModal } from './components/SignupModal';
import { GuidePreviewModal } from './components/GuidePreviewModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ParallaxBackground } from './components/ParallaxBackground';

// Dedicated Landing Pages for Each Offer
import { AllOffersOverview } from './components/offers/AllOffersOverview';
import { PipelineRecoveryPage } from './components/offers/PipelineRecoveryPage';
import { HandoffAuditPage } from './components/offers/HandoffAuditPage';
import { ListingLaunchpadPage } from './components/offers/ListingLaunchpadPage';
import { PriceDropProPage } from './components/offers/PriceDropProPage';
import { SphereNurturePage } from './components/offers/SphereNurturePage';
import { ScriptVaultPage } from './components/offers/ScriptVaultPage';

export default function App() {
  const [currentOfferSlug, setCurrentOfferSlug] = useState<string | null>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    const validSlugs = [
      'pipeline-recovery',
      'revenue-blueprint',
      'pipeline-implementation',
      'listing-relaunch',
      'price-drop-pro',
      'handoff-audit',
      'listing-launchpad',
      'sphere-nurture',
      'script-vault',
      'pricing',
      'faq'
    ];
    return validSlugs.includes(hash) ? hash : null;
  });

  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const validSlugs = [
        'pipeline-recovery',
        'revenue-blueprint',
        'pipeline-implementation',
        'listing-relaunch',
        'price-drop-pro',
        'handoff-audit',
        'listing-launchpad',
        'sphere-nurture',
        'script-vault',
        'pricing',
        'faq'
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
    <div className="min-h-screen bg-[#0b101b] text-slate-100 flex flex-col font-sans pb-16 md:pb-0 relative selection:bg-amber-400 selection:text-slate-950">
      {/* 3D Dynamic Parallax Background with smooth scene crossfading */}
      <ParallaxBackground />

      {/* Global Navigation with Offer Switcher */}
      <OfferNav
        currentOfferSlug={currentOfferSlug}
        onSelectOffer={handleSelectOffer}
        onOpenTrial={() => setTrialModalOpen(true)}
      />

      {/* Main Funnel Flow */}
      <main className="flex-1 relative z-10">
        {/* PAGE 2: PIPELINE RECOVERY */}
        {currentOfferSlug === 'pipeline-recovery' && (
          <PipelineRecoveryPage
            onOpenTrial={() => setTrialModalOpen(true)}
            onBackHome={() => handleSelectOffer(null)}
            showToast={showToast}
          />
        )}

        {/* PAGE 3: HANDOFF AUDIT & REVENUE BLUEPRINT */}
        {(currentOfferSlug === 'handoff-audit' || currentOfferSlug === 'revenue-blueprint') && (
          <HandoffAuditPage
            onOpenTrial={() => setTrialModalOpen(true)}
            onBackHome={() => handleSelectOffer(null)}
            showToast={showToast}
          />
        )}

        {/* PAGE 4A: LISTING LAUNCHPAD */}
        {currentOfferSlug === 'listing-launchpad' && (
          <ListingLaunchpadPage
            onOpenTrial={() => setTrialModalOpen(true)}
            onBackHome={() => handleSelectOffer(null)}
            onPreviewGuide={() => setGuideModalOpen(true)}
            showToast={showToast}
          />
        )}

        {/* PAGE 4B: PRICE DROP PRO DEDICATED LANDING PAGE */}
        {(currentOfferSlug === 'price-drop-pro' || currentOfferSlug === 'listing-relaunch') && (
          <PriceDropProPage
            onOpenListingAudit={() => setTrialModalOpen(true)}
            onBackHome={() => handleSelectOffer(null)}
          />
        )}

        {/* PAGE 5: SPHERE NURTURE & IMPLEMENTATION */}
        {(currentOfferSlug === 'sphere-nurture' || currentOfferSlug === 'pipeline-implementation') && (
          <SphereNurturePage
            onOpenTrial={() => setTrialModalOpen(true)}
            onBackHome={() => handleSelectOffer(null)}
            showToast={showToast}
          />
        )}

        {/* PAGE 6: SCRIPT VAULT */}
        {currentOfferSlug === 'script-vault' && (
          <ScriptVaultPage
            onOpenTrial={() => setTrialModalOpen(true)}
            onBackHome={() => handleSelectOffer(null)}
            showToast={showToast}
          />
        )}

        {/* PAGE 7: DEDICATED PRICING PAGE */}
        {currentOfferSlug === 'pricing' && (
          <div>
            <div className="bg-amber-400/10 border-b border-amber-400/20 py-2.5 px-4 text-center">
              <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-amber-300">
                <span>The 5-Tier Offer Structure · Realtor Pipeline Recovery™ &amp; Price Drop Pro™</span>
                <span className="hidden sm:inline text-slate-600">·</span>
                <button
                  onClick={() => handleSelectOffer(null)}
                  className="text-white hover:text-amber-200 underline cursor-pointer text-xs"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
            <Pricing onOpenTrial={() => setTrialModalOpen(true)} />
            <Faq onOpenTrial={() => setTrialModalOpen(true)} />
            <FinalCta onOpenTrial={() => setTrialModalOpen(true)} />
          </div>
        )}

        {/* PAGE 8: DEDICATED FAQ PAGE */}
        {currentOfferSlug === 'faq' && (
          <div>
            <div className="bg-amber-400/10 border-b border-amber-400/20 py-2.5 px-4 text-center">
              <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-amber-300">
                <span>Frequently Asked Questions · Realtor Pipeline Recovery™ &amp; Price Drop Pro™</span>
                <span className="hidden sm:inline text-slate-600">·</span>
                <button
                  onClick={() => handleSelectOffer(null)}
                  className="text-white hover:text-amber-200 underline cursor-pointer text-xs"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
            <Faq onOpenTrial={() => setTrialModalOpen(true)} />
            <FinalCta onOpenTrial={() => setTrialModalOpen(true)} />
          </div>
        )}

        {/* PAGE 1: HOME PAGE */}
        {currentOfferSlug === null && (
          <>
            {/* 1. Hero */}
            <Hero
              onOpenTrial={() => setTrialModalOpen(true)}
              onExploreDemo={handleExploreDemo}
            />

            {/* 2. Personalizer directly below Hero */}
            <Personalizer
              onOpenTrial={() => setTrialModalOpen(true)}
              onPreviewGuide={() => setGuideModalOpen(true)}
              showToast={showToast}
            />

            {/* 3. Our 2 Services */}
            <WhatYouGet onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 4. The 5-Tier Offer Structure */}
            <AllOffersOverview
              onSelectOffer={handleSelectOffer}
              onOpenTrial={() => setTrialModalOpen(true)}
            />

            {/* 5. How It Works */}
            <HowItWorks onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 6. The Commission ROI Calculator */}
            <RoiCalculator onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 7. Testimonials */}
            <Testimonials onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 8. Pricing */}
            <Pricing onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 9. FAQ */}
            <Faq onOpenTrial={() => setTrialModalOpen(true)} />

            {/* 10. Final CTA */}
            <FinalCta onOpenTrial={() => setTrialModalOpen(true)} />
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
