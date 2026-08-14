import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Sparkles,
  Maximize2,
  X,
  Calendar,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Factory,
  Globe2,
  Network,
  Cpu
} from 'lucide-react';

const WhyChooseSMAF: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'motto' | 'mission' | 'community'>('motto');

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

  const strategicPillars = [
    {
      id: '01',
      title: 'Decentralized Farm Network & Agronomy',
      badge: 'Upstream Security',
      desc: 'Deep farmer engagement across Karnataka and Andhra Pradesh with dedicated field officers providing Integrated Pest Management (IPM) mentorship and zero-chemical residue monitoring.',
      points: ['1,200+ smallholder contract partners', 'Sunrise harvest triage & rapid collection', 'Guaranteed crop price safety floors'],
      icon: <Network size={22} className="text-emerald-700" />
    },
    {
      id: '02',
      title: 'Precision Processing & Brining Hub',
      badge: 'Industrial Scale',
      desc: 'Our 25,000 sq. ft. campus in Ranebennur runs dual sorting arrays with automated count calibration alongside high-capacity equilibrium brine tanks for year-round export stability.',
      points: ['2.5 MT / hour continuous throughput', 'Multi-stage micro-filtration loops', '100% manual visual quality screening'],
      icon: <Cpu size={22} className="text-emerald-700" />
    },
    {
      id: '03',
      title: 'Clean-Label Product Innovation (Prakritva)',
      badge: 'Value Creation',
      desc: 'Translating agricultural strengths into high-margin consumer variants, including cold-fermented vinegar elixirs, sun-cured kokum concentrates, and micronutrient wellness powders.',
      points: ['Krishi Mela 2025 Best Innovation Award', 'Zero artificial colors or chemical preservatives', 'Non-GMO certified production lines'],
      icon: <Sparkles size={22} className="text-emerald-700" />
    },
    {
      id: '04',
      title: 'Global Export & Regulatory Readiness',
      badge: 'Container Freight',
      desc: 'Engineered specifically for multinational food service brands, QSR burger chains, and bulk industrial repackers requiring strict maritime container specifications.',
      points: ['USFDA registered & FSSC 22000 v6 compliant', 'STAR-K Kosher certified processing media', 'Packed in 240L–260L HDPE food-grade drums'],
      icon: <Globe2 size={22} className="text-emerald-700" />
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
          <span className="text-emerald-700 font-mono font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Competitive Differentiators
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            From Field to Port, <br />
            <span className="text-emerald-600 relative inline-block">
              Engineered For Reliability
              <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-100/60 -z-10" />
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-3xl">
            Sri Mookambika Agro Foods LLP integrates contract farming networks, 
            high-throughput processing infrastructure, and global regulatory compliance 
            to deliver consistent agricultural solutions to international markets.
          </p>
        </div>

        {/* BRAND ORIGIN & INTERACTIVE MOTTO SHOWCASE */}
        <div className="mb-28 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* TOP METRIC RIBBON */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 mb-10 border-b border-white/10">
            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <Calendar size={13} /> Established
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">Nov 2023</span>
              <span className="text-xs text-slate-400 mt-1 font-light">Ops Launched 2024</span>
            </div>

            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <Sprout size={13} /> Green Campus
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">4 Acres</span>
              <span className="text-xs text-slate-400 mt-1 font-light">25,000 sq. ft. Hub</span>
            </div>

            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <Factory size={13} /> Throughput
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">3,000 MT</span>
              <span className="text-xs text-slate-400 mt-1 font-light">2.5 MT / Hr Speed</span>
            </div>

            <div className="flex flex-col">
              <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <HeartHandshake size={13} /> Farmer Reach
              </span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">1,200+</span>
              <span className="text-xs text-slate-400 mt-1 font-light">Contract Smallholders</span>
            </div>
          </div>

          {/* INTERACTIVE MOTTO & MISSION CONTROLLER */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT TAB CONTROLLERS */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                Operational Tenets
              </span>
              
              <button
                onClick={() => setActiveTab('motto')}
                className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 border cursor-pointer flex items-center justify-between ${
                  activeTab === 'motto'
                    ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-lg shadow-emerald-950/50 translate-x-1.5'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className={activeTab === 'motto' ? 'text-emerald-400' : 'text-slate-500'} size={18} />
                  <span className="font-medium text-sm md:text-base">The Corporate Motto</span>
                </div>
                <ArrowRight size={15} className={`transition-all ${activeTab === 'motto' ? 'opacity-100 text-emerald-400 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
              </button>

              <button
                onClick={() => setActiveTab('mission')}
                className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 border cursor-pointer flex items-center justify-between ${
                  activeTab === 'mission'
                    ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-lg shadow-emerald-950/50 translate-x-1.5'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Globe2 className={activeTab === 'mission' ? 'text-emerald-400' : 'text-slate-500'} size={18} />
                  <span className="font-medium text-sm md:text-base">Global-Indian Bridge</span>
                </div>
                <ArrowRight size={15} className={`transition-all ${activeTab === 'mission' ? 'opacity-100 text-emerald-400 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
              </button>

              <button
                onClick={() => setActiveTab('community')}
                className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 border cursor-pointer flex items-center justify-between ${
                  activeTab === 'community'
                    ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-lg shadow-emerald-950/50 translate-x-1.5'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <HeartHandshake className={activeTab === 'community' ? 'text-emerald-400' : 'text-slate-500'} size={18} />
                  <span className="font-medium text-sm md:text-base">Beyond Processing</span>
                </div>
                <ArrowRight size={15} className={`transition-all ${activeTab === 'community' ? 'opacity-100 text-emerald-400 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
              </button>
            </div>

            {/* RIGHT DYNAMIC DISPLAY CARD */}
            <div className="lg:col-span-7 bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative">
              {activeTab === 'motto' && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    Core Promise
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white italic leading-snug">
                    “Safe Food. Trusted Processes. Sustainable Growth.”
                  </h3>
                  <p className="text-slate-300 font-light text-xs md:text-sm leading-relaxed">
                    Every batch leaving our 6,000 sq. ft. processing zone is engineered under strict international safety and fair labor standards—ensuring complete traceability from Ranebennur to global dinner tables.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    Supply Chain Mission
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug">
                    Bridging Indian Agricultural Belts with Global Buyers
                  </h3>
                  <p className="text-slate-300 font-light text-xs md:text-sm leading-relaxed">
                    We combine rapid farm-to-plant logistics (&lt; 8 hours) with full crop origin tracking, providing multinational importers with a dependable, quality-locked partner in South India.
                  </p>
                </div>
              )}

              {activeTab === 'community' && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    Farmer Upliftment
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug">
                    Mentorship & Economic Stability
                  </h3>
                  <p className="text-slate-300 font-light text-xs md:text-sm leading-relaxed">
                    We actively mentor 1,200+ local smallholders in Integrated Pest Management (IPM) and provide structured price floor protection—building an ethical supply chain that strengthens rural livelihoods.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* SECTION 1: DIRECT FARM NETWORK */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 group">
          <div 
            onClick={() => setActiveImage({ src: `${import.meta.env.BASE_URL}images/gherkin-farm.jpg`, alt: "Karnataka Gherkin Sourcing Belt" })}
            className="overflow-hidden rounded-[3rem] shadow-md border border-slate-200/60 bg-slate-900 relative cursor-zoom-in"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/gherkin-farm.jpg`}
              alt="Gherkin Farm"
              className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="text-xs font-mono">Karnataka Growing Belt</span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/80 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                <Maximize2 size={11} /> Enlarge
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100/60 inline-block">
              Direct Sourcing Network
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
              Strong Agricultural Foundation
            </h3>

            <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
              Our sourcing ecosystem is built around close farmer engagement, 
              field-level IPM quality monitoring, and traceable procurement practices 
              across <b>Karnataka and Andhra Pradesh's</b> gherkin-growing belts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Direct Farmer Partnerships',
                'IPM Guidance & Training',
                'Pre-Harvest Quality Checks',
                'Batch Traceability Logs'
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white border border-slate-100 shadow-sm rounded-2xl p-4 flex items-center gap-3 font-medium text-slate-700 hover:border-emerald-200 transition duration-200"
                >
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: RELIABLE SUPPLY */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-28 group">
          <div className="order-2 lg:order-1 space-y-5">
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100/60 inline-block">
              Continuous Intake Model
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
              Dependable Production Pipeline
            </h3>

            <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
              Immediate access to fresh export-grade gherkins throughout the growing season 
              enables stable production planning, uniform size grading, and on-schedule 
              maritime container commitments.
            </p>
          </div>

          <div 
            onClick={() => setActiveImage({ src: `${import.meta.env.BASE_URL}images/gherkin-harvest.jpg`, alt: "Fresh Gherkin Harvest Collection" })}
            className="order-1 lg:order-2 overflow-hidden rounded-[3rem] shadow-md border border-slate-200/60 bg-slate-900 relative cursor-zoom-in"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/gherkin-harvest.jpg`}
              alt="Harvest"
              className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="text-xs font-mono">Daily Dawn Harvest</span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/80 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                <Maximize2 size={11} /> Enlarge
              </span>
            </div>
          </div>
        </div>

        {/* 2-COLUMN STRATEGIC PILLARS MATRIX */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-emerald-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              Core Competencies
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900">
              Four Pillars of Operational Strength
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {pillar.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#F7FAF4] border border-emerald-100/60 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(pillar.icon, {
                        className: "w-5 h-5 text-emerald-700 group-hover:text-white transition-colors duration-300"
                      })}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 mb-3 inline-block">
                    {pillar.badge}
                  </span>

                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-2">
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-light">
                      <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FIXED PORTAL OVERLAY */}
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

export default WhyChooseSMAF;