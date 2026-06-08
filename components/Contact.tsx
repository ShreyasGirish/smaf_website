import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Briefcase,
  ShoppingBag,
  Globe
} from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">

        <div className="bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="flex flex-col lg:flex-row">

            {/* LEFT: CONTACT INFO */}
            <div className="lg:w-5/12 p-12 md:p-16 bg-emerald-950 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-serif mb-14 leading-tight">
                  Connect with <br />Sri Mookambika & Prakritva
                </h2>

                <div className="space-y-12">

                  {/* B2B / EXPORT */}
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <Briefcase className="text-emerald-400" size={22} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-2">
                        Corporate & B2B Sales
                      </p>
                      <p className="text-lg font-bold tracking-tight mb-1">
                        +91 98453 20088
                      </p>
                      <p className="text-sm text-emerald-100/70 mb-2">
                        sales.smafoodsindia@gmail.com
                      </p>
                      <p className="text-[10px] text-emerald-100/40 uppercase tracking-tighter italic">
                        Export • Private Label • OEM • Bulk Supply
                      </p>
                    </div>
                  </div>

                  {/* PRAKRITVA */}
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <ShoppingBag className="text-emerald-400" size={22} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-2">
                        Prakritva Retail & Distribution
                      </p>
                      <p className="text-sm text-emerald-100/70 mb-1">
                        prakritvafoodsindia@gmail.com
                      </p>
                      <p className="text-[10px] text-emerald-100/40 uppercase tracking-tighter italic">
                        Domestic Retail • Exhibitions • Distributors
                      </p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <MapPin className="text-emerald-400" size={22} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-2">
                        Manufacturing Unit
                      </p>
                      <p className="text-xs leading-relaxed text-emerald-100/70 font-light">
                        RS 64/1 & 64/2A, Hunasekatte Road,<br />
                        Kamadod Village, Ranebennur Taluk,<br />
                        Haveri District, Karnataka – 581145, India
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-16 pt-8 border-t border-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-emerald-900/30 px-5 py-2.5 rounded-xl border border-emerald-800">
                  <ShieldCheck className="text-emerald-500" size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    FSSAI: 11224999000900
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500/50">
                  <Globe size={16} />
                  <span className="text-[10px] font-bold uppercase">
                    Global Origin
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
                  Select the category to route your inquiry correctly.
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
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 outline-none text-sm"
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

const Input = ({ label, type = 'text', placeholder }: any) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
      {label}
    </label>
    <input
      type={type}
      required
      placeholder={placeholder}
      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 outline-none text-sm"
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
      placeholder="Please specify volumes, markets, or timelines..."
      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 outline-none text-sm resize-none"
    />
  </div>
);

export default Contact;
