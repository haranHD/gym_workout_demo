import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BUSINESS_INFO } from '../data/gymData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    setSubmitting(true);
    // Simulate instantaneous friendly response for demo
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitted(false);
  };

  const whatsappDirectQuery = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Un-Beaten Fitness Studio, my name is ${formData.name || 'Member'}. ${
      formData.message || 'I would like to inquire about membership and training timings.'
    } (Phone: ${formData.phone || 'Provided via website'})`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a0b0e] relative overflow-hidden border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            GET IN TOUCH
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            LET'S <span className="text-gold-gradient">GET STARTED</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Ready to visit or have questions about timings, training tracks, or trainer hiring? Reach out anytime.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Call Us */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="p-8 rounded-2xl bg-[#0f1016] border border-neutral-800 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg text-center flex flex-col items-center justify-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-black transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Direct Voice Call
            </span>
            <h3 className="font-heading text-xl font-bold text-white uppercase mt-1">
              CALL US
            </h3>
            <p className="text-sm font-semibold text-amber-400 mt-2 font-mono">
              {BUSINESS_INFO.phone}
            </p>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              BUSINESS_INFO.whatsappJoinMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-[#0f1016] border border-neutral-800 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg text-center flex flex-col items-center justify-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Instant Chat
            </span>
            <h3 className="font-heading text-xl font-bold text-white uppercase mt-1">
              WHATSAPP
            </h3>
            <p className="text-sm font-semibold text-emerald-400 mt-2">
              Chat with us now &rarr;
            </p>
          </a>

          {/* Card 3: Instagram */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-[#0f1016] border border-neutral-800 hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg text-center flex flex-col items-center justify-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-pink-500 group-hover:text-white transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Social Community
            </span>
            <h3 className="font-heading text-xl font-bold text-white uppercase mt-1">
              INSTAGRAM
            </h3>
            <p className="text-sm font-semibold text-pink-400 mt-2">
              {BUSINESS_INFO.instagram}
            </p>
          </a>
        </div>

        {/* Simple Enquiry Form */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#0e0f15] border border-amber-500/30 p-8 sm:p-10 shadow-2xl relative">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase">
              SEND AN ENQUIRY
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Fill in your details below and our team will get back to you promptly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-xl font-bold text-white uppercase">
                THANK YOU, {formData.name.toUpperCase()}!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                Your enquiry has been received. In this live demo, you can also forward your message straight to our official studio WhatsApp right now:
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappDirectQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-lg text-xs font-semibold text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Phone Number <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Your Message or Program Interest
                </label>
                <textarea
                  rows="3"
                  placeholder="I am interested in strength training batches or trainer hiring..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-black bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-amber-500/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500">
                Demo interface: No personal data is stored in any backend database.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
