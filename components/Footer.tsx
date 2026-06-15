import React, { useState } from 'react';
import { 
  Globe, 
  Instagram, 
  Linkedin, 
  Facebook,
  ShieldCheck, 
  Award,
  ChevronRight,
  X,
  Scale,
  ShieldAlert
} from 'lucide-react';

const Footer: React.FC = () => {
  /* PUBLIC ASSET PATH (Vite & Base-URL Safe for public/images/) */
  const logoImg = `${import.meta.env.BASE_URL}images/smaf-logo.jpg`;

  // Modal display management states
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* COLUMN 1: CORPORATE IDENTITY WITH LOGO (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              {/* Premium Blended Logo Container */}
              <div className="w-12 h-12 rounded-full p-1 bg-white border border-emerald-500/30 shadow-[0_4px_12px_rgba(16,185,129,0.1)] flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white mix-blend-multiply">
                  <img 
                    src={logoImg} 
                    alt="Sri Mookambika Logo" 
                    className="w-10 h-10 object-contain p-0.5"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-serif tracking-wide text-white mb-0.5">
                  Sri Mookambika
                </h4>
                <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                  Agro Foods LLP
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              Processing premium agricultural crop solutions and delivering consistent global export 
              structures for international commercial food networks and local distribution blocks.
            </p>
            
            {/* Certifications Block */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800/60 text-slate-300">
                <ShieldCheck className="text-emerald-500" size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">FSSC 22000</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800/60 text-slate-300">
                <Award className="text-emerald-500" size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">FSSAI Certified</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: BRAND PILLARS / QUICK NAVIGATION LINKS (4 Cols) */}
          <div className="md:col-span-4">
            <h5 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-6 relative pl-3">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-emerald-600 rounded-full" />
              Core Excellence
            </h5>
            
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li>
                <button 
                  onClick={() => scrollToSection('brand')}
                  className="flex items-center gap-2.5 group text-left hover:text-slate-100 transition-colors duration-200"
                >
                  <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Prakritva Product Portfolio</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('facility')}
                  className="flex items-center gap-2.5 group text-left hover:text-slate-100 transition-colors duration-200"
                >
                  <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Processing Hub Capabilities</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('quality')}
                  className="flex items-center gap-2.5 group text-left hover:text-slate-100 transition-colors duration-200"
                >
                  <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Quality & Global Compliance</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2.5 group text-left hover:text-slate-100 transition-colors duration-200"
                >
                  <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Private Label Partnerships</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: DIGITAL FOOTPRINT (3 Cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h5 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-6 relative pl-3">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-emerald-600 rounded-full" />
                Digital Presence
              </h5>
              
              {/* Social Icons Row */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.linkedin.com/company/sri-mookambika-agro-foods-llp/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-700 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-700 transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-700 transition-all duration-300"
                  aria-label="Facebook Page"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-700 transition-all duration-300"
                  aria-label="Website Home"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>

            {/* Quick Navigation Shortcut */}
            <div className="pt-6 md:pt-0">
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
              >
                Trade Inquiry Desk 
                <ChevronRight size={14} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM ATTRIBUTION BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Sri Mookambika Agro Foods LLP. All rights reserved.</p>
          <div className="flex gap-6 font-light">
            <button 
              onClick={() => setLegalModal('privacy')} 
              className="hover:text-slate-300 transition-colors bg-transparent border-0 cursor-pointer outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setLegalModal('terms')} 
              className="hover:text-slate-300 transition-colors bg-transparent border-0 cursor-pointer outline-none"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* 🟢 NATIVE MODAL POPUP LAYER FOR PRIVACY POLICY & TERMS OF SERVICE */}
      {legalModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0 bg-slate-950/80" onClick={() => setLegalModal(null)} />
          
          <div className="bg-white text-slate-900 rounded-[2.5rem] w-full max-w-3xl max-h-[80vh] overflow-hidden relative shadow-2xl flex flex-col border border-slate-100">
            
            {/* Modal Header Panel */}
            <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50 rounded-t-[2.5rem]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  {legalModal === 'privacy' ? <ShieldAlert size={20} /> : <Scale size={20} />}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    Sri Mookambika Agro Foods LLP • Last Updated: June 2026
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setLegalModal(null)}
                className="text-slate-400 hover:text-slate-600 bg-white border border-slate-200 p-2.5 rounded-full shadow-sm transition active:scale-95"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body Content (Scrollable Framework) */}
            <div className="p-6 md:p-8 overflow-y-auto font-sans text-sm text-slate-600 space-y-6 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">1. Information Collection & Intent</h4>
                    <p>We collect corporate credentials, including name, corporate email domain, and business classification, strictly when submitted through our trade inquiry or gated investor pitch deck modules. This information is used exclusively to evaluate commercial specifications and establish secure business-to-business communications.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">2. Data Security & Storage Transparency</h4>
                    <p>All data captured natively through this platform is recorded into secure database tables utilizing industry-standard cryptographic access protocols. We do not sell, rent, or lease our corporate communication sheets or client procurement parameters to third-party brokers or external marketing lists.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">3. Gated Document Control</h4>
                    <p>By inputting credentials to ungate the Corporate Portfolio Deck, you acknowledge that access metrics and timestamps are securely logged on our server to preserve the confidentiality of our facility metrics and commercial projections.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">4. Regulatory Inquiries</h4>
                    <p>For data rectification queries or to modify active procurement logs on our servers, please contact our administrative suite directly at <a href="mailto:smafoodsindia@gmail.com" className="text-emerald-600 font-bold hover:underline">smafoodsindia@gmail.com</a>.</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">1. Commercial Limitations & Scope</h4>
                    <p>The technical specifications, grading thresholds, and processing data shared on this portal are for preliminary commercial procurement evaluation only. Official delivery parameters, chemical brining matrices, and contract packing obligations are established exclusively through signed standard legal bills of lading and purchase orders.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">2. Verification Ledger Usage</h4>
                    <p>The license and registration numbers posted inside our Quality suite (FSSC 22000, USFDA, FSSAI) are displayed solely to demonstrate legitimate trade transparency. Any unauthorized copying, mirroring, or fraudulent reproduction of these regulatory assets is strictly prohibited and subject to legal enforcement under Indian trade laws.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">3. Digital Order Routing Channels</h4>
                    <p>When utilizing our direct Instagram DM pipeline linkage for retail ranges or submitting wholesale data through Supabase data forms, you agree to submit legitimate business metrics and accurate corporate credentials.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2">4. Legal Jurisdiction</h4>
                    <p>These terms of digital interaction are governed by and construed in accordance with the regulatory frame laws of the State of Karnataka, India. Any disputes arising from the usage of this digital domain fall under the exclusive jurisdiction of the corporate registries in Hubballi.</p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center shrink-0 rounded-b-[2.5rem]">
              <button 
                onClick={() => setLegalModal(null)}
                className="bg-slate-900 hover:bg-slate-950 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl transition"
              >
                Acknowledge Framework
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;