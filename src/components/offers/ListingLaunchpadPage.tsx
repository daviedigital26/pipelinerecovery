import { useState } from 'react';
import { offersList } from '../../data/offers';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Home,
  FileText,
  Share2,
  Mail,
  Award,
  Eye,
  Download
} from 'lucide-react';

interface ListingLaunchpadPageProps {
  onOpenTrial: () => void;
  onPreviewGuide: () => void;
  showToast: (msg: string) => void;
}

export function ListingLaunchpadPage({ onOpenTrial, onPreviewGuide, showToast }: ListingLaunchpadPageProps) {
  const offer = offersList.find((o) => o.slug === 'listing-launchpad')!;
  const [activeMilestone, setActiveMilestone] = useState(1);

  const milestones = [
    {
      num: 1,
      name: 'Coming Soon Teaser',
      days: 'Days 1 - 3',
      description: 'Build anticipation before the home even hits the MLS. Sneak peek photos and neighbor VIP notification letters.',
      deliverable: '3 Coming Soon Carousel Templates + Private Neighbor Letter'
    },
    {
      num: 2,
      name: 'Just Listed Mega Blitz',
      days: 'Day 4',
      description: 'Maximum visibility across social media, local community groups, and email. Explains architectural highlights cleanly.',
      deliverable: 'Official Just Listed Social Pack + 60-Second Video Reel Script'
    },
    {
      num: 3,
      name: 'Open House Weekend Blitz',
      days: 'Days 5 - 7',
      description: 'Draw 3x more foot traffic. Give visiting neighbors the 12-page printed Home Seller Guide to win their listings too.',
      deliverable: 'Directional Sign Map + QR Code Sign-In + 12-Page Seller Guide'
    },
    {
      num: 4,
      name: 'Neighborhood Farm Outreach',
      days: 'Days 8 - 14',
      description: 'Mail or hand-deliver 50 letters to the surrounding blocks: "Your neighbor just listed, here is what it means for your equity."',
      deliverable: '50-Neighbor Door Hanger & Letter Template'
    },
    {
      num: 5,
      name: 'Under Contract Buzz',
      days: 'Day 15 - 25',
      description: 'The single most powerful seller magnet in real estate: "Multiple offers received! We still have 4 approved buyers looking on this street."',
      deliverable: 'Under Contract Celebration Graphics + Buyer Spillover Letter'
    },
    {
      num: 6,
      name: 'Just Sold & Client Review',
      days: 'Day 30+',
      description: 'Celebrate the win, feature the happy homeowner testimonial, and ask the neighbors who wants to sell next.',
      deliverable: 'Just Sold Postcard + Seller Video Review Interview Prompts'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 border-b border-slate-800/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reale Offer 03 · 30-Day Listing Marketing Machine</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Turn 1 Home Listing into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  3 More Seller Clients.
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
                  <span>Download 30-Day Listing Kit Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onPreviewGuide}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Flip Through 12-Page Seller Guide</span>
                </button>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes all open house signs, social carousels, and 1-click Canva templates</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-sm">
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={offer.heroImage}
                    alt="Luxury Just Listed yard sign in front of modern upscale house"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>30-Day Campaign Blueprint</span>
                  <span className="text-emerald-400 font-semibold">2.4 New Inquiries / Listing</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 30-DAY TIMELINE INTERACTIVE EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Lifecycle Campaign
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The 6 Milestones of Every Listing
          </h2>
          <p className="text-base text-slate-300">
            Click each phase to see the exact marketing assets you get:
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Milestone Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-slate-800 pb-4">
            {milestones.map((m) => (
              <button
                key={m.num}
                onClick={() => setActiveMilestone(m.num)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  activeMilestone === m.num
                    ? 'border-amber-400 bg-amber-400/10 text-white font-bold'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] text-amber-400 font-mono">0{m.num}</div>
                <div className="text-xs truncate">{m.name.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Milestone Display */}
          {(() => {
            const current = milestones[activeMilestone - 1];
            return (
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400">
                      Phase 0{current.num} · {current.days}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-0.5">
                      {current.name}
                    </h3>
                  </div>

                  <span className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full">
                    Plug &amp; Play Template
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {current.description}
                </p>

                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Included in your download pack:
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{current.deliverable}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-400">Takes 5 minutes to brand in Canva</span>
                  <button
                    onClick={onOpenTrial}
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Get This Template Free
                  </button>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 3. THE 12-PAGE SELLER GUIDE SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative shrink-0">
            <img
              src="/src/assets/images/lead_magnet_showcase_1791193939766.jpg"
              alt="Luxury printed booklet stack on marble desk"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={onPreviewGuide}
              className="absolute bottom-3 left-3 right-3 py-2 bg-slate-950/90 hover:bg-slate-950 backdrop-blur-md text-amber-400 text-xs font-bold rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Click to Flip Through Full PDF Preview</span>
            </button>
          </div>

          <div className="space-y-4 text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Secret Weapon of Top Producers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 12-Page Home Seller Playbook
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When neighbors visit your open house, do not just give them a 1-page MLS printout. Hand them this glossy 12-page guide with your headshot and phone number on every page. It answers every question a seller has and makes hiring you the obvious choice.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Download Print-Ready PDF Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
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
            Dominate Your Next Listing
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Get instant access to all 14 social carousels, 12-page Home Seller Guide, open house signs, and neighbor outreach letters.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Download Listing Launchpad Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
