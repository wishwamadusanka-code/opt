import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA } from '../data/travelData';

interface ReviewsProps {
  onViewAllReviews: () => void;
}

export const Reviews: React.FC<ReviewsProps> = ({ onViewAllReviews }) => {
  const featuredReviews = REVIEWS_DATA.slice(0, 3);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F8F4EC] border-t border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A52] font-semibold block mb-2">
            Travellers say
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#123451] tracking-tight">
            Loved by our guests
          </h2>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#E6DDCF] hover:border-[#C49A52] transition-all duration-300 flex flex-col justify-between luxury-card-shadow"
            >
              <div>
                {/* Pearl Gold Quote Mark */}
                <div className="font-serif text-4xl text-[#C49A52] leading-none mb-4 select-none">
                  “
                </div>
                
                {/* Quote Text */}
                <p className="text-[#20384E] text-sm sm:text-[15px] font-normal italic leading-relaxed mb-6">
                  {rev.quote}
                </p>
              </div>

              {/* Author attribution */}
              <div className="pt-4 border-t border-[#EAE2D5] flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[#9B7532] font-serif font-medium">
                  — {rev.author} , {rev.location}
                </span>
                <div className="flex items-center gap-0.5 text-[#C49A52]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C49A52]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all reviews CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#123451] hover:text-[#C49A52] transition-colors cursor-pointer"
          >
            <span>Read all 140+ verified guest reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C49A52]" />
          </button>
        </div>

      </div>
    </section>
  );
};
