import React from 'react';
import { Dumbbell, Zap, UserCheck, Activity, ArrowUpRight } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

const iconMap = {
  Dumbbell,
  Zap,
  UserCheck,
  Activity,
};

export default function Programs({ onOpenJoinModal }) {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#070709] relative">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            FITNESS TRACKS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            TRAIN WITH <span className="text-gold-gradient">PURPOSE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Targeted training tracks designed to build physical strength, daily stamina, and long-term athletic discipline.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => {
            const Icon = iconMap[program.icon] || Dumbbell;
            return (
              <div
                key={program.id}
                className="group relative rounded-2xl bg-[#0d0e13] border border-neutral-800 hover:border-amber-400/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden"
              >
                {/* Background image preview with dark gradient */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-[#0d0e13]/85 to-transparent" />
                </div>

                {/* Top bar: Number & Badge */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <span className="font-heading text-2xl font-black text-amber-400/80 group-hover:text-amber-400 transition-colors">
                    {program.id}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700 group-hover:border-amber-500/30">
                    {program.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-black group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-2 group-hover:text-amber-300 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-4 border-t border-neutral-800/80">
                    {program.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center text-[11px] text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="relative z-10 pt-6 mt-6 border-t border-neutral-800/60">
                  <button
                    onClick={onOpenJoinModal}
                    className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 py-1 transition-colors cursor-pointer"
                  >
                    <span>Inquire About Track</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Clarification */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          Individual results depend on personal dedication, diet, and training consistency. Training plans are tailored without medical claims.
        </div>
      </div>
    </section>
  );
}
