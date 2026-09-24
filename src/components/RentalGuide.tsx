import React from 'react';
import { 
  FileCheck2, 
  Wallet, 
  Fuel, 
  LifeBuoy, 
  Gauge, 
  MapPin, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

export const RentalGuide: React.FC = () => {
  const steps = [
    {
      icon: FileCheck2,
      title: 'Simple 2-Min KYC',
      description: 'Original Indian Driving License (min 1-year old) + Aadhaar Card or Passport. Foreign tourists need International Driving Permit (IDP).',
    },
    {
      icon: Wallet,
      title: 'Rapid Deposit Refund',
      description: 'Refundable security deposit (₹3,000–₹8,000) is returned directly via UPI or IMPS within 2 to 24 hours after inspection.',
    },
    {
      icon: Fuel,
      title: 'Fair Fuel Policy',
      description: 'Same-to-same fuel policy. Pick up with the recorded tank level and return at the identical mark. No inflated fueling charges.',
    },
    {
      icon: LifeBuoy,
      title: '24/7 Odisha Roadside Help',
      description: 'Flat tire, jump start, or mechanical assistance anywhere from Puri beach to Daringbadi hills. Dedicated emergency helpline.',
    },
  ];

  return (
    <section className="py-16 bg-[#0b1320] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
            Hassle-Free Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
            How Self-Drive Rental Works
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            No complicated paperwork or long queues. We ensure your road trip begins smoothly the minute you land in Bhubaneswar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-800/80">
                  Step 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Airport Handover Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-slate-300">
            <MapPin className="w-5 h-5 text-orange-400 shrink-0" />
            <span>
              <strong>Arriving at Biju Patnaik Airport (BBI)?</strong> Share your flight number and our representative will greet you at the arrival gate with the car ready.
            </span>
          </div>
          <a
            href="tel:8978006427"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold whitespace-nowrap border border-slate-700 transition-colors"
          >
            Call Airport Desk: 8978006427
          </a>
        </div>

      </div>
    </section>
  );
};
