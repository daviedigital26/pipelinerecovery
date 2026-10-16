import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Check } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreProcess: () => void;
}

export function Hero({ onOpenAudit, onExploreProcess }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/60">
      {/* Subtle radial glow with brand Electric Cobalt */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#4F5DFF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct, simple, 6th-grade pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FOR REALTORS &amp; REAL ESTATE TEAMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Before You Buy More Leads, <br />
              <span className="text-[#4F5DFF]">
                Follow Up With the Ones
              </span> You Have.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>Find where the next task got missed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>Give each reply an owner and next step</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>Use the CRM you already have</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>You approve the plan before launch</span>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="pt-3 space-y-2.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenAudit}
                  className="relative group flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-[#4F5DFF] hover:bg-[#4350e6] active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge whitespace-nowrap cursor-pointer hover:shadow-[#4F5DFF]/40"
                >
                  <span className="relative z-10">Get My Free Pipeline Audit</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreProcess}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#4F5DFF]/50 rounded-xl transition-all cursor-pointer shadow-sm group"
                >
                  <span>See the 5-Step Process</span>
                  <ChevronRight className="w-4 h-4 text-[#4F5DFF] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Assurance Micro-copy */}
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] inline-block" />
                  Use the CRM you already have.
                </span>
                <span className="text-slate-600 hidden sm:inline">&bull;</span>
                <span>No account or payment details needed.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Illustrative Workflow Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-800 bg-[#0c162c]/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              
              {/* Header with pill */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
                  <span className="font-mono text-slate-300 font-semibold text-[11px]">
                    PIPELINE RECOVERY WORKFLOW
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  Illustrative example
                </span>
              </div>

              {/* Lead Card Representation */}
              <div className="space-y-3.5">
                
                {/* Step 1: Gap Found */}
                <div className="bg-[#081020] rounded-xl p-3.5 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Lead Record #418</span>
                    <span className="text-rose-400/90 text-[11px] font-semibold bg-rose-500/10 px-2 py-0.5 rounded">
                      Gap: Inactive 7 Mos
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    Sarah Jenkins · 3-Bed Suburban Buyer
                  </div>
                  <p className="text-xs text-slate-400">
                    Inquired on Oak Creek home in March. Stopped replying after initial showing. No next task scheduled.
                  </p>
                </div>

                {/* Step 2: Agreed Outreach */}
                <div className="bg-[#081020] rounded-xl p-3.5 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Stage 4: Restart Message</span>
                    <span className="text-[#2DD4BF] text-[11px] font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Agent Approved
                    </span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-lg text-xs text-slate-200 border-l-2 border-[#4F5DFF] italic">
                    &ldquo;Hi Sarah, saw a quiet price adjustment nearby on Oak Creek. Are you still keeping an eye on that neighborhood?&rdquo;
                  </div>
                </div>

                {/* Step 3: Routed Next Step */}
                <div className="bg-[#081020] rounded-xl p-3.5 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Stage 5: Route &amp; Learn</span>
                    <span className="text-[#2DD4BF] text-[11px] font-semibold bg-[#2DD4BF]/10 px-2 py-0.5 rounded">
                      Reply Handed Off
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Assigned Owner: <strong>Marcus Vance (Lead Agent)</strong></span>
                    <span className="text-[#4F5DFF] font-semibold">Call Task Created</span>
                  </div>
                </div>

              </div>

              {/* Clean bottom note */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Services first. Software second. Systems always.</span>
                <span className="text-[#2DD4BF] font-semibold">Zero lost contacts</span>
              </div>

            </div>
          </div>

        </div>

        {/* CRM Compatibility Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-5">
            Works with your existing CRM and database
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-bold text-slate-400">
            <span className="hover:text-white transition-colors">FOLLOW UP BOSS</span>
            <span className="hover:text-white transition-colors">kvCORE</span>
            <span className="hover:text-white transition-colors">LOFTY / CHIME</span>
            <span className="hover:text-white transition-colors">BOOMTOWN</span>
            <span className="hover:text-white transition-colors">SIERRA INTERACTIVE</span>
            <span className="hover:text-white transition-colors">HUBSPOT</span>
            <span className="hover:text-white transition-colors">SPREADSHEETS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
