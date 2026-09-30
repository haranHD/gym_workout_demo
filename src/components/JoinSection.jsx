import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export default function JoinSection({ onOpenJoinModal }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappJoinMessage
  )}`;

  return (
    <section id="join" className="py-20 lg:py-28 bg-[#090a0e] relative overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
          alt="Gym background"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0e] via-[#090a0e]/85 to-[#090a0e]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>START YOUR TRANSFORMATION</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
          READY TO BECOME{' '}
          <span className="text-gold-gradient block sm:inline">
            UN-BEATEN?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-2xl font-heading text-neutral-200 uppercase tracking-wide">
          Take the first step toward a stronger and healthier you.
        </p>

        <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Contact our team directly on WhatsApp or submit a quick inquiry to learn about available batch timings, training schedules, and current onboarding slots.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-bold uppercase tracking-widest text-black bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 rounded-md shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-500 rounded-md shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Informational Disclaimer Box */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Direct studio access via WhatsApp & Phone</span>
          </div>
          <div className="hidden sm:block text-neutral-600">&bull;</div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Membership details provided directly by the studio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
