import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

function useInView(ref, rootMargin = "-100px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

const processSteps = [
  {
    number: 1,
    title: "Discovery & Analysis",
    desc: "We begin by understanding your vision, analyzing the site, and engaging with stakeholders."
  },
  {
    number: 2,
    title: "Design & Planning",
    desc: "Our team creates innovative solutions that balance function, beauty, and sustainability."
  },
  {
    number: 3,
    title: "Implementation & Support",
    desc: "We guide you through implementation and provide ongoing support for project success."
  }
];

const Services = () => {
  const services = [
    {
      title: "Urban Design",
      description: "Creating vibrant, functional, and sustainable urban environments that enhance quality of life for all residents.",
      features: [
        "Mixed-use development planning",
        "Public space design",
        "Transit-oriented development",
        "Historic district revitalization",
        "Zoning and land use optimization"
      ],
      deliverables: [
        "Comprehensive design guidelines",
        "3D visualizations and renderings",
        "Master plan documentation",
        "Community engagement reports"
      ]
    },
    {
      title: "Urban Planning",
      description: "Strategic planning solutions that balance economic growth with environmental sustainability and community needs.",
      features: [
        "Comprehensive planning",
        "Strategic development frameworks",
        "Economic impact analysis",
        "Transportation planning",
        "Environmental impact assessments"
      ],
      deliverables: [
        "Master plans and strategic frameworks",
        "Policy recommendations",
        "Implementation timelines",
        "Stakeholder engagement summaries"
      ]
    },
    {
      title: "3D Rendering",
      description: "Cutting-edge visualization services that bring your vision to life with photorealistic accuracy and detail.",
      features: [
        "Architectural visualization",
        "Urban landscape rendering",
        "Virtual reality experiences",
        "Animation and walkthroughs",
        "Interactive 3D models"
      ],
      deliverables: [
        "High-resolution renderings",
        "360-degree panoramic views",
        "Interactive presentations",
        "Virtual tour experiences"
      ]
    },
    {
      title: "Landscape Architecture",
      description: "Harmonizing natural environments with built spaces to create sustainable, beautiful, and functional landscapes.",
      features: [
        "Ecological restoration",
        "Green infrastructure design",
        "Park and recreation planning",
        "Sustainable water management",
        "Native plant integration"
      ],
      deliverables: [
        "Landscape master plans",
        "Plant selection guides",
        "Maintenance protocols",
        "Environmental impact reports"
      ]
    }
  ];

  const serviceCards = [
    {
      title: "Urban Planning",
      description: "Comprehensive planning solutions for sustainable urban development and community growth.",
      features: [
        "Master Planning & Zoning",
        "Land Use Planning",
        "Transportation Planning",
        "Policy Development",
        "Community Engagement"
      ],
      image: "/Assets/urban planning.webp"
    },
    {
      title: "Urban Design",
      description: "Creating functional, beautiful public spaces that strengthen community connections.",
      features: [
        "Public Space Design",
        "Streetscape Design",
        "Mixed-Use Development",
        "Accessibility Planning",
        "Wayfinding Systems"
      ],
      image: "/Assets/Urban design.webp"
    },
    {
      title: "Landscape Architecture",
      description: "Integrating natural elements into urban environments for sustainable, resilient cities.",
      features: [
        "Green Infrastructure",
        "Park & Recreation Design",
        "Stormwater Management",
        "Native Plant Design",
        "Urban Forestry"
      ],
      image: "/Assets/Landscape Architecture.webp"
    },
    {
      title: "3D Rendering",
      description: "Bringing your vision to life with photorealistic visualizations and immersive experiences.",
      features: [
        "Architectural Visualization",
        "Virtual Reality Tours",
        "Interactive 3D Models",
        "Design Presentations",
        "Marketing Materials"
      ],
      image: "/Assets/3D render.webp"
    }
  ];

  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const serviceOptions = [
    "Urban Planning",
    "Urban Design",
    "Landscape Architecture",
    "3D Rendering"
  ];

  const additionalServiceCards = [
    {
      title: "Community Engagement",
      image: "/Assets/community engagement-service.webp",
      description: "Facilitated workshops, public meetings, and stakeholder consultation processes."
    },
    {
      title: "Feasibility Studies",
      image: "/Assets/Feasiblity-studies.webp",
      description: "Comprehensive analysis of project viability including financial and environmental factors."
    },
    {
      title: "Project Management",
      image: "/Assets/project management.webp",
      description: "End-to-end project coordination from initial concept through implementation."
    },
    {
      title: "Regulatory Compliance",
      image: "/Assets/Regulatory-compliance.webp",
      description: "Ensuring all designs meet local building codes and environmental regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
        <HeroCarousel heightClass="h-[38rem]" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Our Services
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            Comprehensive planning and design solutions that transform communities and create sustainable urban environments for the future.
          </p>
        </div>
        {/* Animated Scroll Indicator */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
          style={{ bottom: '36px' }}
          aria-label="Scroll down"
        >
          <div
            className="scroll-mouse group w-8 h-14 md:w-9 md:h-16 border-2 border-white rounded-full flex items-start justify-center relative transition-transform duration-200 hover:scale-110"
            tabIndex={0}
            role="img"
            aria-label="Scroll down"
          >
            <span
              className="block bg-white rounded-full absolute left-1/2 -translate-x-1/2"
              style={{ width: '6px', height: '12px', top: '8px', animation: 'scroll-dot 1.4s cubic-bezier(0.45,0,0.55,1) infinite' }}
            />
          </div>
        </div>
        <style>{`
          @keyframes scroll-dot {
            0% { transform: translate(-50%, 0); opacity: 1; }
            40% { opacity: 1; }
            60% { transform: translate(-50%, 18px); opacity: 0.7; }
            100% { transform: translate(-50%, 0); opacity: 1; }
          }
          .scroll-mouse {
            background: rgba(255,255,255,0.04);
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
            outline: none;
          }
          .scroll-mouse:focus {
            box-shadow: 0 0 0 3px #fff6, 0 2px 8px 0 rgba(0,0,0,0.08);
          }
        `}</style>
      </section>

      {/* Responsive Service Cards Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {serviceCards.map((service, idx) => (
              <div key={idx} className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full min-h-[420px]">
                <div className="h-56 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-playfair text-2xl font-bold text-slm-green-700 mb-2">{service.title}</h3>
                  <p className="font-inter text-gray-700 mb-4">{service.description}</p>
                  <div className="mb-3">
                    <h4 className="font-playfair text-lg font-semibold text-slm-brown-600 mb-1">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 font-inter text-base space-y-1">
                      {service.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link
                      to={service.title === "Urban Planning" ? "/services/urban-planning" : `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full flex items-center justify-center gap-2 bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold rounded-lg px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slm-green-400 focus:ring-offset-2 text-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section (standalone, bg-[#F0F8F4]) */}
      <section className="py-16" style={{ background: '#F0F8F4' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slm-green-800 mb-2 animate-fade-in">Additional Services</h2>
            <p className="font-inter text-lg text-gray-700 animate-fade-in delay-100">Supporting services that complement our core offerings</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {additionalServiceCards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-[#d1e7dd] shadow-md hover:shadow-xl transition-all duration-300 p-0 flex flex-col items-center text-center animate-fade-in-up additional-service-card overflow-hidden hover:scale-105 relative">
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden transition-transform duration-500 group hover:scale-105">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col items-center w-full relative flex-1">
                  <h3 className="font-playfair text-xl font-bold text-slm-green-700 mb-2">{card.title}</h3>
                  <p className="font-inter text-gray-800 mb-0">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}</style>
      </section>

      {/* How We Work Section (now white bg) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">How We Work</h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
              Our collaborative approach ensures every project meets your unique needs while exceeding sustainability and design standards.
            </p>
          </div>
          {/* Process Steps Flow with interlinked cards */}
          <div className="relative flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 animate-fade-in-up">
            {processSteps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="flex-1 bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slm-green-600 text-white font-bold text-2xl mb-4 border-4 border-white shadow">
                    {step.number}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-slm-green-800 mb-2">{step.title}</h3>
                  <p className="font-inter text-gray-700">{step.desc}</p>
                </div>
                {/* Draw connector except after last card */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 md:-translate-x-1/2 w-12 h-1 bg-slm-green-200 z-0" style={{marginLeft: '-24px'}} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-8 py-3">
              <Link to="/process">View Our Complete Process</Link>
            </Button>
          </div>
        </div>
        <style>{`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}</style>
      </section>

      {/* Ready to Get Started Section (now matches blog Stay Updated) */}
      <section className="py-16 bg-slm-green-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="font-inter text-lg md:text-xl text-slm-green-100 mb-8">Let's discuss how our services can help bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-slm-green-700 font-semibold px-8 py-3 border-2 border-slm-green-600 hover:bg-slm-green-50">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-slm-green-700 text-white font-semibold px-8 py-3 hover:bg-slm-green-800">
              <Link to="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
