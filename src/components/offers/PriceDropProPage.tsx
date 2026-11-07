import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Tag,
  X,
  Check,
  Building2,
  Eye,
  AlertCircle,
  HelpCircle,
  Camera,
  Users,
  Calendar,
  Lock
} from 'lucide-react';
import { PriceDropMatrixSection } from './PriceDropMatrixSection';

interface PriceDropProPageProps {
  onOpenListingAudit: () => void;
  onBackHome?: () => void;
}

export function PriceDropProPage({
  onOpenListingAudit,
  onBackHome
}: PriceDropProPageProps) {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      
      {/* Top Banner Navigation */}
      <div className="bg-[#0c162c] border-b border-slate-800 py-3 px-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-xs font-semibold">
          <button
            onClick={onBackHome}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Home</span>
          </button>
          <span className="text-sky-400 font-mono">
            Price Drop Pro™ · Stalled Listing Relaunch Suite
          </span>
        </div>
      </div>

      {/* 1. HERO: UNDERSTAND IN 5 SECONDS */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-300 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5" />
          <span>PRICE DROP PRO™</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Don&apos;t Just Lower the Price. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-amber-300">
            Relaunch the Listing.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Dropping a price alone just tells buyers the house is sitting. We give buyers a fresh reason to look and make an offer.
        </p>

        {/* Primary 5-Second CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenListingAudit}
            className="w-full sm:w-auto px-8 py-4 bg-sky-400 hover:bg-sky-300 active:scale-[0.98] text-slate-950 font-extrabold text-base rounded-xl transition-all shadow-xl shadow-sky-400/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get My Free Listing Relaunch Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          {onBackHome && (
            <button
              onClick={onBackHome}
              className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-sm rounded-xl border border-slate-800 cursor-pointer"
            >
              See All Services
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 pt-2 font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            100% Free review for 1 active listing
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            We review buyer feedback &amp; photo order
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            You control the price and timing
          </span>
        </div>
      </section>

      {/* 2. THE SIMPLE CONTRAST: JUST DROPPING PRICE VS. RELAUNCHING */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              The Real Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Normal Price Drops Fail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Bad Way */}
            <div className="bg-[#081020] rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <X className="w-5 h-5" />
                <span>Just Changing the Price (The Trap)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&bull;</span>
                  <span>You change the number on the MLS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&bull;</span>
                  <span>Buyers wonder, &ldquo;What is wrong with this house?&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">&bull;</span>
                  <span>Showing traffic stays dead or brings lowball offers.</span>
                </li>
              </ul>
            </div>

            {/* Price Drop Pro Way */}
            <div className="bg-gradient-to-b from-[#0e1a38] to-[#081020] rounded-2xl border-2 border-sky-400/50 p-6 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Relaunching With Price Drop Pro™</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Show the seller real data so they feel good about the price.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Swap the main photo and rewrite the property headline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Reach out directly to buyer agents in your MLS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Run a 14-day relaunch blitz that creates fresh buyer urgency.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 4-STEP STRATEGIC RELAUNCH MATRIX (No Copy Button) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <PriceDropMatrixSection onOpenAudit={onOpenListingAudit} />
      </section>

      {/* 4. WHAT YOU GET IN THE FREE LISTING RELAUNCH REVIEW */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              100% Free Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              What You Get in Your Free Listing Review
            </h3>
            <p className="text-sm text-slate-300">
              Send us the public MLS link of 1 active listing. Within 24 hours, you receive:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center font-bold text-xs">
                01
              </span>
              <h4 className="text-base font-bold text-white">Stalled Listing Check</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                An honest review of why buyers in your price band are passing and where showings dropped off.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center font-bold text-xs">
                02
              </span>
              <h4 className="text-base font-bold text-white">Search Bracket Map</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The exact price bracket that will trigger new alerts for active pre-approved buyers in your town.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center font-bold text-xs">
                03
              </span>
              <h4 className="text-base font-bold text-white">Seller Talking Points</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calm, data-backed words you can use with your sellers so they understand the move and agree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING & SEPARATE WORK */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              Transparent Pricing
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              The Review Is 100% Free. Done-For-You Work Is Separately Quoted.
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Use our free advice yourself, or hire us to run the full Price Drop Pro™ relaunch blitz for you. No monthly fees, no retainers, and no contracts.
            </p>
          </div>
          <button
            onClick={onOpenListingAudit}
            className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl whitespace-nowrap cursor-pointer shadow-md"
          >
            Request Listing Review
          </button>
        </div>
      </section>

      {/* 6. FINAL BOTTOM CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-slate-900 to-[#121c35] border-2 border-sky-400 rounded-3xl p-8 sm:p-12 space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a Listing That Has Gone Quiet?
          </h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Send us the public MLS link. We will review showing curves, photos, and price brackets for free within 24 hours.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenListingAudit}
              className="px-8 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-xl shadow-sky-400/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get My Free Listing Relaunch Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-400">
            Confidential · No obligation · Designed specifically for active listings
          </p>
        </div>
      </section>

    </div>
  );
}
