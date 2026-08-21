import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyChooseSMAF from './components/WhyChooseSMAF';
import Sustainability from './components/Sustainability';
import Products from './components/Products';
import Facility from './components/Facility';
import Quality from './components/Quality';
import PrakritvaBrand from './components/PrakritvaBrand';
import Innovation from './components/Innovation';
import Events from './components/Events';
import GlobalPresence from './components/GlobalPresence';
import Investors from './components/Investors';
import FAQ from './components/FAQ';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LabAssistant from './components/LabAssistant';
import NotFound from './components/NotFound';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Normalize base paths for local dev, GitHub Pages, and production domains
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedPath = currentPath.replace(new RegExp(`^${basePath}`), '/');
  const validPaths = ['/', '', '/index.html'];
  const is404 = !validPaths.includes(normalizedPath);

  if (is404) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-600 selection:text-white overflow-x-hidden">
      
      {/* Global Navigation */}
      <Header />
      
      {/* Main Structural Flow Stack */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <div>
          <Stats />
        </div>
        
        <section id="about">
          <About />
        </section>

        <section id="why-smaf">
          <WhyChooseSMAF />
        </section>

        <section id="sustainability">
          <Sustainability />
        </section>
        
        <section id="products">
          <Products />
        </section>
        
        <section id="facility">
          <Facility />
        </section>
        
        <section id="quality">
          <Quality />
        </section>

        <section id="brand">
          <PrakritvaBrand />
        </section>

        <section id="innovation">
          <Innovation />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="global">
          <GlobalPresence />
        </section>

        <section id="investors">
          <Investors />
        </section>
  
        <section id="faq">
          <FAQ />
        </section>

        <section id="leadership">
          <Leadership />
        </section>
        
        <section id="contact" className="w-full relative block">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Trigger */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-24 z-40 bg-emerald-600 shadow-2xl p-4 rounded-full text-white hover:bg-emerald-700 transition-all duration-300 hidden md:flex items-center justify-center transform hover:scale-110 active:scale-95 border border-white/20 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>

      {/* Sticky Mobile CTA Bar */}
      <StickyCTA />

      {/* Floating Lab Assistant */}
      <LabAssistant />

    </div>
  );
}

export default App;