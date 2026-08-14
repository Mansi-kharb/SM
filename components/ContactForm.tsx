'use client';

import { useState } from 'react';

interface ContactFormProps {
  darkMode?: boolean;
}

export default function ContactForm({ darkMode = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  const inputClasses = darkMode
    ? 'w-full px-4 py-3 rounded bg-emerald-700 placeholder-emerald-200 border-0 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'
    : 'w-full px-4 py-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className={inputClasses}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className={inputClasses}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className={inputClasses}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className={inputClasses}
      ></textarea>

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
