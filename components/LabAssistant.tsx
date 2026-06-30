import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import {
  FlaskConical, X, Activity, ExternalLink,
  FileText, FileSpreadsheet, LogIn, Clock, RefreshCw, AlertTriangle
} from 'lucide-react';
import Admin from './Admin.tsx';

// ─── helpers ─────────────────────────────────────────────────────────────────

const fmt = (val: any, suffix = '') => {
  if (val === null || val === undefined) return '—';
  const s = String(val).trim();
  return s === '' ? '—' : `${s}${suffix}`;
};

const fmtDate = (raw: string | null | undefined) => {
  if (!raw) return null;
  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d.toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
};

const timeSince = (raw: string | null | undefined) => {
  if (!raw) return null;
  const diff = Date.now() - new Date(raw).getTime();
  if (isNaN(diff) || diff < 0) return null;
  const mins = Math.floor(diff / 60000);
  if (mins < 1)  return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)  return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
};

// ─── types ───────────────────────────────────────────────────────────────────

interface BarrelMetrics {
  batch_code: string;
  ph_value: string;
  acidity: string;
  salt_density: string;
  calcium_index: string;
  so2_stabilizer: string;
  created_at: string | null;
}

interface BatchSyncMetrics {
  production_lot: string;
  harvest_season: string;
  sync_status: string;
  barrel_count: string;
  processing_type: string;
  data_source_url: string;
  created_at: string | null;
}

// ─── component ───────────────────────────────────────────────────────────────

const LabAssistant = () => {
  const [isOpen,          setIsOpen]          = useState(false);
  const [showAdminPortal, setShowAdminPortal] = useState(false);
  const [showLogin,        setShowLogin]        = useState(false);
  const [adminKey,        setAdminKey]        = useState('');
  const [keyError,        setKeyError]        = useState(false);

  const [loading,       setLoading]       = useState(false);
  const [fetchError,    setFetchError]    = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);

  /* Separate States for Independent Entities */
  const [barrelData, setBarrelData] = useState<BarrelMetrics | null>(null);
  const [batchData, setBatchData] = useState<BatchSyncMetrics | null>(null);
  const [labReport, setLabReport] = useState<any>(null);

  // ── fetch ─────────────────────────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    try {
      // 1. Fetch latest log from barrel_logs table
      const { data: bLogs, error: bErr } = await supabase
        .from('barrel_logs')
        .select('*')
        .order('batch_code', { ascending: false }) 
        .limit(1);

      if (bErr) throw bErr;
      if (bLogs && bLogs.length > 0) {
        setBarrelData({
          batch_code: String(bLogs[0].batch_code ?? ''),
          ph_value: String(bLogs[0].ph_value ?? ''),
          acidity: String(bLogs[0].acidity ?? ''),
          salt_density: String(bLogs[0].salt_density ?? ''),
          calcium_index: String(bLogs[0].calcium_index ?? ''),
          so2_stabilizer: String(bLogs[0].so2_stabilizer ?? ''),
          created_at: bLogs[0].created_at ?? null,
        });
      } else {
        setBarrelData(null);
      }

      // 2. Fetch latest sync file metadata log from batch_sync_logs table
      const { data: sLogs, error: sErr } = await supabase
        .from('batch_sync_logs')
        .select('*')
        .order('id', { ascending: false })
        .limit(1);

      if (sErr) throw sErr;
      if (sLogs && sLogs.length > 0) {
        setBatchData({
          production_lot: String(sLogs[0].production_lot ?? ''),
          harvest_season: String(sLogs[0].harvest_season ?? '2026-2027'),
          sync_status: String(sLogs[0].sync_status ?? 'Processing'),
          barrel_count: String(sLogs[0].barrel_count ?? '10'),
          processing_type: String(sLogs[0].processing_type ?? 'Vinegar'),
          data_source_url: String(sLogs[0].data_source_url ?? ''),
          created_at: sLogs[0].created_at ?? null,
        });
      } else {
        setBatchData(null);
      }

      // 3. Fetch independent external lab report
      const { data: labData, error: labErr } = await supabase
        .from('lab_reports')
        .select('*')
        .order('test_id', { ascending: false })
        .limit(1);

      if (labErr) throw labErr;
      setLabReport(labData && labData.length > 0 ? labData[0] : null);

      setLastRefreshed(new Date());
    } catch (err: any) {
      console.error('[LabAssistant] fetch error:', err);
      setFetchError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // ── real-time subscriptions ───────────────────────────────────────────────
  useEffect(() => {
    fetchData();

    const barrelSub = supabase
      .channel('live-barrel-change')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'barrel_logs' }, () => fetchData())
      .subscribe();

    const batchSub = supabase
      .channel('live-batch-change')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'batch_sync_logs' }, () => fetchData())
      .subscribe();

    const labSub = supabase
      .channel('live-lab-change')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'lab_reports' }, () => fetchData())
      .subscribe();

    return () => {
      supabase.removeChannel(barrelSub);
      supabase.removeChannel(batchSub);
      supabase.removeChannel(labSub);
    };
  }, [fetchData]);

  // ── admin auth ────────────────────────────────────────────────────────────
  const verifyAdmin = () => {
    if (adminKey === 'admin@smaf') {
      setShowAdminPortal(true);
      setIsOpen(false);
      setShowLogin(false);
      setKeyError(false);
      setAdminKey('');
    } else {
      setKeyError(true);
    }
  };

  // ── derived variables ──────────────────────────────────────────────────────
  const barrelAgo = timeSince(barrelData?.created_at);
  const batchAgo  = timeSince(batchData?.created_at);
  const labAgo    = timeSince(labReport?.created_at ?? labReport?.inserted_at ?? labReport?.logged_at);

  return (
    <>
      {/* ── FLOATING BUTTON ─────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end select-none">
        <style>{`
          @keyframes border-spin { 100% { transform: rotate(360deg); } }
          .animate-border-spin  { animation: border-spin 2.5s linear infinite; }
        `}</style>

        <div className="relative flex flex-col items-end pt-5">
          <div className="absolute -inset-3 bg-emerald-500 rounded-full blur-2xl opacity-50 animate-pulse pointer-events-none" />

          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 bg-rose-600 text-[9px] font-black tracking-widest text-white px-3 py-1 rounded-full border border-rose-400 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(225,29,72,0.4)] uppercase z-30 whitespace-nowrap pointer-events-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-95" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            LIVE FEED
          </div>

          <div className="relative w-[185px] h-[72px] rounded-full overflow-hidden p-[4px] flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.5)] z-10">
            <div className="absolute w-[250%] h-[250%] animate-border-spin -z-10"
              style={{ background: 'conic-gradient(from 0deg, transparent 40%, #10b981 65%, #34d399 85%, #059669 95%, transparent 100%)' }}
            />
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-full bg-slate-950 hover:bg-slate-900 text-white rounded-full transition-colors duration-300 flex items-center justify-center gap-3 focus:outline-none px-4 pt-1 cursor-pointer"
            >
              <FlaskConical className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)] shrink-0" size={23} strokeWidth={2.5} />
              <span className="font-mono text-[12px] font-black uppercase tracking-[0.22em] text-emerald-400 whitespace-nowrap">LAB DATA</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── DRAWER ──────────────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex justify-end">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setIsOpen(false)} />

          <div className="w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 border-l-2 border-emerald-500/30 h-full p-6 relative z-10 flex flex-col shadow-2xl text-white overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <Activity className="text-emerald-400 animate-pulse" size={20} />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-100">Lab Analysis Terminal</h3>
                  <p className="text-[9px] font-mono text-emerald-400 tracking-widest uppercase mt-0.5">● Status: Connected Live</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={fetchData}
                  title="Refresh"
                  disabled={loading}
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
                </button>

                <button
                  onClick={() => { setShowLogin(v => !v); setKeyError(false); setAdminKey(''); }}
                  title="Admin authorization gate"
                  className="p-2 px-3 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 rounded-xl transition-colors cursor-pointer flex items-center gap-2 text-[11px] font-mono shadow-[0_0_15px_rgba(16,185,129,0.2)] active:scale-95"
                >
                  <LogIn size={15} className="shrink-0" />
                  <span className="font-bold">ADMIN PORTAL</span>
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Admin login panel */}
            {showLogin && (
              <div className="mb-5 bg-slate-950 border border-emerald-500/30 p-4 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase mb-2">Admin Authorization</p>
                <div className="flex gap-2">
                  <input
                    type="password"
                    placeholder="Enter passkey"
                    value={adminKey}
                    autoFocus
                    onChange={e => { setAdminKey(e.target.value); setKeyError(false); }}
                    onKeyDown={e => e.key === 'Enter' && verifyAdmin()}
                    className="flex-1 bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs font-mono text-white outline-none transition-colors"
                  />
                  <button
                    onClick={verifyAdmin}
                    className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-xs font-mono font-bold text-white uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    Enter
                  </button>
                </div>
                {keyError && <p className="text-[10px] font-mono text-rose-400 mt-1.5">✕ Invalid passkey. Access denied.</p>}
              </div>
            )}

            {/* Fetch error banner */}
            {fetchError && (
              <div className="mb-5 bg-rose-950/20 border border-rose-500/30 p-3 rounded-xl flex items-center gap-2 text-[11px] font-mono text-rose-300">
                <AlertTriangle size={13} className="shrink-0" />
                {fetchError}
              </div>
            )}

            {/* Last refreshed */}
            {lastRefreshed && (
              <p className="text-[9px] font-mono text-slate-500 mb-4 flex items-center gap-1">
                <Clock size={9} />
                Last synced {lastRefreshed.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
              </p>
            )}

            {/* SECTION 1: INTERNAL PRODUCTION ANALYSIS (SINGLE LOT DATA) */}
            <section className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Internal Production Analysis</h4>
                {barrelAgo && (
                  <span className="text-[9px] font-mono text-emerald-500 flex items-center gap-1">
                    <Clock size={9} /> {barrelAgo}
                  </span>
                )}
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-3 shadow-inner relative">
                {!barrelData ? (
                  <div className="text-center py-3">
                    <p className="text-slate-500 font-mono text-[11px]">No production logs recorded yet.</p>
                  </div>
                ) : (
                  <>
                    <Row label="Current Batch No"     value={fmt(barrelData.batch_code)}            accent="white"   />
                    <Row label="Equilibrium pH"        value={fmt(barrelData.ph_value)} limit="<2.5" accent="white" />
                    <Row label="Acidity Index"         value={fmt(barrelData.acidity,        '%')} limit="8.1 %" />
                    <Row label="Salt Index (NaCl)"     value={fmt(barrelData.salt_density,   '%')} limit="16-22%"   />
                    <Row label="Ca⁺ Parameter"         value={fmt(barrelData.calcium_index,  ' ppm')} limit="min 200" />
                    <Row label="SO₂ Parameter"         value={fmt(barrelData.so2_stabilizer, ' ppm')} limit="max 100" />

                    {barrelData.created_at && (
                      <p className="text-[9px] font-mono text-slate-500 pt-2 flex items-center gap-1 border-t border-slate-800">
                        <Clock size={9} /> Logged: {fmtDate(barrelData.created_at)}
                      </p>
                    )}
                  </>
                )}
              </div>
            </section>

            {/* CONSOLIDATED SECTION 2: CURRENT 10 BARREL REPORT (BULK METADATA + SPREADSHEET BUTTON) */}
            <section className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Current 10 Barrel Report</h4>
                {batchAgo && (
                  <span className="text-[9px] font-mono text-emerald-500 flex items-center gap-1">
                    <Clock size={9} /> {batchAgo}
                  </span>
                )}
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-4 shadow-inner relative">
                {!batchData ? (
                  <div className="text-center py-3">
                    <p className="text-slate-500 font-mono text-[11px]">No multi-barrel batches synced.</p>
                  </div>
                ) : (
                  <>
                    {/* Bulk Data Attributes */}
                    <div className="space-y-3">
                      <Row label="Current Batch No"    value={fmt(batchData.production_lot)} accent="white" />
                      <Row label="Harvest Season"      value={fmt(batchData.harvest_season)} accent="white" />
                      <Row label="Total Load Size"     value={fmt(batchData.barrel_count, ' Barrels')} />
                      <Row label="Processing Medium"   value={fmt(batchData.processing_type)} accent="emerald" />
                    </div>

                    {/* Integrated Excel spreadsheet download button directly inside the layout wrapper */}
                    {batchData.data_source_url && (
                      <div className="pt-2 border-t border-slate-800">
                        <a
                          href={batchData.data_source_url}
                          target="_blank" rel="noreferrer"
                          className="flex items-center justify-center gap-3 w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 py-3 rounded-xl text-xs font-mono font-bold text-emerald-400 transition-all active:scale-[0.98]"
                        >
                          <FileSpreadsheet size={15} /> Open Verified Report <ExternalLink size={12} className="opacity-70" />
                        </a>
                      </div>
                    )}
                    
                    {batchData.created_at && (
                      <p className="text-[9px] font-mono text-slate-500 pt-1 flex items-center gap-1 text-[9px]">
                        <Clock size={9} /> Synchronized: {fmtDate(batchData.created_at)}
                      </p>
                    )}
                  </>
                )}
              </div>
            </section>

            {/* SECTION 3: EXTERNAL LAB QUALITY ANALYSIS */}
            <section className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">External Lab Quality Analysis</h4>
                {labAgo && (
                  <span className="text-[9px] font-mono text-emerald-500 flex items-center gap-1">
                    <Clock size={9} /> {labAgo}
                  </span>
                )}
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-2.5 shadow-inner text-xs">
                {!labReport ? (
                  <div className="text-center py-3">
                    <p className="text-slate-500 font-mono text-[11px]">No external analysis files verified.</p>
                  </div>
                ) : (
                  <>
                    <Row label="Analysis Title"       value={labReport.report_title}      accent="white"   />
                    <Row label="Certificate ID"       value={labReport.report_reference} mono              />
                    <Row label="Testing Vector Class" value={labReport.test_category}     accent="emerald" upper />

                    {labReport.created_at && (
                      <p className="text-[9px] font-mono text-slate-500 pt-2 flex items-center gap-1 border-t border-slate-800">
                        <Clock size={9} /> Issued: {fmtDate(labReport.created_at)}
                      </p>
                    )}

                    {labReport.document_url && (
                      <a
                        href={labReport.document_url}
                        target="_blank" rel="noreferrer"
                        className="mt-1 flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
                      >
                        <FileText size={13} /> Open Official Lab Report <ExternalLink size={11} />
                      </a>
                    )}
                  </>
                )}
              </div>
            </section>

            {/* Footer */}
            <div className="mt-auto border-t border-slate-800 pt-5">
              <p className="text-center text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-3">
                Sri Mookambika Agro Foods Quality Hub © 2026
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Admin Portal Gateway */}
      {showAdminPortal && (
        <div className="fixed inset-0 z-[200000] bg-slate-950 overflow-y-auto">
          <Admin onClose={() => setShowAdminPortal(false)} />
        </div>
      )}
    </>
  );
};

// ─── Row helper ───────────────────────────────────────────────────────────────

const Row = ({
  label, value, accent, mono, upper, limit
}: {
  label: string;
  value: string;
  accent?: 'white' | 'emerald';
  mono?: boolean;
  upper?: boolean;
  limit?: string;
}) => (
  <div className="flex items-center text-xs font-sans tracking-wide py-0.5">
    <span className="text-slate-400 min-w-[140px] text-left">{label}:</span>
    <div className="flex-1 flex justify-between items-center pl-2">
      <span className={[
        mono  ? 'font-mono'  : 'font-semibold',
        upper ? 'uppercase text-[10px] tracking-wider' : '',
        accent === 'emerald' ? 'font-mono font-bold text-emerald-400'
          : accent === 'white' ? 'font-mono font-bold text-white'
          : 'text-slate-200',
      ].filter(Boolean).join(' ')}>
        {value}
      </span>
      {limit && (
        <span className="font-mono text-[10px] text-slate-500 text-right min-w-[65px]">
          ({limit})
        </span>
      )}
    </div>
  </div>
);

export default LabAssistant;