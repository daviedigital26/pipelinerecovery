import { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: () => void;
}

export function RoiCalculator({ onOpenTrial }: RoiCalculatorProps) {
  const [avgCommission, setAvgCommission] = useState(9000);
  const [extraDeals, setExtraDeals] = useState(2);

  const blueprintCost = 1750; // Fixed $1,750 Revenue Architecture Blueprint
  const extraRevenue = avgCommission * extraDeals;
  const netProfit = extraRevenue - blueprintCost;
  const roi = Math.round((netProfit / blueprintCost) * 100);
  const multiple = (extraRevenue / blueprintCost).toFixed(1);

  return (
    <section id="roi-calculator" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Calculator className="w-3.5 h-3.5" />
            <span>The Pipeline Recovery Math</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate the Return on Recovering Dormant Leads
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real estate commissions are significant. Re-engaging even a tiny fraction of the quiet leads already in your CRM delivers immediate asymmetric ROI.
          </p>
        </div>

        {/* The Calculator Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Side */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Average Commission */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white">
                    Your Average Commission Check
                  </label>
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    ${avgCommission.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="4000"
                  max="25000"
                  step="500"
                  value={avgCommission}
                  onChange={(e) => setAvgCommission(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$4,000</span>
                  <span>$15,000</span>
                  <span>$25,000+</span>
                </div>
              </div>

              {/* Slider 2: Extra Deals Recovered */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white">
                    Quiet Leads Reactivated Into Closings
                  </label>
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    +{extraDeals} {extraDeals === 1 ? 'Closing' : 'Closings'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={extraDeals}
                  onChange={(e) => setExtraDeals(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 closing</span>
                  <span>3 closings</span>
                  <span>6 closings</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  *From leads you already acquired who went quiet after showing fatigue, mortgage rate shock, or missed follow-ups.
                </p>
              </div>

              {/* Investment Comparison Breakdown */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>$1,750 Revenue Architecture Blueprint</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-mono font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    One-Time Fixed Asset
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 pt-1.5 border-t border-slate-800/80 leading-relaxed">
                  Start with the <strong>Free Pipeline Snapshot ($0)</strong>. When ready, the full <strong>$1,750 Recovery Blueprint</strong> provides custom sequences, CRM stage rules, and team SOPs you own forever.
                </div>
              </div>

            </div>

            {/* Results Output Side */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 text-center space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  ESTIMATED RECOVERED REVENUE
                </span>
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono mt-1">
                  +${extraRevenue.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  Based on recovering 2 deals at a $9,000 average commission.
                </p>
                <div className="text-xs text-slate-300 mt-2 font-medium bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                  Based on recovering {extraDeals} {extraDeals === 1 ? 'deal' : 'deals'} against the <strong>$1,750 Recovery System</strong> ({multiple}x return).
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-left">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-slate-400 block font-medium">Net Return:</span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Cost: $1,750
                    </span>
                  </div>
                  <strong className="text-base text-white font-mono font-bold block mt-0.5">
                    +${netProfit.toLocaleString()}
                  </strong>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-slate-400 block font-medium">ROI Percentage:</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">
                      {multiple}x Return
                    </span>
                  </div>
                  <strong className="text-base text-amber-400 font-mono font-bold flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                    +{roi}%
                  </strong>
                </div>
              </div>

              <div className="text-xs text-slate-300 bg-amber-400/10 border border-amber-400/20 p-3 rounded-xl text-left leading-relaxed">
                💡 <strong>The bottom line:</strong> Recovering just <strong>ONE</strong> single quiet lead from your existing CRM covers the $1,750 Recovery System multiple times over.
              </div>

              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
