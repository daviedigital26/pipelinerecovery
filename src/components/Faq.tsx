import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { faqs } from '../data/samples';

interface FaqProps {
  onOpenTrial: () => void;
}

export function Faq({ onOpenTrial }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#0d1424] border-b border-slate-800/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Plain Answers to Common Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No confusing legal terms. Just honest, simple answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA Box */}
        <div className="mt-12 text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
          <h3 className="text-lg font-bold text-white">Still have a question?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Try the free 14-day trial right now. You can look through all the posts, guides, and scripts yourself with zero risk.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Test It Out Free for 14 Days</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
