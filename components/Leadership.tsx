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
image: '/assets/images/girish-manjunath.jpg',
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
image: '/assets/images/prakash-nayak.jpg',
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

return ( <section
   id="leadership"
   className="py-28 bg-white border-t border-slate-100 overflow-hidden"
 > <div className="container mx-auto px-4 md:px-6">

```
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {leaders.map((leader, index) => (
        <div
          key={index}
          className="bg-white border border-slate-200 hover:border-emerald-200 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
        >
          <div className="grid md:grid-cols-[42%_58%]">

            {/* IMAGE */}
            <div className="relative min-h-[420px] border-r border-slate-200">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl text-white text-xs font-bold uppercase tracking-widest">
                  {leader.experience}
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-12 flex flex-col justify-between">

              <div>

                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-6">
                  {leader.icon}
                </div>

                <h3 className="text-[2.35rem] font-serif text-slate-900 mb-2 leading-none">
                  {leader.name}
                </h3>

                <p className="text-emerald-600 uppercase tracking-widest text-xs font-bold mb-6">
                  {leader.role}
                </p>

                <p className="text-slate-600 text-[15px] leading-8 font-light mb-8 min-h-[170px]">
                  {leader.bio}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {leader.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-100 rounded-2xl min-h-[88px] flex items-center justify-center text-center px-4 hover:bg-emerald-50 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </div>
      ))}

    </div>

    {/* TRUST BAR */}
    <div className="mt-20 bg-emerald-950 rounded-[3rem] p-10 md:p-14 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-center">

        <div>
          <Award className="mx-auto mb-4 text-emerald-400" size={32} />
          <h4 className="font-bold text-xl mb-2">50+ Years</h4>
          <p className="text-emerald-100/70 text-sm">
            Combined Industry Experience
          </p>
        </div>

        <div>
          <Users className="mx-auto mb-4 text-emerald-400" size={32} />
          <h4 className="font-bold text-xl mb-2">25+ Years</h4>
          <p className="text-emerald-100/70 text-sm">
            Leadership Excellence
          </p>
        </div>

        <div>
          <ShieldCheck className="mx-auto mb-4 text-emerald-400" size={32} />
          <h4 className="font-bold text-xl mb-2">FSSC 22000</h4>
          <p className="text-emerald-100/70 text-sm">
            Food Safety Commitment
          </p>
        </div>

        <div>
          <Briefcase className="mx-auto mb-4 text-emerald-400" size={32} />
          <h4 className="font-bold text-xl mb-2">Global Exports</h4>
          <p className="text-emerald-100/70 text-sm">
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
