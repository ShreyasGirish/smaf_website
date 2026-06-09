import React from 'react';
import {
  Handshake,
  Factory,
  Package,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Investors: React.FC = () => {
  const opportunities = [
    {
      title: 'Private Label Manufacturing',
      desc: 'Custom formulations, packaging formats and tailored branding solutions optimized for retail and export markets.',
      icon: <Package size={24} />
    },
    {
      title: 'Contract Manufacturing',
      desc: 'Reliable, calibrated industrial-scale processing pipelines built directly for international gherkin processors and global brands.',
      icon: <Factory size={24} />
    },
    {
      title: 'Bulk Export Supply',
      desc: 'Semi-finished gherkins, jalapeños and vegetables supplied directly in high-capacity barrels to global processors.',
      icon: <Globe size={24} />
    }
  ];

  // Action Handler to seamlessly route to your intake/lead generation portal
  const handlePartnershipClick = () => {
    // Routes to your clean, external intake Google Form or dedicated page
    window.open('https://forms.google.com/your-specific-partnership-form-id', '_blank');
  };

  return (
    <section id="partnerships" className="py-24 bg-[#FCFBF7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Partnership Opportunities
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
            Grow With
            <span className="text-emerald-600"> SMAF</span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            We collaborate with global food brands, distributors, importers and industrial processors
            looking for dependable sourcing, flexible manufacturing parameters, and long-term supply stability.
          </p>
        </div>

        {/* OPPORTUNITY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((item, i) => (
            <div
              key={i}
              className="bg-[#F7FAF4] border border-emerald-100/60 rounded-[2.5rem] p-10 shadow-sm hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-100/60 text-emerald-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              <h4 className="text-xl font-serif font-bold text-slate-900 mb-4">
                {item.title}
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* STRATEGIC CAPABILITY CARD (Optimized Black Block layout without redundancies) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[4rem] p-12 md:p-16 lg:p-20 text-white shadow-2xl border border-slate-800">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                <Handshake size={14} />
                Long-Term Strategic Partnerships
              </div>

              <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                Built for Global Food <br />Supply Chains
              </h3>

              <p className="text-slate-400 leading-relaxed text-base font-light mb-8">
                SMAF combines farm-level sourcing, modern processing infrastructure,
                rigorous laboratory quality assurance testing, and streamlined export logistics to deliver reliable agricultural
                products to quality-conscious international customers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Truck size={18} />,
                    text: 'Reliable Export Logistics'
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    text: 'International Safety Standards'
                  },
                  {
                    icon: <CheckCircle size={18} />,
                    text: 'Flexible Custom Packing'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-white/5 shadow-inner">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-200 leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dedicated CTA Column */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full">
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-10 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-xl">
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mb-4" />
                <h4 className="text-xl font-serif mb-3 text-slate-100">Establish Your Pipeline</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-8 max-w-xs">
                  Connect with our commercial business development desk to evaluate grade specs, custom formulations, and allocation capacities.
                </p>

                <button
                  onClick={handlePartnershipClick}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white transition-all rounded-2xl py-5 font-bold flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/20"
                >
                  Request Partnership Discussion
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Investors;