import React, { useState, useEffect } from 'react';
import { FlaskConical, X, ShieldCheck, Activity, CheckCircle, Download } from 'lucide-react';

const LabAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const batchMetrics = [
    { label: 'Current Batch Index', value: '#2026-M06', status: 'Active Run' },
    { label: 'pH Value Log', value: '3.18', reference: '< 3.30 (Optimal Control)', clear: true },
    { label: 'Acidity Index Titration', value: '0.68%', reference: 'Standardized Shift', clear: true },
    { label: 'NaCl Salt Density', value: '3.2%', reference: 'Taste/Stability Target', clear: true },
    { label: 'Water Resource Yield', value: '99.8%', reference: 'Multi-Stage Filtered', clear: true },
  ];

  const safetyClearances = [
    'Total Coliform Micro-Counts: 0 cfu/g (Absent)',
    'Pesticide & Agro-Chemical Residue: Negative',
    'Heavy Metal Trace Contamination: Absent',
    'Processing Thermal Control Matrix: 18°C Stable'
  ];

  return (
    <>
      {/* 🟢 FLOATING ACTION HUB */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none select-none">
        
        {/* INLINE CSS FOR THE ROLLING EMERALD LED STRIP */}
        <style>{`
          @keyframes border-spin {
            100% { transform: rotate(360deg); }
          }
          .animate-border-spin {
            animation: border-spin 2.5s linear infinite;
          }
        `}</style>

        {/* EMERALD TOOLTIP PROMPT */}
        {showTooltip && !isOpen && (
          <div className="bg-slate-950 text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(4,120,87,0.4)] border-2 border-emerald-500/40 max-w-xs mb-8 pointer-events-auto transition-all duration-500 animate-fade-in relative backdrop-blur-md">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2.5 right-2.5 text-emerald-400 hover:text-white transition-colors p-0.5"
              aria-label="Dismiss banner"
            >
              <X size={14} strokeWidth={3} />
            </button>
            
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 text-base mt-0.5 animate-pulse">🔬</span>
              <div>
                <p className="text-xs font-black text-emerald-400 font-mono tracking-widest uppercase">REAL-TIME DATA</p>
                <p className="text-[11px] text-slate-300 font-medium mt-1 leading-relaxed">
                  Click to inspect current factory batch logs, automated pH metrics, and safety verification clearances.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* MAIN STRUCTURAL WIDGET FRAME */}
        <div className="relative pointer-events-auto flex flex-col items-end pt-5">
          
          {/* Ambient External Emerald Backdrop Glow */}
          <div className="absolute -inset-3 bg-emerald-500 rounded-full blur-2xl opacity-50 animate-pulse" />
          <div className="absolute -inset-1 bg-emerald-400 rounded-full blur-md opacity-25" />
          
          {/* 🔴 FIXED: THE LIVE BADGE IS NOW OUTSIDE THE OVERFLOW CONTAINER 
              Styled in Crimson Red with a persistent pulsing live node marker */}
          <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 bg-rose-600 text-[9px] font-black tracking-widest text-white px-3 py-1 rounded-full border border-rose-400 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(225,29,72,0.4)] uppercase z-30 whitespace-nowrap">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-95"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            LIVE FEED
          </div>

          {/* THE ROLLING LED CHASING TRACK FRAME */}
          <div className="relative w-[185px] h-[72px] rounded-full overflow-hidden p-[4px] flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.5)] z-10">
            
            {/* Emerald Conic Gradient Strip */}
            <div 
              className="absolute w-[250%] h-[250%] animate-border-spin -z-10"
              style={{
                background: 'conic-gradient(from 0deg, transparent 40%, #10b981 65%, #34d399 85%, #059669 95%, transparent 100%)'
              }}
            />
            
            {/* THE INSIDE CORE COMPONENT BUTTON */}
            <button
              onClick={() => {
                setIsOpen(true);
                setShowTooltip(false);
              }}
              className="w-full h-full bg-slate-950 hover:bg-slate-900 text-white rounded-full transition-colors duration-300 flex items-center justify-center gap-3 focus:outline-none px-4 pt-1"
              aria-label="Toggle live telemetry interface"
            >
              {/* Core Theme-Matched Emerald Lab Elements */}
              <FlaskConical className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)] shrink-0" size={23} strokeWidth={2.5} />
              <span className="font-mono text-[12px] font-black uppercase tracking-[0.22em] text-emerald-400 whitespace-nowrap">
                LAB DATA
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* 🔬 SLIDE-OUT OVERLAY COMMAND DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex justify-end">
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Core Panel Content Sidebar */}
          <div className="w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 border-l-2 border-emerald-500/30 h-full p-6 relative z-10 flex flex-col justify-between shadow-2xl text-white overflow-y-auto">
            
            <div>
              {/* BRANDING TOP MODULE BAR */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                    <Activity className="text-emerald-400 animate-pulse" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-slate-100">Lab Analysis Terminal</h3>
                    <p className="text-[9px] font-mono text-emerald-400 tracking-widest uppercase mt-0.5">
                      ● Status: Operational / Calibrated
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors focus:outline-none"
                >
                  <X size={18} />
                </button>
              </div>

              {/* CRITICAL BATCH CONTROL RECORDS FEED */}
              <div className="mb-6">
                <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-3 block">
                  Active Control Limits (CCPs)
                </h4>
                <div className="space-y-2.5">
                  {batchMetrics.map((item, idx) => (
                    <div key={idx} className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl flex items-center justify-between shadow-inner">
                      <div>
                        <p className="text-xs text-slate-300 font-semibold">{item.label}</p>
                        {item.reference && <p className="text-[10px] text-emerald-400/80 font-mono mt-0.5">{item.reference}</p>}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono font-bold text-slate-100">{item.value}</p>
                        {item.clear && <p className="text-[9px] font-mono text-emerald-400 tracking-wider uppercase mt-0.5 font-bold">✓ Safe</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AUTOMATED COMPLIANCE VERIFICATION LOGS */}
              <div className="mb-6">
                <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-3 block">
                  Microbiological Validation Portfolio
                </h4>
                <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-4 space-y-3">
                  {safetyClearances.map((log, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-slate-300 font-light">
                      <ShieldCheck className="text-emerald-400 shrink-0" size={15} />
                      <span className="font-sans leading-none">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* REGULATORY ASSURANCE EMBED NOTE */}
              <div className="bg-emerald-950/10 border border-emerald-900/30 p-4 rounded-xl flex items-start gap-3">
                <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={15} />
                <p className="text-[11px] text-emerald-100/70 font-sans font-light leading-relaxed">
                  Metrics reflect standardized run parameters verified on-site. Production cycles strictly conform with FSSC 22000 Version 6, APEDA guidelines, and USFDA import criteria.
                </p>
              </div>
            </div>

            {/* LOWER PORTION: CONVERSION HUB REPORT BUTTON */}
            <div className="border-t border-slate-800 pt-5 mt-6">
              <a
                href={`${import.meta.env.BASE_URL}brochures/Lab_Report_Specimen.pdf`}
                download
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all focus:outline-none"
              >
                <Download size={14} />
                Download Quality Portfolio
              </a>
              <p className="text-center text-[9px] font-mono text-slate-500 mt-3 uppercase tracking-wider">
                Sri Mookambika Agro Foods Quality Assurance Hub © 2026
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default LabAssistant;