import { Search, FileSearch, Compass, Wrench, Award, LineChart, ArrowRight } from 'lucide-react';

export function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Website & Competitor Analysis',
      desc: 'Map baseline rankings, evaluate search intent, and analyze where competitors are winning traditional clicks and AI citations.',
      icon: Search
    },
    {
      num: '02',
      title: 'AUDIT',
      subtitle: 'Technical, Content & AI Audit',
      desc: 'Audit Core Web Vitals, JSON-LD schema validity, crawl bloat, and test how LLMs currently parse your brand entities.',
      icon: FileSearch
    },
    {
      num: '03',
      title: 'STRATEGIZE',
      subtitle: 'Keyword, Question & Entity Strategy',
      desc: 'Formulate three-way matrix: commercial keywords for SEO, conversational FAQs for AEO, and authoritative entity co-mentions for GEO.',
      icon: Compass
    },
    {
      num: '04',
      title: 'OPTIMIZE',
      subtitle: 'SEO + AEO + GEO Implementation',
      desc: 'Deploy code improvements, structured data, direct-answer modules, on-page entity tuning, and knowledge architecture.',
      icon: Wrench
    },
    {
      num: '05',
      title: 'BUILD AUTHORITY',
      subtitle: 'Content, PR & Entity Signals',
      desc: 'Scale high-trust digital PR, authoritative citations, industry backlinks, and verified knowledge graph connections.',
      icon: Award
    },
    {
      num: '06',
      title: 'MEASURE',
      subtitle: 'Rankings, AI Visibility & Revenue',
      desc: 'Track traditional SERPs, AI snippet capture rates, LLM recommendation frequency, high-intent traffic, and qualified leads.',
      icon: LineChart
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-[#e6f1fd] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Execution Roadmap</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our SEO + AEO + GEO Process
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            A disciplined, engineering-grade 6-phase framework built to transition your business from invisible to omnipresent.
          </p>
        </div>

        {/* 6-Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="rounded-2xl bg-white border border-sky-200 hover:border-blue-400 p-6 sm:p-7 shadow-xl shadow-sky-950/5 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-blue-600">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono text-blue-700 uppercase tracking-wider font-bold">
                  PHASE {step.num}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-1 mb-1">
                  {step.title}
                </h3>

                <div className="text-xs font-bold text-slate-700 mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Milestone Verified</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
