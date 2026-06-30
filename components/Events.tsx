import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, HeartHandshake, Award, Users, Milestone, Maximize2, X, Clock } from 'lucide-react';

const Events: React.FC = () => {
  // States for handling popups & layout locking
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background window scrolling when the lightbox is active
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeImage]);

  const eventSlides = [
    {
      title: "Labor Welfare & Encouragement Day",
      date: "June 2026",
      category: "Worker Empowerment",
      desc: "Annual worker recognition and incentive ceremonies celebrating the baseline foundation of our processing lines, ensuring safe, supportive, and fair workplace encouragement.",
      img: `${import.meta.env.BASE_URL}images/events-labor-welfare.jpg`,
      icon: <HeartHandshake size={18} />
    },
    {
      title: "World Food Safety Day Workshops",
      date: "June 07, 2026",
      category: "Global Compliance",
      desc: "Conducting dynamic safety roundtables and structural hygiene milestone awards for our dedicated on-floor processing teams and management squads.",
      img: `${import.meta.env.BASE_URL}images/events-food-safety.jpg`,
      icon: <Award size={18} />
    },
    {
      title: "Grower Support & Farmer Meet",
      date: "May 2026",
      category: "Sourcing Security",
      desc: "Bringing together our regional smallholder grower network to coordinate agro-technical processing workshops, sustainable farming loops, and crop pricing safety layers.",
      img: `${import.meta.env.BASE_URL}images/events-farmer-meet.jpg`,
      icon: <Users size={18} />
    },
    {
      title: "EHS Safety & Health Drills",
      date: "March 2026",
      category: "Risk Mitigation",
      desc: "Comprehensive environment, health, and occupational safety cross-training setups across the workspace layout to maintain bulletproof facility workflows.",
      img: `${import.meta.env.BASE_URL}images/events-safety-drill.jpg`,
      icon: <Milestone size={18} />
    }
  ];

  return (
    <section id="events" className="py-24 bg-[#FCFBF7] overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* SECTION HEADERS */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-emerald-700 font-mono font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-600" />
              Corporate Responsibility & Culture
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 leading-tight">
              Empowering Communities, <br className="hidden sm:block" />Elevating Workplace Standards
            </h2>
          </div>
          <p className="text-slate-600 text-base font-light max-w-md leading-relaxed">
            We look beyond global shipment throughput. From local agrarian network safety frameworks to fair labor micro-incentives, we are dedicated to cultivating a transparent, ethical food supply ecosystem.
          </p>
        </div>

        {/* INFINITE RUNNING PERFORMANCE LOOP MARQUEE CAROUSEL */}
        <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-5 shadow-inner">
          <div className="animate-marquee-track gap-6">
            
            {/* Array duplication ensures smooth, gap-free carousel looping at run time */}
            {[...Array(2)].flatMap(() => eventSlides).map((event, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveImage({ src: event.img, alt: event.title })}
                className="w-[300px] sm:w-[350px] shrink-0 bg-[#F7FAF4]/40 border border-emerald-100/40 rounded-[2rem] p-3.5 cursor-zoom-in hover:bg-white hover:shadow-xl transition-all duration-300 group/ev text-left"
              >
                {/* Media frame display */}
                <div className="h-44 w-full overflow-hidden rounded-2xl relative bg-slate-100 shadow-inner">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover/ev:scale-[1.03] transition duration-700 ease-out"
                  />
                  
                  {/* Category Chip Badge decoration */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 font-mono text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-sm border border-emerald-500/10 flex items-center gap-1.5">
                    <span className="text-emerald-700">{event.icon}</span>
                    <span>{event.category}</span>
                  </div>

                  {/* Date Stamp Tag */}
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white font-mono text-[9px] px-2.5 py-1 rounded-md tracking-wider font-semibold flex items-center gap-1">
                    <Clock size={10} className="text-emerald-400" />
                    {event.date}
                  </div>

                  {/* Action Link Overlay Layer */}
                  <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover/ev:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-emerald-800 text-white p-3 rounded-full shadow-2xl border border-white/10 transform scale-90 group-hover/ev:scale-100 transition-transform duration-300">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>

                {/* Content description wrappers */}
                <div className="mt-4 px-1.5 pb-2">
                  <h4 className="font-serif font-bold text-base text-slate-800 tracking-tight group-hover/ev:text-emerald-800 transition-colors duration-200">
                    {event.title}
                  </h4>
                  <p className="text-slate-500 text-xs font-light mt-2 leading-relaxed line-clamp-3">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* PORTAL LIGHTBOX INTERACTION DISPLAY OVERLAY VIEW */}
      {mounted && activeImage && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/95 pointer-events-none animate-fade-in" />
          
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-[100000] active:scale-95 shadow-lg"
            onClick={() => setActiveImage(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-5xl relative z-10 flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            <p className="text-white/90 font-serif text-sm md:text-base mt-5 bg-slate-900/80 px-6 py-2.5 rounded-full shadow-md border border-white/5 text-center">
              {activeImage.alt}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Events;