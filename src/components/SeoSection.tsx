import { useState, useEffect } from 'react';
import { Search, CheckCircle2, TrendingUp, ArrowUpRight, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface SeoSectionProps {
  onOpenAuditModal: () => void;
}

export function SeoSection({ onOpenAuditModal }: SeoSectionProps) {
  const [currentRank, setCurrentRank] = useState(18);
  const [rankIndex, setRankIndex] = useState(0);

  const rankSteps = [18, 11, 6, 3, 1];

  useEffect(() => {
    const timer = setInterval(() => {
      setRankIndex((prev) => {
        const next = (prev + 1) % rankSteps.length;
        setCurrentRank(rankSteps[next]);
        return next;
      });
    }, 2400);

    return () => clearInterval(timer);
  }, [rankSteps]);

  const checklist = [
    'Technical SEO & Crawl Architecture',
    'High-Intent Keyword Strategy',
    'On-Page Semantic Optimization',
    'Authoritative Content Strategy',
    'Strategic Internal Linking Graph',
    'High-Quality Authority Building',
    'Core Web Vitals & Speed Tuning',
    'Local SEO & Multi-Location Scaling',
    'Search Intent & Buyer Journey Mapping'
  ];

  return (
    <section id="seo" className="py-24 relative bg-[#e6f1fd] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-mono font-bold shadow-sm">
            <Search className="w-3.5 h-3.5 text-blue-600" />
            <span>Pillar 01 — Organic Search</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            SEO — Win Traditional Search
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            SEO helps your website become discoverable when customers search through traditional search engines.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Checklist + Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white/95 border border-sky-200 shadow-md space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Modern Organic Search Execution</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Traditional search still drives trillions of high-intent queries annually. We replace outdated keyword stuffing with entity-first technical optimization that satisfies both search spiders and human buyers.
              </p>

              {/* Animated Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-sky-50/70 border border-sky-200 text-xs text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                id="seo-section-audit-cta"
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Improve My Search Visibility</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-500 font-mono">
                *Illustrative progression. No search agency can guarantee specific algorithmic positions.
              </span>
            </div>
          </div>

          {/* Right Column: Google SERP Simulation with Dynamic Ranking Shift */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-sky-200 p-4 sm:p-6 shadow-xl shadow-sky-950/5 relative overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 ml-2 font-medium">Google Search Console Simulation</span>
                </div>

                {/* Animated Ranking Indicator */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-xs font-mono text-blue-800 font-semibold">
                    Target Position: <strong className="text-blue-950">#{currentRank}</strong>
                  </span>
                </div>
              </div>

              {/* Simulated Search Query Bar */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5">
                <Search className="w-4 h-4 text-blue-600" />
                <span className="text-slate-900 font-semibold">&ldquo;Best enterprise digital marketing agency&rdquo;</span>
                <span className="ml-auto text-[10px] font-mono text-slate-400 hidden sm:inline">About 14,200,000 results (0.28 sec)</span>
              </div>

              {/* SERP Results Stack */}
              <div className="space-y-3">
                
                {/* Result 1: YOUR BRAND */}
                <div className="p-4 rounded-xl bg-sky-50/70 border-2 border-blue-500 shadow-md relative transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-blue-700 font-mono font-medium">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                        G
                      </span>
                      <span>https://yourbrand.com › solutions › enterprise-seo</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white">
                      RANK #{currentRank}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1.5 hover:underline cursor-pointer flex items-center gap-1.5">
                    Your Brand — Top-Rated Enterprise SEO & AI Search Partner
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  </h4>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    Comprehensive digital visibility for modern brands. High-intent keyword acquisition, verified entity authority, direct snippet capture, and multi-engine optimization.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-sky-200 text-[10px] font-mono text-blue-800">
                    <span className="bg-white border border-sky-200 px-2 py-0.5 rounded font-medium">★ 4.9/5.0 Verified Score</span>
                    <span className="bg-white border border-sky-200 px-2 py-0.5 rounded font-medium">Sitelinks Enabled</span>
                    <span className="bg-white border border-sky-200 px-2 py-0.5 rounded font-medium">Rich Knowledge Snippet</span>
                  </div>
                </div>

                {/* Result 2: Generic Competitor */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 opacity-80">
                  <div className="text-[11px] text-slate-500 font-mono">
                    https://competitor-alpha.com › services
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    Competitor Alpha Marketing Solutions
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    Traditional digital agency providing standard keyword optimization and pay-per-click.
                  </div>
                </div>

                {/* Result 3: Generic Competitor */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 opacity-60">
                  <div className="text-[11px] text-slate-500 font-mono">
                    https://competitor-beta.com › agency
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    Competitor Beta Global Search Services
                  </div>
                </div>

              </div>

              {/* Dynamic progress note */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Algorithmic Signal Strength</span>
                <span className="text-blue-700 font-bold">98.4% Optimal Crawl Health</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
