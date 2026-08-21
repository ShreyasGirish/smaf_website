import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Sprout,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  Maximize2,
  X,
  HeartHandshake,
  CheckCircle2,
  Droplets,
  ShieldAlert
} from 'lucide-react';

const Sustainability: React.FC = () => {
  const farmersImg = `${import.meta.env.BASE_URL}images/farmers.jpg`;
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  const esgStats = [
    { value: "1,200+", label: "Contract Smallholders", sub: "Karnataka Agrarian Belt" },
    { value: "< 8 Hours", label: "Harvest to Curing", sub: "Preserves Cellular Crispness" },
    { value: "100%", label: "IPM Mentored", sub: "Zero Unregulated MRL Residue" },
    { value: "Ethical", label: "Labor Governance", sub: "Zero Child Labor Standard" }
  ];

  const sustainabilityPillars = [
    {
      title: "Direct Agronomist Mentorship & IPM Guidance",
      desc: "Our field officers work directly with smallholder farmers, providing guidance on biological pest management and eco-friendly soil care to meet strict global Maximum Residue Limits (MRL).",
      icon: <Sprout size={20} className="text-emerald-400" />
    },
    {
      title: "Rapid Local Sourcing & Fresh Intake (< 8 Hours)",
      desc: "Sourcing within a concentrated 50–200 km radius of Ranebennur minimizes transit times, locking in natural crunch and preventing spoilage before equilibrium brining.",
      icon: <Clock size={20} className="text-emerald-400" />
    },
    {
      title: "Fair Pricing & Economic Floor Protection",
      desc: "We establish guaranteed floor pricing agreements with local farming families, shielding agrarian communities from market volatility and ensuring consistent incomes.",
      icon: <HeartHandshake size={20} className="text-emerald-400" />
    },
    {
      title: "Strict Labor Safeguards & Community Welfare",
      desc: "Every contract partnership enforces zero child labor, fair working hours, and regular agricultural health and safety briefings across all village clusters.",
      icon: <ShieldCheck size={20} className="text-emerald-400" />
    }
  ];

  return (
    <section id="sustainability" className="py-28 bg-slate-950 text-white overflow-hidden border-t border-slate-900 text-left">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 px-3.5 py-1 rounded-full mb-4">
            <Sparkles size={13} className="text-emerald-400" />
            <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em]">
              Responsible Agronomy & ESG
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Sustainability Rooted in <br />
            <span className="text-emerald-400">Operational Integrity</span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
            Our integrated sourcing ecosystem connects rural farming communities directly to international export channels, ensuring transparent traceability and ethical agrarian economics.
          </p>
        </div>

        {/* TOP IMPACT STATS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {esgStats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-0.5">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-500 font-light">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 2-COLUMN BALANCED EDITORIAL STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: PHOTOGRAPH WITH CAPTION */}
          <div className="lg:col-span-5">
            <div 
              onClick={() => setActiveImage({ src: farmersImg, alt: "Smallholder Agrarian Network — Karnataka Farming Belts" })}
              className="relative h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl cursor-zoom-in group"
            >
              <img
                src={farmersImg}
                alt="Smallholding farmers associated with Sri Mookambika Agro Foods"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-slate-900/90 text-emerald-400 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Maximize2 size={12} />
                  <span>Enlarge</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                  On-Ground Field Operations
                </span>
                <h4 className="text-xl font-serif text-white mb-1">
                  Karnataka Smallholder Network
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Direct partnership and agronomy training across regional crop clusters.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: STRUCTURED COMMITMENTS LIST */}
          <div className="lg:col-span-7 space-y-6">
            {sustainabilityPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 hover:border-emerald-500/30 hover:bg-slate-900/70 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-900/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-emerald-500/40 transition-colors">
                  {pillar.icon}
                </div>

                <div className="flex-1">
                  <h4 className="text-base font-serif font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* LIGHTBOX MODAL */}
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
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-slate-900"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-5 bg-slate-900/90 px-6 py-2 rounded-full shadow-md border border-white/10 text-center">
              {activeImage.alt}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Sustainability;