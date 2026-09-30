import React from 'react';
import { Target, Award, Users, Flame, HeartHandshake, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';

const iconMap = {
  Target,
  Award,
  Users,
  Flame,
  HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] relative overflow-hidden border-t border-b border-neutral-800/80">
      {/* Background geometric accents */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            THE UN-BEATEN DIFFERENCE
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            WHY <span className="text-gold-gradient">UN-BEATEN?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            We focus on real training fundamentals: discipline, progressive coaching, and a welcoming community where you actually stay consistent.
          </p>
        </div>

        {/* 5 Feature Cards Grid (3 top, 2 centered bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.slice(0, 3).map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#0e0f15] border border-neutral-800 p-8 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/10 to-amber-600/5 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle corner numbering */}
                <span className="absolute bottom-4 right-5 text-4xl font-black font-heading text-neutral-800/40 select-none group-hover:text-amber-500/10 transition-colors">
                  0{item.id}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {WHY_CHOOSE_US.slice(3, 5).map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#0e0f15] border border-neutral-800 p-8 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/10 to-amber-600/5 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                <span className="absolute bottom-4 right-5 text-4xl font-black font-heading text-neutral-800/40 select-none group-hover:text-amber-500/10 transition-colors">
                  0{item.id}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
