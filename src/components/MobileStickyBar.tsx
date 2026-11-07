import { ArrowRight, ShieldCheck } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenTrial: () => void;
}

export function MobileStickyBar({ onOpenTrial }: MobileStickyBarProps) {
  return (
    <aside
      aria-label="Quick audit request bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f172a]/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl"
    >
      <div className="flex items-center gap-2 truncate">
        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
        <div className="text-xs text-slate-200 truncate">
          <span className="font-bold text-white">Free Pipeline Snapshot</span>
          <span className="text-slate-400 hidden xs:inline"> · 24-hr review</span>
        </div>
      </div>

      <button
        onClick={onOpenTrial}
        className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shrink-0 flex items-center gap-1 shadow-sm cursor-pointer whitespace-nowrap"
      >
        <span>Get Free Snapshot →</span>
      </button>
    </aside>
  );
}
