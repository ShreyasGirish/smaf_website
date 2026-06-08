import React from 'react';
import {
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Heart,
  Droplets,
  Utensils,
  Leaf,
  Download
} from 'lucide-react';

const PrakritvaBrand = () => {
  /* PUBLIC ASSET PATHS (Vite-safe) */
  const gherkinPickleImg = '/assets/images/gherkinpickle.jpg';
  const babyPickleImg = '/assets/images/babypickle.jpg';
  const kokumBottleImg = '/assets/images/kokumjuice.jpg';
  const vinegarBottleImg = '/assets/images/vinegar.jpg';
  const abcPowderImg = '/assets/images/abcpowder.jpg';
  const rosellaPowderImg = '/assets/images/rosellapowder.jpg';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="py-28 bg-[#FCF9F2] border-t border-amber-100">
      <div className="container mx-auto px-4 md:px-6">

        {/* BRAND HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-amber-200">
            <Sparkles size={14} />
            Handcrafted Consumer Brand
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">
            Prakritva
          </h2>

          <p className="text-amber-700 text-xl italic mb-8">
            Taste the Natural Way
          </p>

          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Rooted in Karnataka’s fertile soils, Prakritva brings traditional
            Indian recipes and wellness blends to the modern table.
            No preservatives. No artificial colors.
          </p>
        </div>

        {/* TRADITIONAL PICKLES */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center">
              <Utensils size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif">Traditional Pickles</h3>
              <p className="text-amber-700/60 text-sm">
                Sun-cured in mustard oil and heritage spices
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Artisanal Gherkin Pickle',
                img: gherkinPickleImg,
                desc: 'Bold, tangy gherkins crafted with mustard oil, asafoetida and whole spices.'
              },
              {
                name: 'Crunchy Babycorn Pickle',
                img: babyPickleImg,
                desc: 'Hand-cut babycorn pickled in traditional Indian spice blends.'
              }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-[3rem] p-8 flex gap-8 shadow-sm border border-amber-50 hover:shadow-xl transition"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-40 h-40 object-cover rounded-2xl"
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-serif mb-3">{p.name}</h4>
                    <p className="text-slate-500 text-sm font-light">
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      FSSAI Certified
                    </span>
                    <Heart size={18} className="text-amber-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NATURAL BEVERAGES */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center">
              <Droplets size={24} />
            </div>
            <h3 className="text-3xl font-serif">Natural Beverages</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-amber-800 rounded-[3rem] p-12 text-white shadow-2xl">
              <img src={kokumBottleImg} className="h-64 mx-auto mb-8 object-contain" />
              <h4 className="text-3xl font-serif mb-4">Kokum Zest</h4>
              <p className="text-amber-100 font-light mb-6">
                Cooling digestive drink made from sun-dried kokum and spices.
              </p>
            </div>

            <div className="bg-white rounded-[3rem] p-12 border border-amber-100 shadow-xl">
              <img src={vinegarBottleImg} className="h-64 mx-auto mb-8 object-contain" />
              <h4 className="text-3xl font-serif mb-4">Natural Vinegar Elixir</h4>
              <p className="text-slate-600 font-light mb-6">
                Naturally fermented vinegar supporting digestion and metabolism.
              </p>
            </div>
          </div>
        </div>

        {/* WELLNESS POWDERS */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center">
              <Leaf size={24} />
            </div>
            <h3 className="text-3xl font-serif">Wellness Powders</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-[3rem] p-12 border border-amber-50 shadow-sm">
              <img src={abcPowderImg} className="h-64 mx-auto mb-8 object-contain" />
              <h4 className="text-2xl font-serif mb-2">ABC Powder</h4>
              <p className="text-slate-500 font-light">
                Supports energy, circulation and daily vitality.
              </p>
            </div>

            <div className="bg-white rounded-[3rem] p-12 border border-amber-50 shadow-sm">
              <img src={rosellaPowderImg} className="h-64 mx-auto mb-8 object-contain" />
              <h4 className="text-2xl font-serif mb-2">Rosella Powder</h4>
              <p className="text-slate-500 font-light">
                Rich in Vitamin C and antioxidants for immunity support.
              </p>
            </div>
          </div>
        </div>

        {/* BROCHURE DOWNLOAD CTA */}
        <div className="bg-white rounded-[4rem] p-16 text-center border border-amber-100">
          <h4 className="text-3xl font-serif mb-4">
            Explore the Complete Prakritva Range
          </h4>
          <p className="text-slate-500 mb-10 font-light">
            Ingredients, packaging formats, certifications and retail positioning.
          </p>

          <a
            href="/brochures/Prakritva_Product_Brochure.pdf"
            download
            className="inline-flex items-center gap-3 bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg"
          >
            <Download size={20} />
            Download Prakritva Brochure
          </a>

          <p className="text-[11px] text-amber-700 mt-4 uppercase tracking-widest">
            PDF • Retail • Export • Distribution
          </p>

          <div className="mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-3 text-amber-800 font-bold"
            >
              <ShoppingBag size={18} />
              Bulk Retail Inquiry
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrakritvaBrand;
