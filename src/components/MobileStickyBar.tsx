import { ArrowRight, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenAudit: () => void;
}

export function MobileStickyBar({ onOpenAudit }: MobileStickyBarProps) {
  return (
    <aside
      aria-label="Quick action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#081020]/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl"
    >
      <div className="flex items-center gap-2 truncate">
        <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
        <div className="text-xs text-slate-200 truncate">
          <span className="font-bold text-white">Free Pipeline Audit</span>
          <span className="text-slate-400 hidden xs:inline"> &bull; Use your CRM</span>
        </div>
      </div>

      <button
        onClick={onOpenAudit}
        className="px-3.5 py-1.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-xs rounded-lg shrink-0 flex items-center gap-1 shadow-sm cursor-pointer whitespace-nowrap"
      >
        <span>Get Free Audit</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </aside>
  );
}
