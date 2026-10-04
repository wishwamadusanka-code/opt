import React from 'react';
import { Destination } from '../data/travelData';
import { X, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanWithDestination: (destinationTitle: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onPlanWithDestination,
}) => {
  if (!destination) return null;

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'COASTAL':
        return 'bg-[#087E8B] text-white'; // Tropical Teal
      case 'HIGHLANDS':
      case 'WILDLIFE':
        return 'bg-[#385B45] text-white'; // Forest Green
      case 'HERITAGE':
      default:
        return 'bg-[#123451] text-[#F8F4EC] border border-[#C49A52]/50';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Overlay */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123451]/95 via-black/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider rounded uppercase inline-block mb-2 shadow-sm ${getBadgeStyle(destination.category)}`}>
              {destination.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              {destination.title}
            </h2>
            <p className="text-sm italic font-serif text-[#DFB770]">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white border border-[#E2D8C8]">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#C49A52] mt-0.5 shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#627B91] block">Best Season</span>
                <span className="text-xs sm:text-sm text-[#123451] font-semibold">{destination.bestMonths}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#627B91] block">Recommended Duration</span>
                <span className="text-xs sm:text-sm text-[#123451] font-semibold">{destination.recommendedStay}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-serif text-lg text-[#123451] font-medium mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C49A52]" />
              Curated Highlights & Experiences
            </h3>
            <ul className="space-y-2.5">
              {destination.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E566C] font-normal">
                  <CheckCircle2 className="w-4 h-4 text-[#385B45] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Day Preview */}
          <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#DFD7C8]">
            <span className="text-[11px] uppercase tracking-wider text-[#9B7532] font-semibold block mb-1">
              Sample Day Experience
            </span>
            <p className="text-xs sm:text-sm text-[#20384E] italic leading-relaxed">
              "{destination.sampleDay}"
            </p>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-[#DFD7C8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#627B91] text-center sm:text-left">
              Chauffeur guide, luxury private vehicle, and toll fees included in all custom routes.
            </div>
            <button
              onClick={() => {
                onClose();
                onPlanWithDestination(destination.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-[#C49A52] hover:bg-[#B38943] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Add to My Trip Plan</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F8F4EC]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
