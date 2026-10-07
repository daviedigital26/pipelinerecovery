import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Download, Sparkles, FileText, Share2, Copy, Check } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export function SignupModal({ isOpen, onClose, showToast }: SignupModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brokerage: '',
    city: '',
    plan: 'starter',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      showToast('Please enter your name and email to start your free trial.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      showToast('🎉 Free trial activated! Download your welcome bundle below.');
    }, 600);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://realecontent.com/portal/instant-access');
    setCopiedLink(true);
    showToast('Member portal link copied to clipboard!');
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownload = (filename: string) => {
    // Generate a simulated download blob with customized agent name
    const blobContent = `REALE CONTENT STUDIO - AGENT WELCOME KIT\n\nAgent: ${formData.fullName || 'Sarah Jenkins'}\nBrokerage: ${formData.brokerage || 'Compass'}\nCity: ${formData.city || 'Austin, TX'}\n\nContents:\n1. 30 Social Media Posts & Captions for this month\n2. 12-Page Home Seller Guide (Print-Ready)\n3. 20 Follow-Up Text & Phone Scripts\n4. Weekly Email Newsletter Templates\n\nThank you for choosing Reale!`;
    const blob = new Blob([blobContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Downloading ${filename}...`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                <span>14-Day 100% Free Trial</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Start In Under 60 Seconds
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                No credit card needed today. Instant access to this month&apos;s 30 posts and seller guides.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@compass.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Cell Phone (for SMS updates)
                  </label>
                  <input
                    type="tel"
                    placeholder="(512) 555-0194"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Brokerage / Team
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Compass, eXp, KW"
                    value={formData.brokerage}
                    onChange={(e) => setFormData({ ...formData, brokerage: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City & State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Austin, TX"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Plan Choice Selector */}
              <div className="pt-1">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Your Trial Tier:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, plan: 'starter' })}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      formData.plan === 'starter'
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Starter Agent</div>
                    <div className="text-[11px] text-amber-400 font-mono mt-0.5">$49/mo (Free for 14 Days)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, plan: 'top-producer' })}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      formData.plan === 'top-producer'
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Top Producer</span>
                      <span className="text-[9px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-black">POPULAR</span>
                    </div>
                    <div className="text-[11px] text-amber-400 font-mono mt-0.5">$89/mo (Free for 14 Days)</div>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Setting up your account...</span>
                  ) : (
                    <>
                      <span>Activate Free 14-Day Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 text-center">
                <span>✓ No credit card required</span>
                <span>✓ Instant downloads</span>
                <span>✓ 1-click cancel</span>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Instant Success & Welcome Downloads */
          <div className="text-center space-y-5 py-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white">
                You Are In, {formData.fullName.split(' ')[0]}! 🎉
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Your 14-day free trial is now active. Here are your ready-to-use materials:
              </p>
            </div>

            {/* Instant Download Cards */}
            <div className="space-y-2.5 text-left">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      12-Page Home Seller Guide (PDF)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Branded for {formData.city || 'Your City'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload('Home-Seller-Playbook-Reale.txt')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download</span>
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      This Month&apos;s 30 Social Posts & Captions
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Zip file with graphics + copy paste text
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload('30-Day-Social-Content-Kit.txt')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download</span>
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Agent Follow-Up Text Scripts
                    </div>
                    <div className="text-[11px] text-slate-400">
                      20 high-converting copy-paste scripts
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload('Agent-Followup-Scripts.txt')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Member Portal Link */}
            <div className="pt-2 flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 text-xs">
              <span className="text-slate-400 truncate">
                Member access sent to <strong className="text-white">{formData.email}</strong>
              </span>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer shrink-0 ml-2"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Copy link'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              Start Using My Materials
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
