import React from "react";

const images = [
  "/Assets/Urban design.jpg",
  "/Assets/Urban design (1).jpg",
  "/Assets/Urban design (2).jpg",
  "/Assets/urban design (3).jpg",
];

const UrbanDesignCarousel = ({ heightClass = "h-[38rem]" }) => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`relative w-full ${heightClass} flex items-center justify-center pt-20 md:pt-0`}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Urban Design ${idx + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ borderRadius: "0 0 2.5rem 2.5rem" }}
        />
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
    </div>
  );
};

export default UrbanDesignCarousel;
