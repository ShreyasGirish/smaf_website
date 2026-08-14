import React, { useState } from 'react';
import {
  Trophy,
  Sparkles,
  Sprout,
  TrendingUp,
  Globe2,
  FlaskConical,
  Award,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X
} from 'lucide-react';
import { createPortal } from 'react-dom';

const Innovation: React.FC = () => {
  const awardImg = `${import.meta.env.BASE_URL}images/krishi-mela-award.jpg`;
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const pillars = [
    {
      id: '01',
      title: 'Agronomic Crop Valorization',
      tag: 'Zero-Waste Upcycling',
      desc: 'Transforming harvest-grade gherkins, tender baby corn, and regional botanical produce into high-margin, shelf-stable consumer formats without chemical stabilizers.',
      metrics: '100% Non-GMO & All-Natural Lines',
      icon: <Sprout className="text-emerald-400" size={22} />
    },
    {
      id: '02',
      title: 'Prakritva Botanical R&D',
      tag: 'Functional Formulations',
      desc: 'Formulating cold-infused Natural Vinegar metabolic elixirs, sun-cured Kokum digestive concentrates, and micronutrient-dense ABC/Rosella vitality powders.',
      metrics: 'Zero Artificial Preservatives',
      icon: <FlaskConical className="text-emerald-400" size={22} />
    },
    {
      id: '03',
      title: 'Farmer-Centric Margin Security',
      tag: 'Economic Stability',
      desc: 'Deploying direct-procurement contracts and crop pricing safety layers that protect 1,200+ smallholder families against wholesale market volatility.',
      metrics: 'Guaranteed Buyback Moat',
      icon: <TrendingUp className="text-emerald-400" size={22} />
    }
  ];

  const roadmapMilestones = [
    {
      phase: 'Stage 01',
      title: 'Retail Brand Scaling',
      desc: 'Expanding Prakritva artisanal preserves and botanical wellness powders across tier-1 Indian gourmet and clean-label retail chains.'
    },
    {
      phase: 'Stage 02',
      title: 'Global Private Label',
      desc: 'Providing customized industrial drum, pail, and retail glass jar packaging for international food service and condiment brands.'
    },
    {
      phase: 'Stage 03',
      title: 'Functional Bio-Nutrients',
      desc: 'Developing specialized enzyme-rich vinegar elixirs and spray-dried herbal concentrates for health-conscious global markets.'
    },
    {
      phase: 'Stage 04',
      title: 'Decentralized Agri-Hubs',
      desc: 'Scaling localized farm-gate grading hubs to compress farm-to-brine transport times across Karnataka and Andhra Pradesh.'
    }
  ];

  return (
    <section id="innovation" className="py-28 bg-[#FCFBF7] border-t border-slate-100 overflow-hidden text-left">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-20">
          <span className="text-emerald-700 font-mono font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Value Creation & R&D
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Building the Future of <br />
            <span className="text-emerald-600 relative inline-block">
              Value-Added Agriculture
              <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-100/60 -z-10" />
            </span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            Beyond high-volume bulk brining, SMAF pioneers clean-label consumer brand development, 
            functional botanical formulations, and scalable farmer-stabilization frameworks through 
            our flagship innovation initiative, <b>Prakritva</b>.
          </p>
        </div>

        {/* FEATURED AWARD BANNER (KRISHI MELA 2025) */}
        <div className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 rounded-[3.5rem] p-8 md:p-14 text-white mb-24 shadow-2xl relative overflow-hidden border border-emerald-900/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Award Text Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2.5 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-full">
                <Trophy className="text-yellow-400" size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-yellow-300">
                  State Agronomic Recognition
                </span>
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-2">
                  Best Innovation Award
                </h3>
                <p className="text-emerald-400 font-serif text-lg tracking-wide">
                  Krishi Mela 2025 • Bengaluru, Karnataka
                </p>
              </div>

              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                Sri Mookambika Agro Foods was formally honored with the prestigious <b>Best Innovation Award</b> for 
                engineering clean-ingredient agricultural transformations, pioneering smallholder-centric 
                buyback stabilization models, and launching the non-chemical <b>Prakritva</b> retail portfolio.
              </p>

              {/* Award Pillars Badge Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Farmer-Centric Sourcing</span>
                    <span className="text-[11px] text-slate-400 font-light">Price floor insulation for 1,200+ growers</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Clean Food Processing</span>
                    <span className="text-[11px] text-slate-400 font-light">Zero synthetic colors or artificial binders</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Award Visual Frame (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setActiveModal(true)}
                className="relative rounded-[2.5rem] overflow-hidden border border-white/15 bg-slate-900 group cursor-pointer shadow-2xl w-full max-w-md"
              >
                <img
                  src={awardImg}
                  alt="Krishi Mela 2025 Best Innovation Award - Sri Mookambika Agro Foods"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Graceful fallback to branded card if image path is not yet built
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-300">Official Citation & Honor</span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                    <span>Enlarge</span>
                    <Maximize2 size={12} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* INNOVATION PILLARS: ASYMMETRICAL EDITORIAL GRID */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                Strategic R&D Core
              </span>
              <h3 className="text-3xl font-serif text-slate-900">
                Pillars of Agricultural Transformation
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-serif font-bold text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {pillar.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                      {pillar.icon}
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 mb-3 inline-block">
                    {pillar.tag}
                  </span>

                  <h4 className="text-xl font-bold font-serif text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-slate-500">
                    {pillar.metrics}
                  </span>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE ROADMAP HORIZON */}
        <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-14 text-white border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              Strategic Trajectory
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Where We Are Headed Next
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Our growth framework integrates progressive agricultural R&D with multi-continent 
              distribution channels to anchor SMAF as a premier sustainable agri-processor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapMilestones.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-emerald-400 font-mono text-[11px] uppercase font-bold tracking-wider mb-2 block">
                    {item.phase}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-emerald-500/30 rounded-full mt-6" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL FOR AWARD CITATION */}
      {activeModal && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveModal(false)}
        >
          <div className="absolute inset-0 bg-slate-950/95 pointer-events-none" />

          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] cursor-pointer"
            onClick={() => setActiveModal(false)}
          >
            <X size={24} />
          </button>

          <div 
            className="w-full max-w-4xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={awardImg} 
              alt="Best Innovation Award Krishi Mela 2025" 
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl border border-white/15 bg-slate-900"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-4 bg-slate-900/90 px-6 py-2 rounded-full border border-white/10 text-center">
              Best Innovation Award • Krishi Mela 2025 (Bengaluru)
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Innovation;