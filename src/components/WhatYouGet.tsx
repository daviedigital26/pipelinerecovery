import { ArrowRight, CheckCircle2, ShieldAlert, Building2, MessageSquare, Database, RefreshCw, Users, FileText, TrendingUp } from 'lucide-react';

interface WhatYouGetProps {
  onOpenTrial: () => void;
}

export function WhatYouGet({ onOpenTrial }: WhatYouGetProps) {
  return (
    <section id="services" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <span>✨ SPECIALIZED FRAMEWORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Two Dedicated Services
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Good leads can go quiet. We specialize strictly in finding missed follow-ups and recovering dormant pipelines inside your current CRM.
          </p>
        </div>

        {/* 2 Flagship Service Deep-Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Service 1: Realtor Pipeline Recovery™ */}
          <div className="bg-slate-900/90 rounded-3xl border-2 border-amber-400/40 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-amber-400 transition-all">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm">
              Service 01
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                    Database &amp; CRM Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Realtor Pipeline Recovery™
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Before you buy more leads, follow up with the ones you have. We audit your existing database, find every contact who slipped through the cracks, and deploy multi-touch re-engagement campaigns.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">CRM Database Cleanup</strong>
                    <span className="text-slate-400 text-xs">Isolate high-intent contacts from dead weight.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Re-Engagement Sequences</strong>
                    <span className="text-slate-400 text-xs">Low-friction messaging that respects consumer intelligence.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Clear Next Steps</strong>
                    <span className="text-slate-400 text-xs">Operational protocols so no warm contact ever drops.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Initial Engagement:</span>
                <span className="text-sm font-bold text-emerald-400">Free Pipeline Snapshot</span>
              </div>
              <button
                onClick={onOpenTrial}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Get My Free Pipeline Snapshot →</span>
              </button>
            </div>
          </div>

          {/* Service 2: Done-For-You Recovery */}
          <div className="bg-slate-900/90 rounded-3xl border-2 border-sky-400/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-sky-400 transition-all">
            <div className="absolute top-0 right-0 bg-sky-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm">
              Service 02
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">
                    Full Execution
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Done-For-You Recovery
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Don&apos;t have time to run the system yourself? We execute everything inside your CRM for you.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Full Technical Setup</strong>
                    <span className="text-slate-400 text-xs">We build the sequences and tags.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Team Launch Management</strong>
                    <span className="text-slate-400 text-xs">We train your ISA or agents.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Managed Outreach</strong>
                    <span className="text-slate-400 text-xs">We monitor and adjust the campaigns.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Pricing:</span>
                <span className="text-sm font-bold text-sky-300">Internal or Separately Quoted</span>
              </div>
              <button
                onClick={onOpenTrial}
                className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Request Implementation →</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
