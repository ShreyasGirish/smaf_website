import React, { useState, useEffect } from 'react';
import { Send, Phone } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the Hero section (500px)
      // and hide near the bottom when the user reaches the Contact form
      const contactEl = document.getElementById('contact');
      const contactTop = contactEl ? contactEl.offsetTop - 400 : document.body.scrollHeight;
      const scrollY = window.scrollY;

      if (scrollY > 500 && scrollY < contactTop) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/95 backdrop-blur-lg border-t border-emerald-500/30 flex items-center justify-between gap-3 md:hidden animate-in slide-in-from-bottom duration-300">
      <a
        href="tel:+919845320088"
        className="flex-1 h-12 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition"
      >
        <Phone size={14} className="text-emerald-400" />
        <span>Direct Call</span>
      </a>

      <button
        onClick={scrollToContact}
        className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 active:scale-95 transition cursor-pointer border-none"
      >
        <span>Trade Desk</span>
        <Send size={13} />
      </button>
    </div>
  );
};

export default StickyCTA;