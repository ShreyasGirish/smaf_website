import React from 'react';
import {
  ShieldCheck,
  Search,
  Activity,
  RotateCcw,
  ClipboardList,
  FlaskConical,
  CheckCircle,
  Microscope
} from 'lucide-react';

const Quality = () => {
  const labImg = '/assets/images/quality-lab.jpg';
  const inspectionImg = '/assets/images/quality-inspection.jpg';

  const certifications = [
    'FSSC 22000 Version 6',
    'FSSAI Licensed',
    'USFDA Compliant',
    'STAR-K Kosher',
    'APEDA RCMC',
    'IEC Export Certified'
  ];

  const qualitySystems = [
    {
      title: 'Manual Quality Sorting (100%)',
      desc: 'Every vegetable is hand-inspected for size, color, and defect-free integrity.',
      icon: <Search size={20} />
    },
    {
      title: 'HACCP & PRPs',
      desc: 'Hazard analysis and preventive controls implemented across all production lines.',
      icon: <ShieldCheck size={20} />
    },
    {
      title: 'pH Monitoring & Calibration',
      desc: 'Continuous pH control below 3.3 for acidified product stability.',
      icon: <Activity size={20} />
    },
    {
      title: 'Traceability & Pre-Inspection',
      desc: 'Batch-level traceability verified before container sealing.',
      icon: <RotateCcw size={20} />
    },
    {
      title: 'Water Filtration & Hygiene',
      desc: 'Multi-stage filtration and strict personnel hygiene protocols.',
      icon: <ClipboardList size={20} />
    },
    {
      title: 'Microbiological & Residue Testing',
      desc: 'Routine microbial, pesticide, and residue testing aligned with USFDA & EU limits.',
      icon: <Microscope size={20} />
    }
  ];

  return (
    <section className="pt-12 pb-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">
            Compliance Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Quality Control & <br />
            <span className="text-emerald-500">Global Compliance</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl">
            Every shipment is produced under globally recognized food safety frameworks
            to meet USFDA and European import regulations.
          </p>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mb-16">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">
            Accreditations & Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-slate-800/60 border border-slate-700 p-5 rounded-2xl flex items-center gap-4"
              >
                <CheckCircle className="text-emerald-500" size={18} />
                <span className="text-sm font-bold">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* QUALITY SYSTEMS GRID (NOW EVEN 3x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualitySystems.map((system, i) => (
              <div
                key={i}
                className="p-8 bg-slate-800/40 border border-slate-800 rounded-3xl hover:border-emerald-500/40 transition-all"
              >
                <div className="w-10 h-10 bg-emerald-600/10 text-emerald-500 rounded-xl flex items-center justify-center mb-5">
                  {system.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{system.title}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {system.desc}
                </p>
              </div>
            ))}
          </div>

          {/* INSPECTION IMAGE */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-700">
            <img
              src={inspectionImg}
              alt="Quality inspection process"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* LABORATORY */}
        <div className="bg-emerald-950 rounded-[3rem] p-10 md:p-14 border border-emerald-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600/20 p-3 rounded-2xl">
                  <FlaskConical className="text-emerald-400" size={28} />
                </div>
                <h3 className="text-2xl font-serif">
                  In-House Laboratory Capability
                </h3>
              </div>
              <p className="text-emerald-100/70 font-light leading-relaxed">
                Real-time microbial analysis and residue testing ensure every batch
                meets international safety thresholds before export clearance.
              </p>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden border border-emerald-800">
              <img
                src={labImg}
                alt="In-house food safety laboratory"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Quality;
