import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingContactBar: React.FC = () => {
  return (
    <aside 
      aria-label="Instant booking and support channels"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:gap-3"
    >
      {/* Call button */}
      <a
        href="tel:8978006427"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 shadow-xl shadow-black/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        title="Call Beyond Drive+ Support"
      >
        <Phone className="w-4 h-4 text-orange-400" />
        <span className="hidden sm:inline">8978006427</span>
      </a>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/918978006427?text=Hi%20Beyond%20Drive%2B%2C%20I%20want%20to%20inquire%20about%20Self-Drive%20Car%20Rental%20or%20Weekly%20Odisha%20Tour%20Package"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-950/60 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};
