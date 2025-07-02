import React, { useEffect, useRef, useState } from "react";

const images = [
  "/Assets/Landscape Architecture.jpg",
  "/Assets/Landscape Architecture (1).jpg",
  "/Assets/Landscape Architecture (2).jpg",
];

interface CarouselProps {
  heightClass?: string;
}

const LandscapeArchitectureCarousel: React.FC<CarouselProps> = ({ heightClass = "h-full" }) => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLoaded(false);
    timeoutRef.current = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden`} style={{minHeight: '100%', height: '100%'}}>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Landscape Architecture"
          className={`transition-opacity duration-700 ease-in-out w-full h-full object-cover absolute top-0 left-0 \
            ${idx === current && loaded ? "opacity-100 scale-105 animate-zoom" : "opacity-0 scale-100"}
          `}
          style={{
            zIndex: idx === current ? 2 : 1,
            transition: "opacity 0.7s, transform 5s cubic-bezier(0.4,0,0.2,1)",
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
      {/* Text overlay (above overlay) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center w-full px-2 sm:px-4 pointer-events-none">
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-[#fff] mb-2 animate-fade-in-up" style={{textShadow: '0 2px 16px rgba(0,0,0,0.32), 0 1.5px 4px rgba(0,0,0,0.18)'}}>
          Landscape Architecture
        </h2>
        <p className="font-inter text-base sm:text-lg md:text-xl text-[#fff] max-w-2xl mx-auto animate-fade-in-up delay-150" style={{textShadow: '0 2px 16px rgba(0,0,0,0.32), 0 1.5px 4px rgba(0,0,0,0.18)'}}>
          Designing Ecological Landscapes That Heal, Connect, and Inspire
        </p>
      </div>
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

export default LandscapeArchitectureCarousel;
