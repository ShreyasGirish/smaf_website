import React, { useState } from 'react';
import { Factory, ShieldCheck, CheckCircle, Sparkles, Truck, Box, Check } from 'lucide-react';

const GlobalPresence: React.FC = () => {
  const globalMapImg = `${import.meta.env.BASE_URL}images/global-map-clean.jpg`;
  const factoryImg = `${import.meta.env.BASE_URL}images/factory-map.jpg`;
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // ── POSITIONING NOTES ──────────────────────────────────────────────────
  // top/left: percent of the image's own width/height, sampled pixel-by-
  // pixel directly from the real /images/global-map-clean.jpg (1024×390)
  //
  // Note: Adjusted US 'left' from 12.11 to 14.80 to nudge it slightly right,
  // and updated its SVG curve endpoint to match perfectly.
  const mapHotspots = [
    {
      id: 'CA',
      name: 'Canada',
      top: 38.87,
      left: 13.81,
      size: 42,
      details: 'High-quality agricultural ingredients feeding trusted domestic supply chains.',
      compliance: 'SFCR Compliant',
      curve: 'M 51.66 56.67 Q 30 15 13.81 38.87'
    },
    {
      id: 'US',
      name: 'United States',
      top: 51.38,
      left: 14.80, // Shifted to the right from 12.11
      size: 46,
      details: 'Premium agricultural product pipelines supplying major consumer networks.',
      compliance: 'USFDA Registered',
      curve: 'M 51.66 56.67 Q 27 55 14.80 51.38' // Target updated to match new left position
    },
    {
      id: 'FR',
      name: 'France',
      top: 40.93,
      left: 34.85,
      size: 40,
      details: 'Institutional distribution channels across major European markets.',
      compliance: 'EU Standard Verified',
      curve: 'M 51.66 56.67 Q 45 22 34.85 40.93'
    },
    {
      id: 'JP',
      name: 'Japan',
      top: 53.09,
      left: 66.12,
      size: 48,
      details: 'Premium retail pack pipelines serving quality-conscious networks.',
      compliance: 'MHLW Compliant',
      curve: 'M 51.66 56.67 Q 60 32 66.12 53.09'
    },
    {
      id: 'IN',
      name: 'Karnataka, India',
      top: 56.67,
      left: 51.66,
      size: 40,
      details: 'Our manufacturing facility in Ranebennur, Karnataka — where every batch begins.',
      compliance: 'Origin & HQ',
      image: factoryImg,
      curve: null
    }
  ];

  const strengths = [
    {
      title: 'Our Strategic Locations',
      desc: 'Corporate operations in Hubballi with state-of-the-art manufacturing facilities based in Ranebennur, Karnataka, India—positioning us perfectly within raw material sourcing zones.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
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
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate(-50%, 6px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* SECTION HEADER BLOCK */}
        <div className="max-w-4xl mb-16 text-left">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            GLOBAL REACH. TRUSTED QUALITY.
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Delivering Premium Agricultural Products From India to the World
          </h2>
          <p className="text-slate-600 text-base font-light max-w-3xl leading-relaxed">
            Proudly supplying quality-conscious customers across major international marketplaces.
            Hover over our export hubs to inspect operational metrics.
          </p>
        </div>

        {/* INFRASTRUCTURE STATISTICS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
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

        {/* FIXED IMAGE CONTAINER BLOCK LAYER */}
        <div className="mb-24 relative bg-white rounded-[3rem] shadow-xl border border-slate-100 p-3 md:p-5 text-center">

          {/* Floating corridor counter chip */}
          <div className="absolute bottom-7 md:bottom-9 left-7 md:left-9 z-30 flex items-center gap-2 bg-slate-950/90 backdrop-blur-md text-white pl-3 pr-4 py-2 rounded-full shadow-lg border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-200">
              4 Active Export Corridors
            </span>
          </div>

          <div className="relative inline-block w-full h-auto">

            <img
              src={globalMapImg}
              alt="Sri Mookambika Agro Foods Global Export Network Map"
              className="w-full h-auto block select-none rounded-[2rem]"
            />

            {/* ROUTE HIGHLIGHT OVERLAY */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
              {mapHotspots.filter(n => n.curve).map((node) => (
                <path
                  key={node.id}
                  d={node.curve as string}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={activeNode === node.id ? 0.45 : 0}
                  strokeLinecap="round"
                  strokeDasharray="2.2 1.6"
                  vectorEffect="non-scaling-stroke"
                  style={{
                    opacity: activeNode === node.id ? 1 : 0,
                    transition: 'opacity 400ms ease, stroke-width 400ms ease',
                    filter: 'drop-shadow(0 0 2px rgba(16,185,129,0.8))'
                  }}
                />
              ))}
            </svg>

            {/* MAP HOTSPOTS */}
            {mapHotspots.map((node) => {
              const isCurrent = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  className="absolute z-20"
                  style={{
                    top: `${node.top}%`,
                    left: `${node.left}%`,
                    width: `${node.size}px`,
                    height: `${node.size}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="relative w-full h-full cursor-pointer">
                    <span
                      className="absolute inset-0 rounded-full transition-all duration-300 ease-out"
                      style={{
                        boxShadow: isCurrent
                          ? '0 0 0 4px rgba(16,185,129,0.35), 0 0 18px 4px rgba(16,185,129,0.45)'
                          : '0 0 0 0 rgba(16,185,129,0)',
                        transform: isCurrent ? 'scale(1.12)' : 'scale(1)'
                      }}
                    />

                    <span
                      className={`absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-emerald-600 border-2 border-white shadow-md transition-transform duration-300 ${isCurrent ? 'scale-110' : 'scale-100'}`}
                      style={{ width: Math.round(node.size * 0.4), height: Math.round(node.size * 0.4) }}
                    >
                      <Check size={9} strokeWidth={3.5} className="text-white" />
                    </span>
                  </div>

                  {/* TOOLTIP CARD */}
                  {isCurrent && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-[240px] bg-slate-950/95 text-white rounded-2xl shadow-2xl border border-emerald-500/30 backdrop-blur-md z-50 pointer-events-none text-left overflow-hidden animate-[fadeInUp_250ms_ease-out]">
                      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600" />
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-slate-950/95" />

                      {node.image && (
                        <img
                          src={node.image}
                          alt={`${node.name} facility`}
                          className="w-full h-24 object-cover"
                        />
                      )}

                      <div className="p-5">
                        <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5 mb-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <h4 className="font-serif font-bold text-sm tracking-wide text-slate-100">{node.name}</h4>
                        </div>

                        <div className="space-y-2 font-sans">
                          <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                            {node.details}
                          </p>
                          <div className="inline-flex items-center gap-1 bg-emerald-950/40 border border-emerald-900/60 px-2 py-0.5 rounded-md font-mono text-[9px] text-emerald-400 uppercase tracking-wider font-bold">
                            <Check size={10} strokeWidth={3} /> {node.compliance}
                          </div>
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
        <div className="text-left">
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