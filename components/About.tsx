import React from 'react';
import {
  Target,
  Zap,
  Heart,
  MapPin,
  Navigation,
  ArrowRight,
  Clock,
  Shield
} from 'lucide-react';

const About = () => {
  // ✅ CORRECT PATH (ROOT-BASED)
  const aboutFacilityImg = '/assets/images/about-facility.jpg';

  const values = [
    {
      title: 'Customer Centric',
      description:
        'Custom-graded solutions meeting safe, legal, and premium global food standards.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: 'Agile Production',
      description:
        'Investing in sustainable infrastructure for quality, volume, and cost efficiency.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Social Impact',
      description:
        'Zero child labor, community health checks, and a carbon-conscious footprint.',
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* IMAGE */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50">

              <img
                src={aboutFacilityImg}
                alt="Sri Mookambika Agro Foods processing facility"
                className="w-full aspect-[4/3] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-16 left-8 right-8 bg-white/95 p-6 rounded-3xl shadow-xl">
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Strategic Advantage
                </h4>
                <p className="text-xs text-slate-600">
                  Ranebennur, Karnataka • &lt;2 Hours Farm-to-Plant
                </p>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8">
              The Backbone of <span className="text-emerald-600">Premium Exports.</span>
            </h2>

            <p className="text-slate-600 text-lg mb-12">
              Sri Mookambika Agro Foods LLP bridges Indian farmers with global
              food brands through scale, speed, and traceability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 hover:bg-emerald-600 transition-all"
                >
                  <div className="text-emerald-600 mb-4">{v.icon}</div>
                  <h5 className="font-bold text-sm uppercase tracking-widest mb-2">
                    {v.title}
                  </h5>
                  <p className="text-xs text-slate-500">{v.description}</p>
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
