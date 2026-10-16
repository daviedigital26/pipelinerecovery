import { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Database, MessageSquare, UserCheck, Layers } from 'lucide-react';

interface PersonalizerProps {
  onOpenAudit: () => void;
  showToast: (msg: string) => void;
}

export function Personalizer({ onOpenAudit, showToast }: PersonalizerProps) {
  const [crm, setCrm] = useState('Follow Up Boss');
  const [leadCount, setLeadCount] = useState(650);
  const [stalledScenario, setStalledScenario] = useState<'quiet-buyers' | 'open-house' | 'unassigned' | 'price-drop'>('quiet-buyers');
  const [activeTab, setActiveTab] = useState<'gaps' | 'message' | 'routing' | 'deliverable'>('gaps');
  const [copied, setCopied] = useState(false);

  // Scenario Content
  const scenarioDetails = {
    'quiet-buyers': {
      title: 'Old Buyer Leads (6–12 Mos Quiet)',
      gapCount: 3,
      gaps: [
        'No contact attempted since initial inquiry 8+ months ago',
        'Search criteria out of date; no price adjustment alerts sent',
        'Record unsegmented with no next task or assigned owner'
      ],
      sampleMessage: 'Hi [First Name], saw a quiet price adjustment on an Oak Creek home this morning. Are you still keeping an eye on homes in this area, or did your timing shift?',
      routing: 'Lead replies → Routed directly to Assigned Agent → Automated 24h task created in ' + crm + ' → Team lead notified if reply not addressed in 2 hours.',
      scopeDeliverable: 'One agreed segment identified, record issues cleaned, personalized 1-to-1 restart copy approved, routing rules tested in ' + crm + '.'
    },
    'open-house': {
      title: 'Open House Attendees Who Went Quiet',
      gapCount: 3,
      gaps: [
        'Phone numbers collected on sign-in sheet but never followed up with a real question',
        'Generic "thank you for coming" email sent with no call to action',
        'Zero tracking of who actually owned a pre-approval or another home to sell'
      ],
      sampleMessage: 'Hi [First Name], thank you for stopping by the open house on Elmwood. Did that floor plan feel like the right layout for your family, or are you looking for something with a bigger yard?',
      routing: 'Attendee replies → Routed to Open House Host → Specific property feedback note logged in ' + crm + ' → Showing schedule task assigned.',
      scopeDeliverable: 'Open house attendee grouping, past sign-in review, non-salesy conversational prompts approved by you, workflow tested.'
    },
    'unassigned': {
      title: 'Incoming Replies With No Clear Owner',
      gapCount: 3,
      gaps: [
        'Lead replied to a drip campaign but message remained unread in inbox',
        'Multiple team agents assumed someone else was handling the conversation',
        'No CRM task scheduled for day 2 or day 7 follow-up'
      ],
      sampleMessage: 'Hi [First Name], following up on your note about 1420 Ridgecrest. I want to make sure you got the HOA rules and inspection report. Would you like me to text over the PDF link?',
      routing: 'Inbound message → Single accountable agent assigned via round-robin or geography → Instant SMS alert to agent → Escalation task if no action in 3 hours.',
      scopeDeliverable: 'Clear response SLAs, round-robin or territory assignment mapped, notifications tested in ' + crm + '.'
    },
    'price-drop': {
      title: 'Stale Listing Needing a Price Relaunch',
      gapCount: 3,
      gaps: [
        'Price reduced on MLS but past interested buyers were never notified individually',
        'Showing feedback cited price/updates, but the listing message remained unchanged',
        'No dedicated outreach to agents who showed the home in the past 60 days'
      ],
      sampleMessage: 'Hi [Agent/Buyer], the sellers at 804 Highland just adjusted the offering to $649,000 to meet the market. Would your buyers like a private walk-through before the open house this weekend?',
      routing: 'Inquiry received → Listing Agent gets instant text → Private tour booked → Seller showing report updated.',
      scopeDeliverable: 'Price Drop Pro™ listing relaunch review, refreshed message, approved assets, targeted buyer/agent outreach plan.'
    }
  };

  const current = scenarioDetails[stalledScenario];

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(current.sampleMessage);
    setCopied(true);
    showToast('Example restart message copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="pipeline-diagnostic" className="py-16 lg:py-24 bg-[#0a1428] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Follow-Up Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See Where Your Follow-Up Gets Stuck in 5 Seconds.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Select your CRM and database details below. See an illustrative preview of the gaps we look for and how we build a clear recovery plan.
          </p>
        </div>

        {/* 2-Column Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form Controls */}
          <div className="lg:col-span-4 bg-[#081020] rounded-2xl border border-slate-800 p-6 space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-[#4F5DFF]" />
                <span>1. Your Database Setup</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">Tell us where your leads currently live</p>
            </div>

            {/* Field: CRM Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Current CRM or Tool
              </label>
              <select
                value={crm}
                onChange={(e) => setCrm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#4F5DFF]"
              >
                <option value="Follow Up Boss">Follow Up Boss</option>
                <option value="kvCORE">kvCORE</option>
                <option value="Lofty / Chime">Lofty / Chime</option>
                <option value="BoomTown">BoomTown</option>
                <option value="Sierra Interactive">Sierra Interactive</option>
                <option value="HubSpot">HubSpot</option>
                <option value="Custom CRM / Spreadsheets">Custom CRM / Spreadsheets</option>
              </select>
            </div>

            {/* Field: Lead Count Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-300 uppercase tracking-wider">
                  Quiet Leads in CRM
                </label>
                <span className="font-mono font-extrabold text-[#4F5DFF] text-sm">
                  ~{leadCount.toLocaleString()} leads
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="3500"
                step="50"
                value={leadCount}
                onChange={(e) => setLeadCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-[#4F5DFF]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>100</span>
                <span>1,500</span>
                <span>3,500+</span>
              </div>
            </div>

            {/* Field: Stalled Area */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Where Does Work Stall Most?
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'quiet-buyers', label: 'Old leads who went quiet 6–12 mos ago' },
                  { id: 'open-house', label: 'Open house visitors who never booked' },
                  { id: 'unassigned', label: 'Replies with no clear owner or next step' },
                  { id: 'price-drop', label: 'Price change on listing that lost attention' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStalledScenario(s.id as any)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                      stalledScenario === s.id
                        ? 'bg-[#4F5DFF]/15 border-[#4F5DFF] text-white shadow-sm'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mini Action */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <button
                onClick={onOpenAudit}
                className="w-full py-3 px-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-[#4F5DFF]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get My Free Pipeline Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Brief human review &bull; 3 gaps &bull; 1 lead group
              </p>
            </div>
          </div>

          {/* Right: Live Interactive Output Card */}
          <div className="lg:col-span-8 bg-[#081020] rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
            
            {/* Tab Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
                  <span>2. Illustrative Recovery Plan</span>
                </h3>
                <p className="text-xs text-slate-400">Click any tab to see how we structure the fix in {crm}</p>
              </div>

              <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                <button
                  onClick={() => setActiveTab('gaps')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab === 'gaps' ? 'bg-[#4F5DFF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gaps Checked
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab === 'message' ? 'bg-[#4F5DFF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Restart Message
                </button>
                <button
                  onClick={() => setActiveTab('routing')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab === 'routing' ? 'bg-[#4F5DFF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CRM Routing
                </button>
                <button
                  onClick={() => setActiveTab('deliverable')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab === 'deliverable' ? 'bg-[#4F5DFF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Blueprint Scope
                </button>
              </div>
            </div>

            {/* Tab 1: Gaps Checked */}
            {activeTab === 'gaps' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Diagnostic for ~{leadCount.toLocaleString()} {current.title}
                  </span>
                  <span className="text-[11px] font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded">
                    3 Gaps Detected
                  </span>
                </div>

                <div className="space-y-3">
                  {current.gaps.map((gap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-slate-900/90 border border-slate-800 rounded-xl p-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                        0{idx + 1}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-white">{gap}</div>
                        <div className="text-xs text-slate-400">
                          Identified through lead record audit in {crm}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 rounded-xl p-4 text-xs text-slate-300 flex items-center justify-between">
                  <div>
                    <strong className="text-white block font-semibold">The Free Audit Scope:</strong>
                    <span>We review up to 3 gaps like these with you for 1 agreed lead group.</span>
                  </div>
                  <span className="text-[#2DD4BF] font-mono font-bold">$0 Free Review</span>
                </div>
              </div>
            )}

            {/* Tab 2: Restart Message */}
            {activeTab === 'message' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Stage 4: Approved Outreach Copy
                  </span>
                  <span className="text-[11px] font-semibold text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 px-2.5 py-0.5 rounded">
                    6th-Grade Reading Level
                  </span>
                </div>

                <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <MessageSquare className="w-3.5 h-3.5 text-[#4F5DFF]" />
                      SMS or Direct Message Preview
                    </span>
                    <button
                      onClick={handleCopyMessage}
                      className="text-[#4F5DFF] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#2DD4BF]" /> : null}
                      <span>{copied ? 'Copied' : 'Copy Sample'}</span>
                    </button>
                  </div>
                  <div className="text-sm text-slate-100 font-normal leading-relaxed italic bg-[#081020] p-4 rounded-lg border border-slate-800/80">
                    &ldquo;{current.sampleMessage}&rdquo;
                  </div>
                  <p className="text-xs text-slate-400">
                    *Friendly, question-based restart. Never generic marketing spam. You approve every message before it goes out.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: CRM Routing */}
            {activeTab === 'routing' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Stage 5: Reply Accountability
                  </span>
                  <span className="text-[11px] font-semibold text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 px-2.5 py-0.5 rounded">
                    Every Reply Has an Owner
                  </span>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <UserCheck className="w-4 h-4 text-[#4F5DFF]" />
                    <span>Configured Workflow for {crm}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.routing}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
                    <div className="bg-[#081020] p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Assigned Owner:</span>
                      <strong className="text-white">Active Team Agent</strong>
                    </div>
                    <div className="bg-[#081020] p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Task Reminder:</span>
                      <strong className="text-[#2DD4BF]">Under 2 Hours</strong>
                    </div>
                    <div className="bg-[#081020] p-3 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Escalation Rule:</span>
                      <strong className="text-white">Team Lead Alert</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Blueprint Scope */}
            {activeTab === 'deliverable' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Revenue Architecture Blueprint Scope
                  </span>
                  <span className="text-[11px] font-semibold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-2.5 py-0.5 rounded">
                    $1,750 Written Plan
                  </span>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3 text-xs text-slate-300">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#4F5DFF]" />
                    <span>What You Get to Keep in the Blueprint</span>
                  </div>
                  <p className="leading-relaxed">
                    {current.scopeDeliverable}
                  </p>
                  <ul className="space-y-2 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                      <span>Full 5-stage recovery map for your database</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                      <span>Agreed lead groups with distinct reasons to reach out</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                      <span>Written findings report and personalized team walkthrough</span>
                    </li>
                  </ul>
                  <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                    *Setup and live launch work are priced separately under a custom quote.
                  </div>
                </div>
              </div>
            )}

            {/* Illustrative Footer Label */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="italic">
                Illustrative example workflow based on real CRM consulting frameworks.
              </span>
              <button
                onClick={onOpenAudit}
                className="text-[#4F5DFF] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Request Your Free Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* End of section primary CTA */}
        <div className="mt-12 text-center space-y-2">
          <button
            onClick={onOpenAudit}
            className="px-8 py-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
          >
            <span className="relative z-10">Get My Free Pipeline Audit</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </button>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>No account. No payment details. No need to upload your contact list.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
