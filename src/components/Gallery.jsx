import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/gymData';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['ALL', 'GYM', 'TRAINING', 'FITNESS', 'COMMUNITY'];

  const filteredItems =
    activeCategory === 'ALL'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNavigate = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            VISUAL TOUR
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            STUDIO & TRAINING <span className="text-gold-gradient">GALLERY</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Get an inside look at our training floor, heavy barbell setups, conditioning stations, and encouraging community.
          </p>

          {/* Integration notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-400">
            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
            <span>Curated demo gallery — easily synced with your official Instagram:</span>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              {BUSINESS_INFO.instagram}
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80 hover:border-amber-400/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 aspect-[4/3] sm:aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-110 group-hover:brightness-100 transition-all duration-500"
                loading="lazy"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="self-end">
                  <div className="p-2 rounded-full bg-black/60 text-amber-400 border border-amber-400/30 backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 px-2 py-0.5 rounded bg-black/70 border border-amber-400/30 inline-block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-white uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
}
