import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

interface PlanningCtaProps {
  onEmailInquiry: () => void;
  onWhatsAppConcierge: () => void;
}

export const PlanningCta: React.FC<PlanningCtaProps> = ({
  onEmailInquiry,
  onWhatsAppConcierge,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F4EC] border-t border-[#E6DDCF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bordered Planning Card in Ocean Navy */}
        <div className="relative rounded-3xl border-2 border-[#C49A52]/40 bg-[#123451] p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl shadow-[#123451]/25">
          
          {/* Subtle Ambient Glow */}
          <div 
            className="absolute -top-24 -left-24 w-72 h-72 bg-[#C49A52]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#087E8B]/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C49A52] font-semibold block mb-3">
              Start planning
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F8F4EC] tracking-tight leading-tight mb-4" style={{ textWrap: 'balance' }}>
              Let's design your Sri Lanka adventure
            </h2>

            <p className="text-[#F8F4EC]/85 text-sm sm:text-base font-normal leading-relaxed mb-10">
              Tell us your dates and dreams and we'll send a custom itinerary within 24 hours — no obligation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onEmailInquiry}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#C49A52] hover:bg-[#B38943] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#C49A52]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#F8F4EC]" />
                <span>EMAIL INQUIRY</span>
              </button>

              <button
                onClick={onWhatsAppConcierge}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#F8F4EC] hover:text-white bg-[#0D263B] hover:bg-[#163852] border border-[#C49A52]/40 hover:border-[#C49A52] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#087E8B]" />
                <span>WhatsApp Concierge (+94 775507506)</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
