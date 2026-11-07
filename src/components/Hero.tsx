import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Building2, Search } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onExploreDemo: () => void;
}

export function Hero({ onOpenTrial, onExploreDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/60">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct, simple headline & supporting copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Plain English Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>✨ FOR AGENTS, TEAMS &amp; BROKERS</span>
            </div>

            {/* Main Headline verbatim from prompt */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Before You Buy More Leads, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Follow Up With the Ones
              </span> You Have.
            </h1>

            {/* Supporting copy verbatim from prompt */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Identify silent leaks in your active CRM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Non-salesy, high-trust outreach cadences</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Reactivate quiet leads without sounding robotic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Works with Follow Up Boss, kvCORE, Lofty &amp; more</span>
              </div>
            </div>

            {/* Primary Action Zone with exact primary button */}
            <div className="pt-3 space-y-2.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenTrial}
                  className="relative group flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all shadow-lg animate-cta-glow shimmer-badge whitespace-nowrap cursor-pointer hover:shadow-amber-400/30"
                >
                  <span className="relative z-10">Get My Free Pipeline Snapshot →</span>
                </button>
              </div>

              {/* Exact Testimonial directly below CTA */}
              <p className="text-xs text-slate-300 italic pt-1 flex items-center gap-1.5">
                <span className="text-amber-400 not-italic font-bold tracking-wider">★★★★★</span>
                <span>&ldquo;We booked 12 appointments from leads we&apos;d written off.&rdquo; — Realtor in Glendale, AZ</span>
              </p>

              {/* Micro-copy under primary CTA */}
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                <span>Free confidential diagnostic · Zero credit card required · Staged in 24 hours</span>
              </p>
            </div>

          </div>

          {/* Right Column: Hero Visual - Diagnostic & Pipeline Overview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
                    Pipeline Diagnostic Preview
                  </span>
                </div>
                <span className="text-amber-400 text-[11px] font-semibold bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                  Confidential Review
                </span>
              </div>

              {/* Core Diagnostic Metrics Mockup */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block font-medium">Inactive Contacts</span>
                  <span className="text-2xl font-black text-amber-400 font-mono mt-0.5 block">54%</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Leads uncontacted in 60+ days</span>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block font-medium">Dormant Commission</span>
                  <span className="text-2xl font-black text-emerald-400 font-mono mt-0.5 block">$45K+</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Est. recoverable GCI pipeline</span>
                </div>
              </div>

              {/* Pipeline Leak Identification Bar */}
              <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Follow-Up Gap Analysis</span>
                  <span className="text-amber-300 font-semibold font-mono text-[11px]">3 Leaks Found</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden flex">
                  <div className="bg-emerald-400 h-full w-[35%]" title="Active Engagement (35%)" />
                  <div className="bg-amber-400 h-full w-[45%]" title="Quiet Leads (45%)" />
                  <div className="bg-rose-400 h-full w-[20%]" title="Dropped Contacts (20%)" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Active (35%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Quiet (45%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Leaking (20%)
                  </span>
                </div>
              </div>

              {/* Service Direct Summary */}
              <div className="p-3 bg-amber-500/10 rounded-xl border border-slate-800 text-xs">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-amber-300">Pipeline Recovery Framework</span>
                  <span className="text-[11px] text-slate-400">Database Revivals</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* CRM Platform Trust Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-5">
            WORKS WITH DATA FROM:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-bold text-slate-400">
            <span className="hover:text-white transition-colors">FOLLOW UP BOSS</span>
            <span className="hover:text-white transition-colors">KVCORE</span>
            <span className="hover:text-white transition-colors">LIONDESK</span>
            <span className="hover:text-white transition-colors">SALESFORCE</span>
            <span className="hover:text-white transition-colors">HUBSPOT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
