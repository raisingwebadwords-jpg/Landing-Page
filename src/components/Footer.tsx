import { Sparkles, ArrowUp, Github, Twitter, Linkedin, ShieldCheck } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#081126] border-t border-sky-900/40 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#081126] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                NEXUS<span className="text-sky-400">.</span>AI
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              SEO + AEO + GEO — Search Visibility for the AI Era. Helping enterprise brands win discovery on Google, answer extraction on AI Overviews, and authoritative recommendations across LLMs.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400 transition-colors cursor-pointer" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400 transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400 transition-colors cursor-pointer" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#seo" className="hover:text-cyan-400 transition-colors">
                  SEO — Search Engine Optimization
                </a>
              </li>
              <li>
                <a href="#aeo" className="hover:text-cyan-400 transition-colors">
                  AEO — Answer Engine Optimization
                </a>
              </li>
              <li>
                <a href="#geo" className="hover:text-cyan-400 transition-colors">
                  GEO — Generative Engine Optimization
                </a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-cyan-400 transition-colors">
                  AI Visibility Audit Tool
                </a>
              </li>
              <li>
                <a href="#what-we-optimize" className="hover:text-cyan-400 transition-colors">
                  Entity Graph Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              AI Engines Covered
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Google AI Overviews (SGE)</li>
              <li>OpenAI SearchGPT & ChatGPT</li>
              <li>Perplexity AI Conversational</li>
              <li>Google Gemini Multimodal</li>
              <li>Anthropic Claude Reasoning</li>
              <li>Microsoft Copilot Bing Graph</li>
            </ul>
          </div>

          {/* Column 3: Company & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Agency & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-cyan-400 transition-colors">Enterprise Benefits</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact-form-section" className="hover:text-cyan-400 transition-colors">Contact Strategists</a>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</span>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Terms of Service</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Nexus Search AI Inc. All rights reserved. Built for the AI search revolution.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Enterprise Privacy
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
