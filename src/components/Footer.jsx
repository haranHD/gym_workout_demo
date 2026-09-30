import React from 'react';
import { Dumbbell, MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BUSINESS_INFO } from '../data/gymData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050608] border-t border-neutral-800 text-neutral-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-amber-700 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0a0d] rounded-[7px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-heading text-2xl font-black tracking-wider text-white block leading-none">
                  UN-BEATEN
                </span>
                <span className="text-[10px] tracking-[0.25em] font-medium text-amber-400 uppercase">
                  FITNESS STUDIO
                </span>
              </div>
            </a>

            <p className="font-heading text-lg font-bold text-amber-400/90 uppercase tracking-wider mt-2">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              A premium unisex fitness studio offering structured strength training, conditioning workouts, and dedicated trainer guidance in a disciplined atmosphere.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-pink-500/50 text-neutral-300 hover:text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  BUSINESS_INFO.whatsappJoinMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 text-neutral-300 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase font-medium tracking-wider text-neutral-400 hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Location & Contact Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">
              VISIT &amp; CONNECT
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{BUSINESS_INFO.location.road}</p>
                  <p className="text-neutral-400">{BUSINESS_INFO.location.area}</p>
                  <p className="text-[10px] text-amber-500/80 italic mt-0.5">
                    {BUSINESS_INFO.location.note}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-white hover:text-amber-400 font-mono transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-400 transition-colors"
                >
                  {BUSINESS_INFO.instagram}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                HIRING: FITNESS TRAINER ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-neutral-500">
          <p>
            &copy; 2026 Un-Beaten Fitness Studio. All rights reserved.
          </p>

          <p className="text-[11px] text-neutral-600">
            Professional Demo Website Proposal &bull; Prepared for Un-Beaten Fitness Studio
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
