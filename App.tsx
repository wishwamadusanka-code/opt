import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { WhyUs } from './components/WhyUs';
import { Reviews } from './components/Reviews';
import { PlanningCta } from './components/PlanningCta';
import { Verification } from './components/Verification';
import { Footer } from './components/Footer';

import { Destination, TourPackage } from './data/travelData';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { ToursModal } from './components/ToursModal';
import { ReviewsModal } from './components/ReviewsModal';
import { GalleryModal } from './components/GalleryModal';
import { AboutModal } from './components/AboutModal';
import { WhatsAppConciergeModal } from './components/WhatsAppConciergeModal';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [plannerDestinationKicker, setPlannerDestinationKicker] = useState<string | undefined>(undefined);
  
  const [isToursOpen, setIsToursOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const handleOpenPlanTrip = (destinationTitle?: string) => {
    setPlannerDestinationKicker(destinationTitle);
    setIsTripPlannerOpen(true);
  };

  const handleSelectTourForCustomization = (tour: TourPackage) => {
    setPlannerDestinationKicker(tour.name);
    setIsTripPlannerOpen(true);
  };

  const scrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4EC] text-[#123451] flex flex-col font-sans selection:bg-[#C49A52] selection:text-white">
      
      {/* 1. Header (Navbar) */}
      <Header
        onPlanTripClick={() => handleOpenPlanTrip()}
        onWhatsAppClick={() => setIsWhatsAppOpen(true)}
        onToursClick={() => setIsToursOpen(true)}
        onReviewsClick={() => setIsReviewsOpen(true)}
        onGalleryClick={() => setIsGalleryOpen(true)}
        onAboutClick={() => setIsAboutOpen(true)}
        onDestinationsClick={scrollToDestinations}
      />

      {/* 2. Hero Section */}
      <Hero
        onExploreTours={() => setIsToursOpen(true)}
        onTalkToUs={() => setIsWhatsAppOpen(true)}
      />

      {/* 3. Iconic Destinations */}
      <Destinations
        onSelectDestination={(dest) => setSelectedDestination(dest)}
      />

      {/* 4. Why Travel With Us */}
      <WhyUs
        onLearnMore={() => setIsAboutOpen(true)}
      />

      {/* 5. Travellers Say / Reviews */}
      <Reviews
        onViewAllReviews={() => setIsReviewsOpen(true)}
      />

      {/* 6. Start Planning CTA */}
      <PlanningCta
        onEmailInquiry={() => handleOpenPlanTrip()}
        onWhatsAppConcierge={() => setIsWhatsAppOpen(true)}
      />

      {/* 7. Concierge & Official Verification */}
      <Verification
        onChatWithConcierge={() => setIsWhatsAppOpen(true)}
        onViewLocationMap={() => setIsAboutOpen(true)}
        onViewAccreditation={() => setIsAboutOpen(true)}
      />

      {/* 8. Footer */}
      <Footer
        onWhatsAppClick={() => setIsWhatsAppOpen(true)}
        onReviewsClick={() => setIsReviewsOpen(true)}
        onAboutClick={() => setIsAboutOpen(true)}
        onGalleryClick={() => setIsGalleryOpen(true)}
      />

      {/* Interactive Modals & Screens */}
      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanWithDestination={(title) => handleOpenPlanTrip(title)}
      />

      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
        preselectedDestination={plannerDestinationKicker}
      />

      <ToursModal
        isOpen={isToursOpen}
        onClose={() => setIsToursOpen(false)}
        onSelectTour={handleSelectTourForCustomization}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
        onPlanTripClick={() => handleOpenPlanTrip()}
      />

      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        onPlanTripClick={() => handleOpenPlanTrip()}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onPlanTripClick={() => handleOpenPlanTrip()}
        onWhatsAppClick={() => setIsWhatsAppOpen(true)}
      />

      <WhatsAppConciergeModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        onOpenTripPlanner={() => handleOpenPlanTrip()}
      />

    </div>
  );
}
