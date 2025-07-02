import React, { useEffect, useRef, useState } from "react";

const landscapeImages = [
  "/Assets/Landscape Architecture.jpg",
  "/Assets/Landscape Architecture (1).jpg",
  "/Assets/Landscape Architecture (2).jpg",
];

interface HeroCarouselProps {
  heightClass?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ heightClass = "h-96" }) => {
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
      setCurrent((prev) => (prev + 1) % landscapeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`absolute inset-0 w-full ${heightClass} overflow-hidden`}>
      {landscapeImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Landscape"
          className={`transition-opacity duration-700 ease-in-out w-full h-full object-cover absolute top-0 left-0 
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
