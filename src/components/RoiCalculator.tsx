import { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2, TrendingUp } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: () => void;
}

export function RoiCalculator({ onOpenTrial }: RoiCalculatorProps) {
  const [avgCommission, setAvgCommission] = useState(9000);
  const [extraDeals, setExtraDeals] = useState(2);

  const annualRealeCost = 49 * 12; // $588
  const extraRevenue = avgCommission * extraDeals;
  const netProfit = extraRevenue - annualRealeCost;
  const roi = Math.round((netProfit / annualRealeCost) * 100);

  return (
    <section id="roi-calculator" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Calculator className="w-3.5 h-3.5" />
            <span>The No-Brainer Math</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See How Much Money Reale Makes You
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real estate commissions are big. Marketing does not have to be expensive. See your numbers below:
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

              {/* Slider 2: Extra Deals */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white">
                    Extra Homes Sold This Year
                  </label>
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    +{extraDeals} {extraDeals === 1 ? 'Home' : 'Homes'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={extraDeals}
                  onChange={(e) => setExtraDeals(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 extra deal</span>
                  <span>4 deals</span>
                  <span>8 deals</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  *Just from past clients seeing your posts or open house guests taking your seller guide.
                </p>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cost of Reale for the whole year: $588</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  That is only $49 a month. Less than the cost of one yard sign.
                </p>
              </div>

            </div>

            {/* Results Output Side */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 text-center space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Your Estimated Extra Commission
                </span>
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono mt-1">
                  +${extraRevenue.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-left">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Net Profit:</span>
                  <strong className="text-base text-white font-mono font-bold">
                    +${netProfit.toLocaleString()}
                  </strong>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Your Return (ROI):</span>
                  <strong className="text-base text-amber-400 font-mono font-bold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +{roi}%
                  </strong>
                </div>
              </div>

              <div className="text-xs text-slate-300 bg-amber-400/10 border border-amber-400/20 p-3 rounded-xl">
                💡 <strong>The bottom line:</strong> Selling just <strong>ONE</strong> extra home pays for Reale for the next <strong>15 years</strong>.
              </div>

              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
