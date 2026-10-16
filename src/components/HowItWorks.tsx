import { ArrowRight, Check, X, Shield, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenAudit: () => void;
}

export function HowItWorks({ onOpenAudit }: HowItWorksProps) {
  const steps = [
    {
      number: '1',
      title: 'Choose a Free Review',
      text: 'Have old leads or missed follow-up? Start with the Free Pipeline Recovery Audit. Have a stale listing or a price change? Start with the Free Listing Relaunch Review.',
      badge: 'Zero Obligation'
    },
    {
      number: '2',
      title: 'Review What Is Happening',
      text: 'We look at your answers and talk through the gap. We explain what we know from your CRM records, what is an estimate, and what still needs proof.',
      badge: 'Diagnostic Call'
    },
    {
      number: '3',
      title: 'Agree on the Next Step',
      text: 'If a deeper plan fits, the Revenue Architecture Blueprint is $1,750. It maps the lead groups, follow-up, owners, and tasks. Paid setup uses a separate custom quote.',
      badge: 'Clear Written Scope'
    },
  ];

  const comparisonPoints = [
    {
      feature: 'Primary Philosophy',
      oldWay: 'Buy more expensive leads while existing database decays quietly',
      realeWay: 'Re-engage the quiet leads and sphere you already paid to acquire',
    },
    {
      feature: 'CRM & Software',
      oldWay: 'Forces migration to proprietary software or new unneeded platforms',
      realeWay: 'Works 100% inside your existing CRM (Follow Up Boss, kvCORE, etc.)',
    },
    {
      feature: 'Messaging Approach',
      oldWay: 'Impersonal, generic marketing blasts that trigger unsubscribes',
      realeWay: 'Short, friendly questions written at a 6th-grade reading level',
    },
    {
      feature: 'Reply Accountability',
      oldWay: 'Inbound replies land in a shared team inbox with no assigned owner',
      realeWay: 'Every reply routed to a specific agent with an immediate task date',
    },
    {
      feature: 'Commitment & Terms',
      oldWay: '6 to 12-month agency retainer contracts ($1,500–$3,000/month)',
      realeWay: 'Free review → $1,750 Blueprint → custom quoted setup. No contracts.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-[#0a1428] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Start Small. Fix the Next Step.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            First, we review the gap. Then we agree on a plan. Paid setup comes after a clear scope and fee.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#081020] rounded-2xl border border-slate-800 p-7 relative hover:border-[#4F5DFF]/50 transition-colors shadow-lg space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#4F5DFF] text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-[#4F5DFF]/25">
                  {step.number}
                </div>
                <span className="text-[11px] font-semibold text-[#2DD4BF] bg-[#2DD4BF]/10 px-2.5 py-0.5 rounded">
                  {step.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Control Box */}
        <div className="mt-10 bg-[#081020] rounded-2xl border border-slate-800 p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">You Keep Control Every Step of the Way</h4>
              <p className="text-xs text-slate-300">You keep your CRM and client ties. You approve all messages before launch.</p>
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-5 py-2.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-xs rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Get My Free Pipeline Audit
          </button>
        </div>

        {/* Agency vs. Reale Comparison Table */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="text-center space-y-3 mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Buying More Leads vs. Working What You Have
            </h3>
            <p className="text-sm text-slate-300">
              Why established teams choose systemized follow-up over perpetual ad spend.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-[#081020] shadow-2xl">
            <div className="grid grid-cols-12 bg-slate-900 border-b border-slate-800 text-xs font-bold uppercase tracking-wider py-4 px-6 text-slate-300">
              <div className="col-span-4 sm:col-span-3">Area</div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">The Old Way</div>
              <div className="col-span-4 sm:col-span-5 text-[#4F5DFF]">Reale Revenue Systems</div>
            </div>

            <div className="divide-y divide-slate-800 text-xs sm:text-sm">
              {comparisonPoints.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 py-4 px-6 items-center gap-2 hover:bg-slate-900/40 transition-colors">
                  <div className="col-span-4 sm:col-span-3 font-semibold text-white">
                    {row.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-400 flex items-start gap-1.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.oldWay}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-5 text-slate-200 font-medium flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                    <span>{row.realeWay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
