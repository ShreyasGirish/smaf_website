import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ShoppingBag,
  Sparkles,
  Droplets,
  Utensils,
  Leaf,
  Download,
  Award,
  Maximize2,
  X
} from 'lucide-react';

const PrakritvaBrand = () => {
  /* PUBLIC ASSET PATHS (Vite-safe) */
  const brandLogoImg = `${import.meta.env.BASE_URL}images/p-logo.jpg`;
  const gherkinPickleImg = `${import.meta.env.BASE_URL}images/gherkinpickle.jpg`;
  const babyPickleImg = `${import.meta.env.BASE_URL}images/babypickle.jpg`;
  const kokumBottleImg = `${import.meta.env.BASE_URL}images/kokumjuice.jpg`;
  const vinegarBottleImg = `${import.meta.env.BASE_URL}images/vinegar.jpg`;
  const abcPowderImg = `${import.meta.env.BASE_URL}images/abcpowder.jpg`;
  const rosellaPowderImg = `${import.meta.env.BASE_URL}images/rosellapowder.jpg`;
  const innovationImg = `${import.meta.env.BASE_URL}images/prakritva2.jpg`;

  // Lightbox view state for Future Innovation Infographic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Freeze background window scrolling when infographic lightbox is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="brand" className="py-28 bg-[#FCF9F2] border-t border-amber-100">
      {/* Upgraded LED Border Animation Loop Rules */}
      <style>{`
        @keyframes border-conic {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-led-border {
          animation: border-conic 3.5s linear infinite;
        }
        .group:hover .animate-led-border {
          animation-duration: 1.5s;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* BRAND HEADER WITH SEAMLESS LOGO INTEGRATION */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-amber-200 mx-auto">
            <Sparkles size={14} />
            First Introduced at Krishi Mela 2025, Bengaluru
          </div>

          {/* FIXED CRITICAL ALIGNMENT BLOCK FOR IMAGE_298BF1.PNG */}
          <div className="h-16 md:h-24 flex items-center justify-center mb-6 w-full">
            <img 
              src={brandLogoImg} 
              alt="Prakritva - Pure. Natural. Sustainable." 
              className="h-full w-auto object-contain mx-auto transform hover:scale-[1.01] transition-transform duration-300"
              onError={(e) => {
                // Graceful typography fallback heading if asset deployment paths ever break locally
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallbackHeading = document.createElement('h2');
                  fallbackHeading.className = "text-5xl md:text-7xl font-serif text-slate-900 tracking-wide font-bold text-center";
                  fallbackHeading.innerText = "Prakritva";
                  parent.appendChild(fallbackHeading);
                }
              }}
            />
          </div>

          <p className="text-amber-700 text-xl italic mb-8 text-center">
            Taste the Natural Way
          </p>

          <p className="text-slate-600 text-lg font-light leading-relaxed text-center">
            Rooted in Karnataka’s fertile soils, Prakritva proudly debuted its flagship 
            range at "<b>Krishi Mela 2025, Bengaluru</b>". We bring traditional Indian recipes and wellness 
            blends straight from our fields to the modern table. No preservatives. No artificial colors. All products are processed in state-of-the-art certified lines.
          </p>
        </div>

        {/* TRADITIONAL PICKLES */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center shadow-md">
              <Utensils size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-800">Traditional Pickles</h3>
              <p className="text-amber-700/70 text-sm mt-0.5">
                Curated in mustard oil and authentic spices • Launched at Krishi Mela 2025, Bengaluru
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Artisanal Gherkin Pickle',
                img: gherkinPickleImg,
                desc: 'Bold, tangy gherkins crafted with mustard oil, asafoetida and whole spices.',
                badge: 'Curated Recipe'
              },
              {
                name: 'Crunchy Babycorn Pickle',
                img: babyPickleImg,
                desc: 'Hand-cut babycorn pickled in traditional Indian spice blends.',
                badge: 'Authentic Spice'
              }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-sm border border-slate-100 transition-all duration-500 group"
              >
                <div>
                  {/* FULL-BLEED PORTRAIT AMBIENT BACKDROP WRAPPER */}
                  <div className="w-full h-[320px] sm:h-[420px] relative overflow-hidden bg-slate-50">
                    <img
                      src={p.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150"
                      aria-hidden="true"
                    />
                    <img
                      src={p.img}
                      alt={p.name}
                      className="relative z-10 w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                  </div>
                  <div className="p-8 md:p-10 relative z-20 bg-white">
                    <h4 className="text-2xl font-serif text-slate-800 mb-3">{p.name}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
                
                {/* UNIFORM REGULATORY BADGE ROW */}
                <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 bg-white relative z-20 flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold bg-slate-100 px-2.5 py-1 rounded-full">
                    FSSAI Standard
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NATURAL BEVERAGES */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center shadow-md">
              <Droplets size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-800">Natural Beverages</h3>
              <p className="text-amber-700/70 text-sm mt-0.5">Pure botanical elixirs for complete hydration</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Kokum Zest - PROMINENT LED BESTSELLER CARD */}
            <div className="relative rounded-[2.5rem] p-[5px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between bg-white border border-slate-100 hover:-translate-y-1 z-10">
              
              {/* Vibrant LED Conic Beam Tracking Matrix */}
              <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_20%,#f59e0b_40%,#10b981_50%,#f59e0b_60%,transparent_80%)] animate-led-border pointer-events-none" />

              <div className="relative z-10 w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col justify-between flex-grow">
                
                {/* Gated Glassmorphic Bestseller Live Tag */}
                <div className="absolute top-5 right-5 z-30 bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl border border-emerald-400/40 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
                  🔥 Bestseller • Krishi Mela 2025
                </div>

                <div>
                  <div className="w-full h-[320px] sm:h-[420px] relative overflow-hidden bg-slate-50 rounded-t-[2.2rem]">
                    <img 
                      src={kokumBottleImg} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150" 
                      aria-hidden="true"
                    />
                    <img 
                      src={kokumBottleImg} 
                      alt="Kokum Zest"
                      className="relative z-10 w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-out" 
                    />
                  </div>
                  <div className="p-8 md:p-10 relative z-20 bg-white">
                    <h4 className="text-2xl font-serif text-slate-800 mb-3 flex items-center gap-2">
                      Kokum Zest 
                    </h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      Cooling digestive drink made from sun-dried kokum and spices. The undisputed crowd favorite and highest-selling beverage choice.
                    </p>
                  </div>
                </div>
                
                <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 flex items-center gap-2 bg-white relative z-20">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold bg-slate-100 px-2.5 py-1 rounded-full">
                    FSSAI Standard
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
                    100% Botanical
                  </span>
                </div>
              </div>
            </div>

            {/* Natural Vinegar Elixir */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group">
              <div>
                <div className="w-full h-[320px] sm:h-[420px] relative overflow-hidden bg-slate-50">
                  <img 
                    src={vinegarBottleImg} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150" 
                    aria-hidden="true"
                  />
                  <img 
                    src={vinegarBottleImg} 
                    alt="Natural Vinegar Elixir"
                    className="relative z-10 w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-out" 
                  />
                </div>
                <div className="p-8 md:p-10 relative z-20 bg-white">
                  <h4 className="text-2xl font-serif text-slate-800 mb-3">Natural Vinegar Elixir</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    Naturally fermented vinegar supporting digestion and metabolism. Debuted successfully to health-conscious consumers.
                  </p>
                </div>
              </div>
              <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 bg-white relative z-20 flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold bg-slate-100 px-2.5 py-1 rounded-full">
                  FSSAI Standard
                </span>
                <span className="text-[9px] uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-full">
                  Pure Fermented
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* WELLNESS POWDERS */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center shadow-md">
              <Leaf size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-800">Wellness Powders</h3>
              <p className="text-amber-700/70 text-sm mt-0.5">Nutrient-dense formulas introduced at Krishi Mela 2025, Bengaluru</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'ABC Powder',
                img: abcPowderImg,
                badge: 'Vitality Formula'
              },
              {
                name: 'Rosella Powder',
                img: rosellaPowderImg,
                badge: 'Immunity Booster'
              }
            ].map((p, i) => (
              <div 
                key={i}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-[320px] sm:h-[420px] relative overflow-hidden bg-slate-50">
                    <img 
                      src={p.img} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150" 
                      aria-hidden="true"
                    />
                    <img 
                      src={p.img} 
                      alt={p.name}
                      className="relative z-10 w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-out" 
                    />
                  </div>
                  <div className="p-8 md:p-10 relative z-20 bg-white">
                    <h4 className="text-2xl font-serif text-slate-800 mb-3">{p.name}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {p.name === 'ABC Powder' 
                        ? 'Supports energy, circulation and daily vitality. Exceptional reception at our exhibition debut.' 
                        : 'Rich in Vitamin C and antioxidants for immunity support. Another innovative crop discovery shared at the Mela.'}
                    </p>
                  </div>
                </div>
                
                <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 bg-white relative z-20 flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold bg-slate-100 px-2.5 py-1 rounded-full">
                    FSSAI Standard
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE INNOVATION - INCORPORATING EMBEDDED MODAL LIGHTBOX TOGGLE */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">
              Future Innovation
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mt-4 mb-6">
              Beyond Traditional Products
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Building on the tremendous validation received at <b>Krishi Mela 2025, Bengaluru</b>, Prakritva 
              continues to explore sustainable ingredients, vegetable powders, and value-added 
              innovations that convert raw agriculture into future-ready solutions.
            </p>
          </div>

          <div 
            onClick={() => setIsModalOpen(true)}
            className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-amber-100 relative cursor-zoom-in group/roadmap"
          >
            <img
              src={innovationImg}
              alt="Prakritva Future Products Roadmap and Dehydrated Powders Ecosystem"
              className="w-full h-auto object-cover max-h-[520px] object-top transform group-hover/roadmap:scale-[1.01] transition duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/roadmap:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-2xl font-sans font-bold tracking-wider text-sm border border-teal-500/30 transform translate-y-3 group-hover/roadmap:translate-y-0 transition-all duration-300">
                <Maximize2 size={18} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
          </div>
        </div>

        {/* BROCHURE CTA */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-[4rem] p-16 text-center border border-amber-200">
          <h4 className="text-4xl font-serif mb-4">
            Explore the Complete Prakritva Range
          </h4>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Discover our award-winning traditional pickles, highest-selling natural beverages, 
            and foundational wellness powders launched on the farm fields.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}brochures/Prakritva_Product_Brochure.pdf`}
            download
            className="inline-flex items-center gap-3 bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl active:scale-95"
          >
            <Download size={20} />
            Download Product Brochure
          </a>

          <p className="text-[11px] text-amber-700 mt-4 uppercase tracking-widest">
            Retail • Export • Distribution • Krishi Mela Collection
          </p>

          <div className="mt-10">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-3 text-amber-800 font-bold text-lg hover:text-amber-900 transition-colors"
            >
              <ShoppingBag size={20} />
              Bulk Retail Inquiry
            </button>
          </div>
        </div>

      </div>

      {/* INFOGRAPHIC LIGHTBOX MODAL CONTAINER PORTAL LAYER */}
      {mounted && isModalOpen && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out animate-fade-in"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-slate-950/90 pointer-events-none" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-6xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={innovationImg} 
              alt="Prakritva Future Products Roadmap and Dehydrated Powders Ecosystem" 
              className="w-full h-auto max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-white p-1"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-4 bg-slate-900/80 px-6 py-2 rounded-full shadow-md border border-white/5">
              Prakritva Future Products Roadmap and Vegetable Powders Ecosystem
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default PrakritvaBrand;