import React, { useState, useEffect } from 'react';
import { 
  X, 
  Car, 
  Compass, 
  Calendar, 
  MapPin, 
  Phone, 
  User, 
  Mail, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2 
} from 'lucide-react';
import { CAR_FLEET, WEEKLY_TOUR_PACKAGES, Car as CarType, TourPackage } from '../data/travelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'car' | 'tour';
  initialItemId?: string;
  initialPickup?: string;
  prefilledQuote?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialMode,
  initialItemId,
  initialPickup,
  prefilledQuote,
}) => {
  const [mode, setMode] = useState<'car' | 'tour'>(initialMode);
  const [selectedCarId, setSelectedCarId] = useState<string>(
    initialMode === 'car' && initialItemId ? initialItemId : CAR_FLEET[2].id
  );
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    initialMode === 'tour' && initialItemId ? initialItemId : WEEKLY_TOUR_PACKAGES[0].id
  );

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pickupLocation, setPickupLocation] = useState(
    initialPickup || 'Bhubaneswar Airport (BBI)'
  );
  
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [endDate, setEndDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 8);
    return d.toISOString().split('T')[0];
  });

  const [hasLicense, setHasLicense] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    setMode(initialMode);
    if (initialMode === 'car' && initialItemId) {
      setSelectedCarId(initialItemId);
    }
    if (initialMode === 'tour' && initialItemId) {
      setSelectedPackageId(initialItemId);
    }
    if (initialPickup) {
      setPickupLocation(initialPickup);
    }
    setSubmitted(false);
  }, [initialMode, initialItemId, initialPickup, isOpen]);

  if (!isOpen) return null;

  const currentCar = CAR_FLEET.find((c) => c.id === selectedCarId) || CAR_FLEET[0];
  const currentPackage = WEEKLY_TOUR_PACKAGES.find((p) => p.id === selectedPackageId) || WEEKLY_TOUR_PACKAGES[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert('Please enter your contact phone number');
      return;
    }

    const itemTitle = mode === 'car' ? `Car: ${currentCar.name} (${currentCar.category})` : `Weekly Tour: ${currentPackage.name}`;
    const totalAmount = mode === 'car' ? currentCar.weeklyRate : currentPackage.basePriceSelfDrive;
    const securityDeposit = mode === 'car' ? currentCar.securityDeposit : 5000;

    // Persist to backend database API
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullName || 'Guest Traveler',
        phoneNumber,
        email,
        bookingType: mode === 'car' ? 'Car' : 'Tour',
        itemId: mode === 'car' ? currentCar.id : currentPackage.id,
        itemName: itemTitle,
        pickupLocation,
        startDate,
        endDate,
        totalAmount,
        securityDeposit,
      }),
    }).catch((err) => console.error('Error recording booking in database:', err));

    const text = encodeURIComponent(
      `Hello Beyond Drive+, I want to confirm a booking reservation:\n` +
      `📌 *Booking Type:* ${itemTitle}\n` +
      `👤 *Name:* ${fullName || 'Guest'}\n` +
      `📞 *Phone:* ${phoneNumber}\n` +
      `✉️ *Email:* ${email || 'N/A'}\n` +
      `📍 *Pickup Location:* ${pickupLocation}\n` +
      `📅 *Dates:* ${startDate} to ${endDate}\n` +
      `Please confirm car availability and send me payment details.`
    );

    window.open(`https://wa.me/918978006427?text=${text}`, '_blank');
    
    // Set success screen
    const ref = 'BD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert('Please enter your contact phone number');
      return;
    }

    const itemTitle = mode === 'car' ? `Car: ${currentCar.name} (${currentCar.category})` : `Weekly Tour: ${currentPackage.name}`;
    const totalAmount = mode === 'car' ? currentCar.weeklyRate : currentPackage.basePriceSelfDrive;
    const securityDeposit = mode === 'car' ? currentCar.securityDeposit : 5000;

    // Persist to backend database API
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullName || 'Guest Traveler',
        phoneNumber,
        email,
        bookingType: mode === 'car' ? 'Car' : 'Tour',
        itemId: mode === 'car' ? currentCar.id : currentPackage.id,
        itemName: itemTitle,
        pickupLocation,
        startDate,
        endDate,
        totalAmount,
        securityDeposit,
      }),
    }).catch((err) => console.error('Error recording booking in database:', err));

    const ref = 'BD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white font-heading">
              Booking Request Received!
            </h3>

            <div className="text-xs text-slate-400">
              Booking Reference Number:
              <div className="text-lg font-mono font-bold text-orange-400 mt-1">
                {bookingRef}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Our Bhubaneswar reservations team is reviewing your vehicle allocation for <strong className="text-white">{pickupLocation}</strong>. We will message or call you on <strong className="text-white">{phoneNumber}</strong> in less than 15 minutes.
            </p>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left text-xs text-slate-300 space-y-2">
              <div className="font-bold text-white uppercase text-[11px] tracking-wider text-orange-400">
                Key Reminders For Handover:
              </div>
              <div>• Original Driving License & Aadhaar card required at pickup</div>
              <div>• 100% Refundable deposit processed back upon vehicle return</div>
              <div>• 24/7 Helpline: +91 8978006427</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/918978006427?text=Hi%20Beyond%20Drive%2B%2C%20following%20up%20on%20my%20Booking%20Ref%3A%20${bookingRef}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Track on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                Fast Reservation Desk
              </div>
              <h3 className="text-2xl font-black text-white font-heading mt-1">
                Reserve With Beyond Drive+
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Zero advance booking fees. Pay on vehicle delivery.
              </p>
            </div>

            {/* Mode Selector */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-800 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setMode('car')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  mode === 'car'
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Self-Drive Car</span>
              </button>
              <button
                type="button"
                onClick={() => setMode('tour')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  mode === 'tour'
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Weekly Tour</span>
              </button>
            </div>

            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              
              {/* Vehicle / Tour Pick */}
              {mode === 'car' ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Selected Vehicle
                  </label>
                  <select
                    value={selectedCarId}
                    onChange={(e) => setSelectedCarId(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    {CAR_FLEET.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} — ₹{c.dailyRate}/day (Weekly: ₹{c.weeklyRate})
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Selected 7-Day Tour Circuit
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    {WEEKLY_TOUR_PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.duration})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Biswajit Behera"
                      className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 8978006427"
                      className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Pickup Point */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Pickup Hub in Bhubaneswar / Odisha
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-400" />
                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="Bhubaneswar Airport (BBI)">Bhubaneswar Airport (BBI) - Terminal Gate</option>
                    <option value="Bhubaneswar Railway Station">Bhubaneswar Railway Station</option>
                    <option value="Sundarapada Head Office">Sundarapada Office (Royal Villa B)</option>
                    <option value="Puri Grand Road Hub">Puri Town / Beach Hub</option>
                    <option value="Cuttack Link Road">Cuttack Link Road</option>
                  </select>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              {/* License acknowledgement */}
              <label className="flex items-start gap-2.5 pt-1 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasLicense}
                  onChange={(e) => setHasLicense(e.target.checked)}
                  className="w-4 h-4 rounded text-orange-500 bg-slate-800 border-slate-700 mt-0.5"
                  required
                />
                <span>
                  I confirm that I or my designated driver hold a valid Driving License (min 1 year old) & original Govt ID for KYC verification.
                </span>
              </label>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  Submit Callback Request
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
