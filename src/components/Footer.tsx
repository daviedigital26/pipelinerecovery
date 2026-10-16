import { RealeLogo } from './RealeLogo';

interface FooterProps {
  onSelectRoute?: (slug: string) => void;
  onOpenAudit: () => void;
}

export function Footer({ onSelectRoute, onOpenAudit }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050a14] text-slate-400 py-12 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-2">
            <RealeLogo variant="reversed" onClick={() => onSelectRoute?.('')} />
            <p className="text-xs text-slate-300 font-semibold max-w-md pt-1">
              Better conversations. Better follow-up. Clearer offers.
            </p>
            <p className="text-xs text-slate-400 max-w-md">
              We help real estate teams fix missed follow-up and plan the next step.
            </p>
          </div>

          <div className="text-right space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#4F5DFF] font-semibold">
              Services first. Software second. Systems always.
            </div>
            <button
              onClick={onOpenAudit}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              Get My Free Pipeline Audit
            </button>
          </div>
        </div>

        {/* Navigation & Legal Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              onClick={() => onSelectRoute?.('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onSelectRoute?.('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => onSelectRoute?.('faq')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQs
            </button>
            <button
              onClick={() => onSelectRoute?.('resources')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Resources
            </button>
            <button
              onClick={() => onSelectRoute?.('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => onSelectRoute?.('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => onSelectRoute?.('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Service Disclaimer
            </button>
            <button
              onClick={() => onSelectRoute?.('preferences')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Email Preferences
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            &copy; {currentYear} Reale Revenue Systems.
          </p>
        </div>

        {/* Required Mandatory Disclaimer */}
        <div className="pt-2 text-[11px] text-slate-400 leading-relaxed border-t border-slate-800/50">
          Results depend on your records, team, and market. We do not promise replies, appointments, or sales. Use of third-party CRM trademarks (Follow Up Boss, kvCORE, Lofty, BoomTown, Sierra Interactive, HubSpot) is descriptive of compatibility and does not imply endorsement or official partnership.
        </div>

      </div>
    </footer>
  );
}
