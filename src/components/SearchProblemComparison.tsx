import { ArrowDown, AlertCircle, Sparkles, CheckCircle2, XCircle, ArrowRight, Zap } from 'lucide-react';

export function SearchProblemComparison() {
  return (
    <section id="search-problem-section" className="py-20 relative bg-[#ebf4fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-mono font-bold shadow-sm">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>The Generative Search Shift</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Search Has Changed.
          </h2>
          
          <p className="text-lg text-blue-700 font-bold font-display">
            &ldquo;Ranking on Google is no longer the entire search strategy.&rdquo;
          </p>
          
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Search behavior has undergone its biggest evolution in 25 years. Users are migrating from scanning pages of ten blue links to conversing with AI engines that synthesize answers and recommend brands directly.
          </p>
        </div>

        {/* Side-by-Side Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: OLD SEARCH */}
          <div className="rounded-2xl bg-white/90 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-md hover:border-slate-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-300" />
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">The 2000s–2022 Paradigm</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Traditional Search
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                  Declining Organic CTR
                </span>
              </div>

              {/* Step Sequence Flow */}
              <div className="my-8 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 text-xs font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono font-semibold">STEP 01</div>
                    <div className="text-sm font-bold text-slate-800">User Types Isolated Keyword Query</div>
                  </div>
                </div>

                <div className="flex justify-center text-slate-400 py-0.5">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 text-xs font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono font-semibold">STEP 02</div>
                    <div className="text-sm font-bold text-slate-800">Google Computes Keyword Index</div>
                  </div>
                </div>

                <div className="flex justify-center text-slate-400 py-0.5">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 text-xs font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono font-semibold">STEP 03</div>
                    <div className="text-sm font-bold text-slate-800">10 Blue Links + Sponsored Ads Displayed</div>
                  </div>
                </div>

                <div className="flex justify-center text-slate-400 py-0.5">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 text-xs font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono font-semibold">STEP 04</div>
                    <div className="text-sm font-bold text-slate-800">User Clicks Link & Browses Multiple Sites</div>
                  </div>
                </div>
              </div>

              {/* Limitations List */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>58%+ of searches now end without a click (zero-click searches).</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Sponsored ads and AI overviews push organic links below the fold.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Keywords alone cannot convey deep semantic brand authority.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono font-medium">
              STATUS: Necessary baseline, but incomplete on its own.
            </div>
          </div>

          {/* RIGHT: AI SEARCH (MODERN) */}
          <div className="rounded-2xl bg-white border-2 border-sky-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-sky-950/10 group hover:border-blue-500 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">The 2026 AI Reality</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1 flex items-center gap-2">
                    AI-Powered Search
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-100 text-sky-800 border border-sky-300 font-bold">
                  High-Intent Decision Point
                </span>
              </div>

              {/* Step Sequence Flow */}
              <div className="my-8 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-50/70 border border-sky-200">
                  <div className="w-8 h-8 rounded-lg bg-sky-200 flex items-center justify-center text-blue-800 text-xs font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <div className="text-xs text-blue-700 font-mono font-bold">STEP 01</div>
                    <div className="text-sm font-bold text-slate-900">Complex Conversational Query or Intent Prompt</div>
                  </div>
                </div>

                <div className="flex justify-center text-blue-500 py-0.5">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-50/70 border border-sky-200">
                  <div className="w-8 h-8 rounded-lg bg-cyan-200 flex items-center justify-center text-cyan-800 text-xs font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <div className="text-xs text-cyan-700 font-mono font-bold">STEP 02</div>
                    <div className="text-sm font-bold text-slate-900">AI Engine Scans Web Entities & Knowledge Graphs</div>
                  </div>
                </div>

                <div className="flex justify-center text-cyan-500 py-0.5">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/70 border border-purple-200">
                  <div className="w-8 h-8 rounded-lg bg-purple-200 flex items-center justify-center text-purple-800 text-xs font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <div className="text-xs text-purple-700 font-mono font-bold">STEP 03</div>
                    <div className="text-sm font-bold text-slate-900">Instant Synthesized Answer + Brand Recommendations</div>
                  </div>
                </div>

                <div className="flex justify-center text-purple-500 py-0.5">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-900 text-xs font-extrabold shrink-0 shadow-sm">
                    ★
                  </div>
                  <div>
                    <div className="text-xs text-emerald-300 font-mono font-bold">OUTCOME</div>
                    <div className="text-sm font-bold text-white">Your Brand Cited as Top Recommended Solution</div>
                  </div>
                </div>
              </div>

              {/* Competitive Advantages List */}
              <div className="space-y-2 pt-4 border-t border-sky-100">
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Users receive instant answers and trust cited expert recommendations.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Referrals from AI tools convert at significantly higher intent levels.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Captures visibility in ChatGPT, Perplexity, Claude, and AI Overviews.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between text-xs text-blue-800 font-mono">
              <span className="font-bold">STATUS: The new commercial frontier.</span>
              <span className="flex items-center gap-1 font-semibold text-blue-900">
                Requires AEO + GEO <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
