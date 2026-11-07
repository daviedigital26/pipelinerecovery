import { useState } from 'react';
import {
  TrendingDown,
  Sparkles,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Camera,
  Users,
  Calendar,
  Lock,
  ChevronRight
} from 'lucide-react';

interface PriceDropMatrixSectionProps {
  onOpenAudit: () => void;
  crmPlatform?: string;
  isCompact?: boolean;
}

export function PriceDropMatrixSection({
  onOpenAudit,
  crmPlatform = 'Follow Up Boss',
  isCompact = false
}: PriceDropMatrixSectionProps) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1,
      title: 'Data-Backed Seller Diplomacy',
      shortTitle: 'Seller Diplomacy',
      tagline: 'Present showing drop-off curves and competing pending sales to align on a decisive adjustment bracket.',
      icon: TrendingDown,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-400/30',
      badge: 'Phase 01 · Alignment',
      deliverables: [
        'Showing Drop-Off Curve Chart (proving where buyer traffic stalls)',
        'Competing Pending Sales Bracket Analysis',
        'Seller Objection Diplomacy Talk Tracks (removing emotion from pricing)',
        'Search Threshold Map ($25k / $50k portal notification brackets)'
      ],
      clientTakeaway: 'The seller sees an objective, consultative business case rather than an agent simply asking for a price cut.'
    },
    {
      num: 2,
      title: 'Narrative & Asset Revision',
      shortTitle: 'Narrative & Assets',
      tagline: 'Update headline positioning, re-order MLS photography to feature the home’s best angle, and rewrite property remarks.',
      icon: Camera,
      color: 'text-sky-400',
      bgColor: 'bg-sky-400/10',
      borderColor: 'border-sky-400/30',
      badge: 'Phase 02 · Repositioning',
      deliverables: [
        'Headline Positioning Reset (shedding the "stale listing" stigma)',
        'MLS Photography Re-sequencing (leading with the home’s highest-converting feature)',
        'Rewritten MLS Remarks calibrated to active buyer search intent',
        'Approved Social & Email Re-announcement Asset Suite'
      ],
      clientTakeaway: 'Browsing buyers on Zillow and Realtor.com perceive a fresh opportunity rather than an old listing getting desperate.'
    },
    {
      num: 3,
      title: 'Reverse-Prospecting Agent Blitz',
      shortTitle: 'Agent Blitz',
      tagline: 'Reach out directly to agents with matching active buyers in your MLS before the public drop.',
      icon: Users,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      badge: 'Phase 03 · Private Distribution',
      deliverables: [
        'Direct Reverse-Prospecting MLS Agent Pull',
        'VIP Pre-MLS Courtesy Notice Script to Top Buyer Agents',
        'Direct Outreach to Past Tour Agents for Buyer Re-evaluations',
        'Co-Broke Showing Incentive & Urgent Availability Notice'
      ],
      clientTakeaway: 'Buyer agents receive targeted, professional communication giving their active clients first look at the newly unlocked bracket.'
    },
    {
      num: 4,
      title: '14-Day Relaunch Campaign',
      shortTitle: '14-Day Blitz',
      tagline: 'Coordinate an open house blitz and targeted digital notification campaign.',
      icon: Calendar,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      badge: 'Phase 04 · Market Surge',
      deliverables: [
        'Weekend Relaunch Open House Protocol & Directional Sign Strategy',
        'Targeted Multi-Channel Digital Notification Cadence',
        'Past Showing Buyer Reactivation Sequence',
        '48-Hour Written Feedback Review & Offer Deadline Framework'
      ],
      clientTakeaway: 'Concentrates showing volume into a tight 48–72 hour window to reignite buyer urgency and multi-offer potential.'
    }
  ];

  const currentStep = steps[activeStep - 1];
  const StepIcon = currentStep.icon;

  return (
    <div className="bg-slate-950 rounded-2xl sm:rounded-3xl border border-slate-800 p-5 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Compatibility Badges */}
      <div className="space-y-3 relative z-10 border-b border-slate-800 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-500/10 text-sky-300 border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Price Drop Pro™ Asset</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 text-slate-300 border border-slate-700/80">
              <span>{crmPlatform} Compatible</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-mono font-semibold bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
            <Lock className="w-3 h-3" />
            <span>Proprietary Methodology</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Strategic Listing Price Adjustment &amp; Relaunch Matrix
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-1 font-medium">
            Turn a difficult seller conversation into an organized, high-urgency property relaunch event.
          </p>
        </div>
      </div>

      {/* Problem Alert Banner: MLS Drop Without Repositioning */}
      <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 border-l-4 border-rose-500 rounded-xl p-4 sm:p-4.5 flex items-start gap-3.5 shadow-md">
        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-semibold text-rose-200">
            Dropping a price on the MLS without a repositioning strategy simply broadcasts that a listing is stale.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Without a coordinated relaunch plan, price reductions often invite predatory lowball offers or go completely unnoticed by buyers whose search filters remain unengaged.
          </p>
        </div>
      </div>

      {/* 4-Step Interactive Matrix Navigation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Price Drop Pro™ 4-Step Relaunch Protocol
          </span>
          <span className="text-xs font-mono text-sky-400">
            Step 0{activeStep} of 04
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {steps.map((s) => {
            const Icon = s.icon;
            const isActive = activeStep === s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(s.num)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-slate-900 border-sky-400 shadow-md ring-1 ring-sky-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-400" />
                )}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-black ${
                    isActive ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{s.num}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-300' : 'text-slate-500'}`} />
                </div>
                <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {s.shortTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Detailed Showcase Card */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${currentStep.bgColor} border ${currentStep.borderColor} flex items-center justify-center ${currentStep.color}`}>
              <StepIcon className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[11px] font-mono font-bold ${currentStep.color} uppercase tracking-wider`}>
                {currentStep.badge}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {currentStep.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md font-semibold">
              Included in Relaunch Review
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
          {currentStep.tagline}
        </p>

        {/* Deliverables Checklist for This Step */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Core Blueprint Deliverables for Step 0{currentStep.num}:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentStep.deliverables.map((item, idx) => (
              <div key={idx} className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What the Market / Seller Experiences */}
        <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/60 flex items-start gap-2.5 text-xs text-slate-300">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-semibold">Strategic Impact: </strong>
            <span>{currentStep.clientTakeaway}</span>
          </div>
        </div>
      </div>

      {/* Proprietary Protected Note & High-Converting CTA Footer */}
      <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Included in the Free Listing Relaunch Review and full Price Drop Pro™ implementation.</span>
          </p>
          <p className="text-[11px] text-slate-400">
            Zero cost diagnostic for one active listing · Custom playbooks provided directly to the listing agent
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenAudit}
          className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 active:scale-[0.98] text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
        >
          <span>Get My Free Listing Relaunch Review</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
