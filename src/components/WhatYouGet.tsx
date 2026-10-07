import { ArrowRight, CheckCircle2, FileText, Instagram, Mail, PhoneCall } from 'lucide-react';

interface WhatYouGetProps {
  onOpenTrial: () => void;
}

export function WhatYouGet({ onOpenTrial }: WhatYouGetProps) {
  return (
    <section id="what-you-get" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <span>The Complete Monthly Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Here Is Everything You Get Every Single Month
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No more wondering what to post or say. Everything is written by real estate experts at a simple, friendly reading level.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: 30 Done-for-You Social Posts (Spans 7 cols) */}
          <div className="md:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">01. Social Media Kit</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    30 Daily Social Posts & Clean Graphics
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Post once a day to Instagram, Facebook, and LinkedIn in under 60 seconds. You get the ready-to-use image, the exact caption, and the right hashtags.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Market updates & listing tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Before/after staging ideas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive polls & questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ready for Canva or 1-click download</span>
                </div>
              </div>
            </div>

            <div className="mt-6 aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
              <img
                src="/src/assets/images/realtor_social_content_1791193964551.jpg"
                alt="Smartphone showing modern real estate social media post"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-white">
                ✓ 30 New Graphics Every Month
              </div>
            </div>
          </div>

          {/* Card 2: Print & PDF Buyer/Seller Books (Spans 5 cols) */}
          <div className="md:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">02. Lead Magnets</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Buyer & Seller Guides
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Beautiful 12-page booklets and open house checklists. Give them away at open houses or on social media to collect verified phone numbers and emails.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Home Seller Preparation Playbook</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>First-Time Homebuyer Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Print at home or Staples in minutes</span>
                </div>
              </div>
            </div>

            <div className="mt-6 aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
              <img
                src="/src/assets/images/lead_magnet_showcase_1791193939766.jpg"
                alt="Stack of client guides and booklets on desk"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-white">
                ✓ Branded With Your Photo & Phone
              </div>
            </div>
          </div>

          {/* Card 3: Word-for-Word Text & Calling Scripts (Spans 6 cols) */}
          <div className="md:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">03. Follow-Up Scripts</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Word-for-Word Text & Phone Scripts
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Never wonder &quot;what do I say?&quot; again. These proven scripts feel like a friendly conversation, not high-pressure sales.
            </p>

            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-semibold text-amber-400">Includes scripts for:</div>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div>• Open house guest follow-up</div>
                <div>• Re-engaging cold buyer leads</div>
                <div>• Expired listings & FSBOs</div>
                <div>• Past clients & sphere check-ins</div>
              </div>
            </div>
          </div>

          {/* Card 4: Weekly Client Email Newsletters (Spans 6 cols) */}
          <div className="md:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">04. Client Retention</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Weekly Email Newsletters People Actually Read
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Keep your past clients and friends thinking of you. When their coworker or neighbor wants to sell a house, your name will be the first one they mention.
            </p>

            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-semibold text-amber-400">Why our newsletters work:</div>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div>• Short (reads in 2 minutes)</div>
                <div>• Explains mortgage rates simply</div>
                <div>• Works in Mailchimp, CRM, or Gmail</div>
                <div>• 48% average open rate</div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 border border-amber-400/20 rounded-2xl p-6 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Want to start with this month&apos;s bundle?</h4>
            <p className="text-xs text-slate-300">Download all 30 posts and guides in the next 2 minutes.</p>
          </div>
          <button
            onClick={onOpenTrial}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
