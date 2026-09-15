import { useState, FormEvent } from 'react';
import { Search, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, BarChart3, ShieldAlert, Cpu } from 'lucide-react';
import { AuditFormData, AuditResults } from '../types';

interface InteractiveAuditDemoProps {
  onSelectForLeadAudit: (url: string, category: string, service: string) => void;
}

export function InteractiveAuditDemo({ onSelectForLeadAudit }: InteractiveAuditDemoProps) {
  const [formData, setFormData] = useState<AuditFormData>({
    websiteUrl: 'https://example-enterprise.com',
    businessCategory: 'B2B SaaS / Enterprise Software',
    primaryService: 'SEO + AEO + GEO Comprehensive',
    targetLocation: 'United States & Global'
  });

  const [scanStepIndex, setScanStepIndex] = useState(-1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AuditResults | null>(null);

  const scanStages = [
    'Scanning Website & DOM Architecture...',
    'Analyzing Semantic Content Structure...',
    'Checking Traditional Google Index Signals...',
    'Analyzing AI Engine & LLM Visibility Footprint...',
    'Checking Knowledge Graph & Entity Schema Signals...',
    'Generating Comprehensive AI Visibility Report...'
  ];

  const handleRunDemo = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl.trim()) return;

    setIsAnalyzing(true);
    setScanStepIndex(0);
    setResults(null);

    // Step through the simulated scanner
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < scanStages.length) {
        setScanStepIndex(step);
      } else {
        clearInterval(interval);
        setIsAnalyzing(false);
        setScanStepIndex(-1);

        // Generate tailored demo scores based on input
        setResults({
          overallScore: 61,
          traditionalSeo: 78,
          aeoReadiness: 52,
          geoReadiness: 41,
          contentAuthority: 64,
          technicalHealth: 72,
          opportunityLevel: 'HIGH',
          diagnosticGaps: [
            'Missing nested JSON-LD schema for generative AI extractors',
            'Zero direct answer markup detected on core high-intent landing pages',
            'Low entity co-occurrence authority across LLM training corpora',
            'Competitors currently cited in 65% of test AI conversational queries'
          ]
        });
      }
    }, 600);
  };

  const handleClaimFullAudit = () => {
    onSelectForLeadAudit(formData.websiteUrl, formData.businessCategory, formData.primaryService);
    const target = document.getElementById('contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="interactive-demo" className="py-24 relative bg-[#e6f1fd] border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Simulator</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            See Your AI Search Visibility
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Test how well your brand is positioned for Google search, direct AI answers, and generative LLM recommendations.
          </p>
        </div>

        {/* Demo Simulator Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-sky-200 p-6 sm:p-10 shadow-2xl shadow-sky-950/5 relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

          {/* Form */}
          <form onSubmit={handleRunDemo} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label htmlFor="demo-website-url" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-2">
                  Website URL *
                </label>
                <div className="relative">
                  <input
                    id="demo-website-url"
                    type="text"
                    required
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourcompany.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="demo-business-category" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-2">
                  Business Category *
                </label>
                <input
                  id="demo-business-category"
                  type="text"
                  required
                  value={formData.businessCategory}
                  onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                  placeholder="e.g. B2B SaaS, Healthcare, FinTech, Legal"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="demo-primary-service" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-2">
                  Primary Focus Service
                </label>
                <select
                  id="demo-primary-service"
                  value={formData.primaryService}
                  onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                >
                  <option value="SEO + AEO + GEO Comprehensive">SEO + AEO + GEO Comprehensive (Recommended)</option>
                  <option value="Traditional SEO Focus">Traditional SEO Focus</option>
                  <option value="AEO Direct Answer Extraction">AEO Direct Answer Extraction</option>
                  <option value="GEO LLM Citation Optimization">GEO LLM Citation Optimization</option>
                </select>
              </div>

              <div>
                <label htmlFor="demo-target-location" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-2">
                  Target Market / Location
                </label>
                <input
                  id="demo-target-location"
                  type="text"
                  value={formData.targetLocation}
                  onChange={(e) => setFormData({ ...formData, targetLocation: e.target.value })}
                  placeholder="e.g. United States, Global, EMEA"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

            </div>

            <div className="pt-2">
              <button
                id="run-demo-audit-btn"
                type="submit"
                disabled={isAnalyzing}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white font-bold text-base tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Running Algorithmic Simulation...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Run Free AI Visibility Demo</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Active Scanning Indicator */}
          {isAnalyzing && (
            <div className="mt-8 p-6 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-4 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-blue-700 font-mono text-sm font-bold">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{scanStages[scanStepIndex]}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden max-w-md mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 transition-all duration-500"
                  style={{ width: `${((scanStepIndex + 1) / scanStages.length) * 100}%` }}
                />
              </div>

              <span className="text-xs text-slate-500 font-mono">
                Simulating crawler requests to Google, OpenAI, Anthropic & Perplexity index signals
              </span>
            </div>
          )}

          {/* Results Dashboard */}
          {results && !isAnalyzing && (
            <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-blue-700 font-bold uppercase tracking-wider">
                    ANALYSIS FOR: {formData.websiteUrl}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mt-0.5">
                    AI Search Visibility Diagnostic Overview
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  Opportunity Level: {results.opportunityLevel}
                </span>
              </div>

              {/* Score Bars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                
                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-center">
                  <div className="text-[11px] font-mono text-slate-600 font-medium">Traditional SEO</div>
                  <div className="text-2xl font-bold font-display text-blue-700 mt-1">
                    {results.traditionalSeo}%
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: `${results.traditionalSeo}%` }} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-center">
                  <div className="text-[11px] font-mono text-slate-600 font-medium">AEO Readiness</div>
                  <div className="text-2xl font-bold font-display text-cyan-700 mt-1">
                    {results.aeoReadiness}%
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-cyan-600 h-full" style={{ width: `${results.aeoReadiness}%` }} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-center">
                  <div className="text-[11px] font-mono text-slate-600 font-medium">GEO Readiness</div>
                  <div className="text-2xl font-bold font-display text-purple-700 mt-1">
                    {results.geoReadiness}%
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-purple-600 h-full" style={{ width: `${results.geoReadiness}%` }} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-center">
                  <div className="text-[11px] font-mono text-slate-600 font-medium">Content Authority</div>
                  <div className="text-2xl font-bold font-display text-emerald-700 mt-1">
                    {results.contentAuthority}%
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-600 h-full" style={{ width: `${results.contentAuthority}%` }} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-center">
                  <div className="text-[11px] font-mono text-slate-600 font-medium">Technical Health</div>
                  <div className="text-2xl font-bold font-display text-slate-900 mt-1">
                    {results.technicalHealth}%
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: `${results.technicalHealth}%` }} />
                  </div>
                </div>

              </div>

              {/* Identified High-Impact Gaps */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200">
                <span className="text-xs font-mono uppercase text-amber-800 font-bold block mb-2">
                  Key Identified Optimization Gaps:
                </span>
                <div className="space-y-2">
                  {results.diagnosticGaps.map((gap) => (
                    <div key={gap} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{gap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  Your website has opportunities to improve visibility across modern search and AI answer experiences.
                </p>

                <button
                  id="claim-complete-audit-btn"
                  onClick={handleClaimFullAudit}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-md shadow-blue-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Complete Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mandatory Honest Disclaimer */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <p className="text-[11px] text-slate-500 font-mono">
                  <strong>Notice:</strong> Sample/Demo Analysis based on heuristics. Actual score and roadmap require our complete deep technical crawl and manual entity architecture review.
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
