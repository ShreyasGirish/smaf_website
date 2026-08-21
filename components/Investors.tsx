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
  CalendarCheck,
  Shield,
  CheckCircle2
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
      const { error: dbError } = await supabase
        .from('investor_leads')
        .insert([{ 
          name: investorInfo.fullName, 
          email: investorInfo.corporateEmail, 
          company: investorInfo.companyName 
        }]);

      if (dbError) throw dbError;
      setIsSubmitted(true);
    } catch (err) {
      console.error("Partnership Request Failed:", err);
      alert("Submission failed. Please check your network connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  const investmentPillars = [
    {
      title: "Processing Line & Capacity Scaling",
      desc: "Expanding annual factory throughput beyond 3,000+ MT to satisfy growing maritime container demand across US and European retail chains.",
      icon: <Factory size={20} className="text-emerald-700" />
    },
    {
      title: "Contract Agronomy & Sourcing Security",
      desc: "Direct coordination with 1,200+ regional family farmers across strict non-GMO, IPM-governed buy-back cultivation agreements.",
      icon: <TrendingUp size={20} className="text-emerald-700" />
    },
    {
      title: "Audited Global Safety & GFSI Standards",
      desc: "Full international supply chain transparency anchored by FSSC 22000 Version 6, USFDA facility registration, and STAR-K Kosher compliance.",
      icon: <ShieldCheck size={20} className="text-emerald-700" />
    },
    {
      title: "Supply-Chain & Brining Infrastructure",
      desc: "Deploying high-capacity equilibrium brine arrays and standardized 240L–260L HDPE drum packaging pipelines for long shelf-life export reliability.",
      icon: <CheckCircle size={20} className="text-emerald-700" />
    }
  ];

  return (
    <section id="investors" className="py-28 bg-[#FCFBF7] overflow-hidden border-t border-slate-100 text-left">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1 rounded-full mb-4">
            <Sparkles size={13} className="text-emerald-600" />
            <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em]">
              Strategic Growth Alliances
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Institutional Growth & <br />
            <span className="text-emerald-600">Infrastructure Expansion</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-3xl">
            Reviewing strategic allocations from global trade partners, contract packing joint ventures, 
            and agricultural growth alliances engaging with our mechanized multi-line processing developments in Karnataka.
          </p>
        </div>

        {/* 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: 4 VALUE PROPOSITION CARDS (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {investmentPillars.map((card, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-100 p-7 rounded-[2rem] shadow-sm flex flex-col justify-between hover:border-emerald-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="w-11 h-11 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-5 border border-emerald-100/60 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    {React.cloneElement(card.icon, {
                      className: "w-5 h-5 transition-colors group-hover:text-white"
                    })}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-slate-900 mb-2 leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700">
                  <CheckCircle2 size={12} className="text-emerald-600" />
                  <span>Verified Operational Objective</span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: CONNECT WITH MANAGEMENT FORM (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-6">
                <Handshake size={13} /> Enterprise Dialogue
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-3 leading-tight text-white">
                Connect with Management
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Submit your institutional credentials to receive operational metrics, capacity roadmaps, 
                and arrange a direct discussion with our executive team.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/30 p-8 rounded-2xl flex flex-col items-center text-center shadow-inner my-auto animate-fade-in">
                <div className="w-14 h-14 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CalendarCheck size={24} />
                </div>
                <h4 className="text-lg font-serif font-bold text-white mb-2">Briefing Request Received</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs font-light mb-6">
                  Our corporate relations desk will review your details and respond via secure corporate email within 24–48 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setInvestorInfo({ fullName: '', corporateEmail: '', companyName: '' });
                  }}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
                >
                  Submit Another Briefing Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 w-full">
                <div className="relative">
                  <User size={15} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name & Title"
                    value={investorInfo.fullName}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 focus:bg-white/10 transition-all font-light"
                    onChange={(e) => handleInputChange('fullName', e.target.value)} 
                  />
                </div>

                <div className="relative">
                  <Mail size={15} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
                  <input 
                    type="email" 
                    required 
                    placeholder="Corporate Email Address"
                    value={investorInfo.corporateEmail}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 focus:bg-white/10 transition-all font-light"
                    onChange={(e) => handleInputChange('corporateEmail', e.target.value)} 
                  />
                </div>

                <div className="relative">
                  <Building size={15} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
                  <input 
                    type="text" 
                    required 
                    placeholder="Company / Institution Name"
                    value={investorInfo.companyName}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 focus:bg-white/10 transition-all font-light"
                    onChange={(e) => handleInputChange('companyName', e.target.value)} 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-4 mt-2 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-emerald-500/20 active:scale-[0.99] transition-all shadow-lg cursor-pointer"
                >
                  {loading ? 'Logging Request...' : (
                    <>
                      <span>Request Partnership Briefing</span>
                      <ArrowUpRight size={15} />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-500 font-mono text-center flex items-center justify-center gap-1.5 pt-1">
                  <Shield size={11} className="text-emerald-500" />
                  <span>Institutional data handled under commercial confidentiality.</span>
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Investors;