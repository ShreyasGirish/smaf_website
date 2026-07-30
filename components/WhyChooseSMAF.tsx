import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Leaf,
  Factory,
  FlaskConical,
  Globe2,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  Award,
  Calendar,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  ArrowRight
} from 'lucide-react';

const WhyChooseSMAF = () => {
  // Lightbox view state for Image Portal
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'motto' | 'mission' | 'community'>('motto');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Freeze window tracking on view state activation
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

  const pillars = [
    {
      title: 'Farm Network',
      desc: 'Strong farmer partnerships and field-level quality monitoring across Karnataka.',
      icon: <Leaf size={24} />
    },
    {
      title: 'Processing Excellence',
      desc: 'Modern processing systems focused on consistency, rapid intake, and safety.',
      icon: <Factory size={24} />
    },
    {
      title: 'Product Innovation',
      desc: 'Value-added products and clean ingredient development through Prakritva.',
      icon: <FlaskConical size={24} />
    },
    {
      title: 'Global Market Focus',
      desc: 'Built to serve international buyers, distributors, and private labels.',
      icon: <Globe2 size={24} />
    }
  ];

  return (
    <section
      id="why-smaf"
      className="py-28 bg-[#FCFBF7] border-t border-slate-100 overflow-hidden text-left"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Strategic Advantages
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            From Farm To Market,<br />
            <span className="text-emerald-600 relative inline-block">
              Built For Trust
              <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-100/60 -z-10" />
            </span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            Sri Mookambika Agro Foods LLP combines strong farmer relationships,
            modern processing infrastructure, product innovation, and export
            expertise to deliver reliable agricultural solutions to global markets.
          </p>
        </div>

        {/* CREATIVE BRAND ORIGIN & INTERACTIVE MOTTO SHOWCASE */}
        <div className="mb-28 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* TOP METRIC RIBBON */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/10">
            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                <Calendar size={13} /> Established
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">Nov 2023</span>
              <span className="text-xs text-slate-400 mt-1">Ops Launched 2024</span>
            </div>

            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                <Sprout size={13} /> Green Campus
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">4 Acres</span>
              <span className="text-xs text-slate-400 mt-1">25,000 sq. ft. Hub</span>
            </div>

            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                <Factory size={13} /> Throughput
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">3,000 MT</span>
              <span className="text-xs text-slate-400 mt-1">2.5 MT / Hour Speed</span>
            </div>

            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                <HeartHandshake size={13} /> Farmer Impact
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">1,200+</span>
              <span className="text-xs text-slate-400 mt-1">Partner Smallholders</span>
            </div>
          </div>

          {/* INTERACTIVE MOTTO & MISSION CONTROLLER */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT TAB CONTROLLERS */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">Our Foundation</span>
              
              <button
                onClick={() => setActiveTab('motto')}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                  activeTab === 'motto'
                    ? 'bg-white/10 border-emerald-500/50 text-white shadow-lg translate-x-2'
                    : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className={activeTab === 'motto' ? 'text-emerald-400' : 'text-slate-500'} size={20} />
                    <span className="font-serif font-bold text-base">The Corporate Motto</span>
                  </div>
                  <ArrowRight size={16} className={activeTab === 'motto' ? 'opacity-100 text-emerald-400' : 'opacity-0'} />
                </div>
              </button>

              <button
                onClick={() => setActiveTab('mission')}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                  activeTab === 'mission'
                    ? 'bg-white/10 border-emerald-500/50 text-white shadow-lg translate-x-2'
                    : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe2 className={activeTab === 'mission' ? 'text-emerald-400' : 'text-slate-500'} size={20} />
                    <span className="font-serif font-bold text-base">Global-Indian Bridge</span>
                  </div>
                  <ArrowRight size={16} className={activeTab === 'mission' ? 'opacity-100 text-emerald-400' : 'opacity-0'} />
                </div>
              </button>

              <button
                onClick={() => setActiveTab('community')}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                  activeTab === 'community'
                    ? 'bg-white/10 border-emerald-500/50 text-white shadow-lg translate-x-2'
                    : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HeartHandshake className={activeTab === 'community' ? 'text-emerald-400' : 'text-slate-500'} size={20} />
                    <span className="font-serif font-bold text-base">Beyond Processing</span>
                  </div>
                  <ArrowRight size={16} className={activeTab === 'community' ? 'opacity-100 text-emerald-400' : 'opacity-0'} />
                </div>
              </button>
            </div>

            {/* RIGHT DYNAMIC DISPLAY CARD */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 min-h-[260px] flex flex-col justify-center relative">
              
              {activeTab === 'motto' && (
                <div className="animate-fade-in space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Core Promise
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed">
                    “Safe Food. Trusted Processes. Sustainable Growth.”
                  </h3>
                  <p className="text-slate-300 font-light text-sm leading-relaxed">
                    Every batch leaving our 6,000 sq. ft. processing zone is engineered under international safety and fair labor standards—ensuring absolute traceability from Ranebennur to global dinner tables.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="animate-fade-in space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Supply Chain Mission
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white leading-snug">
                    Bridging Indian Agricultural Networks with Global Brands
                  </h3>
                  <p className="text-slate-300 font-light text-sm leading-relaxed">
                    We combine rapid farm-to-plant logistics (&lt; 8 hours) with full crop traceability, giving multinational importers a dependable, quality-locked partner in South India.
                  </p>
                </div>
              )}

              {activeTab === 'community' && (
                <div className="animate-fade-in space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Farmer Upliftment
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white leading-snug">
                    Mentorship & Economic Stability
                  </h3>
                  <p className="text-slate-300 font-light text-sm leading-relaxed">
                    We actively mentor 1,200+ local smallholders in Integrated Pest Management (IPM) and guarantee fair pricing structures—creating an ethical supply chain that strengthens rural livelihoods.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* SECTION 1: DIRECT FARM NETWORK */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28 group">
          <div className="overflow-hidden rounded-[3rem] shadow-md border border-slate-200/60 bg-white relative">
            <img
              src={`${import.meta.env.BASE_URL}images/gherkin-farm.jpg`}
              alt="Gherkin Farm"
              className="w-full h-[460px] object-cover transform group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="space-y-6">
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100/60">
              Direct Farm Network
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
              Strong Agricultural Foundation
            </h3>

            <p className="text-slate-600 leading-relaxed font-light text-base">
              Our sourcing ecosystem is built around close farmer engagement,
              field-level IPM quality monitoring, and traceable procurement
              practices across <b>Karnataka and Andhra Pradesh’s</b> gherkin-growing belts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Farmer Partnerships',
                'IPM Mentorship',
                'Quality Monitoring',
                'Crop Traceability'
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white border border-slate-100 shadow-sm rounded-2xl p-4 flex items-center gap-3 font-medium text-slate-700 hover:border-emerald-200 hover:shadow-md transition duration-300"
                >
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: RELIABLE SUPPLY */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 group">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100/60">
              Reliable Raw Material Supply
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
              Consistent Production Capability
            </h3>

            <p className="text-slate-600 leading-relaxed font-light text-base">
              Access to fresh export-grade gherkins throughout the growing
              season enables stable production planning, quality consistency,
              and dependable delivery commitments.
            </p>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden rounded-[3rem] shadow-md border border-slate-200/60 bg-white relative">
            <img
              src={`${import.meta.env.BASE_URL}images/gherkin-harvest.jpg`}
              alt="Harvest"
              className="w-full h-[460px] object-cover transform group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* PILLARS MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                  {pillar.icon}
                </div>

                <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
                  {pillar.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FIXED PORTAL OVERLAY */}
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
              className="w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-white"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-6 bg-slate-900/80 px-6 py-2 rounded-full shadow-md border border-white/5">
              {activeImage.alt}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default WhyChooseSMAF;