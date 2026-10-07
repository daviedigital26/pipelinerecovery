import { ArrowRight, Check, X } from 'lucide-react';
import { comparisonPoints } from '../data/samples';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export function HowItWorks({ onOpenTrial }: HowItWorksProps) {
  const steps = [
    {
      number: '1',
      title: 'Pick What You Need',
      text: 'Log in and grab this week’s 7 social posts, your new seller guide, or a follow-up script. Everything is ready on your dashboard.',
    },
    {
      number: '2',
      title: 'Add Your Name & Phone',
      text: 'Takes less than 10 seconds. Put your name, phone number, headshot, and brokerage logo on the templates.',
    },
    {
      number: '3',
      title: 'Share & Get Inquiries',
      text: 'Post to Facebook and Instagram from your phone, print guides for open houses, and send friendly texts. Watch new leads message you.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-[#0d1424] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <span>Dead Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How It Works in 3 Easy Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            If you know how to copy and paste text on your phone, you have all the skills you need.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-7 relative hover:border-amber-400/40 transition-colors shadow-lg space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 font-black font-display text-xl flex items-center justify-center shadow-md shadow-amber-400/20">
                {step.number}
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

        {/* Comparison Table: The No-Brainer Decision */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Real Estate Agents Love Reale
            </h3>
            <p className="text-sm text-slate-400">
              See why hundreds of realtors canceled their marketing agencies and switched:
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl">
            <div className="grid grid-cols-12 bg-slate-950 p-4 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
              <div className="col-span-5 sm:col-span-6">What You Get</div>
              <div className="col-span-4 sm:col-span-3 text-slate-400">Old Way / Agency</div>
              <div className="col-span-3 sm:col-span-3 text-amber-400 font-extrabold">Reale Studio</div>
            </div>

            <div className="divide-y divide-slate-800/80 text-sm">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center gap-2 hover:bg-slate-800/30 transition-colors">
                  <div className="col-span-5 sm:col-span-6 font-medium text-slate-200 text-xs sm:text-sm">
                    {item.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-3 text-xs text-rose-300/80 flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{item.others}</span>
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-xs sm:text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item.reale}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Ready to save 8 hours this week?
              </span>
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
