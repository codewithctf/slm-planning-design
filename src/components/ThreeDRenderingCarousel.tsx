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
      className="absolute inset-0 w-full h-full select-none"
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
