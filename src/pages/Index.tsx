import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import TrustedCarousel from "@/components/TrustedCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const expertise = [
    {
      title: "Integrated Urban Solutions",
      description: "Holistic planning that unites infrastructure, mobility, and community for thriving cities.",
      image: "/Assets/intergrated urban solutions.webp",
    },
    {
      title: "Contextual Landscape Design",
      description: "Designs rooted in local ecology and culture, creating sustainable, beautiful outdoor spaces.",
      image: "/Assets/contextual landscape design.webp",
    },
    {
      title: "3D Storytelling",
      description: "Immersive visualizations that bring your vision to life and communicate ideas powerfully.",
      image: "/Assets/3D storytelling.webp",
    },
    {
      title: "Collaborative Design Thinking",
      description: "Engaging stakeholders at every step to co-create innovative, people-centered solutions.",
      image: "/Assets/collaborative design thinking.webp",
    },
  ];

  const TimelineCard = ({ number, title, description, image }: { number: number; title: string; description: string; image: string }) => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    return (
      <div
        className={`relative flex flex-col items-center p-0 transition-all duration-300 ease-in-out shadow-md rounded-lg border border-[#E0D6D6] h-full bg-white cursor-pointer ${
          hovered ? "shadow-lg -translate-y-2 border-[#5A3E2B]" : ""
        }`}
        style={{ minHeight: 340 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setActive(false); }}
        onClick={() => setActive(!active)}
      >
        {/* Card Image with zoom effect */}
        <div className="w-full h-40 rounded-t-lg overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-in-out ${hovered ? "scale-110" : "scale-100"}`}
          />
          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 transition-all duration-300 pointer-events-none ${hovered ? "bg-black/40" : "bg-transparent"}`}
          />
        </div>
        {/* Step bar with number circle */}
        <div className="flex items-center justify-center w-full mt-4 mb-2">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold text-base bg-white transition-all duration-300 ${
              (hovered || active) ? "border-[#712B29] text-[#712B29] -translate-y-2 shadow" : "border-[#712B29] text-[#712B29]"
            }`}
            style={{ zIndex: 2 }}
          >
            {number}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-end px-6 pb-6 pt-2 w-full">
          <h3 className={`font-playfair text-xl font-bold mb-2 text-center transition-colors duration-300 ${
            (hovered || active) ? "text-[#712B29]" : "text-[#4B2E1D]"
          }`}>
            {title}
          </h3>
          <p className={`font-inter text-base text-center transition-colors duration-300 ${
            (hovered || active) ? "text-[#712B29]" : "text-[#444444]"
          }`}>
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroCarousel heightClass="min-h-screen" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Shaping Sustainable Futures
          </h1>
          <p className="font-inter text-xl md:text-2xl mb-8 animate-fade-in">
            Innovative urban design, planning, and landscape architecture solutions 
            for NGOs, government bodies, and private sector clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-8 py-3"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-slm-green-600 text-slm-green-700 font-semibold px-8 py-3"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
            Welcome to SLM Planning
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At SLM, we believe in creating spaces that not only serve today's needs but 
            anticipate tomorrow's challenges. Our integrated approach to urban design, 
            planning, and landscape architecture ensures sustainable, innovative solutions
            for every client.
          </p>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20" style={{ background: "#FCEFEF" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-[#712B29]">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {expertise.map((item, idx) => (
              <TimelineCard
                key={item.title}
                number={idx + 1}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 mb-8 md:mb-0 flex flex-col justify-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-slm-green-800">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-[#712B29] rounded-full mb-8 mt-6" />
            <p className="font-inter text-lg md:text-xl text-[#444444] mb-6">
              Partnering with SLM means more than just great design—it's a commitment to visionary thinking, sustainable impact, and a collaborative journey from concept to completion. We don't just plan spaces; we help shape communities and futures.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#712B29]"></span>
                <span className="font-inter text-base md:text-lg text-[#444444]">Sustainable design principles in every project</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#712B29]"></span>
                <span className="font-inter text-base md:text-lg text-[#444444]">Community-centered planning approach</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#712B29]"></span>
                <span className="font-inter text-base md:text-lg text-[#444444]">Award-winning design excellence</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#712B29]"></span>
                <span className="font-inter text-base md:text-lg text-[#444444]">Comprehensive project management</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/Assets/A Team Collaborating on an Urban Masterplan.webp" alt="A Team Collaborating on an Urban Masterplan" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>
        </div>
      </section>

      {/* Trusted by Leading Organizations Section (moved below Why Choose Us, no client name placeholders) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slm-green-700 mb-2">Trusted by Leading Organizations</h2>
          <p className="font-inter text-lg text-gray-700 mb-8">We're proud to partner with forward-thinking organizations worldwide.</p>
          <TrustedCarousel />
        </div>
      </section>

      <TestimonialsSection />

      {/* Call to Action */}
      <section className="py-20 bg-slm-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="font-inter text-xl text-slm-green-100 mb-8">
            Let's discuss how we can help you create sustainable, innovative solutions 
            for your next urban development project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-8 py-3"
            >
              <Link to="/quote">Get Started</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-slm-green-600 font-semibold px-8 py-3"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
