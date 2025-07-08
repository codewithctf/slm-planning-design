import React from "react";

const images = [
  "/assets/urban-design.webp",
  "/assets/urban-design-1.webp",
  "/assets/urban-design-2.webp",
  "/assets/urban-design-3.webp",
];

const UrbanDesignCarousel = ({ heightClass = "h-[38rem]" }) => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`relative w-full ${heightClass} flex items-center justify-center`}
    >
      {images.map((img, idx) => (
        <div key={idx} className={`absolute w-full h-full top-0 left-0 transition-opacity duration-400 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img
            src={img}
            alt={`Urban Design ${idx + 1}`}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{background: "linear-gradient(180deg, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.35) 100%)"}} />
        </div>
      ))}
      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-white/40"
            } transition-all duration-300`}
          />
        ))}
      </div>
      {/* Text overlay (above overlay) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center w-full px-2 sm:px-4 pointer-events-none">
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-[#fff] mb-2 animate-fade-in-up" style={{textShadow: '0 2px 16px rgba(0,0,0,0.32), 0 1.5px 4px rgba(0,0,0,0.18)'}}>
          Urban Design
        </h2>
        <p className="font-inter text-base sm:text-lg md:text-xl text-[#fff] max-w-2xl mx-auto animate-fade-in-up delay-150" style={{textShadow: '0 2px 16px rgba(0,0,0,0.32), 0 1.5px 4px rgba(0,0,0,0.18)'}}>
          Shaping Cities for People, Nature, and the Future
        </p>
      </div>
    </div>
  );
};

export default UrbanDesignCarousel;
