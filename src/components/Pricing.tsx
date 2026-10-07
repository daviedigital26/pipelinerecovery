import { useState } from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenTrial: () => void;
}

export function Pricing({ onOpenTrial }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <span>Simple, Fair Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Less Than The Cost of a Single Lawn Sign
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Start with our 14-day free trial. If it doesn&apos;t make your life 10x easier, you don&apos;t pay a dime.
          </p>

          {/* Billing Switcher */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-slate-800 hover:bg-slate-700"
              role="switch"
              aria-checked={isAnnual}
            >
              <span
                className={`${
                  isAnnual ? 'translate-x-5 bg-amber-400' : 'translate-x-0 bg-slate-400'
                } pointer-events-none inline-block h-5 w-5 transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Yearly <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Plan 1: Starter Agent Plan */}
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  For Solo & Growing Agents
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Starter Agent</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Everything you need to market consistently and stay top-of-mind.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white font-mono">
                  ${isAnnual ? '39' : '49'}
                </span>
                <span className="text-sm font-medium text-slate-400">/ month</span>
                {isAnnual && (
                  <span className="text-xs text-emerald-400 ml-2 font-semibold">
                    (billed yearly at $468)
                  </span>
                )}
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30 fresh social media posts & graphics every month</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>4 buyer & seller PDF booklets (print or send online)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>4 weekly email newsletters your clients will read</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>20+ word-for-word text & phone scripts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-click Canva template links</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cancel anytime in 1 click (no contracts)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                No credit card needed today
              </p>
            </div>
          </div>

          {/* Plan 2: Top Producer Plan (Featured) */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#111a2f] rounded-3xl border-2 border-amber-400 p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-md">
              Most Popular Among Top Agents
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Complete Done-For-You Kit
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Top Producer</h3>
                <p className="text-xs text-slate-300 mt-1">
                  For agents and team leaders who want maximum listings and reach.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-amber-400 font-mono">
                  ${isAnnual ? '69' : '89'}
                </span>
                <span className="text-sm font-medium text-slate-400">/ month</span>
                {isAnnual && (
                  <span className="text-xs text-emerald-400 ml-2 font-semibold">
                    (billed yearly at $828)
                  </span>
                )}
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Everything in Starter Agent</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom branding setup (your headshot & colors pre-applied)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Short-form video scripts & teleprompter notes (Reels/TikTok)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Quarterly luxury neighborhood print mailer templates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Priority VIP agent support (response in under 2 hours)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                14 days free · Instant welcome package access
              </p>
            </div>
          </div>

        </div>

        {/* 100% Money Back Guarantee Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">
              Our 100% &ldquo;No Guilt, No Hassle&rdquo; Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Try Reale free for 14 days. If it doesn&apos;t save you at least 10 hours of work or help you book client conversations, you can cancel in one click inside your account. No phone calls, no runaround.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
