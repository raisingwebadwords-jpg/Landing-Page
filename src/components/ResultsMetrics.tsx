import { TrendingUp, BarChart2, Sparkles, CheckCircle2, ArrowUpRight, Clock, ShieldAlert } from 'lucide-react';

export function ResultsMetrics() {
  const metrics = [
    { label: 'Organic Visibility', value: '+68%', subtitle: 'Across traditional Google & Bing high-intent terms', color: 'from-blue-400 to-cyan-400' },
    { label: 'Featured Snippets', value: '+42%', subtitle: 'Zero-click answer boxes captured through schema', color: 'from-cyan-400 to-teal-400' },
    { label: 'AI Mentions', value: '+35%', subtitle: 'Direct citations across ChatGPT & Perplexity queries', color: 'from-purple-400 to-pink-400' },
    { label: 'Content Visibility', value: '+74%', subtitle: 'Topical entity coverage indexing improvement', color: 'from-indigo-400 to-cyan-400' },
    { label: 'Qualified Leads', value: '+51%', subtitle: 'High-intent demo requests & inbound conversion lift', color: 'from-emerald-400 to-cyan-400' }
  ];

  return (
    <section id="results" className="py-24 relative bg-[#e6f1fd] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold shadow-sm">
            <BarChart2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Demonstration Metrics</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Search Visibility to AI Visibility
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            When your brand is optimized across traditional Google algorithms, structured answer engines, and generative LLM models, the performance compounding is measurable.
          </p>
        </div>

        {/* 5-Metric Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl bg-white border border-sky-200 hover:border-blue-400 p-5 shadow-xl shadow-sky-950/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>METRIC</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-blue-700 group-hover:text-indigo-600 transition-all">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1.5">
                  {m.label}
                </div>
              </div>

              <div className="text-[11px] text-slate-600 mt-4 pt-3 border-t border-slate-100 line-clamp-2 font-normal">
                {m.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Representative Enterprise Case Study Mockup */}
        <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-8 shadow-xl shadow-sky-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-bold">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>6-MONTH RETROSPECTIVE BENCHMARK</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Enterprise Cloud Infrastructure Provider
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                A high-growth B2B enterprise with stagnant organic search traffic deployed our three-way SEO + AEO + GEO framework. Within two quarters, their entity architecture captured 41 new featured snippets and secured regular unprompted brand citations across commercial queries in ChatGPT and Perplexity.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-2">
              <div className="text-xs font-mono text-slate-600 font-medium">Total Commercial Inquiries</div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-blue-700">
                +148% Year-over-Year
              </div>
              <div className="text-[11px] text-emerald-700 font-mono font-bold">
                Combined Traditional & AI Referral Traffic
              </div>
            </div>

          </div>
        </div>

        {/* Mandatory Transparency Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 font-mono max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Illustrative metrics for demonstration. Actual results vary significantly by business model, market maturity, competitive density, and implementation speed. We do not make guaranteed-result claims.
          </p>
        </div>

      </div>
    </section>
  );
}
