interface FooterProps {
  onOpenTrial: () => void;
}

export function Footer({ onOpenTrial }: FooterProps) {
  return (
    <footer className="bg-[#080d16] text-slate-400 py-12 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 font-display text-sm font-black text-slate-950">
                R
              </span>
              <span className="font-display font-extrabold text-xl text-white">Reale</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              The simple marketing studio for real estate agents. Ready-to-use social posts, client guides, email newsletters, and scripts.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase text-amber-400 tracking-wider">
              Specialized Landing Pages:
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <a href="#pipeline-recovery" className="hover:text-amber-400 transition-colors">Pipeline Recovery</a>
              <a href="#handoff-audit" className="hover:text-amber-400 transition-colors">The Handoff Audit</a>
              <a href="#listing-launchpad" className="hover:text-amber-400 transition-colors">Listing Launchpad</a>
              <a href="#sphere-nurture" className="hover:text-amber-400 transition-colors">Sphere &amp; Referrals</a>
              <a href="#script-vault" className="hover:text-amber-400 transition-colors">Script Vault</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Reale Content Studio. Built for real estate professionals.</p>
          <div className="flex items-center gap-4">
            <span>Cancel anytime in 1 click</span>
            <span>·</span>
            <span>No contracts</span>
            <span>·</span>
            <button
              onClick={onOpenTrial}
              className="text-amber-400 hover:text-amber-300 font-bold cursor-pointer"
            >
              Start 14-Day Free Trial
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
