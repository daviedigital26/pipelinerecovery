import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AllOffersOverviewProps {
  onSelectOffer?: (slug: string) => void;
  onOpenAudit: () => void;
}

export function AllOffersOverview({ onSelectOffer, onOpenAudit }: AllOffersOverviewProps) {
  const steps = [
    {
      step: '01',
      title: 'Audit',
      shortHook: "See what's missing.",
      detail: 'Review lead sources, notes, and tasks in your CRM. Find the gaps we can support with actual records.',
      actionPoint: 'Identify unworked leads & missing tasks'
    },
    {
      step: '02',
      title: 'Clean',
      shortHook: 'Make the records useful.',
      detail: 'Fix or flag agreed record issues. Keep contact preferences, past notes, and showing history in clear view.',
      actionPoint: 'Clear clutter & tag unworked contacts'
    },
    {
      step: '03',
      title: 'Segment',
      shortHook: 'Group leads by need.',
      detail: 'Group leads by neighborhood, price band, timing, and past interest so outreach feels personal, not blasted.',
      actionPoint: 'Targeted groups with shared context'
    },
    {
      step: '04',
      title: 'Restart',
      shortHook: 'Reach out with a real reason.',
      detail: 'Write a useful, conversational reason to reach out. You approve the group and the exact message before launch.',
      actionPoint: '6th-grade friendly questions you approve'
    },
    {
      step: '05',
      title: 'Route & Learn',
      shortHook: 'Give every reply a next step.',
      detail: 'Give replies a named owner and an immediate CRM task. Track what gets a response and refine the workflow.',
      actionPoint: 'Fast handoff with clear accountability'
    },
  ];

  return (
    <section id="process-system" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#081020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 5-Step System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Find It. Fix It. Follow Through.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A clear, predictable method to revive quiet leads and keep your pipeline organized inside the CRM you already have.
          </p>
        </div>

        {/* The 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#0c162c] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-[#4F5DFF]/60 transition-all shadow-lg group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#4F5DFF]">
                    STAGE {item.step}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#707cff] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#2DD4BF] mt-0.5">
                    {item.shortHook}
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>{item.actionPoint}</span>
                <span className="text-[#4F5DFF] font-semibold">Stage {item.step}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Scope & Blueprint Link */}
          <div className="bg-gradient-to-b from-[#0e1a38] to-[#081020] rounded-2xl border-2 border-[#4F5DFF]/50 p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#2DD4BF] font-bold">
                COMMERCIAL SCOPE
              </span>
              <h3 className="text-xl font-bold text-white">
                Revenue Architecture Blueprint
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                $1,750 for the agreed assessment, written recovery plan, and findings walkthrough. Setup and launch work are quoted separately.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <button
                onClick={() => onSelectOffer?.('revenue-architecture-blueprint')}
                className="text-xs font-bold text-white hover:text-[#2DD4BF] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>See What&apos;s in the Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Required single line below the grid */}
        <p className="text-center text-sm font-semibold text-slate-300 mt-10">
          Paid work follows an agreed scope. You approve the plan before launch.
        </p>

        {/* Required one CTA below the section */}
        <div className="mt-6 text-center space-y-2">
          <button
            onClick={onOpenAudit}
            className="px-8 py-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
          >
            <span className="relative z-10">Get My Free Pipeline Audit</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </button>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>Up to 3 gaps checked &bull; 1 lead group &bull; Clear next step</span>
          </p>
        </div>

      </div>
    </section>
  );
}
