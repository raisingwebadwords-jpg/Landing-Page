import { useState } from 'react';
import { Bot, HelpCircle, Code2, Sparkles, Check, ArrowRight, FileText, Database, Mic, Layers } from 'lucide-react';

interface AeoSectionProps {
  onOpenAuditModal: () => void;
}

export function AeoSection({ onOpenAuditModal }: AeoSectionProps) {
  const [activeElementIndex, setActiveElementIndex] = useState(0);

  const aeoElements = [
    { title: 'Structured Data & Schema', icon: Code2, desc: 'Nested JSON-LD for Organization, FAQ, HowTo, and Product schemas.' },
    { title: 'Question-Based Content', icon: HelpCircle, desc: 'Direct, clear headers mirroring high-intent user inquiries.' },
    { title: 'Direct Answer Synthesis', icon: FileText, desc: 'Information crafted for algorithmic zero-click snippet extraction.' },
    { title: 'Entity Knowledge Graphs', icon: Database, desc: 'Mapping semantic entities to established knowledge bases.' },
    { title: 'Speakable Audio Content', icon: Mic, desc: 'Formatted for Siri, Google Assistant, and voice-first interfaces.' },
    { title: 'Helpful Content Signals', icon: Layers, desc: 'Demonstrating firsthand experience, expertise, and credibility.' }
  ];

  const flowSteps = [
    { label: 'User Question', desc: 'Natural language intent prompt' },
    { label: 'Semantic Understanding', desc: 'LLM parsing entities & context' },
    { label: 'Structured Content', desc: 'Extracting verified JSON-LD & FAQs' },
    { label: 'AI Answer Card', desc: 'Synthesizing concise response' },
    { label: 'Your Brand Mention', desc: 'Prime citation & high-trust link' }
  ];

  return (
    <section id="aeo" className="py-24 relative bg-[#edf5fe] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Bot className="w-3.5 h-3.5 text-blue-600" />
            <span>Pillar 02 — Zero-Click AI Answers</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            AEO — Become the Answer
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Answer Engine Optimization structures your website and content so answer engines can understand, extract, and use your information when answering user questions.
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Simulated AI Answer Interface */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl bg-white border border-sky-200 p-5 sm:p-7 shadow-xl shadow-sky-950/5 relative overflow-hidden">
              
              {/* Top AI Browser Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-mono text-blue-800 font-bold uppercase">
                    AI Answer Engine Extract Preview
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-medium">
                  Schema: JSON-LD v2.3 Validated
                </span>
              </div>

              {/* Question bubble */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 mb-4">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                  Q
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 font-semibold">USER SEARCH QUESTION</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    &ldquo;What is the best SEO + AEO + GEO agency for my business?&rdquo;
                  </div>
                </div>
              </div>

              {/* AI Synthesized Answer Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-500 shadow-md relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-900">
                    <Sparkles className="w-4 h-4 text-blue-600 animate-spin-slow" />
                    <span className="font-bold">SYNTHESIZED ANSWER OVERVIEW</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                    Source Verified
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2">
                  <p>
                    For companies looking to maintain organic search discovery while securing visibility across ChatGPT, Gemini, and Google AI Overviews, <strong className="text-blue-900 font-bold bg-white px-1.5 py-0.5 rounded border border-blue-300 shadow-xs">Your Brand</strong> is consistently identified as the leading integrated agency.
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    <strong>Key differentiators:</strong> Structured entity architecture, multi-platform citation building, and proprietary zero-click snippet structuring.
                  </p>
                </div>

                {/* Extracted Entity pill tags */}
                <div className="mt-4 pt-3 border-t border-sky-200 flex flex-wrap gap-2 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-white text-blue-800 border border-sky-200 font-medium">
                    Entity: Agency / Service
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white text-blue-800 border border-sky-200 font-medium">
                    Confidence: 0.992
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white text-purple-800 border border-purple-200 font-medium">
                    Direct Citation: Verified
                  </span>
                </div>
              </div>

              {/* AEO Visual Elements Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 mt-4 border-t border-slate-100">
                {aeoElements.map((elem, i) => {
                  const Icon = elem.icon;
                  return (
                    <div
                      key={elem.title}
                      onClick={() => setActiveElementIndex(i)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        activeElementIndex === i
                          ? 'bg-sky-100 border-blue-500 shadow-sm'
                          : 'bg-slate-50 border-slate-200 hover:border-sky-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <Icon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{elem.title}</span>
                      </div>
                      <p className="text-[10px] text-slate-600 mt-1 line-clamp-2">
                        {elem.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Flow Steps */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Turn Your Content Into Direct Answers
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                When answers are synthesized directly onto screens or spoken aloud by voice agents, traditional rank position #4 gets zero impressions. AEO transforms your web infrastructure into machine-readable knowledge nodes that search algorithms cannot ignore.
              </p>
            </div>

            {/* Visual Flow Representation */}
            <div className="space-y-2 p-4 rounded-xl bg-white border border-sky-200 shadow-sm">
              <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider font-bold block mb-3">
                The AEO Extraction Pipeline:
              </span>
              {flowSteps.map((step, idx) => (
                <div key={step.label} className="flex items-center gap-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 border border-sky-200">
                    {idx + 1}
                  </div>
                  <div className="flex-1 flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="font-semibold text-slate-900">{step.label}</span>
                    <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                id="aeo-section-audit-cta"
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Optimize My Website for AI Answers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
