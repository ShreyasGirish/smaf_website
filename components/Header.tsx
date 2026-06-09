import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* PUBLIC ASSET PATH (Vite & Base-URL Safe for public/images/) */
  const logoImg = `${import.meta.env.BASE_URL}images/smaf-logo.jpg`;

  const navLinks = [
    { name: 'SMAF', id: 'home' },
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Prakritva ✦', id: 'brand', special: true },
    { name: 'Products', id: 'products' },
    { name: 'Facility', id: 'facility' },
    { name: 'Investors', id: 'investors' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'sustainability',
        'brand',
        'products',
        'facility',
        'investors',
        'contact'
      ];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-header shadow-xl py-3 text-slate-900'
          : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="w-full max-w-none px-6 md:px-12 flex justify-between items-center">

        {/* Brand / Logo Group */}
        <div
          className="flex items-center space-x-4 group cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        >
          {/* OUT-OF-THE-BOX VISUAL LAYERED LOGO ECOSYSTEM */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
            
            {/* Outer Decorative Pulses/Rings */}
            <span className="absolute inset-0 rounded-full border border-emerald-500/20 scale-110 group-hover:scale-125 group-hover:border-emerald-500/40 transition-all duration-700 pointer-events-none" />
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/10 group-hover:rotate-45 transition-all duration-1000 ease-out pointer-events-none" />
            
            {/* Main Circle Housing Layer */}
            <div className="w-full h-full rounded-full p-1 bg-white shadow-[0_4px_20px_rgba(16,185,129,0.15)] group-hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] border border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-500 relative z-10 flex items-center justify-center overflow-hidden">
              
              {/* Inner Blend Mask Container to blend away blocky white edges */}
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white mix-blend-multiply">
                <img 
                  src={logoImg} 
                  alt="Sri Mookambika Logo" 
                  className="w-11 h-11 md:w-12 md:h-12 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition duration-500 p-0.5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Dynamic Inner Hover Overlay Sheet */}
              <div className="absolute inset-0 bg-emerald-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            </div>
          </div>

          {/* Label Typography block */}
          <div className="flex flex-col">
            <span
              className={`font-bold leading-none text-lg md:text-xl transition-colors duration-300 tracking-wide ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Sri Mookambika
            </span>

            <span
              className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] mt-1 transition-colors duration-300 ${
                isScrolled
                  ? 'text-emerald-700'
                  : 'text-emerald-400'
              }`}
            >
              Agro Foods LLP
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link: any) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-2 ${
                link.special
                  ? activeSection === link.id
                    ? 'text-amber-500 font-extrabold'
                    : isScrolled
                    ? 'text-slate-600 hover:text-amber-600'
                    : 'text-white/90 hover:text-amber-400'
                  : activeSection === link.id
                  ? 'text-emerald-500 font-extrabold'
                  : isScrolled
                  ? 'text-slate-600 hover:text-emerald-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}

              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left ${
                  link.special ? 'bg-amber-500' : 'bg-emerald-500'
                } ${
                  activeSection === link.id
                    ? 'scale-x-100'
                    : 'scale-x-0'
                }`}
              />
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-emerald-500/30 active:scale-95 ml-4"
          >
            Inquire Now
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            isScrolled
              ? 'bg-slate-100 text-slate-900'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Layer */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen
            ? 'max-h-[700px] border-t border-slate-100'
            : 'max-h-0'
        }`}
      >
        <div className="py-8 px-6 flex flex-col space-y-4">
          {navLinks.map((link: any) => (
            <button
              key={link.name}
              className={`text-lg font-bold pb-3 border-b border-slate-100 flex justify-between items-center text-left ${
                link.special
                  ? activeSection === link.id
                    ? 'text-amber-600'
                    : 'text-slate-800'
                  : activeSection === link.id
                  ? 'text-emerald-600'
                  : 'text-slate-800'
              }`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}

              {activeSection === link.id && (
                <div
                  className={`w-2 h-2 rounded-full ${
                    link.special ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                />
              )}
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-600 text-white px-5 py-4 rounded-2xl text-center font-bold shadow-lg hover:bg-emerald-700 transition"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;