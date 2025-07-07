import React from "react";

const trustedImages = [
  "/assets/amref-icon.png",
  "/assets/ukaid-icon.png",
  "/assets/Un_habitat.png",
  "/assets/Un_nations.png",
  "/assets/WFP-icon.png",
];

// Duplicate the array for seamless infinite scroll
const images = [...trustedImages, ...trustedImages];

const TrustedCarousel = () => {
  return (
    <div className="w-full py-8 bg-[#e3dbc8]">
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-x whitespace-nowrap items-center gap-8 md:gap-16">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 flex items-center justify-center h-20 md:h-28 px-6 group cursor-pointer"
            >
              <img
                src={img}
                alt="Trusted Organization Logo"
                className="h-12 md:h-20 w-auto object-contain transition duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustedCarousel;
