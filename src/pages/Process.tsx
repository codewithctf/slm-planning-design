import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const processImages = [
  "/assets/feasiblity-studies.webp", // 01 Initial Consultation
  "/assets/research-analysis.webp", // 02 Research & Analysis
  "/assets/conceptual-design.webp", // 03 Conceptual Design
  "/assets/urban-planning-2.webp", // 04 Detailed Planning 
  "/assets/3d-render-2.webp", // 05 Implementation Oversight 
  "/assets/post-completion.webp" // 06 Post-Completion Review 
];

const principles = [
  {
    title: "Transparency",
    description: "Open communication and clear documentation throughout every phase of the project.",
    image: "/assets/core-values-3.webp"
  },
  {
    title: "Collaboration",
    description: "Active involvement of all stakeholders in the planning and design process.",
    image: "/assets/core-values-4.webp"
  },
  {
    title: "Innovation",
    description: "Leveraging cutting-edge tools and methodologies to solve complex challenges.",
    image: "/assets/core-values-2.webp"
  },
  {
    title: "Sustainability",
    description: "Environmental stewardship and long-term thinking in every decision.",
    image: "/assets/core-values.webp"
  }
];

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive discussion to understand your vision, goals, constraints, and project requirements.",
      details: [
        "Stakeholder meetings and interviews",
        "Site visits and analysis",
        "Project scope definition",
        "Timeline and budget establishment"
      ],
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Research & Analysis",
      description: "Deep dive into site conditions, regulatory requirements, community needs, and environmental factors.",
      details: [
        "Site surveys and data collection",
        "Regulatory and zoning analysis",
        "Community engagement sessions",
        "Environmental impact assessment"
      ],
      duration: "2-4 weeks"
    },
    {
      step: "03",
      title: "Conceptual Design",
      description: "Development of initial design concepts and planning frameworks based on research findings.",
      details: [
        "Concept sketches and diagrams",
        "Preliminary 3D visualizations",
        "Alternative scenario development",
        "Client feedback integration"
      ],
      duration: "3-5 weeks"
    },
    {
      step: "04",
      title: "Detailed Planning",
      description: "Refinement of concepts into detailed plans, specifications, and comprehensive documentation.",
      details: [
        "Technical drawings and specifications",
        "Detailed 3D renderings",
        "Implementation strategies",
        "Cost estimation and phasing"
      ],
      duration: "4-8 weeks"
    },
    {
      step: "05",
      title: "Implementation Oversight",
      description: "Ongoing support during project implementation to ensure design intent is maintained.",
      details: [
        "Construction administration",
        "Quality control monitoring",
        "Stakeholder coordination",
        "Issue resolution and modifications"
      ],
      duration: "Project dependent"
    },
    {
      step: "06",
      title: "Post-Completion Review",
      description: "Evaluation of project outcomes and long-term monitoring to ensure success and sustainability.",
      details: [
        "Performance evaluation",
        "Community impact assessment",
        "Lessons learned documentation",
        "Ongoing maintenance planning"
      ],
      duration: "Ongoing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Process | SLM Planning & Design</title>
        <meta name="description" content="Learn about SLM Planning & Design's collaborative process for delivering successful urban design and planning projects." />
        <meta property="og:title" content="Process | SLM Planning & Design" />
        <meta property="og:description" content="Learn about SLM Planning & Design's collaborative process for delivering successful urban design and planning projects." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/slm-logo.png" />
        <meta property="og:url" content="https://slmplanning.com/process" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Process | SLM Planning & Design" />
        <meta name="twitter:description" content="Learn about SLM Planning & Design's collaborative process for delivering successful urban design and planning projects." />
        <meta name="twitter:image" content="/assets/slm-logo.png" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
          <HeroCarousel heightClass="h-[38rem]" />
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Our Process
            </h1>
            <p className="font-inter text-xl md:text-2xl animate-fade-in">
              From Concept to Completion: A Systematic Journey
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

        {/* How We Work Section - Standalone, Chocolate Background, White Text */}
        <section className="py-16 w-full" style={{ background: '#f2ece0' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">How We Work</h2>
            <p className="font-inter text-lg md:text-xl text-gray-700 mb-4 animate-fade-in-up delay-100">
              Our proven methodology ensures that every project benefits from systematic planning, collaborative design, and expert implementation. We believe that great outcomes come from great processes, and we've refined our approach over more than a decade of successful project delivery.
            </p>
          </div>
        </section>

        {/* Process Steps - Cream background, black titles, gray-700 text, chocolate vibe, subtle animation */}
        <section className="py-0 pb-20 w-full" style={{ background: '#f2ece0' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 relative">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center relative animate-fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}> 
                  <div className="lg:w-1/2 w-full">
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-[#402920] rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">{step.step}</span>
                          </div>
                        </div>
                        <CardTitle className="font-playfair text-2xl text-black mb-2 drop-shadow-sm">
                          {step.title}
                        </CardTitle>
                        <CardDescription className="font-inter text-gray-700 text-lg">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-inter font-semibold text-black mb-3">
                            Key Activities:
                          </h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="font-inter text-gray-700 flex items-start">
                                <span className="text-[#b86a28] mr-2">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                          <span className="inline-block bg-[#402920] text-white px-3 py-1 rounded-full font-inter text-sm font-medium">
                            Duration: {step.duration}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="lg:w-1/2 w-full flex justify-center items-center relative">
                    {processImages[index] ? (
                      <div
                        className="h-80 w-full max-w-xl bg-cover bg-center rounded-lg shadow-xl animate-process-img-fade"
                        style={{ backgroundImage: `url('${processImages[index]}')` }}
                        role="img"
                        aria-label={step.title + ' image'}
                      />
                    ) : (
                      <div className="h-80 w-full max-w-xl bg-gray-200 rounded-lg shadow-xl flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                    {/* Draw an arrow to the next step except for the last step */}
                    {index < processSteps.length - 1 && (
                      <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-[-40px]' : 'left-[-40px]'} top-1/2 z-10`} style={{transform: 'translateY(-50%)'}}>
                        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 20 Q30 0 55 20" stroke="#b86a28" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)"/>
                          <defs>
                            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                              <polygon points="0 0, 8 4, 0 8" fill="#b86a28" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .animate-fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
            .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
            @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
            @keyframes process-img-fade {
              0% { opacity: 0; transform: scale(0.96) rotate(-2deg); }
              60% { opacity: 1; transform: scale(1.04) rotate(2deg); }
              100% { opacity: 1; transform: scale(1) rotate(0deg); }
            }
            .animate-process-img-fade {
              animation: process-img-fade 1.2s cubic-bezier(0.22, 1, 0.36, 1);
            }
          `}</style>
        </section>

        {/* Core Principles - Chocolate Expertise Style, matches expertise grid, uses images not icons */}
        <section className="py-20 w-full" style={{ background: "#fbf0de" }}>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-center mb-4 text-[#0d0706]">Our Core Principles</h2>
              <p className="font-inter text-base text-center text-[#797572] mb-8">These fundamental values guide our approach and ensure consistent, high-quality outcomes for every client.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {principles.map((principle, idx) => {
                return (
                  <div
                    key={principle.title}
                    className="relative group rounded-2xl overflow-hidden shadow-xl border-2 border-[#b86a28] bg-[#fbf0de] transition-transform duration-300 hover:scale-105 focus-within:scale-105"
                    style={{ aspectRatio: '1/1.1', minHeight: 260, minWidth: 0 }}
                    tabIndex={0}
                  >
                    <img
                      src={principle.image}
                      alt={principle.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-100 group-hover:scale-105 group-focus:brightness-100 group-focus:scale-105"
                      style={{ background: "#b86a28" }}
                    />
                    {/* Title at bottom always visible, hidden on hover/focus */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#b86a28ee] to-transparent px-3 py-3 flex justify-center transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                      <h3 className="font-playfair text-lg font-bold text-white drop-shadow text-center w-full">{principle.title}</h3>
                    </div>
                    {/* Overlay on hover/tap - semi-transparent, not full coverage, image remains visible */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 p-6"
                      style={{background: 'linear-gradient(180deg, rgba(107,58,26,0.45) 60%, rgba(107,58,26,0.15) 100%)'}}>
                      <h3 className="font-playfair text-xl font-bold text-white mb-2 text-center w-full drop-shadow">{principle.title}</h3>
                      <p className="font-inter text-base text-white text-center w-full leading-snug" style={{textAlign:'center', margin:0}}>{principle.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Timeline - More visible, aesthetic image, glassmorphism, white text */}
        <section className="py-20 relative min-h-[500px] flex items-center justify-center overflow-hidden" style={{background:'#422c21'}}>
          {/* Background image with minimal overlay for high visibility */}
          <img src="/assets/core-values-2.webp" alt="Project Timeline Background" className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none" style={{filter:'brightness(0.85) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#422c21cc] via-[#422c2100] to-[#422c21cc] z-10" />
          <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 relative inline-block drop-shadow-lg">
              Typical <span className="relative">Project
                <span className="absolute left-0 right-0 -bottom-2 h-1 w-full bg-white animate-underline-green" style={{borderRadius:'2px'}}></span>
              </span> Timeline
            </h2>
            <div className="backdrop-blur-lg bg-white/10 border border-[#fbf0de] rounded-2xl shadow-2xl p-8 w-full max-w-xl mx-auto" style={{boxShadow:'0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-inter font-semibold text-white">Small Projects</span>
                  <span className="font-inter text-white">3-6 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-semibold text-white">Medium Projects</span>
                  <span className="font-inter text-white">6-12 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-semibold text-white">Large Projects</span>
                  <span className="font-inter text-white">12-24 months</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#fbf0de]/30 pt-4">
                  <span className="font-inter font-semibold text-white">Master Plans</span>
                  <span className="font-inter text-white">18-36 months</span>
                </div>
              </div>
              <p className="font-inter text-white text-sm mt-6 opacity-80">
                *Timelines vary based on project complexity, scope, and regulatory requirements
              </p>
            </div>
          </div>
          <style>{`
            @keyframes underline-green {
              0% { width: 0; left: 50%; right: 50%; opacity: 0.5; }
              40% { width: 100%; left: 0; right: 0; opacity: 1; }
              60% { width: 100%; left: 0; right: 0; opacity: 1; }
              100% { width: 0; left: 50%; right: 50%; opacity: 0.5; }
            }
            .animate-underline-green {
              animation: underline-green 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
            }
          `}</style>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Process;
