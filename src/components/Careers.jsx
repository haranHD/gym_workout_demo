import React from 'react';
import {
  Sunrise,
  Sunset,
  Clock,
  CheckCircle,
  Gift,
  Phone,
  MessageCircle,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { CAREERS_DATA, BUSINESS_INFO } from '../data/gymData';

export default function Careers() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappCareersMessage
  )}`;

  return (
    <section id="careers" className="py-20 lg:py-28 bg-[#0a0b0f] relative overflow-hidden">
      {/* Decorative Gold & Amber Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg shadow-amber-500/10">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>{CAREERS_DATA.badge}</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            {CAREERS_DATA.heading}
          </h2>

          <p className="mt-3 text-xl sm:text-2xl font-heading text-amber-400 uppercase tracking-wider font-bold">
            {CAREERS_DATA.subheading}
          </p>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto">
            {CAREERS_DATA.intro}
          </p>
        </div>

        {/* Main Careers Grid: Requirements vs What We Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Requirements */}
          <div className="rounded-2xl bg-[#0f1016] border border-neutral-800 p-8 shadow-xl relative overflow-hidden group hover:border-amber-400/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Candidate Profile
                </span>
                <h3 className="font-heading text-2xl font-black text-white uppercase">
                  REQUIREMENTS
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {CAREERS_DATA.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-amber-500/20 text-amber-400 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-200 font-medium">
                    {req}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Official hiring criteria directly from the business promotional poster.</span>
            </div>
          </div>

          {/* Card 2: What We Offer */}
          <div className="rounded-2xl bg-[#0f1016] border border-amber-500/30 p-8 shadow-2xl relative overflow-hidden group hover:border-amber-400/60 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black flex items-center justify-center font-bold">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Benefits & Perks
                </span>
                <h3 className="font-heading text-2xl font-black text-white uppercase">
                  WHAT WE OFFER
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CAREERS_DATA.offers.map((offer, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                    {offer}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Full Permanent Role
                </p>
                <p className="text-[11px] text-neutral-300 mt-0.5">
                  Food & Accommodation included as per official studio hiring terms.
                </p>
              </div>
              <span className="text-xs font-bold text-black bg-amber-400 px-3 py-1 rounded">
                VERIFIED
              </span>
            </div>
          </div>
        </div>

        {/* Working Hours / Shift Schedule Cards */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
              WORKING HOURS &amp; SHIFTS
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Positions available across flexible morning, evening, and dedicated women's trainer schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Morning Shift */}
            <div className="rounded-2xl bg-[#0e0f14] border border-neutral-800 p-6 flex flex-col justify-between hover:border-amber-400/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                    <Sunrise className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                    Shift 1
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white uppercase">
                  Morning Trainer
                </h4>
                <div className="mt-3 inline-block px-3 py-1 rounded-md bg-neutral-900 border border-amber-500/30 text-amber-400 font-heading text-lg font-bold tracking-wider">
                  5:00 AM – 10:00 AM
                </div>
                <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                  Guide early morning fitness members, morning strength tracks, and active floor supervision.
                </p>
              </div>
            </div>

            {/* Evening Shift */}
            <div className="rounded-2xl bg-[#0e0f14] border border-neutral-800 p-6 flex flex-col justify-between hover:border-amber-400/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                    <Sunset className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                    Shift 2
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white uppercase">
                  Evening Trainer
                </h4>
                <div className="mt-3 inline-block px-3 py-1 rounded-md bg-neutral-900 border border-amber-500/30 text-amber-400 font-heading text-lg font-bold tracking-wider">
                  5:00 PM – 9:00 PM
                </div>
                <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                  Coach energetic post-work peak workout batches, progressive lifting, and conditioning routines.
                </p>
              </div>
            </div>

            {/* Women's Trainer Shift */}
            <div className="rounded-2xl bg-[#0e0f14] border border-amber-500/30 p-6 flex flex-col justify-between hover:border-amber-400/60 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    Specialized Shift
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white uppercase">
                  Women's Trainer
                </h4>
                <div className="mt-3 inline-block px-3 py-1 rounded-md bg-neutral-900 border border-amber-500/30 text-amber-400 font-heading text-lg font-bold tracking-wider">
                  10:00 AM – 8:00 PM
                </div>
                <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                  Dedicated coaching for female studio members during daytime and evening training slots.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 p-8 sm:p-10 text-black shadow-2xl relative overflow-hidden">
          {/* Subtle background graphics */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="px-3 py-1 rounded bg-black text-amber-400 text-xs font-black uppercase tracking-wider">
                Direct Recruiter Contact
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight mt-2 text-black leading-tight">
                READY TO APPLY FOR FITNESS TRAINER?
              </h3>
              <p className="text-sm font-semibold text-black/80 mt-1 max-w-xl">
                Reach out right away with your experience and certification details. We are actively reviewing applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest text-white bg-black hover:bg-neutral-900 shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>APPLY NOW ON WHATSAPP</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-white/40 hover:bg-white/60 border border-black/20 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>CALL: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
