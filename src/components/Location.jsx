import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink, ShieldAlert } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BUSINESS_INFO } from '../data/gymData';

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            STUDIO LOCATION
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            FIND <span className="text-gold-gradient">US</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Conveniently situated in Kannagi Nagar on 60 Ft Road for easy neighborhood access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Card & Contact Points */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-[#0d0e13] border border-amber-500/30 shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    Studio Address
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white uppercase mt-0.5">
                    UN-BEATEN FITNESS STUDIO
                  </h3>
                  <div className="mt-3 text-neutral-200 text-sm font-medium space-y-1">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {BUSINESS_INFO.location.road}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {BUSINESS_INFO.location.area}
                    </p>
                  </div>
                </div>
              </div>

              {/* Strict Disclaimer Pill */}
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-400 font-semibold block uppercase text-[11px]">
                    Location Note
                  </strong>
                  <span>{BUSINESS_INFO.location.note}</span>
                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                        Phone Enquiries
                      </p>
                      <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {BUSINESS_INFO.phone}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-black transition-colors">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                        Official Instagram
                      </p>
                      <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {BUSINESS_INFO.instagram}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Dark Google Maps Placeholder */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden border border-neutral-800 bg-[#0d0e13] flex flex-col items-center justify-center p-6 text-center shadow-xl">
              {/* Dark stylized map background graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:24px_24px]" />
              
              {/* Stylized road grid lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-amber-500/40 -rotate-12" />
                <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-neutral-700/50 rotate-12" />
                <div className="absolute top-1/3 left-0 right-0 h-2 bg-neutral-600/40 rotate-6" />
              </div>

              {/* Centered Map Marker Card */}
              <div className="relative z-10 max-w-sm p-6 rounded-2xl bg-black/90 border border-amber-400/50 backdrop-blur-md shadow-2xl">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 border-2 border-amber-400 text-amber-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <MapPin className="w-7 h-7 text-amber-400" />
                </div>

                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-black">
                  MAP PREVIEW AREA
                </span>

                <h4 className="font-heading text-lg font-bold text-white uppercase mt-2">
                  60 FT ROAD &bull; KANNAGI NAGAR
                </h4>

                <p className="text-xs text-neutral-400 mt-2">
                  This placeholder Google Maps area will be linked to the confirmed GPS coordinates and Google Maps Business listing upon studio confirmation.
                </p>

                <div className="mt-5 pt-4 border-t border-neutral-800">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=60+Ft+Road+Kannagi+Nagar`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Search Area on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
