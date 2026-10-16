import { ArrowRight, CheckCircle2, ShieldCheck, ArrowLeft, Database, Layers, MessageSquare, Sparkles } from 'lucide-react';

interface PipelineRecoveryPageProps {
  onOpenAudit: () => void;
  onBackHome?: () => void;
  onSelectOffer?: (slug: string) => void;
}

export function PipelineRecoveryPage({ onOpenAudit, onBackHome, onSelectOffer }: PipelineRecoveryPageProps) {
  const steps = [
    {
      name: 'Audit',
      desc: 'Review lead sources, notes, and tasks. Find the gaps we can support with records.'
    },
    {
      name: 'Clean',
      desc: 'Fix or flag agreed record issues. Keep contact choices and past notes in view.'
    },
    {
      name: 'Segment',
      desc: 'Group leads by need, timing, and past interest.'
    },
    {
      name: 'Restart',
      desc: 'Write a useful reason to reach out. You approve the group and the message.'
    },
    {
      name: 'Route & Learn',
      desc: 'Give replies an owner and a next task. Track what happens and what needs to change.'
    }
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
          <span className="text-[#2DD4BF] font-semibold">
            Included: Free Entry Audit available for established teams
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>REALTOR PIPELINE RECOVERY™</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Your Next Good Conversation <br />
          <span className="text-[#4F5DFF]">Could Start With an Old Lead.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We help you find missed follow-up, reach out with a real reason, and give each useful reply a clear next step.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="px-8 py-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-base rounded-xl transition-all shadow-xl shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10">Get My Free Pipeline Audit</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </button>
        </div>

        <p className="text-xs text-slate-400">
          Keep your CRM. Build a better follow-up plan.
        </p>
      </section>

      {/* Where Did the Next Step Go? */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider block mb-2">
              The Problem We Solve
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Where Did the Next Step Go?
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              A buyer went quiet. A seller said &ldquo;later.&rdquo; A lead replied, but no one called back. We look at the records and the steps around them to see where work stopped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="bg-[#081020] p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-rose-400 font-bold text-xs uppercase block">01. Unworked Inquiries</span>
              <p className="text-xs text-slate-300">Portals and ads generated contacts that were only contacted once or twice.</p>
            </div>
            <div className="bg-[#081020] p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-rose-400 font-bold text-xs uppercase block">02. Forgotten Tasks</span>
              <p className="text-xs text-slate-300">Overdue reminders accumulated into hundreds of unmanaged CRM notifications.</p>
            </div>
            <div className="bg-[#081020] p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-rose-400 font-bold text-xs uppercase block">03. Unowned Replies</span>
              <p className="text-xs text-slate-300">Prospects responded, but without clear routing, no single agent owned the conversation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Clear Five-Step System */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
            Framework
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            A Clear Five-Step System.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            We follow this structured approach to ensure no contacts are spammed and every reply has an owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((st, i) => (
            <div
              key={st.name}
              className="bg-[#0c162c] rounded-2xl border border-slate-800 p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#4F5DFF]">STAGE 0{i + 1}</span>
                <h3 className="text-lg font-bold text-white">{st.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-[#2DD4BF] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Stage Ready
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Paid Setup May Include */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider block mb-2">
              Implementation Details
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Paid Setup May Include.
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Your quote lists the work, tools, and limits. We do not send a campaign to your whole list by default.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            {[
              'A plan for one agreed lead group',
              'Record cleanup within the agreed scope',
              'Follow-up messages for you to approve',
              'CRM tasks and reply owners',
              'Team guidance and workflow tests',
              'A report on replies and next actions',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 bg-[#081020] rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit & Blueprint Two-Tier Comparison */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Box 1: Free Audit */}
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#2DD4BF] uppercase tracking-wider">
              Starting Point · Free
            </span>
            <h3 className="text-2xl font-bold text-white">
              Start With the Free Pipeline Recovery Audit.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We review your answers and talk through one follow-up gap. You get up to three issues to check, a lead group worth a closer look, and a next step.
            </p>
            <p className="text-xs text-slate-400 italic">
              This free review does not include a full CRM review, cleanup, or campaign setup.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors border border-slate-700 cursor-pointer"
          >
            Get My Free Pipeline Audit
          </button>
        </div>

        {/* Box 2: Blueprint */}
        <div className="bg-gradient-to-b from-[#0e1a38] to-[#081020] rounded-3xl border-2 border-[#4F5DFF] p-8 space-y-5 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
              Full Written Plan · $1,750
            </span>
            <h3 className="text-2xl font-bold text-white">
              Need a Full Plan First?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Revenue Architecture Blueprint is $1,750. It includes a deeper review, lead groups, a follow-up plan, action steps, and a walkthrough.
            </p>
            <p className="text-xs text-slate-400">
              Setup and launch are priced separately. You can decide on that work after the plan.
            </p>
          </div>

          <button
            onClick={() => onSelectOffer?.('revenue-architecture-blueprint')}
            className="w-full py-3.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
          >
            See What&apos;s in the Blueprint
          </button>
        </div>

      </section>

      {/* Final Callout */}
      <section className="mx-auto max-w-4xl px-4 text-center space-y-4 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to Find Where Follow-Up Stalls?
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          No account or payment details needed. Tell us where work gets stuck and we will help you map the fix.
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
