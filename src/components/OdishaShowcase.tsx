import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Navigation, 
  Car, 
  Calendar, 
  ArrowRight, 
  CheckCircle,
  Sun,
  Waves,
  Mountain,
  Landmark
} from 'lucide-react';
import { ODISHA_DESTINATIONS, Destination } from '../data/travelData';

interface OdishaShowcaseProps {
  onPlanTrip: (destination: Destination) => void;
}

export const OdishaShowcase: React.FC<OdishaShowcaseProps> = ({ onPlanTrip }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Temples');

  const categoryIcons = {
    Temples: Landmark,
    Beaches: Waves,
    'Hill Stations': Mountain,
    Heritage: Compass,
  };

  const currentDest = ODISHA_DESTINATIONS.find((d) => d.category === activeCategory) || ODISHA_DESTINATIONS[0];

  return (
    <section id="destinations" className="py-20 bg-[#0b1320] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
            The Land of Wonders
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Iconic Odisha Destinations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            From the sanctum of Lord Jagannath in Puri to the misty peaks of Daringbadi and the dolphin-filled waters of Chilika, drive across Odisha at your own pace.
          </p>
        </div>

        {/* 4 Polaroid-Inspired Category Selectors (Directly matching the flyer) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {ODISHA_DESTINATIONS.map((dest) => {
            const isSelected = dest.category === activeCategory;
            const Icon = categoryIcons[dest.category] || Compass;

            return (
              <button
                key={dest.id}
                onClick={() => setActiveCategory(dest.category)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group ${
                  isSelected
                    ? 'bg-slate-900 border-orange-500 shadow-xl shadow-orange-500/10'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                {/* Polaroid-style photo preview card */}
                <div className={`h-28 rounded-xl mb-3 p-3 flex flex-col justify-between overflow-hidden border ${
                  isSelected 
                    ? 'border-orange-500/40 bg-gradient-to-br from-orange-950/40 via-slate-900 to-slate-950'
                    : 'border-slate-800 bg-gradient-to-br from-slate-800/40 to-slate-950'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      ODISHA CIRCUIT
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-400' : 'text-slate-500'}`} />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black tracking-tight text-white font-heading">
                      {dest.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white font-heading group-hover:text-orange-400 transition-colors">
                  {dest.name}
                </h3>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {dest.distanceFromBhubaneswar}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight of Selected Category */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Content & Highlights */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                <span>{currentDest.category} Circuit</span>
                <span className="text-slate-600">·</span>
                <span>Best: {currentDest.bestTimeToVisit}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {currentDest.subtitle}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentDest.description}
              </p>

              {/* Key Attractions Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Attractions & Spots:
                </div>
                {currentDest.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onPlanTrip(currentDest)}
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-orange-500/20 flex items-center gap-2"
                >
                  <span>Book Rental For {currentDest.category}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/918978006427?text=Hi%20Beyond%20Drive%2B%2C%20I%20am%20planning%20a%20trip%20to%20Odisha%20for%20${encodeURIComponent(currentDest.category)}.%20Please%20guide%20me%20with%20recommended%20car%20and%20rates.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  WhatsApp Road Trip Advice
                </a>
              </div>
            </div>

            {/* Right 5 cols: Driving Route Tips & Vehicle Recommendation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                
                {/* Distance Card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="text-slate-400 font-medium">Distance from Bhubaneswar:</span>
                  <span className="text-white font-bold text-sm tabular-nums">
                    {currentDest.distanceFromBhubaneswar}
                  </span>
                </div>

                {/* Recommended Car Card */}
                <div>
                  <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5" />
                    Recommended Vehicle
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {currentDest.recommendedCar}
                  </div>
                </div>

                {/* Route Advice */}
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-blue-400" />
                    Driving & Highway Condition
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentDest.routeTips}
                  </p>
                </div>

                {/* Best Season */}
                <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Optimal Season: <strong className="text-white">{currentDest.bestTimeToVisit}</strong></span>
                </div>

              </div>

              {/* Local Odisha Hub Card */}
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>We provide free doorstep delivery & pickup at Bhubaneswar Airport, Puri, and Cuttack.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
