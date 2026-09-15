import { Globe, Bot, Sparkles, Network, ExternalLink } from 'lucide-react';

export function PlatformsGrid() {
  const platforms = [
    {
      name: 'Google Organic',
      type: 'Traditional SERP & Maps',
      iconText: 'G',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      description: 'Classic algorithmic indexing, keyword ranking, and local map pack visibility.',
      share: 'Search Engine Bedrock'
    },
    {
      name: 'Google AI Overviews',
      type: 'Synthesized Search',
      iconText: 'AIO',
      color: 'border-pink-500/40 text-pink-400 bg-pink-500/10',
      description: 'Automated Gemini-driven direct answer summaries dominating zero-click real estate.',
      share: 'Prime SERP Placement'
    },
    {
      name: 'OpenAI ChatGPT / SearchGPT',
      type: 'Generative Conversation',
      iconText: 'GPT',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      description: 'Web-connected real-time search delivering direct brand recommendations with source links.',
      share: 'High-Intent AI Assistant'
    },
    {
      name: 'Perplexity AI',
      type: 'Conversational Answer Engine',
      iconText: 'PRX',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      description: 'Direct research engine relying on authoritative footnotes and verified web entities.',
      share: 'Rapidly Growing B2B Engine'
    },
    {
      name: 'Google Gemini',
      type: 'Multimodal Intelligence',
      iconText: 'GEM',
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      description: 'Unified ecosystem across Android, Workspace, and web-scale multimodal search queries.',
      share: 'Deep Google Knowledge Graph'
    },
    {
      name: 'Anthropic Claude',
      type: 'Nuanced Reasoning LLM',
      iconText: 'CLD',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      description: 'In-depth commercial and technical analysis favored by technical and enterprise buyers.',
      share: 'High-Nuance B2B Evaluations'
    },
    {
      name: 'Microsoft Copilot',
      type: 'Enterprise Search Ecosystem',
      iconText: 'COP',
      color: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
      description: 'Seamless integration into Bing, Windows 11, and Microsoft 365 enterprise workflows.',
      share: 'Global Enterprise Footprint'
    }
  ];

  return (
    <section id="platforms" className="py-24 relative bg-[#edf5fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Network className="w-3.5 h-3.5 text-blue-600" />
            <span>Multi-Engine Coverage</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for the New Search Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            One visibility strategy across the platforms your customers increasingly use to discover information.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl bg-white border border-sky-200 hover:border-blue-400 p-5 shadow-lg shadow-sky-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-mono font-bold text-xs ${p.color}`}>
                    {p.iconText}
                  </div>
                  <span className="text-[10px] font-mono text-blue-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-semibold">
                    {p.type}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">
                  {p.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Role:</span>
                <span className="text-slate-800 font-semibold">{p.share}</span>
              </div>
            </div>
          ))}

          {/* Unified Strategy Card filling the 8th slot */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 border-2 border-white p-5 shadow-xl text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-200 font-bold mb-3">
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>UNIFIED ARCHITECTURE</span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">
                All 7 Platforms, 1 Strategic Core
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed font-normal">
                Rather than managing disjointed campaigns, our entity schema fuels traditional crawlers and modern LLM extractors simultaneously.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/20 text-[10px] font-mono text-sky-200 font-medium">
              *Full compliance with webmaster & LLM retrieval guidelines.
            </div>
          </div>
        </div>

        {/* Disclaimer below grid */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Nexus Search AI is an independent optimization consultancy. Product names, logos, and brands are property of their respective owners. We do not claim official partnership with or guaranteed placement in any specific algorithmic model.
          </p>
        </div>

      </div>
    </section>
  );
}
