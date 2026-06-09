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
const globalMapImg = `${import.meta.env.BASE_URL}images/global-map.jpg`;
const certificationsImg = `${import.meta.env.BASE_URL}images/certifications.jpg`;
  

  const strengths = [
    {
      title: 'Strategic Location',
      desc: 'Located in Karnataka, India, close to major gherkin-growing regions ensuring dependable raw material sourcing.',
      icon: <MapPin size={24} />
    },
    {
      title: 'Global Compliance',
      desc: 'FSSC 22000, FSSAI, APEDA, Kosher and IEC certifications supporting international trade.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Export Logistics',
      desc: 'Efficient processing, traceability systems and export-ready operations for global customers.',
      icon: <Truck size={24} />
    },
    {
      title: 'Flexible Supply',
      desc: 'Custom packaging, private label support and industrial bulk supply capabilities.',
      icon: <Package size={24} />
    }
  ];

  return (
    <section id="global" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
            Global Presence
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Global Reach.
            <span className="text-emerald-600"> Trusted Quality.</span>
          </h2>

          <p className="text-slate-600 text-lg font-light max-w-3xl">
            Delivering premium agricultural products from India to international
            food manufacturers, processors, distributors and retail partners.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <Users className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">1200+</h3>
            <p className="text-slate-500 text-sm">Partner Farmers</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <Factory className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">3000 MT</h3>
            <p className="text-slate-500 text-sm">Annual Capacity</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <ShieldCheck className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">FSSC</h3>
            <p className="text-slate-500 text-sm">22000 Certified</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <CheckCircle className="text-emerald-600 mb-4" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">100%</h3>
            <p className="text-slate-500 text-sm">Traceable Supply Chain</p>
          </div>

        </div>

        {/* GLOBAL MAP IMAGE */}

        <div className="mb-20">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
            <img
              src={globalMapImg}
              alt="Global Export Network"
              className="w-full"
            />
          </div>
        </div>

        {/* WHY GLOBAL BUYERS CHOOSE SMAF */}

        <div className="mb-20">
          <h3 className="text-3xl font-serif text-slate-900 mb-10">
            Why Global Buyers Choose SMAF
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {strengths.map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all"
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

        {/* CERTIFICATIONS IMAGE */}

        <div className="mb-20">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
            <img
              src={certificationsImg}
              alt="Certifications and Food Safety"
              className="w-full"
            />
          </div>
        </div>

        {/* EXPORT COUNTRIES */}

        <div className="bg-emerald-950 rounded-[4rem] p-12 md:p-16 text-white">

          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-emerald-400" size={28} />
            <h3 className="text-3xl font-serif">
              Export Markets
            </h3>
          </div>

          <p className="text-emerald-100/80 mb-10 max-w-2xl">
            Proudly supplying premium agricultural products to
            quality-conscious customers across multiple international markets.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {['United States', 'Canada', 'France', 'Japan'].map((country) => (
              <div
                key={country}
                className="bg-white/5 border border-white/10 rounded-2xl py-5 text-center font-bold hover:bg-emerald-600 transition-all"
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