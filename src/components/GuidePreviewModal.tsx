import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Sparkles } from 'lucide-react';
import { sampleTemplates } from '../data/samples';

interface GuidePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
  agentName?: string;
  cityName?: string;
}

export function GuidePreviewModal({
  isOpen,
  onClose,
  onOpenTrial,
  agentName = 'Sarah Jenkins',
  cityName = 'Austin, TX',
}: GuidePreviewModalProps) {
  const guideData = sampleTemplates.find((t) => t.category === 'guide');
  const pages = guideData?.pages || [];
  const [currentPage, setCurrentPage] = useState(1);

  if (!isOpen) return null;

  const totalPages = pages.length + 2; // Cover + Content Pages + Back Cover

  const prev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const next = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">
              PDF Guide Flipbook
            </span>
            <span className="text-xs text-slate-400">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* The Page Container */}
        <div className="flex-1 overflow-y-auto min-h-[360px] bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
          {currentPage === 1 ? (
            /* Cover Page */
            <div className="text-center space-y-6 my-auto">
              <div className="aspect-[16/9] max-w-sm mx-auto rounded-xl overflow-hidden bg-slate-800 border border-slate-700 relative">
                <img
                  src="/src/assets/images/lead_magnet_showcase_1791193939766.jpg"
                  alt="Guide cover presentation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Official Seller Playbook
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  The {cityName} Home Seller Guide
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  How to prepare, price, and sell your property for top dollar in today&apos;s market.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                Prepared by <strong className="text-white">{agentName}</strong> · Licensed Real Estate Specialist
              </div>
            </div>
          ) : currentPage <= pages.length + 1 ? (
            /* Inside Page */
            (() => {
              const page = pages[currentPage - 2];
              return (
                <div className="space-y-6">
                  <div className="border-b border-slate-800 pb-3 flex justify-between items-center text-xs text-slate-400">
                    <span>The {cityName} Seller Playbook</span>
                    <span>Section 0{page.pageNumber}</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white">
                      {page.title}
                    </h4>

                    <div className="space-y-3">
                      {page.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                          <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Questions? Call {agentName} directly anytime.</span>
                    <span>Page {currentPage}</span>
                  </div>
                </div>
              );
            })()
          ) : (
            /* Back Cover */
            <div className="text-center space-y-6 my-auto">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/30">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Put Your Home on the Market?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  I offer a 100% free, no-obligation Home Valuation Report with recent sales on your specific street.
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 max-w-sm mx-auto text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white text-sm">{agentName}</div>
                <div>Your Trusted Neighborhood Advisor</div>
                <div className="text-amber-400 font-semibold pt-1">Call / Text: (512) 555-0194</div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center justify-between pt-4 mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenTrial();
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download All 12 Pages Free</span>
          </button>
        </div>

      </div>
    </div>
  );
}
