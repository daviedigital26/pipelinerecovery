import { useState } from 'react';
import { offersList, pipelineRecoverySlides, nineWordVariations } from '../../data/offers';
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Award,
  AlertTriangle,
  Send,
  HelpCircle
} from 'lucide-react';

interface PipelineRecoveryPageProps {
  onOpenTrial: () => void;
  showToast: (msg: string) => void;
}

export function PipelineRecoveryPage({ onOpenTrial, showToast }: PipelineRecoveryPageProps) {
  const offer = offersList.find((o) => o.slug === 'pipeline-recovery')!;
  
  // Interactive Slide Deck State (Slides 01 to 06 from attachments)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = pipelineRecoverySlides[currentSlideIndex];

  // Interactive 9-Word Text Customizer State
  const [leadType, setLeadType] = useState('Ghosted Buyer');
  const [leadName, setLeadName] = useState('Michael');
  const [cityName, setCityName] = useState('Austin');
  const [copiedText, setCopiedText] = useState(false);

  // Dead Lead Revenue Calculator State
  const [deadLeadCount, setDeadLeadCount] = useState(120);
  const [avgCommission, setAvgCommission] = useState(9000);

  // Calculation: ~10% reply and re-engage, ~1.5% - 2% close in 60-90 days
  const estimatedReplies = Math.round(deadLeadCount * 0.16);
  const estimatedClosings = Math.max(1, Math.round(deadLeadCount * 0.02));
  const estimatedGci = estimatedClosings * avgCommission;

  const activeVariation = nineWordVariations.find((v) => v.type === leadType) || nineWordVariations[0];
  const renderedText = activeVariation.text
    .replace(/\[Name\]/g, leadName || 'there')
    .replace(/\[City\]/g, cityName || 'your area');

  const handleCopyText = () => {
    navigator.clipboard.writeText(renderedText);
    setCopiedText(true);
    showToast('Copied to clipboard! Ready to paste into your phone.');
    setTimeout(() => setCopiedText(false), 2200);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 border-b border-slate-800/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Pitch */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reale Offer 01 · Flagship Lead Reactivation System</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Turn Cold Leads into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  Live Closings in 7 Days.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                {offer.plainSummary}
              </p>

              {/* Stat callout row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                  <div className="text-2xl font-black text-amber-400 font-mono">64%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Average reply rate</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                  <div className="text-2xl font-black text-emerald-400 font-mono">$19.5k</div>
                  <div className="text-xs text-slate-400 mt-0.5">Average GCI recovered</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-white font-mono">5 Mins</div>
                  <div className="text-xs text-slate-400 mt-0.5">To send to your CRM</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenTrial}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer"
                >
                  <span>Download The 7-Day Playbook Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#slide-deck"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all"
                >
                  <span>View 6 Slide Deck ↓</span>
                </a>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes all 9-word text variations, email blast templates, and day-by-day calendar</span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={offer.heroImage}
                    alt="Smartphone displaying 9-word text message with fast buyer response"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 p-3 rounded-xl flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="font-semibold text-white">iMessage · 4 minutes ago</div>
                        <div className="text-slate-300 text-[11px]">&ldquo;Yes! We are still looking, can you send options?&rdquo;</div>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Revived
                    </span>
                  </div>
                </div>

                <div className="mt-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>Tested on 14,000+ real estate leads</span>
                  <span className="text-amber-400 font-semibold">100% compliant with carrier spam rules</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SLIDE DECK (Reale_Pipeline_Recovery_01 to 06) */}
      <section id="slide-deck" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            <span>Attachment Slide Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The 6-Slide Pipeline Recovery Framework
          </h2>
          <p className="text-base text-slate-300">
            Click through all 6 slides from our official presentation to see why this system works so reliably.
          </p>
        </div>

        {/* Slide Deck Container */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Slide Indicator Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded">
                Slide 0{currentSlide.slideNumber} of 06
              </span>
              <span className="text-xs text-slate-400">· {currentSlide.title}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {pipelineRecoverySlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`w-7 h-2 rounded-full transition-all cursor-pointer ${
                    currentSlideIndex === i ? 'bg-amber-400 w-9' : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Active Slide Body */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {currentSlide.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {currentSlide.title}
              </h3>
              <p className="text-base font-medium text-slate-300 mt-1">
                {currentSlide.subtitle}
              </p>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/90 text-sm text-amber-300 font-semibold flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>&ldquo;{currentSlide.hook}&rdquo;</span>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                Core Principles:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSlide.keyPoints.map((point, idx) => (
                  <div key={idx} className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 text-xs text-emerald-400 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{currentSlide.highlight}</span>
            </div>
          </div>

          {/* Slide Deck Nav Footer */}
          <div className="flex items-center justify-between pt-6 mt-2">
            <button
              onClick={() => setCurrentSlideIndex((idx) => Math.max(0, idx - 1))}
              disabled={currentSlideIndex === 0}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Slide</span>
            </button>

            <button
              onClick={() => {
                if (currentSlideIndex === pipelineRecoverySlides.length - 1) {
                  onOpenTrial();
                } else {
                  setCurrentSlideIndex((idx) => Math.min(pipelineRecoverySlides.length - 1, idx + 1));
                }
              }}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>{currentSlideIndex === pipelineRecoverySlides.length - 1 ? 'Download Full Playbook Free' : 'Next Slide'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE 9-WORD TEXT GENERATOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0d1424] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Interactive Tool
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  The 9-Word Magic Text Builder
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Choose your lead situation below. Watch the exact message update. You can copy and send it in 10 seconds.
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-300">
                  Select Lead Category:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {nineWordVariations.map((v) => (
                    <button
                      key={v.type}
                      onClick={() => setLeadType(v.type)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                        leadType === v.type
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Lead&apos;s Name
                  </label>
                  <input
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    placeholder="Michael"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your City
                  </label>
                  <input
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    placeholder="Austin"
                  />
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                💡 <strong>Why this works:</strong> {activeVariation.why}
              </div>
            </div>

            {/* Right Phone Mockup Preview */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">
                    {leadName.charAt(0) || 'M'}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{leadName || 'Lead'}</div>
                    <div className="text-[10px] text-slate-400">Mobile Phone</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyText}
                  className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  {copiedText ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* The Text Bubble */}
              <div className="space-y-4 py-2">
                <div className="flex justify-end">
                  <div className="bg-amber-400 text-slate-950 p-4 rounded-2xl rounded-tr-xs text-sm sm:text-base font-semibold max-w-md shadow-md">
                    {renderedText}
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-slate-900 border border-slate-800 text-slate-200 p-3.5 rounded-2xl rounded-tl-xs text-xs sm:text-sm max-w-sm">
                    <span className="text-[10px] text-emerald-400 font-bold block mb-1">TYPICAL RESPONSE (within 15 mins):</span>
                    &ldquo;Hey! Yes we are, our lease is up in 3 months and we want to start looking again. Do you have anything around $450k?&rdquo;
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Character count: {renderedText.length} · 1 SMS credit</span>
                <span className="text-emerald-400 font-medium">Ready to paste into iMessage, WhatsApp or CRM</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DEAD LEAD REVENUE CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center space-y-3 mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Lost Money Calculator
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              How Much Commission Is Sitting In Your &ldquo;Dead&rdquo; Leads?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Drag the sliders below to see what you could unlock this month:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Old / Stalled Leads in Your CRM</span>
                  <span className="text-amber-400 font-mono font-black">{deadLeadCount} contacts</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={deadLeadCount}
                  onChange={(e) => setDeadLeadCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>20 leads</span>
                  <span>250 leads</span>
                  <span>500+ leads</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Your Average Commission Check</span>
                  <span className="text-amber-400 font-mono font-black">${avgCommission.toLocaleString()}</span>
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
                  <span>$25,000</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 text-center space-y-4">
              <div>
                <span className="text-xs text-slate-400 font-medium">Estimated Recoverable Deals:</span>
                <div className="text-4xl font-black text-amber-400 font-mono mt-0.5">
                  +{estimatedClosings} {estimatedClosings === 1 ? 'Closing' : 'Closings'}
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1">
                  from ~{estimatedReplies} live text replies
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-medium">Potential Commission Recovered:</span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
                  +${estimatedGci.toLocaleString()}
                </div>
              </div>

              <button
                onClick={onOpenTrial}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Recover These Deals Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 7-DAY TOUCH CADENCE BREAKDOWN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Step-by-Step Cadence
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            The 7-Day Protocol At a Glance
          </h2>
          <p className="text-sm text-slate-300">
            Send one touch every other day. Never sound needy. Always offer pure value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black font-mono text-sm flex items-center justify-center">
              D1
            </div>
            <h4 className="text-base font-bold text-white">Day 1: 9-Word Reset</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Send the 9-word question to 25–50 contacts on Tuesday morning between 9:30 AM and 11:00 AM.
            </p>
            <div className="text-[11px] text-amber-400 font-semibold pt-1">
              ✓ Expected replies: 40–60%
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-white font-black font-mono text-sm flex items-center justify-center">
              D3
            </div>
            <h4 className="text-base font-bold text-white">Day 3: Video Walk-in</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              For those who haven&apos;t replied, snap a 15-second selfie video in front of a new neighborhood listing.
            </p>
            <div className="text-[11px] text-amber-400 font-semibold pt-1">
              ✓ Shows you are active & human
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-white font-black font-mono text-sm flex items-center justify-center">
              D5
            </div>
            <h4 className="text-base font-bold text-white">Day 5: Price Drop</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              &ldquo;Hey, 2 homes on Elm St just dropped their price by $20k. Thought of you, want the link?&rdquo;
            </p>
            <div className="text-[11px] text-amber-400 font-semibold pt-1">
              ✓ High curiosity trigger
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-400 text-slate-950 font-black font-mono text-sm flex items-center justify-center">
              D7
            </div>
            <h4 className="text-base font-bold text-white">Day 7: The Takeaway</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              &ldquo;I don&apos;t want to bug you, should I take you off my private updates?&rdquo; Psychology magic.
            </p>
            <div className="text-[11px] text-emerald-400 font-semibold pt-1">
              ✓ 35% response from ghosters
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL PROOF CASE STUDY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-slate-900 to-[#111c33] border border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 rounded-full bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-3 text-left">
            <div className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded">
              Verified Case Study · {offer.caseStudy.result}
            </div>
            <h3 className="text-2xl font-bold text-white">
              &ldquo;{offer.caseStudy.story}&rdquo;
            </h3>
            <div className="text-xs text-slate-400">
              — <strong className="text-white">{offer.caseStudy.agent}</strong>, {offer.caseStudy.brokerage} ({offer.caseStudy.city})
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
          <p className="text-xs text-slate-400">Clear answers to your questions about Pipeline Recovery.</p>
        </div>

        <div className="space-y-3">
          {offer.faq.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-left space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BOTTOM CTA BLOCK */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-slate-900 to-[#121c35] border-2 border-amber-400 rounded-3xl p-8 sm:p-12 space-y-5 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Revive Your Dead Leads?
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Get instant download access to the complete 7-Day Pipeline Recovery Playbook, all text swipe files, and CRM email templates.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Download Pipeline Recovery Free (14-Day Trial)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs text-slate-400">
            No credit card required · Instant access · Download right now
          </div>
        </div>
      </section>

    </div>
  );
}
