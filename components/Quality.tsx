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
  Award
} from 'lucide-react';

const Quality = () => {
  const labImg = `${import.meta.env.BASE_URL}images/quality-lab.jpg`;
  const inspectionImg = `${import.meta.env.BASE_URL}images/quality-inspection.jpg`;
  const certCollageImg = `${import.meta.env.BASE_URL}images/certifications-collage.jpg`;

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

  // Popup & Scroll-Lock Management
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeImage]);

  return (
    <section id="quality" className="py-28 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">
            Compliance Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Quality Control & <br />
            <span className="text-emerald-500">Global Compliance</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl leading-relaxed">
            Every shipment is produced under globally recognized food safety frameworks
            to meet USFDA and European import regulations.
          </p>
        </div>

        {/* ACCREDITATIONS LIST */}
        <div className="mb-8">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-2">
            <Award size={14} className="text-slate-500" /> Accreditations & Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-slate-800/40 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4 hover:border-slate-700 transition-colors duration-200"
              >
                <CheckCircle className="text-emerald-500 flex-shrink-0" size={18} />
                <span className="text-sm font-bold text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NEW PLACEHOLDER SLOT FOR THE CERTIFICATION IMAGE SHEET */}
        <div className="mb-20">
          <div 
            onClick={() => setActiveImage({ src: certCollageImg, alt: "Official Accreditation Certifications Sheet" })}
            className="w-full h-32 sm:h-40 bg-slate-800/20 border border-slate-800 rounded-2xl overflow-hidden relative cursor-zoom-in group/cert flex items-center justify-center text-slate-500 hover:border-slate-700 transition-all duration-300"
          >
            <img 
              src={certCollageImg} 
              alt="Official Certifications Matrix" 
              className="w-full h-full object-cover opacity-40 group-hover/cert:opacity-60 group-hover/cert:scale-[1.01] transition duration-500"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-5 py-3 rounded-xl flex items-center gap-2.5 shadow-2xl font-sans font-bold tracking-wider text-xs border border-teal-500/30">
                <Maximize2 size={14} className="text-teal-300" />
                <span>CLICK TO VIEW VALIDATED CERTIFICATES</span>
              </div>
            </div>
            <span className="absolute left-6 font-mono text-xs tracking-wider uppercase group-hover/cert:text-slate-300">
              [ Certification Document Bundle Repository Placement ]
            </span>
          </div>
        </div>

        {/* QUALITY SYSTEMS GRID */}
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

          {/* INSPECTION IMAGE FRAME */}
          <div 
            onClick={() => setActiveImage({ src: inspectionImg, alt: "100% Manual Processing Quality Inspection" })}
            className="relative min-h-[350px] lg:h-auto rounded-[2.5rem] overflow-hidden border border-slate-800 cursor-zoom-in group/inspect"
          >
            <img
              src={inspectionImg}
              alt="Quality inspection process"
              className="w-full h-full object-cover object-center transform group-hover/inspect:scale-102 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/inspect:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="bg-[#115e59] text-white px-6 py-3.5 rounded-xl flex items-center gap-2.5 shadow-2xl font-sans font-bold tracking-wider text-xs border border-teal-500/30">
                <Maximize2 size={16} className="text-teal-300" />
                <span>CLICK TO ENLARGE IMAGE</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 z-10 pr-4">
              <h5 className="text-white font-serif text-xl mb-1">Batch Pre-Inspection</h5>
              <p className="text-slate-400 text-xs font-light">Comprehensive analysis across product lines</p>
            </div>
          </div>
        </div>

        {/* LABORATORY BLOCK WITH UPDATED OVERLAY TEXT LABELS */}
        <div className="bg-emerald-950/30 rounded-[3.5rem] p-8 md:p-14 border border-emerald-900/50">
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

            {/* UPDATED: SUBTITLE OVERLAYS APPLIED TO LAB IMAGE JUST LIKE IN THE SPECIFICATION IMAGE */}
            <div 
              onClick={() => setActiveImage({ src: labImg, alt: "Real-Time In-House Food Safety Chemical Analysis Laboratory" })}
              className="relative h-72 sm:h-80 rounded-[2.5rem] overflow-hidden border border-emerald-800/60 bg-emerald-950/50 cursor-zoom-in group/lab"
            >
              <img
                src={labImg}
                alt="In-house food safety laboratory"
                className="w-full h-full object-cover transform group-hover/lab:scale-102 transition duration-700 ease-out"
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

      {/* LIGHTBOX OVERLAY PORTAL VIEW */}
      {mounted && activeImage && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out animate-fade-in"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/90 pointer-events-none" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-6xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[82vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-slate-900/40"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-5 bg-slate-900/80 px-6 py-2 rounded-full shadow-md border border-white/5">
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