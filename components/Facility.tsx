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
  X
} from 'lucide-react';

const Facility = () => {
  // States for handling popups & layout locking
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

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

  return (
    <section id="facility" className="py-28 bg-[#FCFBF7]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-700 mb-4">
            <MapPin size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Processing Hub
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Strategic Advantage – Ranebennur, Karnataka
          </h2>

          <p className="text-slate-600 text-lg font-light max-w-3xl leading-relaxed">
            Located at the heart of India’s gherkin-growing belt, our processing
            facility ensures unmatched freshness, traceability, and export reliability.
          </p>
        </div>

        {/* UNIFORM OPERATIONAL STATISTICS BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-slate-100 shadow-sm rounded-[2.5rem] p-8 flex items-center gap-6 hover:shadow-md hover:border-emerald-100 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">2.5 MT / hour</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Processing Speed</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 shadow-sm rounded-[2.5rem] p-8 flex items-center gap-6 hover:shadow-md hover:border-emerald-100 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Package size={24} />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">3,000 MT</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Annual Throughput</p>
            </div>
          </div>
        </div>

        {/* UNIFORM CAPABILITY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
              <Clock size={22} />
            </div>
            <h4 className="font-serif font-bold text-lg text-slate-800 mb-2">Proximity Advantage</h4>
            <p className="text-sm text-slate-600 font-light">
              &lt; 8 hours farm-to-plant time
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
              <ShieldCheck size={22} />
            </div>
            <h4 className="font-serif font-bold text-lg text-slate-800 mb-2">Traceability</h4>
            <p className="text-sm text-slate-600 font-light">
              Area of cultivation origin mapping
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
              <RefreshCw size={22} />
            </div>
            <h4 className="font-serif font-bold text-lg text-slate-800 mb-2">Continuous Supply</h4>
            <p className="text-sm text-slate-600 font-light">
              Sunrise-to-sunset intake
            </p>
          </div>
        </div>

        {/* IMAGES WITH UNIFIED CLICK TO ENLARGE FEATURE OVERLAYS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD 1: FACILITY IMAGE */}
          <div 
            onClick={() => setActiveImage({ src: `${import.meta.env.BASE_URL}images/facility.jpg`, alt: "Advanced Processing Facility" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/facility"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/facility.jpg`}
              alt="Processing facility"
              className="w-full h-full object-cover transform group-hover/facility:scale-102 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/facility:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-2xl font-sans font-bold tracking-wider text-sm border border-teal-500/30 transform translate-y-3 group-hover/facility:translate-y-0 transition-all duration-300">
                <Maximize2 size={18} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10">
              <h5 className="text-white font-serif text-2xl mb-1">
                Advanced Processing Facility
              </h5>
              <p className="text-emerald-300/90 text-sm font-light">
                High-throughput industrial processing systems
              </p>
            </div>
          </div>

          {/* CARD 2: FARMERS IMAGE */}
          <div 
            onClick={() => setActiveImage({ src: `${import.meta.env.BASE_URL}images/farmer-network.jpg`, alt: "Integrated Farmer Sourcing Network" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/farmers"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/farmer-network.jpg`}
              alt="Farmer sourcing network"
              className="w-full h-full object-cover transform group-hover/farmers:scale-102 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/farmers:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-2xl font-sans font-bold tracking-wider text-sm border border-teal-500/30 transform translate-y-3 group-hover/farmers:translate-y-0 transition-all duration-300">
                <Maximize2 size={18} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10">
              <h5 className="text-white font-serif text-2xl mb-1">
                Integrated Farmer Network
              </h5>
              <p className="text-emerald-300/90 text-sm font-light">
                Direct sourcing from 1,200+ smallholder farmers
              </p>
            </div>
          </div>

          {/* CARD 3: BRINE TANKS (NEW) */}
          <div 
            onClick={() => setActiveImage({ src: `${import.meta.env.BASE_URL}images/brinetanks.jpg`, alt: "Industrial Brine Tank Infrastructure" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/brinetanks"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/brinetanks.jpg`}
              alt="Industrial brine storage infrastructure"
              className="w-full h-full object-cover transform group-hover/brinetanks:scale-102 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/brinetanks:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-2xl font-sans font-bold tracking-wider text-sm border border-teal-500/30 transform translate-y-3 group-hover/brinetanks:translate-y-0 transition-all duration-300">
                <Maximize2 size={18} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10">
              <h5 className="text-white font-serif text-2xl mb-1">
                Brine Storage Infrastructure
              </h5>
              <p className="text-emerald-300/90 text-sm font-light">
                High-capacity food-grade processing and curing tanks
              </p>
            </div>
          </div>

          {/* CARD 4: BRINE FERMENTATION PROCESS (NEW) */}
          <div 
            onClick={() => setActiveImage({ src: `${import.meta.env.BASE_URL}images/brinetank-clean.jpg`, alt: "Brine Tank Fermentation Process Quality Control" })}
            className="relative h-[380px] rounded-[3rem] overflow-hidden shadow-md border border-slate-100 cursor-zoom-in group/fermentation"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/brinetank-clean.jpg`}
              alt="Brine tank fermentation verification process"
              className="w-full h-full object-cover transform group-hover/fermentation:scale-102 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/fermentation:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-2xl font-sans font-bold tracking-wider text-sm border border-teal-500/30 transform translate-y-3 group-hover/fermentation:translate-y-0 transition-all duration-300">
                <Maximize2 size={18} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10">
              <h5 className="text-white font-serif text-2xl mb-1">
                Fermentation Quality Management
              </h5>
              <p className="text-emerald-300/90 text-sm font-light">
                Direct oversight and validation of equilibrium brine curing parameters
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* UNIFIED MODAL LIGHTBOX OVERLAY PORTAL RUN TIME BLOCK */}
      {mounted && activeImage && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out animate-fade-in"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/90 pointer-events-none" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-6xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-5 bg-slate-900/80 px-6 py-2 rounded-full shadow-md border border-white/5">
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