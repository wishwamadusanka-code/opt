import React, { useState } from 'react';
import { 
  DESTINATIONS, 
  Destination,
  PAST_TOUR_PHOTOS,
  TourPhoto,
  culturalWondersRuinsImg,
  elephantsRiverImg,
  coastalEscapesSeaviewImg,
  luxurySeaViewImg
} from '../data/travelData';
import { Landmark, Compass, Waves, ArrowRight, Sparkles, Camera, MapPin, Users, X, CheckCircle2 } from 'lucide-react';

interface DestinationsProps {
  onSelectDestination: (dest: Destination) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onSelectDestination }) => {
  const [activeSectionTab, setActiveSectionTab] = useState<'highlights' | 'real_photos'>('highlights');
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [selectedRealPhoto, setSelectedRealPhoto] = useState<TourPhoto | null>(null);

  // 3 Signature Cards matching the user's uploaded screenshot exactly
  const signatureHighlights = [
    {
      id: 'cultural-wonders',
      title: 'Cultural Wonders',
      subtitle: 'Ancient cities. Timeless heritage.',
      image: culturalWondersRuinsImg,
      icon: <Landmark className="w-5 h-5 text-white" />,
      badgeBg: 'bg-[#C49A52]', // Pearl Gold
      destinationData: DESTINATIONS[2] // Heritage / Sigiriya
    },
    {
      id: 'wildlife-nature',
      title: 'Wildlife & Nature',
      subtitle: 'Extraordinary encounters. Untouched beauty.',
      image: elephantsRiverImg,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 8c-.6 0-1.1.2-1.5.5C16.8 7.6 15.5 7 14 7c-.6 0-1.2.1-1.8.3C11.5 6.5 10.3 6 9 6c-2.8 0-5 2.2-5 5v3c0 .6.4 1 1 1h1v4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h2v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4h1c.6 0 1-.4 1-1v-3c0-1.7-1.3-3-3-3zm-1 5h-1v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4H8v-3c0-1.7 1.3-3 3-3 .7 0 1.4.3 1.9.8.5-.5 1.2-.8 2.1-.8 1.1 0 2.1.6 2.6 1.5.4-.3.9-.5 1.4-.5 1.1 0 2 .9 2 2v1c0 .6-.4 1-1 1z" />
        </svg>
      ),
      badgeBg: 'bg-[#385B45]', // Forest Green
      destinationData: DESTINATIONS[3] // Wildlife
    },
    {
      id: 'coastal-escapes',
      title: 'Coastal Escapes',
      subtitle: 'Sun. Sea. Serenity.',
      image: coastalEscapesSeaviewImg,
      icon: <Waves className="w-5 h-5 text-white" />,
      badgeBg: 'bg-[#087E8B]', // Tropical Teal (Sea View)
      destinationData: DESTINATIONS[0] // Southern Beaches / Coastal
    }
  ];

  return (
    <section id="destinations" className="relative py-16 sm:py-24 bg-[#F8F4EC] overflow-hidden">
      {/* Background Sea View & Tropical Palm Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-[0.07] bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: `url(${luxurySeaViewImg})` }}
        />
        
        {/* Decorative Palm Silhouettes in Corners */}
        <svg 
          viewBox="0 0 200 200" 
          className="absolute -left-12 top-10 w-48 sm:w-64 h-48 sm:h-64 text-[#C49A52]/15 fill-current transform -rotate-12 pointer-events-none"
        >
          <path d="M10,190 Q60,140 100,100 Q140,60 190,10 C160,30 130,60 100,100 C70,140 40,170 10,190 Z" />
          <path d="M20,180 Q80,130 130,80 Q160,50 195,30 C165,60 130,100 90,140 Z" />
        </svg>

        <svg 
          viewBox="0 0 200 200" 
          className="absolute -right-12 bottom-10 w-48 sm:w-64 h-48 sm:h-64 text-[#C49A52]/15 fill-current transform rotate-180 pointer-events-none"
        >
          <path d="M10,190 Q60,140 100,100 Q140,60 190,10 C160,30 130,60 100,100 C70,140 40,170 10,190 Z" />
          <path d="M20,180 Q80,130 130,80 Q160,50 195,30 C165,60 130,100 90,140 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Tab Switcher: Iconic Destinations vs Real Tour Photos with Vishwa */}
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C49A52] font-semibold block mb-3">
            Ocean Pearl Travel Experiences
          </span>
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#C49A52]/40 shadow-md">
            <button
              onClick={() => setActiveSectionTab('highlights')}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeSectionTab === 'highlights'
                  ? 'bg-[#123451] text-white shadow-xs'
                  : 'text-[#123451] hover:text-[#C49A52]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#C49A52]" />
              <span>Iconic Destinations</span>
            </button>
            <button
              onClick={() => setActiveSectionTab('real_photos')}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeSectionTab === 'real_photos'
                  ? 'bg-[#C49A52] text-white shadow-xs'
                  : 'text-[#123451] hover:text-[#C49A52]'
              }`}
            >
              <Camera className="w-4 h-4 text-white" />
              <span>📸 Real Tour Photos ({PAST_TOUR_PHOTOS.length})</span>
              <span className="hidden sm:inline px-1.5 py-0.5 rounded-full text-[9px] bg-white/20 text-white font-bold uppercase">
                With Vishwa
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: Iconic Destinations (Preserving exact user mockup layout) */}
        {activeSectionTab === 'highlights' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 mb-12 animate-in fade-in duration-300">
              {signatureHighlights.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectDestination(item.destinationData)}
                  className="group flex flex-col bg-white border border-[#E6DDCF] hover:border-[#C49A52] rounded-2xl overflow-hidden transition-all duration-300 luxury-card-shadow cursor-pointer hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE2D5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full ${item.badgeBg} flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300 z-10`}>
                      {item.icon}
                    </div>
                  </div>

                  <div className="pt-8 pb-6 px-5 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-[#123451] font-medium group-hover:text-[#C49A52] transition-colors mb-1.5">
                        {item.title}
                      </h3>
                      <p className="font-serif italic text-sm text-[#123451]/75 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-center gap-1.5 text-xs font-semibold text-[#C49A52] group-hover:text-[#9B7532] transition-colors">
                      <span>Explore Experience</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Regional Itineraries Expandable Bar */}
            <div className="text-center pt-2">
              <button
                onClick={() => setShowAllDestinations(!showAllDestinations)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white border border-[#C49A52]/40 text-xs font-semibold uppercase tracking-wider text-[#123451] hover:text-[#C49A52] shadow-xs transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C49A52]" />
                <span>{showAllDestinations ? 'Hide Additional Regions' : 'View All 4 Island Travel Regions (Hill Country, etc.)'}</span>
              </button>
            </div>

            {showAllDestinations && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
                {DESTINATIONS.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => onSelectDestination(dest)}
                    className="group flex flex-col bg-white border border-[#E6DDCF] hover:border-[#C49A52] rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider rounded bg-[#123451] text-[#F8F4EC] uppercase">
                          {dest.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-lg text-[#123451] font-medium mb-1 group-hover:text-[#C49A52] transition-colors">
                          {dest.title}
                        </h4>
                        <p className="text-xs text-[#123451]/75 line-clamp-2">
                          {dest.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-medium text-[#C49A52]">
                        <span>{dest.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* TAB 2: Real Tour Photos (Guided by Vishwa) */}
        {activeSectionTab === 'real_photos' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Note banner */}
            <div className="p-4 rounded-xl bg-white border border-[#C49A52]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#123451]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#123451] text-white flex items-center justify-center font-serif font-bold text-xs">
                  V
                </div>
                <span>
                  <strong>Real Memories with Vishwa:</strong> Unedited moments from recent custom private journeys across Sri Lanka.
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-[#385B45] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> 100% Authentic Journeys
              </span>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PAST_TOUR_PHOTOS.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedRealPhoto(photo)}
                  className="group rounded-2xl overflow-hidden border border-[#E6DDCF] bg-white hover:border-[#C49A52] transition-all duration-300 luxury-card-shadow cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE2D5]">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 opacity-70 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Tag badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-white bg-[#123451]/90 backdrop-blur-xs border border-[#C49A52]/40">
                        {photo.tag}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="flex items-center gap-1 text-[10px] text-[#C49A52] font-medium mb-0.5">
                        <MapPin className="w-3 h-3 text-[#C49A52] shrink-0" />
                        <span className="truncate">{photo.location}</span>
                      </div>
                      <h4 className="font-serif text-sm font-semibold leading-tight line-clamp-1">
                        {photo.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-[#3E566C] leading-relaxed mb-3 line-clamp-2">
                      {photo.caption}
                    </p>

                    <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-[11px]">
                      <span className="text-[#123451] font-medium flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#087E8B]" />
                        <span className="truncate max-w-[150px]">{photo.traveler}</span>
                      </span>
                      <span className="text-[#C49A52] font-semibold group-hover:underline">
                        View Photo
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox for Real Tour Photo */}
        {selectedRealPhoto && (
          <div 
            className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedRealPhoto(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-[#123451] rounded-2xl overflow-hidden border border-[#C49A52]/40 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <img 
                  src={selectedRealPhoto.image} 
                  alt={selectedRealPhoto.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelectedRealPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 bg-[#123451]">
                <div className="flex items-center gap-2 mb-1 text-xs text-[#C49A52]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedRealPhoto.location}</span>
                  <span>•</span>
                  <span>{selectedRealPhoto.traveler}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#F8F4EC] mb-2">
                  {selectedRealPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F4EC]/85 leading-relaxed">
                  {selectedRealPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
