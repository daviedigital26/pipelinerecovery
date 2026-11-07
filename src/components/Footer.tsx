import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
}

export function Footer({ onOpenTrial }: FooterProps) {
  return (
    <footer className="bg-[#080d16] text-slate-400 py-12 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 font-display text-sm font-black text-slate-950">
                <ShieldCheck className="w-4 h-4 text-slate-950" />
              </span>
              <span className="font-display font-extrabold text-lg text-white">
                Realtor Pipeline Recovery<span className="text-amber-400">™</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-md leading-relaxed">
              Before you buy more leads, follow up with the ones you have. Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-semibold text-slate-300">
            <span className="text-amber-400">Frameworks:</span>
            <span>Realtor Pipeline Recovery™</span>
            <span className="text-slate-600">·</span>
            <span>Done-For-You Implementation</span>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenTrial}
              className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
            >
              Get Free Pipeline Snapshot
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Realtor Pipeline Recovery™. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>Free Pipeline Snapshot</span>
            <span>·</span>
            <span>$1,750 Recovery Blueprint</span>
            <span>·</span>
            <span>Pipeline Recovery Implementation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
