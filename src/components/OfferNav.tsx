import { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface OfferNavProps {
  currentOfferSlug: string | null;
  onSelectOffer: (slug: string | null) => void;
  onOpenTrial: () => void;
}

interface NavLinkItem {
  label: string;
  href?: string;
  slug?: string;
}

export function OfferNav({ currentOfferSlug, onSelectOffer, onOpenTrial }: OfferNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLinkItem[] = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (link: NavLinkItem) => {
    setMobileMenuOpen(false);
    if (link.slug) {
      onSelectOffer(link.slug);
      return;
    }
    if (link.href) {
      if (currentOfferSlug !== null) {
        onSelectOffer(null);
        setTimeout(() => {
          const id = link.href!.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b101b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectOffer(null)}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 font-display text-sm font-black text-slate-950 shadow-md group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </span>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-tight text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors leading-tight">
                Realtor Pipeline Recovery<span className="text-amber-400">™</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Pipeline Architecture
              </span>
            </div>
          </button>
        </div>

        {/* Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = link.slug ? currentOfferSlug === link.slug : false;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`transition-colors cursor-pointer py-1 ${
                  isActive
                    ? 'text-amber-400 font-bold border-b-2 border-amber-400'
                    : 'hover:text-amber-400 text-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA on the Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTrial}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-amber-400/25 shimmer-badge whitespace-nowrap cursor-pointer hover:shadow-amber-400/40"
          >
            <span className="relative z-10">Get My Free Pipeline Snapshot →</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0f172a] px-4 py-4 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1.5 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = link.slug ? currentOfferSlug === link.slug : false;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className={`text-left px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-400/30'
                      : 'hover:bg-slate-800/80 hover:text-amber-400 text-slate-300'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-950 bg-amber-400 rounded-xl cursor-pointer shadow-lg"
            >
              <span>Get My Free Pipeline Snapshot →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
