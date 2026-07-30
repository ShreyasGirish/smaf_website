import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ShoppingBag,
  Sparkles,
  Droplets,
  Utensils,
  Leaf,
  Download,
  Maximize2,
  X,
  Eye,
  LockOpen
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
  const newProductImg = `${import.meta.env.BASE_URL}images/new-product.jpg`;
  const vegetablePowdersImg = `${import.meta.env.BASE_URL}images/prakritva2.jpg`;

  // Interactive Reveal Engine States
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Freeze background window scrolling when product layout lightbox is active
  useEffect(() => {
    if (activeModalImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalImg]);

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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.03); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* BRAND HEADER WITH SEAMLESS LOGO INTEGRATION */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-amber-200 mx-auto">
            <Sparkles size={14} />
            First Introduced at Krishi Mela 2025, Bengaluru
          </div>

          <div className="h-16 md:h-24 flex items-center justify-center mb-6 w-full">
            <img 
              src={brandLogoImg} 
              alt="Prakritva - Pure. Natural. Sustainable." 
              className="h-full w-auto object-contain mx-auto transform hover:scale-[1.01] transition-transform duration-300"
              onError={(e) => {
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
            {/* Kokum Zest */}
            <div className="relative rounded-[2.5rem] p-[5px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between bg-white border border-slate-100 hover:-translate-y-1 z-10">
              <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_20%,#f59e0b_40%,#10b981_50%,#f59e0b_60%,transparent_80%)] animate-led-border pointer-events-none" />

              <div className="relative z-10 w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col justify-between flex-grow">
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
                    <h4 className="text-2xl font-serif text-slate-800 mb-3">Kokum Zest</h4>
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

        {/* 🔬 🟢 THE INTERACTIVE MYSTERY PRODUCT REVEAL HATCH WITH UNIFIED GLASSMORPHISM */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <span className="text-amber-700 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
              <Sparkles size={14} className="text-amber-600" />
              New Innovation
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mt-3 mb-4 text-slate-900 tracking-tight">
              The Future of Natural Flavors
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-base font-light">
              Our production labs have locked down a secret value-added blueprint. Tap the containment matrix below to crack open our latest field-to-table breakthrough.
            </p>
          </div>

          {/* DYNAMIC SHUTTER HUB GRID CONTAINER */}
          <div className="max-w-6xl mx-auto">
            {!isRevealed ? (
              /* Sealed Shutter Gate (Tapping triggers irreversible permanent reveal state) */
              <div 
                onClick={() => setIsRevealed(true)}
                className="bg-slate-900 rounded-[3.5rem] border border-amber-200/60 min-h-[480px] relative overflow-hidden flex flex-col items-center justify-center text-center p-8 select-none cursor-pointer group/hatch shadow-2xl transition-all duration-500 hover:scale-[1.005]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] animate-pulse-slow" />
                <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mb-5 animate-bounce shadow-lg group-hover/hatch:scale-105 transition-transform">
                  <Eye size={26} />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-amber-500 uppercase">Catalogue Status: Locked</span>
                <h4 className="text-2xl font-serif text-slate-100 mt-2 max-w-md transition-colors group-hover/hatch:text-amber-400">Tap to explore the new range of products</h4>
              </div>
            ) : (
              /* Revealed Dual Card Layout - Displays both Concentrate and Powders with matched glass effects */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-fade-in">
                
                {/* 🟢 RANGE ITEM 1: KOKUM JEERA SHARBAT CONCENTRATE */}
                <div className="bg-slate-900 rounded-[3.5rem] border border-emerald-500/30 overflow-hidden flex flex-col justify-between shadow-2xl relative">
                  {/* Media Frame with mirror glass blurred back-layer texture */}
                  <div className="w-full h-[360px] relative bg-slate-950 flex items-center justify-center p-6">
                    <img
                      src={newProductImg}
                      alt=""
                      className="w-full h-full object-cover absolute inset-0 blur-3xl opacity-40 scale-125 pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm pointer-events-none" />
                    <img
                      src={newProductImg}
                      alt="Kokum Jeera Sharbat Concentrate"
                      className="w-full h-full max-h-[320px] object-contain relative z-10 transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <button 
                      onClick={() => setActiveModalImg(newProductImg)}
                      className="absolute bottom-5 right-5 bg-slate-950/80 hover:bg-slate-950 text-white p-3 rounded-xl border border-white/10 shadow-md transition active:scale-95 z-20 flex items-center gap-2 text-xs font-mono font-bold"
                    >
                      <Maximize2 size={13} className="text-emerald-400" />
                      <span>EXPAND VIEW</span>
                    </button>
                  </div>
                  
                  {/* Information Panel with rich Glassmorphism */}
                  <div className="p-8 flex-grow flex flex-col justify-between bg-white/[0.03] backdrop-blur-md border-t border-white/10 text-white">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                        <LockOpen size={10} /> Concentrate Element
                      </div>
                      <h4 className="text-2xl font-serif text-slate-100">Kokum Jeera Sharbat Concentrate</h4>
                      <p className="text-slate-400 text-xs font-light leading-relaxed">
                        Engineered to deliver an absolute botanical refresh. We have infused our signature premium sun-dried kokum base with carefully roasted cumin extractions, creating a balanced tangy digestif concentrate.
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-4 mt-6 font-mono text-[9px] text-slate-500 uppercase tracking-widest flex justify-between">
                      <span>Ready to taste it?</span>
                      <span className="text-emerald-400">60% Fruit Juice</span>
                    </div>
                  </div>
                </div>

                {/* 🟢 RANGE ITEM 2: DEHYDRATED VEGETABLE POWDERS (prakritva2.jpg) */}
                <div className="bg-slate-900 rounded-[3.5rem] border border-emerald-500/30 overflow-hidden flex flex-col justify-between shadow-2xl relative">
                  {/* Media Frame with mirror glass blurred back-layer texture matching layout 1 */}
                  <div className="w-full h-[360px] relative bg-slate-950 flex items-center justify-center p-6">
                    <img
                      src={vegetablePowdersImg}
                      alt=""
                      className="w-full h-full object-cover absolute inset-0 blur-3xl opacity-40 scale-125 pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm pointer-events-none" />
                    <img
                      src={vegetablePowdersImg}
                      alt="Advanced Vegetable Powders Portfolio"
                      className="w-full h-full max-h-[320px] object-contain relative z-10 transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <button 
                      onClick={() => setActiveModalImg(vegetablePowdersImg)}
                      className="absolute bottom-5 right-5 bg-slate-950/80 hover:bg-slate-950 text-white p-3 rounded-xl border border-white/10 shadow-md transition active:scale-95 z-20 flex items-center gap-2 text-xs font-mono font-bold"
                    >
                      <Maximize2 size={13} className="text-emerald-400" />
                      <span>EXPAND VIEW</span>
                    </button>
                  </div>
                  
                  {/* Information Panel with identical Glassmorphism matching layout 1 */}
                  <div className="p-8 flex-grow flex flex-col justify-between bg-white/[0.03] backdrop-blur-md border-t border-white/10 text-white">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                        <LockOpen size={10} /> Dehydrated Matrix
                      </div>
                      <h4 className="text-2xl font-serif text-slate-100">Advanced Vegetable Powders</h4>
                      <p className="text-slate-400 text-xs font-light leading-relaxed">
                        Sustainable goodness dehydrated to absolute perfection. Our infrastructure line locks down highly concentrated Cucumber, Spinach, Carrot, Beetroot, Tomato, Onion, and Garlic powders processed for long shelf-life export networks.
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-4 mt-6 font-mono text-[9px] text-slate-500 uppercase tracking-widest flex justify-between">
                      <span>Ready to taste it?</span>
                      <span className="text-emerald-400">FSSC 22000 Certified</span>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* 🟢 UP-SCALED BROCHURE CTA & PROMINENT ACTION BUTTON HUB */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-[4rem] p-12 md:p-20 text-center border border-amber-200 shadow-sm">
          <h4 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900 leading-tight">
            Explore the Complete Prakritva Range
          </h4>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed">
            Discover our award-winning traditional pickles, highest-selling natural beverages, 
            and foundational wellness powders launched directly from the fields.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto mb-16">
            <a
              href={`${import.meta.env.BASE_URL}brochures/Prakritva_Product_Brochure.pdf`}
              download
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-4 bg-amber-800 hover:bg-amber-900 text-white px-10 py-6 rounded-2xl font-bold text-base tracking-wide transition-all shadow-xl hover:shadow-amber-900/10 active:scale-95"
            >
              <Download size={20} strokeWidth={2.5} />
              Download Product Brochure
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-4 bg-white hover:bg-slate-50 text-slate-800 px-10 py-6 rounded-2xl font-bold text-base tracking-wide border-2 border-slate-200 transition-all shadow-md active:scale-95"
            >
              <ShoppingBag size={20} className="text-amber-800" strokeWidth={2.5} />
              Bulk Sourcing Inquiry
            </button>
          </div>
        </div>

      </div> {/* <-- ADDED THIS MISSING CLOSING TAG FOR THE CONTAINER WRAPPER */}

      {/* FULL COGNITIVE FRAMEWORK LIGHTBOX MODAL CONTAINER */}
      {mounted && activeModalImg && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out animate-fade-in"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveModalImg(null)}
        >
          <div className="absolute inset-0 bg-slate-950/90 pointer-events-none" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95"
            onClick={() => setActiveModalImg(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-5xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeModalImg} 
              alt="Prakritva Product Range Expanded Sheet" 
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-white p-2"
            />
            <p className="text-white/90 font-serif text-sm mt-4 bg-slate-900/80 px-6 py-2 rounded-full shadow-md border border-white/5">
              {activeModalImg === newProductImg ? 'Prakritva - Kokum Jeera Sharbat Concentrate Overview' : 'Prakritva - Dehydrated Premium Vegetable Powders Array'}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default PrakritvaBrand;