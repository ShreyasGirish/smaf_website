import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ShoppingBag,
  Sparkles,
  Droplets,
  Utensils,
  Leaf,
  Download,
  X
} from 'lucide-react';

const PrakritvaBrand: React.FC = () => {
  /* PUBLIC ASSET PATHS (Vite-safe) */
  const brandLogoImg = `${import.meta.env.BASE_URL}images/p-logo.jpg`;
  const gherkinPickleImg = `${import.meta.env.BASE_URL}images/gherkinpickle.jpg`;
  const babyPickleImg = `${import.meta.env.BASE_URL}images/babypickle.jpg`;
  const kokumBottleImg = `${import.meta.env.BASE_URL}images/kokumjuice.jpg`;
  const kokumJeeraImg = `${import.meta.env.BASE_URL}images/new-product.jpg`;
  const abcPowderImg = `${import.meta.env.BASE_URL}images/abcpowder.jpg`;
  const rosellaPowderImg = `${import.meta.env.BASE_URL}images/rosellapowder.jpg`;

  const [activeModalImg, setActiveModalImg] = useState<{ src: string; title: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Freeze background window scrolling when lightbox is active
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
    <section id="brand" className="py-28 bg-[#FCF9F2] border-t border-amber-100 text-left">
      {/* LED Border Animation Loop Rules */}
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

        {/* BRAND HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100/80 text-amber-900 px-4 py-2 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest mb-8 border border-amber-200 shadow-sm mx-auto">
            <Sparkles size={14} className="text-amber-600" />
            Flagship Retail Innovation • Krishi Mela 2025
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

          <p className="text-amber-800 text-xl font-serif italic mb-6 text-center">
            “Taste the Natural Way”
          </p>

          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed text-center">
            Rooted in Karnataka’s fertile agricultural belts, <b>Prakritva</b> translates SMAF’s industrial capabilities into clean-label consumer foods. No synthetic colors. No chemical preservatives. Processed entirely on certified, non-GMO lines.
          </p>
        </div>

        {/* 1. TRADITIONAL PICKLES */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-900 text-white rounded-2xl flex items-center justify-center shadow-md">
              <Utensils size={22} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-900">Traditional Spiced Pickles</h3>
              <p className="text-amber-800/80 text-xs md:text-sm font-light mt-0.5">
                Curated in pure cold-pressed mustard oil, asafoetida, and whole ground spices
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Artisanal Gherkin Pickle',
                img: gherkinPickleImg,
                desc: 'Crisp, tangy Karnataka gherkins crafted with cold-pressed mustard oil, hing, and traditional whole spices.',
                badge: 'Small-Batch Recipe'
              },
              {
                name: 'Crunchy Babycorn Pickle',
                img: babyPickleImg,
                desc: 'Hand-harvested tender baby corn pickled in authentic regional spice blends for balanced crunch.',
                badge: 'Authentic Spice Blend'
              }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div>
                  <div className="w-full h-[340px] sm:h-[400px] relative overflow-hidden bg-[#FBF9F5] p-6 flex items-center justify-center">
                    <img
                      src={p.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150"
                      aria-hidden="true"
                    />
                    <img
                      src={p.img}
                      alt={p.name}
                      className="relative z-10 w-full h-full max-h-[320px] object-contain transform group-hover:scale-105 transition duration-700 ease-out cursor-zoom-in"
                      onClick={() => setActiveModalImg({ src: p.img, title: p.name })}
                    />
                  </div>
                  <div className="p-8 md:p-10 relative z-20 bg-white">
                    <h4 className="text-2xl font-serif text-slate-900 mb-2">{p.name}</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
                
                <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 bg-white relative z-20 flex items-center gap-2 font-mono text-[10px] font-bold">
                  <span className="text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    FSSAI Licensed
                  </span>
                  <span className="text-amber-900 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. NATURAL BEVERAGES */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-900 text-white rounded-2xl flex items-center justify-center shadow-md">
              <Droplets size={22} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-900">Natural Botanical Beverages</h3>
              <p className="text-amber-800/80 text-xs md:text-sm font-light mt-0.5">Cold-crafted botanical concentrates and elixirs for hydration and digestive wellness</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Kokum Zest */}
            <div className="relative rounded-[2.5rem] p-[4px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between bg-white border border-slate-100 hover:-translate-y-1 z-10">
              <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_20%,#f59e0b_40%,#10b981_50%,#f59e0b_60%,transparent_80%)] animate-led-border pointer-events-none" />

              <div className="relative z-10 w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col justify-between flex-grow">
                <div className="absolute top-5 right-5 z-30 bg-emerald-700 text-white px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl border border-emerald-500/30">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
                  Bestseller • Krishi Mela 2025
                </div>

                <div>
                  <div className="w-full h-[340px] sm:h-[400px] relative overflow-hidden bg-[#FBF9F5] p-6 flex items-center justify-center rounded-t-[2.2rem]">
                    <img 
                      src={kokumBottleImg} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150" 
                      aria-hidden="true"
                    />
                    <img 
                      src={kokumBottleImg} 
                      alt="Kokum Zest"
                      className="relative z-10 w-full h-full max-h-[320px] object-contain transform group-hover:scale-105 transition duration-700 ease-out cursor-zoom-in" 
                      onClick={() => setActiveModalImg({ src: kokumBottleImg, title: "Prakritva — Kokum Zest" })}
                    />
                  </div>
                  <div className="p-8 md:p-10 relative z-20 bg-white">
                    <h4 className="text-2xl font-serif text-slate-900 mb-2">Kokum Zest</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                      Cooling digestive tonic made from sun-cured regional kokum extract and roasted spices. The highest-selling beverage choice at our exhibition debut.
                    </p>
                  </div>
                </div>
                
                <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 flex items-center gap-2 bg-white relative z-20 font-mono text-[10px] font-bold">
                  <span className="text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    FSSAI Licensed
                  </span>
                  <span className="text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    100% Botanical
                  </span>
                </div>
              </div>
            </div>

            {/* Kokum Jeera Sharbat Concentrate */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group">
              <div>
                <div className="w-full h-[340px] sm:h-[400px] relative overflow-hidden bg-[#FBF9F5] p-6 flex items-center justify-center">
                  <img 
                    src={kokumJeeraImg} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150" 
                    aria-hidden="true"
                  />
                  <img 
                    src={kokumJeeraImg} 
                    alt="Kokum Jeera Sharbat Concentrate"
                    className="relative z-10 w-full h-full max-h-[320px] object-contain transform group-hover:scale-105 transition duration-700 ease-out cursor-zoom-in" 
                    onClick={() => setActiveModalImg({ src: kokumJeeraImg, title: "Prakritva — Kokum Jeera Sharbat Concentrate" })}
                  />
                </div>
                <div className="p-8 md:p-10 relative z-20 bg-white">
                  <h4 className="text-2xl font-serif text-slate-900 mb-2">Kokum Jeera Sharbat Concentrate</h4>
                  <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                    Infused with sun-cured regional kokum extract and dry-roasted cumin seeds. A rich 60% fruit-base botanical concentrate crafted for authentic cooling digestion.
                  </p>
                </div>
              </div>
              <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 bg-white relative z-20 flex items-center gap-2 font-mono text-[10px] font-bold">
                <span className="text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  FSSAI Licensed
                </span>
                <span className="text-amber-900 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
                  60% Fruit Base
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. WELLNESS POWDERS */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-900 text-white rounded-2xl flex items-center justify-center shadow-md">
              <Leaf size={22} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-900">Daily Wellness Powders</h3>
              <p className="text-amber-800/80 text-xs md:text-sm font-light mt-0.5">Nutrient-dense dehydrated botanicals and functional fruit powders</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'ABC Vitality Powder',
                sub: 'Apple, Beetroot, Carrot Blend',
                img: abcPowderImg,
                badge: 'Daily Vitality',
                desc: 'Concentrated synergistic blend of crisp apples, rich beetroot, and nutrient-packed carrots designed for daily stamina and micronutrient replenishment.'
              },
              {
                name: 'Rosella Immunity Powder',
                sub: 'Hibiscus Sabdariffa Extract',
                img: rosellaPowderImg,
                badge: 'Natural Vitamin C',
                desc: 'Rich in natural Vitamin C and bio-active antioxidants to support daily immunity and cellular defense. Sun-dehydrated under precise sanitary parameters.'
              }
            ].map((p, i) => (
              <div 
                key={i}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-[340px] sm:h-[400px] relative overflow-hidden bg-[#FBF9F5] p-6 flex items-center justify-center">
                    <img 
                      src={p.img} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none transition-transform duration-700 group-hover:scale-150" 
                      aria-hidden="true"
                    />
                    <img 
                      src={p.img} 
                      alt={p.name}
                      className="relative z-10 w-full h-full max-h-[300px] object-contain transform group-hover:scale-105 transition duration-700 ease-out cursor-zoom-in" 
                      onClick={() => setActiveModalImg({ src: p.img, title: p.name })}
                    />
                  </div>
                  <div className="p-8 md:p-10 relative z-20 bg-white">
                    <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
                      {p.sub}
                    </span>
                    <h4 className="text-2xl font-serif text-slate-900 mb-2">{p.name}</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
                
                <div className="px-8 md:px-10 pb-8 pt-4 border-t border-slate-50 bg-white relative z-20 flex items-center gap-2 font-mono text-[10px] font-bold">
                  <span className="text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    FSSAI Licensed
                  </span>
                  <span className="text-amber-900 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. BROCHURE & SOURCING ACTION HUB */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-[3.5rem] p-10 md:p-16 text-center border border-amber-200 shadow-sm">
          <h4 className="text-3xl md:text-5xl font-serif mb-4 text-slate-900 leading-tight">
            Explore the Complete Prakritva Range
          </h4>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed">
            Discover our traditional pickles, highest-selling botanical beverages, 
            and wellness powder formulations created straight from Karnataka's fields.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <a
              href={`${import.meta.env.BASE_URL}brochures/Prakritva_Product_Brochure.pdf`}
              download
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-3 bg-amber-900 hover:bg-amber-950 text-white px-8 py-5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95"
            >
              <Download size={18} />
              <span>Download Brochure</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 px-8 py-5 rounded-2xl font-bold text-sm tracking-wide border-2 border-slate-200 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ShoppingBag size={18} className="text-amber-800" />
              <span>Bulk Sourcing Inquiry</span>
            </button>
          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL CONTAINER */}
      {mounted && activeModalImg && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out animate-fade-in"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveModalImg(null)}
        >
          <div className="absolute inset-0 bg-slate-950/95 pointer-events-none" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95 cursor-pointer"
            onClick={() => setActiveModalImg(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-4xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeModalImg.src} 
              alt={activeModalImg.title} 
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-white p-4"
            />
            <p className="text-white/90 font-serif text-sm mt-4 bg-slate-900/90 px-6 py-2 rounded-full shadow-md border border-white/5 text-center">
              {activeModalImg.title}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default PrakritvaBrand;