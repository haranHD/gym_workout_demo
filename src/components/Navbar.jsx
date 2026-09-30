import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export default function Navbar({ onOpenJoinModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Careers', href: '#careers', highlight: true },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'programs', 'trainers', 'gallery', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0df2] backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-amber-700 p-[1.5px] transition-transform group-hover:scale-105 duration-300 shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#0a0a0d] rounded-[7px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-black tracking-wider text-white leading-none group-hover:text-amber-400 transition-colors">
                  UN-BEATEN
                </span>
                <span className="text-[10px] tracking-[0.25em] font-medium text-amber-400/90 uppercase mt-0.5">
                  FITNESS STUDIO
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-all duration-200 rounded-md ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/40'
                    }`}
                  >
                    {link.name}
                    {link.highlight && (
                      <span className="ml-1.5 inline-flex items-center px-1.5 py-0.2 text-[9px] font-bold rounded bg-amber-500 text-black animate-pulse">
                        HIRING
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-amber-400 transition-colors px-2 py-1 rounded"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold tracking-wider">{BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenJoinModal}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-md shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden group cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  JOIN NOW
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenJoinModal}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-amber-400 rounded shadow-sm hover:bg-amber-300"
              >
                JOIN
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white bg-neutral-900/80 rounded-md border border-neutral-800 focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-16 right-0 bottom-0 w-3/4 max-w-xs bg-[#0d0e13] border-l border-amber-500/20 p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="pb-3 border-b border-neutral-800">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  Unisex Fitness Studio
                </span>
                <p className="text-xs text-neutral-400 mt-1">60 Ft Road, Kannagi Nagar area</p>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-amber-400 hover:bg-neutral-800/50 rounded-lg transition-colors"
                  >
                    <span>{link.name}</span>
                    {link.highlight ? (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-400 text-black">
                        HIRING
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-neutral-600" />
                    )}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/40"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call {BUSINESS_INFO.phone}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg shadow-lg shadow-amber-500/25"
              >
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
