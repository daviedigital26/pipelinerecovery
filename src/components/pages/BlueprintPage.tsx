import { ArrowRight, CheckCircle2, ArrowLeft, Layers, ShieldCheck, FileText, Check } from 'lucide-react';

interface BlueprintPageProps {
  onOpenAudit: () => void;
  onBackHome?: () => void;
}

export function BlueprintPage({ onOpenAudit, onBackHome }: BlueprintPageProps) {
  const planItems = [
    'A review of the agreed CRM and follow-up scope',
    'A map of the five recovery stages for your database',
    'Lead groups with a clear, personal reason to reach out',
    'A follow-up plan for you and your team to approve',
    'Reply owners, CRM tasks, and workflow steps',
    'Baseline measures and a way to track change',
    'A roadmap for setup, testing, launch, and review',
    'A written report and findings walkthrough'
  ];

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
            $1,750 Working Price · Application Review
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>REVENUE ARCHITECTURE BLUEPRINT</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          A Clear Plan for the <br />
          <span className="text-[#4F5DFF]">Leads You Already Have.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We review how your leads move through the CRM, spot weak points, and show you what to fix first.
        </p>

        <div className="inline-flex flex-col items-center gap-1 p-4 bg-[#0c162c] border border-slate-800 rounded-2xl">
          <span className="text-4xl font-black text-[#4F5DFF] font-mono">$1,750</span>
          <span className="text-xs text-slate-400">One paid plan. Setup and launch work are priced separately.</span>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="px-8 py-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-base rounded-xl transition-all shadow-xl shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10">Apply for a Blueprint Review</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </button>
        </div>
      </section>

      {/* What Is in the Plan? */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
            Deliverables
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            What Is in the Plan?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Everything your team needs to understand where work stopped and how to systematically recover it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {planItems.map((item, idx) => (
            <div key={idx} className="bg-[#0c162c] p-4 sm:p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#4F5DFF]/15 text-[#4F5DFF] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get to Keep & What Comes After */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 space-y-4">
          <span className="text-xs font-bold text-[#2DD4BF] uppercase tracking-wider">
            Tangible Asset
          </span>
          <h3 className="text-2xl font-bold text-white">What You Get to Keep.</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your report shows the gaps we found, what supports each finding, and the work to do first. It gives your team a plan to review before more tools or campaigns are added.
          </p>
        </div>

        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 space-y-4">
          <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
            Next Phase
          </span>
          <h3 className="text-2xl font-bold text-white">What Comes After the Plan?</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We can quote the setup and launch work after the review. You decide whether to move ahead. This fee does not include CRM setup or live campaigns.
          </p>
        </div>

      </section>

      {/* Scope Comes First */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 space-y-4 text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#2DD4BF]/15 text-[#2DD4BF] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Scope Comes First.</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We agree on the records, tools, access, and review steps before work starts. Your agreement also sets the schedule, fee terms, and limits. We do not promise a set number of replies, meetings, or sales.
          </p>
        </div>
      </section>

      {/* Final Application Callout */}
      <section className="mx-auto max-w-4xl px-4 text-center space-y-4 pt-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          See If the Blueprint Fits.
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Tell us about your CRM and the gap you want to fix. This is an application, not a purchase.
        </p>
        <button
          onClick={onOpenAudit}
          className="px-8 py-3.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-sm rounded-xl transition-all shadow-lg cursor-pointer"
        >
          Apply for a Blueprint Review
        </button>
      </section>

    </div>
  );
}
