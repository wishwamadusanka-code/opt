import React, { useState } from 'react';
import { officialLogoImg } from '../data/travelData';
import { Menu, X, MessageSquare, Compass } from 'lucide-react';

interface HeaderProps {
  onPlanTripClick: () => void;
  onWhatsAppClick: () => void;
  onToursClick: () => void;
  onReviewsClick: () => void;
  onGalleryClick: () => void;
  onAboutClick: () => void;
  onDestinationsClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onPlanTripClick,
  onWhatsAppClick,
  onToursClick,
  onReviewsClick,
  onGalleryClick,
  onAboutClick,
  onDestinationsClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F4EC]/95 backdrop-blur-md border-b border-[#E6DDCF] shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a 
          href="#" 
          className="flex items-center gap-3.5 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A52] rounded-lg p-1"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C49A52] p-0.5 shadow-sm group-hover:scale-105 transition-transform bg-white">
            <img 
              src={officialLogoImg} 
              alt="Ocean Pearl Travel Official Logo" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#123451] uppercase">
              Ocean Pearl Travel
            </span>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-serif italic text-[#C49A52] font-medium">
              <span className="w-5 h-[1px] bg-[#C49A52]/70" />
              <span>Discover Sri Lanka’s Hidden Treasures</span>
              <span className="w-5 h-[1px] bg-[#C49A52]/70" />
            </div>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium tracking-wide text-[#123451]">
          <a 
            href="#"
            className="relative py-1 text-[#123451] font-semibold transition-colors hover:text-[#C49A52]"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C49A52] rounded-full" />
          </a>
          <button 
            onClick={onToursClick}
            className="py-1 text-[#123451] hover:text-[#C49A52] transition-colors focus:outline-none cursor-pointer"
          >
            Tours
          </button>
          <button 
            onClick={onDestinationsClick}
            className="py-1 text-[#123451] hover:text-[#C49A52] transition-colors focus:outline-none cursor-pointer"
          >
            Destinations
          </button>
          <button 
            onClick={onGalleryClick}
            className="py-1 text-[#123451] hover:text-[#C49A52] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5"
          >
            <span>Tour Moments</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-[#C49A52] text-white font-bold tracking-wider uppercase">
              Real
            </span>
          </button>
          <button 
            onClick={onAboutClick}
            className="py-1 text-[#123451] hover:text-[#C49A52] transition-colors focus:outline-none cursor-pointer"
          >
            About Us
          </button>
          <button 
            onClick={onWhatsAppClick}
            className="py-1 text-[#123451] hover:text-[#C49A52] transition-colors focus:outline-none cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={onPlanTripClick}
            className="px-6 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#C49A52] hover:bg-[#B58A42] active:bg-[#9B7532] rounded-full shadow-md shadow-[#C49A52]/25 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-white" />
            <span>Plan Your Trip →</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button 
            onClick={onPlanTripClick}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#C49A52] rounded-full shadow-sm"
          >
            Plan Trip →
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#123451] hover:text-[#C49A52] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F8F4EC] border-b border-[#E6DDCF] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm text-[#123451]">
            <a 
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left px-3 py-2 rounded font-semibold text-[#C49A52] bg-[#C49A52]/15"
            >
              Home
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onToursClick(); }}
              className="text-left px-3 py-2 rounded hover:bg-[#123451]/5 hover:text-[#C49A52]"
            >
              Tours
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onDestinationsClick(); }}
              className="text-left px-3 py-2 rounded hover:bg-[#123451]/5 hover:text-[#C49A52]"
            >
              Destinations
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onGalleryClick(); }}
              className="text-left px-3 py-2 rounded hover:bg-[#123451]/5 hover:text-[#C49A52] flex items-center justify-between"
            >
              <span>Tour Moments</span>
              <span className="text-[10px] text-[#C49A52] font-bold uppercase">Real</span>
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onAboutClick(); }}
              className="text-left px-3 py-2 rounded hover:bg-[#123451]/5 hover:text-[#C49A52]"
            >
              About Us
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onWhatsAppClick(); }}
              className="text-left px-3 py-2 rounded hover:bg-[#123451]/5 hover:text-[#C49A52] col-span-2"
            >
              Contact & Concierge
            </button>
          </div>
          <div className="pt-2 border-t border-[#E6DDCF] space-y-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onPlanTripClick(); }}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#C49A52] rounded-full flex items-center justify-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4 text-white" />
              Plan Your Trip →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
