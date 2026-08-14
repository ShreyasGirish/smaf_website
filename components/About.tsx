import React from 'react';
import {
  Target,
  Zap,
  Heart,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const About: React.FC = () => {
  /* ROOT-BASED PUBLIC ASSET PATH */
  const aboutFacilityImg = `${import.meta.env.BASE_URL}images/about-facility.jpg`;

  const values = [
    {
      title: 'Customer Centric',
      description: 'Custom-graded solutions meeting safe, legal, and premium global food standards.',
      icon: <Target className="w-5 h-5 text-emerald-700" />,
    },
    {
      title: 'Agile Production',
      description: 'Investing in sustainable infrastructure for quality, volume, and cost efficiency.',
      icon: <Zap className="w-5 h-5 text-emerald-700" />,
    },
    {
      title: 'Social Impact',
      description: 'Zero child labor, community health checks, and a carbon-conscious green footprint.',
      icon: <Heart className="w-5 h-5 text-emerald-700" />,
    },
  ];

  return (
    <section id="about" className="py-28 bg-[#FCFBF7] relative overflow-hidden text-left border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* IMAGE SIDE WITH ATTRACTIVE LAYERS */}
          <div className="w-full lg:w-1/2 relative group/img">
            {/* Ambient background glow ring behind image */}
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-[3.5rem] blur-xl opacity-0 group-hover/img:opacity-100 transition duration-700 pointer-events-none" />
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl border border-slate-200/60 bg-white">
              <img
                src={aboutFacilityImg}
                alt="Sri Mookambika Agro Foods processing facility"
                className="w-full aspect-[4/3] object-cover transform scale-100 group-hover/img:scale-102 transition duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Clear gradient overlay protecting detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* REFINED FLOATING CARD WITH <8HRS LOGISTICS */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/40 max-w-sm transform transition duration-300">
                <p className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                  Strategic Advantage
                </p>
                <h4 className="font-serif text-slate-900 font-bold text-base leading-snug">
                  Ranebennur, Karnataka
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-light leading-relaxed">
                  &lt; 8 Hours Farm-to-Plant Processing Window
                </p>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT & VALUES SIDE */}
          <div className="w-full lg:w-1/2">
            <span className="text-emerald-700 font-mono font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-600" />
              Corporate Ecosystem
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              The Backbone of <br />
              <span className="text-emerald-600 relative inline-block">
                Premium Exports
                <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-100/60 -z-10" />
              </span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
              Sri Mookambika Agro Foods LLP bridges dedicated Indian agricultural networks 
              with global international brands through commercial scale, rapid logistics, and 
              uncompromising traceability.
            </p>

            {/* HIGH-CONTRAST RESPONSIVE VALUES CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon Container with subtle active state */}
                    <div className="w-11 h-11 rounded-2xl bg-[#F7FAF4] border border-emerald-100/60 flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(v.icon, {
                        className: "w-5 h-5 text-emerald-700 group-hover:text-white transition-colors duration-300"
                      })}
                    </div>
                    
                    <h5 className="font-bold text-xs font-mono uppercase tracking-wider text-slate-800 mb-2">
                      {v.title}
                    </h5>

                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {v.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-50 flex items-center gap-1 text-[10px] font-mono text-emerald-700">
                    <CheckCircle2 size={11} className="text-emerald-600" />
                    <span>Core Pillar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;