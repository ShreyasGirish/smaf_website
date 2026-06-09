import React from 'react';
import {
  MapPin,
  Clock,
  ShieldCheck,
  RefreshCw,
  Zap,
  Package
} from 'lucide-react';

const Facility = () => {
  const certifications = [
    'FSSC 22000 v6 Certified',
    'FSSAI Food License',
    'STAR-K Kosher Approved',
    'APEDA RCMC Registered',
    'USFDA Compliance Standard',
    'IEC Export-Ready',
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-600 mb-3">
            <MapPin size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Processing Hub
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif mb-5">
            Strategic Advantage – Ranebennur, Karnataka
          </h2>

          <p className="text-slate-500 text-lg font-light max-w-2xl">
            Located at the heart of India’s gherkin-growing belt, our processing
            facility ensures unmatched freshness, traceability, and export reliability.
          </p>
        </div>

        {/* CAPABILITY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border">
            <Clock className="text-emerald-600 mb-4" />
            <h4 className="font-bold mb-2">Proximity Advantage</h4>
            <p className="text-sm text-slate-600">
              &lt; 2 hours farm-to-plant time
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <ShieldCheck className="text-emerald-600 mb-4" />
            <h4 className="font-bold mb-2">Traceability</h4>
            <p className="text-sm text-slate-600">
              100% field-level origin mapping
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <RefreshCw className="text-emerald-600 mb-4" />
            <h4 className="font-bold mb-2">Continuous Supply</h4>
            <p className="text-sm text-slate-600">
              Sunrise-to-sunset intake
            </p>
          </div>
        </div>

        {/* IMAGES WITH DESCRIPTION OVERLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* FACILITY IMAGE */}
          <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}images/facility.jpg`}
              alt="Processing facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h5 className="text-white font-bold text-lg">
                  Advanced Processing Facility
                </h5>
                <p className="text-emerald-200 text-sm">
                  High-throughput industrial processing systems
                </p>
              </div>
            </div>
          </div>

          {/* FARMERS IMAGE */}
          <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}images/farmers.jpg`}
              alt="Farmer sourcing network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h5 className="text-white font-bold text-lg">
                  Integrated Farmer Network
                </h5>
                <p className="text-emerald-200 text-sm">
                  Direct sourcing from 1,200+ smallholder farmers
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* OPERATIONAL CAPACITY */}
        <div className="bg-emerald-950 text-white rounded-[3rem] p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="flex gap-4">
              <Zap className="text-emerald-400" />
              <div>
                <p className="font-bold">2.5 MT / hour</p>
                <p className="text-xs text-emerald-200/60">Processing Speed</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Package className="text-emerald-400" />
              <div>
                <p className="font-bold">3,000 MT</p>
                <p className="text-xs text-emerald-200/60">Annual Throughput</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map(cert => (
              <div key={cert} className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span className="text-sm text-emerald-100/80">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facility;
