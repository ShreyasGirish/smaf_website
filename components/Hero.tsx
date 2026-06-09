import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

// ✅ CORRECT IMAGE IMPORT
import heroImg from '../assets/images/hero.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950">
      {/* Background Image Overlay Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Indian gherkin farms – Sri Mookambika Agro Foods"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content Block */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* FIXED: Replaced repetitive company title with an elegant, functional industry tag */}
          <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
            Global Agro-Industrial Supply Chain
          </span>

          <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8 tracking-tight">
            The Crunch of <br />
            <span className="text-emerald-500">Global Confidence.</span>
          </h1>

          {/* FIXED: Integrated "smallholding" and "pickled vegetables" updates seamlessly */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
            Empowering 1,200+ smallholding farmers to deliver premium-grade
            gherkins and pickled vegetables to the world’s leading food brands with
            absolute traceability.
          </p>

          <button
            onClick={() => scrollToSection('products')}
            className="group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-emerald-900/40 active:scale-95"
          >
            Explore Our Product Range
            <ArrowRight className="transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40 z-10">
        <ChevronDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default Hero;