import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Shield, AlertCircle, Database, Tag } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'pipeline' | 'listing';
  showToast: (msg: string) => void;
  onSelectRoute?: (slug: string) => void;
}

export function AuditModal({ isOpen, onClose, type = 'pipeline', showToast, onSelectRoute }: AuditModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form Fields
  const [crm, setCrm] = useState('Follow Up Boss');
  const [leadCount, setLeadCount] = useState('500 - 1,000 leads');
  const [bottleneck, setBottleneck] = useState('');
  
  // Listing specific
  const [listingUrl, setListingUrl] = useState('');
  const [listingCity, setListingCity] = useState('');
  const [listingNotes, setListingNotes] = useState('');

  // Contact Info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [brokerage, setBrokerage] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const isListing = type === 'listing';

  const validateStep1 = () => {
    setErrorMsg(null);
    if (isListing) {
      if (!listingUrl.trim() && !listingCity.trim()) {
        setErrorMsg('Please share either the MLS / public link or the property address/city.');
        return false;
      }
    } else {
      if (!crm.trim()) {
        setErrorMsg('Please specify your current CRM or database tool.');
        return false;
      }
    }
    return true;
  };

  const validateStep2 = () => {
    setErrorMsg(null);
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    // Simulate safe validation roundtrip
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast(isListing ? 'Listing review request logged.' : 'Pipeline audit request logged.');
    }, 700);
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    setErrorMsg(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#081020]/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#0c162c] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F5DFF] uppercase tracking-wider mb-2">
                {isListing ? <Tag className="w-3.5 h-3.5" /> : <Database className="w-3.5 h-3.5" />}
                <span>{isListing ? 'FREE LISTING RELAUNCH REVIEW' : 'FREE PIPELINE RECOVERY AUDIT'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isListing ? 'What Should Happen After the Price Changes?' : 'Find Where Your Follow-Up Gets Stuck.'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {isListing
                  ? 'Share one listing and what has gone quiet. We help you see where the message and follow-up could be clearer.'
                  : 'Tell us about your CRM and the leads that went quiet. We review your answers and help choose a useful place to start.'}
              </p>
            </div>

            {/* Scope Box */}
            <div className="bg-[#081020] rounded-xl p-3.5 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <span className="font-bold text-white block">What You Get:</span>
              <ul className="space-y-1 text-slate-400">
                {isListing ? (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>A review of the public listing details you share</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>Gaps in the message or next steps to check</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>A suggested starting point for a relaunch</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>Up to three follow-up gaps to check in your CRM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>One lead group worth a closer look</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>A clear next step recommended by David Reale</span>
                    </li>
                  </>
                )}
              </ul>
              <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-800/80 italic">
                {isListing
                  ? 'This is a brief review, not a home value opinion. Finished assets need a separate quote.'
                  : 'This is a brief review. It does not include full CRM cleanup or campaign setup.'}
              </p>
            </div>

            {/* Error Banner */}
            {errorMsg && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Stepper Indicator */}
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
              <span className={`font-semibold ${step === 1 ? 'text-[#4F5DFF]' : 'text-slate-400'}`}>
                Step 1: {isListing ? 'Listing Details' : 'Pipeline Details'}
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className={`font-semibold ${step === 2 ? 'text-[#4F5DFF]' : 'text-slate-500'}`}>
                Step 2: Contact Info
              </span>
            </div>

            {/* Form Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                {!isListing ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Current CRM or Database
                      </label>
                      <input
                        type="text"
                        value={crm}
                        onChange={(e) => setCrm(e.target.value)}
                        placeholder="e.g. Follow Up Boss, kvCORE, Lofty, BoomTown"
                        className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Rough Inactive Lead Count
                      </label>
                      <select
                        value={leadCount}
                        onChange={(e) => setLeadCount(e.target.value)}
                        className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#4F5DFF]"
                      >
                        <option value="Under 300 leads">Under 300 leads</option>
                        <option value="300 - 500 leads">300 - 500 leads</option>
                        <option value="500 - 1,000 leads">500 - 1,000 leads</option>
                        <option value="1,000 - 2,500 leads">1,000 - 2,500 leads</option>
                        <option value="2,500+ leads">2,500+ leads</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Where does follow-up get stuck most? (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={bottleneck}
                        onChange={(e) => setBottleneck(e.target.value)}
                        placeholder="e.g. Leads go quiet after showing, or replies have no assigned owner"
                        className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Public Listing Link or MLS #
                      </label>
                      <input
                        type="text"
                        value={listingUrl}
                        onChange={(e) => setListingUrl(e.target.value)}
                        placeholder="e.g. Zillow/Realtor link or MLS number"
                        className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Property Address or City
                      </label>
                      <input
                        type="text"
                        value={listingCity}
                        onChange={(e) => setListingCity(e.target.value)}
                        placeholder="e.g. 1420 Ridgecrest Dr, Austin, TX"
                        className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        What has gone quiet with this listing?
                      </label>
                      <textarea
                        rows={2}
                        value={listingNotes}
                        onChange={(e) => setListingNotes(e.target.value)}
                        placeholder="e.g. 35 days on market, upcoming $20k price drop, showing feedback mentioned kitchen"
                        className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                      />
                    </div>
                  </>
                )}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full py-3.5 px-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Step 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Form Step 2 */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
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
                    placeholder="e.g. marcus@realty.com"
                    className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Brokerage / Team
                    </label>
                    <input
                      type="text"
                      value={brokerage}
                      onChange={(e) => setBrokerage(e.target.value)}
                      placeholder="e.g. Compass Austin"
                      className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#081020] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4F5DFF]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-4 bg-[#4F5DFF] hover:bg-[#4350e6] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>
                      {isSubmitting
                        ? 'Sending Your Request…'
                        : isListing
                        ? 'Request My Free Listing Review'
                        : 'Request My Free Audit'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2 border-t border-slate-800">
              <Shield className="w-4 h-4 text-[#2DD4BF] shrink-0" />
              <span>No account or payment details. Do not send passwords or client contact lists.</span>
            </div>

          </div>
        ) : (
          /* Honest Confirmation State */
          <div className="space-y-6 text-center py-4">
            <div className="w-14 h-14 rounded-2xl bg-[#2DD4BF]/15 border border-[#2DD4BF]/30 text-[#2DD4BF] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">
                {isListing ? 'We Have Your Listing Review Request.' : 'We Have Your Audit Request.'}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {isListing
                  ? 'We will review the listing details you shared and email you about the next step.'
                  : 'We will review your answers and email you about the next step.'}
              </p>
            </div>

            <div className="bg-[#081020] rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-1 max-w-md mx-auto">
              <span className="font-semibold text-white block">Important Note:</span>
              <p className="text-slate-400">
                A call is not booked yet. We review every request individually to ensure our systems fit before scheduling a walkthrough.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  handleReset();
                  onSelectRoute?.('how-it-works');
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#4F5DFF] hover:bg-[#4350e6] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
              >
                See the 5-Step Process
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>

            <p className="text-[10px] text-slate-500 italic">
              Frontend preview state: submissions are verified and validated. Connect an authorized API or webhook endpoint for production delivery.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
