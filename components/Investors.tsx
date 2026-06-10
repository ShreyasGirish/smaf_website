import React from 'react';
import {
  Handshake,
  Factory,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  FileText,
  TrendingUp,
  Download
} from 'lucide-react';

const Investors: React.FC = () => {
  // Direct download handler for the institutional investor profile PDF documentation sheet
  const handleDownloadDeck = () => {
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
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
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

        {/* 🟢 THE OUT-OF-THE-BOX PITCH DECK AND CAPACITIES OVERVIEW DECK */}
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
              <div key={index} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between hover:border-emerald-200 transition-all">
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

          {/* RIGHT SIDEBAR: HIGH-CONVERSION PITCH DECK MEDIA CALLOUT (5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[3rem] p-10 md:p-12 flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Ambient background accent glow ring */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                <FileText size={14} />
                Executive Briefing Room
              </div>

              <h3 className="text-3xl font-serif mb-4 leading-tight text-slate-100">
                Review Our <br />Venture Overview
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed mb-8">
                Access comprehensive performance metrics, localized farming footprint metrics, financial transparency summaries, and multi-year production capacity expansion graphs.
              </p>
            </div>

            {/* DOWLOAD ACTIONS BUTTON TERMINAL HUB */}
            <div className="space-y-4">
              <button
                onClick={handleDownloadDeck}
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white transition-all rounded-2xl py-4.5 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/40 border border-emerald-500/20"
              >
                <Download size={14} strokeWidth={2.5} />
                Download Investor Deck
              </button>
              
              <p className="text-[10px] font-mono text-center text-slate-500 uppercase tracking-wider leading-none">
                PDF Document • Technical Version 2.06
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Investors;