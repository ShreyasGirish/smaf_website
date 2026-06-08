import React from 'react';
import {
  Globe,
  Users,
  Factory,
  ShieldCheck,
  Truck,
  MapPin,
  Package,
  CheckCircle
} from 'lucide-react';

const GlobalPresence = () => {
  const exportMarkets = [
    'USA',
    'Germany',
    'France',
    'Netherlands',
    'Canada',
    'Australia'
  ];

  const strengths = [
    {
      title: 'Strategic Location',
      desc: 'Located in the heart of India’s gherkin-growing belt ensuring dependable raw material access.',
      icon: <MapPin size={24} />
    },
    {
      title: 'Global Compliance',
      desc: 'FSSC 22000, USFDA, Kosher and export certifications supporting international trade.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Export Logistics',
      desc: 'Efficient container loading, traceability systems and international shipment readiness.',
      icon: <Truck size={24} />
    },
    {
      title: 'Flexible Packaging',
      desc: 'Bulk industrial packaging solutions tailored for processors, distributors and private labels.',
      icon: <Package size={24} />
    }
  ];

  return (
    <section id="global" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
            Global Presence
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Trusted Across
            <span className="text-emerald-600"> International Markets</span>
          </h2>

          <p className="text-slate-600 text-lg font-light max-w-2xl">
            Delivering premium agricultural products to food manufacturers,
            distributors, processors and private-label partners across global markets.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <Users className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">1200+</h3>
            <p className="text-slate-500 text-sm">Partner Farmers</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <Factory className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">3000 MT</h3>
            <p className="text-slate-500 text-sm">Annual Throughput</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <ShieldCheck className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">100%</h3>
            <p className="text-slate-500 text-sm">Traceable Supply Chain</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <CheckCircle className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">FSSC</h3>
            <p className="text-slate-500 text-sm">22000 Certified</p>
          </div>
        </div>

        {/* Why Choose SMAF */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif text-slate-900 mb-10">
            Why Global Buyers Choose SMAF
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Export Markets Placeholder */}
        <div className="bg-emerald-950 rounded-[4rem] p-12 md:p-16 text-white">
          <div className="flex items-center gap-3 mb-10">
            <Globe className="text-emerald-400" size={28} />
            <h3 className="text-3xl font-serif">
              Export Market Network
            </h3>
          </div>

          <p className="text-emerald-100/80 mb-10 max-w-2xl">
            Current export destinations and customer markets will be displayed
            here. Interactive world map integration will be added in the final
            version once country-wise export data is confirmed.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {exportMarkets.map((country, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl py-4 text-center font-bold tracking-wide hover:bg-emerald-600 transition-all"
              >
                {country}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;