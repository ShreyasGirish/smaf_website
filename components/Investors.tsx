import React, { useState } from 'react';
import {
  Handshake,
  Factory,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  FileText,
  TrendingUp,
  Download,
  Building,
  User,
  Mail,
  CheckCircle2
} from 'lucide-react';

const Investors: React.FC = () => {
  // 🟢 STATE HOOKS FOR GATED CONTENT INTAKE
  const [investorInfo, setInvestorInfo] = useState({
    fullName: '',
    corporateEmail: '',
    companyName: ''
  });
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInvestorInfo(prev => ({ ...prev, [field]: value }));
  };

  // Triggers conversion download automatically upon form validation completion
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Connects natively to your backend routes proxy: POST /api/investor-leads
    console.log("Strategic Investor Contact Captured:", investorInfo);
    
    setIsUnlocked(true);

    // Automatic download process trigger
    const deckUrl = `${import.meta.env.BASE_URL}brochures/SMAF_Investor_Deck.pdf`;
    const link = document.createElement('a');
    link.href = deckUrl;
    link.download = 'SMAF_Investor_Deck.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="investors" className="py-24 bg-[#FCFBF7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* SECTION HEADER MODULE */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Institutional Portfolio Hub
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
            Corporate Sourcing & <br />
            <span className="text-emerald-600">Infrastructure Expansion</span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            Reviewing strategic allocations from global trade partners, contract farming ecosystems, and venture networks looking to back mechanized multi-line processing line extensions in Karnataka.
          </p>
        </div>

        {/* PITCH DECK AND CAPACITIES MODULE PANEL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDEBAR: CORE OPERATIONAL CAPACITY HIGHLIGHTS (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Processing Line Scaling",
                desc: "Scaling annual factory capacity limits toward 3000+ MT to manage growing container trade metrics.",
                icon: <Factory size={22} />
              },
              {
                title: "Agritech Buy-Back Sourcing",
                desc: "Direct coordination with 1200+ localized family farmers across strict non-GMO contract frameworks.",
                icon: <TrendingUp size={22} />
              },
              {
                title: "Certified Global Safety",
                desc: "Full international trade transparency anchored by FSSC 22000 Version 6 and USFDA compliance audits.",
                icon: <ShieldCheck size={22} />
              },
              {
                title: "Cold-Chain Logistics Infrastructure",
                desc: "Building centralized pre-cooling networks and temperature-locked logistics matrices to safeguard raw crop arrivals.",
                icon: <CheckCircle size={22} />
              }
            ].map((card, index) => (
              <div key={index} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between hover:border-emerald-200 transition-all duration-300">
                <div>
                  <div className="w-11 h-11 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-5 border border-emerald-100/40">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 🟢 RIGHT SIDEBAR: HIGH-CONVERSION GATED DATA INTAKE CARD PANEL (5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[3rem] p-10 md:p-12 flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Ambient background accent glow ring decoration layer */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                <FileText size={14} />
                Executive Briefing Room
              </div>

              <h3 className="text-3xl font-serif mb-4 leading-tight text-slate-100">
                Review Our <br />Venture Overview
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
                Unlock confidential access to comprehensive financial growth summaries, regional sourcing maps, and asset allocation strategies by providing corporate credentials.
              </p>
            </div>

            {/* DYNAMIC FORM SWITCH BLOCK MECHANISM */}
            {isUnlocked ? (
              <div className="bg-white/5 border border-emerald-500/20 p-6 rounded-2xl text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-inner my-4 animate-fade-in">
                <div className="w-11 h-11 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-3 shadow-md">
                  <CheckCircle2 size={22} />
                </div>
                <h4 className="text-sm font-serif font-bold text-slate-100">Document Access Granted</h4>
                <p className="text-slate-400 text-[11px] font-light max-w-xs mt-1 leading-relaxed">
                  Your PDF file download has been initialized. If your browser blocked the window pop-up, click the manual recovery button below.
                </p>
                
                {/* UP-SCALED MANUAL DOWNLOAD BUTTON */}
                <button 
                  onClick={handleFormSubmit}
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition"
                >
                  <Download size={13} /> Re-Download Deck
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 my-2 animate-fade-in">
                
                {/* Input Fields Row */}
                <div className="space-y-1">
                  <label className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <User size={10} className="text-emerald-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Managing Principal"
                    value={investorInfo.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs placeholder-slate-500 text-white outline-none focus:border-emerald-500 focus:bg-slate-900 transition font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <Mail size={10} className="text-emerald-500" /> Institutional Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="principal@firm.com"
                    value={investorInfo.corporateEmail}
                    onChange={(e) => handleInputChange('corporateEmail', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs placeholder-slate-500 text-white outline-none focus:border-emerald-500 focus:bg-slate-900 transition font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <Building size={10} className="text-emerald-500" /> Company / Venture Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Capital Sourcing Group"
                    value={investorInfo.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs placeholder-slate-500 text-white outline-none focus:border-emerald-500 focus:bg-slate-900 transition font-medium"
                  />
                </div>

                {/* 🟢 ENHANCED, MASSIVE PROMINENT CONVERSION SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white transition-all rounded-2xl py-5 mt-3 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/40 border border-emerald-500/20 group"
                >
                  <Download size={15} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
                  Unlock & Download Investor Deck
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </button>

              </form>
            )}

            {/* LOWER PORTION FOOTNOTE */}
            <div className="mt-4 pt-4 border-t border-slate-800/60">
              <p className="text-[10px] font-mono text-center text-slate-500 uppercase tracking-wider leading-none">
                Confidential PDF Data • Technical Portfolio Version 2.06
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Investors;