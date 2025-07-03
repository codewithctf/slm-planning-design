import React, { useState, useEffect } from "react";

const images = [
  "/Assets/3D render 1.webp",
  "/Assets/3D render 2.webp",
  "/Assets/3D render 3.webp",
  "/Assets/3D render 4.webp",
  "/Assets/3D render.webp",
];

const ThreeDRenderingCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-full select-none"
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
            idx === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={img}
            alt="3D Rendering"
            loading="eager"
            className="w-full h-full object-cover object-center transition-transform duration-1000 scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center w-full px-2 sm:px-4 pointer-events-none">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-[#fff] mb-2 animate-fade-in-up" style={{textShadow: '0 2px 16px rgba(0,0,0,0.32), 0 1.5px 4px rgba(0,0,0,0.18)'}}>
              3D Rendering & Visualization
            </h2>
            <p className="font-inter text-base sm:text-lg md:text-xl text-[#fff] max-w-2xl mx-auto animate-fade-in-up delay-150" style={{textShadow: '0 2px 16px rgba(0,0,0,0.32), 0 1.5px 4px rgba(0,0,0,0.18)'}}>
              Bringing Ideas to Life with Precision, Emotion, and Clarity
            </p>
          </div>
          {/* Stronger overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />
        </div>
      ))}
      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white/90 scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDRenderingCarousel;
