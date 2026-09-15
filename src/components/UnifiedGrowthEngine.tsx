import { Search, Bot, Network, ArrowRight, ArrowDown, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

export function UnifiedGrowthEngine() {
  const layers = [
    {
      layer: 'Layer 01',
      service: 'SEO',
      phase: 'DISCOVERY',
      title: 'Search Engines Discover Your Website',
      description: 'Crawlers index your pages, assess technical health, and catalog your keyword topical footprint across traditional search databases.',
      color: 'border-blue-500/40 bg-blue-950/30 text-blue-400',
      badge: 'Crawl & Indexation',
      icon: Search
    },
    {
      layer: 'Layer 02',
      service: 'AEO',
      phase: 'UNDERSTANDING',
      title: 'Answer Engines Understand Your Expertise',
      description: 'Nested schema, entity relationships, and conversational Q&As allow AI models to synthesize zero-click answers and featured snippets directly.',
      color: 'border-cyan-500/40 bg-cyan-950/30 text-cyan-400',
      badge: 'Entity Structuring',
      icon: Bot
    },
    {
      layer: 'Layer 03',
      service: 'GEO',
      phase: 'RECOMMENDATION',
      title: 'Generative AI Recommends Your Brand',
      description: 'Cross-platform citations, knowledge corpus authority, and digital PR train LLMs to reference and advise users toward your company.',
      color: 'border-purple-500/40 bg-purple-950/30 text-purple-400',
      badge: 'LLM Citation & Trust',
      icon: Network
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#edf5fe] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Integrated Synergy</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Three Layers. One Growth Engine.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            When SEO, AEO, and GEO operate in isolation, value leaks at every seam. When united into a continuous flywheel, your digital authority becomes unassailable across every search channel.
          </p>
        </div>

        {/* The 3 Connected Layers Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {layers.map((l, index) => {
            const Icon = l.icon;
            return (
              <div
                key={l.layer}
                className="rounded-2xl bg-white border border-sky-200 hover:border-blue-400 p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-sky-950/5 group"
              >
                {/* Connecting arrow for desktop between cards */}
                {index < 2 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-sky-300 items-center justify-center text-blue-600 shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
                      {l.layer} • {l.service}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border border-sky-300 bg-sky-50 text-blue-800">
                      {l.phase}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {l.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {l.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Core Output:</span>
                  <span className="text-blue-700 font-bold">{l.badge}</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Unified Culmination Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 border-2 border-white shadow-xl text-center relative overflow-hidden text-white">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-sky-200 uppercase tracking-widest font-bold block">
              THE COMPOUND EFFECT
            </span>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              TRAFFIC + ANSWERS + AI VISIBILITY
            </div>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
              Capturing buyers wherever they search — in standard Google search results, in instant AI Overviews, or inside ChatGPT and Perplexity conversational recommendations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
