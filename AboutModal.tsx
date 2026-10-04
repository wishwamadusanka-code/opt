import React from 'react';
import { X, ShieldCheck, MapPin, Award, CheckCircle2, PhoneCall, Mail, MessageSquare } from 'lucide-react';
import { officialLogoImg } from '../data/travelData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTripClick: () => void;
  onWhatsAppClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onPlanTripClick,
  onWhatsAppClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C49A52]/20 flex items-center justify-between bg-[#123451]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C49A52]/40 p-0.5 bg-[#0D2438]">
              <img src={officialLogoImg} alt="Ocean Pearl Travel Official Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A52] font-semibold block">
                Official Accreditation & Profile
              </span>
              <h2 className="font-serif text-2xl text-[#F8F4EC] font-medium">
                About Ocean Pearl Travel
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F8F4EC]/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* Founder Profile & Vision */}
          <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#C49A52]/40 relative overflow-hidden shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-[#123451] text-white flex items-center justify-center font-serif text-2xl border-2 border-[#C49A52] shrink-0 shadow-md">
                V
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A52] font-semibold block">
                  Founder & Managing Director
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#123451] font-semibold">
                  Vishwa
                </h4>
                <p className="text-xs text-[#123451]/75">
                  Ocean Pearl Travel • Lead Trip Architect & Hospitality Director
                </p>
              </div>
            </div>

            <blockquote className="font-serif italic text-xs sm:text-sm text-[#123451] leading-relaxed mb-4 pl-4 border-l-2 border-[#C49A52]">
              "Ayubowan! I founded Ocean Pearl Travel with a personal mission: to share the authentic soul of Sri Lanka with travelers who value depth, comfort, and local warmth over hurried tour buses. Every itinerary we design receives my personal review, ensuring your journey through our ancient fortresses, misty tea hills, and turquoise shores becomes a lifelong memory."
            </blockquote>

            <div className="flex flex-wrap items-center gap-4 text-xs pt-2 border-t border-[#DFD7C8] text-[#123451]/80">
              <span className="flex items-center gap-1.5 font-medium text-[#123451]">
                <ShieldCheck className="w-4 h-4 text-[#385B45]" />
                Direct founder oversight on all custom bookings
              </span>
              <span>•</span>
              <span className="text-[#9B7532] font-medium">
                Personal concierge hotline: +94 775507506
              </span>
            </div>
          </div>

          {/* Mission & Story */}
          <div>
            <h3 className="font-serif text-lg text-[#123451] font-medium mb-2">
              Locally Rooted, Globally Trusted
            </h3>
            <p className="text-xs sm:text-sm text-[#3E566C] font-normal leading-relaxed mb-4">
              Founded and operated by Vishwa and a close-knit team of seasoned Sri Lankan tour professionals, Ocean Pearl Travel was born out of a desire to provide international travelers with authentic, safe, and truly unhurried journeys through the pearl of the Indian Ocean.
            </p>
            <p className="text-xs sm:text-sm text-[#3E566C] font-normal leading-relaxed">
              Unlike mass group tour companies that rush through standard tourist stops, our trips are completely private and tailored around your personal passions — whether that's tracking leopards in Yala, catching the sunrise above the clouds in Ella, or exploring 2,500-year-old Buddhist ruins.
            </p>
          </div>

          {/* SLTDA Official Accreditations */}
          <div className="p-5 rounded-xl bg-white border border-[#C49A52]/50 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-[#C49A52]">
              <ShieldCheck className="w-5 h-5 text-[#385B45]" />
              <h4 className="text-sm font-semibold tracking-wide uppercase text-[#123451]">
                Sri Lanka Tourism Development Authority (SLTDA)
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3E566C]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0 mt-0.5" />
                <span>Licensed Travel Agent (Reg: SLTDA/SQA/TA/02194)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0 mt-0.5" />
                <span>All Chauffeur Guides certified by National Tourist Board</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0 mt-0.5" />
                <span>Full passenger commercial vehicle insurance coverage</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#385B45] shrink-0 mt-0.5" />
                <span>Transparent quotes with no surprise commissions</span>
              </div>
            </div>
          </div>

          {/* Location & Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#E2D8C8] space-y-2">
              <div className="flex items-center gap-2 text-[#C49A52] text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Operational Headquarters
              </div>
              <p className="text-xs text-[#3E566C] leading-relaxed">
                385/13 Kularathna Road, Negombo, Sri Lanka.
              </p>
              <p className="text-[11px] text-[#9B7532] font-medium">
                Strategically located only 15 minutes from Bandaranaike International Airport (CMB) for seamless arrivals and departures.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2D8C8] space-y-2">
              <div className="flex items-center gap-2 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                24/7 Dedicated Concierge
              </div>
              <p className="text-xs text-[#3E566C]">
                Direct WhatsApp: <span className="text-[#123451] font-semibold">+94 775507506</span>
              </p>
              <p className="text-xs text-[#3E566C]">
                Email: <span className="text-[#123451] font-medium">info.oceanpearltravel@gmail.com</span>
              </p>
              <p className="text-[11px] text-[#627B91]">
                Instant emergency and itinerary assistance around the clock.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#DFD7C8] flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={() => {
                onClose();
                onWhatsAppClick();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-medium text-[#123451] border border-[#123451]/30 hover:border-[#123451] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#087E8B]" />
              <span>Connect on WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onPlanTripClick();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#C49A52] hover:bg-[#B38943] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Plan Your Trip</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
