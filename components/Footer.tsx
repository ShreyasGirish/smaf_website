import React from 'react';
import { 
  Globe, 
  Instagram, 
  Linkedin, 
  ShieldCheck, 
  Award,
  ChevronRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  /* PUBLIC ASSET PATH (Vite & Base-URL Safe for public/images/) */
  const logoImg = `${import.meta.env.BASE_URL}images/smaf-logo.jpg`;

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

          {/* COLUMN 2: BRAND PILLARS (4 Cols) */}
          <div className="md:col-span-4">
            <h5 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-5 relative pl-3">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-emerald-600 rounded-full" />
              Core Excellence
            </h5>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li className="flex items-center gap-2.5 group">
                <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                <span className="group-hover:text-slate-200 transition-colors">Premium Agricultural Products</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                <span className="group-hover:text-slate-200 transition-colors">Global Export Solutions</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                <span className="group-hover:text-slate-200 transition-colors">Food Safety Excellence</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: DIGITAL FOOTPRINT (3 Cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h5 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-5 relative pl-3">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-emerald-600 rounded-full" />
                Digital Presence
              </h5>
              
              {/* Social Icons Row */}
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
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
                className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                Trade Inquiry Desk <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM ATTRIBUTION BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Sri Mookambika Agro Foods LLP. All rights reserved.</p>
          <div className="flex gap-6 font-light">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;