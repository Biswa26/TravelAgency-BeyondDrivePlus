import React, { useState } from 'react';
import { 
  Calculator, 
  Car, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  Percent, 
  Sparkles,
  Check
} from 'lucide-react';
import { CAR_FLEET } from '../data/travelData';

interface FareCalculatorProps {
  onBookWithQuote: (quoteDetails: any) => void;
}

export const FareCalculator: React.FC<FareCalculatorProps> = ({ onBookWithQuote }) => {
  const [selectedCarId, setSelectedCarId] = useState<string>(CAR_FLEET[2].id); // Creta default
  const [days, setDays] = useState<number>(7); // Default 7 days to showcase weekly package
  const [pickup, setPickup] = useState<string>('Bhubaneswar Airport (BBI)');
  const [includeUnlimitedKm, setIncludeUnlimitedKm] = useState<boolean>(true);
  const [includeExtraDriver, setIncludeExtraDriver] = useState<boolean>(false);

  const car = CAR_FLEET.find((c) => c.id === selectedCarId) || CAR_FLEET[0];

  // Pricing calculations
  const isWeekly = days >= 7;
  const fullWeeks = Math.floor(days / 7);
  const remainingDays = days % 7;

  // If weekly, use the discounted weekly tariff formula
  let baseRental = 0;
  if (days >= 7) {
    baseRental = (fullWeeks * car.weeklyRate) + (remainingDays * car.dailyRate);
  } else {
    baseRental = days * car.dailyRate;
  }

  // Weekly savings calculation compared to flat daily rate
  const fullDailyCost = days * car.dailyRate;
  const weeklyDiscount = Math.max(0, fullDailyCost - baseRental);

  const addOnsTotal = (includeExtraDriver ? 200 * days : 0);
  const subtotal = baseRental + addOnsTotal;
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const securityDeposit = car.securityDeposit;
  const grandTotalPayable = subtotal + gst;

  const quoteDetails = {
    carName: car.name,
    category: car.category,
    days,
    pickup,
    baseRental,
    weeklyDiscount,
    gst,
    securityDeposit,
    grandTotalPayable,
    includeUnlimitedKm,
    includeExtraDriver,
  };

  const getWhatsAppQuoteUrl = () => {
    const text = encodeURIComponent(
      `Hi Beyond Drive+, here is my estimated trip quote from your website:\n` +
      `🚗 *Vehicle:* ${car.name}\n` +
      `📅 *Duration:* ${days} Days (${isWeekly ? 'Weekly Package Rate Applied' : 'Standard Rate'})\n` +
      `📍 *Pickup:* ${pickup}\n` +
      `💰 *Estimated Fare:* ₹${grandTotalPayable.toLocaleString('en-IN')} (+ ₹${securityDeposit.toLocaleString('en-IN')} refundable deposit)\n` +
      `Please confirm car availability for my dates!`
    );
    return `https://wa.me/918978006427?text=${text}`;
  };

  return (
    <section id="calculator" className="py-20 bg-[#09111c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
            100% Transparent Tariffs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Instant Odisha Rental & Package Estimator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Calculate your exact trip cost with zero hidden surprises. Special discounted weekly package rates automatically apply for 7+ day bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Select Car */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Vehicle
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CAR_FLEET.map((c) => {
                  const isSelected = c.id === selectedCarId;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCarId(c.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-orange-500 bg-orange-950/20 text-white'
                          : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-heading">{c.name.split('/')[0]}</span>
                        <span className="text-[11px] font-semibold text-orange-400 tabular-nums">
                          ₹{c.dailyRate}/d
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {c.category} · {c.transmission}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Rental Duration
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-amber-400 tabular-nums">
                    {days} {days === 1 ? 'Day' : 'Days'}
                  </span>
                  {isWeekly && (
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      Weekly Offer Active!
                    </span>
                  )}
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="14"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />

              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>1 Day</span>
                <span className="text-orange-400 font-bold">7 Days (Weekly Tour)</span>
                <span>14 Days</span>
              </div>
            </div>

            {/* Step 3: Pickup Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Pickup & Handover Point
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-400 pointer-events-none" />
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI) - Handover at Arrivals</option>
                  <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station (Master Canteen)</option>
                  <option value="Sundarapada Head Office">Sundarapada Office (235/1, Royal Villa B)</option>
                  <option value="Puri Grand Road Hub">Puri Town / Sea Beach</option>
                  <option value="Cuttack Hub">Cuttack Link Road</option>
                </select>
              </div>
            </div>

            {/* Step 4: Add-on Checkboxes */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Optional Add-Ons
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 cursor-pointer hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeUnlimitedKm}
                    onChange={(e) => setIncludeUnlimitedKm(e.target.checked)}
                    className="w-4 h-4 rounded text-orange-500 bg-slate-900 border-slate-700 focus:ring-0"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">Unlimited Kilometers Package</span>
                    <span className="text-[11px] text-slate-400">Drive anywhere in Odisha without mileage worries</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400">
                  {isWeekly ? 'FREE with 7-Day Plan' : 'Standard Included'}
                </span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 cursor-pointer hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeExtraDriver}
                    onChange={(e) => setIncludeExtraDriver(e.target.checked)}
                    className="w-4 h-4 rounded text-orange-500 bg-slate-900 border-slate-700 focus:ring-0"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">Additional Verified Co-Driver</span>
                    <span className="text-[11px] text-slate-400">Add 2nd driver insurance authorization</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-300">
                  +₹{200 * days}
                </span>
              </label>
            </div>

          </div>

          {/* Live Quote Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block">
                  Quote Summary
                </span>
                <h3 className="text-xl font-extrabold text-white font-heading mt-0.5">
                  {car.name}
                </h3>
              </div>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded text-slate-300 font-medium">
                {days} Days
              </span>
            </div>

            {/* Line items */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Base Vehicle Tariff ({days} days)</span>
                <span className="font-semibold text-white tabular-nums">
                  ₹{fullDailyCost.toLocaleString('en-IN')}
                </span>
              </div>

              {weeklyDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Weekly Discount Applied
                  </span>
                  <span className="font-bold tabular-nums">
                    -₹{weeklyDiscount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              {includeExtraDriver && (
                <div className="flex justify-between text-slate-300">
                  <span>Additional Co-Driver Coverage</span>
                  <span className="font-semibold text-white tabular-nums">
                    ₹{(200 * days).toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-slate-400">
                <span>Airport Handover & Sanitation</span>
                <span className="text-emerald-400 font-semibold">FREE (₹0)</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Taxes & GST (5%)</span>
                <span className="font-semibold text-white tabular-nums">
                  ₹{gst.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Total Estimated Hire Fare */}
              <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated Rental Total</span>
                  <span className="text-[11px] text-slate-500">Tolls & Fuel as per actuals</span>
                </div>
                <div className="text-2xl font-black text-amber-400 tabular-nums">
                  ₹{grandTotalPayable.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Refundable Security Deposit Box */}
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">100% Refundable Security Deposit</span>
                  <span className="text-slate-400 text-[11px]">Credited back within 2-24 hrs of return</span>
                </div>
                <span className="font-bold text-slate-200 tabular-nums text-sm">
                  ₹{securityDeposit.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppQuoteUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Lock Quote & Inquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onBookWithQuote(quoteDetails)}
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-orange-500/20 text-center"
              >
                Reserve Vehicle Online
              </button>
            </div>

            <div className="text-[11px] text-center text-slate-500">
              Need immediate assistance? Call <a href="tel:8978006427" className="text-orange-400 font-bold hover:underline">+91 8978006427</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
