import React, { useEffect, useRef, useState } from "react";

interface UrbanPlanningCarouselProps {
  heightClass?: string;
}

const images = [
  {
    src: "/assets/urban-planning.webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/assets/urban-planning-2.webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/assets/urban-planning-3.webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/assets/urban-planning-4.webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/assets/urban-planning-5.webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  }
];

const UrbanPlanningCarousel: React.FC<UrbanPlanningCarouselProps> = ({ heightClass = "h-[38rem]" }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full ${heightClass} flex items-center justify-center`}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute w-full h-full top-0 left-0 transition-opacity duration-400 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img
            src={img.src}
            alt={img.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{background: "linear-gradient(180deg, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.35) 100%)"}} />
        </div>
      ))}
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
