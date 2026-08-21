import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Procurement & Logistics',
      question: 'What are your standard Minimum Order Quantities (MOQ) and Incoterms supported?',
      answer: 'Our standard export MOQ is one 20ft Full Container Load (FCL), which accommodates approximately 80 HDPE food-grade barrels (240L / 260L). We support standard maritime Incoterms including FOB (Mormugao / Chennai / Nhava Sheva Ports) and CIF / CFR to any major global destination port.'
    },
    {
      category: 'Packaging & Specifications',
      question: 'What barrel sizes, cut styles, and curing media options are available?',
      answer: 'We supply whole calibrated gherkins (from 300/450 micro-count up to 5/10 grades), sliced coins, and spears. Preservative media options include Natural Vinegar (NV), Acetic Acid (AA), and natural lactic fermentation brine calibrated to buyer pH and acidity parameters.'
    },
    {
      category: 'Regulatory & Clearances',
      question: 'Which international food safety audits and export registrations do you hold?',
      answer: 'Our facility in Ranebennur is certified under FSSC 22000 Version 6 (GFSI benchmarked), USFDA registered (Facility ID: 10921156966), STAR-K Kosher certified, FSSAI Central Export licensed, and APEDA / DGFT authorized.'
    },
    {
      category: 'Production & Lead Times',
      question: 'What is your typical production lead time from PO confirmation to port dispatch?',
      answer: 'Standard export order turnaround is 3 to 5 weeks from purchase order confirmation and specification sign-off. Year-round cured brine inventories allow us to service urgent off-season shipments without disruption.'
    },
    {
      category: 'Private Label & Retail',
      question: 'Do you offer private labeling, retail packing, and custom spice infusions?',
      answer: 'Yes. Beyond bulk industrial drum supply, we offer private label packaging in glass jars and retail pouches through our certified lines, as well as customized Indian spice blends, baby corn, and botanical vinegar formulations.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FCFBF7] border-t border-slate-100 text-left">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* SECTION HEADER */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1 rounded-full mb-4">
            <Sparkles size={13} className="text-emerald-600" />
            <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em]">
              Trade Intelligence & Procurement
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 leading-tight">
            Frequently Asked <br />
            <span className="text-emerald-600">Export Questions</span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
            Essential operational details on volume requirements, Incoterms, packaging formats, and international clearance frameworks.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-emerald-500/40 shadow-lg shadow-emerald-950/5'
                    : 'bg-white/80 border-slate-200/70 hover:border-emerald-300/80 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 md:p-7 text-left flex items-start justify-between gap-4 cursor-pointer bg-transparent border-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 block">
                      {faq.category}
                    </span>
                    <h3 className="text-base md:text-lg font-serif font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 mt-1 ${
                    isOpen ? 'bg-emerald-700 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 border-t border-slate-100 text-xs md:text-sm font-light text-slate-600 leading-relaxed animate-in fade-in duration-300">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* QUICK CONTACT HELP CALLOUT */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-900/60">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-serif font-bold text-white">Require custom acid, salt, or count calibrations?</p>
              <p className="text-[11px] text-emerald-200/80 font-light">Our trade desk provides custom CIF and specification proposals.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 bg-emerald-400 hover:bg-emerald-300 px-5 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            Direct Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;