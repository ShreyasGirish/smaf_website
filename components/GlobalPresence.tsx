import React, { useState } from 'react';
import { Globe, Users, Factory, ShieldCheck, CheckCircle, Sparkles, Truck, Box } from 'lucide-react';

const GlobalPresence = () => {
  const globalMapImg = `${import.meta.env.BASE_URL}images/global-map.jpg`;
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Coordinates mapped precisely to line up over the target countries in your infrastructure graphic
  const mapHotspots = [
    {
      id: 'US',
      name: 'United States',
      position: 'top-[54%] left-[16.5%]',
      details: 'Premium agricultural product pipelines supplying major consumer networks.',
      compliance: 'USFDA Registered'
    },
    {
      id: 'CA',
      name: 'Canada',
      position: 'top-[34%] left-[13.5%]',
      details: 'High-quality agricultural ingredients feeding trusted domestic supply chains.',
      compliance: 'SFCR Compliant'
    },
    {
      id: 'FR',
      name: 'France',
      position: 'top-[44%] left-[43.5%]',
      details: 'Institutional distribution channels across major European markets.',
      compliance: 'EU Standard Verified'
    },
    {
      id: 'JP',
      name: 'Japan',
      position: 'top-[48%] left-[67.5%]',
      details: 'Premium retail pack pipelines serving quality-conscious networks.',
      compliance: 'MHLW Compliant'
    }
  ];

  const strengths = [
    {
      title: 'Our Strategic Locations',
      desc: 'Corporate operations in Hubballi with state-of-the-art manufacturing facilities based in Ranebennur, Karnataka, India—positioning us perfectly within raw material sourcing zones.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    },
    {
      title: 'Trusted Global Standards',
      desc: 'Rigorous process parameters, robust safety documentation, and premium certification layers matching international trade criteria.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Export-Ready Logistics',
      desc: 'Seamless processing, integrated tracking frameworks, and dependable shipping infrastructure serving customers across the globe.',
      icon: <Truck size={24} />
    },
    {
      title: 'End-to-End Commitment',
      desc: 'Focused on building long-term, mutually beneficial international buyer partnerships through consistent quality and complete reliance.',
      icon: <Box size={24} />
    }
  ];

  return (
    <section id="global" className="py-24 bg-[#FCFBF7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* SECTION HEADER BLOCK */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            GLOBAL REACH. TRUSTED QUALITY.
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Delivering Premium Agricultural Products From India to the World
          </h2>
          <p className="text-slate-600 text-base font-light max-w-3xl leading-relaxed">
            Proudly supplying quality-conscious customers across major international marketplaces. 
            Hover over our primary distribution hubs to inspect operational metrics.
          </p>
        </div>

        {/* INFRASTRUCTURE STATISTICS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: "Hubballi", label: "Corporate Office", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> },
            { value: "Ranebennur", label: "Manufacturing Facility", icon: <Factory size={22} /> },
            { value: "Premium", label: "Quality Grade", icon: <ShieldCheck size={22} /> },
            { value: "100%", label: "Consistent Trust", icon: <CheckCircle size={22} /> }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#F7FAF4] p-8 rounded-[2.5rem] border border-emerald-100/60 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-5">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 tracking-tight">{stat.value}</h3>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* DYNAMIC MAP HOTSPOT GRAPHIC PANEL */}
        <div className="mb-24 relative bg-white rounded-[3rem] shadow-xl border border-slate-100 p-3 md:p-5 overflow-hidden">
          <div className="relative w-full h-auto">
            
            <img
              src={globalMapImg}
              alt="Sri Mookambika Agro Foods Global Export Network Map"
              className="w-full h-auto block select-none rounded-[2rem]"
            />

            {/* INTERACTIVE COMPLIANCE RADAR NODES */}
            {mapHotspots.map((node) => {
              const isCurrent = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  className={`absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 z-20 ${node.position}`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Pulse Radar Glow Rings */}
                  <span className="absolute flex h-full w-full items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white shadow-md cursor-pointer"></span>
                  </span>

                  {/* HIGH-END SUSPENDED HOVER OVERLAY DISPLAY */}
                  {isCurrent && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-slate-950/95 text-white p-5 rounded-2xl shadow-2xl border border-emerald-500/30 backdrop-blur-md min-w-[240px] z-50 pointer-events-none animate-fade-in">
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

        {/* VALUE CAPACITIES SECTION FOOTER */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-6 bg-emerald-700 rounded-full" />
            <h3 className="text-3xl font-serif text-slate-900 tracking-tight">
              Why Global Partners Trust Our Supply
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