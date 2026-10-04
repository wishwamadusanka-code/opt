import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCheck, Clock } from 'lucide-react';
import { officialLogoImg } from '../data/travelData';

interface WhatsAppConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTripPlanner: () => void;
}

export const WhatsAppConciergeModal: React.FC<WhatsAppConciergeModalProps> = ({
  isOpen,
  onClose,
  onOpenTripPlanner,
}) => {
  const [userMsg, setUserMsg] = useState('');

  if (!isOpen) return null;

  const quickPrompts = [
    "Hi Vishwa! I'm planning a 10-day trip to Sri Lanka with my family.",
    "Can you arrange a private chauffeur from Negombo to Sigiriya and Ella?",
    "We want to do leopard safari in Yala and whale watching in Mirissa.",
    "What are your best recommendations for a honeymoon in December?"
  ];

  const handleLaunchWhatsApp = (textToSend?: string) => {
    const text = encodeURIComponent(textToSend || userMsg || "Hello Ocean Pearl Travel! I'd like to plan a private trip in Sri Lanka.");
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
        className="relative w-full max-w-lg bg-[#FDFBF7] border border-[#C49A52]/40 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* WhatsApp Header Bar in Ocean Navy with Gold Accent */}
        <div className="p-4 bg-[#123451] text-white flex items-center justify-between border-b border-[#C49A52]/30 shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C49A52] bg-white">
              <img src={officialLogoImg} alt="Ocean Pearl Travel Official Logo" className="w-full h-full object-cover rounded-full" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#123451]" />
            </div>
            <div>
              <div className="text-sm font-semibold flex items-center gap-1.5 text-[#F8F4EC]">
                <span>Ocean Pearl Concierge (Vishwa)</span>
              </div>
              <div className="text-[11px] text-[#C49A52] flex items-center gap-1 font-medium">
                <span>Online now • +94 775507506</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F8F4EC]/75 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body Simulation */}
        <div className="p-5 bg-[#F8F4EC] space-y-4 max-h-[50vh] overflow-y-auto">
          <div className="flex items-center justify-center">
            <span className="px-3 py-1 rounded-full text-[10px] bg-white text-[#9B7532] border border-[#C49A52]/30 shadow-xs uppercase tracking-wider font-semibold">
              Official SLTDA Verified Travel Support
            </span>
          </div>

          {/* Incoming message from Vishwa */}
          <div className="flex items-start gap-2 max-w-[90%]">
            <div className="p-3.5 rounded-2xl rounded-tl-none bg-white border border-[#E6DDCF] text-xs text-[#123451] leading-relaxed shadow-sm space-y-1.5">
              <p className="font-medium">
                Ayubowan! Welcome to Ocean Pearl Travel. I'm Vishwa, founder and lead travel designer.
              </p>
              <p className="text-[#123451]/80">
                Whether you need airport transfer, a 7 to 14-day private chauffeur tour, or secret tips for the Hill Country, how can I assist your holiday today?
              </p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-[#9B7532] pt-1">
                <Clock className="w-3 h-3" />
                <span>Just now</span>
              </div>
            </div>
          </div>

          {/* Quick reply suggestions */}
          <div className="space-y-1.5 pt-2">
            <span className="text-[11px] uppercase tracking-wider text-[#123451]/70 block font-semibold">
              Quick Inquiry Prompts:
            </span>
            <div className="flex flex-col gap-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLaunchWhatsApp(prompt)}
                  className="text-left p-2.5 rounded-xl bg-white hover:bg-[#F4EFE6] border border-[#E6DDCF] hover:border-[#C49A52] text-xs text-[#123451] transition-all flex items-center justify-between cursor-pointer group shadow-xs"
                >
                  <span className="truncate">{prompt}</span>
                  <Send className="w-3.5 h-3.5 text-[#C49A52] opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Bar & WhatsApp Direct Trigger */}
        <div className="p-4 bg-white border-t border-[#E6DDCF] space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message to Vishwa..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleLaunchWhatsApp();
              }}
              className="flex-1 bg-[#F8F4EC] border border-[#DCD3C5] rounded-full px-4 py-2.5 text-xs text-[#123451] placeholder-slate-400 focus:outline-none focus:border-[#C49A52]"
            />
            <button
              onClick={() => handleLaunchWhatsApp()}
              className="p-2.5 rounded-full bg-[#087E8B] hover:bg-[#06616b] text-white transition-all cursor-pointer shadow-md"
              title="Send to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#123451]/70 pt-1">
            <span>Direct hotline: <strong className="text-[#123451]">+94 775507506</strong></span>
            <button
              onClick={() => {
                onClose();
                onOpenTripPlanner();
              }}
              className="text-[#C49A52] hover:underline cursor-pointer font-semibold"
            >
              Full Trip Planner Form →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
