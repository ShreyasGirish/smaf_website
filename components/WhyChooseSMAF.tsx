import React from 'react';
import {
  Leaf,
  Factory,
  FlaskConical,
  Globe2,
  ArrowRight
} from 'lucide-react';

const WhyChooseSMAF = () => {
  const pillars = [
    {
      title: 'Farm Network',
      desc: 'Strong farmer partnerships and field-level quality monitoring.',
      icon: <Leaf size={26} />
    },
    {
      title: 'Processing Excellence',
      desc: 'Modern processing systems focused on consistency and food safety.',
      icon: <Factory size={26} />
    },
    {
      title: 'Product Innovation',
      desc: 'Value-added products and ingredient development through Prakritva.',
      icon: <FlaskConical size={26} />
    },
    {
      title: 'Global Market Focus',
      desc: 'Built to serve international buyers, distributors and private labels.',
      icon: <Globe2 size={26} />
    }
  ];

  return (
    <section
      id="why-smaf"
      className="py-28 bg-slate-50 border-t border-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}

        <div className="max-w-4xl mb-20">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
            Why Choose SMAF
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            From Farm To Market,
            <span className="text-emerald-600"> Built For Trust</span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            Sri Mookambika Agro Foods LLP combines strong farmer relationships,
            modern processing infrastructure, product innovation and export
            expertise to deliver reliable agricultural solutions to global
            markets.
          </p>
        </div>

        {/* SECTION 1 */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <div className="overflow-hidden rounded-[3rem] shadow-xl">
            <img
              src="/assets/images/gherkin-farm.jpg"
              alt="Gherkin Farm"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <span className="text-emerald-600 uppercase tracking-widest text-xs font-bold">
              Direct Farm Network
            </span>

            <h3 className="text-4xl font-serif text-slate-900 mt-4 mb-6">
              Strong Agricultural Foundation
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Our sourcing ecosystem is built around close farmer engagement,
              field-level quality monitoring and traceable procurement
              practices across Karnataka’s gherkin-growing regions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Farmer Partnerships',
                'Field Support',
                'Quality Monitoring',
                'Crop Traceability'
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white border border-slate-200 rounded-2xl p-5 font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION 2 */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <div className="order-2 lg:order-1">
            <span className="text-emerald-600 uppercase tracking-widest text-xs font-bold">
              Reliable Raw Material Supply
            </span>

            <h3 className="text-4xl font-serif text-slate-900 mt-4 mb-6">
              Consistent Production Capability
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg">
              Access to fresh export-grade gherkins throughout the growing
              season enables stable production planning, quality consistency
              and dependable delivery commitments.
            </p>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden rounded-[3rem] shadow-xl">
            <img
              src="/assets/images/gherkin-harvest.jpg"
              alt="Harvest"
              className="w-full h-[500px] object-cover"
            />
          </div>

        </div>

        {/* SECTION 3 */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <div className="overflow-hidden rounded-[3rem] shadow-xl">
            <img
              src="/assets/images/prakritva-innovation.jpg"
              alt="Innovation"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <span className="text-emerald-600 uppercase tracking-widest text-xs font-bold">
              Innovation & Value Creation
            </span>

            <h3 className="text-4xl font-serif text-slate-900 mt-4 mb-6">
              Beyond Traditional Processing
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg">
              Through Prakritva, we explore value-added products, ingredient
              concepts and sustainable utilization opportunities that transform
              agricultural resources into future-ready solutions.
            </p>
          </div>

        </div>

        {/* PILLARS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                {pillar.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {pillar.title}
              </h4>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {pillar.desc}
              </p>

              <div className="flex items-center text-emerald-600 font-semibold text-sm">
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSMAF;