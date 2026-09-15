import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SEO', href: '#seo' },
    { label: 'AEO', href: '#aeo' },
    { label: 'GEO', href: '#geo' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Live Demo', href: '#interactive-demo' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-sky-200 shadow-md shadow-sky-950/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-logo-link"
          href="#"
          className="flex items-center gap-2.5 group"
          aria-label="Nexus Search AI Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1px] shadow-sm group-hover:shadow-cyan-500/30 transition-shadow">
            <div className="w-full h-full bg-[#070d1e] rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900">
                NEXUS<span className="text-blue-600">.</span>AI
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-sky-100 border border-sky-300 text-sky-800 font-semibold hidden sm:inline-block">
                SEO · AEO · GEO
              </span>
            </div>
            <span className="text-[10px] text-slate-500 tracking-wider hidden sm:block">
              Next-Gen Search Visibility
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-md transition-colors hover:bg-sky-100/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-600 mr-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>AI Search Ready</span>
          </div>
          <button
            id="nav-audit-cta-btn"
            onClick={onOpenAuditModal}
            className="relative group overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Get Free AI Visibility Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-audit-btn-compact"
            onClick={onOpenAuditModal}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white shadow"
          >
            Audit
          </button>
          <button
            id="mobile-hamburger-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-sky-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl"
        >
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-sky-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              id="mobile-drawer-audit-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Get Free AI Visibility Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
