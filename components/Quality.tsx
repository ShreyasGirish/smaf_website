import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ShieldCheck,
  Search,
  Activity,
  RotateCcw,
  ClipboardList,
  FlaskConical,
  CheckCircle,
  Microscope,
  Maximize2,
  X,
  Award,
  Lock,
  Globe,
  CheckSquare,
  FileText,
  FileCheck,
  Layers
} from 'lucide-react';

const Quality = () => {
  const labImg = `${import.meta.env.BASE_URL}images/quality-lab.jpg`;
  const inspectionImg = `${import.meta.env.BASE_URL}images/quality-inspection.jpg`;

  const complianceLedger = [
    {
      name: 'FSSC 22000 Version 6',
      authority: 'DNV Business Assurance Italy S.r.l.',
      regNo: 'Cert No: C787747 / COID: IND-1-2080-475830',
      scope: 'GFSI Sourcing Framework: Acidification & Fermentation Processing Lines',
      badge: 'Global Safety Lock',
      expiry: 'Valid thru Sept 11, 2028',
      icon: <ShieldCheck size={26} className="text-emerald-400 group-hover/card:scale-110 transition-transform duration-300" />
    },
    {
      name: 'FSSAI Licensed (Central Export)',
      authority: 'Food Safety & Standards Authority of India',
      regNo: 'License No: 11224999000900',
      scope: 'Central Government General Manufacturing (20 MT / Day Capacity)',
      badge: 'Central Gov Authority',
      expiry: 'Valid thru Dec 09, 2026',
      icon: <CheckSquare size={26} className="text-emerald-400 group-hover/card:scale-110 transition-transform duration-300" />
    },
    {
      name: 'USFDA Compliant Facility',
      authority: 'United States Food & Drug Administration',
      regNo: 'Registration No: 10921156966',
      scope: 'U.S. Agent: American Regulatory Compliances Inc. (Ossining, NY)',
      badge: 'US Customs Cleared',
      expiry: 'Valid thru Dec 31, 2026',
      icon: <Globe size={26} className="text-emerald-400 group-hover/card:scale-110 transition-transform duration-300" />
    },
    {
      name: 'STAR-K Kosher Certified',
      authority: 'Global Kosher Advisory (Baltimore, Maryland)',
      regNo: 'Account Code: UJK5NPXU / UKD Pareve Status',
      scope: 'Bulk Processing Media Calibration: Acetic Acid, Brine, & Vinegar',
      badge: 'Kosher Compliance',
      expiry: 'Valid thru Dec 31, 2026',
      icon: <CheckCircle size={26} className="text-emerald-400 group-hover/card:scale-110 transition-transform duration-300" />
    },
    {
      name: 'APEDA RCMC Registered',
      authority: 'Agricultural & Processed Food Products Export Development Authority',
      regNo: 'Certificate No: RCMC/APEDA/23090/2025-2026',
      scope: 'Merchant-Manufacturer Status: Preserved Gherkins in HDPE Drums',
      badge: 'Commerce Ministry Lock',
      expiry: 'Valid thru Dec 08, 2026',
      icon: <FileCheck size={26} className="text-emerald-400 group-hover/card:scale-110 transition-transform duration-300" />
    },
    {
      name: 'IEC Export Certified',
      authority: 'Directorate General of Foreign Trade (Ministry of Commerce)',
      regNo: 'IE Code: AFDFS4584H',
      scope: 'File Ref: BNGIECPAMEND00026971AM26 • Operating Authorization',
      badge: 'DGFT Clearance',
      expiry: 'Active Trade Status',
      icon: <FileText size={26} className="text-emerald-400 group-hover/card:scale-110 transition-transform duration-300" />
    }
  ];

  const qualitySystems = [
    {
      title: 'Manual Quality Sorting (100%)',
      desc: 'Every vegetable is hand-picked for size, color, and defect-free integrity.',
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

  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeImage]);

  return (
    <section id="quality" className="py-28 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-500 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
            Compliance Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Quality Control & <br />
            <span className="text-emerald-500">Global Compliance</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl leading-relaxed">
            Every shipment is produced under globally recognized food safety frameworks
            to satisfy USFDA and European import regulations with absolute container transparency.
          </p>
        </div>

        {/* AUDITED COMPLIANCE LEDGER GRID */}
        <div className="mb-24">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-8 flex items-center gap-2">
            <Award size={14} className="text-slate-500" /> Secure Regulatory Clearance Ledger
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceLedger.map((cert, i) => (
              <div
                key={i}
                className="bg-slate-950/40 border border-slate-800/60 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group/card relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="bg-emerald-950 text-emerald-400 font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md border border-emerald-900/40 tracking-wider">
                      {cert.badge}
                    </span>
                    <div className="w-12 h-12 bg-emerald-950/20 rounded-xl border border-emerald-900/40 flex items-center justify-center shadow-inner transition-colors duration-300 group-hover/card:border-emerald-500/30">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-100 group-hover/card:text-white transition-colors duration-200">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">
                    {cert.authority}
                  </p>
                  
                  <p className="text-xs text-slate-400 font-light mt-4 leading-relaxed min-h-[40px]">
                    {cert.scope}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-emerald-400 font-bold tracking-wider select-all break-all">
                    {cert.regNo}
                  </span>
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider mt-1">
                    <span className="text-slate-600 font-mono">{cert.expiry}</span>
                    <span className="text-emerald-500 flex items-center gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      Verified <CheckCircle size={10} className="text-emerald-500" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW QUALITY PROCESS INTRODUCTION SECTION HEADER */}
        <div className="max-w-4xl mb-10 mt-20 border-l-2 border-emerald-500 pl-6 text-left">
          <span className="text-emerald-500 tracking-[0.2em] uppercase text-[10px] font-bold mb-2 block flex items-center gap-2">
            <Layers size={12} /> Sourcing Rigor & Operations
          </span>
          <h3 className="text-2xl md:text-4xl font-serif text-slate-100 leading-tight">
            Our Quality Assurance Framework
          </h3>
          <p className="text-slate-400 text-sm font-light mt-2 max-w-xl">
            From critical field analytics and 10-barrel composition tracking to external independent trace element monitoring, our structural pipeline checks everything down to the individual crop level.
          </p>
        </div>

        {/* OPERATIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualitySystems.map((system, i) => (
              <div
                key={i}
                className="p-8 bg-slate-800/30 border border-slate-800/80 rounded-[2.5rem] hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors duration-300">
                  {system.icon}
                </div>
                <h4 className="text-xl font-serif font-bold mb-2 text-slate-100">{system.title}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {system.desc}
                </p>
              </div>
            ))}
          </div>

          {/* INSPECTION PORTAL CARD */}
          <div 
            onClick={() => setActiveImage({ src: inspectionImg, alt: "100% Manual Processing Quality Inspection & Defect Segregation Framework" })}
            className="relative min-h-[350px] lg:h-auto rounded-[2.5rem] overflow-hidden border border-slate-800 cursor-zoom-in group/inspect shadow-2xl"
          >
            <img
              src={inspectionImg}
              alt="Quality inspection process"
              className="w-full h-full object-cover object-center transform group-hover/inspect:scale-[1.02] transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/inspect:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-6 py-3.5 rounded-xl flex items-center gap-2.5 shadow-2xl font-sans font-bold tracking-wider text-xs border border-teal-500/30">
                <Maximize2 size={16} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10 pr-4 text-left">
              <h5 className="text-white font-serif text-xl mb-1">Batch Pre-Inspection</h5>
              <p className="text-slate-400 text-xs font-light">Comprehensive analysis across product lines</p>
            </div>
          </div>
        </div>

        {/* LABORATORY BLOCK MODULE */}
        <div className="bg-emerald-950/30 rounded-[3.5rem] p-8 md:p-14 border border-emerald-900/40 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20">
                  <FlaskConical className="text-emerald-400" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-slate-100">
                  In-House Laboratory Capability
                </h3>
              </div>
              <p className="text-emerald-100/70 font-light leading-relaxed text-base">
                Real-time 100% inspection for acidity, salt, and pH levels to ensure that every batch meets 
                strict international safety thresholds and batch-formulated specifications before export clearance.
              </p>
            </div>

            <div 
              onClick={() => setActiveImage({ src: labImg, alt: "Real-Time In-House Food Safety Chemical Analysis Laboratory Framework" })}
              className="relative h-72 sm:h-80 rounded-[2.5rem] overflow-hidden border border-emerald-800/60 bg-emerald-950/50 cursor-zoom-in group/lab shadow-2xl"
            >
              <img
                src={labImg}
                alt="In-house food safety laboratory"
                className="w-full h-full object-cover transform group-hover/lab:scale-[1.02] transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/lab:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <div className="bg-[#115e59] text-white px-6 py-3.5 rounded-xl flex items-center gap-2.5 shadow-2xl font-sans font-bold tracking-wider text-xs border border-teal-500/30">
                  <Maximize2 size={16} className="text-teal-300" />
                  <span>CLICK TO ENLARGE IMAGE</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 z-10 pr-4">
                <h5 className="text-white font-serif text-xl mb-1">pH Testing & Calibration</h5>
                <p className="text-slate-400 text-xs font-light">Real-time parameters verified across production lines</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* PORTAL-RENDERED GLASSMORPHIC LIGHTBOX OVERLAY VIEW */}
      {mounted && activeImage && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/95 pointer-events-none animate-fade-in" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95 shadow-xl"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-5xl relative z-10 flex flex-col items-center justify-center cursor-default animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-slate-900/40"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-5 bg-slate-950/80 px-6 py-2.5 rounded-full shadow-md border border-white/5 text-center max-w-xl">
              {activeImage.alt}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Quality;