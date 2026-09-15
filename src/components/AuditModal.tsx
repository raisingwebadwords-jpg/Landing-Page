import { useState, FormEvent } from 'react';
import { X, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (url: string) => void;
}

export function AuditModal({ isOpen, onClose, onSuccess }: AuditModalProps) {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('SEO + AEO + GEO');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSuccess(url);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border-2 border-sky-200 p-6 sm:p-8 shadow-2xl shadow-sky-950/20 overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                Audit Queued Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-normal">
                Our automated search crawlers are indexing <strong>{url}</strong>. A comprehensive diagnostic report will be sent to <strong>{email}</strong> within 24 hours.
              </p>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Instant Preliminary Assessment</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
                Get Free AI Visibility Audit
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-normal">
                Discover your brand&apos;s visibility on Google Search, ChatGPT, Gemini, and Perplexity.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                  Website URL *
                </label>
                <input
                  type="text"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourcompany.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                  Business Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                >
                  <option value="SEO + AEO + GEO">SEO + AEO + GEO (Comprehensive)</option>
                  <option value="SEO Only">Traditional SEO Focus</option>
                  <option value="AEO Only">AEO (Answer Engine Optimization)</option>
                  <option value="GEO Only">GEO (Generative Engine Optimization)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Initiating Diagnostic Engine...</span>
                  ) : (
                    <>
                      <span>Generate Free AI Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center font-mono">
                <Lock className="w-3 h-3 text-blue-600" />
                <span>Zero spam guarantee. 100% confidential analysis.</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
