import { Shield, Sparkles, Award, Globe2, Network, Cpu } from 'lucide-react';

export function TrustBar() {
  const platforms = [
    { name: 'Google Search & AI Overviews', tag: 'Traditional & SGE' },
    { name: 'OpenAI ChatGPT & SearchGPT', tag: 'Generative Synthesis' },
    { name: 'Perplexity AI', tag: 'Direct Citations' },
    { name: 'Google Gemini', tag: 'Multimodal AI' },
    { name: 'Anthropic Claude', tag: 'Knowledge Corpus' },
    { name: 'Microsoft Copilot', tag: 'Enterprise Bing Graph' }
  ];

  const metrics = [
    { value: '12+ Years', label: 'Search Optimization Experience' },
    { value: '3,800+', label: 'Target Commercial Entities Monitored' },
    { value: '94.6%', label: 'Average Schema Accuracy Post-Audit' },
    { value: '3-Way', label: 'Unified SEO + AEO + GEO Strategy' }
  ];

  return (
    <section id="trust-bar-section" className="border-y border-sky-200 bg-[#e4f0fd] py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core pillars label */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 pb-6 text-xs font-mono uppercase tracking-widest text-slate-600">
          <span className="text-blue-700 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> SEO
          </span>
          <span className="text-sky-300">•</span>
          <span className="text-cyan-700 font-bold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" /> AEO
          </span>
          <span className="text-sky-300">•</span>
          <span className="text-purple-700 font-bold flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5" /> GEO
          </span>
          <span className="text-sky-300">•</span>
          <span className="font-semibold text-slate-700">Technical SEO</span>
          <span className="text-sky-300">•</span>
          <span className="font-semibold text-slate-700">Entity Graph Architecture</span>
          <span className="text-sky-300">•</span>
          <span className="font-semibold text-slate-700">AI Search Visibility</span>
        </div>

        {/* Brand / Engine Network Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 pb-6 border-t border-sky-200/60">
          {platforms.map((item) => (
            <div
              key={item.name}
              className="p-3 rounded-xl bg-white/90 border border-sky-200 text-center hover:border-blue-400 transition-colors shadow-sm"
            >
              <div className="text-xs font-bold text-slate-900 truncate">
                {item.name}
              </div>
              <div className="text-[10px] text-blue-600 font-mono font-semibold mt-0.5">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Credibility Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-sky-200/60 text-center">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-xl sm:text-2xl font-extrabold font-display tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700">
                  {m.value}
                </span>
              </div>
              <div className="text-xs font-medium text-slate-600">
                {m.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
