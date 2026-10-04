import southernBeachImg from '@/src/assets/images/sri_lanka_southern_beach_1791136085496.jpg';
import hillCountryImg from '@/src/assets/images/sri_lanka_hill_country_1791136102810.jpg';
import sigiriyaImg from '@/src/assets/images/sri_lanka_sigiriya_rock_1791136114644.jpg';
import wildlifeImg from '@/src/assets/images/sri_lanka_wildlife_safari_1791136126574.jpg';
import logoCrestImg from '@/src/assets/images/ocean_pearl_crest_logo_1791136137761.jpg';
import officialLogoImg from '@/src/assets/images/ocean_pearl_official_logo_1791136513544.jpg';
import seaviewHeroImg from '@/src/assets/images/sri_lanka_seaview_hero_1791138289812.jpg';
import luxurySeaViewImg from '@/src/assets/images/sri_lanka_luxury_seaview_1791138405089.jpg';
import elephantsRiverImg from '@/src/assets/images/sri_lanka_elephants_river_1791138311102.jpg';
import sigiriyaLakeHeroImg from '@/src/assets/images/sigiriya_lake_traveler_hero_1791138912867.jpg';
import culturalWondersRuinsImg from '@/src/assets/images/cultural_wonders_ruins_1791138929023.jpg';
import coastalEscapesSeaviewImg from '@/src/assets/images/coastal_escapes_seaview_1791138943416.jpg';

import realAirportKaiserImg from '@/src/assets/images/real_airport_kaiser_1791141355705.jpg';
import realBoatCoconutsImg from '@/src/assets/images/real_boat_coconuts_1791141373388.jpg';
import realTeaLabookellieImg from '@/src/assets/images/real_tea_labookellie_1791141389004.jpg';
import realTrainJourneyImg from '@/src/assets/images/real_train_journey_1791141404147.jpg';
import realTuktuk939Img from '@/src/assets/images/real_tuktuk_939_1791141423538.jpg';
import realMangroveBoatImg from '@/src/assets/images/real_mangrove_boat_1791141436545.jpg';
import realAirportGiuliaImg from '@/src/assets/images/real_airport_giulia_1791141451560.jpg';
import realFruitMarketImg from '@/src/assets/images/real_fruit_market_1791141465889.jpg';

export { 
  southernBeachImg, 
  hillCountryImg, 
  sigiriyaImg, 
  wildlifeImg, 
  logoCrestImg, 
  officialLogoImg,
  seaviewHeroImg,
  luxurySeaViewImg,
  elephantsRiverImg,
  sigiriyaLakeHeroImg,
  culturalWondersRuinsImg,
  coastalEscapesSeaviewImg,
  realAirportKaiserImg,
  realBoatCoconutsImg,
  realTeaLabookellieImg,
  realTrainJourneyImg,
  realTuktuk939Img,
  realMangroveBoatImg,
  realAirportGiuliaImg,
  realFruitMarketImg
};

export interface TourPhoto {
  id: string;
  title: string;
  tag: string;
  location: string;
  caption: string;
  image: string;
  traveler: string;
}

export const PAST_TOUR_PHOTOS: TourPhoto[] = [
  {
    id: 'tp-1',
    title: 'VIP Airport Welcome — Mr & Mrs Kaiser',
    tag: 'WELCOME',
    location: 'Bandaranaike International Airport (CMB)',
    caption: 'Vishwa in official Ocean Pearl uniform greeting Mr. and Mrs. Kaiser at Colombo Airport arrivals with fresh purple orchid flower leis and customized welcome signage.',
    image: realAirportKaiserImg,
    traveler: 'Mr & Mrs Kaiser (Germany)'
  },
  {
    id: 'tp-2',
    title: 'Lagoon Boat Ride & Fresh King Coconuts',
    tag: 'COASTAL',
    location: 'Madu Ganga / Negombo Lagoon',
    caption: 'Sipping sweet fresh Thambili (King Coconuts) with straws and enjoying a fresh fruit platter of pineapple and watermelon on a sunny boat cruise with Vishwa.',
    image: realBoatCoconutsImg,
    traveler: 'Giulia & Mother (Italy)'
  },
  {
    id: 'tp-3',
    title: 'Labookellie Tea Estate & Central Highlands',
    tag: 'HIGHLANDS',
    location: 'Nuwara Eliya Hill Country',
    caption: 'Selfie at the historic Labookellie tea plantation with Vishwa in his Ocean Pearl Travel polo shirt, overlooking emerald mountain tea slopes.',
    image: realTeaLabookellieImg,
    traveler: 'Giulia & Friends (Italy)'
  },
  {
    id: 'tp-4',
    title: 'Scenic Hill Country Train Journey',
    tag: 'JOURNEYS',
    location: 'Nanu Oya to Ella Railway Station',
    caption: 'Excited smiles on the historic railway platform beside Sri Lanka’s classic green passenger train before crossing misty hill valleys.',
    image: realTrainJourneyImg,
    traveler: 'European Holiday Travelers'
  },
  {
    id: 'tp-5',
    title: 'Madu Ganga Mangrove River Safari',
    tag: 'NATURE',
    location: 'Balapitiya & Bentota Mangrove Forest',
    caption: 'Group of 15 international senior travelers cruising through a dense green tunnel of ancient mangrove trees and arching vines.',
    image: realMangroveBoatImg,
    traveler: '15-Guest Senior Wildlife Group'
  },
  {
    id: 'tp-6',
    title: 'Classic Red Tuk-Tuk Ride (#939)',
    tag: 'CULTURE',
    location: 'Ancient Archaeological Site Roads',
    caption: 'Vishwa in a summer floral shirt taking a sunny selfie next to the bright red three-wheeler tuk-tuk (#939) with mature traveler in SpaceX cap.',
    image: realTuktuk939Img,
    traveler: 'SpaceX Fan & Solo Explorer'
  },
  {
    id: 'tp-7',
    title: 'VIP Arrival — Miss Giulia Frugoni',
    tag: 'WELCOME',
    location: 'Colombo Airport Arrival Terminal',
    caption: 'Warm airport reception with flower garlands and official "Welcome To Sri Lanka Miss Giulia Frugoni" sign in front of the illuminated Colombo terminal sign.',
    image: realAirportGiuliaImg,
    traveler: 'Miss Giulia Frugoni (Italy)'
  },
  {
    id: 'tp-8',
    title: 'Roadside Tropical Banana & Fruit Stall',
    tag: 'EXPERIENCE',
    location: 'Country Road Fruit Stop',
    caption: 'A delicious pit-stop tasting fresh tropical bananas, king pineapples, and coconuts with travelers and local drivers on a sunny day.',
    image: realFruitMarketImg,
    traveler: 'Group Tour Guests'
  }
];

export interface Destination {
  id: string;
  category: 'COASTAL' | 'HIGHLANDS' | 'HERITAGE' | 'WILDLIFE';
  title: string;
  description: string;
  linkText: string;
  image: string;
  tagline: string;
  bestMonths: string;
  highlights: string[];
  recommendedStay: string;
  sampleDay: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'southern-beaches',
    category: 'COASTAL',
    title: 'Southern Beaches',
    description: 'Golden sand, surf and whale watching from Mirissa to Unawatuna.',
    linkText: 'Tailored routes',
    image: southernBeachImg,
    tagline: 'Sun-drenched coastlines, UNESCO Dutch Forts & blue whales',
    bestMonths: 'November to April (Calm seas & whale migration)',
    recommendedStay: '3 - 5 Days',
    highlights: [
      'Dawn blue whale and dolphin watching expeditions off Mirissa harbour',
      'Wandering the cobblestone ramparts and artisan boutiques of Galle Fort (UNESCO)',
      'Sunset coconut tree hill panoramas and gentle beginner surf breaks in Weligama',
      'Traditional stilt fishermen encounters along Ahangama and Koggala',
      'Secluded luxury beach villas and oceanfront seafood candlelight dining'
    ],
    sampleDay: 'Morning private catamaran sail seeking blue whales, afternoon stroll through 17th-century Galle Fort ramparts, followed by sundowner cocktails on Mirissa bay.'
  },
  {
    id: 'hill-country',
    category: 'HIGHLANDS',
    title: 'Hill Country',
    description: 'Tea estates, waterfalls and the scenic Kandy-Ella train ride.',
    linkText: 'Scenic rail & tea',
    image: hillCountryImg,
    tagline: 'Emerald tea valleys, colonial bungalows & misty mountain trails',
    bestMonths: 'Year-round (December to May offers crisp mountain skies)',
    recommendedStay: '3 - 4 Days',
    highlights: [
      'Reserved first-class seats on the world-famous Kandy to Ella blue train',
      'Private Ceylon tea tasting & plucking experience at a historic plantation factory',
      'Sunrise hike to Little Adam’s Peak and the iconic Nine Arch Bridge arches',
      'Cascading vistas of Ravana Falls and Ramboda Falls amidst cool mist',
      'High tea at the colonial Grand Hotel in "Little England" (Nuwara Eliya)'
    ],
    sampleDay: 'Board the morning scenic train through dramatic viaducts and cloud forests, check into a restored planter bungalow, and take an evening private tea-blending masterclass.'
  },
  {
    id: 'cultural-triangle',
    category: 'HERITAGE',
    title: 'Cultural Triangle',
    description: 'Sigiriya rock, Dambulla caves and the ancient royal cities.',
    linkText: 'Ancient history',
    image: sigiriyaImg,
    tagline: '2,500 years of civilization, royal palaces & cave monasteries',
    bestMonths: 'January to September (Dry weather for climbing and exploring)',
    recommendedStay: '2 - 4 Days',
    highlights: [
      'Early morning ascent of Sigiriya Lion Rock Fortress before the tropical heat',
      'The sacred golden cave temples of Dambulla with 150+ Buddha statues',
      'Bicycle exploration of Polonnaruwa’s ancient ruins and royal reservoir banks',
      'Sacred Tooth Relic Temple (Sri Dalada Maligawa) evening puja ceremony in Kandy',
      'Rural catamaran village safari with traditional chena farm lunch served in lotus leaves'
    ],
    sampleDay: 'Early dawn climb of the 5th-century Sigiriya Citadel, followed by an authentic village cooking demonstration in Habarana and twilight temple blessing.'
  },
  {
    id: 'wildlife-safaris',
    category: 'WILDLIFE',
    title: 'Wildlife Safaris',
    description: 'Leopards at Yala and herds of elephants in Udawalawe.',
    linkText: 'Guided Safaris',
    image: wildlifeImg,
    tagline: 'One of the highest leopard densities on earth & wild elephant herds',
    bestMonths: 'February to October (Peak dry season for wildlife gathering at waterholes)',
    recommendedStay: '2 - 3 Days',
    highlights: [
      'Exclusive private 4x4 safari with experienced wildlife tracker in Yala National Park',
      'Witnessing massive elephant gatherings (300+ gentle giants) at Minneriya / Kaudulla',
      'Udawalawe elephant transit home rehabilitation visit and park game drive',
      'Leopard, sloth bear, marsh mugger crocodile and 200+ exotic bird species tracking',
      'Glamping under the stars in luxury tented camps with bush dinners'
    ],
    sampleDay: '05:30 AM dawn game drive into Yala Block 1 tracking elusive Sri Lankan leopards, afternoon rest at a luxury jungle lodge, followed by late afternoon elephant watching.'
  }
];

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  tagline: string;
  priceUSD: number;
  highlightRoute: string[];
  badge?: string;
  inclusions: string[];
  itinerary: { day: string; title: string; desc: string }[];
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'essence-of-ceylon',
    name: 'Essence of Ceylon',
    duration: '7 Days / 6 Nights',
    tagline: 'The perfect introductory circuit covering culture, hills, wildlife & beaches',
    priceUSD: 1150,
    badge: 'Most Popular',
    highlightRoute: ['Negombo', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Galle'],
    inclusions: [
      'Dedicated English-speaking SLTDA licensed Chauffeur Guide',
      'Private air-conditioned luxury vehicle with unlimited mileage & fuel',
      'All highway tolls, parking fees & chauffeur accommodation/meals',
      'Reserved observation saloon train tickets (Kandy to Ella)',
      'Private 4x4 Jeep Safari in Yala National Park with park tracker',
      'Daily complimentary bottled mineral water & Wi-Fi onboard'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Negombo Coastal Warmup', desc: 'Airport VIP pickup by your private chauffeur. Check into beachfront hotel, fresh king coconut welcome and evening lagoon stroll.' },
      { day: 'Day 2', title: 'Sigiriya Rock & Dambulla Cave Temple', desc: 'Ascend the dramatic 5th century citadel of Sigiriya. Explore golden Buddhist caves in Dambulla.' },
      { day: 'Day 3', title: 'Kandy & The Sacred Temple of the Tooth', desc: 'Spice garden walk in Matale. Visit the Sacred Tooth Relic temple and witness Kandy cultural dance.' },
      { day: 'Day 4', title: 'Scenic Blue Train to Ella & Tea Estates', desc: 'Board the world-famous mountain railway traversing misty pine forests, waterfalls and tea plantations.' },
      { day: 'Day 5', title: 'Nine Arch Bridge & Yala Safari', desc: 'Sunrise walk to Nine Arch Bridge, descend to southern plains for afternoon leopard & elephant safari.' },
      { day: 'Day 6', title: 'Galle Fort Heritage & Southern Beach', desc: 'Drive along golden coast to historic Galle Fort. Sunset walk along Dutch bastion ramparts.' },
      { day: 'Day 7', title: 'Colombo / Airport Departure', desc: 'Scenic coastal highway transfer directly to Bandaranaike International Airport for your departure.' }
    ]
  },
  {
    id: 'heritage-wildlife-odyssey',
    name: 'Grand Heritage & Wildlife Odyssey',
    duration: '10 Days / 9 Nights',
    tagline: 'Deep dive into royal kingdoms, untamed jungles, tea peaks and coastal charm',
    priceUSD: 1680,
    badge: 'In-Depth Exploration',
    highlightRoute: ['Negombo', 'Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Nuwara Eliya', 'Yala', 'Mirissa'],
    inclusions: [
      'Private dedicated luxury SUV or Van with certified chauffeur guide',
      'All monument and archaeological site entrance logistics handled',
      'Two National Park safaris (Minneriya elephant gathering & Yala leopard safari)',
      'First-class scenic hill country train journey',
      'Private Ceylon tea tasting & plantation bungalow tour',
      '24/7 Concierge hotline throughout your journey'
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Negombo to Ancient Anuradhapura', desc: 'Sacred Bo Tree (oldest historically authenticated tree), Ruwanwelisaya stupa, and ancient monasteries.' },
      { day: 'Day 3-4', title: 'Cultural Triangle & Wildlife Gathering', desc: 'Sigiriya citadel sunrise, bicycle tour of Polonnaruwa ruins, and afternoon elephant safari at Minneriya.' },
      { day: 'Day 5-6', title: 'Spiritual Kandy to Tea Capital Nuwara Eliya', desc: 'Temple of the Tooth, Royal Botanical Gardens Peradeniya, waterfalls and colonial tea plantations.' },
      { day: 'Day 7-8', title: 'Ella Mountain Trails to Yala Wilderness', desc: 'Nine Arch Bridge, Little Adam’s Peak, Ravana Falls and thrilling Yala safari tracker drive.' },
      { day: 'Day 9-10', title: 'Mirissa Whales, Galle Dutch Fort & Airport', desc: 'Whale watching excursion, Galle Fort exploration, coastal relaxation and airport farewell.' }
    ]
  },
  {
    id: 'southern-surf-safari',
    name: 'Southern Coast, Surf & Safari',
    duration: '5 Days / 4 Nights',
    tagline: 'A relaxed coastal getaway blending ocean breaks, whale watching and wild leopards',
    priceUSD: 890,
    badge: 'Quick Escape',
    highlightRoute: ['Negombo', 'Udawalawe', 'Yala', 'Mirissa', 'Galle'],
    inclusions: [
      'Private air-conditioned executive vehicle with dedicated driver',
      'Private 4x4 safari with all permits and tracker fees',
      'Whale watching boat tickets or surf board rental arrangement',
      'Expressway tolls and roundtrip airport transfers'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Airport to Udawalawe National Park', desc: 'Direct luxury drive to Udawalawe, afternoon elephant safari in the park sanctuary.' },
      { day: 'Day 2', title: 'Udawalawe to Yala Leopard Territory', desc: 'Visit elephant transit home and afternoon game drive in Yala National Park.' },
      { day: 'Day 3-4', title: 'Mirissa, Weligama & Galle Dutch Fort', desc: 'Oceanfront relaxation, surf sessions in Weligama, whale cruise and Galle Fort rampart strolls.' },
      { day: 'Day 5', title: 'Negombo / Airport Transfer', desc: 'Smooth highway transfer back to BIA airport.' }
    ]
  }
];

export interface Review {
  id: string;
  quote: string;
  author: string;
  location: string;
  source: string;
  rating: number;
  tour: string;
  date: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'review-1',
    quote: "We couldn't have wished for a better guide and driver for our trip to Sri Lanka. Ocean Pearl Travel became a true friend and made every moment effortless and magical.",
    author: "Ilaria",
    location: "Italy",
    source: "TripAdvisor",
    rating: 5,
    tour: "10-Day Island Discovery",
    date: "February 2026"
  },
  {
    id: 'review-2',
    quote: "If you are reading this, book your trip with Vishwa now! I did a solo trip to Sri Lanka and wanted a tour company to feel safe with while exploring. From the first greeting at Negombo airport to the secret spots in Ella, it was pure perfection.",
    author: "Janaia Farrell",
    location: "Canada / Hong Kong",
    source: "Google Reviews",
    rating: 5,
    tour: "Custom Solo Expedition",
    date: "January 2026"
  },
  {
    id: 'review-3',
    quote: "Seamless from first email to airport drop-off. Vishwa and his team took care of all train tickets, incredible boutique hotels, and navigated the roads with extreme care. Highly recommend.",
    author: "The Müllers",
    location: "Germany",
    source: "TripAdvisor",
    rating: 5,
    tour: "14-Day Family Grand Tour",
    date: "December 2025"
  },
  {
    id: 'review-4',
    quote: "As two women traveling in Sri Lanka for the first time, safety and comfort were our top priorities. Ocean Pearl Travel exceeded every single expectation. The vehicle was spotless, water always cold, and the local insight was unmatched.",
    author: "Sophie & Claire",
    location: "United Kingdom",
    source: "TripAdvisor",
    rating: 5,
    tour: "Cultural Triangle & South Coast",
    date: "January 2026"
  },
  {
    id: 'review-5',
    quote: "Seeing leopards in Yala and climbing Sigiriya at sunrise without the crowds was only possible because our driver-guide knew the exact timings. Truly five-star service at honest prices.",
    author: "David & Marcus",
    location: "Australia",
    source: "Google Reviews",
    rating: 5,
    tour: "Wildlife & Highlands Route",
    date: "November 2025"
  }
];

export const GALLERY_ITEMS = [
  {
    title: 'Mirissa Golden Shores & Palm Trees',
    category: 'Coastal',
    location: 'Mirissa, South Coast'
  },
  {
    title: 'Scenic Ceylon Blue Train & Nine Arch Bridge',
    category: 'Highlands',
    location: 'Ella, Central Highlands'
  },
  {
    title: 'Sigiriya Ancient Lion Rock Palace',
    category: 'Heritage',
    location: 'Cultural Triangle'
  },
  {
    title: 'Sri Lankan Leopard on Safari',
    category: 'Wildlife',
    location: 'Yala National Park'
  },
  {
    title: 'Traditional Stilt Fishermen at Sunset',
    category: 'Culture',
    location: 'Ahangama Coast'
  },
  {
    title: 'Misty Tea Country Hills & Tea Pluckers',
    category: 'Highlands',
    location: 'Nuwara Eliya'
  }
];
