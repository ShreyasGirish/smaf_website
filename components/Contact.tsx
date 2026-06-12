import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Mail, MapPin, Send, ShieldCheck, Briefcase, User, Globe, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const corporateOfficeMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3847.514170008911!2d75.09620877512096!3d15.348615385231282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIwJzU1LjAiTiA3NcKwMDUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1781016958073!5m2!1sen!2sin";
  const factoryMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.6402910046677!2d75.68077153634091!3d14.58308131134496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbd50004bb6705%3A0x7ebf1080eaf93693!2sSri%20Mookambika%20Agro%20Foods%2C!5e0!3m2!1sen!2sin!4v1781016911924!5m2!1sen!2sin";

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
      setIsSubmitted(true); // Trigger success UI
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FCFBF7] border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* LEFT: CONTACT INFO & MAPS - LEFT ENTIRELY UNTOUCHED */}
            <div className="lg:w-5/12 p-12 md:p-16 bg-emerald-950 text-white flex flex-col justify-between space-y-12">
              <div>
                <h2 className="text-4xl font-serif mb-14 leading-tight">Connect with <br />Shri Mookambika Agro Foods Pvt Ltd.</h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0"><Briefcase className="text-emerald-400" size={20} /></div>
                    <div className="w-full">
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-1.5">Corporate Office</p>
                      <p className="text-sm leading-relaxed text-emerald-100/80 font-light">
                        <strong>SRI MOOKAMBIKA AGRO FOODS LLP</strong><br />167, Pragati 7th Cross, Silver Town,<br />Gokul Road, Hubli, Udyamnagar,<br />Hubballi - 580030, Karnataka, India
                      </p>
                      <div className="w-full h-40 rounded-2xl overflow-hidden mt-4 border border-emerald-800/60 shadow-inner"><iframe src={corporateOfficeMapsEmbedSrc} className="w-full h-full border-0" title="Corporate Office Location" /></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0"><MapPin className="text-emerald-400" size={20} /></div>
                    <div className="w-full">
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-1.5">Processing Unit</p>
                      <p className="text-sm leading-relaxed text-emerald-100/80 font-light">R S No. 64/1, 64/2 Hunasekatte Road,<br />Kammadod Village, Ranebennur Taluk,<br />Haveri District, Karnataka – 581145</p>
                      <p className="text-[10px] text-emerald-400/60 font-mono mt-1">GSTIN: 29AFDFS4584H1ZI</p>
                      <div className="w-full h-40 rounded-2xl overflow-hidden mt-4 border border-emerald-800/60 shadow-inner"><iframe src={factoryMapsEmbedSrc} className="w-full h-full border-0" title="Processing Unit Location" /></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0"><Phone className="text-emerald-400" size={20} /></div>
                    <div className="space-y-4">
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-0.5">Direct Partnership Lines</p>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-emerald-400/60">Girish Manjunath</p>
                        <a href="tel:+919845320088" className="text-sm font-medium hover:text-emerald-400 transition">+91 98453 20088</a>
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-emerald-400/60">Prakash Nayak</p>
                        <a href="tel:+919686671145" className="text-sm font-medium hover:text-emerald-400 transition">+91 96866 71145</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:w-7/12 p-12 md:p-16">
              <div className="max-w-xl mx-auto">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3">Inquiry Received</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                      Thank you for reaching out to Shri Mookambika Agro Foods. Our team has received your inquiry and will get back to you within 24–48 business hours.
                    </p>
                    <button onClick={() => { setIsSubmitted(false); setFormData({ fullName: '', email: '', inquiryType: '', message: '' }); }}
                      className="text-emerald-700 font-bold text-sm hover:underline">Send another inquiry</button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-serif text-slate-900 mb-2">Submit Inquiry</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Full Name" placeholder="John Doe" onChange={(v: string) => setFormData({...formData, fullName: v})} />
                        <Input label="Work Email" type="email" placeholder="company@email.com" onChange={(v: string) => setFormData({...formData, email: v})} />
                      </div>
                      <Select label="Inquiry Type" 
                        options={['Export / Bulk Supply', 'Private Label / Contract Manufacturing', 'Retail / Distribution', 'Explore Prakritva Range', 'General Inquiry']}
                        onChange={(v: string) => setFormData({...formData, inquiryType: v})} />
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                        <textarea rows={5} required className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none text-sm resize-none"
                          onChange={(e) => setFormData({...formData, message: e.target.value})} />
                      </div>
                      <button type="submit" disabled={loading} className="w-full bg-emerald-600 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition">
                        {loading ? 'Submitting...' : <>Submit Inquiry <Send size={18} /></>}
                      </button>
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

/* HELPERS REMAIN UNCHANGED */
const Input = ({ label, type = 'text', placeholder, onChange }: any) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
    <input type={type} required placeholder={placeholder} onChange={(e) => onChange(e.target.value)}
      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none text-sm transition" />
  </div>
);

const Select = ({ label, options, onChange }: any) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
    <select required defaultValue="" onChange={(e) => onChange(e.target.value)}
      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none text-sm transition">
      <option value="" disabled>Select category...</option>
      {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default Contact;