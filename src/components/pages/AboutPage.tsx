import { ArrowLeft, ArrowRight, CheckCircle2, User, Shield, Target } from 'lucide-react';

interface AboutPageProps {
  onOpenAudit: () => void;
  onBackHome?: () => void;
}

export function AboutPage({ onOpenAudit, onBackHome }: AboutPageProps) {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
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
            About Reale Revenue Systems
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <User className="w-3.5 h-3.5" />
          <span>FOUNDER &amp; APPROACH</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Built Around Real Work.
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          I&apos;m David Reale, founder of Reale Revenue Systems. I spent three years managing Elite Advertising Solutions. I also help local businesses with SEO and web design.
        </p>
      </section>

      {/* Why Follow-Up? */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
              Core Conviction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Follow-Up?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A useful tool still needs a clear next step. A lead needs a reply. A reply needs an owner. A task needs a date. We focus on those steps and build a plan your team can use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
            <div className="bg-[#081020] p-4 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-white block text-sm">Services First</strong>
              <p>Real consulting and human diagnostics before buying more software.</p>
            </div>
            <div className="bg-[#081020] p-4 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-white block text-sm">Systems Always</strong>
              <p>Predictable CRM routing and message standards that last past one launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
            Operating Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What We Believe.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Start with the tools you already have.',
            'Check the records before making claims.',
            'Give each reply a person and a next step.',
            'Test a small scope before you expand.',
          ].map((belief, idx) => (
            <div key={idx} className="bg-[#0c162c] p-5 rounded-2xl border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] shrink-0" />
              <span className="text-sm font-semibold text-slate-200">{belief}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Start With Your Actual Gap */}
      <section className="mx-auto max-w-3xl px-4 text-center space-y-4 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Start With Your Actual Gap.
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Tell us where leads or listings have gone quiet. We will help you choose what to review first.
        </p>
        <button
          onClick={onOpenAudit}
          className="px-8 py-3.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-sm rounded-xl transition-all shadow-lg cursor-pointer"
        >
          Get My Free Pipeline Audit
        </button>
      </section>

    </div>
  );
}
