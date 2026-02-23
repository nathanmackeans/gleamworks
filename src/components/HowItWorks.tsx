"use client";

import { MessageSquare, ClipboardCheck, SprayCan, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Get in Touch",
    description: "Send us a message on WhatsApp or fill out our contact form with your cleaning needs.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Get a Free Quote",
    description: "We assess your space and provide a transparent, no-obligation quote tailored to you.",
  },
  {
    icon: SprayCan,
    step: "03",
    title: "We Clean",
    description: "Our expert team arrives on schedule and transforms your space to perfection.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "You Enjoy",
    description: "Walk into a spotless, fresh space. Not satisfied? We'll re-clean for free!",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-semibold text-sm uppercase tracking-widest">
            Simple Process
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Getting your space cleaned is as easy as 1-2-3-4. Here&apos;s our simple process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative text-center group">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              )}

              {/* Icon */}
              <div className="w-24 h-24 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 relative">
                <item.icon className="w-10 h-10 text-primary-light" />
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-dark font-bold text-sm">
                  {item.step}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
