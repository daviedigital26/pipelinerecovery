import { useState } from 'react';
import { offersList } from '../../data/offers';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Mail,
  Gift,
  TrendingUp,
  Heart
} from 'lucide-react';

interface SphereNurturePageProps {
  onOpenTrial: () => void;
  showToast: (msg: string) => void;
}

export function SphereNurturePage({ onOpenTrial, showToast }: SphereNurturePageProps) {
  const offer = offersList.find((o) => o.slug === 'sphere-nurture')!;
  
  // Interactive Sphere Referral Calculator
  const [contactsCount, setContactsCount] = useState(120);
  const [avgCommission, setAvgCommission] = useState(9000);

  // Math: In any given year, 10-15% of homeowners in a network transact or refer a transaction
  const annualReferrals = Math.max(1, Math.round(contactsCount * 0.035));
  const estimatedRevenue = annualReferrals * avgCommission;

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 border-b border-slate-800/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reale Offer 04 · Past Client &amp; Sphere Retention Engine</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Never Let Past Clients <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  Forget You Sell Real Estate.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                {offer.plainSummary}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenTrial}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer"
                >
                  <span>Start Free 14-Day Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#sphere-calc"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-all"
                >
                  <span>Calculate Referral Income ↓</span>
                </a>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>52 ready-to-send weekly market update emails + annual equity review templates</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-sm">
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={offer.heroImage}
                    alt="Happy homeowner couple smiling holding keys with real estate agent"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>84% Past Client Retention</span>
                  <span className="text-emerald-400 font-semibold">4+ Annual Referrals</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SPHERE REFERRAL CALCULATOR */}
      <section id="sphere-calc" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center space-y-3 mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Referral Potential Calculator
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              See How Much Referral Money You Are Leaving On the Table
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              When friends and past clients remember you, they send you business automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Friends, Family &amp; Past Clients in Your Contacts</span>
                  <span className="text-amber-400 font-mono font-black">{contactsCount} people</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="400"
                  step="10"
                  value={contactsCount}
                  onChange={(e) => setContactsCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>30 people</span>
                  <span>200 people</span>
                  <span>400+ people</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Average Commission Check in Your Town</span>
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
                <span className="text-xs text-slate-400 font-medium">Expected Annual Referrals:</span>
                <div className="text-4xl font-black text-amber-400 font-mono mt-0.5">
                  +{annualReferrals} Deals / Year
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  from natural word-of-mouth recommendations
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-medium">Estimated Extra Commission:</span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
                  +${estimatedRevenue.toLocaleString()}
                </div>
              </div>

              <button
                onClick={onOpenTrial}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Automate My Sphere Nurture Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 4 DELIVERABLES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            What You Get Every Month
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            How We Keep You Top-of-Mind
          </h2>
          <p className="text-sm text-slate-300">
            Never wonder what to send again. Everything is written and scheduled for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offer.deliverables.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                {idx === 0 ? <Mail className="w-5 h-5" /> : idx === 1 ? <TrendingUp className="w-5 h-5" /> : idx === 2 ? <Heart className="w-5 h-5" /> : <Gift className="w-5 h-5" />}
              </div>
              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
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
            Lock In Your Sphere Referrals
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Get 52 pre-written weekly emails, home equity review templates, and anniversary touch reminders free for 14 days.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Activate Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
