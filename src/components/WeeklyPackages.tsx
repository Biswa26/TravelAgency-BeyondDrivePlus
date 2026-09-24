import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Check, 
  Car, 
  ChevronRight, 
  ShieldCheck, 
  MessageCircle, 
  Sparkles,
  Info,
  Users
} from 'lucide-react';
import { WEEKLY_TOUR_PACKAGES, TourPackage, TourDay } from '../data/travelData';

interface WeeklyPackagesProps {
  onSelectPackage: (pkg: TourPackage, mode: 'self-drive' | 'with-driver') => void;
}

export const WeeklyPackages: React.FC<WeeklyPackagesProps> = ({ onSelectPackage }) => {
  const [activePackageId, setActivePackageId] = useState<string>(WEEKLY_TOUR_PACKAGES[0].id);
  const [packageMode, setPackageMode] = useState<'self-drive' | 'with-driver'>('self-drive');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const currentPackage = WEEKLY_TOUR_PACKAGES.find((p) => p.id === activePackageId) || WEEKLY_TOUR_PACKAGES[0];

  const getWhatsAppPackageLink = (pkg: TourPackage) => {
    const modeText = packageMode === 'self-drive' ? 'Self-Drive SUV option' : 'Chauffeured + Hotel Stays option';
    const price = packageMode === 'self-drive' ? pkg.basePriceSelfDrive : pkg.basePriceWithDriverAndStays;
    const text = encodeURIComponent(
      `Hello Beyond Drive+, I want to book the 7-Day Weekly Tour Package:\n*${pkg.name}*\nMode: ${modeText}\nBase Price: ₹${price.toLocaleString('en-IN')}\nPlease send me detailed quotation and available dates.`
    );
    return `https://wa.me/918978006427?text=${text}`;
  };

  return (
    <section id="packages" className="py-20 bg-[#09111c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
              Existing Weekly Tour Packages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              7-Day Odisha Road Expeditions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore More. Spend Less. Complete 7-Day / 6-Night circuits crafted with self-drive freedom or private chauffeured stays.
            </p>
          </div>

          {/* Travel Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setPackageMode('self-drive')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                packageMode === 'self-drive'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>With Self-Drive SUV</span>
            </button>
            <button
              onClick={() => setPackageMode('with-driver')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                packageMode === 'with-driver'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>With Chauffeur & Stays</span>
            </button>
          </div>
        </div>

        {/* Package Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {WEEKLY_TOUR_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === activePackageId;
            return (
              <button
                key={pkg.id}
                onClick={() => {
                  setActivePackageId(pkg.id);
                  setExpandedDay(1);
                }}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'border-orange-500 bg-slate-900 shadow-lg shadow-orange-500/10'
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-500" />
                )}
                <div className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider mb-1">
                  {pkg.duration}
                </div>
                <h4 className="text-sm font-bold text-white font-heading line-clamp-2">
                  {pkg.name}
                </h4>
                <div className="mt-3 text-xs text-slate-400">
                  From{' '}
                  <span className="text-amber-400 font-bold tabular-nums">
                    ₹{(packageMode === 'self-drive' ? pkg.basePriceSelfDrive : pkg.basePriceWithDriverAndStays).toLocaleString('en-IN')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Package Card & Interactive Day-by-Day Timeline */}
        <div className="bg-slate-900/95 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
          
          {/* Top Banner Info */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border-b border-slate-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-orange-400 font-semibold uppercase tracking-wider">
                  <span>{currentPackage.category}</span>
                  <span className="text-slate-600">·</span>
                  <span>{currentPackage.duration}</span>
                  <span className="text-slate-600">·</span>
                  <span>Pickup: {currentPackage.pickupDrop}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {currentPackage.name}
                </h3>
                <p className="text-sm text-slate-300 max-w-3xl">
                  {currentPackage.tagline}
                </p>

                {/* Route stops breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-300">
                  <span className="font-semibold text-slate-400">Route Highlights:</span>
                  {currentPackage.routeOverview.map((stop, i) => (
                    <React.Fragment key={i}>
                      <span className="bg-slate-800 px-2 py-0.5 rounded text-white font-medium">
                        {stop}
                      </span>
                      {i < currentPackage.routeOverview.length - 1 && (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Price & Action Box */}
              <div className="lg:text-right p-5 rounded-2xl bg-slate-950/80 border border-slate-800 min-w-[280px]">
                <div className="text-xs text-slate-400">
                  {packageMode === 'self-drive' ? 'Total Self-Drive SUV Package' : 'All-Inclusive Stays & Car'}
                </div>
                <div className="text-3xl font-black text-amber-400 tabular-nums my-1">
                  ₹{(packageMode === 'self-drive' ? currentPackage.basePriceSelfDrive : currentPackage.basePriceWithDriverAndStays).toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mb-3">
                  ✓ Unlimited KMs · Zero Toll Stress
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={getWhatsAppPackageLink(currentPackage)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectPackage(currentPackage, packageMode)}
                    className="w-full py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors"
                  >
                    Book This 7-Day Tour
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Day-by-Day Itinerary Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            
            {/* Left 7 Columns: Day by Day Accordion */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>Day-by-Day Comprehensive Itinerary</span>
              </h4>

              {currentPackage.days.map((day: TourDay) => {
                const isOpen = expandedDay === day.day;
                return (
                  <div
                    key={day.day}
                    className={`border rounded-xl transition-all overflow-hidden ${
                      isOpen
                        ? 'border-orange-500/60 bg-slate-800/80 shadow-md'
                        : 'border-slate-800/90 bg-slate-900/60 hover:border-slate-700'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedDay(isOpen ? null : day.day)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black tabular-nums ${
                          isOpen ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300'
                        }`}>
                          D{day.day}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white font-heading">
                            {day.title}
                          </h5>
                          <div className="text-xs text-orange-400/90 flex items-center gap-2 mt-0.5">
                            <MapPin className="w-3 h-3" />
                            <span>{day.location}</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-slate-400">{day.distance}</span>
                          </div>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-90 text-orange-400' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-slate-700/60 space-y-2.5">
                        <div className="space-y-1.5">
                          {day.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                          <span className="font-semibold text-slate-300">Recommended Night Stay:</span>
                          <span>{day.stay}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right 5 Columns: Inclusions & Travel Advisory */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Inclusions Card */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  What Is Included
                </h4>

                <div className="space-y-2">
                  {currentPackage.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Exclusions
                  </h5>
                  <div className="space-y-1.5">
                    {currentPackage.exclusions.map((exc, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span>{exc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom Package Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-950/30 to-amber-950/20 border border-orange-500/30 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  Need a Custom Odisha Route?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Want to combine Daringbadi with Puri, or add Gopalpur-on-sea and Chilika dolphin safari? We customize custom itineraries with no planning fees.
                </p>
                <a
                  href="https://wa.me/918978006427?text=Hi%20Beyond%20Drive%2B%2C%20I%20want%20a%20customized%20Odisha%20weekly%20tour%20package"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300"
                >
                  <span>Chat With Our Odisha Trip Specialist</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
