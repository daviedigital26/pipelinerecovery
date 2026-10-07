import { useState } from 'react';
import { ArrowRight, CheckCircle2, Play, Sparkles, Clock, MessageSquare, Award } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onExploreDemo: () => void;
}

export function Hero({ onOpenTrial, onExploreDemo }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/60">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct, simple, 6th-grade pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Plain English Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Built specifically for busy real estate agents</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Get More Listings. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Without Spending Hours
              </span> Making Content.
            </h1>

            {/* 6th-Grade Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We give you 30 ready-to-post social graphics, home seller guides, email newsletters, and word-for-word text scripts every month. Just add your name and share.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Ready to post in under 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>No graphic design skills needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Get real buyer and seller phone calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Works for any city or brokerage</span>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenTrial}
                className="flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreDemo}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Preview With Your Name</span>
              </button>
            </div>

            {/* Frictionless Trust Reassurance */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                No credit card required
              </span>
              <span>·</span>
              <span>Instant download access</span>
              <span>·</span>
              <span>Cancel anytime with 1 click</span>
            </div>

          </div>

          {/* Right Column: Hero Visual & Interactive Compare Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-sm">
              
              {/* Main Photo Asset */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src="/src/assets/images/hero_realtor_success_1791193929506.jpg"
                  alt="Confident real estate agent smiling holding digital tablet outside modern home"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Social Proof Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Austin, TX · Sarah J.</div>
                      <div className="text-slate-400 text-[11px]">2 Seller Consultations booked this week</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
              </div>

              {/* Before vs After Switcher */}
              <div className="mt-3 bg-slate-950/80 rounded-xl p-3 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="text-xs font-medium text-slate-400">Compare your week:</span>
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveTab('after')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        activeTab === 'after'
                          ? 'bg-amber-400 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      With Reale
                    </button>
                    <button
                      onClick={() => setActiveTab('before')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        activeTab === 'before'
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Doing It Alone
                    </button>
                  </div>
                </div>

                {activeTab === 'after' ? (
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>2 minutes on Monday morning: Copy, post, done</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Past clients reply: &quot;Hey, thinking of selling soon!&quot;</span>
                    </div>
                    <div className="text-[11px] text-slate-400 pt-0.5">
                      Cost: $49/mo (Less than lunch with a client)
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2 text-rose-400 font-medium">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>3 hours staring at Canva on Sunday night</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                      <span>Zero new leads, agency fees over $2,000/mo</span>
                    </div>
                    <div className="text-[11px] text-slate-500 pt-0.5">
                      Feeling guilty about not posting regularly
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Realtor Brokerage Trust Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-5">
            Trusted by agents across top national and local brokerages
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-bold text-slate-400">
            <span className="hover:text-white transition-colors">KELLER WILLIAMS</span>
            <span className="hover:text-white transition-colors">EXP REALTY</span>
            <span className="hover:text-white transition-colors">COMPASS</span>
            <span className="hover:text-white transition-colors">RE/MAX</span>
            <span className="hover:text-white transition-colors">COLDWELL BANKER</span>
            <span className="hover:text-white transition-colors">SOTHEBY&apos;S REALTY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
