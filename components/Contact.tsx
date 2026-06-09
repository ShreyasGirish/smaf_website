import React from 'react';
import {
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Briefcase,
  User,
  Globe
} from 'lucide-react';

const Contact = () => {
  // PASTE YOUR COPIED "SRC" LINKS FROM GOOGLE MAPS HERE:
  const corporateOfficeMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.3820296767556!2d75.11186707592476!3d15.355799958229986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3bb8d7211bf70001%3A0xe44ec2b810d7a049!2sGokul%20Rd%2C%20Hubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717930000000!5m2!1sen!2sin";
  const factoryMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.123456789012!2d75.61234567890123!3d14.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x0%3A0x0!2sRanebennur!5e0!3m2!1sen!2sin!4v1717930000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="flex flex-col lg:flex-row">

            {/* LEFT: CONTACT INFO & EMBEDDED MAPS */}
            <div className="lg:w-5/12 p-12 md:p-16 bg-emerald-950 text-white flex flex-col justify-between space-y-12">
              <div>
                <h2 className="text-4xl font-serif mb-14 leading-tight">
                  Connect with <br />Sri Mookambika & Prakritva
                </h2>

                <div className="space-y-12">
                  {/* CORPORATE OFFICE */}
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <Briefcase className="text-emerald-400" size={20} />
                    </div>
                    <div className="w-full">
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-1.5">
                        Corporate Office
                      </p>
                      <p className="text-sm leading-relaxed text-emerald-100/80 font-light">
                        <strong>SRI MOOKAMBIKA AGRO FOODS LLP</strong><br />
                        167, Pragati 7th Cross, Silver Town,<br />
                        Gokul Road, Hubli, Udyamnagar,<br />
                        Hubballi - 580030, Karnataka, India
                      </p>
                      
                      {/* Interactive Map Iframe */}
                      <div className="w-full h-40 rounded-2xl overflow-hidden mt-4 border border-emerald-800/60 shadow-inner opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <iframe
                          src={corporateOfficeMapsEmbedSrc}
                          className="w-full h-full border-0"
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Corporate Office Location"
                        />
                      </div>
                    </div>
                  </div>

                  {/* FACTORY ADDRESS */}
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <MapPin className="text-emerald-400" size={20} />
                    </div>
                    <div className="w-full">
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-1.5">
                        Factory Unit
                      </p>
                      <p className="text-sm leading-relaxed text-emerald-100/80 font-light">
                        R S No. 64/1, 64/2 Hunasekatte Road,<br />
                        Kammadod Village, Ranebennur Taluk,<br />
                        Haveri District, Karnataka – 581145
                      </p>
                      <p className="text-[10px] text-emerald-400/60 font-mono mt-1">
                        GSTIN: 29AFDFS4584H1ZI
                      </p>

                      {/* Interactive Map Iframe */}
                      <div className="w-full h-40 rounded-2xl overflow-hidden mt-4 border border-emerald-800/60 shadow-inner opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <iframe
                          src={factoryMapsEmbedSrc}
                          className="w-full h-full border-0"
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Factory Location"
                        />
                      </div>
                    </div>
                  </div>

                  {/* GENERAL & B2B EMAIL */}
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <Mail className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-1.5">
                        Email Communications
                      </p>
                      <a 
                        href="mailto:smafoodsindia@gmail.com" 
                        className="text-base font-medium text-white hover:text-emerald-400 transition"
                      >
                        smafoodsindia@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* EXPORT CONTACT */}
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <User className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-1.5">
                        Export Contact Person
                      </p>
                      <p className="text-lg font-serif text-emerald-100">
                        Girish Manjunath
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD FOOTNOTE BADGES */}
              <div className="pt-8 border-t border-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-xl border border-emerald-800">
                  <ShieldCheck className="text-emerald-500" size={15} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Food Safety Excellence
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500/50">
                  <Globe size={15} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Global Exports
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:w-7/12 p-12 md:p-16">
              <div className="max-w-xl mx-auto">
                <h3 className="text-3xl font-serif text-slate-900 mb-2">
                  Submit Inquiry
                </h3>
                <p className="text-slate-500 mb-12 font-light text-sm">
                  Select the operational wing to route your trade inquiry correctly.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Full Name" placeholder="John Doe" />
                    <Input label="Work Email" type="email" placeholder="company@email.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Inquiry Type
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 outline-none text-sm transition"
                    >
                      <option value="" disabled>Select category...</option>
                      <option value="export">Export / Bulk Supply</option>
                      <option value="oem">Private Label / OEM</option>
                      <option value="retail">Retail / Distribution</option>
                      <option value="Prakritva">Prakritva Brand Related</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <Textarea />

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-lg"
                  >
                    Submit Inquiry
                    <Send size={18} />
                  </button>

                  <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest pt-4">
                    Response within 24–48 business hours
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* INTERNAL HELPER COMPONENTS */
const Input = ({ label, type = 'text', placeholder }: any) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
      {label}
    </label>
    <input
      type={type}
      required
      placeholder={placeholder}
      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 outline-none text-sm transition"
    />
  </div>
);

const Textarea = () => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
      Message
    </label>
    <textarea
      rows={5}
      required
      placeholder="Please specify volumes, target delivery markets, packaging types, or operational timelines..."
      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 outline-none text-sm resize-none transition"
    />
  </div>
);

export default Contact;