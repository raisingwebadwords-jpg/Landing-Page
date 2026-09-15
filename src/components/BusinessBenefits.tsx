import { TrendingUp, Sparkles, Shield, Target, Compass, Users2, ArrowUpRight } from 'lucide-react';

export function BusinessBenefits() {
  const benefits = [
    {
      id: 'benefit-1',
      title: 'More Organic Visibility',
      highlight: 'Improve your presence across traditional search.',
      description: 'Capture critical top-of-funnel and bottom-of-funnel keyword rankings across standard Google and Bing organic SERPs.',
      icon: TrendingUp,
      accent: 'text-blue-400',
      tag: 'Traditional Search'
    },
    {
      id: 'benefit-2',
      title: 'More AI Visibility',
      highlight: 'Increase opportunities to appear in AI-generated answers.',
      description: 'Secure valuable mentions inside Google AI Overviews, Perplexity answers, and conversational chatbots where buyers make swift decisions.',
      icon: Sparkles,
      accent: 'text-cyan-400',
      tag: 'Zero-Click Real Estate'
    },
    {
      id: 'benefit-3',
      title: 'Better Brand Authority',
      highlight: 'Build stronger topical and entity-level authority.',
      description: 'Establish clear entity graph verification with Google Knowledge Graph and Wikipedia/Wikidata co-citations to solidify market leadership.',
      icon: Shield,
      accent: 'text-purple-400',
      tag: 'Entity Trust'
    },
    {
      id: 'benefit-4',
      title: 'Higher Quality Traffic',
      highlight: 'Reach users with stronger search intent.',
      description: 'Users who query conversational AI or extract direct snippets arrive at your website with verified trust and deeper commercial intent.',
      icon: Target,
      accent: 'text-emerald-400',
      tag: 'Intent Alignment'
    },
    {
      id: 'benefit-5',
      title: 'Future-Ready Search Strategy',
      highlight: 'Prepare your business for evolving search behavior.',
      description: 'Stop reacting to algorithm updates. Build a resilient knowledge architecture designed natively for LLM crawlers and generative engines.',
      icon: Compass,
      accent: 'text-amber-400',
      tag: 'Algorithmic Resilience'
    },
    {
      id: 'benefit-6',
      title: 'More Qualified Leads',
      highlight: 'Turn search visibility into measurable business opportunities.',
      description: 'Eliminate vanity traffic. Channel educated buyers seeking authoritative solutions directly into your sales pipeline.',
      icon: Users2,
      accent: 'text-pink-400',
      tag: 'Pipeline Revenue'
    }
  ];

  return (
    <section id="benefits" className="py-24 relative bg-[#edf5fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Commercial Value</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What This Means for Your Business
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Search is not a vanity metric; it is your company&apos;s primary customer acquisition engine. Here is how modern optimization directly impacts enterprise growth.
          </p>
        </div>

        {/* 6 Premium Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                id={b.id}
                className="rounded-2xl bg-white border border-sky-200 hover:border-blue-400 p-6 sm:p-7 shadow-xl shadow-sky-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-blue-500/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 font-semibold">
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold text-blue-700 mb-2.5">
                    &ldquo;{b.highlight}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Impact: High ROI</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
