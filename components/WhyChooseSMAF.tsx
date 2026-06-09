import React from 'react';
import {
  Leaf,
  Factory,
  FlaskConical,
  Globe2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const WhyChooseSMAF = () => {
  const pillars = [
    {
      title: 'Farm Network',
      desc: 'Strong farmer partnerships and field-level quality monitoring.',
      icon: <Leaf size={24} />
    },
    {
      title: 'Processing Excellence',
      desc: 'Modern processing systems focused on consistency and food safety.',
      icon: <Factory size={24} />
    },
    {
      title: 'Product Innovation',
      desc: 'Value-added products and ingredient development through Prakritva.',
      icon: <FlaskConical size={24} />
    },
    {
      title: 'Global Market Focus',
      desc: 'Built to serve international buyers, distributors and private labels.',
      icon: <Globe2 size={24} />
    }
  ];

  return (
    <section
      id="why-smaf"
      className="py-28 bg-[#FCFBF7] border-t border-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl mb-24">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
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
            modern processing infrastructure, product innovation and export
            expertise to deliver reliable agricultural solutions to global markets.
          </p>
        </div>

        {/* SECTION 1: DIRECT FARM NETWORK */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28 group">
          <div className="overflow-hidden rounded-[3rem] shadow-md border border-slate-200/60 bg-white relative">
            <img
              src={`${import.meta.env.BASE_URL}images/gherkin-farm.jpg`}
              alt="Gherkin Farm"
              className="w-full h-[460px] object-cover transform group-hover:scale-102 transition duration-700 ease-out"
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
              field-level quality monitoring and traceable procurement
              practices across Karnataka’s gherkin-growing regions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Farmer Partnerships',
                'Field Support',
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28 group">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100/60">
              Reliable Raw Material Supply
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
              Consistent Production Capability
            </h3>

            <p className="text-slate-600 leading-relaxed font-light text-base">
              Access to fresh export-grade gherkins throughout the growing
              season enables stable production planning, quality consistency
              and dependable delivery commitments.
            </p>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden rounded-[3rem] shadow-md border border-slate-200/60 bg-white relative">
            <img
              src={`${import.meta.env.BASE_URL}images/gherkin-harvest.jpg`}
              alt="Harvest"
              className="w-full h-[460px] object-cover transform group-hover:scale-102 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* SECTION 3: INNOVATION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 group">
          <div className="overflow-hidden rounded-[3rem] shadow-md border border-slate-200/60 bg-white relative">
            <img
              src={`${import.meta.env.BASE_URL}images/prakritva-innovation.jpg`}
              alt="Innovation"
              className="w-full h-[460px] object-cover transform group-hover:scale-102 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="space-y-6">
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-100/60">
              Innovation & Value Creation
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
              Beyond Traditional Processing
            </h3>

            <p className="text-slate-600 leading-relaxed font-light text-base">
              Through Prakritva, we explore value-added products, ingredient
              concepts and sustainable utilization opportunities that transform
              agricultural resources into future-ready solutions.
            </p>
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
                {/* Icon Circle */}
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
    </section>
  );
};

export default WhyChooseSMAF;