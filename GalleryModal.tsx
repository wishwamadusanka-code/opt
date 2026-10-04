import React, { useState } from 'react';
import { X, MapPin, Sparkles, Heart, Users, Compass, CheckCircle2 } from 'lucide-react';
import { 
  PAST_TOUR_PHOTOS,
  southernBeachImg, 
  hillCountryImg, 
  sigiriyaImg, 
  wildlifeImg, 
  luxurySeaViewImg, 
  elephantsRiverImg 
} from '../data/travelData';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTripClick: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  onPlanTripClick,
}) => {
  const [filter, setFilter] = useState('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  if (!isOpen) return null;

  // Real tour photos with Vishwa and international guests
  const allTourMoments = [
    ...PAST_TOUR_PHOTOS.map(p => ({
      ...p,
      isRealTour: true,
    })),
    {
      id: 'sc-1',
      title: 'Indian Ocean Coastal Waters & Palm Shaded Shore',
      tag: 'COASTAL',
      location: 'Southern Coast, Sri Lanka',
      image: luxurySeaViewImg,
      caption: 'Crystal turquoise waters and gentle rolling surf under tropical sunshine along private beach drives.',
      traveler: 'Coastal Escapes Route'
    },
    {
      id: 'sc-2',
      title: 'Mirissa Golden Sands & Whale Coast',
      tag: 'COASTAL',
      location: 'Mirissa & Weligama',
      image: southernBeachImg,
      caption: 'Sun-drenched coconut trees and world-renowned surf breaks visited on private Southern routes.',
      traveler: 'Beach & Marine Explorers'
    },
    {
      id: 'sc-3',
      title: 'Sigiriya Ancient Lion Rock Citadel',
      tag: 'CULTURE',
      location: 'Cultural Triangle, Sri Lanka',
      image: sigiriyaImg,
      caption: '5th-century royal palace atop a dramatic 200m vertical monolith guided with historical local insight.',
      traveler: 'Heritage Discovery Route'
    },
    {
      id: 'sc-4',
      title: 'Asian Elephants Wild Gathering',
      tag: 'NATURE',
      location: 'Minneriya & Kaudulla National Park',
      image: elephantsRiverImg,
      caption: 'Gentle wild elephant herds gathering in natural lakes and river streams during afternoon game drives.',
      traveler: 'Wildlife Safari Group'
    }
  ];

  const filtered = filter === 'ALL' 
    ? allTourMoments 
    : filter === 'REAL_TOURS' 
      ? allTourMoments.filter(item => (item as any).isRealTour)
      : allTourMoments.filter(item => item.tag === filter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-[#C49A52]/30 flex items-center justify-between bg-[#123451] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C49A52]/20 border border-[#C49A52] flex items-center justify-center text-[#C49A52]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A52] font-semibold block">
                  Our Real Tour Moments
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-[#385B45] text-white font-semibold">
                  Verified Trips with Vishwa
                </span>
              </div>
              <h2 className="font-serif text-2xl text-[#F8F4EC] font-medium">
                Past Tours & Traveler Memories
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F8F4EC]/75 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Founder Personal Note Banner */}
        <div className="px-6 py-3.5 bg-[#F4EFE6] border-b border-[#E6DDCF] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#123451]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#123451] text-[#F8F4EC] flex items-center justify-center font-serif font-bold text-xs shrink-0">
              V
            </div>
            <p>
              <strong>A note from Vishwa:</strong> <em>"Every traveler arrives as a guest and leaves as lifelong family. Here are authentic, unedited moments from our recent private Sri Lanka journeys."</em>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1 text-[#385B45] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Moments
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="p-4 bg-[#FDFBF7] border-b border-[#E6DDCF] flex flex-wrap items-center gap-2">
          {[
            { id: 'ALL', label: 'All Photos' },
            { id: 'REAL_TOURS', label: '📸 Real Tours with Vishwa' },
            { id: 'WELCOME', label: 'Airport Welcome' },
            { id: 'COASTAL', label: 'Boat & Lagoon' },
            { id: 'HIGHLANDS', label: 'Tea Estates' },
            { id: 'JOURNEYS', label: 'Scenic Trains' },
            { id: 'NATURE', label: 'Mangrove Safari' },
            { id: 'CULTURE', label: 'Tuk-Tuk & Heritage' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#123451] text-[#F8F4EC] border border-[#C49A52] shadow-sm'
                  : 'bg-white text-[#3E566C] hover:text-[#123451] border border-[#E2D8C8] hover:border-[#C49A52]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of gallery photos */}
        <div className="p-6 max-h-[62vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group rounded-2xl overflow-hidden border border-[#E2D8C8] bg-white hover:border-[#C49A52] transition-all duration-300 luxury-card-shadow cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE2D5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 opacity-70 group-hover:opacity-60 transition-opacity" />
                
                {/* Tag pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white bg-[#123451]/90 backdrop-blur-xs border border-[#C49A52]/40">
                    {item.tag}
                  </span>
                  {(item as any).isRealTour && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-[#C49A52] shadow-xs">
                      Tour with Vishwa
                    </span>
                  )}
                </div>

                {/* Location text */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-[#C49A52] font-medium mb-0.5">
                    <MapPin className="w-3 h-3 text-[#C49A52] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold leading-snug line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#3E566C] leading-relaxed mb-3">
                  {item.caption}
                </p>

                <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-[11px]">
                  <span className="text-[#123451] font-medium flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#087E8B]" />
                    <span className="truncate max-w-[170px]">{item.traveler}</span>
                  </span>
                  <span className="text-[#C49A52] font-semibold group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Footer */}
        <div className="p-4 sm:p-5 bg-[#FDFBF7] border-t border-[#DFD7C8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#627B91] text-center sm:text-left">
            <span>Every photo is a real journey crafted with personal care. Ready for your own?</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onPlanTripClick();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider text-white bg-[#C49A52] hover:bg-[#B58A42] transition-all cursor-pointer shadow-md flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-white" />
              <span>Plan A Tour Like This →</span>
            </button>
          </div>
        </div>

        {/* High Resolution Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-[#123451] rounded-2xl overflow-hidden border border-[#C49A52]/40 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <img 
                  src={selectedPhoto.image} 
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 bg-[#123451]">
                <div className="flex items-center gap-2 mb-1 text-xs text-[#C49A52]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedPhoto.location}</span>
                  <span>•</span>
                  <span>{selectedPhoto.traveler}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#F8F4EC] mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F4EC]/85 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
