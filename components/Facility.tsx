import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  MapPin,
  Clock,
  ShieldCheck,
  RefreshCw,
  Zap,
  Package,
  Maximize2,
  X,
  Sparkles,
  Layers,
  Sprout,
  CheckCircle2
} from 'lucide-react';

const Facility: React.FC = () => {
  // States for handling popups & layout locking
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  // Pre-resolve asset strings using Vite's BASE_URL pattern
  const imgFacility = `${import.meta.env.BASE_URL}images/facility.jpg`;
  const imgFarmerNetwork = `${import.meta.env.BASE_URL}images/farmer-network.jpg`;
  const imgBrineTanks = `${import.meta.env.BASE_URL}images/brinetanks.jpg`;
  const imgBrineClean = `${import.meta.env.BASE_URL}images/brinetank-clean.jpg`;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Freeze background window scrolling when any lightbox is active
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  const facilitySpecs = [
    {
      title: "Proximity & Speed Advantage",
      metric: "< 8 Hours",
      sub: "Farm-to-Plant Intake Window",
      desc: "Direct transit from regional growers halts cellular degradation and preserves crunch naturally before brine immersion.",
      icon: <Clock size={20} />
    },
    {
      title: "Active Processing Capacity",
      metric: "2.5 MT / Hr",
      sub: "Mechanized & Manual Grading",
      desc: "Dual sorting arrays featuring mechanized count calibrations and 100% manual visual inspection.",
      icon: <Zap size={20} />
    },
    {
      title: "Annual Throughput Baseline",
      metric: "3,000 MT",
      sub: "Export Packaging Volume",
      desc: "Engineered for consistent container freight delivery in 240L–260L HDPE barrels and customized packaging.",
      icon: <Package size={20} />
    },
    {
      title: "Batch-Level Traceability",
      metric: "100% Origin Mapped",
      sub: "Area of Cultivation Logs",
      desc: "End-to-end harvest tracking connecting export barrels back to specific regional farmer clusters.",
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <section id="facility" className="py-28 bg-[#FCFBF7] border-t border-slate-100 text-left">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-700 font-mono font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Infrastructure & Processing Hub
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Strategic Processing Advantage <br />
            <span className="text-emerald-600 font-serif">Ranebennur, Karnataka</span>
          </h2>

          <p className="text-slate-600 text-lg font-light max-w-3xl leading-relaxed">
            Situated directly within South India’s primary gherkin-cultivation corridor, our 
            <b> 4-acre green campus</b> combines 25,000 sq. ft. of advanced curing infrastructure with 
            rapid farm-to-factory logistics for export reliability.
          </p>
        </div>

        {/* FACILITY ARCHITECTURE & OPERATIONAL MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilitySpecs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                  {spec.icon}
                </div>
                
                <span className="text-2xl md:text-3xl font-serif font-bold text-slate-900 block mb-1">
                  {spec.metric}
                </span>

                <p className="text-emerald-700 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">
                  {spec.sub}
                </p>

                <h4 className="text-base font-bold text-slate-800 mb-2">
                  {spec.title}
                </h4>

                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  {spec.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <CheckCircle2 size={12} className="text-emerald-600" />
                <span>Verified Facility Metric</span>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGES GRAPHIC GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">

          {/* CARD 1: FACILITY IMAGE */}
          <div 
            onClick={() => setActiveImage({ src: imgFacility, alt: "Advanced Processing Hub & Brining Grounds - Ranebennur" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/card bg-slate-900"
          >
            <img
              src={imgFacility}
              alt="Processing facility"
              className="w-full h-full object-cover transform group-hover/card:scale-105 transition duration-700 ease-out"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            
            {/* Top Badge */}
            <div className="absolute top-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Maximize2 size={12} />
                <span>Enlarge</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
                25,000 Sq. Ft. Campus
              </span>
              <h5 className="text-white font-serif text-2xl mb-1 leading-tight">
                Advanced Processing Facility
              </h5>
              <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                6,000 sq. ft. core processing bay operating under international FSSC 22000 safety protocols.
              </p>
            </div>
          </div>

          {/* CARD 2: FARMERS IMAGE */}
          <div 
            onClick={() => setActiveImage({ src: imgFarmerNetwork, alt: "Integrated Farmer Sourcing Network - 1,200+ Smallholders" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/card bg-slate-900"
          >
            <img
              src={imgFarmerNetwork}
              alt="Farmer sourcing network"
              className="w-full h-full object-cover transform group-hover/card:scale-105 transition duration-700 ease-out"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Maximize2 size={12} />
                <span>Enlarge</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
                50–200 km Procurement Radius
              </span>
              <h5 className="text-white font-serif text-2xl mb-1 leading-tight">
                Integrated Farmer Network
              </h5>
              <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                Contract farming partnerships offering IPM mentorship and crop pricing safety layers.
              </p>
            </div>
          </div>

          {/* CARD 3: BRINE TANKS */}
          <div 
            onClick={() => setActiveImage({ src: imgBrineTanks, alt: "Industrial Brine Tank Infrastructure & Curing Hub" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/card bg-slate-900"
          >
            <img
              src={imgBrineTanks}
              alt="Industrial brine storage infrastructure"
              className="w-full h-full object-cover transform group-hover/card:scale-105 transition duration-700 ease-out"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Maximize2 size={12} />
                <span>Enlarge</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
                High-Capacity Curing Hub
              </span>
              <h5 className="text-white font-serif text-2xl mb-1 leading-tight">
                Brine Storage Infrastructure
              </h5>
              <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                Dedicated equilibrium brine curing array maintaining year-round export inventory.
              </p>
            </div>
          </div>

          {/* CARD 4: BRINE FERMENTATION PROCESS */}
          <div 
            onClick={() => setActiveImage({ src: imgBrineClean, alt: "Brine Tank Fermentation Process & Chemical Assay Control" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/card bg-slate-900"
          >
            <img
              src={imgBrineClean}
              alt="Brine tank fermentation verification process"
              className="w-full h-full object-cover transform group-hover/card:scale-105 transition duration-700 ease-out"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Maximize2 size={12} />
                <span>Enlarge</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">
                Analytical Quality Control
              </span>
              <h5 className="text-white font-serif text-2xl mb-1 leading-tight">
                Fermentation Management
              </h5>
              <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                Real-time salinometer and digital pH assays validating acidity before drum sealing.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* FIXED LIGHTBOX MODAL OVERLAY PORTAL */}
      {mounted && activeImage && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out animate-fade-in"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/95 pointer-events-none" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95 cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-5xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-slate-900"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-5 bg-slate-900/80 px-6 py-2.5 rounded-full shadow-md border border-white/5 text-center">
              {activeImage.alt}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Facility;