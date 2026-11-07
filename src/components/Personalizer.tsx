import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Building2, Layers, Search, Database, Lock } from 'lucide-react';
import { diagnosticSamples } from '../data/samples';

interface PersonalizerProps {
  onOpenTrial: () => void;
  onPreviewGuide?: () => void;
  showToast: (msg: string) => void;
}

export function Personalizer({ onOpenTrial, showToast }: PersonalizerProps) {
  const [databaseSize, setDatabaseSize] = useState(650);
  const [avgCommission, setAvgCommission] = useState(9000);
  const [crmPlatform, setCrmPlatform] = useState('Follow Up Boss');
  const [activeTab, setActiveTab] = useState<'recovery' | 'blueprint'>('recovery');

  const quietLeadRatio = 0.52; // industry avg ~52% quiet leads in unmanaged databases
  const quietLeads = Math.round(databaseSize * quietLeadRatio);
  const estimatedRecoverableDeals = Math.max(1, Math.round(quietLeads * 0.025)); // 2.5% conservative recovery
  const estimatedRecoveredGci = estimatedRecoverableDeals * avgCommission;

  const currentSample = diagnosticSamples.find((s) => s.category === activeTab) || diagnosticSamples[0];

  return (
    <section id="try-your-name" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#0d1424]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>✨ INTERACTIVE ROI CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See Your Estimated Dormant Pipeline
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Good leads can go quiet. Adjust your numbers below to see your estimated dormant pipeline, then preview our exact recovery deliverables.
          </p>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="interactive-tool-grid grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Real-Time Diagnostic Inputs */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-5 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Step 1 · Enter Your Database Profile
              </span>
              <p className="text-xs text-slate-400 mt-1">
                Calculates dormant leads and recoverable commission
              </p>
            </div>

            {/* Input 1: Total Leads in Database */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-200 mb-1.5">
                <label>Leads In Your CRM / Phone</label>
                <span className="font-mono text-amber-400 font-bold">{databaseSize.toLocaleString()} Leads</span>
              </div>
              <input
                type="range"
                min="100"
                max="4000"
                step="50"
                value={databaseSize}
                onChange={(e) => setDatabaseSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>100</span>
                <span>2,000</span>
                <span>4,000+</span>
              </div>
            </div>

            {/* Input 2: Average Commission Check */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-200 mb-1.5">
                <label>Average Commission Check</label>
                <span className="font-mono text-emerald-400 font-bold">${avgCommission.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="4000"
                max="25000"
                step="500"
                value={avgCommission}
                onChange={(e) => setAvgCommission(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$4,000</span>
                <span>$15,000</span>
                <span>$25,000+</span>
              </div>
            </div>

            {/* Input 3: CRM Platform Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Your Primary CRM Platform
              </label>
              <select
                value={crmPlatform}
                onChange={(e) => setCrmPlatform(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="Follow Up Boss">Follow Up Boss</option>
                <option value="kvCORE">kvCORE</option>
                <option value="Lofty / Chime">Lofty / Chime</option>
                <option value="Brivity">Brivity</option>
                <option value="Sierra Interactive">Sierra Interactive</option>
                <option value="HubSpot / Custom">HubSpot / Custom CRM</option>
                <option value="Spreadsheet / Phone">Spreadsheets / Cell Phone</option>
              </select>
            </div>

            {/* Live Calculation Output Card */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">Estimated Quiet Leads:</span>
                <span className="font-mono font-bold text-amber-400">~{quietLeads} contacts</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">Projected Recoverable Deals:</span>
                <span className="font-mono font-bold text-white">+{estimatedRecoverableDeals} transactions</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">Recoverable GCI Pipeline:</span>
                <span className="font-mono font-black text-emerald-400 text-sm">
                  +${estimatedRecoveredGci.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2.5">
              <button
                onClick={onOpenTrial}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get My Free Pipeline Snapshot →</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Confidential review of your {crmPlatform} pipeline
              </p>
            </div>
          </div>

          {/* Right: Deliverables & Framework Preview */}
          <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Step 2 · Explore Real Deliverables
                </span>
                <h3 className="text-base font-bold text-white">Inspect Our Actual Methodologies</h3>
              </div>

              {/* Tab Selector Buttons */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl">
                <button
                  onClick={() => setActiveTab('recovery')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'recovery'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Recovery Framework
                </button>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'blueprint'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  $1,750 Recovery System
                </button>
              </div>
            </div>

            {/* Deliverable Document Preview Card */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-bold text-amber-300 font-mono uppercase tracking-wider">
                    {currentSample.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {crmPlatform} Compatible
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                    <Lock className="w-3 h-3" />
                    <span>Proprietary</span>
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {currentSample.title}
                </h4>
                <p className="text-xs sm:text-sm text-amber-200/90 font-medium mt-1">
                  {currentSample.hook}
                </p>
              </div>

              <div className="bg-slate-900/90 rounded-xl border border-slate-800/80 p-4 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-line">
                {currentSample.bodyText}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs border-t border-slate-800/80">
                <span className="text-slate-400 italic">
                  {currentSample.previewNote}
                </span>
                <button
                  onClick={onOpenTrial}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Get My Free Pipeline Snapshot →</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* End of section primary CTA */}
        <div className="mt-12 text-center space-y-3">
          <button
            onClick={onOpenTrial}
            className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-xl shadow-amber-500/25 animate-cta-glow shimmer-badge inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
          >
            <span className="relative z-10">Get My Free Pipeline Snapshot →</span>
          </button>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
