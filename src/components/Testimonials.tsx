import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { realScenarios } from '../data/samples';

interface TestimonialsProps {
  onOpenTrial: () => void;
}

export function Testimonials({ onOpenTrial }: TestimonialsProps) {
  return (
    <section id="scenarios" className="py-16 lg:py-24 bg-[#0d1424] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Field Methodology &amp; Case Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Pipeline Scenarios We Solve
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Examining the operational breakdowns that cause good leads to go quiet, and the strategic fixes that recover lost commission revenue.
          </p>
        </div>

        {/* 3 Real Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realScenarios.map((scenario, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md">
                    {scenario.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Scenario 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {scenario.title}
                </h3>

                {/* Challenge */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-rose-400 flex items-center gap-1 uppercase tracking-wider">
                    <AlertCircle className="w-3 h-3" /> The Breakdown
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {scenario.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-sky-400 flex items-center gap-1 uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" /> Our Architecture
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {scenario.approach}
                  </p>
                </div>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Result
                </span>
                <p className="text-xs font-semibold text-white leading-relaxed">
                  {scenario.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight Card */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="w-full sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
            <img
              src="/src/assets/images/agent_happy_closing_1791193974108.jpg"
              alt="Real estate clients reviewing contract and settlement documents"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-3 text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              The Real Estate Incubation Reality
            </span>
            <h3 className="text-xl font-bold text-white">
              Over 80% of buyers and sellers take 6 to 24 months to transact.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When agents stop following up after 2 or 3 weeks, they discard the exact window where consumer motivation turns into an active listing or purchase contract. We ensure your pipeline stays organized, dignified, and proactive throughout their entire journey.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-md"
              >
                <span>Get My Free Pipeline Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
