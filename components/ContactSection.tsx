'use client';

import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Listen for openContactForm event from Hero section
  useEffect(() => {
    const handleOpenForm = () => setIsFormOpen(true);
    window.addEventListener('openContactForm', handleOpenForm);
    return () => window.removeEventListener('openContactForm', handleOpenForm);
  }, []);

  return (
    <section id="contact" className="bg-white py-0 md:py-0 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 py-8 md:py-12">

        {/* Main Grid - Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Column - Header + Form */}
          <div className="flex flex-col justify-center">
            {/* Header */}
            <div className="mb-8 md:mb-10">
              <p className="text-xs md:text-sm font-light text-emerald-600 uppercase tracking-wider mb-4">
                GET IN TOUCH
              </p>
              <h2 className="font-['Satoshi',sans-serif] text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight max-w-2xl">
                Let's Build Something Extraordinary Together
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-2xl">
                We're here to bring your vision to life. Reach out to discuss your project and how we can help.
              </p>
            </div>

            {/* Form Toggle Section */}
            <div className="mt-4">
              {!isFormOpen ? (
                /* CTA Button */
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-2.5 group cursor-pointer px-6 py-3 bg-slate-900 text-white rounded-none hover:bg-emerald-600 transition-all duration-300"
                >
                  <span className="font-['Satoshi',sans-serif] text-xs sm:text-sm font-medium uppercase tracking-wider">
                    GET IN TOUCH
                  </span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                /* Inline Form Card */
                <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg relative transition-all duration-500">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                    aria-label="Close form"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {submitted ? (
                    <div className="py-10 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 text-emerald-600">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-light text-slate-900">Thank You!</h3>
                      <p className="mt-2 text-sm text-slate-600 font-light">
                        Your message has been sent successfully. Redirecting to top...
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="text-lg font-light text-slate-900 mb-4">Send us a Message</h3>
                      <ContactForm darkMode={false} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Image (Fixed Size) */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-lg flex-shrink-0">
            <img
              src="/images/hero-archway.jpg"
              alt="Stone archway opening onto a living room in travertine, oak parquet and linen"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
