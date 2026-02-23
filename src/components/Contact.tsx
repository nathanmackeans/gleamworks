"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready for a Spotless Space?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Reach out to us today and let&apos;s discuss how we can make your
            space gleam. Quick responses guaranteed!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-dark mb-6">
              Send Us a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const service = formData.get("service");
                const message = formData.get("message");
                const text = `Hello GleamWorks! My name is ${name}. I'm interested in ${service}. ${message}`;
                window.open(
                  `https://wa.me/2348089437077?text=${encodeURIComponent(text)}`,
                  "_blank"
                );
              }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="08012345678"
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white text-gray-700"
                >
                  <option>Post-Construction Cleaning</option>
                  <option>Deep Cleaning Service</option>
                  <option>Move-In / Move-Out Cleaning</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your cleaning needs..."
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <a
                href="https://wa.me/2348089437077"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">WhatsApp</h4>
                  <p className="text-gray-500">0808 943 7077</p>
                  <p className="text-primary text-sm font-medium">
                    Tap to chat instantly →
                  </p>
                </div>
              </a>

              <a href="tel:08089437077" className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Phone</h4>
                  <p className="text-gray-500">0808 943 7077</p>
                  <p className="text-blue-600 text-sm font-medium">
                    Call us anytime →
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Email</h4>
                  <p className="text-gray-500">hello@gleamworks.ng</p>
                  <p className="text-purple-600 text-sm font-medium">
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Working Hours</h4>
                  <p className="text-gray-500">Mon - Sat: 7AM - 7PM</p>
                  <p className="text-gray-500">Sunday: By Appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Location</h4>
                  <p className="text-gray-500">Ughelli, Delta State, Nigeria</p>
                  <p className="text-gray-500">We cover all areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
