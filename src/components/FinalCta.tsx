import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenTrial: () => void;
}

export function FinalCta({ onOpenTrial }: FinalCtaProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#0b101b] border-b border-slate-800/80 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Confidential Diagnostic · Zero Risk</span>
        </div>

        {/* Verbatim main headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Before You Buy More Leads, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
            Follow Up With the Ones
          </span> You Have.
        </h2>

        {/* Verbatim supporting copy */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.
        </p>

        <div className="pt-2 space-y-3">
          <div>
            <button
              onClick={onOpenTrial}
              className="px-9 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base rounded-xl transition-all shadow-xl shadow-amber-500/25 animate-cta-glow shimmer-badge inline-flex items-center gap-2.5 cursor-pointer active:scale-[0.98] hover:scale-[1.02]"
            >
              <span className="relative z-10">Get My Free Pipeline Snapshot →</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Confidential 24-hour review · No credit card · Direct pipeline fix roadmap</span>
          </p>
        </div>
      </div>
    </section>
  );
}
