import { useState } from 'react';
import { offersList } from '../../data/offers';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Copy,
  Check,
  MessageSquare,
  PhoneCall,
  Users,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';

interface ScriptVaultPageProps {
  onOpenTrial: () => void;
  showToast: (msg: string) => void;
}

export function ScriptVaultPage({ onOpenTrial, showToast }: ScriptVaultPageProps) {
  const offer = offersList.find((o) => o.slug === 'script-vault')!;

  const scripts = [
    {
      id: 'open-house',
      category: 'Open House Follow-Up',
      scenario: 'Send 2 hours after your open house ends',
      recipient: 'Visiting Buyer or Neighbor',
      text: `Hi [Name], it was great meeting you at [Address] earlier today!

I know open houses can get chaotic. Did you like the backyard and the open kitchen layout, or are you looking for something with a bigger yard or garage?

I am touring 3 similar homes in [City] this Tuesday. Let me know if you want me to snap a quick video walk-through for you!

- [Agent Name], [Brokerage]`,
      why: 'Casual, helpful, and gives them an easy yes/no question without asking for a commitment.'
    },
    {
      id: 'ghosted-buyer',
      category: 'Ghosted Buyer Reconnect',
      scenario: 'When a buyer stops answering your texts for 2+ weeks',
      recipient: 'Stalled Buyer',
      text: `Hi [Name], are you still looking for a home in [City]?`,
      why: 'Takes 3 seconds to read on a locked phone screen. Zero sales pressure. 64% reply rate.'
    },
    {
      id: 'expired-listing',
      category: 'Expired Listing Empathy',
      scenario: 'When a home fails to sell with another agent',
      recipient: 'Frustrated Homeowner',
      text: `Hi [Name], my name is [Agent Name] with [Brokerage]. I saw your home on [Street] came off the market today.

I know your phone is probably blowing up with agents making promises. I am not calling to sell you. I just wanted to ask: are you guys still planning on moving to [Target City], or did you decide to stay put for now?`,
      why: 'Acknowledges their frustration immediately and asks about their life move, not the contract.'
    },
    {
      id: 'fsbo-partnership',
      category: 'For Sale By Owner (FSBO)',
      scenario: 'Helping a homeowner selling without an agent',
      recipient: 'FSBO Seller',
      text: `Hi [Name], I saw your home listed on Zillow on [Street]. It looks beautiful!

I work with a lot of active buyers in [City]. Are you open to cooperating with buyer agents if I bring an approved buyer who loves the home?

Also, if you need a free copy of the official state property disclosure forms or open house sign-in sheets to protect yourself, I am happy to email them over with zero strings attached.`,
      why: 'Establishes a friendly relationship and offers protection without demanding a listing appointment.'
    },
    {
      id: 'price-reduction',
      category: 'Price Adjustment Reset',
      scenario: 'When a listing has sat for 21 days with no offers',
      recipient: 'Your Current Seller Client',
      text: `Hi [Seller Name], thank you for reviewing our showing reports this week.

We have had 14 showings and 2 open houses, but no offers yet. In today’s market, buyers are telling us through their silence that our price is slightly ahead of where the market sees value.

If we adjust the price by $15,000 this Thursday before the weekend rush, we will show up on every new Zillow alert as a fresh price drop and capture the buyers touring this weekend. Can we review this together today?`,
      why: 'Blames the "market", not the seller or the home, and provides a clear strategic deadline.'
    }
  ];

  const [activeScriptId, setActiveScriptId] = useState(scripts[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeScript = scripts.find((s) => s.id === activeScriptId) || scripts[0];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Copied script to clipboard! Ready to paste into Messages or WhatsApp.');
    setTimeout(() => setCopiedId(null), 2200);
  };

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
                <span>Reale Offer 05 · High-Converting Conversational Frameworks</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                What to Say &amp; Text So <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  People Say &ldquo;Yes.&rdquo;
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
                  <span>Download Full Script Vault Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#script-station"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-all"
                >
                  <span>Browse Scripts Below ↓</span>
                </a>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>25+ proven word-for-word text messages and phone call outlines</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-sm">
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={offer.heroImage}
                    alt="Smartphone held in hand with real estate text scripts"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>3x More Appointments Booked</span>
                  <span className="text-emerald-400 font-semibold">Zero Sales Pressure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE INTERACTIVE COPY-PASTE SCRIPT STATION */}
      <section id="script-station" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Copy &amp; Paste Station
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Click to Copy Any Script Right Now
          </h2>
          <p className="text-base text-slate-300">
            Pick your situation from the tabs below and copy the exact words straight to your phone.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          
          {/* Script Category Switcher */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
            {scripts.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScriptId(s.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeScriptId === s.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {s.category}
              </button>
            ))}
          </div>

          {/* Script Body Card */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Scenario:
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {activeScript.scenario}
                </h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  Target recipient: <strong className="text-slate-300">{activeScript.recipient}</strong>
                </div>
              </div>

              <button
                onClick={() => handleCopy(activeScript.id, activeScript.text)}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                {copiedId === activeScript.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Script</span>
                  </>
                )}
              </button>
            </div>

            {/* The Script Text Body */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800/90 text-sm sm:text-base text-slate-100 font-sans whitespace-pre-line leading-relaxed selection:bg-amber-400 selection:text-slate-950">
              {activeScript.text}
            </div>

            {/* Why it works */}
            <div className="p-3.5 bg-slate-900/50 rounded-xl border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
              <span className="text-amber-400 font-bold shrink-0">💡 Why it works:</span>
              <span>{activeScript.why}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
            <span>Contains 20+ more scripts in the full member vault</span>
            <button
              onClick={onOpenTrial}
              className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
            >
              Get All 25 Scripts Free →
            </button>
          </div>

        </div>
      </section>

      {/* 3. CASE STUDY */}
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

      {/* 4. BOTTOM CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-slate-900 to-[#121c35] border-2 border-amber-400 rounded-3xl p-8 sm:p-12 space-y-5 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white">
            Never Stumble On Your Words Again
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Get instant access to all 25 word-for-word scripts for buyers, sellers, open houses, and expired listings.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Download Script Vault Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
