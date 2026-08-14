import React from 'react';
import {
  Award,
  ShieldCheck,
  Users,
  Briefcase,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: 'Girish Manjunath',
      role: 'Managing Partner',
      image: `${import.meta.env.BASE_URL}images/girish-manjunath.jpg`,
      icon: <ShieldCheck size={24} />,
      experience: 'Food Safety & Export Operations Lead',
      bio: 'Food Safety Professional and Certified Food Safety Team Leader (FSTL) with over 25 years of hands-on leadership in commercial food processing, quality engineering, and global export chains. Deeply specialized in FSMS architecture, ISO 22000, and FSSC 22000 Version 6 compliance, overseeing factory throughput, precision curing, and international border clearance protocols.',
      highlights: [
        'FSMS Lead Auditor / Architect',
        'Certified FSTL (Team Leader)',
        'FSSC 22000 v6 Operations',
        '25+ Yrs Export QA Engineering'
      ]
    },
    {
      name: 'Prakash Nayak',
      role: 'Managing Partner',
      image: `${import.meta.env.BASE_URL}images/prakash-nayak.jpg`,
      icon: <Briefcase size={24} />,
      experience: 'HR, Regulatory & Corporate Affairs Lead',
      bio: 'HR, Statutory, and Regulatory Professional with over 25 years of distinguished industry experience. Holding a Masters in Social Welfare (MSW), he specializes in strategic human capital development, industrial relations, fair-labor audits, APEDA/DGFT trade compliance, and seamless gherkin export administration across corporate partner ecosystems.',
      highlights: [
        'HR & Industrial Relations',
        'MSW (Social Welfare Frameworks)',
        'APEDA & Statutory Clearances',
        'Export Administration'
      ]
    }
  ];

  return (
    <section
      id="leadership"
      className="py-28 bg-[#FCFBF7] border-t border-amber-100/50 overflow-hidden text-left"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Executive Governance
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Leadership Built On
            <span className="text-emerald-600"> Experience & Trust</span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            Sri Mookambika Agro Foods LLP is guided by veteran industry professionals 
            with decades of proven operational excellence in FSMS systems, international food safety, 
            statutory compliance, and sustainable agricultural supply networks.
          </p>
        </div>

        {/* LEADER CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div className="grid grid-cols-1 md:grid-cols-[42%_58%] h-full">
                
                {/* IMAGE CONTAINER */}
                <div className="relative h-80 md:h-full min-h-[440px] md:border-r border-slate-100 flex-shrink-0 bg-slate-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top absolute inset-0 group-hover:scale-102 transition duration-700 ease-out"
                    onError={(e) => {
                      // Graceful fallback container if photo path is still being loaded
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Experience Tag Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/90 backdrop-blur-md border border-white/15 p-3 rounded-2xl text-white text-[11px] font-mono tracking-tight text-center shadow-lg">
                      {leader.experience}
                    </div>
                  </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="p-8 md:p-10 flex flex-col justify-between h-full bg-white text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center border border-emerald-100/50 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                        {leader.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-3 py-1 rounded-full">
                        {leader.role}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-1 leading-tight">
                      {leader.name}
                    </h3>

                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light my-4">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Highlights Grid Block */}
                  <div className="grid grid-cols-2 gap-2.5 pt-6 border-t border-slate-100 w-full mt-4">
                    {leader.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#F7FAF4] border border-emerald-100/60 rounded-xl p-2.5 flex items-center gap-2 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-200"
                      >
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                        <span className="text-[10px] font-bold tracking-tight text-slate-700 line-clamp-2">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* STATS TRUST ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <Award size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">50+ Years</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              Combined Industry Expertise
            </p>
          </div>

          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <Users size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">25+ Years</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              FSMS & Operational Excellence
            </p>
          </div>

          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <ShieldCheck size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">FSSC 22000</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              Version 6 Global Benchmark
            </p>
          </div>

          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <Briefcase size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">Global Trade</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              Institutional Maritime Logistics
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;