"use client";

import { Shield, Clock, Award, ThumbsUp, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Insured",
    description: "Fully vetted, trained, and insured professionals you can trust in your space.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "We respect your schedule with punctual arrivals and timely project completion.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Not satisfied? We'll re-clean for free. That's our promise to you.",
  },
  {
    icon: ThumbsUp,
    title: "Attention to Detail",
    description: "From baseboards to ceiling fans, we don't miss a single spot.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Years of expertise handling everything from homes to commercial properties.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe, non-toxic cleaning solutions that are gentle on your home and the environment.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cleaning Excellence,{" "}
              <span className="text-primary">Guaranteed</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              At GleamWorks, we believe every space deserves to shine. Our
              dedicated team combines professional-grade equipment with
              meticulous attention to detail, delivering results that speak for
              themselves. From the first wipe to the final polish, excellence is
              our standard.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2348089437077?text=Hello%20GleamWorks!%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Talk to Us
              </a>
              <a href="#testimonials" className="btn-primary !bg-gray-200 !text-dark hover:!bg-gray-300 !shadow-none">
                See Reviews
              </a>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  idx % 2 === 1 ? "mt-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
