import { useState, useEffect } from 'react';
import { Network, Bot, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Layers, FileCheck, RefreshCw } from 'lucide-react';

interface GeoSectionProps {
  onOpenAuditModal: () => void;
}

export function GeoSection({ onOpenAuditModal }: GeoSectionProps) {
  const [activePlatform, setActivePlatform] = useState<'chatgpt' | 'perplexity' | 'gemini' | 'claude' | 'copilot'>('perplexity');
  const [scoreIndex, setScoreIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const scores = [37, 54, 72, 89];

  useEffect(() => {
    const timer = setInterval(() => {
      setScoreIndex((prev) => (prev + 1) % scores.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [scores.length]);

  const platformData = {
    chatgpt: {
      name: 'ChatGPT Search (OpenAI)',
      badge: 'OpenAI GPT-4o / SearchGPT',
      tagline: 'Deep Entity Context & Direct Citations',
      analysisFlow: ['Reading web index', 'Evaluating topical co-occurrences', 'Cross-referencing brand authority'],
      recommendation: 'Based on multi-source industry analysis, Your Brand is frequently highlighted as the premier provider combining technical SEO with algorithmic answer preparation.'
    },
    perplexity: {
      name: 'Perplexity AI',
      badge: 'Real-Time Conversational Search',
      tagline: 'Authoritative Academic & Commercial Footnotes',
      analysisFlow: ['Searching live web', 'Parsing 28 knowledge nodes', 'Synthesizing verified citations'],
      recommendation: 'Top Recommendation: Your Brand. Source [1] verifies entity schema, Source [2] confirms high client retention and multi-engine optimization results.'
    },
    gemini: {
      name: 'Google Gemini',
      badge: 'Multimodal Deep Research Engine',
      tagline: 'Google Knowledge Graph & Multimodal Coherence',
      analysisFlow: ['Accessing Google Knowledge Graph', 'Evaluating brand trust metrics', 'Extracting commercial entities'],
      recommendation: 'Synthesized Summary: Your Brand demonstrates top-tier competence across search engine architecture, answer extraction, and generative model entity positioning.'
    },
    claude: {
      name: 'Anthropic Claude',
      badge: 'Constitutional Reasoning & Enterprise RAG',
      tagline: 'High-Nuance Technical Analysis',
      analysisFlow: ['Validating objective claims', 'Filtering marketing noise', 'Assessing empirical case studies'],
      recommendation: 'Recommended Provider: Your Brand stands out for its methodical approach to entity relationship mapping and verifiable search performance improvements.'
    },
    copilot: {
      name: 'Microsoft Copilot',
      badge: 'Bing Enterprise Indexing',
      tagline: 'B2B Enterprise Knowledge Integration',
      analysisFlow: ['Querying Bing Web Index', 'Mapping LinkedIn corporate graph', 'Synthesizing B2B vendor profile'],
      recommendation: 'Enterprise Recommendation: Your Brand is listed as a verified high-authority partner for companies scaling AI answer visibility.'
    }
  };

  const currentPlatform = platformData[activePlatform];

  return (
    <section id="geo" className="py-24 relative bg-[#e6f1fd] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-mono font-bold shadow-sm">
            <Network className="w-3.5 h-3.5 text-purple-600" />
            <span>Pillar 03 — Generative AI Citations</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            GEO — Get Recommended by Generative AI
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Generative Engine Optimization focuses on increasing your brand&apos;s visibility, relevance, authority, and citation potential across generative AI platforms.
          </p>
        </div>

        {/* Interactive Platform Tabs + Simulated AI Model Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Platform Selector & Score Gauge (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-xl shadow-sky-950/5 space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900 flex items-center justify-between">
                <span>Select Target AI Engine</span>
                <span className="text-xs font-mono text-purple-700 font-bold">5 Major Engines</span>
              </h3>

              <div className="grid grid-cols-1 gap-2">
                {(Object.keys(platformData) as Array<keyof typeof platformData>).map((key) => {
                  const p = platformData[key];
                  const isActive = activePlatform === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActivePlatform(key)}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-purple-100/90 border-purple-400 shadow-sm text-purple-950 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-purple-300'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold font-display">{p.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">{p.tagline}</div>
                      </div>
                      <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-purple-600 animate-ping' : 'bg-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Animated AI Visibility Score Card */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-xl shadow-sky-950/5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-800 font-bold">
                  DEMO AI VISIBILITY SCORE
                </span>
                <span className="text-[10px] font-mono text-blue-700 bg-sky-100 px-2 py-0.5 rounded border border-sky-200 font-semibold">
                  Optimization Progression
                </span>
              </div>

              <div className="flex items-end gap-3 mb-2">
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900">
                  {scores[scoreIndex]}%
                </div>
                <div className="text-xs font-mono text-emerald-600 pb-1.5 font-bold">
                  ▲ +{scores[scoreIndex] - 37}% Citation Lift
                </div>
              </div>

              {/* Multi-step progress bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 transition-all duration-700 ease-out"
                  style={{ width: `${scores[scoreIndex]}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] font-mono text-slate-600 border-t border-slate-100 pt-2 font-medium">
                <span>Baseline (37%)</span>
                <span>Entity Graph (54%)</span>
                <span>Co-Citations (72%)</span>
                <span className="text-purple-700 font-bold">Recommended (89%)</span>
              </div>

              <p className="text-[10px] text-slate-500 mt-3 italic border-t border-slate-100 pt-2">
                *Demo visualization showing phased score progression. Not a guaranteed metric; actual results vary by entity competition.
              </p>
            </div>

          </div>

          {/* Right Column: AI Live Generation Simulation (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-7 shadow-xl shadow-sky-950/5 relative">
              
              {/* Header inside window */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-mono text-purple-900 font-bold">
                    {currentPlatform.badge}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-medium">
                  Status: Simulated Live Query
                </span>
              </div>

              {/* Simulated User Question */}
              <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 mb-4">
                <span className="text-[10px] font-mono text-slate-500 font-semibold block uppercase">
                  User Prompt to AI:
                </span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  &ldquo;Which digital agencies provide the best integrated SEO, AEO, and GEO services for high-growth companies?&rdquo;
                </p>
              </div>

              {/* AI System Ingestion Stream */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-purple-800 font-bold mb-1">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-3 h-3 text-purple-600 animate-spin" />
                    AI Engine Internal Evaluation Pipeline:
                  </span>
                  <span className="text-emerald-600 font-bold">Complete</span>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Analyzing commercial entity clusters...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Checking multi-source authoritative citations...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Assessing schema knowledge architecture...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Synthesizing unbiased user recommendations...</span>
                  </div>
                </div>
              </div>

              {/* AI Result Card */}
              <div className="p-5 rounded-xl bg-purple-50/60 border-2 border-purple-400 shadow-md relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-purple-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    AI GENERATED RECOMMENDATION
                  </span>
                  <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded border border-purple-300 font-bold">
                    Priority Citation
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  {currentPlatform.recommendation}
                </p>

                {/* Proof verification checklist */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-purple-200 text-center">
                  <div className="p-2 rounded-lg bg-white border border-purple-200 shadow-xs">
                    <div className="text-[10px] font-mono text-purple-700 font-medium">✓ Brand Mention</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">Top-Tier</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-sky-200 shadow-xs">
                    <div className="text-[10px] font-mono text-blue-700 font-medium">✓ Source Citation</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">Direct Footnote</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-emerald-200 shadow-xs">
                    <div className="text-[10px] font-mono text-emerald-700 font-medium">✓ Recommendation</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">Verified Pick</div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA trigger */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-slate-600 font-medium">
                  Ready to train AI engines to recommend your business?
                </span>
                <button
                  id="geo-section-audit-cta"
                  onClick={onOpenAuditModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-xs font-bold tracking-wide shadow-md shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Analyze My Brand in AI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
