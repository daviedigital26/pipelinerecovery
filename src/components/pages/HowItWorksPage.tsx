import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HowItWorks } from '../HowItWorks';

interface HowItWorksPageProps {
  onOpenAudit: () => void;
  onBackHome?: () => void;
}

export function HowItWorksPage({ onOpenAudit, onBackHome }: HowItWorksPageProps) {
  return (
    <div className="space-y-12 pb-20">
      {/* Top Breadcrumb Banner */}
      <div className="bg-[#0c162c] border-b border-slate-800 py-3 px-4 text-center">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <button
            onClick={onBackHome}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white cursor-pointer font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Home</span>
          </button>
          <span className="text-[#4F5DFF] font-semibold">
            How Reale Revenue Systems Operates
          </span>
        </div>
      </div>

      <HowItWorks onOpenAudit={onOpenAudit} />
    </div>
  );
}
