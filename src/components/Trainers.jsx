import React from 'react';
import { ChevronRight, Briefcase } from 'lucide-react';
import { TRAINERS } from '../data/gymData';

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            COACHING TEAM
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            TRAIN WITH THE <span className="text-gold-gradient">RIGHT GUIDANCE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Experienced coaching tailored to proper execution, injury prevention, and everyday progressive training.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group rounded-2xl bg-[#0d0e13] border border-neutral-800 hover:border-amber-400/50 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo Area with Overlay */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={trainer.image}
                  alt={trainer.role}
                  className="w-full h-full object-cover object-top filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-transparent to-black/40" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/75 text-amber-400 border border-amber-400/40 backdrop-blur-md">
                    {trainer.tag}
                  </span>
                </div>
              </div>

              {/* Information Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-black text-white uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                    {trainer.role}
                  </h3>

                  <p className="text-xs font-semibold text-amber-400/90 uppercase tracking-widest mt-1">
                    {trainer.specialty}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed mt-4">
                    {trainer.description}
                  </p>
                </div>

                {/* Placeholder Notice */}
                <div className="mt-6 pt-4 border-t border-neutral-800/80">
                  <span className="inline-block text-[10px] uppercase tracking-wider text-neutral-500 italic">
                    {trainer.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Careers Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#12131b] via-[#171922] to-[#12131b] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                <span>WE ARE EXPANDING</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              </div>
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase">
                INTERESTED IN JOINING OUR TEAM?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                We are currently hiring certified Fitness Trainers for multiple studio shifts.
              </p>
            </div>
          </div>

          <a
            href="#careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all whitespace-nowrap"
          >
            <span>VIEW HIRING DETAILS</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
