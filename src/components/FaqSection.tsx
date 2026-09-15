import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, AlertCircle } from 'lucide-react';
import { FaqItem } from '../types';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What is the difference between SEO, AEO and GEO?',
      answer: 'SEO (Search Engine Optimization) focuses on ranking web pages in traditional search results (the classic 10 blue links on Google and Bing). AEO (Answer Engine Optimization) structures content, FAQs, and JSON-LD schemas so answer engines and voice assistants extract your content directly into zero-click answer cards and featured snippets. GEO (Generative Engine Optimization) optimizes brand relevance, entity authority, and citation frequency across large language models (like ChatGPT, Gemini, Claude, and Perplexity) so they actively reference and recommend your company during conversational buyer journeys.'
    },
    {
      id: 'faq-2',
      question: 'Why do I need AEO if I already do SEO?',
      answer: 'Traditional SEO aims to earn a click from a ranking list. However, over 58% of Google searches now result in zero clicks because Google AI Overviews and answer cards answer the query directly on the SERP. Without AEO, your content remains invisible to users who rely on instant synthesized summaries, even if your site technically ranks on page one.'
    },
    {
      id: 'faq-3',
      question: 'What is Generative Engine Optimization (GEO)?',
      answer: 'GEO is the practice of shaping how generative AI models understand, index, and cite your brand. Unlike web spiders that simply follow hyperlinks, LLMs synthesize information from diverse training corpora, live web integrations, and entity knowledge graphs. GEO builds digital PR, entity co-occurrences, and authoritative citations so that when a potential buyer asks an AI for a recommendation, your business is cited as a top choice.'
    },
    {
      id: 'faq-4',
      question: 'Can you optimize my website for ChatGPT and Gemini?',
      answer: 'Yes. Modern AI models like ChatGPT (with SearchGPT) and Gemini connect to live web crawlers and structured knowledge repositories. We optimize your website by implementing machine-readable schema, high-authority topical content, verified entity references, and digital footprint signals that these LLM crawlers prioritize when synthesizing commercial queries.'
    },
    {
      id: 'faq-5',
      question: 'How does AI decide which brands to mention?',
      answer: 'Generative AI models evaluate multiple semantic vectors: topical entity co-occurrences across authoritative sources, sentiment consistency, presence in structured knowledge graphs, verified reviews, and source reliability. Models cite brands that have high consensus authority and clean, verifiable information.'
    },
    {
      id: 'faq-6',
      question: 'Does GEO replace SEO?',
      answer: 'No. GEO does not replace SEO; it builds upon it. Search engines and AI models rely on the same fundamental building blocks: fast-loading sites, crawlable HTML architecture, high-quality content, and trusted backlinks. Without a solid technical SEO foundation, neither search spiders nor AI systems can properly digest your brand.'
    },
    {
      id: 'faq-7',
      question: 'How long does SEO + AEO + GEO take to produce results?',
      answer: 'Technical SEO and schema fixes can begin indexing within 2 to 4 weeks. Traditional ranking shifts and snippet captures typically develop over 60 to 90 days. Generative AI citation improvements and LLM recommendation frequency generally compound over 3 to 6 months as AI knowledge retrieval cycles update.'
    },
    {
      id: 'faq-8',
      question: 'Can you provide an AI visibility audit?',
      answer: 'Yes! We offer a comprehensive Free AI Visibility Audit. Our engineering team analyzes your technical health, structured data schemas, current snippet rankings, and tests how leading AI engines (Google AI Overviews, ChatGPT, Gemini, and Perplexity) perceive and cite your brand against competitors.'
    },
    {
      id: 'faq-9',
      question: 'Will I be guaranteed to appear in AI answers?',
      answer: 'No reputable agency can guarantee specific algorithmic positions or mandatory AI recommendations. Algorithmic retrieval systems are governed by proprietary third-party models that change continuously. What we guarantee is rigorous, engineering-grade implementation of the exact technical, schema, and entity standards that maximize your probability of selection.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-[#edf5fe] border-t border-sky-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-mono font-bold shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Clear & Honest Answers</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Everything you need to know about the transition from traditional keyword ranking to AI answer engine optimization.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/5'
                    : 'bg-white border border-sky-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-sky-50 text-blue-600 border border-sky-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance badge */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-sky-200 shadow-sm flex items-center justify-center gap-3 text-xs text-slate-600 text-center font-medium">
          <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Have a question not listed here? Our enterprise search strategists are available for custom consultations.</span>
        </div>

      </div>
    </section>
  );
}
