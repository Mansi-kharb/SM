import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-emerald-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
              Get In Touch
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-light mb-2 text-lg">Phone</h3>
                <p className="text-emerald-100 text-base md:text-lg">
                  +91 98765 43210
                </p>
              </div>
              <div>
                <h3 className="font-light mb-2 text-lg">Email</h3>
                <p className="text-emerald-100 text-base md:text-lg">
                  hello@architects.com
                </p>
              </div>
              <div>
                <h3 className="font-light mb-2 text-lg">Office</h3>
                <p className="text-emerald-100 text-base md:text-lg">
                  Mumbai, India
                </p>
              </div>
              <div className="flex gap-6 mt-8 pt-8 border-t border-emerald-700">
                <a
                  href="#"
                  className="text-emerald-100 hover:text-white transition text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-emerald-100 hover:text-white transition text-sm"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-emerald-100 hover:text-white transition text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm darkMode={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
