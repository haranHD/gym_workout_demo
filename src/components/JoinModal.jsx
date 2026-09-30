import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Dumbbell } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export default function JoinModal({ isOpen, onClose }) {
  const [selectedGoal, setSelectedGoal] = useState('Strength Training');
  const [preferredShift, setPreferredShift] = useState('Morning (5:00 AM – 10:00 AM)');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dynamicWhatsAppMessage = `Hi Un-Beaten Fitness Studio, I would like to join! I'm interested in: ${selectedGoal}, preferred timing: ${preferredShift}. Please share membership plans and batch details.`;

  const dynamicWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    dynamicWhatsAppMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-[#0e0f14] border border-amber-500/40 p-6 sm:p-8 shadow-2xl shadow-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5 text-amber-400" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
            <Dumbbell className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400">
            JOIN UN-BEATEN FITNESS STUDIO
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase mt-1">
            START YOUR JOURNEY
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Select your training focus to get personalized batch and timing options.
          </p>
        </div>

        <div className="space-y-4">
            {/* Choose Program Focus */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                1. Select Training Goal / Program
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Strength Training',
                  'Fitness Training',
                  'Personal Training',
                  'Weight Management',
                ].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setSelectedGoal(goal)}
                    className={`p-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-left transition-all border ${
                      selectedGoal === goal
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Batch Timing */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                2. Preferred Timing Slot
              </label>
              <div className="space-y-2">
                {[
                  'Morning (5:00 AM – 10:00 AM)',
                  'Evening (5:00 PM – 9:00 PM)',
                  "Women's Shift (10:00 AM – 8:00 PM)",
                ].map((shift) => (
                  <button
                    key={shift}
                    type="button"
                    onClick={() => setPreferredShift(shift)}
                    className={`w-full p-2.5 rounded-xl text-xs font-medium text-left flex items-center justify-between border transition-all ${
                      preferredShift === shift
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <span>{shift}</span>
                    {preferredShift === shift && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Connect WhatsApp Button */}
            <div className="pt-2 space-y-2">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>INQUIRE VIA WHATSAPP</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-colors"
              >
                <span>Call Studio: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-neutral-500 mt-2">
              No prices are displayed because pricing plans are provided directly by the studio management.
            </p>
          </div>
      </div>
    </div>
  );
}
