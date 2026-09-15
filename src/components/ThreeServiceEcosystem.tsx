import { useState } from 'react';
import { Search, Bot, Network, Sparkles, Check, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

export function ThreeServiceEcosystem() {
  const [activeTab, setActiveTab] = useState<'seo' | 'aeo' | 'geo'>('aeo');

  const services = {
    seo: {
      title: 'SEO — Search Engine Optimization',
      tagline: 'Get Discovered',
      subtitle: 'Dominate traditional search results across desktop and mobile',
      description: 'The mathematical bedrock of organic search. We engineer technical health, high-intent keyword strategies, authoritative backlinks, and Core Web Vitals to win top rankings on Google and Bing.',
      color: 'from-blue-500 to-cyan-500',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      icon: Search,
      deliverables: [
        'Enterprise Technical Audit & Crawlability',
        'High-Intent Keyword Architecture',
        'Topical Entity Content Clusters',
        'High-Authority Digital PR & Backlinks',
        'Core Web Vitals & Speed Optimization',
        'Local Google Business Profile Domination'
      ],
      target: 'Traditional Google & Bing Organic Search'
    },
    aeo: {
      title: 'AEO — Answer Engine Optimization',
      tagline: 'Get Answered',
      subtitle: 'Position your business directly inside extracted answer boxes and AI summaries',
      description: 'Modern answer engines do not want ten links; they want one accurate answer. We format your website into structured knowledge objects, FAQ schemas, and direct-answer modules so AI engines extract your content.',
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      icon: Bot,
      deliverables: [
        'Rich JSON-LD Schema Architecture (Org, Product, FAQ, HowTo)',
        'Conversational Question & Answer Structuring',
        'Zero-Click Featured Snippet Extraction Optimization',
        'Google AI Overviews (SGE) Synthesis Alignment',
        'Speakable Content & Voice Search Integration',
        'Knowledge Graph & Entity Verification'
      ],
      target: 'Google AI Overviews, Featured Snippets, Voice Assistants'
    },
    geo: {
      title: 'GEO — Generative Engine Optimization',
      tagline: 'Get Recommended',
      subtitle: 'Train large language models to cite and recommend your brand to buyers',
      description: 'When potential clients ask ChatGPT, Claude, Gemini, or Perplexity "Which software/agency should I choose?", GEO ensures your brand is prominently recommended, cited with verified sources, and backed by high entity authority.',
      color: 'from-purple-500 to-cyan-400',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      icon: Network,
      deliverables: [
        'LLM Corpus Citation & Authority Building',
        'Cross-Platform Entity Co-occurrence Optimization',
        'Perplexity & SearchGPT Direct Source Optimization',
        'Brand Sentiment & Recommendation Shaping',
        'Topical Knowledge Corpus Ingestion Engineering',
        'Continuous AI Visibility Score Monitoring'
      ],
      target: 'ChatGPT, Gemini, Claude, Perplexity, Copilot'
    }
  };

  return (
    <section id="ecosystem" className="py-24 relative bg-[#edf5fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>The Unified Triad</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Strategy. Three Search Engines.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Search has fragmented into three distinct surfaces. Our unified methodology connects all three into a single, high-compounding organic growth engine.
          </p>
        </div>

        {/* Interactive Visual Ecosystem: Central Hub + Three Connected Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Animated Interconnected Ecosystem Diagram (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-white/95 border border-sky-200 p-4 shadow-xl shadow-sky-950/5 flex items-center justify-center">
              
              {/* Connecting triangular SVG tracks */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 380">
                <defs>
                  <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Triangular interconnecting lines */}
                <polygon
                  points="190,60 300,290 80,290"
                  fill="rgba(14, 165, 233, 0.04)"
                  stroke="url(#triGrad)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <line x1="190" y1="190" x2="190" y2="60" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="190" y1="190" x2="80" y2="290" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="190" y1="190" x2="300" y2="290" stroke="#9333ea" strokeWidth="1.5" strokeOpacity="0.5" />

                {/* Traveling pulse on triangle perimeter */}
                <circle r="3.5" fill="#0284c7">
                  <animateMotion
                    path="M 190 60 L 300 290 L 80 290 Z"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              {/* Central Core: AI SEARCH VISIBILITY */}
              <div className="z-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-700 via-sky-600 to-indigo-700 border-2 border-white p-2 shadow-xl shadow-blue-500/20 flex flex-col items-center justify-center text-center text-white">
                <Sparkles className="w-5 h-5 text-white animate-spin-slow mb-1" />
                <span className="text-[10px] font-mono text-sky-200 font-bold uppercase tracking-wider">
                  CENTRAL HUB
                </span>
                <span className="text-xs font-display font-extrabold text-white leading-tight mt-0.5">
                  AI SEARCH VISIBILITY
                </span>
              </div>

              {/* Node 1: SEO (Top) */}
              <button
                onClick={() => setActiveTab('seo')}
                className={`absolute top-4 left-1/2 -translate-x-1/2 z-20 px-3.5 py-2 rounded-xl text-center transition-all cursor-pointer ${
                  activeTab === 'seo'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110 border border-blue-300'
                    : 'bg-white text-slate-700 border border-sky-200 hover:border-blue-400 shadow-sm'
                }`}
              >
                <div className="text-xs font-bold font-display flex items-center gap-1">
                  <Search className={`w-3.5 h-3.5 ${activeTab === 'seo' ? 'text-white' : 'text-blue-600'}`} />
                  SEO
                </div>
                <div className={`text-[9px] font-mono font-medium ${activeTab === 'seo' ? 'text-blue-100' : 'text-slate-500'}`}>Get Discovered</div>
              </button>

              {/* Node 2: AEO (Bottom Left) */}
              <button
                onClick={() => setActiveTab('aeo')}
                className={`absolute bottom-4 left-4 z-20 px-3.5 py-2 rounded-xl text-center transition-all cursor-pointer ${
                  activeTab === 'aeo'
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 scale-110 border border-cyan-300'
                    : 'bg-white text-slate-700 border border-sky-200 hover:border-cyan-400 shadow-sm'
                }`}
              >
                <div className="text-xs font-bold font-display flex items-center gap-1">
                  <Bot className={`w-3.5 h-3.5 ${activeTab === 'aeo' ? 'text-white' : 'text-cyan-600'}`} />
                  AEO
                </div>
                <div className={`text-[9px] font-mono font-medium ${activeTab === 'aeo' ? 'text-cyan-100' : 'text-slate-500'}`}>Get Answered</div>
              </button>

              {/* Node 3: GEO (Bottom Right) */}
              <button
                onClick={() => setActiveTab('geo')}
                className={`absolute bottom-4 right-4 z-20 px-3.5 py-2 rounded-xl text-center transition-all cursor-pointer ${
                  activeTab === 'geo'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-110 border border-purple-300'
                    : 'bg-white text-slate-700 border border-sky-200 hover:border-purple-400 shadow-sm'
                }`}
              >
                <div className="text-xs font-bold font-display flex items-center gap-1">
                  <Network className={`w-3.5 h-3.5 ${activeTab === 'geo' ? 'text-white' : 'text-purple-600'}`} />
                  GEO
                </div>
                <div className={`text-[9px] font-mono font-medium ${activeTab === 'geo' ? 'text-purple-100' : 'text-slate-500'}`}>Get Recommended</div>
              </button>

            </div>

            <div className="mt-4 text-center">
              <span className="text-xs text-slate-600 font-mono font-medium">
                Click any node above to explore that service layer
              </span>
            </div>
          </div>

          {/* RIGHT: Active Tab Detailed Card (7 Cols) */}
          <div className="lg:col-span-7">
            {/* Quick Switch Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-sky-200 shadow-sm mb-6 max-w-md">
              {(['seo', 'aeo', 'geo'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase font-mono tracking-wider transition-all cursor-pointer ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-sky-50'
                  }`}
                >
                  {key.toUpperCase()} • {services[key].tagline}
                </button>
              ))}
            </div>

            {/* Service Detail Container */}
            <div className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-8 shadow-xl shadow-sky-950/5 relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-100 text-sky-800 border border-sky-300">
                  {services[activeTab].tagline}
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  Target: <strong className="text-slate-800 font-bold">{services[activeTab].target}</strong>
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {services[activeTab].title}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {services[activeTab].description}
              </p>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-blue-700 mb-4 font-bold">
                  Core Implementation Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeTab].deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <div className="w-4 h-4 rounded-full bg-sky-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`#${activeTab}`}
                  className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 group"
                >
                  <span>Deep dive into {activeTab.toUpperCase()} optimization</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <span className="text-[11px] text-slate-500 font-mono">
                  Integrated with Google + OpenAI + Anthropic + Perplexity
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
