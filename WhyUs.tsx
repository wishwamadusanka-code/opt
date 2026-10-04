import React from 'react';
import { Compass, Heart, ShieldCheck } from 'lucide-react';

interface WhyUsProps {
  onLearnMore?: (topic: string) => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F4EC] border-t border-[#E6DDCF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A52] font-semibold block mb-2">
            Why travel with us
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#123451] tracking-tight">
            Local expert, <span className="text-[#C49A52] italic font-serif">effortless trips</span>
          </h2>
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Tailor-made (Pearl Gold accent) */}
          <div 
            onClick={() => onLearnMore?.('tailor-made')}
            className="group p-8 rounded-2xl bg-white border border-[#E6DDCF] hover:border-[#C49A52] transition-all duration-300 flex flex-col items-center text-center cursor-pointer luxury-card-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[#C49A52]/15 border border-[#C49A52]/40 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Compass className="w-7 h-7 text-[#C49A52]" />
            </div>
            <h3 className="font-serif text-2xl text-[#123451] font-medium mb-3">
              Tailor-made
            </h3>
            <p className="text-sm text-[#123451]/75 font-normal leading-relaxed max-w-xs">
              Every itinerary shaped around your pace, interests and budget.
            </p>
          </div>

          {/* Card 2: Responsible (Forest Green & Tropical Teal accent) */}
          <div 
            onClick={() => onLearnMore?.('responsible')}
            className="group p-8 rounded-2xl bg-white border border-[#E6DDCF] hover:border-[#385B45] transition-all duration-300 flex flex-col items-center text-center cursor-pointer luxury-card-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[#385B45]/15 border border-[#385B45]/40 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Heart className="w-7 h-7 text-[#385B45]" />
            </div>
            <h3 className="font-serif text-2xl text-[#123451] font-medium mb-3">
              Responsible
            </h3>
            <p className="text-sm text-[#123451]/75 font-normal leading-relaxed max-w-xs">
              We work with local communities and low-impact wildlife operators.
            </p>
          </div>

          {/* Card 3: Fair pricing (Tropical Teal accent) */}
          <div 
            onClick={() => onLearnMore?.('pricing')}
            className="group p-8 rounded-2xl bg-white border border-[#E6DDCF] hover:border-[#087E8B] transition-all duration-300 flex flex-col items-center text-center cursor-pointer luxury-card-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[#087E8B]/15 border border-[#087E8B]/40 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-7 h-7 text-[#087E8B]" />
            </div>
            <h3 className="font-serif text-2xl text-[#123451] font-medium mb-3">
              Fair pricing
            </h3>
            <p className="text-sm text-[#123451]/75 font-normal leading-relaxed max-w-xs">
              No hidden fees — transparent quotes and secure payment.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
