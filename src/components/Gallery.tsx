"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalUp);
    return () => window.removeEventListener("mouseup", handleGlobalUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After (full width background) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt="After cleaning"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt="Before cleaning"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="flex items-center gap-0.5">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-primary"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-primary"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-20">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-20">
        {afterLabel}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Results
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            See the Transformation
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Drag the slider to see the dramatic before & after difference our
            cleaning services make.
          </p>
        </div>

        {/* Before/After Sliders */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <BeforeAfterSlider
              beforeSrc="/images/before-1.jpeg"
              afterSrc="/images/after-1.jpeg"
            />
            <p className="text-center text-gray-500 mt-4 font-medium">
              Post-Construction Cleanup
            </p>
          </div>
          <div>
            <BeforeAfterSlider
              beforeSrc="/images/before-2.jpeg"
              afterSrc="/images/after-2.jpeg"
            />
            <p className="text-center text-gray-500 mt-4 font-medium">
              Deep Cleaning Transformation
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src="/images/gallery-1.jpeg"
              alt="GleamWorks cleaning result"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-semibold">Spotless Results</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src="/images/gallery-2.jpeg"
              alt="GleamWorks cleaning result"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-semibold">
                Premium Cleaning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
