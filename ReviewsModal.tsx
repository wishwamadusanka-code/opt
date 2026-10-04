import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/travelData';
import { X, Star, ShieldCheck, Search } from 'lucide-react';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTripClick: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  onPlanTripClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = REVIEWS_DATA.filter(
    (r) =>
      r.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C49A52]/20 flex items-center justify-between bg-[#123451]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A52] font-semibold block">
                Traveller Testimonials
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 border border-[#C49A52]/40 text-[10px] text-[#C49A52]">
                5.0 TripAdvisor Rating
              </span>
            </div>
            <h2 className="font-serif text-2xl text-[#F8F4EC] font-medium">
              Verified Guest Experiences
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F8F4EC]/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar */}
        <div className="p-4 bg-[#F4EFE6] border-b border-[#E2D8C8] flex items-center gap-2">
          <Search className="w-4 h-4 text-[#087E8B] shrink-0" />
          <input
            type="text"
            placeholder="Search reviews by country or keyword (e.g. driver, solo, safe, Yala)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white rounded-lg px-3 py-1.5 border border-[#DCD3C5] text-xs text-[#123451] placeholder-slate-400 focus:outline-none focus:border-[#C49A52]"
          />
        </div>

        {/* Review list */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-xl bg-white border border-[#E2D8C8] hover:border-[#C49A52] transition-colors luxury-card-shadow"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#123451] text-[#C49A52] flex items-center justify-center text-xs font-serif font-bold">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#123451] font-serif">{rev.author}</h4>
                    <span className="text-[11px] text-[#627B91]">{rev.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#C49A52]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C49A52]" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#20384E] italic font-normal leading-relaxed mb-3">
                "{rev.quote}"
              </p>

              <div className="flex items-center justify-between text-[11px] text-[#627B91] pt-2 border-t border-[#EAE2D5]">
                <span>{rev.tour}</span>
                <span className="flex items-center gap-1 text-[#087E8B]">
                  <ShieldCheck className="w-3 h-3 text-[#385B45]" />
                  Verified via {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-[#FDFBF7] border-t border-[#DFD7C8] flex items-center justify-between gap-4">
          <span className="text-xs text-[#627B91]">
            Ranked Top Tour Operator in Negombo on TripAdvisor.
          </span>
          <button
            onClick={() => {
              onClose();
              onPlanTripClick();
            }}
            className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#C49A52] hover:bg-[#B38943] transition-all cursor-pointer shadow-sm"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};
