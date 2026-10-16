import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Shield, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onOpenAudit: (type?: 'pipeline' | 'listing') => void;
  onBackHome?: () => void;
  showToast: (msg: string) => void;
}

export function ContactPage({ onOpenAudit, onBackHome, showToast }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brokerage, setBrokerage] = useState('');
  const [topic, setTopic] = useState('Pipeline Recovery Audit question');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Your message has been received.');
    }, 700);
  };

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
          <span className="text-[#4F5DFF] font-semibold">
            Contact Reale Revenue Systems
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4F5DFF] bg-[#4F5DFF]/10 border border-[#4F5DFF]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT INQUIRIES</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Tell Us Where Work Gets Stuck.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Have a question about an audit, a listing, or paid setup? Send a note and we will reply about your request.
        </p>
      </section>

      {/* Form / Confirmation Section */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c162c] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl space-y-6">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. elena@rosovagroup.com"
                  className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Brokerage or Team
                </label>
                <input
                  type="text"
                  value={brokerage}
                  onChange={(e) => setBrokerage(e.target.value)}
                  placeholder="e.g. Keller Williams South"
                  className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  What do you need help with?
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#4F5DFF]"
                >
                  <option value="Pipeline Recovery Audit question">Pipeline Recovery Audit question</option>
                  <option value="Price Drop Pro listing inquiry">Price Drop Pro listing inquiry</option>
                  <option value="Revenue Architecture Blueprint fit">Revenue Architecture Blueprint fit</option>
                  <option value="Other follow-up question">Other follow-up question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your CRM, database size, or where leads go quiet..."
                  className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending Your Message…' : 'Send My Message'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-3 text-[11px] text-slate-400 flex items-center gap-2 border-t border-slate-800">
                <Shield className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>Do not send passwords, client lists, or private seller files.</span>
              </div>
            </form>
          ) : (
            <div className="space-y-6 text-center py-6">
              <div className="w-14 h-14 rounded-2xl bg-[#2DD4BF]/15 border border-[#2DD4BF]/30 text-[#2DD4BF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white">We Have Your Message.</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  We will reply about your request by email. Thank you for reaching out to Reale Revenue Systems.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
              >
                Send Another Message
              </button>
            </div>
          )}

        </div>

        {/* Ready for a Review block */}
        <div className="mt-8 p-6 bg-[#0c162c] border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-bold text-white">Ready for a Review?</span>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenAudit('pipeline')}
              className="text-xs font-semibold text-[#4F5DFF] hover:underline"
            >
              Get My Free Pipeline Audit &rarr;
            </button>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <button
              onClick={() => onOpenAudit('listing')}
              className="text-xs font-semibold text-slate-300 hover:underline"
            >
              Get My Free Listing Review &rarr;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
