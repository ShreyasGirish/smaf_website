
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyChooseSMAF from './components/WhyChooseSMAF';
import Sustainability from './components/Sustainability';
import PrakritvaBrand from './components/PrakritvaBrand';
import Products from './components/Products';
import Facility from './components/Facility';
import Quality from './components/Quality';
import Innovation from './components/Innovation';
import GlobalPresence from './components/GlobalPresence';
import Investors from './components/Investors';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-fade');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-600 selection:text-white">
      <Header />
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

        <section id="brand" className="section-fade">
          <PrakritvaBrand />
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

        <section id="innovation" className="section-fade">
          <Innovation />
        </section>

        <section id="global" className="section-fade">
          <GlobalPresence />
        </section>

        <section id="investors" className="section-fade">
          <Investors/>
        </section>

        <section id="leadership" className="section-fade">
          <Leadership />
        </section>
        
        <section id="contact" className="section-fade">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-40 bg-emerald-600 shadow-2xl p-4 rounded-full text-white hover:bg-emerald-700 transition-all duration-300 hidden md:flex items-center justify-center transform hover:scale-110 active:scale-95 border border-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  );
}

export default App;
