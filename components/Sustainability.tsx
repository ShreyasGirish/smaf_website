import React from 'react';
import {
  Sprout,
  ShieldCheck,
  Clock,
  Factory,
  CheckCircle,
  Users
} from 'lucide-react';

const Sustainability = () => {
  // ✅ CORRECT ROOT-BASED PATH
  const farmersImg = `${import.meta.env.BASE_URL}images/farmers.jpg`;

  const workflowStages = [
    {
      id: '01',
      title: 'Community Selection',
      desc: 'Sourcing produce from 1,200+ verified smallholder families within a 100km radius.',
      icon: <Users size={24} />,
    },
    {
      id: '02',
      title: 'IPM-Controlled Cultivation',
      desc: 'Dedicated field officers providing technical mentorship and pest management guidance.',
      icon: <Sprout size={24} />,
    },
    {
      id: '03',
      title: 'Fresh Harvest & Arrival',
      desc: 'Logistics optimized to ensure raw material reaches the facility within 2 hours of harvest.',
      icon: <Clock size={24} />,
    },
    {
      id: '04',
      title: 'Controlled Processing',
      desc: 'Immediate semi-finished processing in Vinegar, Acetic Acid, or Brine media.',
      icon: <Factory size={24} />,
    },
    {
      id: '05',
      title: 'Quality Validation',
      desc: 'Multi-stage inspections and lab testing adhering to FSSC 22000 v6 standards.',
      icon: <ShieldCheck size={24} />,
    },
    {
      id: '06',
      title: 'Community Impact',
      desc: 'Ethical fair-wage distribution and health initiatives for 12,000+ rural laborers.',
      icon: <CheckCircle size={24} />,
    },
  ];

  return (
    <section className="py-28 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Integrated Agricultural Model
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Sustainability Through{' '}
            <span className="text-emerald-500 italic">Operational Integrity.</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl">
            Our proprietary model ensures full traceability from sowing to export,
            supporting rural livelihoods while meeting global food safety standards.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* WORKFLOW */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {workflowStages.map(stage => (
                <div key={stage.id} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-emerald-500">
                    {stage.icon}
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[10px] font-bold text-emerald-500/60 uppercase">
                      {stage.id}
                    </span>
                    <h4 className="font-bold text-lg">{stage.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE + IMPACT */}
          <div className="lg:w-1/3">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-800 border border-slate-700">
              
              <img
                src={farmersImg}
                alt="Smallholder farmers associated with Sri Mookambika Agro Foods"
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 p-8 w-full">
                <div className="space-y-6">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">1,200+</p>
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                        Partner Farmers
                      </p>
                    </div>
                    <Users className="text-white/30" size={32} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">12,000+</p>
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                        Impacted Laborers
                      </p>
                    </div>
                    <CheckCircle className="text-white/30" size={32} />
                  </div>

                </div>

                <p className="mt-6 text-xs text-slate-300 italic leading-relaxed">
                  “Every harvest reflects our commitment to ethical sourcing and soil sustainability.”
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sustainability;
