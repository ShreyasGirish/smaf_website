import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Globe,
  Users,
  Factory,
  ShieldCheck,
  Truck,
  MapPin,
  Package,
  CheckCircle,
  Maximize2,
  X,
  Sparkles
} from 'lucide-react';

const GlobalPresence = () => {
  const globalMapImg = `${import.meta.env.BASE_URL}images/global-map.jpg`;

  // States for handling popups & layout scroll locking
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Freeze background window scrolling when lightbox is active
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

  const strengths = [
    {
      title: 'Strategic Location',
      desc: 'Located in Karnataka, India, close to major gherkin-growing regions ensuring dependable raw material sourcing.',
      icon: <MapPin size={24} />
    },
    {
      title: 'Global Compliance',
      desc: 'FSSC 22000, FSSAI, APEDA, Kosher and IEC certifications supporting international trade.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Export Logistics',
      desc: 'Efficient processing, traceability systems and export-ready operations for global customers.',
      icon: <Truck size={24} />
    },
    {
      title: 'Flexible Supply',
      desc: 'Custom packaging, private label support and industrial bulk supply capabilities.',
      icon: <Package size={24} />
    }
  ];

  return (
    <section id="global" className="py-24 bg-[#FCFBF7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Global Presence
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Global Reach.
            <span className="text-emerald-600"> Trusted Quality.</span>
          </h2>

          <p className="text-slate-600 text-lg font-light max-w-3xl leading-relaxed">
            Delivering premium agricultural products from India to international
            food manufacturers, processors, distributors and retail partners.
          </p>
        </div>

        {/* STATS WITH SUBTLE GREEN TINT */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-[#F7FAF4] p-8 rounded-[2.5rem] border border-emerald-100/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-5">
              <Users size={22} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">1200+</h3>
            <p className="text-slate-500 text-sm mt-1">Partner Farmers</p>
          </div>

          <div className="bg-[#F7FAF4] p-8 rounded-[2.5rem] border border-emerald-100/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-5">
              <Factory size={22} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">3000 MT</h3>
            <p className="text-slate-500 text-sm mt-1">Annual Capacity</p>
          </div>

          <div className="bg-[#F7FAF4] p-8 rounded-[2.5rem] border border-emerald-100/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-5">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">FSSC</h3>
            <p className="text-slate-500 text-sm mt-1">22000 Certified</p>
          </div>

          <div className="bg-[#F7FAF4] p-8 rounded-[2.5rem] border border-emerald-100/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-5">
              <CheckCircle size={22} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">100%</h3>
            <p className="text-slate-500 text-sm mt-1">Traceable Supply</p>
          </div>
        </div>

        {/* FIXED: EXPORT MARKETS INFO HEADLINE REPOSITIONED DIRECTLY ON TOP OF LOGISTICS IMAGE */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-emerald-700" size={26} />
            <h3 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight">
              Established Export Markets
            </h3>
          </div>
          <p className="text-slate-600 max-w-3xl font-light text-base leading-relaxed">
            Proudly supplying premium, export-grade agricultural products to safety-compliant distribution networks 
            and retail private labels across major international pipelines mapped below.
          </p>
        </div>

        {/* GLOBAL MAP IMAGE CONTAINER WITH UNIFIED ENLARGE OVERLAY */}
        <div className="mb-24">
          <div 
            onClick={() => setActiveImage({ src: globalMapImg, alt: "Sri Mookambika Agro Foods - Global Export Logistics Map Network" })}
            className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 relative cursor-zoom-in group/map"
          >
            <img
              src={globalMapImg}
              alt="Global Export Network Map"
              className="w-full h-auto max-h-[550px] object-cover transform group-hover/map:scale-[1.005] transition duration-700 ease-out"
            />
            {/* Standardized Emerald Button Centered Overlay */}
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-2xl font-sans font-bold tracking-wider text-sm border border-teal-500/30 transform translate-y-3 group-hover/map:translate-y-0 transition-all duration-300">
                <Maximize2 size={18} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
          </div>
        </div>

        {/* WHY GLOBAL BUYERS CHOOSE SMAF WITH SUBTLE GREEN TINT */}
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
                className="bg-[#F7FAF4] p-10 rounded-[2.5rem] border border-emerald-100/60 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
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

      {/* UNIFIED MODAL LIGHTBOX OVERLAY PORTAL */}
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
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-white p-1"
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

export default GlobalPresence;