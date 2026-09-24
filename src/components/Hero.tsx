import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Car as CarIcon, 
  Compass, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CAR_FLEET, WEEKLY_TOUR_PACKAGES } from '../data/travelData';

interface HeroProps {
  onOpenBooking: (initialMode: 'car' | 'tour', itemId?: string, pickup?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'car' | 'package'>('car');

  // Car rental fast form state
  const [pickupLocation, setPickupLocation] = useState('Bhubaneswar Airport (BBI)');
  const [pickupDate, setPickupDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 8); // 7-day default for weekly package!
    return d.toISOString().split('T')[0];
  });
  const [selectedCarCategory, setSelectedCarCategory] = useState('all');

  // Package fast form state
  const [selectedPackageId, setSelectedPackageId] = useState(WEEKLY_TOUR_PACKAGES[0].id);
  const [packageTravelStyle, setPackageTravelStyle] = useState<'self-drive' | 'with-driver'>('self-drive');

  const handleCarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking('car', selectedCarCategory === 'all' ? undefined : selectedCarCategory, pickupLocation);
  };

  const handlePackageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking('tour', selectedPackageId, pickupLocation);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background Ambient Glows & Subtle Automotive Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1c31] via-[#09111c] to-[#070d17] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - Strict Anti-Slop Zero-Pill Text */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-orange-400 tracking-wider uppercase mb-4">
          <span>Bhubaneswar</span>
          <span className="text-slate-600">·</span>
          <span>Puri</span>
          <span className="text-slate-600">·</span>
          <span>Konark</span>
          <span className="text-slate-600">·</span>
          <span>Daringbadi</span>
          <span className="text-slate-600">·</span>
          <span>Chilika Lake</span>
          <span className="text-slate-600">·</span>
          <span className="text-emerald-400 font-bold">24/7 Airport Delivery</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Marquee Copy & Value Propositions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading text-balance">
              Explore Odisha More. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Spend Less.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience the freedom of premium <strong className="text-white font-semibold">Self-Drive Car Rentals</strong> or discover hand-crafted <strong className="text-white font-semibold">7-Day Weekly Tour Packages</strong> across sacred temples, pristine blue-flag beaches, misty hill stations, and tranquil lagoons.
            </p>

            {/* Micro Highlights directly honoring the flyer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-orange-400 font-bold text-base sm:text-lg tabular-nums">25+</div>
                <div className="text-xs text-slate-400 font-medium">Cars in Fleet</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-orange-400 font-bold text-base sm:text-lg tabular-nums">₹1,299<span className="text-xs font-normal text-slate-400">/day</span></div>
                <div className="text-xs text-slate-400 font-medium">Starting Price</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-orange-400 font-bold text-base sm:text-lg tabular-nums">30% Off</div>
                <div className="text-xs text-slate-400 font-medium">Weekly Discount</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-emerald-400 font-bold text-base sm:text-lg tabular-nums">24 / 7</div>
                <div className="text-xs text-slate-400 font-medium">Flexible Delivery</div>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              <a 
                href="tel:8978006427"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                <span>Call Directly: +91 8978006427</span>
              </a>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Head Office: Sundarapada, Bhubaneswar</span>
              </div>
            </div>

            {/* Verified Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Insured Fleet
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Doorstep BBI Airport Pickup
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Fast KYC & Refund
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Widget with Dual Modes */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/50">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-200">
                    Instant Booking & Rates
                  </span>
                </div>
                <span className="text-xs text-orange-400 font-semibold">
                  Zero Booking Fee
                </span>
              </div>

              {/* Segmented Control Tabs */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-slate-800/80 rounded-xl mb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab('car')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === 'car'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CarIcon className="w-4 h-4" />
                  <span>Self-Drive Car</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('package')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === 'package'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>Weekly Packages</span>
                </button>
              </div>

              {/* Form 1: Self Drive Car Rental */}
              {activeTab === 'car' ? (
                <form onSubmit={handleCarSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Pickup & Return Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-400 pointer-events-none" />
                      <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI) Terminal</option>
                        <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station (Master Canteen)</option>
                        <option value="Sundarapada Head Office">Sundarapada Hub (Royal Villa B)</option>
                        <option value="Patia / Infocity Hub">Patia / Infocity / KIIT Road</option>
                        <option value="Puri Grand Road Hub">Puri Town / Golden Beach Hub</option>
                        <option value="Cuttack Link Road">Cuttack Link Road</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Return Date
                      </label>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        min={pickupDate}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Vehicle Preference
                    </label>
                    <select
                      value={selectedCarCategory}
                      onChange={(e) => setSelectedCarCategory(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="all">Any Available Car (Best Deal)</option>
                      <option value="Hatchback">Hatchback (Swift / Tiago - ₹1,299/day)</option>
                      <option value="Sedan">Sedan (Dzire / Aura - ₹1,599/day)</option>
                      <option value="Compact SUV">Compact SUV (Creta / Brezza - ₹1,899/day)</option>
                      <option value="7-Seater">7-Seater Family (Ertiga / Innova - ₹2,399/day)</option>
                      <option value="Premium / 4x4">Rugged 4x4 / Luxury (Thar / Compass - ₹3,199/day)</option>
                    </select>
                  </div>

                  <div className="p-3 rounded-lg bg-orange-950/30 border border-orange-800/40 text-xs text-orange-200 flex items-center justify-between">
                    <span>Weekly 7-Day Plan applies automatically:</span>
                    <strong className="text-orange-400 font-bold">Up to 30% OFF</strong>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Check Car Availability & Rates</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                /* Form 2: Weekly Tour Package */
                <form onSubmit={handlePackageSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Select 7-Day Curated Odisha Circuit
                    </label>
                    <select
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                    >
                      {WEEKLY_TOUR_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} ({pkg.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Travel Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPackageTravelStyle('self-drive')}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                          packageTravelStyle === 'self-drive'
                            ? 'border-orange-500 bg-orange-950/30 text-white'
                            : 'border-slate-700 bg-slate-800/80 text-slate-400'
                        }`}
                      >
                        <div className="font-bold text-white">With Self-Drive SUV</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Freedom to drive yourself</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPackageTravelStyle('with-driver')}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                          packageTravelStyle === 'with-driver'
                            ? 'border-orange-500 bg-orange-950/30 text-white'
                            : 'border-slate-700 bg-slate-800/80 text-slate-400'
                        }`}
                      >
                        <div className="font-bold text-white">With Chauffeur & Stays</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Relaxed guided road trip</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Arrival Hub in Bhubaneswar
                    </label>
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI)</option>
                      <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station</option>
                      <option value="Sundarapada Head Office">Sundarapada Office</option>
                      <option value="Puri Hotel / Beach">Puri Pickup</option>
                    </select>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200">
                    Includes: Sanitized vehicle, 24/7 road assist, dolphin cruise & VIP temple darshan assistance.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>View Itinerary & WhatsApp Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
