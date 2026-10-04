import React from 'react';
import { founderVishwaImg, officialLogoImg } from '../data/travelData';
import { MessageSquare, Compass, ShieldCheck, Award, Heart, CheckCircle2, PhoneCall } from 'lucide-react';

interface FounderSectionProps {
  onPlanTripClick: () => void;
  onWhatsAppClick: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onPlanTripClick,
  onWhatsAppClick,
}) => {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#E6DDCF] relative overflow-hidden">
      {/* Subtle decorative background ambient glow */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#C49A52]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#087E8B]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A52] font-semibold block mb-2">
            Meet Your Host & Lead Designer
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#123451] tracking-tight">
            Crafted by Vishwa, <span className="text-[#C49A52] italic font-serif">guided by passion</span>
          </h2>
        </div>

        {/* Founder Showcase Card */}
        <div className="rounded-3xl bg-[#F8F4EC] border border-[#E6DDCF] p-8 sm:p-12 lg:p-14 luxury-card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Founder Portrait & Credential Badges */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 sm:w-72 lg:w-80 aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
                <img 
                  src={founderVishwaImg} 
                  alt="Vishwa - Founder & Lead Travel Designer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Official Crest Badge floating in corner */}
                <div className="absolute top-3 left-3 w-12 h-12 rounded-full overflow-hidden border-2 border-[#C49A52] bg-white shadow-md p-0.5">
                  <img 
                    src={officialLogoImg} 
                    alt="Ocean Pearl Logo Crest" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Experience Badge Pill */}
                <div className="absolute bottom-3 right-3 bg-[#123451]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C49A52]/40 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <Award className="w-3.5 h-3.5 text-[#C49A52]" />
                  <span>12+ Years Sri Lanka Expert</span>
                </div>
              </div>

              {/* Name & Credentials below portrait */}
              <div className="mt-5 text-center">
                <h3 className="font-serif text-2xl text-[#123451] font-semibold">
                  Vishwa
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#C49A52] font-semibold mt-0.5">
                  Founder & Managing Director
                </p>
                <p className="text-xs text-[#123451]/75 mt-1 font-medium">
                  SLTDA Registered Tour Operator • Negombo, Sri Lanka
                </p>
              </div>
            </div>

            {/* Right Column: Founder's Story & Personal Guarantees */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#C49A52]/15 text-[#9B7532] border border-[#C49A52]/30 mb-3">
                  Direct Founder Commitment
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123451] font-medium leading-tight mb-4">
                  “I treat every traveler like family arriving in my homeland.”
                </h3>

                <div className="space-y-3.5 text-sm text-[#123451]/85 font-normal leading-relaxed">
                  <p>
                    <strong className="text-[#123451] font-semibold">Ayubowan! I am Vishwa.</strong> Born and raised on the sun-drenched shores of Negombo, Sri Lanka's breathtaking natural beauty and rich 2,500-year history have shaped my life.
                  </p>
                  <p>
                    I created <strong className="text-[#123451] font-semibold">Ocean Pearl Travel</strong> out of a genuine desire to offer international travelers what big group tour operators cannot: complete itinerary flexibility, private air-conditioned luxury transport, hand-picked boutique hotels, and unhurried authentic moments away from commercial crowds.
                  </p>
                  <p className="italic font-serif text-[#9B7532] border-l-2 border-[#C49A52] pl-3 py-1 text-sm sm:text-[15px]">
                    “Whether it's opening doors to a hidden waterfall in Ella, arranging dawn whale watching in Mirissa, or securing first-class scenic train tickets, I personally oversee your trip from the moment you inquire until you safely board your flight home.”
                  </p>
                </div>
              </div>

              {/* Vishwa's 4 Quality Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#123451] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0" />
                  <span>100% Private Custom Itineraries</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#123451] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0" />
                  <span>National Tourist Board Certified Guides</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#123451] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0" />
                  <span>Direct 24/7 WhatsApp Hotline with Vishwa</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#123451] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0" />
                  <span>Transparent Quotes with Zero Hidden Fees</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  onClick={onWhatsAppClick}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#087E8B] hover:bg-[#06636d] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Chat with Vishwa on WhatsApp (+94 775507506)</span>
                </button>

                <button
                  onClick={onPlanTripClick}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#C49A52] hover:bg-[#B58A42] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#C49A52]/25 cursor-pointer hover:-translate-y-0.5"
                >
                  <Compass className="w-4 h-4 text-white" />
                  <span>Plan My Trip with Vishwa →</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
