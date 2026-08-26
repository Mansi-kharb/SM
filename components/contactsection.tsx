'use client';

/* Contact: the section and the form it reveals. */

import { useState, useEffect } from 'react';

/* ── ContactForm ─────────────────────────────────────────────── */

interface ContactFormProps {
  darkMode?: boolean;
}

type Field = 'name' | 'email' | 'phone' | 'message';
type FormValues = Record<Field, string>;
type FieldErrors = Partial<Record<Field, string>>;

/* type="email" on its own lets "you@gmail" through — it never requires a
   TLD. The thank-you mail goes to whatever is typed here, so a typo becomes
   a bounce the visitor never finds out about. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^[0-9+][0-9\s()-]{6,19}$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = 'That does not look like a valid email address.';

  /* Optional — only checked once something has actually been typed. */
  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';

  if (!values.message.trim()) errors.message = 'Please tell us about your project.';
  else if (values.message.trim().length < 10)
    errors.message = 'Please add a little more detail.';

  return errors;
}

function ContactForm({ darkMode = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<Field, boolean>>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const next = { ...formData, [name as Field]: value };
    setFormData(next);
    /* Re-check while typing, but only on fields already left once — calling
       an email invalid on the first keystroke just reads as nagging. */
    if (touched[name as Field]) setErrors(validate(next));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as Field;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found = validate(formData);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTouched({ name: false, email: false, phone: false, message: false });
        setErrors({});
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* The border/ring colour is kept out of the base string so the invalid
     state replaces it instead of fighting it — two conflicting Tailwind
     classes resolve by stylesheet order, not by order in the className. */
  const inputBase = darkMode
    ? 'w-full px-4 py-3 rounded bg-emerald-700 placeholder-emerald-200 border-0 text-white focus:outline-none focus:ring-2'
    : 'w-full px-4 py-3 rounded bg-white border focus:outline-none focus:ring-2';

  const showsError = (field: Field) => Boolean(touched[field] && errors[field]);

  const fieldClasses = (field: Field) =>
    showsError(field)
      ? `${inputBase} ${darkMode ? 'ring-2 ring-red-300 focus:ring-red-300' : 'border-red-500 focus:ring-red-500'}`
      : `${inputBase} ${darkMode ? 'focus:ring-emerald-500' : 'border-gray-300 focus:ring-black'}`;

  const fieldError = (field: Field) =>
    showsError(field) ? (
      <p
        id={`${field}-error`}
        className={`mt-1.5 text-xs font-light ${darkMode ? 'text-red-200' : 'text-red-600'}`}
      >
        {errors[field]}
      </p>
    ) : null;

  return (
    /* noValidate hands validation to validate() above, so every field
       explains itself in one voice instead of native browser bubbles. */
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showsError('name')}
          aria-describedby={showsError('name') ? 'name-error' : undefined}
          className={fieldClasses('name')}
        />
        {fieldError('name')}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showsError('email')}
          aria-describedby={showsError('email') ? 'email-error' : 'email-hint'}
          className={fieldClasses('email')}
        />
        {fieldError('email')}
        {!showsError('email') && (
          <p
            id="email-hint"
            className={`mt-1.5 text-xs font-light ${darkMode ? 'text-emerald-200/80' : 'text-gray-500'}`}
          >
            We&apos;ll send your confirmation here.
          </p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showsError('phone')}
          aria-describedby={showsError('phone') ? 'phone-error' : undefined}
          className={fieldClasses('phone')}
        />
        {fieldError('phone')}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showsError('message')}
          aria-describedby={showsError('message') ? 'message-error' : undefined}
          className={fieldClasses('message')}
        ></textarea>
        {fieldError('message')}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full px-6 py-3 rounded font-light transition ${
          darkMode
            ? 'bg-white text-emerald-800 hover:bg-gray-100 disabled:opacity-50'
            : 'bg-black text-white hover:bg-gray-900 disabled:opacity-50'
        }`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {success && (
        <p className="text-center text-green-400 font-light">
          ✅ Message sent successfully!
        </p>
      )}

      {error && (
        <p className="text-center text-red-400 font-light">
          ❌ {error}
        </p>
      )}
    </form>
  );
}


/* ── ContactSection ─────────────────────────────────────────────── */

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
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 py-5 md:py-12">

        {/* Main Grid - Content Left, Image Right */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-stretch">

          {/* Left Column - Header + Form */}
          <div className="contents lg:flex lg:flex-col lg:justify-center">
            {/* Header */}
            <div className="order-1 lg:order-none">
              <p className="text-xs md:text-sm font-light text-emerald-600 uppercase tracking-wider mb-4">
                GET IN TOUCH
              </p>
              <h2 className="font-serif text-[26px] sm:text-4xl md:text-5xl font-medium text-slate-900 mb-0 lg:mb-6 tracking-tight max-w-2xl">
                Let&apos;s Build Something{' '}
                <br className="sm:hidden" />
                Extraordinary Together
              </h2>
            </div>

            {/* Copy + form travel together, below the image on mobile */}
            <div className="order-3 lg:order-none lg:contents">
              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-2xl lg:mb-10">
                We&apos;re here to bring your vision to life. Reach out to discuss your project and how we can help.
              </p>

              <div className="mt-6 lg:mt-4">
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
          </div>

          {/* Right Column - Image (Fixed Size) */}
          <div className="order-2 lg:order-none relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-lg flex-shrink-0">
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
