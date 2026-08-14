import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Mail, MapPin, Send, Briefcase, Phone, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const corporateOfficeMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3847.514170008911!2d75.09620877512096!3d15.348615385231282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIwJzU1LjAiTiA3NcKwMDUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1781016958073!5m2!1sen!2sin";
  const factoryMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.6402910046677!2d75.68077153634091!3d14.58308131134496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbd50004bb6705%3A0x7ebf1080eaf93693!2sSri%20Mookambika%20Agro%20Foods%2C!5e0!3m2!1sen!2sin!4v1781016911924!5m2!1sen!2sin";

  const getMailLink = () => {
    const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      return "mailto:info@smafoodsindia.com?subject=Export%20Inquiry%20-%20Sri%20Mookambika%20Agro%20Foods";
    }
    return "https://mail.google.com/mail/?view=cm&fs=1&to=info@smafoodsindia.com&su=Export%20Inquiry%20-%20Sri%20Mookambika%20Agro%20Foods";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('contacts').insert([{
        full_name: formData.fullName,
        email: formData.email,
        subject: formData.inquiryType,
        message: formData.message
      }]);
      if (error) throw error;
      setIsSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#FCFBF7] border-t border-slate-100 text-left">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.08)] border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* LEFT: CONTACT INFO & MAPS */}
            <div className="lg:w-5/12 p-10 md:p-14 bg-emerald-950 text-white flex flex-col justify-between space-y-10 border-b lg:border-b-0 lg:border-r border-emerald-900/60">
              <div>
                <span className="text-emerald-400 font-mono font-bold uppercase tracking-widest text-[11px] mb-3 flex items-center gap-2">
                  <Sparkles size={13} className="text-emerald-400" />
                  Direct Procurement Desk
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-tight">
                  Connect with Sri Mookambika Agro Foods
                </h2>

                <div className="space-y-10">
                  {/* Corporate Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-900/60 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <Briefcase className="text-emerald-400" size={18} />
                    </div>
                    <div className="w-full">
                      <p className="text-emerald-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-1">
                        Corporate Office
                      </p>
                      <p className="text-xs leading-relaxed text-emerald-100/80 font-light">
                        <strong>SRI MOOKAMBIKA AGRO FOODS LLP</strong><br />
                        167, Pragati 7th Cross, Silver Town, Gokul Road,<br />
                        Hubli, Udyamnagar, Hubballi – 580030, Karnataka, India
                      </p>
                      <div className="w-full h-36 rounded-2xl overflow-hidden mt-3 border border-emerald-800/60 shadow-inner">
                        <iframe src={corporateOfficeMapsEmbedSrc} className="w-full h-full border-0" title="Corporate Office Location" />
                      </div>
                    </div>
                  </div>

                  {/* Processing Unit */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-900/60 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <MapPin className="text-emerald-400" size={18} />
                    </div>
                    <div className="w-full">
                      <p className="text-emerald-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-1">
                        Processing Hub & Brining Plant
                      </p>
                      <p className="text-xs leading-relaxed text-emerald-100/80 font-light">
                        R S No. 64/1, 64/2 Hunasekatte Road,<br />
                        Kammadod Village, Ranebennur Taluk,<br />
                        Haveri District, Karnataka – 581145
                      </p>
                      <p className="text-[10px] text-emerald-400/70 font-mono mt-1">GSTIN: 29AFDFS4584H1ZI</p>
                      <div className="w-full h-36 rounded-2xl overflow-hidden mt-3 border border-emerald-800/60 shadow-inner">
                        <iframe src={factoryMapsEmbedSrc} className="w-full h-full border-0" title="Processing Unit Location" />
                      </div>
                    </div>
                  </div>

                  {/* Direct Partnership & Email Lines */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-900/60 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <Phone className="text-emerald-400" size={18} />
                    </div>
                    <div className="space-y-3 w-full">
                      <p className="text-emerald-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-1">
                        Direct Management Lines
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border-b border-emerald-900/80 pb-2">
                        <span className="text-slate-300 font-light">Girish Manjunath (FSTL / QA)</span>
                        <a href="tel:+919845320088" className="text-emerald-300 font-mono font-semibold hover:text-white transition">+91 98453 20088</a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border-b border-emerald-900/80 pb-2">
                        <span className="text-slate-300 font-light">Prakash Nayak (HR / Regulatory)</span>
                        <a href="tel:+919686671145" className="text-emerald-300 font-mono font-semibold hover:text-white transition">+91 96866 71145</a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs pt-1">
                        <span className="text-slate-300 font-light flex items-center gap-1.5"><Mail size={12} className="text-emerald-400" /> Correspondence</span>
                        <a 
                          href={getMailLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-300 font-mono font-semibold hover:text-white transition"
                        >
                          info@smafoodsindia.com
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:w-7/12 p-10 md:p-14 flex flex-col justify-center">
              <div className="max-w-xl mx-auto w-full">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 border border-emerald-100">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3">Inquiry Logged Successfully</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
                      Thank you for contacting Sri Mookambika Agro Foods LLP. Your specification brief has been routed directly to our trade desk. Our executive team will respond within 24–48 business hours.
                    </p>
                    <button 
                      onClick={() => { 
                        setIsSubmitted(false); 
                        setFormData({ fullName: '', email: '', inquiryType: '', message: '' }); 
                      }}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-xl transition"
                    >
                      Submit Another Trade Brief
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block mb-2">
                        B2B Procurement Portal
                      </span>
                      <h3 className="text-3xl font-serif text-slate-900">Initiate Commercial Inquiry</h3>
                      <p className="text-slate-500 text-xs md:text-sm font-light mt-1">
                        Submit your specifications, container volume targets, or distribution inquiries below.
                      </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input 
                          label="Full Name & Title" 
                          placeholder="e.g., Alexander Weber" 
                          value={formData.fullName}
                          onChange={(v: string) => setFormData({...formData, fullName: v})} 
                        />
                        <Input 
                          label="Corporate Work Email" 
                          type="email" 
                          placeholder="e.g., a.weber@eurofoods-import.com" 
                          value={formData.email}
                          onChange={(v: string) => setFormData({...formData, email: v})} 
                        />
                      </div>

                      <Select 
                        label="Commercial Inquiry Category" 
                        value={formData.inquiryType}
                        options={[
                          'Bulk Industrial Gherkins (240L / 260L HDPE Barrels)',
                          'FOB / CIF Marine Freight & Brine Specifications',
                          'Private Label & Custom Recipe Packing',
                          'Prakritva Retail Brand Distribution',
                          'Supplier / Agricultural Partnership',
                          'General Corporate Inquiry'
                        ]}
                        onChange={(v: string) => setFormData({...formData, inquiryType: v})} 
                      />

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">
                          Procurement Brief / Specifications
                        </label>
                        <textarea 
                          rows={5} 
                          required 
                          placeholder="Please outline your target volume (MT / FCL), cut requirements (Whole, Sliced, Diced), count calibration, or desired packing media (NV, AA, Fermented)..."
                          value={formData.message}
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none text-xs md:text-sm resize-none transition text-slate-800 placeholder:text-slate-400 font-light leading-relaxed"
                          onChange={(e) => setFormData({...formData, message: e.target.value})} 
                        />
                      </div>

                      <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-serif text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10 transition-all duration-300 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                      >
                        {loading ? 'Transmitting to Trade Desk...' : (
                          <>
                            <span>Transmit Commercial Inquiry</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-slate-400 font-mono text-center">
                        <ShieldCheck size={13} className="text-emerald-600" />
                        <span>All commercial data is encrypted and handled under confidentiality standards.</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

/* HELPERS */
const Input = ({ label, type = 'text', placeholder, value, onChange }: any) => (
  <div className="space-y-1.5 text-left">
    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
    <input 
      type={type} 
      required 
      placeholder={placeholder} 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none text-xs md:text-sm transition text-slate-800 placeholder:text-slate-400 font-light" 
    />
  </div>
);

const Select = ({ label, options, value, onChange }: any) => (
  <div className="space-y-1.5 text-left">
    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
    <select 
      required 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none text-xs md:text-sm transition text-slate-800 font-light cursor-pointer"
    >
      <option value="" disabled>Select inquiry classification...</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt} className="text-slate-800">{opt}</option>
      ))}
    </select>
  </div>
);

export default Contact;