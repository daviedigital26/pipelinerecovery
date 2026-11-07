import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Building2, Wrench, FileSearch, Layers } from 'lucide-react';

interface AllOffersOverviewProps {
  onSelectOffer?: (slug: string) => void;
  onOpenTrial: () => void;
}

export function AllOffersOverview({ onSelectOffer, onOpenTrial }: AllOffersOverviewProps) {
  const offers = [
    {
      id: 'offer-1',
      slug: 'pipeline-recovery',
      title: 'Free Pipeline Snapshot',
      service: 'Realtor Pipeline Recovery™',
      hook: 'Find missed follow-ups and discover where deals are stalling in your current CRM.',
      badge: 'Step 01 · Diagnostic',
      price: 'Free',
      pricingSub: 'Zero cost / No credit card',
      serviceBadge: 'Free Diagnostic',
      icon: FileSearch,
      btnText: 'Get My Free Snapshot →'
    },
    {
      id: 'offer-2',
      slug: 'revenue-blueprint',
      title: '$1,750 Recovery System',
      service: 'Realtor Pipeline Recovery™',
      hook: 'Includes custom sequences, CRM tags, and team SOPs.',
      badge: 'Step 02 · Strategic Asset',
      price: '$1,750',
      pricingSub: 'One-time fixed system investment',
      serviceBadge: 'Full System',
      icon: Layers,
      highlight: true,
      btnText: 'Request Recovery System →'
    },
    {
      id: 'offer-3',
      slug: 'pipeline-implementation',
      title: 'Pipeline Recovery Implementation',
      service: 'Realtor Pipeline Recovery™',
      hook: 'Full technical rollout: CRM data clean-up, automated sequence wiring, and team launch management.',
      badge: 'Step 03 · Done-For-You',
      price: 'Separately Quoted',
      pricingSub: 'Custom scope based on database size',
      serviceBadge: 'Full Execution',
      icon: Wrench,
      btnText: 'Request Implementation →'
    },
  ];

  return (
    <section id="offers" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#0d1424]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Simple 3-Step Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Clear, transparent, and modular solutions designed to recover lost revenue from your existing contacts.
          </p>
        </div>

        {/* The 3 Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                onClick={() => onSelectOffer?.(offer.slug)}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-xl cursor-pointer group relative ${
                  offer.highlight
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-[#18233c] border-2 border-amber-400 shadow-amber-400/10'
                    : 'bg-slate-900/90 border border-slate-800 hover:border-amber-400/50'
                }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                    Core Strategic Asset
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                      {offer.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded">
                      {offer.serviceBadge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {offer.hook}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-base sm:text-lg font-black text-amber-400 font-mono block">
                      {offer.price}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {offer.pricingSub}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex items-center gap-1">
                    {offer.btnText || 'Details →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single line below grid */}
        <p className="text-center text-sm font-semibold text-slate-300 mt-10">
          Start with a free snapshot. Transparent fixed blueprint pricing. No retainers or forced contracts.
        </p>

        {/* Single CTA below section */}
        <div className="mt-6 text-center space-y-2">
          <button
            onClick={onOpenTrial}
            className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-amber-500/25 animate-cta-glow shimmer-badge inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
          >
            <span className="relative z-10">Get My Free Pipeline Snapshot →</span>
          </button>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
