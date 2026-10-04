import React, { useState } from 'react';
import { TOURS_DATA, TourPackage } from '../data/travelData';
import { X, CheckCircle, Clock, MapPin, ArrowRight, DollarSign } from 'lucide-react';

interface ToursModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTour: (tour: TourPackage) => void;
}

export const ToursModal: React.FC<ToursModalProps> = ({
  isOpen,
  onClose,
  onSelectTour,
}) => {
  const [activeTour, setActiveTour] = useState<TourPackage>(TOURS_DATA[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C49A52]/20 flex items-center justify-between bg-[#123451]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A52] font-semibold block">
              Handcrafted Private Journeys
            </span>
            <h2 className="font-serif text-2xl text-[#F8F4EC] font-medium">
              Signature Sri Lanka Tours
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F8F4EC]/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[75vh] overflow-y-auto">
          
          {/* Left Tour Selector List */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#E2D8C8] bg-[#F4EFE6] p-4 space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#627B91] block px-2 mb-2">
              Featured Itineraries
            </span>
            {TOURS_DATA.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTour(t)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  activeTour.id === t.id
                    ? 'bg-[#123451] border-[#C49A52] text-white shadow-md'
                    : 'bg-white border-[#E6DDCF] text-[#3E566C] hover:border-[#C49A52] hover:text-[#123451]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`font-serif text-base font-medium truncate ${activeTour.id === t.id ? 'text-white' : 'text-[#123451]'}`}>{t.name}</span>
                  {t.badge && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C49A52]/20 text-[#C49A52] font-medium border border-[#C49A52]/40 shrink-0">
                      {t.badge}
                    </span>
                  )}
                </div>
                <div className={`text-[11px] flex items-center gap-1.5 mb-1 ${activeTour.id === t.id ? 'text-[#C49A52]' : 'text-[#087E8B]'}`}>
                  <Clock className="w-3 h-3" />
                  <span>{t.duration}</span>
                </div>
                <div className={`text-[11px] truncate ${activeTour.id === t.id ? 'text-[#F8F4EC]/75' : 'text-[#627B91]'}`}>
                  From ${t.priceUSD} / person
                </div>
              </button>
            ))}
          </div>

          {/* Right Tour Details */}
          <div className="md:col-span-8 p-6 sm:p-8 space-y-6 bg-[#FDFBF7] overflow-y-auto">
            
            {/* Title & Price overview */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2D8C8] pb-5">
              <div>
                <h3 className="font-serif text-2xl text-[#123451] font-medium mb-1">
                  {activeTour.name}
                </h3>
                <p className="text-xs text-[#627B91] italic">
                  {activeTour.tagline}
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="text-[11px] text-[#627B91] uppercase tracking-wider">Estimated from</div>
                <div className="font-serif text-2xl text-[#C49A52] font-medium tabular-nums">
                  ${activeTour.priceUSD} <span className="text-xs text-[#627B91] font-sans">/ pax</span>
                </div>
              </div>
            </div>

            {/* Route Stops Pills */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#627B91] block mb-2 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#087E8B]" />
                Route Overview
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {activeTour.highlightRoute.map((stop, i) => (
                  <React.Fragment key={stop}>
                    <span className="px-2.5 py-1 text-xs rounded bg-white border border-[#DCD3C5] text-[#123451] font-medium">
                      {stop}
                    </span>
                    {i < activeTour.highlightRoute.length - 1 && (
                      <span className="text-[#C49A52] text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Day-by-Day highlights */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#123451] block mb-3 font-semibold">
                Day-by-Day Journey
              </span>
              <div className="space-y-3">
                {activeTour.itinerary.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E2D8C8] flex flex-col gap-1 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#123451] text-[#F8F4EC] text-[10px] font-semibold uppercase tracking-wider">
                        {item.day}
                      </span>
                      <span className="text-xs font-semibold text-[#123451]">{item.title}</span>
                    </div>
                    <p className="text-xs text-[#3E566C] font-normal leading-relaxed pl-1 mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#123451] block mb-2 font-semibold">
                Included with Ocean Pearl Travel
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeTour.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#3E566C]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#385B45] mt-0.5 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-[#DFD7C8] flex items-center justify-between gap-4">
              <span className="text-xs text-[#627B91]">
                100% tailor-made to your dates, rhythm & preferences.
              </span>
              <button
                onClick={() => {
                  onClose();
                  onSelectTour(activeTour);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#C49A52] hover:bg-[#B38943] transition-all flex items-center gap-2 cursor-pointer shadow-md shrink-0"
              >
                <span>Customize This Tour</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F8F4EC]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
