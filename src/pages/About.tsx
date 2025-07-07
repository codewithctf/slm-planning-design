import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import gsap from "gsap";
import { Helmet } from 'react-helmet-async';

const About = () => {
  const teamMembers = [
    {
      name: "Michael Kimani",
      title: "Principal Urban Planner",
      image: "/assets/Team member 1.webp",
      description: "15+ years of experience in sustainable urban development",
      gender: "man"
    },
    {
      name: "Samuel Otieno",
      title: "Lead Landscape Architect",
      image: "/assets/Team Member 2.webp",
      description: "Expert in ecological design and green infrastructure",
      gender: "woman"
    },
    {
      name: "Grace Mwende",
      title: "Senior Urban Designer",
      image: "/assets/Team Member 3.webp",
      description: "Specializes in community-centered design solutions",
      gender: "man"
    },
    {
      name: "Aisha Njeri",
      title: "3D Visualization Director",
      image: "/assets/Team Member 4.webp",
      description: "Award-winning expertise in architectural visualization",
      gender: "woman"
    }
  ];

  const values = [
    {
      title: "Sustainability First",
      description: "Every project prioritizes environmental stewardship and long-term ecological health.",
      icon: "/assets/Sustainability icon.png"
    },
    {
      title: "Purpose Driven",
      description: "Guided by a clear mission to create lasting, positive impact.",
      icon: "/assets/purpose_driven-icon.png"
    },
    {
      title: "Collaborative Approach",
      description: "Working closely with clients, communities, and stakeholders throughout every project.",
      icon: "/assets/collaborative approach.png"
    },
    {
      title: "Innovation-Driven",
      description: "Leveraging cutting-edge technology and methodologies to solve complex urban challenges.",
      icon: "/assets/innovation icon.png"
    },
    {
      title: "Data Driven Solutions",
      description: "We harness data and analytics to inform smart, impactful decisions for our clients.",
      icon: "/assets/data_driven-icon.png"
    },
    {
      title: "Operational Excellence",
      description: "Delivering projects efficiently, effectively, and to the highest standards.",
      icon: "/assets/operational_excellence-icon.png",
      iconClass: "filter-green"
    },
    {
      title: "Intergrated Approach",
      description: "Seamlessly blending disciplines for holistic, future-ready solutions.",
      icon: "/assets/Intergrated-approach icon.png"
    },
    {
      title: "Community-Centered",
      description: "We design with people at the heart, creating spaces that serve diverse communities.",
      icon: "/assets/community centered.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | SLM Planning & Design</title>
        <meta name="description" content="Meet the team and discover the values behind SLM Planning & Design, a leader in sustainable urban planning, landscape architecture, and 3D visualization." />
        <meta property="og:title" content="About Us | SLM Planning & Design" />
        <meta property="og:description" content="Meet the team and discover the values behind SLM Planning & Design, a leader in sustainable urban planning, landscape architecture, and 3D visualization." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/slm-logo.png" />
        <meta property="og:url" content="https://slmplanning.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | SLM Planning & Design" />
        <meta name="twitter:description" content="Meet the team and discover the values behind SLM Planning & Design, a leader in sustainable urban planning, landscape architecture, and 3D visualization." />
        <meta name="twitter:image" content="/assets/slm-logo.png" />
      </Helmet>
      <div className="min-h-screen bg-[#e3dac9]">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
          <HeroCarousel heightClass="h-[38rem]" />
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Our Vision for a Better Tomorrow
            </h1>
            <p className="font-inter text-xl md:text-2xl animate-fade-in">
              Meet the innovators behind SLM's sustainable design solutions
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

        {/* Vision & Mission Feature Carousel */}
        <section className="relative z-30 mb-12 -mt-24 md:-mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 md:gap-28 justify-center items-center">
              {/* Vision Card */}
              <div className="w-full md:w-1/2 bg-[#e3dac9] rounded-2xl shadow py-10 px-8 flex flex-col items-center justify-between border-b-0 border-l-8 border-[#754322] relative group transition-shadow duration-300 hover:shadow-lg" style={{ minHeight: 300 }}>
                {/* Animated Icon */}
                <span className="mb-4 relative flex items-center justify-center">
                  <svg className="absolute animate-spin-slow w-14 h-14 text-[#712B29] opacity-30" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#712B29] relative z-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3.5" stroke="#712B29" strokeWidth="2" fill="#fff" /></svg>
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-extrabold uppercase text-[#3E3E3E] mb-4 tracking-wide">Our Vision</h3>
                <p className="font-inter text-base text-[#4B2E1D] text-center mb-8">To shape resilient, inclusive, and beautiful environments where people, nature, and design thrive in harmony.</p>
                {/* Decorative Dots */}
                <div className="flex gap-1 justify-center mt-auto mb-0">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#712B29]' : 'bg-[#FCEFEF]'}`}></span>
                  ))}
                </div>
              </div>
              {/* Mission Card */}
              <div className="w-full md:w-1/2 bg-[#e3dac9] rounded-2xl shadow py-10 px-8 flex flex-col items-center justify-between border-b-0 border-l-8 border-[#3B6B3B] relative group transition-shadow duration-300 hover:shadow-lg" style={{ minHeight: 300 }}>
                {/* Animated Icon */}
                <span className="mb-4 relative flex items-center justify-center">
                  <svg className="absolute animate-spin-slow w-14 h-14 text-[#3B6B3B] opacity-30" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#3B6B3B] relative z-10"><circle cx="12" cy="12" r="10" stroke="#3B6B3B" strokeWidth="2" fill="#fff" /><circle cx="12" cy="12" r="6" stroke="#3B6B3B" strokeWidth="2" fill="#fff" /><circle cx="12" cy="12" r="2" stroke="#3B6B3B" fill="#3B6B3B" /></svg>
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-extrabold uppercase text-[#3E3E3E] mb-4 tracking-wide">Our Mission</h3>
                <p className="font-inter text-base text-[#22543D] text-center mb-8">At SLM Planning & Design, we deliver integrated urban solutions that blend planning expertise, ecological sensitivity, and digital innovation to create sustainable spaces for communities, institutions, and ecosystems to flourish.</p>
                {/* Decorative Dots */}
                <div className="flex gap-1 justify-center mt-auto mb-0">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#3B6B3B]' : 'bg-[#FCEFEF]'}`}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`.animate-spin-slow { animation: spin 3s linear infinite; } @keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </section>

        {/* Our Story Section - Refined Overlay */}
        <section
          className="relative py-20 w-full flex items-center justify-center min-h-[420px]"
          style={{
            backgroundImage: "url('/assets/about-us.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Subtle gradient only at bottom for text readability */}
          <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 60%, rgba(30,20,10,0.55) 100%)', zIndex:1}} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow">Our Story</h2>
            <p className="font-inter text-lg md:text-xl text-white leading-relaxed drop-shadow" style={{textShadow:'0 2px 8px #1a0d06'}}>
              SLM Planning & Design was established by a team of passionate professionals dedicated to shaping the future of urban and regional environments. Our firm is built on a foundation of collaboration, innovation, and a deep respect for both people and the planet. We offer a comprehensive suite of services including urban and regional development plans, spatial and land use planning, environmental management, GIS services, sector plans, development control, and development applications. By integrating digital innovation, ecological sensitivity, and stakeholder engagement, we deliver tailored solutions that empower communities, institutions, and ecosystems to flourish sustainably.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20" style={{ background: "#fff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
                Our Core Values
              </h2>
              <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide every project we undertake and every relationship we build.
              </p>
            </div>
            <CoreValuesCards values={values} />
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
                Meet Our Team
              </h2>
              <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in 
                urban planning, design, and environmental stewardship.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Custom order: 1, 3, 2, 4 */}
              {[teamMembers[0], teamMembers[2], teamMembers[1], teamMembers[3]].map((member, index) => (
                <div
                  key={index}
                  className="group block rounded-2xl overflow-hidden shadow-lg transition-all duration-300 bg-white hover:bg-gradient-to-t hover:from-white/90 hover:to-white/60"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: 'center top' }}
                    />
                    {/* Social icons at image bottom, hidden by default, shown on hover */}
                    <div className="absolute left-0 bottom-3 w-full flex flex-row gap-3 justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <a href="#" className="inline-block" tabIndex={-1}><img src="/assets/facebook-icon.png" alt="Facebook" className="w-8 h-8 rounded-full bg-white p-1 shadow hover:scale-110 transition-transform duration-200" /></a>
                      <a href="#" className="inline-block" tabIndex={-1}><img src="/assets/X-icon.png" alt="X" className="w-8 h-8 rounded-full bg-white p-1 shadow hover:scale-110 transition-transform duration-200" /></a>
                      <a href="#" className="inline-block" tabIndex={-1}><img src="/assets/LinkedIn-icon.png" alt="LinkedIn" className="w-8 h-8 rounded-full bg-white p-1 shadow hover:scale-110 transition-transform duration-200" /></a>
                      <a href="#" className="inline-block" tabIndex={-1}><img src="/assets/instagram-icon.jpg" alt="Instagram" className="w-8 h-8 rounded-full bg-white p-1 shadow hover:scale-110 transition-transform duration-200" /></a>
                    </div>
                    {/* White gradient overlay on image hover */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  </div>
                  <div className="flex flex-col justify-center items-center h-44 w-full px-4 py-6 bg-white">
                    <CardTitle className="font-playfair text-xl text-slm-green-700 mb-1 text-center">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="font-inter text-slm-brown-600 font-medium mb-2 text-center">
                      {member.title}
                    </CardDescription>
                    <CardContent className="p-0">
                      <p className="font-inter text-gray-600 text-center text-sm">
                        {member.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLM In Numbers */}
        <section className="py-20 bg-slm-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-2">
              SLM In Numbers
            </h2>
            <div className="relative h-1 mb-4 mt-2">
              <span
                className="block animate-underline-loop bg-[#712B29] h-1 rounded-full mx-auto"
                style={{ width: '6rem', animationDuration: '1.5s', animationTimingFunction: 'ease', animationIterationCount: 'infinite', animationDirection: 'alternate' }}
              />
            </div>
            <p className="font-inter text-lg text-gray-700 mb-10">A snapshot of our impact, experience, and the communities we serve.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Animated Counter Cards */}
              <NumberCard label="Years of Experience" value={6} suffix="+" circleClass="bg-slm-green-600" />
              <NumberCard label="Projects Completed" value={50} suffix="+" circleClass="bg-[#712B29]" />
              <NumberCard label="Stakeholders Engaged" value={30} suffix="+" circleClass="bg-slm-green-600" />
            </div>
          </div>
          <style>{`
            @keyframes underline {
              from { width: 0; }
              to { width: 6rem; }
            }
            @keyframes underline-loop {
              0% { width: 0; }
              50% { width: 6rem; }
              100% { width: 0; }
            }
            .animate-underline-loop {
              animation-name: underline-loop;
            }
          `}</style>
        </section>

        <Footer />
      </div>
    </>
  );
};

// Animated Counter Card Component
function NumberCard({ label, value, suffix, circleClass }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const step = Math.ceil(end / 40);
    let raf;
    function animate() {
      start += step;
      if (start >= end) {
        setCount(end);
        setTimeout(() => {
          start = 0;
          setCount(0);
          raf = requestAnimationFrame(animate);
        }, 1200);
      } else {
        setCount(start);
        raf = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => raf && cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div className="space-y-4">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${circleClass || 'bg-slm-green-600'}`}>
        <span className="text-white text-2xl font-bold">{count}{suffix}</span>
      </div>
      <h3 className="font-playfair text-xl font-semibold text-slm-green-700">{label}</h3>
    </div>
  );
}

// Add CoreValuesCards component with GSAP animation and inline SVG support
const CoreValuesCards = ({ values }) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    // Fade-in animation for cards
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.1,
      ease: "power3.out",
    });
  }, [values]);

  useEffect(() => {
    // Continuous bounce animation for icons
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const icon = card.querySelector('.core-icon-pop');
      if (!icon) return;
      gsap.to(icon, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut"
      });
    });
  }, [values]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => {
        // Use .svg if available, else fallback to original icon
        const svgPath = value.icon.replace(/\.(png|jpg|jpeg)$/i, ".svg");
        // Check if SVG exists in public/assets (all your icons are there)
        const iconSrc = svgPath.includes('svg') ? svgPath : value.icon;
        return (
          <Card
            key={index}
            ref={el => (cardsRef.current[index] = el)}
            className="core-card text-center border border-[#b6e2c7] shadow-lg hover:shadow-2xl transition-shadow duration-300 group bg-white hover:bg-[#F0FDF4] hover:scale-105 transform-gpu"
          >
            <CardHeader>
              <div className="flex justify-center mb-4">
                <span className="w-16 h-16 rounded-full bg-slm-green-600 flex items-center justify-center core-icon-pop transition-transform duration-200">
                  <img
                    src={iconSrc}
                    alt={value.title + ' icon'}
                    className="w-9 h-9 object-contain"
                    draggable="false"
                  />
                </span>
              </div>
              <CardTitle className="font-playfair text-xl text-slm-green-700">
                {value.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-inter text-gray-600">
                {value.description}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default About;
