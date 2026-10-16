import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenAudit: () => void;
}

export function FinalCta({ onOpenAudit }: FinalCtaProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#081020] border-b border-slate-800/80 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4F5DFF]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Small · Fix The Next Step</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let&apos;s Find the First Gap.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
          Tell us about your CRM and where follow-up gets stuck. We review your answers and build a clear plan to reach back out.
        </p>

        <div className="pt-2 space-y-3">
          <div>
            <button
              onClick={onOpenAudit}
              className="px-9 py-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-base rounded-xl transition-all shadow-xl shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge inline-flex items-center gap-2.5 cursor-pointer active:scale-[0.98] hover:scale-[1.02]"
            >
              <span className="relative z-10">Get My Free Pipeline Audit</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </button>
          </div>

          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>No account. No payment details. No need to upload your contact list.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
