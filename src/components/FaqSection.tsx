import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/travelData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0b1320] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Got Questions About Odisha Tours?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Everything you need to know about renting a self-drive car or booking our weekly holiday circuits.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'border-orange-500/60 bg-slate-900/90 shadow-lg'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-orange-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help strip */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Have a unique question not listed here? Call our 24/7 travel desk at{' '}
          <a href="tel:8978006427" className="text-orange-400 font-bold hover:underline">
            +91 8978006427
          </a>{' '}
          or email us at{' '}
          <a href="mailto:beyonddriveplus@gmail.com" className="text-orange-400 font-bold hover:underline">
            beyonddriveplus@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
};
