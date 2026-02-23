"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Homeowner",
    text: "GleamWorks transformed my newly built house into a spotless haven. The post-construction cleaning was thorough — every corner, every surface gleaming! Highly recommend.",
    rating: 5,
  },
  {
    name: "Chioma Okonkwo",
    role: "Property Manager",
    text: "I use GleamWorks for all my move-in/move-out cleaning needs. Their team is professional, punctual, and the results are consistently outstanding. My tenants love it!",
    rating: 5,
  },
  {
    name: "Ibrahim Musa",
    role: "Office Manager",
    text: "We hired GleamWorks for a deep cleaning of our office space after renovation. The attention to detail was incredible. The entire team was impressed with the result.",
    rating: 5,
  },
  {
    name: "Funke Adeyemi",
    role: "Real Estate Developer",
    text: "After every construction project, GleamWorks is my first call. They handle everything from dust removal to final touches. Reliable, consistent, and affordable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the people who
            trust us with their spaces.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-3xl p-6 sm:p-8 relative group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-dark">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
