import React from "react";

const trustedImages = [
  "/Trusted org assets/amref.png",
  "/Trusted org assets/ukaid.png",
  "/Trusted org assets/Un habitat.png",
  "/Trusted org assets/Un nation.jpg",
  "/Trusted org assets/WFP.png",
];

const TrustedCarousel = () => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-x whitespace-nowrap items-center gap-8 md:gap-16">
          {trustedImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center h-20 md:h-28 px-6"
            >
              <img
                src={img}
                alt="Trusted Organization Logo"
                className="h-12 md:h-20 w-auto object-contain transition duration-300"
                loading="lazy"
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
