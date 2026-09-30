import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappJoinMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Popup */}
      {!tooltipDismissed && (
        <div className="mb-2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-emerald-500/40 text-xs text-neutral-200 shadow-xl shadow-black/80 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Chat with Un-Beaten Fitness Studio</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-neutral-500 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white shadow-2xl shadow-emerald-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/30"
        aria-label="Contact on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
