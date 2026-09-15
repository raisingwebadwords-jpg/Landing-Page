import { ArrowRight, Play, ShieldAlert, Sparkles, CheckCircle, Zap } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';

interface HeroProps {
  onOpenAuditModal: () => void;
}

export function Hero({ onOpenAuditModal }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#e8f3fe] via-[#edf6fe] to-[#e4f0fd]"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-radial-gradient -z-10 pointer-events-none" />
      <div className="absolute top-20 right-5 w-96 h-96 bg-radial-glow-purple -z-10 pointer-events-none blur-3xl opacity-60" />
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-radial-glow-cyan -z-10 pointer-events-none blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Conversion Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs sm:text-sm font-mono font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-sky-600 animate-spin-slow" />
              <span>SEO + AEO + GEO | Built for the AI Search Era</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="font-display text-3.5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Be Found on Google.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600">
                Be Recommended by AI.
              </span>
            </h1>

            {/* Strategic Value Proposition Callout */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-sky-200 shadow-md shadow-sky-950/5 backdrop-blur-md">
              <p className="text-sm sm:text-base font-bold text-slate-800 tracking-wide font-display">
                <span className="text-blue-600">SEO</span> gets you discovered.{' '}
                <span className="text-cyan-600">AEO</span> gets you answered.{' '}
                <span className="text-purple-600">GEO</span> gets you recommended.
              </p>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Build search visibility across <strong className="text-slate-900 font-semibold">Google, ChatGPT, Gemini, Claude, Perplexity, Microsoft Copilot</strong> and AI-powered search experiences with one integrated SEO + AEO + GEO strategy.
            </p>

            {/* Micro value statements */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Entity Authority</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Zero-Click Answers</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>LLM Citations</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-primary-audit-cta"
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Get Free AI Visibility Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-how-cta"
                onClick={() => scrollToSection('how-it-works')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white border border-sky-200 hover:border-blue-400 text-slate-800 hover:text-blue-600 font-semibold text-sm sm:text-base tracking-wide shadow-sm transition-all flex items-center justify-center gap-2 hover:bg-sky-50 cursor-pointer"
              >
                <Play className="w-4 h-4 text-blue-600 fill-blue-600/20" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust disclaimer below CTA */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-600 font-medium">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>No credit card required. Instant preliminary audit & entity check.</span>
            </div>

          </div>

          {/* Right Column: AI Hero Visualization */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroAnimation />
          </div>

        </div>
      </div>
    </section>
  );
}
