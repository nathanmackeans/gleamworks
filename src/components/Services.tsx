"use client";

import {
  HardHat,
  SprayCan,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Post-Construction Cleaning",
    description:
      "Transform your newly built or renovated space from dusty chaos to move-in ready perfection. We handle debris removal, dust elimination, window cleaning, and every finishing touch.",
    features: [
      "Construction debris removal",
      "Dust & residue elimination",
      "Window & fixture cleaning",
      "Floor scrubbing & polishing",
    ],
    color: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning Service",
    description:
      "An intensive, comprehensive cleaning that reaches every corner, surface, and hidden spot. Perfect for periodic refreshes or one-time transformations.",
    features: [
      "Kitchen & bathroom deep scrub",
      "Appliance interior cleaning",
      "Carpet & upholstery care",
      "Sanitization & disinfection",
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    description:
      "Whether you're arriving or departing, we ensure the space is thoroughly cleaned — helping you start fresh or leave a lasting impression.",
    features: [
      "Complete space sanitization",
      "Cabinet & closet cleaning",
      "Wall spot treatment",
      "Final inspection guarantee",
    ],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Premium Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From post-construction cleanup to deep cleaning, we deliver
            spotless results that exceed expectations every time.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-dark mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/2348089437077?text=Hello%20GleamWorks!%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group/link"
              >
                Book This Service
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
