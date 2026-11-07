import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Building2, AlertTriangle, Copy, Mail, ExternalLink } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export function SignupModal({ isOpen, onClose, showToast }: SignupModalProps) {
  const [selectedService, setSelectedService] = useState<'snapshot' | 'blueprint' | 'implementation'>('snapshot');
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brokerage: '',
    city: '',
    crm: 'Follow Up Boss',
    databaseSizeOrAddress: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedData, setCopiedData] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      showToast('Please provide your name, email, and phone number.');
      return;
    }
    // JS guard: Prevent external submission if action is empty or unconfigured
    const actionEndpoint = e.currentTarget.getAttribute('action');
    if (!actionEndpoint || actionEndpoint === '' || actionEndpoint === '#') {
      setIsSubmitting(true);
      // Staging the submission locally since external webhook is pending configuration
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(2);
        showToast('✓ Request successfully staged for review.');
      }, 400);
      return;
    }
  };

  const handleCopyStagedData = () => {
    const serviceName = selectedService === 'snapshot'
      ? 'Free Pipeline Snapshot'
      : selectedService === 'blueprint'
      ? '$1,750 Recovery Blueprint'
      : 'Pipeline Recovery Implementation';

    const formattedData = `[REQUEST - REALTOR PIPELINE RECOVERY™]\n` +
      `Service: ${serviceName}\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Brokerage: ${formData.brokerage || 'N/A'}\n` +
      `Market/City: ${formData.city || 'N/A'}\n` +
      `CRM Platform: ${formData.crm}\n` +
      `Database Size: ${formData.databaseSizeOrAddress || 'N/A'}\n` +
      `Notes: ${formData.notes || 'None'}\n` +
      `Timestamp: ${new Date().toISOString()}`;

    navigator.clipboard.writeText(formattedData);
    setCopiedData(true);
    showToast('✓ Request payload copied to clipboard!');
    setTimeout(() => setCopiedData(false), 2200);
  };

  const handleMailtoDispatch = () => {
    const subject = encodeURIComponent(`Audit Request: ${formData.fullName} - ${selectedService}`);
    const body = encodeURIComponent(
      `Hi Team,\n\nI am requesting a ${selectedService} review:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Brokerage: ${formData.brokerage}\n` +
      `City: ${formData.city}\n` +
      `CRM: ${formData.crm}\n` +
      `Details: ${formData.databaseSizeOrAddress}\n\n` +
      `Notes: ${formData.notes}`
    );
    window.location.href = `mailto:audits@realtorpipeline.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8">
        
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
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Confidential Review · Zero Risk</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Request Your Free Pipeline Snapshot
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Good leads can go quiet. We find missed follow-ups and build a clear plan to reach back out.
              </p>
            </div>

            {/* Service Selection Toggle */}
            <div className="mb-5 space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Select Service Focus:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedService('snapshot')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                    selectedService === 'snapshot'
                      ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-sm'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="block font-bold">Pipeline Snapshot</span>
                  <span className="text-[10px] block opacity-90">Free Review</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedService('blueprint')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                    selectedService === 'blueprint'
                      ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-sm'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="block font-bold">$1,750 Blueprint</span>
                  <span className="text-[10px] block opacity-90">Full Architecture</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedService('implementation')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                    selectedService === 'implementation'
                      ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-sm'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="block font-bold">DFY Recovery</span>
                  <span className="text-[10px] block opacity-90">Implementation</span>
                </button>
              </div>
            </div>

            {/* IMPORTANT: UPDATE THE ACTION ATTRIBUTE TO YOUR REAL ENDPOINT BEFORE LAUNCH */}
            <form action="" onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
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
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@realty.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Direct Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Brokerage &amp; Market
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Compass · Austin, TX"
                    value={formData.brokerage}
                    onChange={(e) => setFormData({ ...formData, brokerage: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary CRM Platform
                  </label>
                  <select
                    value={formData.crm}
                    onChange={(e) => setFormData({ ...formData, crm: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Follow Up Boss">Follow Up Boss</option>
                    <option value="kvCORE">kvCORE</option>
                    <option value="Lofty / Chime">Lofty / Chime</option>
                    <option value="Brivity">Brivity</option>
                    <option value="Sierra Interactive">Sierra Interactive</option>
                    <option value="HubSpot / Custom">HubSpot / Custom</option>
                    <option value="Spreadsheet / Cell">Spreadsheet / Phone</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Approximate Database Size (e.g. 500 leads)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 850 contacts in Follow Up Boss"
                  value={formData.databaseSizeOrAddress}
                  onChange={(e) => setFormData({ ...formData, databaseSizeOrAddress: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Staging Request...' : 'Get My Free Pipeline Snapshot →'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Strictly confidential · We do not share or resell contact information.
              </p>
            </form>
          </div>
        ) : (
          /* Step 2: Clear Staging / Integration Status Review */
          <div className="space-y-5 text-left animate-in fade-in duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Snapshot Request Captured
                </h3>
                <p className="text-xs text-slate-400">
                  Review your staged diagnostic submission details
                </p>
              </div>
            </div>

            {/* Informative Connection Status Callout per instructions */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs text-amber-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Integration Notice: Production Webhook Pending</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                The user interface and validation are complete. To automatically route requests into your CRM (Follow Up Boss, Zapier, or HubSpot) or open a live Calendly scheduler, attach your live webhook or calendar URL in the application configuration.
              </p>
            </div>

            {/* Staged Data Summary Card */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 text-xs text-slate-300 space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-bold pb-1 border-b border-slate-800">
                Staged Request Details:
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div><span className="text-slate-500">Service:</span> <span className="text-white font-medium">{selectedService}</span></div>
                <div><span className="text-slate-500">Agent:</span> <span className="text-white font-medium">{formData.fullName}</span></div>
                <div><span className="text-slate-500">Email:</span> <span className="text-white font-medium">{formData.email}</span></div>
                <div><span className="text-slate-500">Phone:</span> <span className="text-white font-medium">{formData.phone}</span></div>
                <div><span className="text-slate-500">CRM:</span> <span className="text-white font-medium">{formData.crm}</span></div>
                <div><span className="text-slate-500">Scope:</span> <span className="text-white font-medium">{formData.databaseSizeOrAddress || 'Standard'}</span></div>
              </div>
            </div>

            {/* Action Buttons: Copy payload or direct email dispatch */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleCopyStagedData}
                className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
              >
                <Copy className="w-4 h-4 text-amber-400" />
                <span>{copiedData ? 'Copied to Clipboard!' : 'Copy Request Payload'}</span>
              </button>

              <button
                type="button"
                onClick={handleMailtoDispatch}
                className="flex-1 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Dispatch via Email Client</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
