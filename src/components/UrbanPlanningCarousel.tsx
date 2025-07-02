import React, { useEffect, useRef, useState } from "react";

interface UrbanPlanningCarouselProps {
  heightClass?: string;
}

const images = [
  {
    src: "/Assets/urban planning.jpg",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (2).jpg",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (3).jpg",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (4).jpg",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (5).jpg",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  }
];

const UrbanPlanningCarousel: React.FC<UrbanPlanningCarouselProps> = ({ heightClass = "h-[38rem]" }) => {
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
    <div className={`relative w-full ${heightClass} flex items-center justify-center pt-20 md:pt-0`}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute w-full h-full top-0 left-0 transition-opacity duration-1000 ${idx === current && loaded ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{ borderRadius: "0 0 2.5rem 2.5rem" }}
        >
          <img
            src={img.src}
            alt={img.title}
            className="w-full h-full object-cover"
            style={{ borderRadius: "0 0 2.5rem 2.5rem" }}
          />
          {/* Gradient overlay for text readability, not a solid black */}
          <div className="absolute inset-0" style={{background: "linear-gradient(180deg, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)", borderRadius: "0 0 2.5rem 2.5rem"}} />
          {/* Only keep the main prominent overlay text, remove any duplicate text overlays at the bottom */}
        </div>
      ))}
      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/40"} transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default UrbanPlanningCarousel;
