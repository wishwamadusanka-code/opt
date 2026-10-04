import React, { useState } from 'react';
import { X, Check, Calendar, Users, Car, Hotel, Compass, Send, MessageSquare } from 'lucide-react';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDestination?: string;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  preselectedDestination,
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    preselectedDestination ? [preselectedDestination] : ['Southern Beaches', 'Cultural Triangle']
  );
  const [duration, setDuration] = useState('7-10 Days');
  const [travelers, setTravelers] = useState('2 Travellers');
  const [vehicle, setVehicle] = useState('Luxury AC Executive Van');
  const [hotelTier, setHotelTier] = useState('Boutique & Heritage Villas');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [dates, setDates] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const interestOptions = [
    'Southern Beaches & Surf',
    'Hill Country & Scenic Train',
    'Cultural Triangle & Sigiriya',
    'Wildlife Safari (Yala / Udawalawe)',
    'Ayurveda & Wellness',
    'Whale & Dolphin Watching',
    'Ceylon Tea Plantation Stay',
    'Street Food & Village Cooking'
  ];

  const durationOptions = ['4-6 Days', '7-10 Days', '11-14 Days', '15+ Days'];
  const travelerOptions = ['Solo Traveler', '2 Travellers (Couple)', '3-4 Travellers (Family)', '5+ Group'];
  const vehicleOptions = [
    { name: 'Luxury AC Sedan', desc: 'Ideal for 1-2 passengers with luggage' },
    { name: 'Luxury AC Executive Van', desc: 'Spacious high-roof Toyota KDH for 2-6 pax' },
    { name: '4x4 Prado / SUV', desc: 'All-terrain comfort and elevated viewpoints' }
  ];
  const hotelTiers = [
    { name: 'Boutique & Heritage Villas', desc: 'Colonial tea bungalows, Dutch fort manors' },
    { name: '5-Star Luxury Resorts', desc: 'Oceanfront & mountain luxury international standards' },
    { name: 'Comfort Standard & Eco Lodges', desc: 'Charming nature lodges with authentic local hospitality' }
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Vishwa! I'd like to plan a Sri Lanka trip with Ocean Pearl Travel.\n` +
      `• Name: ${name || 'Guest'}\n` +
      `• Duration: ${duration}\n` +
      `• Travelers: ${travelers}\n` +
      `• Vehicle: ${vehicle}\n` +
      `• Hotels: ${hotelTier}\n` +
      `• Interests: ${selectedInterests.join(', ') || 'Custom highlights'}\n` +
      `• Dates: ${dates || 'Upcoming months'}\n` +
      `• Notes: ${notes || 'Looking forward to your suggestions!'}`
    );
    const url = `https://wa.me/94775507506?text=${text}`;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C49A52]/20 flex items-center justify-between bg-[#123451]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49A52] font-semibold block">
              Tailor-Made Journey
            </span>
            <h2 className="font-serif text-2xl text-[#F8F4EC] font-medium">
              Plan Your Sri Lanka Adventure
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
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#385B45]/15 border border-[#385B45]/40 text-[#385B45] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#123451]">
                Inquiry Received with Gratitude!
              </h3>
              <p className="text-[#3E566C] text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#123451] font-semibold">{name || 'valued guest'}</span>. Vishwa and the Ocean Pearl concierge team are reviewing your route and will send your customized itinerary within 24 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendWhatsApp}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#C49A52] hover:bg-[#B38943] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#F8F4EC]" />
                  <span>Send direct copy to WhatsApp Concierge</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-[#123451] border border-[#123451]/30 hover:border-[#123451] transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendEmail} className="space-y-6">
              
              {/* Step 1: Interests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123451] mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#C49A52]" />
                  What experiences interest you?
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {interestOptions.map((opt) => {
                    const isSelected = selectedInterests.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => toggleInterest(opt)}
                        className={`p-2.5 rounded-lg border text-left transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#123451] border-[#C49A52] text-[#F8F4EC] shadow-sm'
                            : 'bg-white border-[#E2D8C8] text-[#3E566C] hover:border-[#C49A52] hover:text-[#123451]'
                        }`}
                      >
                        <span className="truncate">{opt}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#C49A52] shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Duration & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123451] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#087E8B]" />
                    Trip Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-white border border-[#DCD3C5] rounded-lg p-2.5 text-xs text-[#123451] focus:outline-none focus:border-[#C49A52]"
                  >
                    {durationOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123451] mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#087E8B]" />
                    Party Size
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-white border border-[#DCD3C5] rounded-lg p-2.5 text-xs text-[#123451] focus:outline-none focus:border-[#C49A52]"
                  >
                    {travelerOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Vehicle Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123451] mb-2 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#C49A52]" />
                  Dedicated Private Vehicle
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {vehicleOptions.map((v) => (
                    <button
                      type="button"
                      key={v.name}
                      onClick={() => setVehicle(v.name)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        vehicle === v.name
                          ? 'bg-[#123451] border-[#C49A52] text-white shadow-sm'
                          : 'bg-white border-[#E2D8C8] text-[#3E566C] hover:border-[#C49A52]'
                      }`}
                    >
                      <div className={`text-xs font-medium ${vehicle === v.name ? 'text-white' : 'text-[#123451]'}`}>{v.name}</div>
                      <div className={`text-[10px] mt-1 leading-snug ${vehicle === v.name ? 'text-[#F8F4EC]/80' : 'text-[#627B91]'}`}>{v.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Accommodation Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123451] mb-2 flex items-center gap-1.5">
                  <Hotel className="w-4 h-4 text-[#385B45]" />
                  Accommodation Style
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {hotelTiers.map((h) => (
                    <button
                      type="button"
                      key={h.name}
                      onClick={() => setHotelTier(h.name)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        hotelTier === h.name
                          ? 'bg-[#123451] border-[#C49A52] text-white shadow-sm'
                          : 'bg-white border-[#E2D8C8] text-[#3E566C] hover:border-[#C49A52]'
                      }`}
                    >
                      <div className={`text-xs font-medium ${hotelTier === h.name ? 'text-white' : 'text-[#123451]'}`}>{h.name}</div>
                      <div className={`text-[10px] mt-1 leading-snug ${hotelTier === h.name ? 'text-[#F8F4EC]/80' : 'text-[#627B91]'}`}>{h.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5: Contact Details */}
              <div className="p-4 rounded-xl bg-white border border-[#DCD3C5] space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-[#C49A52] font-semibold block">
                  Where should we send your custom proposal?
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#DCD3C5] rounded-lg p-2.5 text-xs text-[#123451] placeholder-slate-400 focus:outline-none focus:border-[#C49A52]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#DCD3C5] rounded-lg p-2.5 text-xs text-[#123451] placeholder-slate-400 focus:outline-none focus:border-[#C49A52]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="WhatsApp Number (with country code)"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#DCD3C5] rounded-lg p-2.5 text-xs text-[#123451] placeholder-slate-400 focus:outline-none focus:border-[#C49A52]"
                  />
                  <input
                    type="text"
                    placeholder="Approximate Dates / Month (e.g. Dec 2026)"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#DCD3C5] rounded-lg p-2.5 text-xs text-[#123451] placeholder-slate-400 focus:outline-none focus:border-[#C49A52]"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Special requests, favorite pace, dietary preferences, or bucket-list spots..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#DCD3C5] rounded-lg p-2.5 text-xs text-[#123451] placeholder-slate-400 focus:outline-none focus:border-[#C49A52] resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#C49A52] hover:bg-[#B38943] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#F8F4EC]" />
                  <span>Send Itinerary Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto py-3 px-6 rounded-full text-xs font-medium text-[#123451] border border-[#123451]/40 hover:border-[#123451] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#087E8B]" />
                  <span>Or Send via WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-[#627B91] text-center">
                SLTDA Tourist Board Approved Operator • 100% No Obligation • Guaranteed Response within 24h
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
