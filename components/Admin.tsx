import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { ClipboardList, FileText, UploadCloud, CheckCircle, AlertCircle, ArrowLeft, Building2 } from 'lucide-react';

interface AdminProps {
  onClose: () => void;
}

const Admin = ({ onClose }: AdminProps) => {
  const [activeTab, setActiveTab] = useState<'barrel' | 'lab'>('barrel');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [barrelForm, setBarrelForm] = useState({
    batch_code: '',
    ph_value: '',
    acidity: '',
    salt_density: '',
    calcium_index: '',
    so2_stabilizer: ''
  });
  const [barrelFile, setBarrelFile] = useState<File | null>(null);

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

  const handleLabChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLabForm({ ...labForm, [e.target.name]: e.target.value });
  };

  const handleBarrelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setStatusMessage(null);

    try {
      let uploadedSpreadsetUrl = '';

      if (barrelFile) {
        const fileExt = barrelFile.name.split('.').pop();
        const uniquePath = `barrels_${barrelForm.batch_code.replace('#', '')}_${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('lab-certificates')
          .upload(uniquePath, barrelFile);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from('lab-certificates')
          .getPublicUrl(uniquePath);

        uploadedSpreadsetUrl = urlData.publicUrl;
      }

      const { error: dbError } = await supabase.from('barrel_logs').insert([
        {
          batch_code: barrelForm.batch_code,
          ph_value: parseFloat(barrelForm.ph_value),
          acidity: parseFloat(barrelForm.acidity),
          salt_density: parseFloat(barrelForm.salt_density),
          calcium_index: parseInt(barrelForm.calcium_index),
          so2_stabilizer: parseFloat(barrelForm.so2_stabilizer),
          excel_pdf_url: uploadedSpreadsetUrl
        }
      ]);

      if (dbError) throw dbError;

      setStatusMessage({ type: 'success', text: `Production lot ${barrelForm.batch_code} saved successfully.` });
      setBarrelForm({ batch_code: '', ph_value: '', acidity: '', salt_density: '', calcium_index: '', so2_stabilizer: '' });
      setBarrelFile(null);
    } catch (err: any) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Upload failed: ' + err.message });
    } finally {
      setIsUploading(false);
    }
  };

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

      <div className="w-full max-w-xl grid grid-cols-2 gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono font-bold uppercase mb-6">
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
        {activeTab === 'barrel' ? (
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

            <label className="w-full h-24 bg-slate-950 border-2 border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/50">
              <input type="file" accept=".xlsx,.xls,application/pdf" onChange={(e) => { if (e.target.files) setBarrelFile(e.target.files[0]); }} className="hidden" />
              <UploadCloud className="text-slate-600 mb-1" />
              <span className="text-[10px] text-slate-400">{barrelFile ? barrelFile.name : 'Upload Ledger File'}</span>
            </label>

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
                  <option>Water Quality</option>
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