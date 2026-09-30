import React from 'react';
import { ArrowRight, Flame, Shield, Users, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export default function Hero({ onOpenJoinModal }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappJoinMessage
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-32 overflow-hidden bg-[#070709]"
    >
      {/* Background Photography with Dark Multi-layer Vignette & Metallic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt="Un-Beaten Fitness Studio Gym Background"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125 scale-105 animate-subtle-zoom"
          loading="eager"
        />
        {/* Dark gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/75 to-[#070709]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709]/80" />
        {/* Radial subtle gold ambiance */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Decorative Gold Grid lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/40 backdrop-blur-md mb-6 shadow-lg shadow-amber-500/10">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 -ml-3.5" />
          <span className="text-xs font-bold tracking-[0.22em] text-amber-400 uppercase">
            {BUSINESS_INFO.type}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-xs tracking-wider text-neutral-300 uppercase font-semibold">
            {BUSINESS_INFO.location.road}
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase max-w-5xl leading-[0.95] drop-shadow-2xl">
          BUILD YOUR{' '}
          <span className="text-gold-gradient block sm:inline">
            STRONGEST SELF.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-heading font-medium tracking-wide text-neutral-200 uppercase max-w-3xl">
          Train harder. Move stronger.{' '}
          <span className="text-amber-400 font-bold">Become Un-Beaten.</span>
        </p>

        {/* Supporting text */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-300/90 max-w-2xl font-normal leading-relaxed">
          {BUSINESS_INFO.heroSupport}
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 rounded-md shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-amber-500/40 hover:border-amber-400 rounded-md transition-all duration-200 backdrop-blur-sm"
          >
            <span>CONTACT US</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 rounded-md transition-all duration-200"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Sub-label under CTAs */}
        <div className="mt-5 text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span>UNISEX FITNESS STUDIO</span>
          <span className="text-neutral-600">•</span>
          <span>DISCIPLINE &bull; STRENGTH &bull; GUIDANCE</span>
        </div>

        {/* Key Highlight Metric Pills (No fake stats, strictly core offerings) */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl pt-8 border-t border-neutral-800/80">
          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors text-left flex items-center gap-3">
            <div className="p-2 rounded bg-amber-500/10 text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Strength</p>
              <p className="text-[11px] text-neutral-400">Progressive Lifting</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors text-left flex items-center gap-3">
            <div className="p-2 rounded bg-amber-500/10 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Fitness</p>
              <p className="text-[11px] text-neutral-400">Conditioning & Core</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors text-left flex items-center gap-3">
            <div className="p-2 rounded bg-amber-500/10 text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Guidance</p>
              <p className="text-[11px] text-neutral-400">Personal Support</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-colors text-left flex items-center gap-3">
            <div className="p-2 rounded bg-amber-500/10 text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Unisex</p>
              <p className="text-[11px] text-neutral-400">Inclusive Culture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
