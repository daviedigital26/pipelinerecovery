import { useState } from 'react';
import { offersList } from '../../data/offers';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ClipboardCheck,
  AlertCircle,
  HelpCircle,
  Zap,
  Phone,
  FileText
} from 'lucide-react';

interface HandoffAuditPageProps {
  onOpenTrial: () => void;
  showToast: (msg: string) => void;
}

export function HandoffAuditPage({ onOpenTrial, showToast }: HandoffAuditPageProps) {
  const offer = offersList.find((o) => o.slug === 'handoff-audit')!;

  // 5 Diagnostic Questions State
  const [answers, setAnswers] = useState({
    speedToLead: '15-60min', // '<5min' | '15-60min' | 'next-day'
    attempts: '1-2', // '1-2' | '3-5' | '6+'
    hasLeadMagnet: 'no', // 'yes' | 'no'
    weeklyNurture: 'sometimes', // 'yes' | 'sometimes' | 'never'
    crmOrganized: 'messy', // 'clean' | 'messy' | 'none'
  });

  // Calculate score
  let score = 30;
  if (answers.speedToLead === '<5min') score += 20;
  else if (answers.speedToLead === '15-60min') score += 10;

  if (answers.attempts === '6+') score += 20;
  else if (answers.attempts === '3-5') score += 12;

  if (answers.hasLeadMagnet === 'yes') score += 20;

  if (answers.weeklyNurture === 'yes') score += 15;
  else if (answers.weeklyNurture === 'sometimes') score += 8;

  if (answers.crmOrganized === 'clean') score += 15;
  else if (answers.crmOrganized === 'messy') score += 5;

  const getLeakMessage = (s: number) => {
    if (s >= 85) return { grade: 'Grade A: Tight Pipeline', lost: 1, text: 'Your pipeline is strong! You only have minor polish needed on your first-call handoff.' };
    if (s >= 60) return { grade: 'Grade B: Moderate Leaks', lost: 3, text: 'You are losing about 3 closings every year ($27,000+) because leads drop off after your first 2 touches.' };
    return { grade: 'Grade C: Severe Leaks', lost: 5, text: 'Major lead leakage detected. 70%+ of your inquiries never get the right handoff materials to book a meeting.' };
  };

  const auditResult = getLeakMessage(score);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 border-b border-slate-800/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reale Offer 02 · Lead Diagnostic &amp; Conversion Blueprint</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Find the Holes Where <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  You Are Losing Deals.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                {offer.plainSummary}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#audit-tool"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer"
                >
                  <span>Take 60-Second Audit Below ↓</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenTrial}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-all cursor-pointer"
                >
                  <span>Download Full Audit PDF</span>
                </button>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pinpoints the exact 3 gaps costing realtors $30,000+ every year</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-sm">
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={offer.heroImage}
                    alt="Executive marketing audit report on clean wood desk"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>Audit Scorecard Included</span>
                  <span className="text-amber-400 font-semibold">100% Free Diagnostic</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE INTERACTIVE 60-SECOND AUDIT TOOL */}
      <section id="audit-tool" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Grade Your Follow-Up in 60 Seconds
          </h2>
          <p className="text-base text-slate-300">
            Answer the 5 questions below honestly to discover your conversion score and where money is leaking.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Questions Side */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Q1 */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  1. How fast do you usually reply to a new lead?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '<5min', label: 'Under 5 min (Fast)' },
                    { id: '15-60min', label: '15 - 60 min' },
                    { id: 'next-day', label: 'Hours / Next day' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers({ ...answers, speedToLead: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        answers.speedToLead === opt.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2 */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  2. How many times do you reach out before stopping?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1-2', label: '1 to 2 times' },
                    { id: '3-5', label: '3 to 5 times' },
                    { id: '6+', label: '6+ touches' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers({ ...answers, attempts: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        answers.attempts === opt.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  3. Do you give new leads a printed or digital guide book?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'yes', label: 'Yes, customized guide' },
                    { id: 'no', label: 'No, just generic chats' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers({ ...answers, hasLeadMagnet: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        answers.hasLeadMagnet === opt.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q4 */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  4. Do you send a weekly email newsletter to your database?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'yes', label: 'Every week' },
                    { id: 'sometimes', label: 'Once a month' },
                    { id: 'never', label: 'Never / Rarely' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers({ ...answers, weeklyNurture: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        answers.weeklyNurture === opt.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q5 */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  5. How organized is your contact list / CRM?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'clean', label: 'Clean & tagged' },
                    { id: 'messy', label: 'Messy / Scattered' },
                    { id: 'none', label: 'Just in my phone' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers({ ...answers, crmOrganized: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        answers.crmOrganized === opt.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Scorecard Side */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 sticky top-24">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Your Pipeline Health Score
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className={`text-5xl font-black font-mono ${
                    score >= 80 ? 'text-emerald-400' : score >= 60 ? 'text-amber-400' : 'text-rose-400'
                  }`}>
                    {score}/100
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    {auditResult.grade}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Estimated Annual Leak:</span>
                </div>
                <div className="text-2xl font-black text-rose-400 font-mono">
                  -{auditResult.lost} Closings / ~${(auditResult.lost * 9000).toLocaleString()}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {auditResult.text}
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                  How Reale Plugs These Leaks:
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Instant auto-texts so speed-to-lead is under 60 seconds</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>12-page seller guide delivered automatically on signup</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>7-touch recovery cadence so you never give up too early</span>
                </div>
              </div>

              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Fix My Pipeline with Reale Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 4 CRITICAL HANDOFF TOUCHPOINTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Where Deals Are Won or Lost
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            The 4 Critical Handoff Touchpoints
          </h2>
          <p className="text-sm text-slate-300">
            Fixing these 4 moments in your business is the difference between working 60 hours a week and having a calm, predictable income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-white">Handoff 1: The First 5 Minutes</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When a buyer requests info on Zillow or Facebook, their attention is fleeting. If you wait an hour, they have already messaged 3 other agents. Our fast reply template starts a natural dialogue instantly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-white">Handoff 2: The Proof Deliverable</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Don&apos;t just ask &ldquo;When are you free to meet?&rdquo; Give them something valuable first! Handing them our 12-page Home Seller Playbook builds instant trust and separates you from amateur agents.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-white">Handoff 3: The Text-to-Call Bridge</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Transitioning from casual text messaging to a serious phone call or in-person coffee is where most realtors choke. Our 1-line bridge script makes clients say &ldquo;Yes, call me at 4 PM.&rdquo;
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-white">Handoff 4: The 7-Day Consistency Cadence</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              80% of sales happen on the 5th to 12th contact attempt. Our automated follow-up reminders ensure no lead ever falls through the cracks again.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded">
            Case Study · {offer.caseStudy.result}
          </div>
          <h3 className="text-xl font-bold text-white">
            &ldquo;{offer.caseStudy.story}&rdquo;
          </h3>
          <div className="text-xs text-slate-400">
            — <strong className="text-white">{offer.caseStudy.agent}</strong>, {offer.caseStudy.brokerage} ({offer.caseStudy.city})
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-slate-900 to-[#121c35] border-2 border-amber-400 rounded-3xl p-8 sm:p-12 space-y-5 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white">
            Plug Your Lead Leaks Today
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Get the full Handoff Audit Checklist, fast-reply swipe files, and pre-built CRM pipeline tags free with your 14-day trial.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Activate 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
