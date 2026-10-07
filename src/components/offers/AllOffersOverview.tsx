import { offersList } from '../../data/offers';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AllOffersOverviewProps {
  onSelectOffer: (slug: string) => void;
  onOpenTrial: () => void;
}

export function AllOffersOverview({ onSelectOffer, onOpenTrial }: AllOffersOverviewProps) {
  return (
    <section className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#0d1424]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Complete Reale Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore All 5 Specialized Offers
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Each offer tackles one specific revenue leak in your real estate business. Click any offer to view its dedicated landing page and tools:
          </p>
        </div>

        {/* 5 Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offersList.map((offer, idx) => (
            <div
              key={offer.id}
              className={`bg-slate-900 rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-amber-400/50 shadow-xl ${
                offer.slug === 'pipeline-recovery' ? 'border-amber-400/40 relative' : 'border-slate-800'
              }`}
            >
              {offer.slug === 'pipeline-recovery' && (
                <div className="absolute -top-3 left-6 bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                  ATTACHMENT SLIDE SHOWCASE
                </div>
              )}

              <div className="space-y-4">
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
                  <img
                    src={offer.heroImage}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono font-bold text-amber-400 border border-slate-700/80">
                    {offer.primaryMetric}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                    Offer 0{idx + 1} · {offer.shortTag}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {offer.plainSummary}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{offer.deliverables[0]?.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{offer.deliverables[1]?.title}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectOffer(offer.slug)}
                  className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Landing Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* 6th Card: All-In-One Studio Access */}
          <div className="bg-gradient-to-b from-slate-900 to-[#121c35] rounded-3xl border-2 border-amber-400/60 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-black font-display text-xl flex items-center justify-center shadow-md">
                R
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  All-In-One Flagship
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Complete Studio Membership
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Want all 5 systems plus 30 fresh social posts every single month? Unlock full access to the entire Reale Content Studio for $49/mo.
                </p>
              </div>

              <div className="text-xs text-emerald-400 font-semibold space-y-1">
                <div>✓ 30 Daily Social Posts &amp; Graphics</div>
                <div>✓ All 5 Specialized Offer Systems Included</div>
                <div>✓ 14-Day 100% Free Trial</div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6">
              <button
                onClick={onOpenTrial}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
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
