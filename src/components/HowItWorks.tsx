import { ArrowRight, Check, X, Sparkles } from 'lucide-react';
import { comparisonPoints } from '../data/samples';

interface HowItWorksProps {
  onOpenTrial?: () => void;
  onOpenAudit?: () => void;
}

export function HowItWorks({ onOpenTrial, onOpenAudit }: HowItWorksProps) {
  const handleOpen = onOpenAudit || onOpenTrial || (() => {});
  const steps = [
    {
      number: '1',
      title: 'Free Diagnostic Audit',
      text: 'We identify where leads go quiet and quantify dormant commission.',
    },
    {
      number: '2',
      title: 'The $1,750 Custom Blueprint',
      text: 'We construct your bespoke re-engagement sequences and CRM stage definitions.',
    },
    {
      number: '3',
      title: 'Implementation & Deal Recovery',
      text: 'We execute seamlessly in-house using our turn-key playbooks, or train your team.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-[#0d1424] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Revive Your Pipeline
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A clear, consultative framework designed to convert dormant contacts into active transactions without burning goodwill.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-7 sm:p-8 relative hover:border-amber-400/40 transition-colors shadow-lg space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 font-black font-display text-xl flex items-center justify-center shadow-md shadow-amber-400/20">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {step.text}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-amber-400 font-semibold">
                {step.number === '1' && '100% Free · 24-Hour Review'}
                {step.number === '2' && 'Fixed $1,750 Strategic Asset'}
                {step.number === '3' && 'Internal or Separately Quoted'}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table: Buying New Leads vs. Recovering What You Have */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Top Producers Stop Buying More Leads
            </h3>
            <p className="text-sm text-slate-400">
              Compare the endless treadmill of cold ad leads with systematic revenue architecture:
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl">
            <div className="grid grid-cols-12 bg-slate-950 p-4 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
              <div className="col-span-5 sm:col-span-5">Strategic Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">The Trap: Buying More Cold Leads</div>
              <div className="col-span-3 sm:col-span-3 text-amber-400 font-extrabold">Our Recovery Architecture</div>
            </div>

            <div className="divide-y divide-slate-800/80 text-sm">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center gap-2 hover:bg-slate-800/30 transition-colors">
                  <div className="col-span-5 sm:col-span-5 font-semibold text-slate-200 text-xs sm:text-sm">
                    {item.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-xs text-rose-300/90 flex items-start gap-1.5 leading-relaxed">
                    <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item.others}</span>
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-xs sm:text-sm font-medium text-emerald-300 flex items-start gap-1.5 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.recovery}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-300 text-center sm:text-left">
                Ready to find the hidden transactions in your database?
              </span>
              <button
                onClick={handleOpen}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Get My Free Pipeline Snapshot →</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
