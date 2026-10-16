import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { RealeLogo } from './RealeLogo';

interface OfferNavProps {
  currentOfferSlug: string | null;
  onSelectOffer: (slug: string | null) => void;
  onOpenAudit: (type?: 'pipeline' | 'listing') => void;
}

export function OfferNav({ currentOfferSlug, onSelectOffer, onOpenAudit }: OfferNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isPriceDrop = currentOfferSlug === 'price-drop-pro';

  const navLinks = [
    { label: 'Pipeline Recovery', slug: 'realtor-pipeline-recovery', anchor: '#pipeline-recovery' },
    { label: 'Price Drop Pro', slug: 'price-drop-pro', anchor: '#price-drop-pro' },
    { label: 'How It Works', slug: 'how-it-works', anchor: '#how-it-works' },
    { label: 'Resources', slug: 'resources', anchor: '#resources' },
  ];

  const handleLinkClick = (link: { slug: string; anchor: string }) => {
    setMobileMenuOpen(false);
    onSelectOffer(link.slug);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#081020]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo Lockup */}
        <div className="flex items-center gap-3">
          <RealeLogo
            variant="reversed"
            onClick={() => onSelectOffer(null)}
          />
        </div>

        {/* Desktop Nav Links: Pipeline Recovery | Price Drop Pro | How It Works | Resources */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = currentOfferSlug === link.slug;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`transition-colors cursor-pointer py-1 relative ${
                  isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4F5DFF] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA on Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenAudit(isPriceDrop ? 'listing' : 'pipeline')}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs font-bold text-white bg-[#4F5DFF] hover:bg-[#4350e6] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge whitespace-nowrap cursor-pointer hover:shadow-[#4F5DFF]/40"
          >
            <span className="relative z-10">
              {isPriceDrop ? 'Get My Free Listing Relaunch Review' : 'Get My Free Pipeline Audit'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#081020] px-4 py-4 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-300">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectOffer(null);
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-800/80 hover:text-white transition-colors"
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`text-left px-3 py-2.5 rounded-lg transition-colors ${
                  currentOfferSlug === link.slug
                    ? 'bg-slate-800/90 text-white font-semibold'
                    : 'hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit(isPriceDrop ? 'listing' : 'pipeline');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#4F5DFF] hover:bg-[#4350e6] rounded-lg shadow-md cursor-pointer"
            >
              <span>{isPriceDrop ? 'Get My Free Listing Relaunch Review' : 'Get My Free Pipeline Audit'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
