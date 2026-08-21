import React from 'react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import heroImg from '../assets/images/hero.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950 text-left">
      {/* Background Image & Subtle Dark Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImg}
          alt="Indian gherkin agricultural processing – Sri Mookambika Agro Foods"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          
          {/* Top Trust Pill */}
          <div 
            onClick={() => scrollToSection('quality')}
            className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md cursor-pointer hover:bg-emerald-900/60 transition-all shadow-sm group"
          >
            <ShieldCheck size={14} className="text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em]">
              FSSC 22000 v6 • USFDA • STAR-K Kosher Certified
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8 tracking-tight">
            The Crunch of <br />
            <span className="text-emerald-400">Global Confidence.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
            Empowering 1,200+ smallholder farmers to deliver export-grade 
            gherkins and pickled vegetables to the world’s leading food brands with 
            verified batch traceability.
          </p>

          {/* Symmetrical CTA Button Row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('products')}
              className="h-14 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide inline-flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-950/50 active:scale-95 cursor-pointer border border-transparent box-border"
            >
              <span>See Export Grades</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 shrink-0" />
            </button>

            <button
              onClick={() => scrollToSection('quality')}
              className="h-14 px-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-bold text-sm tracking-wide border border-white/20 hover:border-emerald-500/50 transition-all active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2.5 box-border"
            >
              <ShieldCheck size={17} className="text-emerald-400 shrink-0" />
              <span>Verify Accreditations</span>
            </button>
          </div>

        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40 hover:opacity-100 cursor-pointer z-10 text-white"
      >
        <ChevronDown size={22} />
      </div>
    </section>
  );
};

export default Hero;