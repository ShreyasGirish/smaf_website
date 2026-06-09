import React from 'react';
import {
  Award,
  ShieldCheck,
  Users,
  Briefcase
} from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: 'Girish Manjunath',
      role: 'Managing Partner',
      image: `${import.meta.env.BASE_URL}images/girish-manjunath.jpg`,
      icon: <ShieldCheck size={22} />,
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
      icon: <Briefcase size={22} />,
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
      className="py-28 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        
        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 hover:border-emerald-200 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="grid md:grid-cols-[42%_58%] h-full">
                
                {/* IMAGE CONTAINER */}
                <div className="relative h-80 md:h-full min-h-[440px] md:border-r border-b md:border-b-0 border-slate-200 flex-shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  
                  {/* Image Overlay Text */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl text-white text-[11px] font-bold uppercase tracking-wider text-center md:text-left shadow-lg">
                      {leader.experience}
                    </div>
                  </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="p-8 md:p-10 flex flex-col justify-between h-full bg-white">
                  <div>
                    {/* Header Details */}
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-5">
                      {leader.icon}
                    </div>

                    <h3 className="text-3xl font-serif text-slate-900 mb-1 leading-tight">
                      {leader.name}
                    </h3>

                    <p className="text-emerald-600 uppercase tracking-widest text-[11px] font-bold mb-5">
                      {leader.role}
                    </p>

                    {/* Standardized Bio Height Area */}
                    <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 md:h-36 overflow-y-auto pr-1">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Highlights Grid Block */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    {leader.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-100 rounded-xl h-16 flex items-center justify-center text-center px-3 hover:bg-emerald-50 hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300"
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

        {/* TRUST BAR */}
        <div className="mt-20 bg-emerald-950 rounded-[3rem] p-10 md:p-14 text-white shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mb-3">
                <Award className="text-emerald-400" size={24} />
              </div>
              <h4 className="font-bold text-xl mb-1">50+ Years</h4>
              <p className="text-emerald-100/70 text-xs tracking-wide">
                Combined Industry Experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mb-3">
                <Users className="text-emerald-400" size={24} />
              </div>
              <h4 className="font-bold text-xl mb-1">25+ Years</h4>
              <p className="text-emerald-100/70 text-xs tracking-wide">
                Leadership Excellence
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mb-3">
                <ShieldCheck className="text-emerald-400" size={24} />
              </div>
              <h4 className="font-bold text-xl mb-1">FSSC 22000</h4>
              <p className="text-emerald-100/70 text-xs tracking-wide">
                Food Safety Commitment
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mb-3">
                <Briefcase className="text-emerald-400" size={24} />
              </div>
              <h4 className="font-bold text-xl mb-1">Global Exports</h4>
              <p className="text-emerald-100/70 text-xs tracking-wide">
                International Market Expertise
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;