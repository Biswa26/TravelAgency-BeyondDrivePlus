import React, { useState } from 'react';
import { 
  Users, 
  Fuel, 
  Gauge, 
  Luggage, 
  Shield, 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Filter
} from 'lucide-react';
import { CAR_FLEET, Car } from '../data/travelData';

interface CarFleetProps {
  onSelectCar: (car: Car) => void;
}

export const CarFleet: React.FC<CarFleetProps> = ({ onSelectCar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hatchback', 'Sedan', 'Compact SUV', '7-Seater', 'Premium / 4x4'];

  const filteredCars = selectedCategory === 'All'
    ? CAR_FLEET
    : CAR_FLEET.filter((c) => c.category === selectedCategory);

  const getWhatsAppCarLink = (car: Car) => {
    const text = encodeURIComponent(
      `Hello Beyond Drive+, I want to rent the *${car.name}* (${car.category}).\nDaily: ₹${car.dailyRate}/day | Weekly: ₹${car.weeklyRate}.\nPlease confirm availability.`
    );
    return `https://wa.me/918978006427?text=${text}`;
  };

  return (
    <section id="fleet" className="py-20 bg-[#0b1320] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
              Verified Self-Drive Fleet
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Choose Your Ride For Odisha
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              100% clean, insured, sanitized cars with high ground clearance for temple cities, coastal highways, and rugged hill station ghats.
            </p>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>All vehicles ready for instant airport handover</span>
          </div>
        </div>

        {/* Filter Tabs (Interactive Filter Controls as allowed by skill) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? 'All Cars (8)' : cat}
            </button>
          ))}
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => {
            const weeklySavings = (car.dailyRate * 7) - car.weeklyRate;

            return (
              <div
                key={car.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/30"
              >
                {/* Visual Header with stylized automotive preview and badge */}
                <div className={`relative h-44 bg-gradient-to-br ${car.imageAccent} p-5 flex flex-col justify-between overflow-hidden border-b border-slate-800`}>
                  {/* Subtle Background Geometry */}
                  <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none" />
                  
                  {/* Top Meta */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider bg-slate-950/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/5">
                      {car.category}
                    </span>

                    {car.popular && (
                      <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600/40 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Stylized Vehicle Silhouette & Badging */}
                  <div className="flex flex-col items-center justify-center my-auto z-10">
                    <div className="w-24 h-12 flex items-center justify-center text-slate-400 group-hover:text-orange-400 transition-colors">
                      {/* Stylized Car Vector */}
                      <svg viewBox="0 0 24 24" className="w-20 h-10 fill-current opacity-85" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5z"/>
                        <circle cx="7.5" cy="14.5" r="1.5"/>
                        <circle cx="16.5" cy="14.5" r="1.5"/>
                      </svg>
                    </div>
                    <span className="text-xs text-slate-400 font-mono tracking-wider mt-1">
                      {car.modelYear}
                    </span>
                  </div>

                  {/* Bottom Strip */}
                  <div className="z-10 flex items-center justify-between text-xs text-slate-300 font-medium">
                    <span>Deposit: ₹{car.securityDeposit.toLocaleString('en-IN')}</span>
                    <span>Free {car.freeKmPerDay} KM / Day</span>
                  </div>
                </div>

                {/* Car Details & Specifications */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-orange-400 transition-colors">
                      {car.name}
                    </h3>

                    {/* Spec Grid */}
                    <div className="grid grid-cols-2 gap-2 my-4 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-800/60">
                        <Users className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{car.seats} Passenger Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-800/60">
                        <Gauge className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-800/60">
                        <Fuel className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{car.fuelType}</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-2 rounded bg-slate-800/60">
                        <Luggage className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{car.luggage}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1 mb-5">
                      {car.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Block */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-xs text-slate-400 block">Daily Tariff</span>
                        <div className="text-xl font-black text-white tabular-nums">
                          ₹{car.dailyRate.toLocaleString('en-IN')}
                          <span className="text-xs font-normal text-slate-400">/day</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-orange-400 font-semibold block">
                          Weekly Special (7-Day)
                        </span>
                        <div className="text-base font-bold text-amber-400 tabular-nums">
                          ₹{car.weeklyRate.toLocaleString('en-IN')}
                          <span className="text-[10px] text-emerald-400 ml-1 font-semibold">
                            (Save ₹{weeklySavings})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={getWhatsAppCarLink(car)}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-2 rounded-lg bg-emerald-950/90 border border-emerald-700/60 text-emerald-300 hover:bg-emerald-900/80 transition-colors text-xs font-bold text-center flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onSelectCar(car)}
                        className="py-2.5 px-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors shadow-md shadow-orange-500/20 text-center"
                      >
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
