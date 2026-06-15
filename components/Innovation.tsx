import React from 'react';
import {
  Trophy,
  Lightbulb,
  Rocket,
  Award,
  Sprout,
  TrendingUp,
  Globe,
  FlaskConical
} from 'lucide-react';

const Innovation = () => {
  const awardImg = `${import.meta.env.BASE_URL}images/krishi-mela-award.jpg`;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
            Innovation & Recognition
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Building the Future of
            <span className="text-emerald-600"> Value-Added Agriculture</span>
          </h2>

          <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl">
            Beyond processing and exports, SMAF focuses on innovation,
            sustainable product development, and creating new opportunities
            for farmers and consumers alike.
          </p>
        </div>

        {/* Award Section */}
        <div className="bg-gradient-to-r from-emerald-950 to-emerald-800 rounded-[4rem] p-12 md:p-16 text-white mb-24 overflow-hidden relative">

          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">

            {/* Award Content */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full mb-6">
                <Trophy className="text-yellow-400" size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Award Recognition
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-serif mb-4">
                Best Innovation Award
              </h3>

              <p className="text-yellow-300 font-semibold text-lg mb-4">
                Krishi Mela 2025, Bengaluru
              </p>

              <p className="text-emerald-100/90 leading-relaxed text-lg mb-8">
                Sri Mookambika Agro Foods LLP was recognized for its innovative
                approach towards value-added agricultural products, farmer-centric
                processing initiatives, and sustainable rural development.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-5 py-3 rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-emerald-200">
                    Category
                  </p>
                  <p className="font-bold">Innovation</p>
                </div>

                <div className="bg-white/10 px-5 py-3 rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-emerald-200">
                    Event
                  </p>
                  <p className="font-bold">Krishi Mela</p>
                </div>
              </div>
            </div>

            {/* Award Image */}
            <div>
              <img
                src={awardImg}
                alt="Krishi Mela Award"
                className="w-full rounded-[2.5rem] shadow-2xl border border-white/10 object-cover"
              />
            </div>

          </div>
        </div>

        {/* Innovation Pillars */}
        <div className="mb-24">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">
            Innovation Pillars
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb size={28} />
              </div>

              <h4 className="text-xl font-bold mb-4">
                Value Addition
              </h4>

              <p className="text-slate-500 text-sm leading-relaxed">
                Transforming farm produce into export-grade, retail-ready,
                and high-value consumer products.
              </p>
            </div>

            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <FlaskConical size={28} />
              </div>

              <h4 className="text-xl font-bold mb-4">
                Product Development
              </h4>

              <p className="text-slate-500 text-sm leading-relaxed">
                Expanding into pickles, beverages, wellness powders,
                and future functional food innovations.
              </p>
            </div>

            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Sprout size={28} />
              </div>

              <h4 className="text-xl font-bold mb-4">
                Farmer Empowerment
              </h4>

              <p className="text-slate-500 text-sm leading-relaxed">
                Creating higher-value income opportunities for growers
                through innovation-driven agriculture.
              </p>
            </div>

          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-16 text-white">

          <div className="mb-10">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">
              Future Roadmap
            </span>

            <h3 className="text-3xl md:text-4xl font-serif mt-4">
              Where We're Headed Next
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white/5 rounded-3xl p-8">
              <Rocket className="text-emerald-500 mb-5" size={28} />
              <h4 className="font-bold mb-2">Retail Expansion</h4>
              <p className="text-sm text-slate-400">
                Growing the Prakritva consumer brand across India.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8">
              <Globe className="text-emerald-500 mb-5" size={28} />
              <h4 className="font-bold mb-2">Export Growth</h4>
              <p className="text-sm text-slate-400">
                Expanding presence across North America, Europe and Asia.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8">
              <FlaskConical className="text-emerald-500 mb-5" size={28} />
              <h4 className="font-bold mb-2">Functional Foods</h4>
              <p className="text-sm text-slate-400">
                Developing new health-focused food and beverage products.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8">
              <TrendingUp className="text-emerald-500 mb-5" size={28} />
              <h4 className="font-bold mb-2">Farmer Network</h4>
              <p className="text-sm text-slate-400">
                Strengthening sustainable sourcing and farmer partnerships.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Innovation;