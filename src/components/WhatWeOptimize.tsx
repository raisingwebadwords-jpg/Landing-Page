import { useState } from 'react';
import { Layers, Sparkles, Database, Check, ArrowRight, Activity, Cpu } from 'lucide-react';

export function WhatWeOptimize() {
  const [selectedComponent, setSelectedComponent] = useState<number | null>(null);

  const optimizationComponents = [
    { name: 'Website DOM', category: 'Core Technical', detail: 'HTML5 semantic hierarchy, speed, crawl budget, and clean code rendering.' },
    { name: 'Content Strategy', category: 'Authoritative', detail: 'In-depth topical clustering answering high-intent commercial questions.' },
    { name: 'Entities & Graphs', category: 'Semantic', detail: 'Canonical entity definitions linked with Wikidata, Google KG & industry corpora.' },
    { name: 'Conversational FAQs', category: 'Direct Answers', detail: 'Precise question-and-answer pairs engineered for zero-click snippet extraction.' },
    { name: 'JSON-LD Schema', category: 'Structured Data', detail: 'Nested Organization, Service, Product, and Speakable structured microdata.' },
    { name: 'Internal Link Graphs', category: 'Architecture', detail: 'PageRank and topical relevance distribution across key commercial assets.' },
    { name: 'Authoritative Citations', category: 'Digital Authority', detail: 'Consistent NAP and industry directory citations verified across trust databases.' },
    { name: 'Verified Reviews', category: 'Social Proof', detail: 'Sentiment shaping and structured testimonial markup that LLMs evaluate.' },
    { name: 'Brand Co-Mentions', category: 'GEO Signals', detail: 'Unlinked and linked brand mentions across authoritative niche publications.' },
    { name: 'Digital PR & Footnotes', category: 'Authority', detail: 'High-tier journalistic coverage serving as primary source footnotes for AI models.' },
    { name: 'Topical Authority', category: 'Subject Dominance', detail: 'Comprehensive topical depth demonstrating unmatched category mastery.' },
    { name: 'Knowledge Architecture', category: 'Data Modeling', detail: 'Structured relationship mapping between services, locations, and personnel.' },
    { name: 'Technical Signals', category: 'Performance', detail: 'Core Web Vitals, server response times (TTFB), and mobile responsiveness.' }
  ];

  return (
    <section id="what-we-optimize" className="py-24 relative bg-[#edf5fe] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span>13 Critical Levers</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We Optimize
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            AI search engines don&apos;t just read keywords; they compute multi-dimensional entity vectors. We systematically optimize all 13 core pillars that feed machine confidence.
          </p>
        </div>

        {/* Central Convergence Visualization: Components feeding into Central AI SEARCH VISIBILITY */}
        <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-10 shadow-2xl shadow-sky-950/5 relative overflow-hidden">
          
          {/* Top visual: 13 component badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
            {optimizationComponents.map((item, idx) => {
              const isSelected = selectedComponent === idx;
              return (
                <button
                  key={item.name}
                  onClick={() => setSelectedComponent(isSelected ? null : idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border-blue-500 shadow-md shadow-blue-500/10'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-blue-700 uppercase tracking-wider font-bold">
                      0{idx + 1}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`} />
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1 truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">
                    {item.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Central Convergence Graphic */}
          <div className="relative py-8 px-4 rounded-2xl bg-gradient-to-b from-sky-50 to-blue-50/80 border border-sky-200 text-center flex flex-col items-center justify-center">
            
            <div className="flex items-center gap-2 text-xs font-mono text-blue-800 mb-2 font-bold tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600 animate-spin-slow" />
              <span>ALGORITHMIC SYNTHESIS PIPELINE</span>
            </div>

            <div className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              AI SEARCH VISIBILITY
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2 font-normal">
              All 13 signals synchronize continuously to generate verified organic rankings, direct AI answer snippets, and top-tier LLM recommendations.
            </p>

            {/* Selected Component Drawer */}
            {selectedComponent !== null && (
              <div className="mt-5 p-4 rounded-xl bg-white border-2 border-blue-500 max-w-md w-full text-left animate-fade-in shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-blue-700 font-bold mb-1">
                  <span>COMPONENT FOCUS: {optimizationComponents[selectedComponent].name}</span>
                  <span className="text-slate-500">{optimizationComponents[selectedComponent].category}</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  {optimizationComponents[selectedComponent].detail}
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
