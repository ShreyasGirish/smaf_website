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
  Globe,
  CheckSquare,
  FileText,
  FileCheck,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Quality: React.FC = () => {
  const labImg = `${import.meta.env.BASE_URL}images/quality-lab.jpg`;
  const inspectionImg = `${import.meta.env.BASE_URL}images/quality-inspection.jpg`;

  const logoPath = `${import.meta.env.BASE_URL}images/logos/`;
  const fsscLogo = `${logoPath}fssc-logo.png`;
  const fssaiLogo = `${logoPath}fssai-logo.png`;
  const usfdaLogo = `${logoPath}usfda-logo.png`;
  const kosherLogo = `${logoPath}stark-kosher-logo.png`;
  const apedaLogo = `${logoPath}apeda-logo.png`;
  const dgftLogo = `${logoPath}dgft-iec-logo.png`;

  const [brokenLogos, setBrokenLogos] = useState<{ [key: string]: boolean }>({});
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  const handleLogoError = (id: string) => {
    setBrokenLogos((prev) => ({ ...prev, [id]: true }));
  };

  const complianceLedger = [
    {
      name: 'FSSC 22000 Version 6',
      authority: 'DNV Business Assurance Italy S.r.l.',
      regNo: 'Cert No: C787747 / COID: IND-1-2080-475830',
      scope: 'GFSI Framework: Acidification & Fermentation Processing Lines',
      badge: 'Global Safety Benchmark',
      expiry: 'Valid thru Sept 11, 2028',
      icon: <ShieldCheck size={24} className="text-emerald-400" />
    },
    {
      name: 'FSSAI Licensed (Central Export)',
      authority: 'Food Safety & Standards Authority of India',
      regNo: 'License No: 11224999000900',
      scope: 'Central Government General Manufacturing (20 MT / Day Capacity)',
      badge: 'Central Authority',
      expiry: 'Valid thru Dec 09, 2026',
      icon: <CheckSquare size={24} className="text-emerald-400" />
    },
    {
      name: 'USFDA Registered Facility',
      authority: 'United States Food & Drug Administration',
      regNo: 'Registration No: 10921156966',
      scope: 'U.S. Agent: American Regulatory Compliances Inc. (Ossining, NY)',
      badge: 'US Port Cleared',
      expiry: 'Valid thru Dec 31, 2026',
      icon: <Globe size={24} className="text-emerald-400" />
    },
    {
      name: 'STAR-K Kosher Certified',
      authority: 'Global Kosher Advisory (Baltimore, Maryland)',
      regNo: 'Account Code: UJK5NPXU / UKD Pareve Status',
      scope: 'Bulk Processing Media Calibration: Acetic Acid, Brine & Vinegar',
      badge: 'Kosher Pareve',
      expiry: 'Valid thru Dec 31, 2026',
      icon: <CheckCircle size={24} className="text-emerald-400" />
    },
    {
      name: 'APEDA RCMC Registered',
      authority: 'Agricultural & Processed Food Products Export Development Authority',
      regNo: 'Certificate No: RCMC/APEDA/23090/2025-2026',
      scope: 'Merchant-Manufacturer: Preserved Gherkins in HDPE Drums',
      badge: 'Commerce Ministry',
      expiry: 'Valid thru Dec 08, 2026',
      icon: <FileCheck size={24} className="text-emerald-400" />
    },
    {
      name: 'IEC Export Clearances',
      authority: 'Directorate General of Foreign Trade (Ministry of Commerce)',
      regNo: 'IE Code: AFDFS4584H',
      scope: 'Operating Authorization • Active Maritime Export Pass',
      badge: 'DGFT Validated',
      expiry: 'Active Trade Status',
      icon: <FileText size={24} className="text-emerald-400" />
    }
  ];

  const qaPipelineSteps = [
    {
      step: '01',
      title: 'Farm-Gate Harvest Triage',
      desc: 'Visual sorting and field moisture evaluation within 2 hours of morning picking.',
      spec: 'Transit Window < 8 Hours',
      icon: <Search size={18} />
    },
    {
      step: '02',
      title: 'Mechanized & Manual Grading',
      desc: 'Dual calibration grids sorting gherkins from 300/450 count micro-calibrations to 5/10 grades.',
      spec: '100% Manual Inspection',
      icon: <Layers size={18} />
    },
    {
      step: '03',
      title: 'Multi-Stage Pure Water Wash',
      desc: 'Recirculating micro-filtered wash cycles removing field detritus without cellular abrasion.',
      spec: 'Filtration Standard Loops',
      icon: <ClipboardList size={18} />
    },
    {
      step: '04',
      title: 'Equilibrium Brine Immersion',
      desc: 'Direct transfer into Natural Vinegar (NV), Acetic Acid (AA), or Fermentation tanks.',
      spec: 'pH Locked < 3.3',
      icon: <Activity size={18} />
    },
    {
      step: '05',
      title: 'Real-Time In-House Lab Assay',
      desc: 'Analytical titration for acetic acid %, salinometer NaCl mapping, and digital microbiology checks.',
      spec: 'Analytical Tolerances Met',
      icon: <Microscope size={18} />
    },
    {
      step: '06',
      title: 'Barrel Sealing & Batch Traceability',
      desc: '240L–260L HDPE drum packaging assigned area-of-cultivation origin tracking barcodes.',
      spec: 'USFDA / EU Cleared',
      icon: <RotateCcw size={18} />
    }
  ];

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
    <section id="quality" className="py-28 bg-slate-950 text-white border-t border-slate-900 text-left">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-400 font-mono font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-400" />
            Global Compliance & Verification
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Quality Assurance & <br />
            <span className="text-emerald-400">Institutional Compliance</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Every container is processed under internationally audited safety matrices 
            satisfying USFDA, Japanese MHLW, and European Union import protocols with batch-level traceability.
          </p>
        </div>

        {/* ── PRESTIGE LED-LIT GLOBAL BANNER SECTION ── */}
        <div className="mb-24 bg-slate-900/60 border border-emerald-500/20 shadow-[0_0_30px_-5px_rgba(16,185,129,0.1)] rounded-[3rem] p-8 lg:p-12 relative overflow-hidden backdrop-blur-md">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400">
              Accredited Global Regulatory Gateways
            </p>
            <span className="text-[11px] font-mono text-slate-500">
              Audit Status: Verified Active 2026
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { id: 'fssc', src: fsscLogo, text: 'FSSC 22000', label: 'Version 6 Certified' },
              { id: 'usfda', src: usfdaLogo, text: 'USFDA', label: 'Registered Hub' },
              { id: 'fssai', src: fssaiLogo, text: 'FSSAI', label: 'Central License' },
              { id: 'kosher', src: kosherLogo, text: 'STAR-K', label: 'Kosher Pareve' },
              { id: 'apeda', src: apedaLogo, text: 'APEDA', label: 'RCMC Registered' },
              { id: 'dgft', src: dgftLogo, text: 'DGFT', label: 'IEC Authorized' }
            ].map((logo) => (
              <div 
                key={logo.id} 
                className="h-24 flex items-center justify-center p-3 rounded-2xl bg-white/[0.02] border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300"
                title={`${logo.text} ${logo.label}`}
              >
                {brokenLogos[logo.id] ? (
                  <div className="text-center font-mono select-none pointer-events-none">
                    <span className="block text-xs font-bold text-emerald-400 tracking-wider uppercase">{logo.text}</span>
                    <span className="block text-[8px] font-medium text-slate-500 tracking-widest uppercase mt-0.5">{logo.label}</span>
                  </div>
                ) : (
                  <img 
                    src={logo.src} 
                    alt={`${logo.text} ${logo.label}`} 
                    onError={() => handleLogoError(logo.id)}
                    className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── REGULATORY LEDGER GRID ── */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <Award size={14} className="text-emerald-400" /> Regulatory Clearance Ledger
            </h3>
            <span className="text-[11px] font-mono text-emerald-400/80 hidden sm:inline-block">
              Click Reg No. to copy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceLedger.map((cert, i) => (
              <div
                key={i}
                className="bg-slate-900/50 border border-slate-800/80 p-7 rounded-[2rem] flex flex-col justify-between hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 group/card relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="bg-emerald-950/80 text-emerald-400 font-mono text-[9px] uppercase font-bold px-2.5 py-1 rounded-full border border-emerald-800/50 tracking-wider">
                      {cert.badge}
                    </span>
                    <div className="w-10 h-10 bg-emerald-950/40 rounded-xl border border-emerald-900/40 flex items-center justify-center shadow-inner group-hover/card:border-emerald-500/40 transition-colors">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-100 group-hover/card:text-white transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium tracking-wide mt-1">
                    {cert.authority}
                  </p>
                  
                  <p className="text-xs text-slate-400 font-light mt-4 leading-relaxed min-h-[36px]">
                    {cert.scope}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-emerald-400 font-bold tracking-wider select-all break-all">
                    {cert.regNo}
                  </span>
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider mt-1">
                    <span className="text-slate-500 font-mono">{cert.expiry}</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={11} className="text-emerald-400" /> Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SEQUENTIAL 6-STEP QA PIPELINE (REPLACING THE OLD REPETITIVE CARD GRID) ── */}
        <div className="mb-28">
          <div className="max-w-3xl mb-12">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              Step-by-Step QA Architecture
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">
              The Field-to-Freight Protocol
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Our quality verification operates in an unbroken sequence from dawn harvesting to 260L HDPE drum freight clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qaPipelineSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-slate-900/40 border border-slate-800/80 rounded-[2rem] p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-emerald-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 bg-emerald-950/40 text-emerald-400 rounded-xl border border-emerald-900/40 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-slate-100 mb-2">
                    {step.title}
                  </h4>

                  <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400/90">{step.spec}</span>
                  <ArrowRight size={13} className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── LABORATORY & INSPECTION DUAL STAGE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LAB CARD */}
          <div 
            onClick={() => setActiveImage({ src: labImg, alt: "Real-Time In-House Food Safety Chemical Analysis Laboratory" })}
            className="bg-slate-900/60 border border-slate-800/80 rounded-[3rem] p-8 md:p-10 flex flex-col justify-between cursor-zoom-in group shadow-2xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FlaskConical size={20} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  On-Site Chemical Testing
                </span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">In-House Analytical Laboratory</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                Equipped for digital titrable acidity assays, salinometer salt mapping, and continuous pH profiling before batch containerization.
              </p>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
              <img 
                src={labImg} 
                alt="In-house food safety laboratory" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">pH & Acidity Assays</span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1 bg-slate-950/80 px-3 py-1 rounded-full border border-white/10">
                  <Maximize2 size={11} /> Enlarge
                </span>
              </div>
            </div>
          </div>

          {/* INSPECTION CARD */}
          <div 
            onClick={() => setActiveImage({ src: inspectionImg, alt: "100% Manual Processing Quality Inspection & Defect Segregation" })}
            className="bg-slate-900/60 border border-slate-800/80 rounded-[3rem] p-8 md:p-10 flex flex-col justify-between cursor-zoom-in group shadow-2xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Search size={20} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Defect Segregation
                </span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">100% Manual Visual Inspection</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                Trained inspection squads manually examine every sorted batch to ensure flawless texture, natural color uniformity, and zero mechanical scarring.
              </p>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
              <img 
                src={inspectionImg} 
                alt="Quality inspection process" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">Visual Defect Checks</span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1 bg-slate-950/80 px-3 py-1 rounded-full border border-white/10">
                  <Maximize2 size={11} /> Enlarge
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* PORTAL-RENDERED GLASSMORPHIC LIGHTBOX OVERLAY */}
      {mounted && activeImage && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/95 pointer-events-none animate-fade-in" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95 shadow-xl cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-5xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl border border-white/10 bg-slate-900"
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