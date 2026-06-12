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

interface BatchMetrics {
  batch_code: string;
  ph_value: string;
  acidity: string;
  salt_density: string;
  calcium_index: string;
  so2_stabilizer: string;
  excel_pdf_url: string;
  created_at: string | null;
}

const rowToBatch = (row: any): BatchMetrics => ({
  batch_code:     String(row.batch_code     ?? ''),
  ph_value:       String(row.ph_value       ?? ''),
  acidity:        String(row.acidity        ?? ''),
  salt_density:   String(row.salt_density   ?? ''),
  calcium_index:  String(row.calcium_index  ?? ''),
  so2_stabilizer: String(row.so2_stabilizer ?? ''),
  excel_pdf_url:  String(row.excel_pdf_url  ?? ''),
  // try every common timestamp column name
  created_at: row.created_at ?? row.inserted_at ?? row.logged_at ?? row.timestamp ?? null,
});

// ─── component ───────────────────────────────────────────────────────────────

const LabAssistant = () => {
  const [isOpen,          setIsOpen]          = useState(false);
  const [showAdminPortal, setShowAdminPortal] = useState(false);
  const [showLogin,       setShowLogin]       = useState(false);
  const [adminKey,        setAdminKey]        = useState('');
  const [keyError,        setKeyError]        = useState(false);

  const [loading,       setLoading]       = useState(false);
  const [fetchError,    setFetchError]    = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);

  const [batch,     setBatch]     = useState<BatchMetrics | null>(null);
  const [labReport, setLabReport] = useState<any>(null);

  // ── fetch ─────────────────────────────────────────────────────────────────
const fetchData = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    try {
      // 1. Fetch latest barrel log - Ordering by 'batch_code' instead of 'id'
      // Since your batch codes seem sequential (M06, M11, M8888), 
      // sorting by batch_code DESC is a valid way to get the latest.
      const { data: barrelData, error: barrelErr } = await supabase
        .from('barrel_logs')
        .select('*')
        .order('batch_code', { ascending: false }) 
        .limit(1);

      if (barrelErr) throw barrelErr;
      
      if (barrelData && barrelData.length > 0) {
        setBatch(barrelData[0]);
      } else {
        setBatch(null);
      }

      // 2. Fetch Lab Report - Using 'test_id' (assuming this column exists as per your code)
      const { data: labData, error: labErr } = await supabase
        .from('lab_reports')
        .select('*')
        .order('test_id', { ascending: false })
        .limit(1);

      if (labErr) throw labErr;
      if (labData && labData.length > 0) {
        setLabReport(labData[0]);
      } else {
        setLabReport(null);
      }

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
      .channel('live-barrel-feed')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'barrel_logs' }, (payload) => {
        if (payload.new && Object.keys(payload.new).length > 0) {
          console.log('[LabAssistant] real-time barrel update:', payload.new);
          setBatch(rowToBatch(payload.new));
          setLastRefreshed(new Date());
        }
      })
      .subscribe();

    const labSub = supabase
      .channel('live-lab-feed')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'lab_reports' }, (payload) => {
        if (payload.new && Object.keys(payload.new).length > 0) {
          console.log('[LabAssistant] real-time lab update:', payload.new);
          setLabReport(payload.new);
          setLastRefreshed(new Date());
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(barrelSub);
      supabase.removeChannel(labSub);
    };
  }, [fetchData]);

  // ── admin auth ────────────────────────────────────────────────────────────
  const verifyAdmin = () => {
    if (adminKey === 'smaf2026') {
      setShowAdminPortal(true);
      setIsOpen(false);
      setShowLogin(false);
      setKeyError(false);
      setAdminKey('');
    } else {
      setKeyError(true);
    }
  };

  // ── derived ───────────────────────────────────────────────────────────────
  // A row is "real data" if ANY numeric field came back — even batch_code alone counts
  const hasBatchData = batch !== null && (
    batch.batch_code !== '' ||
    batch.ph_value   !== '' ||
    batch.acidity    !== ''
  );

  const batchTimestamp = fmtDate(batch?.created_at);
  const batchAgo       = timeSince(batch?.created_at);
  const labTimestamp   = fmtDate(labReport?.created_at ?? labReport?.inserted_at ?? labReport?.logged_at);
  const labAgo         = timeSince(labReport?.created_at ?? labReport?.inserted_at ?? labReport?.logged_at);

  // ─────────────────────────────────────────────────────────────────────────
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

              <div className="flex items-center gap-1">
                {/* Refresh */}
                <button
                  onClick={fetchData}
                  title="Refresh"
                  disabled={loading}
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
                </button>

                {/* Admin */}
                <button
                  onClick={() => { setShowLogin(v => !v); setKeyError(false); setAdminKey(''); }}
                  title="Admin login"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-[11px] font-mono"
                >
                  <LogIn size={15} />
                  <span className="hidden sm:inline">Admin</span>
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

            {/* ── Internal Production Runs ── */}
            <section className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Internal Production Runs</h4>
                {batchAgo && (
                  <span className="text-[9px] font-mono text-emerald-500 flex items-center gap-1">
                    <Clock size={9} /> {batchAgo}
                  </span>
                )}
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-3 shadow-inner">
                {loading && !hasBatchData ? (
                  <p className="text-slate-500 font-mono text-[11px] text-center py-2 animate-pulse">Fetching latest batch data…</p>
                ) : !hasBatchData ? (
                  <div className="text-center py-3 space-y-1">
                    <p className="text-slate-400 font-mono text-[11px]">No batch data found.</p>
                    <p className="text-slate-600 font-mono text-[9px]">Check Supabase table: barrel_logs</p>
                  </div>
                ) : (
                  <>
                    <Row label="Current Lot Reference"  value={fmt(batch!.batch_code)}                accent="white"   />
                    <Row label="Equilibrium pH"          value={fmt(batch!.ph_value)}                  accent="emerald" />
                    <Row label="Acidity Index Titration" value={fmt(batch!.acidity,        '%')}                        />
                    <Row label="NaCl Salt Mass Density"  value={fmt(batch!.salt_density,   '%')}                        />
                    <Row label="Calcium Parameter"       value={fmt(batch!.calcium_index,  ' ppm')}                     />
                    <Row label="Sulfur Dioxide (SO₂)"   value={fmt(batch!.so2_stabilizer, ' ppm')}                     />

                    {batchTimestamp && (
                      <p className="text-[9px] font-mono text-slate-500 pt-2 flex items-center gap-1 border-t border-slate-800">
                        <Clock size={9} /> Logged: {batchTimestamp}
                      </p>
                    )}

                    {batch!.excel_pdf_url && (
                      <a
                        href={batch!.excel_pdf_url}
                        target="_blank" rel="noreferrer"
                        className="mt-1 flex items-center justify-center gap-2 w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 py-2.5 rounded-xl text-xs font-mono font-bold text-emerald-400 transition-all"
                      >
                        <FileSpreadsheet size={13} /> Open Verified Spreadsheet <ExternalLink size={11} />
                      </a>
                    )}
                  </>
                )}
              </div>
            </section>

            {/* ── Independent Lab Certifications ── */}
            <section className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Independent Lab Certifications</h4>
                {labAgo && (
                  <span className="text-[9px] font-mono text-emerald-500 flex items-center gap-1">
                    <Clock size={9} /> {labAgo}
                  </span>
                )}
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-2.5 shadow-inner text-xs">
                {loading && !labReport ? (
                  <p className="text-slate-500 font-mono text-[11px] text-center py-2 animate-pulse">Fetching lab certificates…</p>
                ) : !labReport ? (
                  <div className="text-center py-3 space-y-1">
                    <p className="text-slate-400 font-mono text-[11px]">No certificates found.</p>
                    <p className="text-slate-600 font-mono text-[9px]">Check Supabase table: lab_reports</p>
                  </div>
                ) : (
                  <>
                    <Row label="Analysis Title"       value={labReport.report_title}     accent="white"   />
                    <Row label="Certificate ID"       value={labReport.report_reference} mono             />
                    <Row label="Testing Vector Class" value={labReport.test_category}    accent="emerald" upper />

                    {labTimestamp && (
                      <p className="text-[9px] font-mono text-slate-500 pt-2 flex items-center gap-1 border-t border-slate-800">
                        <Clock size={9} /> Issued: {labTimestamp}
                      </p>
                    )}

                    {labReport.document_url && (
                      <a
                        href={labReport.document_url}
                        target="_blank" rel="noreferrer"
                        className="mt-1 flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
                      >
                        <FileText size={13} /> Open Official Intertek PDF <ExternalLink size={11} />
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

      {/* Admin Portal */}
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
  label, value, accent, mono, upper,
}: {
  label: string; value: string;
  accent?: 'white' | 'emerald';
  mono?: boolean; upper?: boolean;
}) => (
  <div className="flex justify-between items-center text-xs font-sans tracking-wide">
    <span className="text-slate-400">{label}:</span>
    <span className={[
      mono  ? 'font-mono'  : 'font-semibold',
      upper ? 'uppercase text-[10px] tracking-wider' : '',
      accent === 'emerald' ? 'font-mono font-bold text-emerald-400'
        : accent === 'white' ? 'font-mono font-bold text-white'
        : 'text-slate-200',
    ].filter(Boolean).join(' ')}>
      {value}
    </span>
  </div>
);

export default LabAssistant;