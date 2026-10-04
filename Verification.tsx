import React from 'react';
import { MapPin, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

interface VerificationProps {
  onChatWithConcierge: () => void;
  onViewLocationMap: () => void;
  onViewAccreditation: () => void;
}

export const Verification: React.FC<VerificationProps> = ({
  onChatWithConcierge,
  onViewLocationMap,
  onViewAccreditation,
}) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F4EC] border-t border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A52] font-semibold block mb-2">
            Concierge & official verification
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#123451] tracking-tight">
            About Ocean Pearl Travel
          </h2>
        </div>

        {/* 3 Verification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Office Location */}
          <div className="p-7 rounded-2xl bg-[#FDFBF7] border border-[#E6DDCF] hover:border-[#C49A52] transition-all duration-300 flex flex-col justify-between luxury-card-shadow">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#C49A52]" />
                <h3 className="font-serif text-lg text-[#123451] font-medium">
                  Office Location
                </h3>
              </div>
              <p className="text-[#3E566C] text-sm font-normal leading-relaxed mb-1">
                385/13 Kularathna Road,
              </p>
              <p className="text-[#3E566C] text-sm font-normal leading-relaxed">
                Negombo, Sri Lanka
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE2D5]">
              <button
                onClick={onViewLocationMap}
                className="text-xs text-[#087E8B] hover:text-[#06616b] transition-colors font-medium flex items-center gap-1.5 cursor-pointer text-left"
              >
                <span>Strategically located 15 mins from BIA Airport</span>
              </button>
            </div>
          </div>

          {/* Card 2: Founder Concierge & Direct Hotline */}
          <div className="p-7 rounded-2xl bg-[#FDFBF7] border border-[#E6DDCF] hover:border-[#C49A52] transition-all duration-300 flex flex-col justify-between luxury-card-shadow">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <PhoneCall className="w-5 h-5 text-[#087E8B]" />
                <h3 className="font-serif text-lg text-[#123451] font-medium">
                  Founder & Concierge
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-[#C49A52] font-semibold">
                  Vishwa
                </span>
                <span className="text-[11px] text-[#385B45] bg-[#385B45]/10 px-2 py-0.5 rounded-full font-medium">
                  Direct Founder Contact
                </span>
              </div>
              <p className="text-[#123451] text-base font-semibold tracking-wide mb-1 tabular-nums">
                +94 775507506
              </p>
              <p className="text-[#123451]/75 text-xs font-normal">
                info.oceanpearltravel@gmail.com
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE2D5]">
              <button
                onClick={onChatWithConcierge}
                className="text-xs text-[#087E8B] hover:text-[#06616b] transition-colors font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Chat with Vishwa on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Accreditations & Reviews */}
          <div className="p-7 rounded-2xl bg-[#FDFBF7] border border-[#E6DDCF] hover:border-[#C49A52] transition-all duration-300 flex flex-col justify-between luxury-card-shadow">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#385B45]" />
                <h3 className="font-serif text-lg text-[#123451] font-medium">
                  Accreditations & Reviews
                </h3>
              </div>

              {/* SLTDA badge border */}
              <div className="inline-block px-3 py-1.5 rounded border border-[#C49A52] bg-[#C49A52]/10 text-[#9B7532] text-[11px] font-bold tracking-wider uppercase mb-2">
                SLTDA Tourist Board Approved
              </div>
              <p className="text-[#3E566C] text-xs font-normal">
                Registered Travel & Tour Operator
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE2D5] flex items-center gap-3 text-xs text-[#123451]">
              <button
                onClick={onViewAccreditation}
                className="hover:text-[#C49A52] transition-colors cursor-pointer font-medium"
              >
                TripAdvisor Reviews
              </button>
              <span>•</span>
              <button
                onClick={onViewAccreditation}
                className="hover:text-[#C49A52] transition-colors cursor-pointer font-medium"
              >
                Facebook Page
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
