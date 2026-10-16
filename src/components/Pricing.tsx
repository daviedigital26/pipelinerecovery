import { ArrowRight, Check, ShieldCheck, Sparkles, FileText, Tag } from 'lucide-react';

interface PricingProps {
  onOpenAudit: (type?: 'pipeline' | 'listing') => void;
  onSelectOffer?: (slug: string) => void;
}

export function Pricing({ onOpenAudit, onSelectOffer }: PricingProps) {
  return (
    <section id="pricing" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#081020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Offer Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear Offers. Transparent Scope.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Start with a free human review. Move to a written Blueprint when you need a deeper plan. Setup and launch work are always priced separately.
          </p>

          {/* Comparison summary row */}
          <div className="p-3.5 bg-[#0c162c] border border-slate-800 rounded-xl text-xs text-slate-300 max-w-2xl mx-auto mt-4">
            The Free Audit is a brief human check to find your first gap. The $1,750 Blueprint delivers the full written recovery roadmap for your team.
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch pt-2">
          
          {/* Card 1: Free Pipeline Recovery Audit */}
          <div className="bg-[#0c162c] rounded-3xl border border-slate-800 hover:border-[#4F5DFF]/40 p-8 flex flex-col justify-between transition-colors shadow-xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full border border-slate-700">
              Entry Review
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Free Pipeline Recovery Audit</h3>
                <p className="text-xs text-slate-300 mt-1 font-semibold text-[#2DD4BF]">
                  Find where follow-up gets stuck in your database.
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white font-mono">
                  $0
                </span>
                <span className="text-sm font-medium text-slate-400">/ brief human review</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Up to three follow-up gaps to check in your CRM</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>One specific lead group worth a closer look</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>A clear, actionable next step recommended by David Reale</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>No payment details or credit card required</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>No need to upload or share your contact list</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <span className="w-4 h-4 text-center shrink-0 text-slate-500">&bull;</span>
                  <span>Does not include full CRM cleanup or campaign setup</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-2">
              <button
                onClick={() => onOpenAudit('pipeline')}
                className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get My Free Pipeline Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400">
                No account or credit card &bull; Brief human review
              </p>
            </div>
          </div>

          {/* Card 2: Revenue Architecture Blueprint */}
          <div className="bg-gradient-to-b from-[#0e1a38] via-[#0c162c] to-[#081020] rounded-3xl border-2 border-[#4F5DFF] p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4F5DFF] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-md">
              Comprehensive Written Plan
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Revenue Architecture Blueprint</h3>
                <p className="text-xs text-slate-300 mt-1 font-semibold text-[#2DD4BF]">
                  A complete written recovery plan for your team.
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#4F5DFF] font-mono">
                  $1,750
                </span>
                <span className="text-sm font-medium text-slate-400">one-time agreed scope</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Full review of agreed CRM lead sources, tasks &amp; notes</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Complete map of the 5 recovery stages for your database</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Targeted lead groups with clear reasons to reach back out</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Custom follow-up messages tailored for your approval</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Reply owners, CRM task schedules, and routing SLAs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Written findings report and personalized team walkthrough</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <span className="w-4 h-4 text-center shrink-0 text-slate-500">&bull;</span>
                  <span>Setup and live launch work quoted separately</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-2">
              <button
                onClick={() => onSelectOffer?.('revenue-architecture-blueprint')}
                className="w-full py-3.5 px-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-xs rounded-xl transition-all shadow-lg shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <span className="relative z-10">Apply for a Blueprint Review</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Application review &bull; Written agreement required
              </p>
            </div>
          </div>

        </div>

        {/* Dedicated Price Drop Pro Callout Box */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#0c162c] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>For Listings Needing Fresh Traction</span>
            </div>
            <h4 className="text-xl font-bold text-white">Price Drop Pro™ — Free Listing Relaunch Review</h4>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Have an active listing that went quiet or an upcoming price change? Share public MLS details for a free review of your message and follow-up plan. Paid relaunch execution is quoted separately based on assets, channels, and timing needed.
            </p>
          </div>
          <button
            onClick={() => onOpenAudit('listing')}
            className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 whitespace-nowrap cursor-pointer transition-colors"
          >
            Get My Free Listing Review
          </button>
        </div>

        {/* Clean Guarantee and Transparency Block */}
        <div className="mt-10 text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
            <span><strong>Transparent Commercial Terms:</strong> No subscriptions. No automatic billing. You approve all work in writing.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
