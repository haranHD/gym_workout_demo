import React from 'react';
import { Dumbbell, Target, UserCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Strength Training',
      description: 'Structured resistance routines focusing on functional power, muscle tone, and durable strength.',
      icon: Dumbbell,
    },
    {
      title: 'Fitness Training',
      description: 'Dynamic conditioning that builds stamina, flexibility, and day-to-day energetic physical health.',
      icon: Target,
    },
    {
      title: 'Personal Guidance',
      description: 'Dedicated trainer supervision ensuring correct lifting posture, safety, and progressive overload.',
      icon: UserCheck,
    },
    {
      title: 'Supportive Environment',
      description: 'A friendly unisex space where all members train together with respect, focus, and mutual encouragement.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0a0b0e] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Metallic Gold Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer gold glow frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent blur-sm" />
              
              <div className="relative rounded-xl overflow-hidden border border-amber-500/30 bg-neutral-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
                  alt="Training environment at Un-Beaten Fitness Studio"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay card */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>UNISEX FITNESS ENVIRONMENT</span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    A welcoming training floor designed for everyone who values discipline and consistent results.
                  </p>
                </div>
              </div>

              {/* Decorative corner accent badge */}
              <div className="absolute -top-4 -left-4 bg-[#0d0e12] border border-amber-400/50 rounded-lg p-3 shadow-xl hidden sm:block">
                <p className="font-heading text-lg font-bold text-amber-400 leading-tight">
                  UN-BEATEN
                </p>
                <p className="text-[10px] tracking-widest text-neutral-400 uppercase">
                  Fitness Studio
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
              ABOUT OUR STUDIO
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
              MORE THAN A GYM.{' '}
              <span className="text-gold-gradient block">
                IT'S A FITNESS FAMILY.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Un-Beaten Fitness Studio</strong> is a unisex fitness studio established to help you train consistently, build genuine strength, and achieve your personal fitness goals in an encouraging and respectful space.
              </p>
              <p className="text-neutral-400">
                Whether you are stepping into a gym for the first time or looking to elevate your current conditioning, our studio provides the equipment, structure, and professional guidance needed to keep you on track day after day.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/40 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Demo Notice Disclaimer (Honest & Compliant) */}
            <div className="mt-6 p-3 rounded-lg bg-neutral-900/40 border border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
              <span>
                <span className="text-amber-400 font-semibold uppercase">Notice:</span> Business information and schedules reflect Un-Beaten Fitness Studio promotional details.
              </span>
              <a
                href="#careers"
                className="text-amber-400 hover:underline font-semibold ml-2 whitespace-nowrap"
              >
                View Careers &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
