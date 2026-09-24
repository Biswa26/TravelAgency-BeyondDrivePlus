import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyFeatures } from './components/KeyFeatures';
import { CarFleet } from './components/CarFleet';
import { WeeklyPackages } from './components/WeeklyPackages';
import { OdishaShowcase } from './components/OdishaShowcase';
import { FareCalculator } from './components/FareCalculator';
import { RentalGuide } from './components/RentalGuide';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { BookingModal } from './components/BookingModal';
import { GeminiChatbot } from './components/GeminiChatbot';
import { Car, TourPackage, Destination } from './data/travelData';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'car' | 'tour'>('car');
  const [modalItemId, setModalItemId] = useState<string | undefined>(undefined);
  const [modalPickup, setModalPickup] = useState<string | undefined>(undefined);
  const [prefilledQuote, setPrefilledQuote] = useState<any>(null);

  const openBooking = (
    mode: 'car' | 'tour' = 'car',
    itemId?: string,
    pickup?: string
  ) => {
    setModalMode(mode);
    setModalItemId(itemId);
    setModalPickup(pickup);
    setPrefilledQuote(null);
    setIsModalOpen(true);
  };

  const handleSelectCar = (car: Car) => {
    openBooking('car', car.id);
  };

  const handleSelectPackage = (pkg: TourPackage) => {
    openBooking('tour', pkg.id);
  };

  const handlePlanTrip = (destination: Destination) => {
    openBooking('tour', undefined, 'Bhubaneswar Airport (BBI)');
  };

  const handleBookWithQuote = (quote: any) => {
    setPrefilledQuote(quote);
    openBooking('car', quote.carId, quote.pickup);
  };

  return (
    <div className="min-h-screen bg-[#0b1320] text-slate-100 selection:bg-orange-500 selection:text-white flex flex-col font-body overflow-x-hidden w-full max-w-full">
      {/* Top Bar Contract (Single wordmark, clean nav links, fast actions) */}
      <Navbar onOpenBooking={openBooking} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero with interactive fast booking & estimate engine */}
        <Hero onOpenBooking={openBooking} />

        {/* 4 Core Pillars from Flyer */}
        <KeyFeatures />

        {/* Self-Drive Car Fleet Explorer */}
        <CarFleet onSelectCar={handleSelectCar} />

        {/* Weekly 7-Day / 6-Night Curated Odisha Tour Packages */}
        <WeeklyPackages onSelectPackage={handleSelectPackage} />

        {/* Odisha 4 Pillars Showcase: Temples, Beaches, Hill Stations, Heritage */}
        <OdishaShowcase onPlanTrip={handlePlanTrip} />

        {/* Interactive Instant Fare Calculator with Weekly Discount Formulas */}
        <FareCalculator onBookWithQuote={handleBookWithQuote} />

        {/* Rental KYC & Security Deposit Refund Guide */}
        <RentalGuide />

        {/* Attributable Verified Reviews */}
        <Testimonials />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Official Footer with Sundarapada Address & Phone 8978006427 */}
      <Footer />

      {/* Floating WhatsApp & Direct Call Bar */}
      <FloatingContactBar />

      {/* Multi-turn AI Tour Concierge Chatbot powered by Gemini */}
      <GeminiChatbot />

      {/* Booking and Quote Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode={modalMode}
        initialItemId={modalItemId}
        initialPickup={modalPickup}
        prefilledQuote={prefilledQuote}
      />
    </div>
  );
}
