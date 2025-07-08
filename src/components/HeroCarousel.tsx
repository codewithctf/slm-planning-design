import React, { useEffect, useRef, useState } from "react";

const landscapeImages = [
  "/assets/hero-carousel-1.webp",
  "/assets/hero-carousel-2.webp",
  "/assets/hero-carousel-3.webp",
  "/assets/expertise-sec-2.webp",
];

interface HeroCarouselProps {
  heightClass?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ heightClass = "h-96" }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % landscapeImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute inset-0 w-full ${heightClass} overflow-hidden`}
    >
      {landscapeImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Landscape"
          loading="eager"
          className={`transition-opacity duration-400 ease-in-out w-full h-full object-cover absolute top-0 left-0 
            ${idx === current ? "opacity-100 scale-105 animate-zoom" : "opacity-0 scale-100"}
          `}
          style={{
            zIndex: idx === current ? 2 : 1,
            transition: "opacity 0.4s, transform 2.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      ))}
      {/* Dark translucent overlay for text visibility */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 100%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .animate-zoom {
          animation: zoom 5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
