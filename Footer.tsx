import React from 'react';
import { officialLogoImg } from '../data/travelData';

interface FooterProps {
  onWhatsAppClick: () => void;
  onReviewsClick: () => void;
  onAboutClick: () => void;
  onGalleryClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onWhatsAppClick,
  onReviewsClick,
  onAboutClick,
  onGalleryClick,
}) => {
  return (
    <footer className="bg-[#123451] border-t border-[#C49A52]/20 py-14 text-center text-[#F8F4EC]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Brand Lockup */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C49A52]/40 p-0.5 bg-[#0D2438]">
              <img 
                src={officialLogoImg} 
                alt="Ocean Pearl Travel Official Logo" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-serif text-xl font-medium text-[#F8F4EC]">
              Ocean Pearl <span className="text-[#C49A52] italic font-serif">Travel</span>
            </span>
          </div>
          <span className="text-[11px] font-serif italic text-[#C49A52]/90">
            Discover Sri Lanka’s Hidden Treasures
          </span>
        </div>

        {/* Address and Contact Information */}
        <div className="text-xs sm:text-[13px] text-[#F8F4EC]/75 mb-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl leading-relaxed">
          <span>385/13 Kularathna Road, Negombo, Sri Lanka</span>
          <span className="hidden sm:inline text-[#C49A52]/50">•</span>
          <a 
            href="mailto:info.oceanpearltravel@gmail.com" 
            className="hover:text-[#C49A52] transition-colors"
          >
            info.oceanpearltravel@gmail.com
          </a>
          <span className="hidden sm:inline text-[#C49A52]/50">•</span>
          <a 
            href="tel:+94775507506" 
            className="hover:text-[#C49A52] transition-colors tabular-nums"
          >
            +94 775507506 (24/7)
          </a>
        </div>

        {/* Badges / Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#F8F4EC]/80 mb-8">
          {onGalleryClick && (
            <>
              <button 
                onClick={onGalleryClick}
                className="hover:text-[#C49A52] transition-colors cursor-pointer font-medium"
              >
                Tour Moments (Real Photos)
              </button>
              <span className="text-[#C49A52]/40">•</span>
            </>
          )}
          <button 
            onClick={onReviewsClick}
            className="hover:text-[#C49A52] transition-colors cursor-pointer"
          >
            Guest Reviews
          </button>
          <span className="text-[#C49A52]/40">•</span>
          <button 
            onClick={onAboutClick}
            className="hover:text-[#C49A52] transition-colors cursor-pointer"
          >
            Facebook
          </button>
          <span className="text-[#C49A52]/40">•</span>
          <button 
            onClick={onWhatsAppClick}
            className="hover:text-[#C49A52] transition-colors cursor-pointer"
          >
            WhatsApp Concierge
          </button>
          <span className="text-[#C49A52]/40">•</span>
          <button 
            onClick={onAboutClick}
            className="text-[#C49A52] hover:text-[#DFB770] transition-colors cursor-pointer font-semibold"
          >
            SLTDA Tourist Board Approved
          </button>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-[#F8F4EC]/50 font-light">
          © {new Date().getFullYear()} Ocean Pearl Travel. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
