
import React from 'react';
import {
  Handshake,
  Factory,
  Package,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  CheckCircle
} from 'lucide-react';

const Investors: React.FC = () => {
  const opportunities = [
    {
      title: 'Private Label Manufacturing',
      desc: 'Custom formulations, packaging formats and branding solutions for retail and export markets.',
      icon: <Package size={24} />
    },
    {
      title: 'OEM / Contract Processing',
      desc: 'Reliable industrial-scale processing support for food manufacturers and distributors.',
      icon: <Factory size={24} />
    },
    {
      title: 'Bulk Export Supply',
      desc: 'Semi-finished gherkins, jalapeños and vegetables supplied directly to global processors.',
      icon: <Globe size={24} />
    }
  ];

  const advantages = [
    '1200+ Partner Farmers',
    '3000 MT Annual Capacity',
    'FSSC 22000 Certified Facility',
    'USFDA & Kosher Compliance',
    '100% Traceable Supply Chain',
    'Export Ready Infrastructure'
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] mb-4 block">
            Partnership Opportunities
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
            Grow With
            <span className="text-emerald-600"> SMAF</span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            We collaborate with food brands, distributors, importers and industrial processors
            looking for dependable sourcing, flexible manufacturing and long-term supply partnerships.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {opportunities.map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:border-emerald-200 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h4>

              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Partnership Section */}
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                <Handshake size={14} />
                Long-Term Strategic Partnerships
              </div>

              <h3 className="text-3xl md:text-4xl font-serif mb-8">
                Built for Global Food Supply Chains
              </h3>

              <p className="text-slate-400 leading-relaxed mb-10">
                SMAF combines farm-level sourcing, modern processing infrastructure,
                quality assurance and export logistics to deliver reliable agricultural
                products to international customers.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: <Truck size={18} />,
                    text: 'Reliable Export Logistics'
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    text: 'International Food Safety Standards'
                  },
                  {
                    icon: <CheckCircle size={18} />,
                    text: 'Flexible Manufacturing & Packaging'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>

                    <span className="font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10">
              <h4 className="text-2xl font-serif mb-8">
                Why Partner With SMAF?
              </h4>

              <div className="space-y-4">
                {advantages.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/5 rounded-2xl p-4"
                  >
                    <CheckCircle
                      className="text-emerald-400 flex-shrink-0"
                      size={18}
                    />

                    <span className="text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 transition-all rounded-2xl py-5 font-bold flex items-center justify-center gap-3"
              >
                Request Partnership Discussion
                <ArrowUpRight size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Investors;