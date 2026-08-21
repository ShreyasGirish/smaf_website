import React from 'react';
import { Home, Sparkles, ShieldCheck } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-6">
          <Sparkles size={13} />
          <span>Error 404 • Route Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-serif font-bold text-white mb-4 tracking-tight">
          Lost at <span className="text-emerald-400">Sea?</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-8">
          The specification document or portal corridor you are looking for has been relocated or does not exist on our export server.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto h-12 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition active:scale-95"
          >
            <Home size={15} />
            <span>Return to Main Export Portal</span>
          </a>

          <a
            href="/#contact"
            className="w-full sm:w-auto h-12 px-7 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition active:scale-95"
          >
            <span>Contact Trade Desk</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex items-center justify-center gap-2 text-xs font-mono text-slate-600">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span>Sri Mookambika Agro Foods LLP • Verified Commercial Infrastructure</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;