import { ShieldCheck, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenAuditModal: () => void;
}

export function WhyChooseUs({ onOpenAuditModal }: WhyChooseUsProps) {
  const differentiators = [
    { title: 'SEO Expertise', desc: 'Over a decade of solving complex search indexing, crawl architecture, and algorithm recovery.' },
    { title: 'AI Search Strategy', desc: 'First-mover proprietary frameworks addressing LLM training cycles and semantic retrieval.' },
    { title: 'AEO Implementation', desc: 'Engineered schemas and structured Q&As designed specifically for zero-click snippet capture.' },
    { title: 'GEO Strategy', desc: 'Cross-corpus citation engineering to ensure top recommendations in ChatGPT, Perplexity, and Claude.' },
    { title: 'Technical Optimization', desc: 'Hardened DOM rendering, Core Web Vitals excellence, and crawl budget efficiency.' },
    { title: 'Content & Entity Strategy', desc: 'Moving past superficial keywords to build authoritative, dense topical entity graphs.' },
    { title: 'Data-Driven Reporting', desc: 'Transparent multi-engine attribution tracking real rankings, AI mentions, and pipeline value.' },
    { title: 'Continuous Optimization', desc: 'Proactive algorithmic defense that adapts the moment search engines or LLM models update.' }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative bg-[#edf5fe] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Futuristic Shield / Neural Brain */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-white border border-sky-200 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl shadow-sky-950/5 overflow-hidden">
              
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-blue-400/5 pointer-events-none" />

              {/* Shield / Neural SVG graphic */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-100 border-2 border-blue-500 flex items-center justify-center p-3 shadow-xl mb-6 group">
                <ShieldCheck className="w-14 h-14 sm:w-16 sm:h-16 text-blue-600 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 rounded-full border border-blue-300 animate-ping opacity-25" />
              </div>

              <div className="relative z-10 space-y-2">
                <span className="text-xs font-mono text-blue-800 uppercase tracking-widest font-bold">
                  ENTERPRISE SEARCH DEFENSE
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                  The Algorithmic Moat
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto font-normal">
                  When your entity authority is encoded into knowledge graphs and citation corpora, competitor link-spam cannot displace you.
                </p>
              </div>

              {/* Bottom verification badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono text-emerald-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero AI Hallucination Architecture</span>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-mono font-bold shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-purple-600" />
                <span>Strategic Differentiation</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Don&apos;t Just Rank.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Become the Brand AI Understands.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Generic SEO agencies simply generate repetitive blog posts targeting vanity keywords. We build verified entity architectures that position your company as the authoritative answer for both Google and modern AI engines.
              </p>
            </div>

            {/* 8 Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-xl bg-white border border-sky-200 hover:border-blue-400 shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-display">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                      ✓
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 pl-6 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                id="why-choose-audit-cta"
                onClick={onOpenAuditModal}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Your Free Agency Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
