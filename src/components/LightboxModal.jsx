import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BUSINESS_INFO } from '../data/gymData';

export default function LightboxModal({ image, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
        aria-label="Close Preview"
      >
        <X className="w-6 h-6 text-amber-400" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={() => onNavigate('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 border border-neutral-700 transition-colors hidden sm:flex items-center justify-center cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-amber-400" />
      </button>

      <button
        onClick={() => onNavigate('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 border border-neutral-700 transition-colors hidden sm:flex items-center justify-center cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-amber-400" />
      </button>

      {/* Image Container */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 max-h-[75vh] shadow-2xl bg-neutral-950">
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 px-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
              {image.category}
            </span>
            <h3 className="font-heading text-lg font-bold text-white uppercase mt-1">
              {image.title}
            </h3>
            <p className="text-xs text-neutral-400">{image.subtitle}</p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800"
          >
            <InstagramIcon className="w-4 h-4 text-pink-500" />
            <span>{BUSINESS_INFO.instagram}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
