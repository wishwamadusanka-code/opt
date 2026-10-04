import React, { useState } from 'react';
import { PAST_TOURS_DATA, PastTourMoment } from '../data/travelData';
import { Camera, MapPin, Calendar, Users, ArrowRight, X, Heart, Sparkles } from 'lucide-react';

interface PastToursSectionProps {
  onPlanTripClick: (tourTitle?: string) => void;
}

export const PastToursSection: React.FC<PastToursSectionProps> = ({ onPlanTripClick }) => {
  const [activePhoto, setActivePhoto] = useState<PastTourMoment | null>(null);

  return (
    <section id="past-tours" className="py-20 sm:py-28 bg-[#F8F4EC] border-t border-[#E6DDCF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A52] font-semibold mb-2">
            <Camera className="w-3.5 h-3.5 text-[#C49A52]" />
            <span>Previous Tour Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#123451] tracking-tight">
            Real moments from <span className="text-[#C49A52] italic font-serif">past journeys</span>
          </h2>
          <p className="text-sm sm:text-base text-[#123451]/75 font-normal max-w-2xl mx-auto mt-3 leading-relaxed">
            Snapshots and memories captured by guests traveling privately across Sri Lanka with Vishwa and the Ocean Pearl team.
          </p>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAST_TOURS_DATA.map((moment) => (
            <div
              key={moment.id}
              onClick={() => setActivePhoto(moment)}
              className="group flex flex-col bg-white border border-[#E6DDCF] hover:border-[#C49A52] rounded-2xl overflow-hidden transition-all duration-300 luxury-card-shadow cursor-pointer hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE2D5]">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider rounded-md bg-[#123451]/85 backdrop-blur-xs text-white uppercase shadow-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C49A52]" />
                    <span>{moment.location.split(' ')[0]}</span>
                  </span>
                </div>

                {/* Click to expand overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-[#123451] text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C49A52]" />
                    <span>View Story</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#9B7532] font-semibold uppercase tracking-wider mb-1.5">
                    <span>{moment.tourName}</span>
                    <span className="text-[#123451]/50">{moment.date.split(' ')[1]}</span>
                  </div>

                  <h3 className="font-serif text-lg text-[#123451] font-medium group-hover:text-[#C49A52] transition-colors mb-2">
                    {moment.title}
                  </h3>

                  <p className="text-xs text-[#123451]/75 leading-relaxed line-clamp-2">
                    "{moment.caption}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#123451]">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#087E8B]" />
                    <span className="font-medium">{moment.guests}</span>
                  </div>
                  <span className="text-[#123451]/60 text-[11px]">{moment.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Photo Details */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-block px-2.5 py-1 rounded bg-[#C49A52] text-[10px] font-bold tracking-wider uppercase mb-1.5 shadow-sm">
                  {activePhoto.tourName}
                </div>
                <h3 className="font-serif text-2xl font-medium drop-shadow-md">
                  {activePhoto.title}
                </h3>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-[#E6DDCF] pb-3">
                <div className="flex items-center gap-1.5 text-[#123451] font-medium">
                  <MapPin className="w-4 h-4 text-[#C49A52]" />
                  <span>{activePhoto.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#123451] font-medium">
                  <Users className="w-4 h-4 text-[#087E8B]" />
                  <span>Guests: {activePhoto.guests} ({activePhoto.country})</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#123451]/70">
                  <Calendar className="w-4 h-4 text-[#385B45]" />
                  <span>{activePhoto.date}</span>
                </div>
              </div>

              <p className="text-sm text-[#123451]/85 leading-relaxed italic font-serif">
                "{activePhoto.caption}"
              </p>

              <div className="pt-4 border-t border-[#E6DDCF] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#123451]/70">
                  All previous tours were operated with private chauffeur guide and dedicated concierge support.
                </span>

                <button
                  onClick={() => {
                    const tourName = activePhoto.tourName;
                    setActivePhoto(null);
                    onPlanTripClick(tourName);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#C49A52] hover:bg-[#B58A42] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Plan a Route Like This →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
