import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenAuditModal: () => void;
}

export function StickyMobileCta({ onOpenAuditModal }: StickyMobileCtaProps) {
  return (
    <div
      id="sticky-mobile-cta-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#050b1d]/95 backdrop-blur-xl border-t border-cyan-500/30 shadow-2xl flex items-center justify-between gap-3"
    >
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-xs font-bold text-white truncate font-display">
            AI Search Visibility
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono truncate">
          Google + ChatGPT + Perplexity
        </span>
      </div>

      <button
        id="sticky-mobile-audit-btn"
        onClick={onOpenAuditModal}
        className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs tracking-wide shadow-md shadow-cyan-500/20 whitespace-nowrap flex items-center gap-1.5 shrink-0 active:scale-95 transition-transform"
      >
        <span>Get Free AI Audit</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
