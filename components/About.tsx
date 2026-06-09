import React from 'react';
import {
  Target,
  Zap,
  Heart,
  Sparkles
} from 'lucide-react';

const About = () => {
  /* ROOT-BASED PUBLIC ASSET PATH */
  const aboutFacilityImg = `${import.meta.env.BASE_URL}images/about-facility.jpg`;

  const values = [
    {
      title: 'Customer Centric',
      description: 'Custom-graded solutions meeting safe, legal, and premium global food standards.',
      icon: <Target className="w-5 h-5 transition-colors duration-300 text-emerald-600 group-hover:text-emerald-300" />,
    },
    {
      title: 'Agile Production',
      description: 'Investing in sustainable infrastructure for quality, volume, and cost efficiency.',
      icon: <Zap className="w-5 h-5 transition-colors duration-300 text-emerald-600 group-hover:text-emerald-300" />,
    },
    {
      title: 'Social Impact',
      description: 'Zero child labor, community health checks, and a carbon-conscious footprint.',
      icon: <Heart className="w-5 h-5 transition-colors duration-300 text-emerald-600 group-hover:text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="py-28 bg-[#FCFBF7] relative overflow-hidden">
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
              />

              {/* Ultra-subtle clear gradient overlay protecting detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-black/10 pointer-events-none" />

              {/* ENHANCED REFINED FLOATING CARD */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-white/20 max-w-sm transform transition duration-300">
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
                  Strategic Advantage
                </p>
                <h4 className="font-serif text-slate-900 font-medium text-base">
                  Ranebennur, Karnataka
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 font-light">
                  &lt;2 Hours Farm-to-Plant Processing Window
                </p>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT & VALUES SIDE */}
          <div className="w-full lg:w-1/2">
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-600" />
              Corporate Ecosystem
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight">
              The Backbone of <br />
              <span className="text-emerald-600 relative inline-block">
                Premium Exports
                <span className="absolute bottom-1 left-0 w-full h-1 bg-emerald-100/60 -z-10" />
              </span>
            </h2>

            <p className="text-slate-600 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Sri Mookambika Agro Foods LLP bridges dedicated Indian agricultural networks 
              with enterprise international brands through enterprise scale, rapid logistics, and 
              uncompromising traceability.
            </p>

            {/* UNIFORM RESPONSIVE GRID BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="group p-6 md:p-5 lg:p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:bg-emerald-800 hover:border-emerald-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon Container with state reactions */}
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 mb-5 flex items-center justify-center group-hover:bg-emerald-700/50 transition-colors duration-300">
                      {v.icon}
                    </div>
                    
                    <h5 className="font-bold text-xs uppercase tracking-widest text-slate-800 group-hover:text-emerald-100 mb-2 transition-colors duration-300">
                      {v.title}
                    </h5>
                  </div>
                  
                  <p className="text-[12px] text-slate-500 group-hover:text-emerald-100/80 leading-relaxed font-light transition-colors duration-300">
                    {v.description}
                  </p>
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