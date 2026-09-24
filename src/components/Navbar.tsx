import React, { useState } from 'react';
import { Phone, Menu, X, Car as CarIcon, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (initialMode?: 'car' | 'tour', itemId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1320]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 text-slate-100 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white font-black text-lg sm:text-xl tracking-tighter">
              BD+
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight uppercase text-white font-heading">
                BEYOND <span className="text-orange-500">DRIVE+</span>
              </span>
              <span className="text-[9px] tracking-widest text-slate-400 font-medium uppercase -mt-1 hidden sm:block">
                DREAM IT. DRIVE IT.
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#fleet" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Self-Drive Fleet
            </a>
            <a href="#packages" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Weekly Packages
            </a>
            <a href="#destinations" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Odisha Tours
            </a>
            <a href="#calculator" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Fare Calculator
            </a>
            <a href="#reviews" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Reviews
            </a>
            <a href="#contact" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Contact
            </a>
          </nav>

          {/* Nav links for medium to large screens (compact 4 links) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-5 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#fleet" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Fleet
            </a>
            <a href="#packages" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Weekly Tours
            </a>
            <a href="#destinations" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Destinations
            </a>
            <a href="#calculator" className="hover:text-orange-400 transition-colors py-1 whitespace-nowrap">
              Calculator
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/918978006427?text=Hi%20Beyond%20Drive%2B%2C%20I%20want%20to%20inquire%20about%20Odisha%20Tour%20%26%20Self-Drive%20Rental"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 hover:bg-emerald-900/60 hover:text-emerald-300 transition-all text-xs font-semibold whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden md:inline">8978006427</span>
              <span className="md:hidden">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking('car')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-xs transition-all shadow-md shadow-orange-500/25 whitespace-nowrap active:scale-95"
            >
              <CarIcon className="w-3.5 h-3.5" />
              <span>Book Instant</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:8978006427"
              className="p-2 rounded-lg bg-slate-800 text-orange-400 hover:bg-slate-700"
              aria-label="Call Beyond Drive"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0c1626] px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <div className="flex flex-col space-y-1.5 text-sm font-medium text-slate-300">
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Self-Drive Fleet
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Weekly Tour Packages
            </a>
            <a
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Odisha Attractions
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Instant Fare Calculator
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Contact & Address
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/918978006427?text=Hi%20Beyond%20Drive%2B%2C%20I%20want%20to%20rent%20a%20car"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-semibold text-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('car');
              }}
              className="py-2.5 px-2 rounded-lg bg-orange-500 text-white text-xs font-semibold text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
