import React from 'react';
import {
  ShoppingBag,
  Sparkles,
  Droplets,
  Utensils,
  Leaf,
  Download,
  Award
} from 'lucide-react';

const PrakritvaBrand = () => {
  /* PUBLIC ASSET PATHS (Vite-safe) */
  const gherkinPickleImg = `${import.meta.env.BASE_URL}images/gherkinpickle.jpg`;
  const babyPickleImg = `${import.meta.env.BASE_URL}images/babypickle.jpg`;
  const kokumBottleImg = `${import.meta.env.BASE_URL}images/kokumjuice.jpg`;
  const vinegarBottleImg = `${import.meta.env.BASE_URL}images/vinegar.jpg`;
  const abcPowderImg = `${import.meta.env.BASE_URL}images/abcpowder.jpg`;
  const rosellaPowderImg = `${import.meta.env.BASE_URL}images/rosellapowder.jpg`;
  const innovationImg = `${import.meta.env.BASE_URL}images/prakritva2.jpg`;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="py-28 bg-[#FCF9F2] border-t border-amber-100">
      {/* Injecting explicit custom keyframe configuration rules directly for the border animation */}
      <style>{`
        @keyframes border-conic {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-led-border {
          animation: border-conic 4s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* BRAND HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-amber-200">
            <Sparkles size={14} />
            First Introduced at Krishi Mela 2025
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">
            Prakritva
          </h2>

          <p className="text-amber-700 text-xl italic mb-8">
            Taste the Natural Way
          </p>

          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Rooted in Karnataka’s fertile soils, Prakritva proudly debuted its flagship 
            range at "<b>Krishi Mela 2025</b>". We bring traditional Indian recipes and wellness 
            blends straight from our fields to the modern table. No preservatives. No artificial colors.
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
                Sun-cured in mustard oil and heritage spices • Launched at Krishi Mela 2025
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Artisanal Gherkin Pickle',
                img: gherkinPickleImg,
                desc: 'Bold, tangy gherkins crafted with mustard oil, asafoetida and whole spices.',
                badge: 'FSSAI Certified'
              },
              {
                name: 'Crunchy Babycorn Pickle',
                img: babyPickleImg,
                desc: 'Hand-cut babycorn pickled in traditional Indian spice blends.',
                badge: 'FSSAI Certified'
              }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-[3rem] p-10 flex flex-col justify-between shadow-sm border border-amber-100/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="overflow-hidden rounded-2xl mb-8 bg-amber-50/30 p-4">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-72 mx-auto object-contain transform group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h4 className="text-2xl font-serif text-slate-800 mb-3">{p.name}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase tracking-widest text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full">
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
            
            {/* Kokum Zest - WITH CREATIVE INTERACTIVE LED LIGHT PASSING BORDER EFFECT */}
            <div className="relative rounded-[3rem] p-[3px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between bg-amber-900/40">
              
              {/* Dynamic Conic Loop Track forming the LED light filament beam */}
              <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_40%,#f59e0b_50%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-led-border pointer-events-none" />

              {/* High Contrast Base Card Layer nesting internally */}
              <div className="relative z-10 w-full h-full bg-amber-800 rounded-[2.9rem] p-10 flex flex-col justify-between flex-grow">
                
                {/* Premium Top Corner Ribbon style or top badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-amber-950 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md animate-pulse">
                  <Award size={12} />
                  Most Sold @ Krishi Mela 2025
                </div>

                <div>
                  <div className="overflow-hidden rounded-2xl mb-8 bg-amber-900/30 p-4 mt-4">
                    <img 
                      src={kokumBottleImg} 
                      alt="Kokum Zest"
                      className="h-72 mx-auto object-contain transform group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                  {/* FIXED: Changed to text-white for pristine visibility */}
                  <h4 className="text-2xl font-serif text-white mb-3 flex items-center gap-2">
                    Kokum Zest 
                  </h4>
                  <p className="text-amber-100/80 text-sm font-light leading-relaxed mb-6">
                    Cooling digestive drink made from sun-dried kokum and spices. The undisputed crowd favorite and highest-selling beverage choice.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-amber-700/50 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-amber-200 font-bold bg-amber-900/40 px-3 py-1 rounded-full">
                    100% Natural
                  </span>
                  <span className="text-[10px] italic text-amber-300">Krishi Mela Flagship</span>
                </div>
              </div>
            </div>

            {/* Natural Vinegar Elixir */}
            <div className="bg-white rounded-[3rem] p-10 border border-amber-100/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="overflow-hidden rounded-2xl mb-8 bg-amber-50/30 p-4">
                  <img 
                    src={vinegarBottleImg} 
                    alt="Natural Vinegar Elixir"
                    className="h-72 mx-auto object-contain transform group-hover:scale-105 transition duration-300" 
                  />
                </div>
                <h4 className="text-2xl font-serif text-slate-800 mb-3">Natural Vinegar Elixir</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                  Naturally fermented vinegar supporting digestion and metabolism. Debuted successfully to health-conscious consumers.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] uppercase tracking-widest text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full">
                  Naturally Fermented
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
              <p className="text-amber-700/70 text-sm mt-0.5">Nutrient-dense formulas introduced at Krishi Mela 2025</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'ABC Powder',
                img: abcPowderImg,
                desc: 'Supports energy, circulation and daily vitality. Exceptional reception at our exhibition debut.',
                badge: 'Vitality Blend'
              },
              {
                name: 'Rosella Powder',
                img: rosellaPowderImg,
                desc: 'Rich in Vitamin C and antioxidants for immunity support. Another innovative crop discovery shared at the Mela.',
                badge: 'Immunity Booster'
              }
            ].map((p, i) => (
              <div 
                key={i}
                className="bg-white rounded-[3rem] p-10 border border-amber-100/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="overflow-hidden rounded-2xl mb-8 bg-amber-50/30 p-4">
                    <img 
                      src={p.img} 
                      alt={p.name}
                      className="h-72 mx-auto object-contain transform group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                  <h4 className="text-2xl font-serif text-slate-800 mb-3">{p.name}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase tracking-widest text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE INNOVATION */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">
              Future Innovation
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mt-4 mb-6">
              Beyond Traditional Products
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Building on the tremendous validation received at **Krishi Mela 2025**, Prakritva 
              continues to explore sustainable ingredients, vegetable powders, and value-added 
              innovations that convert raw agriculture into future-ready solutions.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-amber-100">
            <img
              src={innovationImg}
              alt="Prakritva Future Products"
              className="w-full"
            />
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
            className="inline-flex items-center gap-3 bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl"
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
    </section>
  );
};

export default PrakritvaBrand;