import React from 'react';
import { Quote, Star, Globe2, Building2, ShieldCheck } from 'lucide-react';

const Reviews = () => {
  // Realistic B2B wholesale dummy reviews matching global export standards
  const dummyReviews = [
    {
      quote: "The structural firmness and strict barrel-to-barrel uniformity of their pickled gherkins perfectly match our industrial processing automation guidelines. Highly professional compliance standards.",
      author: "Supply Chain Procurement Lead",
      company: "EuroFood Distribution GmbH",
      location: "Hamburg, Germany",
      rating: 5,
      verification: "FSSC 22000 Audited Batch"
    },
    {
      quote: "Sri Mookambika's capability to consistently maintain acidity thresholds below 3.3 pH sets a high bar for our importing criteria. Container packaging and dispatch times have been flawless.",
      author: "VP of Quality Management",
      company: "Atlantic Preservation Brands",
      location: "Ohio, United States",
      rating: 5,
      verification: "USFDA Clearance Verified"
    },
    {
      quote: "Comprehensive batch tracing reports are delivered alongside every single ocean container shipment. Their transparency and lab verification make them an elite partner.",
      author: "Global Ingredients Buyer",
      company: "Continental Processing Corporation",
      location: "Lyon, France",
      rating: 5,
      verification: "100% Traceability Lock"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white text-slate-900 border-t border-slate-100 relative min-h-[500px]">
      {/* Decorative clean background subtle mesh glow patches */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* SECTION HEADER MODULE */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
            Global Enterprise Trust
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-slate-900">
            Validated by Global <br />
            <span className="text-emerald-600">Importers & Distributors</span>
          </h2>
          <p className="text-slate-500 text-base font-light max-w-2xl leading-relaxed">
            Discover why tier-one industrial food brands depend on our chemical specification accuracy, 
            certified hygiene frameworks, and consistent container logistics.
          </p>
        </div>

        {/* 3-COLUMN HIGHER CONTRAST REVIEWS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dummyReviews.map((review, i) => (
            <div 
              key={i}
              className="p-8 md:p-10 bg-slate-50/60 border border-slate-200/60 rounded-[2.5rem] hover:border-emerald-500/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Upper block metrics */}
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors duration-300">
                    <Quote size={20} />
                  </div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Review Message Content String */}
                <p className="text-slate-700 font-normal text-sm md:text-base leading-relaxed mb-8 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Lower client meta credentials card */}
              <div className="border-t border-slate-200/60 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                  <Building2 size={14} className="text-emerald-600" />
                  <span>{review.company}</span>
                </div>
                
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-4">
                  <Globe2 size={13} className="text-slate-400" />
                  <span>{review.location} • {review.author}</span>
                </div>

                {/* Live parameter checklist authentication capsule */}
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  <span>{review.verification}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;