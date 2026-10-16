import { CheckCircle2, Workflow, ArrowRight, ShieldCheck } from 'lucide-react';

interface TestimonialsProps {
  onOpenAudit: () => void;
}

export function Testimonials({ onOpenAudit }: TestimonialsProps) {
  const workflows = [
    {
      title: 'The Quiet Buyer Revival',
      category: 'Realtor Pipeline Recovery™',
      badge: 'Illustrative example',
      problem: '120 buyer leads from 8 months ago sitting inactive in CRM with no scheduled tasks.',
      solution: 'Cleaned duplicates, grouped by original neighborhood interest, and deployed a 1-sentence price adjustment check-in approved by the agent.',
      outcome: 'Re-engaged quiet buyers whose timing had shifted, opening 4 active showing conversations.',
    },
    {
      title: 'The Unassigned Inbound Reply',
      category: 'Team Lead Workflow',
      badge: 'Illustrative example',
      problem: 'Leads replying to automated drip campaigns got buried in a shared team inbox with no clear owner.',
      solution: 'Configured round-robin routing rules in Follow Up Boss with instant mobile notifications and 2-hour task reminders.',
      outcome: 'Every new reply given a named agent and immediate next action date; zero leads forgotten.',
    },
    {
      title: 'The Stale Listing Relaunch',
      category: 'Price Drop Pro™',
      badge: 'Illustrative example',
      problem: 'Suburban home on market 40 days; price adjusted by $20,000 on MLS with no dedicated buyer outreach.',
      solution: 'Audited showing feedback, refreshed listing message, and sent personal walkthrough invites to past interested buyers and showing agents.',
      outcome: 'Secured 3 private showings within 48 hours of price adjustment from buyers who previously passed.',
    },
  ];

  return (
    <section id="workflows" className="py-16 lg:py-24 bg-[#0a1428] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Practical Deliverables in Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Pipeline Recovery Looks Like
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real systems solve real follow-up bottlenecks. Here is how our 5-step framework applies to common real estate team scenarios:
          </p>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflows.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#081020] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-[#4F5DFF]/50 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#4F5DFF] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-rose-400 font-semibold block mb-0.5">The Bottleneck:</span>
                    <span className="text-slate-300">{item.problem}</span>
                  </div>

                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-[#4F5DFF] font-semibold block mb-0.5">The Solution:</span>
                    <span className="text-slate-300">{item.solution}</span>
                  </div>

                  <div className="bg-[#0c162c] p-3 rounded-xl border border-[#2DD4BF]/20">
                    <span className="text-[#2DD4BF] font-semibold flex items-center gap-1.5 mb-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      The Deliverable Outcome:
                    </span>
                    <span className="text-slate-200">{item.outcome}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>Integrated in your CRM</span>
                <span className="text-[#2DD4BF] font-semibold">Zero Spam</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#081020] border border-slate-800 rounded-2xl p-6 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              <span>Want to review where follow-up gets stuck in your database?</span>
            </h4>
            <p className="text-xs text-slate-300 mt-1">Start with a brief, honest human review of your pipeline.</p>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-6 py-3 bg-[#4F5DFF] hover:bg-[#4350e6] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Get My Free Pipeline Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
