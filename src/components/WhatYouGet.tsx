import { ArrowRight, CheckCircle2, UserX, Clock, MessageSquare, Tag, Compass, Sparkles } from 'lucide-react';

interface WhatYouGetProps {
  onOpenAudit: () => void;
  onSelectOffer: (slug: string) => void;
}

export function WhatYouGet({ onOpenAudit, onSelectOffer }: WhatYouGetProps) {
  return (
    <section id="what-you-get" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#081020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>The Real Follow-Up Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Next Good Conversation May Already Be in Your CRM.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Someone asked about a home last year. A seller wanted to wait. A buyer stopped replying. Those are not all dead ends. The next step is to find out who still needs a useful follow-up.
          </p>
        </div>

        {/* 4 Core Opportunity Cards (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Old leads that went quiet */}
          <div className="md:col-span-6 bg-[#0c162c] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#4F5DFF]/50 transition-colors shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 flex items-center justify-center text-[#4F5DFF]">
                  <UserX className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">Opportunity 01</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Old leads that went quiet
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Find people who may still need help buying or selling. Their timing may have changed, or interest rates shifted, but no one has checked in with a useful reason.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Review past website and portal inquiries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Group by neighborhood and price band</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Reach out with quiet market updates, not hard sales</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#081020] border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: Clean record state</span>
              <span className="text-[#2DD4BF] font-semibold">Active Pipeline</span>
            </div>
          </div>

          {/* Card 2: Tasks that never got done */}
          <div className="md:col-span-6 bg-[#0c162c] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#4F5DFF]/50 transition-colors shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 flex items-center justify-center text-[#4F5DFF]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">Opportunity 02</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Tasks that never got done
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                See where the next call, email, or task got missed. Leads slip away when overdue tasks pile up into an unmanageable list that nobody opens.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Audit overdue tasks in Follow Up Boss, kvCORE, etc.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Clear backlogged noise to surface real priorities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Set realistic next-action dates agents actually work</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#081020] border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: Zero overdue task buildup</span>
              <span className="text-[#2DD4BF] font-semibold">Clean Queues</span>
            </div>
          </div>

          {/* Card 3: Replies with no owner */}
          <div className="md:col-span-6 bg-[#0c162c] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#4F5DFF]/50 transition-colors shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 flex items-center justify-center text-[#4F5DFF]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">Opportunity 03</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Replies with no owner
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Give each useful reply a person and a next step. When an old lead finally responds, having a single accountable agent respond in minutes is what saves the closing.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Map inbound reply notifications to specific team agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Establish clear response-time SLAs and team alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Prevent duplicate outreach or conflicting notes</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#081020] border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: Single accountable agent</span>
              <span className="text-[#2DD4BF] font-semibold">Fast Handoff</span>
            </div>
          </div>

          {/* Card 4: Listings that lost attention */}
          <div className="md:col-span-6 bg-[#0c162c] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#4F5DFF]/50 transition-colors shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 flex items-center justify-center text-[#4F5DFF]">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">Opportunity 04</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Listings that lost attention
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Give a stale listing a fresh plan when the price changes. Lowering the price on the MLS is only step one. We help relaunch the opportunity to buyers and showing agents.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Review showing feedback and objection notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Refresh listing message and approved assets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Reconnect with past interested buyers directly</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#081020] border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: Fresh buyer momentum</span>
              <span className="text-[#2DD4BF] font-semibold">Price Drop Pro™</span>
            </div>
          </div>

        </div>

        {/* The Two Dedicated Services: Choose the Help You Need */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Two Focused Services</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Choose the Help You Need.
            </h3>
            <p className="text-sm text-slate-300">
              Clear scope. Transparent process. You approve every message before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Service 1: Realtor Pipeline Recovery */}
            <div className="bg-gradient-to-b from-[#0c162c] to-[#081020] rounded-2xl border-2 border-[#4F5DFF]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
                  Service 01
                </span>
                <h4 className="text-2xl font-bold text-white">
                  Realtor Pipeline Recovery™
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Review old leads. Build useful follow-up. Make sure each reply has an owner. Follows our 5-step system: Audit → Clean → Segment → Restart → Route &amp; Learn.
                </p>

                <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Free entry review available (Pipeline Audit)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>$1,750 Revenue Architecture Blueprint option</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectOffer('realtor-pipeline-recovery')}
                  className="text-sm font-bold text-[#4F5DFF] hover:text-[#707cff] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>See Pipeline Recovery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenAudit}
                  className="px-4 py-2 bg-[#4F5DFF] hover:bg-[#4350e6] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Free Audit
                </button>
              </div>
            </div>

            {/* Service 2: Price Drop Pro */}
            <div className="bg-gradient-to-b from-[#0c162c] to-[#081020] rounded-2xl border-2 border-slate-800 hover:border-[#4F5DFF]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative transition-colors">
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Service 02
                </span>
                <h4 className="text-2xl font-bold text-white">
                  Price Drop Pro™
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Don&apos;t just lower the price. Relaunch the opportunity. Turn a price change into a fresh listing plan with clear buyer follow-up and agent re-engagement.
                </p>

                <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Free entry review of one active listing</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Separately quoted custom relaunch execution</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectOffer('price-drop-pro')}
                  className="text-sm font-bold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>See Price Drop Pro</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenAudit}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer border border-slate-700"
                >
                  Free Review
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
