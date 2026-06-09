import React from 'react';
import {
  Award,
  ShieldCheck,
  Users,
  Briefcase,
  Sparkles
} from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: 'Girish Manjunath',
      role: 'Managing Partner',
      image: `${import.meta.env.BASE_URL}images/girish-manjunath.jpg`,
      icon: <ShieldCheck size={24} />,
      experience: 'Food Safety & Export Specialist',
      bio: 'Food Safety Professional with over 25 years of experience in food processing, quality assurance and exports. Specialist in ISO 22000 and FSSC 22000 systems with extensive expertise in gherkin processing, operations, compliance and international food safety standards.',
      highlights: [
        'FSSC 22000 Specialist',
        'Food Safety Expert',
        'Export Operations',
        'Quality Assurance'
      ]
    },
    {
      name: 'Prakash Nayak',
      role: 'Managing Partner',
      image: `${import.meta.env.BASE_URL}images/prakash-nayak.jpg`,
      icon: <Briefcase size={24} />,
      experience: 'HR & Regulatory Expert',
      bio: 'HR and Regulatory Professional with over 25 years of experience. Specialized in MSW (Masters in Social Welfare) with strong expertise in HR management, industrial relations, regulatory compliance and gherkin export operations.',
      highlights: [
        'HR Leadership',
        'Regulatory Compliance',
        'Industrial Relations',
        'Export Administration'
      ]
    }
  ];

  return (
    <section
      id="leadership"
      className="py-28 bg-[#FCFBF7] border-t border-amber-100/50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-600" />
            Leadership Team
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Leadership Built On
            <span className="text-emerald-600"> Experience & Trust</span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl">
            Sri Mookambika Agro Foods LLP is led by experienced professionals
            with decades of expertise in food safety, exports, operations,
            regulatory compliance and sustainable agricultural value chains.
          </p>
        </div>

        {/* LEADER CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div className="grid grid-cols-1 md:grid-cols-[40%_60%] h-full">
                
                {/* IMAGE CONTAINER */}
                <div className="relative h-80 md:h-full min-h-[440px] md:border-r border-slate-100 flex-shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"></div>
                  
                  {/* Centered Overlay Experience Tag */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl text-white text-[11px] font-bold uppercase tracking-wider text-center shadow-lg w-full">
                      {leader.experience}
                    </div>
                  </div>
                </div>

                {/* CONTENT CONTAINER - ADJUSTED FOR JUSTIFIED TEXT WHILE TILES REMAIN CENTERED */}
                <div className="p-8 md:p-10 flex flex-col justify-between items-center h-full bg-white">
                  <div className="w-full flex flex-col items-center">
                    {/* Centered Icon Grid Element */}
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                      {leader.icon}
                    </div>

                    <h3 className="text-3xl font-serif text-slate-800 mb-1 text-center leading-tight">
                      {leader.name}
                    </h3>

                    <p className="text-emerald-600 uppercase tracking-widest text-[11px] text-center font-bold mb-6">
                      {leader.role}
                    </p>

                    {/* FIXED: Swapped text-center for text-justify and removed the clunky overflow box */}
                    <p className="text-slate-500 text-sm leading-relaxed font-light mb-6 text-justify">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Highlights Grid Block with Brand Subtle Green Tint - Centered tiles */}
                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100 w-full">
                    {leader.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#F7FAF4] border border-emerald-100/60 rounded-xl h-16 flex items-center justify-center text-center px-3 hover:border-emerald-300 hover:bg-emerald-50/50 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 line-clamp-2">
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

        {/* UNIFORM STATS TRUST ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <Award size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">50+ Years</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              Combined Industry Experience
            </p>
          </div>

          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <Users size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">25+ Years</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              Leadership Excellence
            </p>
          </div>

          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <ShieldCheck size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">FSSC 22000</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              Food Safety Commitment
            </p>
          </div>

          <div className="bg-[#F7FAF4] border border-emerald-100/60 p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 flex items-center justify-center mb-4 text-emerald-800">
              <Briefcase size={22} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-slate-800 mb-1">Global Exports</h4>
            <p className="text-slate-500 text-xs tracking-wide font-medium leading-relaxed">
              International Market Expertise
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;