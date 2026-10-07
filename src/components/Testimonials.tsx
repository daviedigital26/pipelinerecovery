import { Star, Quote, ArrowRight } from 'lucide-react';
import { realTestimonials } from '../data/samples';

interface TestimonialsProps {
  onOpenTrial: () => void;
}

export function Testimonials({ onOpenTrial }: TestimonialsProps) {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#0d1424] border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span>Loved by 1,400+ Realtors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Agents. Real Closings.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Read how regular agents use our content to sign more clients without spending all day on their phone.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                {/* Result Pill */}
                <div className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  ★ {t.result}
                </div>

                <Quote className="w-8 h-8 text-amber-400/40" />

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">
                    {t.brokerage} · {t.location}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded">
                  Verified Agent
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight Card with Closing Image */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="w-full sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
            <img
              src="/src/assets/images/agent_happy_closing_1791193974108.jpg"
              alt="Happy homebuyer couple receiving keys from real estate agent in kitchen"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-3 text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              The Secret of Top Producers
            </span>
            <h3 className="text-xl font-bold text-white">
              Consistent marketing is what makes people remember you.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When people are ready to buy or sell, they don&apos;t search Google. They call the realtor who has been showing up on their feed and in their inbox with helpful tips. Reale makes sure that realtor is always you.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                <span>Join Them — Try 14 Days Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
