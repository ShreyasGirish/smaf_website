import React, { useState } from 'react';
import { Globe, Users, Factory, ShieldCheck, CheckCircle, Sparkles, Anchor, Milestone, ShieldAlert } from 'lucide-react';

const GlobalPresence = () => {
  const globalMapImg = `${import.meta.env.BASE_URL}images/global-map.jpg`;
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Precise percentage-based coordinates mapped directly over the flags in the original graphic
  const mapHotspots = [
    {
      id: 'US',
      name: 'United States',
      position: 'top-[56%] left-[16.5%]',
      details: 'Primary private label retail pipelines.',
      compliance: 'USFDA Compliant'
    },
    {
      id: 'CA',
      name: 'Canada',
      position: 'top-[36%] left-[13.5%]',
      details: 'Bulk processing ingredient channels.',
      compliance: 'SFCR Certified'
    },
    {
      id: 'FR',
      name: 'France',
      position: 'top-[46%] left-[43.5%]',
      details: 'Institutional foodservice distribution.',
      compliance: 'EU Standard Compliant'
    },
    {
      id: 'JP',
      name: 'Japan',
      position: 'top-[50%] left-[67.5%]',
      details: 'Premium retail packaging networks.',
      compliance: 'MHLW Food Sanitation Act'
    }
  ];

  const strengths = [
    {
      title: 'Strategic Location',
      desc: 'Located in Karnataka, India, close to major gherkin-growing regions ensuring dependable raw material sourcing.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    },
    {
      title: 'Global Compliance',
      desc: 'FSSC 22000, FSSAI, APEDA, Kosher and IEC certifications supporting international trade.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Export Logistics',
      desc: 'Efficient processing, traceability systems and export-ready operations for global customers.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    },
    {
      title: 'Flexible Supply',
      desc: 'Custom packaging, private label support and industrial bulk supply capabilities.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    }
  ];

  return (
    <section id="global" className="py-24 bg-[#FCFBF7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* NATIVE SECTION HEADER BLOCK */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Global Pipeline Network
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Established Global Footprint
          </h2>
          <p className="text-slate-600 text-base font-light max-w-3xl leading-relaxed">
            Delivering premium, export-grade agricultural solutions across premier international channels. 
            Hover over the active nodes to inspect regulatory compliance parameters.
          </p>
        </div>

        {/* STATS INFRASTRUCTURE GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: "1200+", label: "Partner Farmers", icon: <Users size={22} /> },
            { value: "3000 MT", label: "Annual Capacity", icon: <Factory size={22} /> },
            { value: "FSSC", label: "22000 Certified", icon: <ShieldCheck size={22} /> },
            { value: "100%", label: "Traceable Supply", icon: <CheckCircle size={22} /> }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#F7FAF4] p-8 rounded-[2.5rem] border border-emerald-100/60 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-5">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800">{stat.value}</h3>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 🟢 UNIFIED CARD INTERFACE WITH DYNAMIC RADAR NODES */}
        <div className="mb-24 relative bg-white rounded-[3rem] shadow-xl border border-slate-100 p-3 md:p-5 overflow-hidden">
          <div className="relative w-full h-auto">
            
            {/* Standard Approved Base Graphics Layout */}
            <img
              src={globalMapImg}
              alt="Sri Mookambika Agro Foods Global Export Network"
              className="w-full h-auto block select-none rounded-[2rem]"
            />

            {/* RADAR TARGET HOTSPOTS PLACED PERFECTLY OVER SPECIFIED IMAGE FLAGS */}
            {mapHotspots.map((node) => {
              const isCurrent = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  className={`absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 z-20 ${node.position}`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Dynamic Ring Pulsing over the flag frame circles */}
                  <span className="absolute flex h-full w-full items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white shadow-md cursor-pointer"></span>
                  </span>

                  {/* HIGH-END SUSPENDED HOVER OVERLAY DISPLAY */}
                  {isCurrent && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-slate-950/95 text-white p-5 rounded-2xl shadow-2xl border border-emerald-500/30 backdrop-blur-md min-w-[240px] z-50 pointer-events-none animate-fade-in">
                      {/* Triangle Arrow Base Decoration */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-slate-950/95" />
                      
                      <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5 mb-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <h4 className="font-serif font-bold text-sm tracking-wide text-slate-100">{node.name}</h4>
                      </div>
                      
                      <div className="space-y-2 font-sans">
                        <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                          {node.details}
                        </p>
                        <div className="inline-flex items-center gap-1 bg-emerald-950/40 border border-emerald-900/60 px-2 py-0.5 rounded-md font-mono text-[9px] text-emerald-400 uppercase tracking-wider font-bold">
                          ✓ {node.compliance}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>

        {/* CORE CORPORATE CAPACITIES FLOOR */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-6 bg-emerald-700 rounded-full" />
            <h3 className="text-3xl font-serif text-slate-900 tracking-tight">
              Why Global Buyers Choose SMAF
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((item, i) => (
              <div
                key={i}
                className="bg-[#F7FAF4] p-10 rounded-[2.5rem] border border-emerald-100/60 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;