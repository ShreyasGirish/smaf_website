import React, { useEffect, useState } from 'react';
import Admin from './components/Admin.tsx';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyChooseSMAF from './components/WhyChooseSMAF';
import Sustainability from './components/Sustainability';
import Products from './components/Products';
import Facility from './components/Facility';
import Quality from './components/Quality';

// ✦ Prakritva Brand repositioned to align perfectly with the updated sequence requirements
import PrakritvaBrand from './components/PrakritvaBrand';

// 🟢 MOUNT REQUIREMENT 1: Dynamic Dummy Reviews Grid Loaded Cleanly
import Reviews from './components/Reviews';

import Innovation from './components/Innovation';
import Events from './components/Events';
import GlobalPresence from './components/GlobalPresence';
import Investors from './components/Investors';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 🟢 MOUNT REQUIREMENT 2: Standalone Floating Lab Telemetry Assistant Widget
import LabAssistant from './components/LabAssistant.tsx';

function App() {
  // Tracks the active URL route string natively
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for browser navigation changes smoothly
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const observerOptions = {
      threshold: 0.05, // Lowered threshold guarantees activation on smaller viewports
      rootMargin: '0px 0px -5% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Dynamic safe selector checks for standard fading classes across nodes
    const sections = document.querySelectorAll('.section-fade');
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-600 selection:text-white overflow-x-hidden">
      
      {/* 1. Global Navigation Module */}
      <Header />
      
      {/* Main Structural Flow Stack */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <div className="section-fade">
          <Stats />
        </div>
        
        <section id="about" className="section-fade">
          <About />
        </section>

        <section id="why-smaf" className="section-fade">
          <WhyChooseSMAF />
        </section>

        <section id="sustainability" className="section-fade">
          <Sustainability />
        </section>
        
        <section id="products" className="section-fade">
          <Products />
        </section>
        
        <section id="facility" className="section-fade">
          <Facility />
        </section>
        
        <section id="quality" className="section-fade">
          <Quality />
        </section>

        {/* ✦ REPOSITIONED: Prakritva section mounted immediately after Quality and before Reviews */}
        <section id="brand" className="section-fade">
          <PrakritvaBrand />
        </section>

        {/* 🟢 FIXED PLACEMENT: Reviews Section mounted clean with structural layout visibility */}
        <section id="reviews" className="w-full bg-white relative block">
          <Reviews />
        </section>

        <section id="innovation" className="section-fade">
          <Innovation />
        </section>

        <section id="events" className="section-fade">
          <Events />
        </section>

        <section id="global" className="section-fade">
          <GlobalPresence />
        </section>

        <section id="investors" className="section-fade">
          <Investors />
        </section>

        <section id="leadership" className="section-fade">
          <Leadership />
        </section>
        
        {/* Pinned Contact section with fallback layout stability */}
        <section id="contact" className="w-full relative block">
          <Contact />
        </section>
      </main>
      
      {/* Footer Area */}
      <Footer />
      
      {/* Scroll to Top UI Trigger */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-24 z-40 bg-emerald-600 shadow-2xl p-4 rounded-full text-white hover:bg-emerald-700 transition-all duration-300 hidden md:flex items-center justify-center transform hover:scale-110 active:scale-95 border border-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>

      {/* 🔬 Translucent Glowing Lab Assistant Module */}
      <LabAssistant />

    </div>
  );
}

export default App;