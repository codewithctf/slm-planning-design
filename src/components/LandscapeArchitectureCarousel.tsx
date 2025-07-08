import React, { useEffect, useRef, useState } from "react";

const images = [
  "/assets/landscape-architecture.webp",
  "/assets/landscape-architecture-1.webp",
  "/assets/landscape-architecture-3.webp",
];

interface CarouselProps {
  heightClass?: string;
}

const LandscapeArchitectureCarousel: React.FC<CarouselProps> = ({ heightClass = "h-full" }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ minHeight: '100%', height: '100%', backgroundColor: '#000' }}>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Landscape Architecture"
          loading="eager"
          className={`transition-opacity duration-400 ease-in-out w-full h-full object-cover absolute top-0 left-0 \
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
            "linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%)",
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

export default LandscapeArchitectureCarousel;
