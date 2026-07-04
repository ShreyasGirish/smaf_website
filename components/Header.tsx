import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Award, Users, ShieldAlert, Calendar, HelpCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const logoImg = `${import.meta.env.BASE_URL}images/smaf-logo.jpg`;

  // Core High-Level Top Direct Links
  const mainNavLinks = [
    { name: 'SMAF', id: 'home' },
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Products', id: 'products' },
    { name: 'Facility', id: 'facility' },
    { name: 'Prakritva ✦', id: 'brand', special: true },
    { name: 'Investors', id: 'investors' }
  ];

  // Innovative Dropdown Cluster Mapping (Groups remaining technical components safely)
  const operationDropdownLinks = [
    { name: 'Quality Matrix', id: 'quality', sub: 'Certifications & QA', icon: <ShieldAlert size={14} /> },
    { name: 'Social Events', id: 'events', sub: 'Sustainability & CSR', icon: <Calendar size={14} /> },
    { name: 'Leadership Squad', id: 'leadership', sub: 'Board Management', icon: <Users size={14} /> },
     ];

  // Compile full array map for absolute screen position calculations
  const allSectionIds = [
    'home',
    'sustainability',
    'products',
    'facility',
    'brand',
    'investors',
    'quality',
    'events',
    'leadership',
    'why-choose-smaf',
    'contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 140;

      for (const section of allSectionIds) {
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

    // Close inner dropdown if clicking outside the active bounding wrapper box
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
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
    setDesktopDropdownOpen(false);
  };

  // Check if active viewport target belongs to clustered sub-modules
  const isDropdownActive = operationDropdownLinks.some(link => activeSection === link.id);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3 text-slate-900 border-b border-slate-200/50'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="w-full max-w-none px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO WRAP MODULE */}
        <div
          className="flex items-center space-x-4 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
            <span className="absolute inset-0 rounded-full border border-emerald-500/20 scale-110 group-hover:scale-125 group-hover:border-emerald-500/40 transition-all duration-700 pointer-events-none" />
            <div className="w-full h-full rounded-full bg-white shadow-[0_4px_20px_rgba(16,185,129,0.12)] border border-slate-200/60 overflow-hidden flex items-center justify-center p-0.5">
              <img 
                src={logoImg} 
                alt="Sri Mookambika Leaf Symbol" 
                className="w-full h-full object-contain p-0.5 mix-blend-multiply"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center text-left">
            <h1 className="font-serif font-bold text-base md:text-lg tracking-wide leading-none">
              <span className={isScrolled ? 'text-slate-900' : 'text-white'}>SRI MOOKAMBIKA AGRO FOODS LLP</span>
            </h1>
            <span className={`text-[9px] font-sans font-semibold uppercase tracking-[0.22em] mt-1.5 ${isScrolled ? 'text-slate-500' : 'text-emerald-300'}`}>
              Natural • Nutritious • Trusted
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION INTERFACE */}
        <nav className="hidden lg:flex space-x-7 items-center">
          {mainNavLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-2 ${
                link.special
                  ? activeSection === link.id ? 'text-amber-500 font-extrabold' : isScrolled ? 'text-slate-600 hover:text-amber-600' : 'text-white/90 hover:text-amber-400'
                  : activeSection === link.id ? 'text-emerald-600 font-extrabold' : isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left ${link.special ? 'bg-amber-500' : 'bg-emerald-500'} ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}

          {/* INNOVATIVE DROPDOWN CONTAINER POOL */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all py-2 flex items-center gap-1.5 ${
                isDropdownActive
                  ? 'text-emerald-600 font-extrabold'
                  : isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/90 hover:text-white'
              }`}
            >
              <span>Operations Hub</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* FLYOUT GLASSMORPHIC DRAWER PANEL */}
            <div className={`absolute right-0 mt-3 w-64 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-2xl transition-all duration-300 origin-top-right p-2 ${
              desktopDropdownOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}>
              {operationDropdownLinks.map((subLink) => (
                <button
                  key={subLink.name}
                  onClick={() => scrollToSection(subLink.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 group/item ${
                    activeSection === subLink.id ? 'bg-emerald-900/40 text-emerald-400' : 'hover:bg-white/[0.04] text-slate-300 hover:text-white'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg border transition-colors ${activeSection === subLink.id ? 'bg-emerald-950 border-emerald-800 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-500 group-hover/item:text-emerald-400 group-hover/item:border-emerald-900'}`}>
                    {subLink.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-bold tracking-wide">{subLink.name}</span>
                    <span className="block text-[9px] font-mono tracking-wider text-slate-500 uppercase mt-0.5">{subLink.sub}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-emerald-600/20 active:scale-95 ml-2"
          >
            Inquire Now
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          className={`lg:hidden p-2 rounded-xl ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE INTERACTIVE FULL-ACCORDION LISTING */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-y-auto max-h-[calc(100vh-80px)] ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="py-6 px-6 flex flex-col space-y-3">
          {/* Main Group Links */}
          {mainNavLinks.map((link) => (
            <button
              key={link.name}
              className={`text-base font-bold pb-2 border-b border-slate-100 text-left ${activeSection === link.id ? link.special ? 'text-amber-600' : 'text-emerald-600' : 'text-slate-800'}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}

          {/* Sub-Group Section Label Badge */}
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 pt-2 pb-1">
            Operations & Metrics Hub
          </div>

          {/* Dropdown Elements listed explicitly sequentially for easy vertical scrolling access */}
          <div className="grid grid-cols-2 gap-2 pb-4">
            {operationDropdownLinks.map((subLink) => (
              <button
                key={subLink.name}
                onClick={() => scrollToSection(subLink.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  activeSection === subLink.id ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-100 text-slate-700'
                }`}
              >
                <span className="text-slate-400 mb-2">{subLink.icon}</span>
                <span className="text-xs font-bold tracking-tight">{subLink.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-600 text-white py-3.5 rounded-xl text-center font-bold shadow-md"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;