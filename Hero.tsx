import React, { useState } from 'react';
import { sigiriyaLakeHeroImg, luxurySeaViewImg } from '../data/travelData';
import { Compass, MessageCircle, Star, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onExploreTours: () => void;
  onTalkToUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTours, onTalkToUs }) => {
  const [heroScenery, setHeroScenery] = useState<'mountain' | 'seaview'>('mountain');

  return (
    <section className="relative overflow-hidden pt-12 pb-0 sm:pt-16 text-left">
      {/* 1. Panoramic Landscape Background matching user's uploaded screen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src={heroScenery === 'mountain' ? sigiriyaLakeHeroImg : luxurySeaViewImg} 
          alt={heroScenery === 'mountain' ? "Sigiriya Lake & Traveler View" : "Sri Lanka Coastal Sea View"} 
          className="w-full h-full object-cover object-center scale-100 transition-all duration-700 filter brightness-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Soft luxury radiant scrim: keeps traveler and scenery visible while guaranteeing text legibility on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EC]/92 via-[#F8F4EC]/75 to-transparent sm:w-[65%] w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F4EC]/50 via-transparent to-transparent h-20" />
      </div>

      {/* Scenery Switcher Control (Mountain Heritage vs Coastal Sea View) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 flex items-center bg-white/90 backdrop-blur-md p-1 rounded-full border border-[#C49A52]/40 shadow-md text-xs">
        <button 
          onClick={() => setHeroScenery('mountain')}
          className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer font-medium ${
            heroScenery === 'mountain' 
              ? 'bg-[#123451] text-white shadow-xs' 
              : 'text-[#123451] hover:text-[#C49A52]'
          }`}
          title="Switch to Sigiriya Lake panorama from design"
        >
          <span>🌄 Sigiriya Panorama</span>
        </button>
        <button 
          onClick={() => setHeroScenery('seaview')}
          className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer font-medium ${
            heroScenery === 'seaview' 
              ? 'bg-[#087E8B] text-white shadow-xs' 
              : 'text-[#123451] hover:text-[#087E8B]'
          }`}
          title="Switch to Indian Ocean Sea View"
        >
          <span>🌊 Sea View</span>
        </button>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-20 sm:pb-32">
        <div className="max-w-xl">
          
          {/* Decorative Pearl Accent from User Mockup */}
          <div className="flex items-center gap-2.5 mb-4 select-none">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#C49A52]/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-white via-[#FAF6EE] to-[#D5C2A5] border-2 border-[#C49A52] shadow-sm" />
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#C49A52]/80" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#123451] font-semibold leading-[1.12] mb-3 tracking-tight">
            Discover Sri Lanka’s<br />
            <span className="font-serif text-[#123451]">
              Hidden Treasures
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-base sm:text-xl text-[#123451]/85 mb-8 font-normal leading-relaxed">
            Authentic journeys. Unforgettable memories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button 
              onClick={onExploreTours}
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#C49A52] hover:bg-[#B58A42] active:bg-[#9B7532] transition-all duration-200 shadow-md shadow-[#C49A52]/30 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
            >
              <span>Explore Our Tours →</span>
            </button>
            
            <button 
              onClick={onTalkToUs}
              className="px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#123451] hover:text-[#123451] bg-white/90 hover:bg-white border border-[#123451]/25 hover:border-[#C49A52] shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#087E8B]" />
              <span>Talk to us</span>
            </button>
          </div>

          {/* Proof Badge */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#E6DDCF] text-xs text-[#123451]">
            <span className="flex items-center gap-1 text-[#C49A52]">
              <Star className="w-3.5 h-3.5 fill-[#C49A52]" />
              <strong className="font-semibold">4.9 / 5.0</strong>
            </span>
            <span className="text-[#C49A52]/50">•</span>
            <span>4,800+ Happy Travelers</span>
            <span className="text-[#C49A52]/50">•</span>
            <span className="text-[#385B45] font-medium">SLTDA Approved</span>
          </div>

        </div>
      </div>

      {/* Signature Pearl Wave Divider with 5 Pearls at Center Crest */}
      <div className="relative w-full overflow-hidden leading-none z-20 -mt-1 select-none pointer-events-none">
        <svg 
          viewBox="0 0 1440 85" 
          className="w-full h-14 sm:h-20 md:h-24 fill-[#F8F4EC]"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C380,68 1060,68 1440,0 L1440,85 L0,85 Z" 
            fill="#F8F4EC"
          />
          <path 
            d="M0,0 C380,68 1060,68 1440,0" 
            fill="none" 
            stroke="#C49A52" 
            strokeWidth="2" 
            opacity="0.7"
          />
        </svg>

        {/* 5 Lustrous Pearls Cluster at Center Crest */}
        <div className="absolute top-[30%] sm:top-[34%] left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2 filter drop-shadow-md">
          {/* Pearl 1 (small) */}
          <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-br from-white via-[#FAF6EE] to-[#D5C2A5] border border-[#C49A52] shadow-sm" />
          {/* Pearl 2 (medium) */}
          <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-white via-[#FAF6EE] to-[#D5C2A5] border border-[#C49A52] shadow-sm" />
          {/* Pearl 3 (large central) */}
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-white via-[#FDFBF7] to-[#C9B497] border-2 border-[#C49A52] shadow-md ring-2 ring-white/70" />
          {/* Pearl 4 (medium) */}
          <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-white via-[#FAF6EE] to-[#D5C2A5] border border-[#C49A52] shadow-sm" />
          {/* Pearl 5 (small) */}
          <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-br from-white via-[#FAF6EE] to-[#D5C2A5] border border-[#C49A52] shadow-sm" />
        </div>
      </div>
    </section>
  );
};
