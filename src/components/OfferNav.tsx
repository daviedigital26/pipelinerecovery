import { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { offersList } from '../data/offers';

interface OfferNavProps {
  currentOfferSlug: string | null; // null means main studio
  onSelectOffer: (slug: string | null) => void;
  onOpenTrial: () => void;
}

export function OfferNav({ currentOfferSlug, onSelectOffer, onOpenTrial }: OfferNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeOffer = offersList.find((o) => o.slug === currentOfferSlug);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b101b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element Brand Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectOffer(null)}
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 font-display text-base font-black text-slate-950 shadow-sm">
              R
            </span>
            <span className="font-display tracking-tight text-xl">Reale</span>
          </button>

          {/* Offer switcher pill dropdown for desktop */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              <span className="text-amber-400 font-bold">
                {activeOffer ? activeOffer.title : 'All Offers & Studio'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl z-50 space-y-1">
                <button
                  onClick={() => {
                    onSelectOffer(null);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    currentOfferSlug === null
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>Main Studio (All-In-One)</span>
                  <span className="text-[10px] opacity-75">Flagship</span>
                </button>

                <div className="border-t border-slate-800 my-1 pt-1">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-500">
                    Specialized Offers:
                  </div>
                </div>

                {offersList.map((offer) => (
                  <button
                    key={offer.slug}
                    onClick={() => {
                      onSelectOffer(offer.slug);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      currentOfferSlug === offer.slug
                        ? 'bg-amber-400 text-slate-950'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{offer.title}</span>
                    <span className="text-[10px] text-amber-400/80 font-normal">
                      {offer.shortTag}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onSelectOffer(null)}
            className={`hover:text-white transition-colors cursor-pointer ${
              currentOfferSlug === null ? 'text-amber-400 font-bold' : ''
            }`}
          >
            Studio Overview
          </button>
          
          <button
            onClick={() => onSelectOffer('pipeline-recovery')}
            className={`hover:text-white transition-colors cursor-pointer flex items-center gap-1 ${
              currentOfferSlug === 'pipeline-recovery' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            <span>Pipeline Recovery</span>
            <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-mono">
              Hot
            </span>
          </button>

          <button
            onClick={() => onSelectOffer('handoff-audit')}
            className={`hover:text-white transition-colors cursor-pointer ${
              currentOfferSlug === 'handoff-audit' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            Handoff Audit
          </button>

          <button
            onClick={() => onSelectOffer('listing-launchpad')}
            className={`hover:text-white transition-colors cursor-pointer ${
              currentOfferSlug === 'listing-launchpad' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            Listing Launchpad
          </button>

          <button
            onClick={() => onSelectOffer('sphere-nurture')}
            className={`hover:text-white transition-colors cursor-pointer ${
              currentOfferSlug === 'sphere-nurture' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            Sphere & Referrals
          </button>

          <button
            onClick={() => onSelectOffer('script-vault')}
            className={`hover:text-white transition-colors cursor-pointer ${
              currentOfferSlug === 'script-vault' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            Script Vault
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTrial}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg transition-all shadow-sm shadow-amber-400/20 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Free 14-Day Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0f172a] px-4 py-4 space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Explore Landing Pages:
          </div>

          <button
            onClick={() => {
              onSelectOffer(null);
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentOfferSlug === null
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Main Studio (All-In-One)
          </button>

          {offersList.map((offer) => (
            <button
              key={offer.slug}
              onClick={() => {
                onSelectOffer(offer.slug);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                currentOfferSlug === offer.slug
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{offer.title}</span>
              <span className="text-xs text-amber-400 font-mono">
                {offer.shortTag}
              </span>
            </button>
          ))}

          <div className="pt-3 border-t border-slate-800 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-950 bg-amber-400 rounded-lg cursor-pointer"
            >
              Start Free 14-Day Trial
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
