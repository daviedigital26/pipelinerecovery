import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Search,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Check,
  AlertTriangle,
  HelpCircle
} from 'lucide-react';

interface PipelineRecoveryPageProps {
  onOpenTrial: () => void;
  onBackHome?: () => void;
  showToast?: (msg: string) => void;
}

export function PipelineRecoveryPage({
  onOpenTrial,
  onBackHome
}: PipelineRecoveryPageProps) {
  // Simple 6th-grade calculator
  const [quietContacts, setQuietContacts] = useState(120);
  const [commissionPerDeal, setCommissionPerDeal] = useState(9000);

  // Conservative math: ~2% close rate on re-engaged historical contacts
  const estimatedDeals = Math.max(1, Math.round(quietContacts * 0.02));
  const estimatedCash = estimatedDeals * commissionPerDeal;

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
          <span className="text-amber-400 font-mono">
            Realtor Pipeline Recovery™ · Free Diagnostic Audit
          </span>
        </div>
      </div>

      {/* 1. HERO: UNDERSTAND IN 5 SECONDS */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>REALTOR PIPELINE RECOVERY™</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Before You Buy More Leads, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
            Follow Up With the Ones You Have.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.
        </p>

        {/* Primary 5-Second CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 font-extrabold text-base rounded-xl transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get My Free Pipeline Audit</span>
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
            100% Free confidential review
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            No credit card needed
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Works with any CRM or spreadsheet
          </span>
        </div>
      </section>

      {/* 2. THE 3 BIG REASONS DEALS ARE LEAKING (6th Grade Reading Level) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Why It Happens
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Where Are Your Past Leads Going?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            You do not have a lead problem. You have a quiet lead follow-up problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-white">
              Leads Take Time to Move
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Most buyers and sellers take 6 to 18 months before they sign a contract. If you only text them twice, you leave the closing for someone else.
            </p>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-white">
              Automated Emails Get Ignored
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Generic emails like &ldquo;Just checking in on your search!&rdquo; look like robot spam. People ignore them or click unsubscribe.
            </p>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-white">
              Buying New Leads Costs Too Much
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Portal leads cost $50 to $150 each. Meanwhile, hundreds of people who already know your name are sitting unworked in your phone.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU GET IN THE FREE PIPELINE AUDIT (Crystal Clear Checklist) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-[#0e172a] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Diagnostic Deliverable
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What You Get In Your Free Pipeline Audit
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              We look at your current database and give you a simple 1-page report:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm">
                <Search className="w-4 h-4 shrink-0" />
                <span>1. The Leak Scorecard</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                See exactly where your leads stop answering (Day 1, Day 14, or Day 60).
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                <TrendingUp className="w-4 h-4 shrink-0" />
                <span>2. Hidden Commission Check</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                An honest estimate of how many deals you can revive from your past contacts.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2.5 text-sky-400 font-bold text-sm">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>3. Messages People Actually Answer</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Short, polite text messages that ask one simple question without sounding pushy.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2.5 text-purple-400 font-bold text-sm">
                <Clock className="w-4 h-4 shrink-0" />
                <span>4. Your 7-Day Action Plan</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The top 3 things you can do this week to get replies and book appointments.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-2xl border border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-0.5">
              <div className="text-sm font-bold text-white">
                Ready to find the money hiding in your leads?
              </div>
              <div className="text-xs text-slate-400">
                Delivered in 24 hours · 100% confidential
              </div>
            </div>
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Get My Free Pipeline Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. SIMPLE REVENUE CALCULATOR (Slide & See in 3 Seconds) */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Quick Math
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              How Much Revenue Is Sitting in Your CRM?
            </h3>
            <p className="text-xs text-slate-400">
              Move the sliders to see what 1 or 2 recovered deals are worth to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-200">
                <span>Quiet Leads in Your Database:</span>
                <span className="text-amber-400 font-mono font-bold">{quietContacts} leads</span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={quietContacts}
                onChange={(e) => setQuietContacts(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>30 leads</span>
                <span>250 leads</span>
                <span>500+</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-200">
                <span>Your Average Commission Check:</span>
                <span className="text-emerald-400 font-mono font-bold">${commissionPerDeal.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="4000"
                max="25000"
                step="500"
                value={commissionPerDeal}
                onChange={(e) => setCommissionPerDeal(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>$4,000</span>
                <span>$15,000</span>
                <span>$25,000+</span>
              </div>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
            <div>
              <span className="text-xs text-slate-400 block">Recoverable Deals:</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                +{estimatedDeals} {estimatedDeals === 1 ? 'deal' : 'deals'}
              </span>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div>
              <span className="text-xs text-slate-400 block">Potential Commission Won Back:</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                +${estimatedCash.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (3 Simple Steps) */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Simple 3-Step Process
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            How Realtor Pipeline Recovery™ Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400">Step 1</span>
            <h4 className="text-base font-bold text-white">Tell Us What You Have</h4>
            <p className="text-xs text-slate-300">
              Share your rough lead count and what CRM you use (Follow Up Boss, kvCORE, spreadsheets, or phone contacts).
            </p>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400">Step 2</span>
            <h4 className="text-base font-bold text-white">We Run Your Free Audit</h4>
            <p className="text-xs text-slate-300">
              We find where people went quiet, how many deals you can win back, and what messages will get replies.
            </p>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400">Step 3</span>
            <h4 className="text-base font-bold text-white">Pick Your Next Step</h4>
            <p className="text-xs text-slate-300">
              Use the free plan yourself, or get our fixed $1,750 Revenue Architecture Blueprint for full team playbooks.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FINAL BOTTOM CTA: STRAIGHT TO THE POINT */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-slate-900 to-[#121c35] border-2 border-amber-400 rounded-3xl p-8 sm:p-12 space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Follow Up With the Leads You Already Have?
          </h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-xl shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get My Free Pipeline Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-400">
            Free diagnostic · Zero obligation · No credit card required
          </p>
        </div>
      </section>

    </div>
  );
}
