import { ArrowRight, CheckCircle2, ArrowLeft, Tag, X, Check, Sparkles, Shield } from 'lucide-react';

interface PriceDropProPageProps {
  onOpenListingAudit: () => void;
  onBackHome?: () => void;
}

export function PriceDropProPage({ onOpenListingAudit, onBackHome }: PriceDropProPageProps) {
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
            Free Listing Relaunch Review available for one active listing
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5" />
          <span>PRICE DROP PRO™</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Don&apos;t Just Lower the Price. <br />
          <span className="text-[#4F5DFF]">Relaunch the Opportunity.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A new price is one piece of the plan. We help you give buyers a fresh reason to look—and a clear next step.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenListingAudit}
            className="px-8 py-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-base rounded-xl transition-all shadow-xl shadow-[#4F5DFF]/25 animate-cta-glow shimmer-badge flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10">Get My Free Listing Relaunch Review</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </button>
        </div>

        <p className="text-xs text-slate-400">
          You control the price. We help plan what happens next.
        </p>
      </section>

      {/* A Price Change Needs a Plan */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-xl space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider block mb-2">
              Strategic Relaunch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              A Price Change Needs a Plan.
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              A listing can lose attention over time. A price change gives you a reason to review the message, reach the right people, and follow up on new interest.
            </p>
          </div>

          {/* Contrast: Just Change Price vs Relaunch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="bg-[#081020] rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <X className="w-5 h-5" />
                <span>Just Change the Price</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">&bull;</span>
                  <span>Update the MLS.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">&bull;</span>
                  <span>Post the new price once on social.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">&bull;</span>
                  <span>Wait for people to notice on their own.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-[#0e1a38] to-[#081020] rounded-2xl border-2 border-[#4F5DFF]/50 p-6 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-[#2DD4BF] font-bold text-sm">
                <Check className="w-5 h-5" />
                <span>Relaunch With a Plan (Price Drop Pro™)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Review showing feedback and listing activity.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Refresh the message and approved assets.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Reconnect with buyers who may still be a fit.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Give each reply an owner and a next step.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Track what gets a response.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* What a Relaunch May Include */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
            Execution Scope
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            What a Relaunch May Include.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Your quote lists the assets, channels, timing, and work included. Ad spend and extra tool costs are separate if needed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'A review of the listing and showing feedback',
            'A fresh listing marketing message',
            'Targeted social and email copy',
            'Approved graphics and listing assets',
            'A plan for relevant buyer follow-up',
            'Clear CRM tasks and a results review',
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0c162c] p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded-lg bg-[#4F5DFF]/15 text-[#4F5DFF] flex items-center justify-center font-mono text-xs font-bold">
                0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Start With One Listing */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#2DD4BF] uppercase tracking-wider">
              Free Review Process
            </span>
            <h3 className="text-2xl font-bold text-white">Start With One Listing.</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Share the public listing link and what has gone quiet. We review the facts, point out gaps, and suggest the next useful step.
            </p>
            <p className="text-xs text-slate-400 italic">
              The free review does not include finished graphics, a full campaign, or a price opinion.
            </p>
          </div>
          <button
            onClick={onOpenListingAudit}
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 cursor-pointer"
          >
            Request Listing Review
          </button>
        </div>

        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#4F5DFF] uppercase tracking-wider">
              Custom Quoted Pricing
            </span>
            <h3 className="text-2xl font-bold text-white">What Does It Cost?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Listing Relaunch Review is free. Paid Price Drop Pro work uses a custom quote based on the listing, assets, channels, and follow-up needed. We agree on the work and fee before it starts.
            </p>
            <p className="text-xs text-slate-400">
              No hidden fees, retainers, or automated billing.
            </p>
          </div>
          <div className="p-3 bg-[#081020] rounded-xl text-xs text-[#2DD4BF] border border-[#2DD4BF]/20 font-semibold text-center">
            Zero financial obligation for the initial review
          </div>
        </div>

      </section>

      {/* Final Callout */}
      <section className="mx-auto max-w-4xl px-4 text-center space-y-4 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Give the New Price a Clear Next Step.
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          No payment details. No need to share private seller records. Share the public listing facts and we will review the relaunch opportunity.
        </p>
        <button
          onClick={onOpenListingAudit}
          className="px-8 py-3.5 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-extrabold text-sm rounded-xl transition-all shadow-lg cursor-pointer"
        >
          Get My Free Listing Relaunch Review
        </button>
      </section>

    </div>
  );
}
