import React from "react";
import {
  Droplet,
  Layers,
  ChevronRight
} from "lucide-react";

/* AUTO LOAD ALL IMAGES */
const images = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const getImage = (keyword: string) =>
  Object.values(images).find((img) =>
    img.toLowerCase().includes(keyword)
  );

const Products: React.FC = () => {
  const bulkProducts = [
    {
      name: "Gherkins",
      desc: "Hand-harvested cucumbers processed for global food brands",
      img: getImage("gherkins")
    },
    {
      name: "Baby Corn",
      desc: "Tender, uniform cobs calibrated for institutional kitchens",
      img: getImage("babycorn")
    }
  ];

  const mediaTypes = [
    {
      name: "Natural Vinegar (NV)",
      desc: "Food-grade vinegar media for burgers, condiments, and snacks."
    },
    {
      name: "Acetic Acid (AA)",
      desc: "Precisely acidified solution ensuring long-haul stability."
    },
    {
      name: "Salt Brine (BR)",
      desc: "Traditional fermentation for European-style profiles."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
              Bulk Export Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Industrial Gherkins & Baby Corn
            </h2>
            <p className="text-slate-500 text-lg font-light">
              Semi-finished vegetables engineered for multinational processors
              and institutional supply chains.
            </p>
          </div>

          <div className="bg-emerald-600 text-white p-8 rounded-[2.5rem] shadow-xl">
            <Layers size={40} className="text-emerald-300/60 mb-3" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">
              Grade Range
            </p>
            <p className="text-2xl font-bold">150/300 → 5/8</p>
          </div>
        </div>

        {/* PROCESSING MEDIA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mediaTypes.map((m, i) => (
            <div
              key={i}
              className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                <Droplet />
              </div>
              <h4 className="text-xl font-bold mb-4">{m.name}</h4>
              <p className="text-slate-500 text-sm mb-6">{m.desc}</p>
              <div className="flex items-center text-emerald-600 font-bold text-[10px] uppercase">
                Technical Specs <ChevronRight size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* PRODUCT VISUALS */}
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {bulkProducts.map(
              (p, i) =>
                p.img && (
                  <div
                    key={i}
                    className="relative rounded-[2.5rem] overflow-hidden h-[340px]"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8">
                      <div>
                        <h4 className="text-2xl font-serif mb-2">{p.name}</h4>
                        <p className="text-slate-300 text-sm">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
