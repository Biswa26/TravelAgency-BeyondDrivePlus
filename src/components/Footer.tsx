import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Car, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#070d17] border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-black text-xl tracking-tighter">
                BD+
              </div>
              <div>
                <span className="text-xl font-black tracking-tight uppercase text-white font-heading">
                  BEYOND <span className="text-orange-500">DRIVE+</span>
                </span>
                <div className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
                  DREAM IT. DRIVE IT.
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Odisha’s premier self-drive car rental and curated weekly tour packages provider. Explore Puri, Konark, Daringbadi, Chilika, and beyond with freedom, safety, and transparent pricing.
            </p>

            <div className="pt-2 text-xs font-semibold text-orange-400 uppercase tracking-widest">
              YOUR JOURNEY · OUR PRIORITY
            </div>

            {/* Instant Contact Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://wa.me/918978006427"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: 8978006427</span>
              </a>
              <a
                href="tel:8978006427"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Call: 8978006427</span>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-heading">
              Our Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#fleet" className="hover:text-orange-400 transition-colors">
                  Self-Drive Cars
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-orange-400 transition-colors">
                  Weekly Tour Packages
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-orange-400 transition-colors">
                  Odisha Tourist Circuits
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-orange-400 transition-colors">
                  Tariff Calculator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-heading">
              Delivery Hubs
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>BBI Airport Arrivals</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Bhubaneswar Station</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Sundarapada Hub</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Puri Beach Hub</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Cuttack Link Road</span>
              </li>
            </ul>
          </div>

          {/* Official Contact & Head Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-heading">
              Head Office Contact
            </h4>
            
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Beyond Drive+</div>
                  <div>235/1, Royal Villa B, Vaishnomata Vihar Phase I, Sundarapada, Bhubaneswar 751002, Odisha</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:8978006427" className="hover:text-orange-400 font-semibold text-white">
                  +91 8978006427
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:beyonddriveplus@gmail.com" className="hover:text-orange-400">
                  beyonddriveplus@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-emerald-400 font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Operational 24 Hours / 7 Days</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Quiet Bar */}
      <div className="border-t border-slate-800/80 bg-[#050a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Beyond Drive+. All rights reserved. Dream It. Drive It.
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Valid Driving License & ID required for Self-Drive</span>
            <span>·</span>
            <span>All vehicles GPS enabled & commercially insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
