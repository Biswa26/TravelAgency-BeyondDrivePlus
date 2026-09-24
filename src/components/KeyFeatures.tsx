import React from 'react';
import { Car, ShieldCheck, IndianRupee, Clock, Check, Award, Compass, HeartHandshake } from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  const pillars = [
    {
      icon: Car,
      title: 'Wide Range of Cars',
      tagline: 'Hatchbacks to 4x4 Off-Roaders',
      description:
        'Choose from manual and automatic Swift, Dzire, Creta, Brezza, 7-seater Ertiga, Innova Crysta, and rugged Mahindra Thar 4x4. Perfect for city tours or Eastern Ghats mountain passes.',
      bullet: '25+ Verified Modern Fleet',
      color: 'from-blue-500/20 to-indigo-950/40',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Well Maintained',
      tagline: 'Multi-Point Inspection Before Handover',
      description:
        'Deep cleaned, sanitized, fully insured, and equipped with valid FASTag, chilled AC, spare tire, and tool kit. Plus 24/7 roadside assistance across all 30 districts of Odisha.',
      bullet: '100% Road-Tested & Insured',
      color: 'from-emerald-500/20 to-teal-950/40',
      iconColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      tagline: 'Explore More. Spend Less.',
      description:
        'Starting at just ₹1,299/day with huge weekly package discounts up to 30%. Zero hidden surge fees, transparent fuel policies, and rapid security deposit refund to your UPI.',
      bullet: 'No Hidden Fees · Instant Refund',
      color: 'from-amber-500/20 to-orange-950/40',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
    {
      icon: Clock,
      title: '24/7 Flexible Booking',
      tagline: 'Doorstep Airport & Station Delivery',
      description:
        'Book online or via WhatsApp in 2 minutes. Receive your vehicle right outside BBI Airport arrivals or Bhubaneswar Railway station anytime, day or night.',
      bullet: '24/7 Terminal Handover Support',
      color: 'from-purple-500/20 to-violet-950/40',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
    },
  ];

  return (
    <section className="py-16 bg-[#09111c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
            Why Travelers Choose Beyond Drive+
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Your Journey · Our Priority
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Built by passionate local Odia road-trippers to deliver unmatched freedom, reliability, and honest pricing across Odisha.
          </p>
        </div>

        {/* 4 Pillars Grid matching the flyer's circular emblems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl bg-gradient-to-b ${pillar.color} p-6 border ${pillar.borderColor} hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20`}
              >
                <div>
                  {/* Clean Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-orange-300 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <div className="text-xs font-medium text-orange-400/90 mt-1 mb-3">
                    {pillar.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{pillar.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Strip Highlighting Weekly Savings */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-slate-900 border border-orange-500/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <div className="text-white font-bold text-base sm:text-lg">
                Planning a 7-Day Road Trip Across Odisha?
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                Unlock our Weekly Package Tariff: Save up to ₹4,500 compared to daily rentals + Free Unlimited KMs!
              </div>
            </div>
          </div>

          <a
            href="#packages"
            className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shadow-md shadow-orange-500/20"
          >
            Explore Weekly Packages
          </a>
        </div>

      </div>
    </section>
  );
};
