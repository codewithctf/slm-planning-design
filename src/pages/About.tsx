import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import gsap from "gsap";
import { Helmet } from 'react-helmet-async';
import coreValue3 from '/assets/core-values-3.webp';
import coreValue4 from '/assets/core-values-4.webp';
import coreValue5 from '/assets/core-values-5.webp';
import coreValue6 from '/assets/core-values-6.webp';
import coreValue7 from '/assets/core-values-7.webp';
import coreValue8 from '/assets/core-values-8.webp';

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
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
              {/* Vision Card */}
              <div className="w-full md:w-1/2 bg-[#f7ede5] rounded-2xl shadow-lg py-10 px-8 flex flex-col items-center justify-between border-l-8 border-[#7b4b2a] relative group transition-shadow duration-300 hover:shadow-2xl" style={{ minHeight: 300 }}>
                {/* Animated Icon */}
                <span className="mb-4 relative flex items-center justify-center">
                  <svg className="absolute animate-spin-slow w-14 h-14 text-[#b86a28] opacity-20" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#7b4b2a] relative z-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3.5" stroke="#7b4b2a" strokeWidth="2" fill="#fff" /></svg>
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-extrabold uppercase text-black mb-4 tracking-wide">Our Vision</h3>
                <p className="font-inter text-base text-[#3e2211] text-center mb-8">To shape resilient, inclusive, and beautiful environments where people, nature, and design thrive in harmony.</p>
                <div className="flex gap-1 justify-center mt-auto mb-0">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#7b4b2a]' : 'bg-[#f7ede5]'}`}></span>
                  ))}
                </div>
              </div>
              {/* Mission Card */}
              <div className="w-full md:w-1/2 bg-[#f7ede5] rounded-2xl shadow-lg py-10 px-8 flex flex-col items-center justify-between border-l-8 border-[#b86a28] relative group transition-shadow duration-300 hover:shadow-2xl" style={{ minHeight: 300 }}>
                {/* Animated Icon */}
                <span className="mb-4 relative flex items-center justify-center">
                  <svg className="absolute animate-spin-slow w-14 h-14 text-[#7b4b2a] opacity-20" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#b86a28] relative z-10"><circle cx="12" cy="12" r="10" stroke="#b86a28" strokeWidth="2" fill="#fff" /><circle cx="12" cy="12" r="6" stroke="#b86a28" strokeWidth="2" fill="#fff" /><circle cx="12" cy="12" r="2" stroke="#b86a28" fill="#b86a28" /></svg>
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-extrabold uppercase text-black mb-4 tracking-wide">Our Mission</h3>
                <p className="font-inter text-base text-[#3e2211] text-center mb-8">At SLM Planning & Design, we deliver integrated urban solutions that blend planning expertise, ecological sensitivity, and digital innovation to create sustainable spaces for communities, institutions, and ecosystems to flourish.</p>
                <div className="flex gap-1 justify-center mt-auto mb-0">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#b86a28]' : 'bg-[#f7ede5]'}`}></span>
                  ))}
                </div>
              </div>
            </div>
            <style>{`.animate-spin-slow { animation: spin 3s linear infinite; } @keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          </div>
        </section>

        {/* Our Story Section - Gentle Chocolate Overlay */}
        <section
          className="relative py-20 w-full flex items-center justify-center min-h-[420px]"
          style={{
            backgroundImage: "url('/assets/about-us.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Gentle chocolate overlay for warmth and readability */}
          <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to bottom, rgba(78,46,30,0.32) 60%, rgba(78,46,30,0.62) 100%)', zIndex:1}} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow">Our Story</h2>
            <p className="font-inter text-lg md:text-xl text-white leading-relaxed drop-shadow" style={{textShadow:'0 2px 8px #1a0d06'}}>
              SLM Planning & Design was established by a team of passionate professionals dedicated to shaping the future of urban and regional environments. Our firm is built on a foundation of collaboration, innovation, and a deep respect for both people and the planet. We offer a comprehensive suite of services including urban and regional development plans, spatial and land use planning, environmental management, GIS services, sector plans, development control, and development applications. By integrating digital innovation, ecological sensitivity, and stakeholder engagement, we deliver tailored solutions that empower communities, institutions, and ecosystems to flourish sustainably.
            </p>
          </div>
        </section>

        {/* Our Core Values Section - 4 per row, all 8 values, unique images, cropped */}
        <section className="py-20 w-full" style={{ background: "#f2ece0" }}>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-[#0d0a09] animate-fade-in-up">Our Core Values</h2>
            <p className="font-inter text-base text-center text-[#4d4942] mb-8 animate-fade-in-up delay-100">
              These principles guide every project we undertake and every relationship we build.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Sustainability First", image: "/assets/core-values-2.webp", desc: "Every project prioritizes environmental stewardship and long-term ecological health." },
                { title: "Purpose Driven", image: coreValue3, desc: "Guided by a clear mission to create lasting, positive impact." },
                { title: "Collaborative Approach", image: coreValue4, desc: "Working closely with clients, communities, and stakeholders throughout every project." },
                { title: "Innovation-Driven", image: coreValue5, desc: "Leveraging cutting-edge technology and methodologies to solve complex urban challenges." },
                { title: "Data Driven Solutions", image: coreValue6, desc: "We harness data and analytics to inform smart, impactful decisions for our clients." },
                { title: "Operational Excellence", image: coreValue7, desc: "Delivering projects efficiently, effectively, and to the highest standards." },
                { title: "Intergrated Approach", image: coreValue8, desc: "Seamlessly blending disciplines for holistic, future-ready solutions." },
                { title: "Community-Centered", image: "/assets/core-values-8.webp", desc: "We design with people at the heart, creating spaces that serve diverse communities." },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="relative group rounded-3xl overflow-hidden shadow-xl border-2 border-[#b86a28] bg-[#fbf0de] transition-transform duration-300 hover:scale-105 focus-within:scale-105 flex flex-col items-center justify-end min-h-[320px]"
                  style={{ minWidth: 0 }}
                  tabIndex={0}
                >
                  <div className="w-full h-40 flex items-center justify-center bg-[#e7d3c0] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover h-32 w-full drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-end w-full px-4 py-6 text-center">
                    <h3 className="font-playfair text-lg font-bold text-[#7b4b2a] mb-2 drop-shadow-sm">{item.title}</h3>
                    <p className="font-inter text-base text-[#4d4942] leading-snug mb-0">{item.desc}</p>
                  </div>
                  {/* Decorative chocolate bar at bottom */}
                  <div className="w-full h-2 bg-gradient-to-r from-[#b86a28] via-[#7b4b2a] to-[#b86a28] rounded-b-3xl" />
                  {/* Overlay on hover/tap - subtle, not full coverage */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                    style={{background: 'linear-gradient(180deg, rgba(123,75,42,0.13) 60%, rgba(123,75,42,0.09) 100%)'}}>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 w-full" style={{ background: '#f7ede5' }}>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-black">Meet Our Team</h2>
            <p className="font-inter text-base text-center text-gray-600 mb-8">
              Our diverse team of experts brings together decades of experience in urban planning, design, and environmental stewardship.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {teamMembers.map((member, idx) => (
                <div
                  key={member.name}
                  className="relative group flex flex-col items-center justify-end min-h-[340px]"
                  style={{ minWidth: 0 }}
                  tabIndex={0}
                >
                  <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-[#7b4b2a] via-[#b86a28] to-[#e7d3c0] rounded-3xl shadow-2xl overflow-hidden relative border-4 border-[#7b4b2a]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover h-60 w-full rounded-2xl transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
                      style={{ aspectRatio: '1/1', objectPosition: 'top center' }}
                    />
                    {/* Overlay slides up from bottom, not covering face */}
                    <div className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none group-hover:pointer-events-auto group-focus:pointer-events-auto">
                      <div className="translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-400 ease-in-out w-full px-0 pb-0">
                        <div className="bg-gradient-to-t from-[#7b4b2a_f2] via-[#b86a28_cc] to-[#7b4b2a_80] rounded-b-3xl px-4 pt-6 pb-4 flex flex-col items-center min-h-[120px] shadow-2xl border-t-2 border-[#b86a28]" style={{backdropFilter:'blur(3px)'}}>
                          <span className="font-playfair text-lg font-bold text-[#ffe7b3] mb-1 drop-shadow-lg">{member.name}</span>
                          <span className="font-inter text-base text-[#fff] font-semibold mb-1">{member.title}</span>
                          <span className="font-inter text-sm text-[#f2ece0] mb-2 text-center">{member.description}</span>
                          <div className="flex gap-3 mt-1">
                            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform" tabIndex={-1}>
                              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="#fff"/><rect width="20" height="20" x="2" y="2" rx="6" stroke="#b86a28" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#b86a28" strokeWidth="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="#b86a28"/></svg>
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform" tabIndex={-1}>
                              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="#fff"/><rect width="20" height="20" x="2" y="2" rx="6" stroke="#b86a28" strokeWidth="2"/><path d="M15.5 8.5h-2a1 1 0 0 0-1 1v2h3l-.5 2h-2.5v6h-2v-6H8v-2h2v-2a3 3 0 0 1 3-3h2v2z" fill="#b86a28"/></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform" tabIndex={-1}>
                              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="#fff"/><rect width="20" height="20" x="2" y="2" rx="6" stroke="#b86a28" strokeWidth="2"/><path d="M8.5 10.5v6h2v-6h-2zm1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.5 2v6h2v-3c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v3h2v-3.5c0-2-1.5-3.5-3.5-3.5s-3.5 1.5-3.5 3.5z" fill="#b86a28"/></svg>
                            </a>
                            <a href="#" aria-label="X" className="hover:scale-110 transition-transform" tabIndex={-1}>
                              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="#fff"/><rect width="20" height="20" x="2" y="2" rx="6" stroke="#b86a28" strokeWidth="2"/><path d="M9 9l6 6M15 9l-6 6" stroke="#b86a28" strokeWidth="2" strokeLinecap="round"/></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLM In Numbers */}
        <section className="py-20 bg-[#e3dbc8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-2">
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
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${circleClass || 'bg-white'}`}>
        <span className="text-white text-2xl font-bold">{count}{suffix}</span>
      </div>
      <h3 className="font-playfair text-xl font-semibold text-black">{label}</h3>
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
                <span className="w-16 h-16 rounded-full bg-black flex items-center justify-center core-icon-pop transition-transform duration-200">
                  <img
                    src={iconSrc}
                    alt={value.title + ' icon'}
                    className="w-9 h-9 object-contain"
                    draggable="false"
                  />
                </span>
              </div>
              <CardTitle className="font-playfair text-xl text-black">
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
