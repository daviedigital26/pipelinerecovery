import { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
}

export function Navbar({ onOpenTrial }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'What You Get', href: '#what-you-get' },
    { label: 'Try With Your Name', href: '#try-your-name' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b101b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element Brand Zone */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 font-display text-base font-black text-slate-950 shadow-sm">
            R
          </span>
          <span className="font-display tracking-tight text-xl">Reale</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href="#try-your-name"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 px-3 py-2 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Live Preview
          </a>

          <button
            onClick={onOpenTrial}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg transition-all duration-150 shadow-sm shadow-amber-400/20 whitespace-nowrap cursor-pointer"
          >
            <span>Start Free Trial</span>
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
        <div className="lg:hidden border-b border-slate-800 bg-[#0f172a] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-950 bg-amber-400 rounded-lg"
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
