import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Droplet,
  Layers,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  X,
  Maximize2,
  Tags,
  FileText,
  Settings,
  Scale,
  ArrowRight
} from "lucide-react";

const Products: React.FC = () => {
  /* PUBLIC ASSET PATHS */
  const product1Img = `${import.meta.env.BASE_URL}images/product1.jpg`;
  const product2Img = `${import.meta.env.BASE_URL}images/product2.jpg`;
  const product3Img = `${import.meta.env.BASE_URL}images/product3.jpg`;

  // States for handling popups & SSR hydration
  const [mounted, setMounted] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeSpecs, setActiveSpecs] = useState<{ name: string; desc: string; specs: string[] } | null>(null);

  // Mark component as mounted to safely use createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modals are active
  useEffect(() => {
    if (activeImage || activeSpecs) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage, activeSpecs]);

  const productCards = [
    {
      name: "Premium Gherkins",
      img: product1Img,
      sections: [
        {
          title: "Available Styles",
          items: ["Whole", "Cut", "Diced", "Halves", "Chips"]
        },
        {
          title: "Processing Media",
          items: ["Natural Vinegar", "Acetic Acid", "Salt Brine"]
        }
      ]
    },
    {
      name: "Pickled Vegetables",
      img: product2Img,
      desc: "Export-ready pickled vegetables processed under strict food safety systems.",
      sections: [
        {
          title: "Available In",
          items: ["Natural Vinegar", "Acetic Acid", "Salt Brine"]
        }
      ]
    },
    {
      name: "Fermented Products",
      img: product3Img,
      desc: "Naturally fermented vegetables developed through controlled lactic acid fermentation.",
      sections: [
        {
          title: "Benefits",
          items: ["Authentic Taste", "No Vinegar", "Probiotic Friendly", "Global Quality Standards"]
        }
      ]
    }
  ];

  const mediaTypes = [
    {
      name: "Natural Vinegar (NV) Product",
      desc: "Food-grade vinegar media for burgers, condiments, and snacks.",
      specs: [
        "Acidity Range: 2.0% – 3.8% (as Acetic Acid)",
        "Salt Content: 2.5% – 4.5% NaCl max",
        "pH Threshold: Below 3.3 ensuring maximum stability",
        "Preservatives: Custom specific. Industrial product will have sulfites as preservative. We can offer preservative free also.",
        "Packaging Solutions: 260 ltrs / 240 ltrs HDPE food grade drums or Food Grade Pails. Palletized / Non-Palletized.",
        "Ideal For: Retail private labels, premium condiments, burger quick-service chains."
      ]
    },
    {
      name: "Acetic Acid (AA) Product",
      desc: "Precisely acidified solution ensuring long-haul stability.",
      specs: [
        "Acidity Range: 1.5% – 4.0% (Customizable tolerances)",
        "Salt Content: 2.0% – 5.0% depending on customer spec sheets",
        "pH Threshold: Below 3.3 ensuring product safety and stability",
        "Heavy Metals / Defect Tolerance: Strictly compliant with US-FDA & EU standard criteria",
        "Preservatives: Both with preservative or without preservative products are available",
        "Packaging Solutions: 260 ltr / 240 ltr HDPE food grade drums or in food grade Pails",
        "Ideal For: High-volume industrial food processors, global sauce manufacturers."
      ]
    },
    {
      name: "Fermented Product",
      desc: "Traditional fermentation calibrated to suit customer profiles.",
      specs: [
        "Lactic Acid Level: Min 0.6% generated via natural active fermentation",
        "Salt Base: 6.0% – 14.0% NaCl (high brine barrier for bulk raw transport)",
        "pH Threshold: Below 3.8 ensuring product safety and stability",
        "Texture and Firmness: Verified by bite test parameters",
        "Microbial Baseline: Controlled lactic acid bacteria, zero active coliform",
        "Packaging Solutions: 260 ltrs / 240 ltrs HDPE food grade drums or Food Grade Pails",
        "Ideal For: Traditional American-style salt pickles, re-packing facilities."
      ]
    }
  ];

  const privateLabelFeatures = [
    {
      title: "Customer Branding",
      desc: "Seamless integration of your global corporate or retail identity directly onto custom container specs.",
      icon: <Tags className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Custom Labels",
      desc: "Full assistance with international regulatory compliance layout formatting and print-ready tailored labeling.",
      icon: <FileText className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Customized Recipes",
      desc: "Tailored acidity bounds, salt profiles, and herb blends calibrated cleanly for specific regional demographics.",
      icon: <Settings className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section className="py-24 bg-[#FCFBF7]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-600" />
              Bulk Export Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              Industrial Gherkins & Pickled Vegetables
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Semi-finished industrial crop products engineered for multinational 
              processors, private labels, and global institutional supply chains.
            </p>
          </div>

          {/* RIGHT SIDE DATA BADGE & SAMPLE BUTTON CONTAINER */}
          <div className="flex flex-col gap-4 min-w-[280px] w-full lg:w-auto">
            <div className="bg-emerald-800 text-white p-8 rounded-[2.5rem] shadow-xl flex items-center gap-6">
              <div className="w-14 h-14 bg-emerald-700/50 rounded-2xl flex items-center justify-center text-emerald-300">
                <Layers size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                  Grade Range Calibrations
                </p>
                <p className="text-2xl font-bold mt-0.5">300/450 → 5/10</p>
              </div>
            </div>

            {/* INTEGRATED SAMPLES ORDER BUTTON */}
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-800 font-sans font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-2xl border border-emerald-100 shadow-sm transition-all duration-200 active:scale-95 group/btn"
            >
              <span>Order Our Latest Samples</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* COMPONENT CARDS MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {productCards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[3.5rem] overflow-hidden shadow-sm border border-slate-100 border-b-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div 
                  onClick={() => setActiveImage({ src: card.img, alt: card.name })}
                  className="h-64 overflow-hidden relative bg-slate-100 cursor-zoom-in group/img animate-fade-in"
                >
                  <img 
                    src={card.img} 
                    alt={card.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  {/* UNIFIED ENLARGE HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="bg-emerald-800 text-white px-5 py-3 rounded-xl flex items-center gap-2.5 shadow-2xl font-sans font-bold tracking-wider text-xs border border-teal-500/30 transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                      <Maximize2 size={16} className="text-teal-300" />
                      <span>CLICK TO ENLARGE IMAGE</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-6 left-8 bg-white/95 backdrop-blur-sm text-slate-900 font-serif text-xl px-5 py-2.5 rounded-2xl shadow-sm pointer-events-none">
                    {card.name}
                  </span>
                </div>

                <div className="p-8 md:p-10">
                  {card.desc && (
                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {card.desc}
                    </p>
                  )}

                  <div className="space-y-6">
                    {card.sections.map((sec, sIdx) => (
                      <div key={sIdx}>
                        <h5 className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          {sec.title}
                        </h5>
                        <ul className="grid grid-cols-2 gap-2">
                          {sec.items.map((item, iIdx) => (
                            <li 
                              key={iIdx} 
                              className="text-slate-700 text-sm flex items-center gap-2 font-medium"
                            >
                              <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-700" /> Global Standards
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PRIVATE LABEL MANUFACTURING */}
        <div className="mb-24 bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-[4rem] p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-10 translate-y-10">
            <Tags size={400} />
          </div>
          
          <div className="max-w-2xl mb-12">
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-3 block">
              Value-Added Global Services
            </span>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              Private Label Manufacturing
            </h3>
            <p className="text-emerald-100/80 font-light text-sm md:text-base leading-relaxed">
              We provide end-to-end processing execution setups tailored cleanly 
              to match your brand specifications, commercial volumes, and distribution metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {privateLabelFeatures.map((feat, fIdx) => (
              <div 
                key={fIdx} 
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-md">
                  {feat.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-emerald-100/70 text-xs leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESSING MEDIA SUBSECTION */}
        <div>
          <div className="border-b border-slate-200 pb-6 mb-10 flex items-center gap-3">
            <div className="w-2.5 h-6 bg-emerald-700 rounded-full" />
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">Standardized Packing Media Options</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaTypes.map((m, i) => (
              <div
                key={i}
                className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm relative group hover:border-emerald-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                  <Droplet size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">{m.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{m.desc}</p>
                
                <div 
                  onClick={() => setActiveSpecs({ name: m.name, desc: m.desc, specs: m.specs })}
                  className="flex items-center text-emerald-700 font-bold text-[10px] uppercase tracking-wider cursor-pointer hover:text-emerald-900 transition-colors"
                >
                  Technical Specs <Maximize2 size={12} className="ml-1.5 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* PORTAL OVERLAYS */}
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
            className="w-full max-w-5xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-6 bg-slate-900/80 px-6 py-2 rounded-full shadow-md border border-white/5">
              {activeImage.alt}
            </p>
          </div>
        </div>,
        document.body
      )}

      {mounted && activeSpecs && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveSpecs(null)}
        >
          <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />

          <div 
            className="bg-white rounded-[2.5rem] p-6 md:p-10 max-w-xl w-full border border-slate-100 shadow-2xl relative z-10 text-slate-800 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors active:scale-95"
              onClick={() => setActiveSpecs(null)}
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale size={20} />
              </div>
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight">{activeSpecs.name}</h4>
            </div>
            
            <p className="text-slate-500 text-xs md:text-sm font-light mb-6 pb-4 border-b border-slate-100 leading-relaxed">
              {activeSpecs.desc}
            </p>

            <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-3.5">
              Chemical & Quality Matrices
            </h5>
            
            <ul className="space-y-3">
              {activeSpecs.specs.map((spec, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Products;