import { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export function RoiCalculator({ onOpenAudit }: RoiCalculatorProps) {
  const [avgCommission, setAvgCommission] = useState(9000);
  const [revivedDeals, setRevivedDeals] = useState(2);

  const blueprintCost = 1750; // $1,750 Revenue Architecture Blueprint
  const extraRevenue = avgCommission * revivedDeals;
  const netValue = extraRevenue - blueprintCost;
  const returnMultiple = (extraRevenue / blueprintCost).toFixed(1);

  return (
    <section id="roi-calculator" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#081020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Follow-Up Economics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Math on Re-Engaging Quiet Leads
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real estate commissions are high-leverage. You already paid to generate your existing CRM database. See the math on recovering even 1 or 2 quiet contacts:
          </p>
        </div>

        {/* The Calculator Box */}
        <div className="max-w-4xl mx-auto bg-[#0c162c] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Side */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Average Commission */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white">
                    Your Average Commission Check
                  </label>
                  <span className="text-base font-extrabold text-[#4F5DFF] font-mono">
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
                  className="w-full h-2 bg-[#081020] rounded-lg appearance-none cursor-pointer accent-[#4F5DFF]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$4,000</span>
                  <span>$15,000</span>
                  <span>$25,000+</span>
                </div>
              </div>

              {/* Slider 2: Revived Deals */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-white">
                    Quiet Leads Revived Into Closings
                  </label>
                  <span className="text-base font-extrabold text-[#2DD4BF] font-mono">
                    +{revivedDeals} {revivedDeals === 1 ? 'Closing' : 'Closings'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={revivedDeals}
                  onChange={(e) => setRevivedDeals(Number(e.target.value))}
                  className="w-full h-2 bg-[#081020] rounded-lg appearance-none cursor-pointer accent-[#2DD4BF]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 closing</span>
                  <span>3 closings</span>
                  <span>6 closings</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  *From leads who stopped replying 6–12 months ago or open house contacts re-engaged with a real plan.
                </p>
              </div>

              {/* Blueprint Scope Breakdown Box */}
              <div className="bg-[#081020] rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#2DD4BF] font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Revenue Architecture Blueprint: $1,750</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    One-time plan
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Includes full CRM review, 5 recovery stages, agreed lead groups, follow-up messages, reply owners, and findings walkthrough. Setup quoted separately.
                </p>
              </div>

            </div>

            {/* Results Output Side */}
            <div className="lg:col-span-6 bg-[#081020] rounded-2xl border border-slate-800 p-6 sm:p-8 text-center space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Estimated Recovered Gross Commission
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#2DD4BF] font-mono mt-1">
                  +${extraRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Based on {revivedDeals} recovered {revivedDeals === 1 ? 'deal' : 'deals'} at ${avgCommission.toLocaleString()} avg check.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-left">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Gross Net:</span>
                  <strong className="text-base text-white font-mono font-bold block mt-0.5">
                    +${netValue.toLocaleString()}
                  </strong>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Plan Coverage:</span>
                  <strong className="text-base text-[#4F5DFF] font-mono font-bold flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                    {returnMultiple}x Value
                  </strong>
                </div>
              </div>

              <div className="text-xs text-slate-300 bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 p-3 rounded-xl text-left flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#4F5DFF] shrink-0 mt-0.5" />
                <span>
                  <strong>The reality:</strong> Selling just <strong>ONE</strong> extra home from leads already in your CRM covers the entire $1,750 Blueprint several times over.
                </span>
              </div>

              <button
                onClick={onOpenAudit}
                className="w-full py-3.5 px-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get My Free Pipeline Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-slate-500 italic">
                Illustrative example. Results depend on your database records, team response time, and local market. We do not promise replies, appointments, or sales.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
