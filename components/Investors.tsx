import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import {
  Handshake, 
  Factory, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles, 
  TrendingUp, 
  Building, 
  User, 
  Mail, 
  CalendarCheck
} from 'lucide-react';

const Investors: React.FC = () => {
  const [investorInfo, setInvestorInfo] = useState({ fullName: '', corporateEmail: '', companyName: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInvestorInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. LOG THE STRATEGIC LEAD TO THE DATABASE
      const { error: dbError } = await supabase
        .from('investor_leads')
        .insert([{ 
          name: investorInfo.fullName, 
          email: investorInfo.corporateEmail, 
          company: investorInfo.companyName 
        }]);

      if (dbError) throw dbError;

      // 2. SET SUBMITTED STATE TO SHOW MANAGEMENT RESPONSE MESSAGE
      setIsSubmitted(true);
    } catch (err) {
      console.error("Partnership Request Failed:", err);
      alert("Submission failed. Please check your network connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="investors" className="py-28 bg-[#FCFBF7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* SECTION HEADER BLOCK */}
        <div className="max-w-4xl mb-20 text-left">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" /> Strategic Growth Alliances
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
            Institutional Growth & <br />
            <span className="text-emerald-600">Infrastructure Expansion</span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            Reviewing strategic allocations from global trade channels, contract farming ecosystems, 
            and venture partners looking to engage with our mechanized multi-line processing developments in Karnataka.
          </p>
        </div>

        {/* RE-ARCHITECTED INTERACTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT VALUE PROPOSITION PANEL */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { title: "Processing Line Scaling", desc: "Scaling annual factory capacity limits toward 3000+ MT to manage growing container trade metrics.", icon: <Factory size={22} /> },
              { title: "Agritech Buy-Back Sourcing", desc: "Direct coordination with 1200+ localized family farmers across strict non-GMO contract frameworks.", icon: <TrendingUp size={22} /> },
              { title: "Certified Global Safety", desc: "Full international trade transparency anchored by FSSC 22000 Version 6 and USFDA compliance audits.", icon: <ShieldCheck size={22} /> },
              { title: "Supply-Chain Infrastructure", desc: "Building centralized pre-cooling networks and temperature-locked logistics matrices to safeguard raw crop arrivals.", icon: <CheckCircle size={22} /> }
            ].map((card, index) => (
              <div key={index} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between hover:border-emerald-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6 border border-emerald-100/40">{card.icon}</div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">{card.title}</h4>
                </div>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT ELEVATED PRIVATE PLACEMENT OFFICE BOX */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[3.5rem] p-10 md:p-14 flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Handshake size={14} /> Investment Oppurtunity
              </div>
              <h3 className="text-3xl md:text-4xl font-serif mb-5 leading-tight text-slate-100 tracking-tight">Connect with <br />Management</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Submit your institutional credentials to request detailed operational data, structured asset deployment outlines, and direct partnership discussions with our executive team.
              </p>
            </div>

            {isSubmitted ? (
              /* ELEGANT CONFIRMATION OVERLAY SCREEN */
              <div className="bg-emerald-950/40 border border-emerald-500/30 p-8 md:p-10 rounded-[2rem] flex flex-col items-center text-center shadow-inner my-auto animate-fade-in">
                <div className="w-14 h-14 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mb-5 shadow-lg">
                  <CalendarCheck size={26} />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-100 mb-3">Request Lodged</h4>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-light">
                  Thank you for your verification. The Sri Mookambika corporate relations management desk will review your credentials and get back to you directly via secure email channels regarding corporate development pipelines.
                </p>
              </div>
            ) : (
              /* ROBUST LARGE-SCALE FORM ENTRY PANEL */
              <form onSubmit={handleFormSubmit} className="space-y-5 w-full">
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-sm placeholder-slate-500 outline-none focus:border-emerald-500 focus:bg-white/10 transition-all duration-200"
                    onChange={(e) => handleInputChange('fullName', e.target.value)} 
                  />
                </div>

                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
                  <input 
                    type="email" 
                    required 
                    placeholder="Institutional Corporate Email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-sm placeholder-slate-500 outline-none focus:border-emerald-500 focus:bg-white/10 transition-all duration-200"
                    onChange={(e) => handleInputChange('corporateEmail', e.target.value)} 
                  />
                </div>

                <div className="relative">
                  <Building size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
                  <input 
                    type="text" 
                    required 
                    placeholder="Company / Fund Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-sm placeholder-slate-500 outline-none focus:border-emerald-500 focus:bg-white/10 transition-all duration-200"
                    onChange={(e) => handleInputChange('companyName', e.target.value)} 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl py-5 mt-4 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 border border-emerald-500/20 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-xl shadow-emerald-950/20"
                >
                  {loading ? 'Processing Request...' : <>Request Partnership Briefing <ArrowUpRight size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Investors;