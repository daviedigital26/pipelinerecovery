import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Check, BookOpen, AlertTriangle } from 'lucide-react';

interface ResourcesPageProps {
  onOpenAudit: (type?: 'pipeline' | 'listing') => void;
  onBackHome?: () => void;
}

export function ResourcesPage({ onOpenAudit, onBackHome }: ResourcesPageProps) {
  const [activeGuide, setActiveGuide] = useState<'checklist' | 'price-mistakes'>('checklist');

  const mistakes = [
    {
      num: 1,
      title: 'Skipping the feedback.',
      desc: 'Read the showing notes and buyer questions before you change the message.'
    },
    {
      num: 2,
      title: 'Leaving old details in place.',
      desc: 'Check price, photos, links, and listing facts in each approved asset.'
    },
    {
      num: 3,
      title: 'Posting once and waiting.',
      desc: 'Choose the channels and follow-up tasks that fit this listing.'
    },
    {
      num: 4,
      title: 'Sending the same note to everyone.',
      desc: 'Reach people whose past interest fits the home. Check contact choices first.'
    },
    {
      num: 5,
      title: 'Forgetting the next step.',
      desc: 'Make it clear how someone can ask a question or book a showing.'
    },
    {
      num: 6,
      title: 'Leaving replies without an owner.',
      desc: 'Name the person who handles new questions and follow-up.'
    },
    {
      num: 7,
      title: 'Treating views as sales.',
      desc: 'Track useful replies and next actions. Views alone do not show buyer intent.'
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
            Free Realtor Resources &amp; Execution Guides
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>EDUCATIONAL GUIDES</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Simple Guides for <br />
          <span className="text-[#4F5DFF]">Better Follow-Up.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Start with a small group, a useful reason to reach out, and a clear next step.
        </p>

        {/* Tab Switcher */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveGuide('checklist')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeGuide === 'checklist'
                ? 'bg-[#4F5DFF] text-white shadow-md'
                : 'bg-[#0c162c] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Pipeline Recovery Checklist
          </button>
          <button
            onClick={() => setActiveGuide('price-mistakes')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeGuide === 'price-mistakes'
                ? 'bg-[#4F5DFF] text-white shadow-md'
                : 'bg-[#0c162c] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            7 Price Reduction Mistakes
          </button>
        </div>
      </section>

      {/* Guide Content Display */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {activeGuide === 'checklist' ? (
          <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-200">
            <div className="space-y-2 border-b border-slate-800 pb-5">
              <span className="text-xs font-bold text-[#2DD4BF] uppercase tracking-wider">
                Action Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Pipeline Recovery Checklist
              </h2>
              <p className="text-sm text-slate-300">
                Use this checklist on one small lead group first. Check contact choices before any outreach.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Audit',
                  question: 'Can you see the source, last note, and next task?',
                  tip: 'Review lead records in your CRM to verify where work stopped.'
                },
                {
                  step: 'Clean',
                  question: 'Are duplicate or incomplete records flagged?',
                  tip: 'Check that past notes and contact preferences are visible.'
                },
                {
                  step: 'Segment',
                  question: 'Do these people share a real need or timing?',
                  tip: 'Group by neighborhood, price range, or timeline before sending anything.'
                },
                {
                  step: 'Restart',
                  question: 'Is there a useful reason to reach out now?',
                  tip: 'Write a short question that invites an honest reply, not a generic pitch.'
                },
                {
                  step: 'Route & Learn',
                  question: 'Who handles each reply, and what happens next?',
                  tip: 'Assign a single owner with an SLA and next task in your CRM.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#081020] p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#4F5DFF]">
                      STEP 0{idx + 1} &bull; {item.step}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  </div>
                  <h4 className="text-base font-bold text-white">{item.question}</h4>
                  <p className="text-xs text-slate-400">{item.tip}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#081020] rounded-xl border border-slate-800 text-xs text-slate-400 italic">
              A blank field is a gap to check. It is not proof of a lost sale.
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => onOpenAudit('pipeline')}
                className="px-7 py-3.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
              >
                Get My Free Pipeline Audit
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-200">
            <div className="space-y-2 border-b border-slate-800 pb-5">
              <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
                Price Drop Pro™ Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                7 Mistakes Realtors Make After a Price Reduction
              </h2>
              <p className="text-sm text-slate-300">
                A price change can start a new plan. Here are seven things to check before you treat a new price as the whole plan:
              </p>
            </div>

            <div className="space-y-3.5">
              {mistakes.map((m) => (
                <div key={m.num} className="bg-[#081020] p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {m.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{m.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#081020] rounded-xl border border-slate-800 text-xs text-slate-400 italic">
              Your agent controls price and MLS facts. This guide does not give a home value opinion.
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => onOpenAudit('listing')}
                className="px-7 py-3.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
              >
                Get My Free Listing Relaunch Review
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Want Help Callout */}
      <section className="mx-auto max-w-4xl px-4 text-center space-y-4 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Want Help With Your Own Pipeline?
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          A guide can help you spot a gap. The free audit helps you choose what to review in your own process.
        </p>
        <button
          onClick={() => onOpenAudit('pipeline')}
          className="px-8 py-3.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-sm rounded-xl transition-all shadow-lg cursor-pointer"
        >
          Get My Free Pipeline Audit
        </button>
      </section>

    </div>
  );
}
