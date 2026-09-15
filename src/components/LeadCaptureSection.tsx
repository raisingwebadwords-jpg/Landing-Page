import { useState, useEffect, FormEvent } from 'react';
import { Sparkles, Shield, ArrowRight, CheckCircle2, Lock, Mail, Phone, Globe, Building2, User, DollarSign, Target, Calendar } from 'lucide-react';
import { LeadFormData } from '../types';

interface LeadCaptureSectionProps {
  initialWebsiteUrl?: string;
  initialCategory?: string;
  initialService?: string;
}

export function LeadCaptureSection({ initialWebsiteUrl, initialCategory, initialService }: LeadCaptureSectionProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    websiteUrl: initialWebsiteUrl || '',
    industry: initialCategory || '',
    monthlyBudget: '$5,000 – $15,000 / mo',
    primaryGoal: 'Capture AI Recommendations & Featured Snippets',
    selectedService: (initialService as any) || 'SEO + AEO + GEO'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialWebsiteUrl) {
      setFormData((prev) => ({ ...prev, websiteUrl: initialWebsiteUrl }));
    }
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, industry: initialCategory }));
    }
  }, [initialWebsiteUrl, initialCategory]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact-form-section" className="py-24 relative bg-[#edf5fe] overflow-hidden border-t border-sky-200">
      
      {/* Background Animated AI Scanning Lines */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dramatic Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Priority Enterprise Audit Queue</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Is AI Recommending Your Competitors?
          </h2>

          <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-semibold">
            Find out how visible your brand is across modern search and AI-powered answer experiences.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Receive an exhaustive manual & algorithmic diagnostic covering Google SERP rankings, answer extraction schemas, and multi-model LLM citation authority.
          </p>
        </div>

        {/* Lead Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-white border-2 border-sky-200 p-6 sm:p-10 shadow-2xl shadow-sky-950/10 relative">
            
            {/* Success State */}
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-fade-in" id="audit-success-receipt">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-blue-700 uppercase tracking-widest font-bold">
                    AUDIT REQUEST CONFIRMED
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Your Free AI Visibility Audit Is In Progress
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto font-normal">
                    We have dispatched our search crawler to index <strong>{formData.websiteUrl || 'your website'}</strong>. A senior search engineer will compile your report within 24–48 hours.
                  </p>
                </div>

                {/* Audit Ticket Details */}
                <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 max-w-md mx-auto text-left text-xs font-mono space-y-2 text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Website:</span>
                    <span className="text-blue-700 font-semibold">{formData.websiteUrl || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Email:</span>
                    <span className="text-slate-900 font-medium">{formData.workEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Focus Strategy:</span>
                    <span className="text-purple-700 font-medium">{formData.selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Queue Status:</span>
                    <span className="text-emerald-700 font-bold">Priority #12 (Active)</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono text-blue-600 hover:text-blue-800 underline cursor-pointer"
                  >
                    Submit another website or inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* High-Conversion Form */
              <form onSubmit={handleSubmit} className="space-y-5" id="lead-generation-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="lead-company" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Company Name *</span>
                    </label>
                    <input
                      id="lead-company"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Cloud Solutions"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="lead-email" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Business Email *</span>
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="sarah@apexcloud.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="lead-phone" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="lead-website" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-600" />
                      <span>Website URL *</span>
                    </label>
                    <input
                      id="lead-website"
                      type="text"
                      required
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://apexcloud.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-mono"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label htmlFor="lead-industry" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-blue-600" />
                      <span>Industry / Vertical *</span>
                    </label>
                    <input
                      id="lead-industry"
                      type="text"
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      placeholder="e.g. B2B SaaS, FinTech, Healthcare, Industrial"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                    />
                  </div>

                  {/* Monthly Budget */}
                  <div>
                    <label htmlFor="lead-budget" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                      <span>Monthly Marketing Budget</span>
                    </label>
                    <select
                      id="lead-budget"
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                    >
                      <option value="$3,000 – $5,000 / mo">$3,000 – $5,000 / mo</option>
                      <option value="$5,000 – $15,000 / mo">$5,000 – $15,000 / mo (Most Popular)</option>
                      <option value="$15,000 – $30,000 / mo">$15,000 – $30,000 / mo (Enterprise Scale)</option>
                      <option value="$30,000+ / mo">$30,000+ / mo (Global Market Leader)</option>
                    </select>
                  </div>

                  {/* Selected Service */}
                  <div>
                    <label htmlFor="lead-service" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Target Service Layer</span>
                    </label>
                    <select
                      id="lead-service"
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                    >
                      <option value="SEO + AEO + GEO">SEO + AEO + GEO (Comprehensive Growth Engine)</option>
                      <option value="SEO">SEO (Traditional Search Dominance)</option>
                      <option value="AEO">AEO (Answer Engine & Direct Snippets)</option>
                      <option value="GEO">GEO (Generative Engine Recommendations)</option>
                      <option value="Not Sure">Not Sure (Let the Audit Guide Me)</option>
                    </select>
                  </div>

                </div>

                {/* Primary Goal */}
                <div>
                  <label htmlFor="lead-goal" className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5">
                    Primary Commercial Goal
                  </label>
                  <input
                    id="lead-goal"
                    type="text"
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    placeholder="e.g. Outrank competitor X in ChatGPT and capture Google AI Overviews"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all font-normal"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    id="submit-audit-request-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base tracking-wide shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Queueing Priority Audit...</span>
                    ) : (
                      <>
                        <span>Request My Free Visibility Audit</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy & Trust Reassurance */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>
                    Your information is used only to contact you regarding your audit and marketing requirements. We never sell or spam your data.
                  </span>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
