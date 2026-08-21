import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { ClipboardList, FileText, UploadCloud, CheckCircle, AlertCircle, ArrowLeft, Building2 } from 'lucide-react';

interface AdminProps {
  onClose: () => void;
}

const Admin = ({ onClose }: AdminProps) => {
  const [activeTab, setActiveTab] = useState<'batch' | 'barrel' | 'lab'>('batch');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  /* TAB 1: BATCH SYNC - (UPDATED OPTIONS & REMOVED ORIGIN) */
  const [batchForm, setBatchForm] = useState({
    production_lot: '',
    harvest_season: '2026-2027', // Updated Default
    barrel_count: 10,
    processing_type: 'Vinegar' // Updated Default Options
  });
  const [batchCsvFile, setBatchCsvFile] = useState<File | null>(null);

  /* TAB 2: SINGLE BARREL INPUT - (LEDGER FILE UPLOAD PERMANENTLY REMOVED) */
  const [barrelForm, setBarrelForm] = useState({
    batch_code: '',
    ph_value: '',
    acidity: '',
    salt_density: '',
    calcium_index: '',
    so2_stabilizer: ''
  });

  /* TAB 3: LAB REPORTS - (UNTOUCHED) */
  const [labForm, setLabForm] = useState({
    test_id: new Date().toISOString().split('T')[0],
    report_title: '',
    report_reference: '',
    test_category: 'Heavy Metals'
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleBarrelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBarrelForm({ ...barrelForm, [e.target.name]: e.target.value });
  };

  const handleBatchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBatchForm({ ...batchForm, [e.target.name]: e.target.value });
  };

  const handleLabChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLabForm({ ...labForm, [e.target.name]: e.target.value });
  };

  /* SINGLE BARREL SUBMIT */
  const handleBarrelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setStatusMessage(null);

    try {
      const { error: dbError } = await supabase.from('barrel_logs').insert([
        {
          batch_code: barrelForm.batch_code,
          ph_value: parseFloat(barrelForm.ph_value),
          acidity: parseFloat(barrelForm.acidity),
          salt_density: parseFloat(barrelForm.salt_density),
          calcium_index: parseInt(barrelForm.calcium_index),
          so2_stabilizer: parseFloat(barrelForm.so2_stabilizer)
        }
      ]);

      if (dbError) throw dbError;

      setStatusMessage({ type: 'success', text: `Production lot ${barrelForm.batch_code} saved successfully.` });
      setBarrelForm({ ...barrelForm, ph_value: '', acidity: '', salt_density: '', calcium_index: '', so2_stabilizer: '' });
    } catch (err: any) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Upload failed: ' + err.message });
    } finally {
      setIsUploading(false);
    }
  };

  /* BATCH SUBMIT - (PAYLOAD SYNCED TO THE NEW CLEAN SCHEMA) */
  const handleBatchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!batchCsvFile) {
      setStatusMessage({ type: 'error', text: 'Batch data file (CSV/Excel) required.' });
      return;
    }
    setIsUploading(true);
    setStatusMessage(null);
    try {
      /* File upload logic to 'lab-certificates' bucket */
      const fileExtension = batchCsvFile.name.split('.').pop();
      const uniqueFileName = `batch_${batchForm.production_lot.replace('#', '')}_${Date.now()}.${fileExtension}`;
      const { error: uploadError } = await supabase.storage
        .from('lab-certificates')
        .upload(uniqueFileName, batchCsvFile);
      if (uploadError) throw uploadError;
      const { data: urlData } = supabase.storage
        .from('lab-certificates')
        .getPublicUrl(uniqueFileName);

      /* Record keeping in your new 'batch_sync_logs' table matching exact schema layout */
      const { error: dbError } = await supabase.from('batch_sync_logs').insert([{
        production_lot: batchForm.production_lot,
        barrel_count: batchForm.barrel_count,
        sync_status: 'Processing',
        data_source_url: urlData.publicUrl
      }]);
      if (dbError) throw dbError;

      setStatusMessage({ type: 'success', text: `Batch lot ${batchForm.production_lot} (10 barrels) initialized. Syncing data...` });
      setBatchForm({
        production_lot: '',
        harvest_season: '2026-2027',
        barrel_count: 10,
        processing_type: 'Vinegar'
      });
      setBatchCsvFile(null);
    } catch (err: any) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Batch initialization failed: ' + err.message });
    } finally {
      setIsUploading(false);
    }
  };

  /* LAB SUBMIT */
  const handleLabSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setStatusMessage({ type: 'error', text: 'Attachment required.' });
      return;
    }

    setIsUploading(true);
    setStatusMessage(null);

    try {
      const fileExtension = selectedFile.name.split('.').pop();
      const uniqueFileName = `${labForm.report_reference || Date.now()}_${Date.now()}.${fileExtension}`;

      const { error: uploadError } = await supabase.storage
        .from('lab-certificates')
        .upload(uniqueFileName, selectedFile);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('lab-certificates')
        .getPublicUrl(uniqueFileName);

      const { error: dbError } = await supabase.from('lab_reports').insert([
        {
          test_id: labForm.test_id,
          report_title: labForm.report_title,
          report_reference: labForm.report_reference,
          test_category: labForm.test_category,
          document_url: urlData.publicUrl
        }
      ]);

      if (dbError) throw dbError;

      setStatusMessage({ type: 'success', text: 'Lab certificate published successfully.' });
      setLabForm({ test_id: new Date().toISOString().split('T')[0], report_title: '', report_reference: '', test_category: 'Heavy Metals' });
      setSelectedFile(null);
    } catch (err: any) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Upload failed: ' + err.message });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-4 font-sans">

      <div className="w-full max-w-xl my-6 bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl text-emerald-400">
            <Building2 size={24} />
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-white tracking-wide">SMAF Admin Portal</h2>
            <p className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase">Secure Management Workspace</p>
          </div>
        </div>
        <button onClick={onClose} className="bg-slate-900 border border-slate-700 text-slate-400 px-4 py-2 rounded-xl text-xs font-mono uppercase cursor-pointer hover:text-white">
          <ArrowLeft size={14} />
        </button>
      </div>

      <div className="w-full max-w-xl grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono font-bold uppercase mb-6">
        <button onClick={() => setActiveTab('batch')} className={`py-3 rounded-lg ${activeTab === 'batch' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>Batch Sync</button>
        <button onClick={() => setActiveTab('barrel')} className={`py-3 rounded-lg ${activeTab === 'barrel' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>Production Logs</button>
        <button onClick={() => setActiveTab('lab')} className={`py-3 rounded-lg ${activeTab === 'lab' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>Lab Reports</button>
      </div>

      {statusMessage && (
        <div className={`w-full max-w-xl p-4 mb-6 rounded-xl flex items-center gap-3 border text-xs ${statusMessage.type === 'success' ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-rose-950/20 border-rose-500/30 text-rose-300'}`}>
          {statusMessage.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {statusMessage.text}
        </div>
      )}

      <div className="w-full max-w-xl bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-2xl">
        {activeTab === 'batch' ? (
          <form onSubmit={handleBatchSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Lot / Batch Code</label>
              <input type="text" name="production_lot" value={batchForm.production_lot} onChange={handleBatchChange} placeholder="e.g. #2026-MULTI-10" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Harvest Season</label>
                <input type="text" name="harvest_season" value={batchForm.harvest_season} onChange={handleBatchChange} placeholder="2026-2027" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Barrel Count</label>
                <input type="number" name="barrel_count" value={batchForm.barrel_count} onChange={handleBatchChange} placeholder="10" min="10" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
              </div>
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Processing Type</label>
                <select name="processing_type" value={batchForm.processing_type} onChange={handleBatchChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition h-[45px]">
                  <option value="Vinegar">Vinegar</option>
                  <option value="Acetic Acid">Acetic Acid</option>
                  <option value="Salt Brine">Salt Brine</option>
                </select>
              </div>
            </div>

            <label className="w-full h-32 bg-slate-950 border-2 border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/50">
              <input type="file" accept=".csv, .xlsx, .xls" onChange={(e) => { if (e.target.files) setBatchCsvFile(e.target.files[0]); }} className="hidden" />
              <UploadCloud className="text-slate-600 mb-2" />
              <span className="text-[10px] text-slate-400">{batchCsvFile ? batchCsvFile.name : 'Upload Batch Ledger (CSV / Excel)'}</span>
              <span className="text-[9px] text-slate-600 font-mono mt-1">Expected format: ph, acidity, density, calcium, so2 per barrel</span>
            </label>
            <button disabled={isUploading} className="w-full bg-emerald-600 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition">
              {isUploading ? 'Initializing...' : 'Initialize & Sync Batch'}
            </button>
          </form>
        ) : activeTab === 'barrel' ? (
          <form onSubmit={handleBarrelSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Batch Code</label>
              <input type="text" name="batch_code" value={barrelForm.batch_code} onChange={handleBarrelChange} placeholder="e.g. #2026-M07" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">pH Level</label>
                <input type="number" step="0.01" name="ph_value" value={barrelForm.ph_value} onChange={handleBarrelChange} placeholder="0.00" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
              </div>
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Acidity (%)</label>
                <input type="number" step="0.001" name="acidity" value={barrelForm.acidity} onChange={handleBarrelChange} placeholder="0.000" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Salt Density (%)</label>
                <input type="number" step="0.01" name="salt_density" value={barrelForm.salt_density} onChange={handleBarrelChange} placeholder="0.00" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
              </div>
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Calcium (ppm)</label>
                <input type="number" name="calcium_index" value={barrelForm.calcium_index} onChange={handleBarrelChange} placeholder="0" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">SO2 Index (ppm)</label>
              <input type="number" step="0.1" name="so2_stabilizer" value={barrelForm.so2_stabilizer} onChange={handleBarrelChange} placeholder="0.0" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
            </div>

            <button disabled={isUploading} className="w-full bg-emerald-600 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition">
              {isUploading ? 'Syncing...' : 'Publish Lot'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleLabSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Report Date</label>
                <input type="text" name="test_id" value={labForm.test_id} onChange={handleLabChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
              </div>
              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Category</label>
                <select name="test_category" value={labForm.test_category} onChange={handleLabChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition h-[45px]">
                  <option>Heavy Metals</option>
                  <option>Microbiological</option>
                  <option>Media</option>
                  <option>Product</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Report Title</label>
              <input type="text" name="report_title" value={labForm.report_title} onChange={handleLabChange} placeholder="Enter report name" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
            </div>

            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Reference ID</label>
              <input type="text" name="report_reference" value={labForm.report_reference} onChange={handleLabChange} placeholder="Enter unique ID" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:border-emerald-500 outline-none transition" required />
            </div>

            <label className="w-full h-32 bg-slate-950 border-2 border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/50">
              <input type="file" accept="application/pdf" onChange={(e) => { if (e.target.files) setSelectedFile(e.target.files[0]); }} className="hidden" />
              <UploadCloud className="text-slate-600 mb-2" />
              <span className="text-[10px] text-slate-400">{selectedFile ? selectedFile.name : 'Upload PDF Certificate'}</span>
            </label>

            <button disabled={isUploading} className="w-full bg-emerald-600 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition">
              {isUploading ? 'Publishing...' : 'Publish Certificate'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Admin;