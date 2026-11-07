import { ArrowRight, Check, ShieldCheck, Sparkles, Building2, Wrench } from 'lucide-react';

interface PricingProps {
  onOpenTrial: () => void;
}

export function Pricing({ onOpenTrial }: PricingProps) {
  return (
    <section id="pricing" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Offer Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Simple 3-Step Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Start with a free snapshot, step up to the complete $1,750 Blueprint, or partner with us for full-service implementation.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch pt-4">
          
          {/* Card 1: Free Pipeline Snapshot */}
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl relative">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                  Step 01 · Diagnostic
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Free Pipeline Snapshot</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Find missed follow-ups and discover where deals are stalling in your current CRM.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white font-mono">$0</span>
                <span className="text-xs font-medium text-slate-400 ml-1">/ 100% Free</span>
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                What you receive:
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Pipeline Leak Audit:</strong> Identify missed follow-ups &amp; quantify dormant leads</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Actionable 3-point immediate recovery recommendations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>No credit card, software login, or long-term commitment</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-2">
              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
              >
                <span>Get My Free Snapshot →</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Delivered in 24 hours · Confidential review
              </p>
            </div>
          </div>

          {/* Card 2: $1,750 Recovery System - Highlighted */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#18233c] rounded-3xl border-2 border-amber-400 p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-md">
              Core Strategic Asset
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                  Step 02 · Strategic Roadmap
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">$1,750 Recovery System</h3>
                <p className="text-xs text-slate-300 mt-1 font-semibold text-emerald-400">
                  A complete operational asset you own forever.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-amber-400 font-mono">$1,750</span>
                  <span className="text-xs font-medium text-slate-400 ml-1">one-time fixed</span>
                </div>
                <p className="text-xs text-amber-300 font-medium mt-1">
                  Includes custom sequences, CRM tags, and team SOPs.
                </p>
              </div>

              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                What you receive:
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Custom Re-Engagement Sequences:</strong> Multi-touch SMS, call, email, and video scripts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>CRM Pipeline Stage Architecture:</strong> Standardized stages, triggers &amp; SLAs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dormant Lead Triage Protocol:</strong> Rules to isolate high-intent contacts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Team Accountability Playbook:</strong> Daily checklists for agents and ISAs</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-2">
              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-lg animate-cta-glow shimmer-badge flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <span className="relative z-10">Request Recovery System →</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                One-time investment · You own the system forever
              </p>
            </div>
          </div>

          {/* Card 3: Pipeline Recovery Implementation */}
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl relative">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">
                  Step 03 · Done-For-You Execution
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Pipeline Recovery Implementation</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Full technical rollout: CRM data clean-up, automated sequence wiring, and team launch management.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">Separately Quoted</span>
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Full technical rollout:
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Database Cleansing &amp; Tagging:</strong> Clean up contacts across your CRM</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Sequence Wiring:</strong> Direct technical setup of SMS, task, and email cadences</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Live agent &amp; ISA coaching on handling revived buyer and seller inquiries</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-2">
              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
              >
                <span>Request Implementation →</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Custom proposal based on database size
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
