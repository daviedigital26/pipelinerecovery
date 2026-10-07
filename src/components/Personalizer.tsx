import { useState } from 'react';
import { defaultAgentInfo, sampleTemplates, SampleContent } from '../data/samples';
import { Sparkles, Copy, Check, FileText, Send, Eye, Share2 } from 'lucide-react';

interface PersonalizerProps {
  onOpenTrial: () => void;
  onPreviewGuide: () => void;
  showToast: (msg: string) => void;
}

export function Personalizer({ onOpenTrial, onPreviewGuide, showToast }: PersonalizerProps) {
  const [agent, setAgent] = useState(defaultAgentInfo);
  const [activeTab, setActiveTab] = useState<'social' | 'guide' | 'script' | 'newsletter'>('social');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeContent = sampleTemplates.find((t) => t.category === activeTab) || sampleTemplates[0];

  const handleCopy = (content: SampleContent) => {
    let textToCopy = content.bodyText
      .replace(/\[Agent Name\]/g, agent.name)
      .replace(/\[Brokerage\]/g, agent.brokerage)
      .replace(/\[City\]/g, agent.city);

    if (content.category === 'social') {
      textToCopy += `\n\n${content.tags?.join(' ') || ''}`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(content.id);
    showToast(`Copied! Paste this right into ${content.category === 'script' ? 'Messages or WhatsApp' : 'Instagram or Facebook'}.`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getReplacedText = (text: string) => {
    return text
      .replace(/\[Agent Name\]/g, agent.name)
      .replace(/\[Brokerage\]/g, agent.brokerage)
      .replace(/\[City\]/g, agent.city)
      .replace(/Austin/g, agent.city.split(',')[0]);
  };

  return (
    <section id="try-your-name" className="py-16 lg:py-24 bg-[#0d1424] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (6th-grade clarity) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Sample</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See Your Name On Our Content in 5 Seconds
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Type your info below. Watch how easy it is to have ready-to-use posts, seller guides, and scripts with your name and city on them.
          </p>
        </div>

        {/* The Live Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Instant Personalizer Inputs */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-5 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>1. Enter Your Details</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Change these to see the preview update live:
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={agent.name}
                  onChange={(e) => setAgent({ ...agent, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Brokerage / Team Name
                </label>
                <input
                  type="text"
                  value={agent.brokerage}
                  onChange={(e) => setAgent({ ...agent, brokerage: e.target.value })}
                  placeholder="e.g. Compass or Keller Williams"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your City & State
                </label>
                <input
                  type="text"
                  value={agent.city}
                  onChange={(e) => setAgent({ ...agent, city: e.target.value })}
                  placeholder="e.g. Austin, TX"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-3">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Ready to download your full month?</span>
              </div>
              <button
                onClick={onOpenTrial}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get All 30 Templates Free</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400">
                14-day free trial · Instant access · No credit card
              </p>
            </div>
          </div>

          {/* Right: Live Interactive Output Card */}
          <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white">2. Pick What to Preview</h3>
                <p className="text-xs text-slate-400">Click any tab to see what you get every week</p>
              </div>

              <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('social')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'social'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Social Post
                </button>
                <button
                  onClick={() => setActiveTab('guide')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'guide'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Seller Guide
                </button>
                <button
                  onClick={() => setActiveTab('script')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'script'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Text Script
                </button>
                <button
                  onClick={() => setActiveTab('newsletter')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'newsletter'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Newsletter
                </button>
              </div>
            </div>

            {/* The Live Output Box */}
            <div className="bg-slate-950 rounded-xl border border-slate-800/90 p-5 space-y-4">
              
              {/* Header inside preview */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded">
                    {activeContent.badge}
                  </span>
                  <span className="text-xs text-slate-400">· Ready to send in 2 minutes</span>
                </div>

                <div className="flex items-center gap-2">
                  {activeContent.category === 'guide' && (
                    <button
                      onClick={onPreviewGuide}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Flip Through 12 Pages</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleCopy(activeContent)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedId === activeContent.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-slate-950" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{activeContent.ctaText}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Title & Hook */}
              <div>
                <h4 className="text-lg font-bold text-white">
                  {getReplacedText(activeContent.title)}
                </h4>
                <p className="text-xs text-amber-300/90 mt-0.5">
                  {getReplacedText(activeContent.hook)}
                </p>
              </div>

              {/* Guide Special Card Preview */}
              {activeContent.category === 'guide' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Guide Cover Preview
                    </div>
                    <div className="aspect-[4/3] rounded-md overflow-hidden bg-slate-800 relative border border-slate-700/60">
                      <img
                        src="/src/assets/images/lead_magnet_showcase_1791193939766.jpg"
                        alt="Home seller guide stack on marble desk"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-3 flex flex-col justify-end">
                        <div className="text-xs font-extrabold text-white">
                          2026 {agent.city} Home Seller Guide
                        </div>
                        <div className="text-[11px] text-amber-400 font-semibold">
                          Prepared exclusively by {agent.name}
                        </div>
                        <div className="text-[10px] text-slate-300">
                          {agent.brokerage}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      What is Inside This Guide:
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span>Full checklist: 10 small fixes that add thousands in buyer offers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span>Staging guide for kitchens, living rooms, and backyards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span>Your phone number & headshot on every single page</span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <button
                        onClick={onPreviewGuide}
                        className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-400" />
                        <span>Click to Flip Through Full PDF Sample</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Text Content Body (Social, Script, Newsletter) */
                <div className="bg-slate-900/80 rounded-lg p-4 border border-slate-800/80 font-sans text-sm text-slate-200 whitespace-pre-line leading-relaxed selection:bg-amber-400 selection:text-slate-950">
                  {getReplacedText(activeContent.bodyText)}

                  {activeContent.tags && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-amber-400/90 font-medium">
                      {activeContent.tags.map(tag => tag.replace('Austin', agent.city.split(',')[0].replace(/\s+/g, ''))).join(' ')}
                    </div>
                  )}
                </div>
              )}

              {/* Footer inside preview */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                <span>{activeContent.previewNote}</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <Share2 className="w-3 h-3" />
                  Free trial includes all 30 posts this month
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
