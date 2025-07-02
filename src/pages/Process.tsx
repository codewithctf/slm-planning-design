import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const processImages = [
  "/Assets/Landscape Architecture (1).jpg", // 01 Initial Consultation
  "/Assets/Development Control & Planning Advisory.png",   // 02 Research & Analysis
  "/Assets/Transit-Oriented Development.jpg",      // 03 Conceptual Design
  "/Assets/urban planning (2).jpg",       // 04 Detailed Planning
  "/Assets/3D render 1.jpg",      // 05 Implementation Oversight
  "/Assets/urban planning.jpg"         // 06 Post-Completion Review
];

const principleIcons = [
  "/Assets/transparency icon.png",
  "/Assets/collaborative approach.png",
  "/Assets/innovation icon.png",
  "/Assets/Sustainability icon.png"
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

  const principles = [
    {
      title: "Transparency",
      description: "Open communication and clear documentation throughout every phase of the project.",
      icon: principleIcons[0]
    },
    {
      title: "Collaboration",
      description: "Active involvement of all stakeholders in the planning and design process.",
      icon: principleIcons[1]
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge tools and methodologies to solve complex challenges.",
      icon: principleIcons[2]
    },
    {
      title: "Sustainability",
      description: "Environmental stewardship and long-term thinking in every decision.",
      icon: principleIcons[3]
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

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
            How We Work
          </h2>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            Our proven methodology ensures that every project benefits from systematic planning, 
            collaborative design, and expert implementation. We believe that great outcomes come 
            from great processes, and we've refined our approach over more than a decade of 
            successful project delivery.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-0 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 relative">
            {/* Interlinking arrows for process flow */}
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center relative`}> 
                <div className="lg:w-1/2 w-full">
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-slm-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{step.step}</span>
                        </div>
                      </div>
                      <CardTitle className="font-playfair text-2xl text-slm-green-700 mb-2">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="font-inter text-gray-600 text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-inter font-semibold text-slm-brown-600 mb-3">
                          Key Activities:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="font-inter text-gray-600 flex items-start">
                              <span className="text-slm-green-500 mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <span className="inline-block bg-slm-green-100 text-slm-green-700 px-3 py-1 rounded-full font-inter text-sm font-medium">
                          Duration: {step.duration}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2 w-full flex justify-center items-center relative">
                  <div 
                    className="h-80 w-full max-w-xl bg-cover bg-center rounded-lg shadow-xl animate-process-img-fade"
                    style={{
                      backgroundImage: `url(${processImages[index]})`
                    }}
                  />
                  {/* Draw an arrow to the next step except for the last step */}
                  {index < processSteps.length - 1 && (
                    <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-[-40px]' : 'left-[-40px]'} top-1/2 z-10`} style={{transform: 'translateY(-50%)'}}>
                      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 20 Q30 0 55 20" stroke="#2B7151" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)"/>
                        <defs>
                          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                            <polygon points="0 0, 8 4, 0 8" fill="#2B7151" />
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
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s cubic-bezier(0.22, 1, 0.36, 1);
          }
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

      {/* Core Principles */}
      <section className="py-20" style={{ background: "#FCEFEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
              Our Core Principles
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental values guide our approach and ensure consistent, 
              high-quality outcomes for every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl animate-principle-pop group relative overflow-visible">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 px-4">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center relative">
                    {/* Spinning rectangle border */}
                    <span className="absolute inset-0 rounded-lg border-2 border-[#712B29] animate-spin-slow z-0" style={{borderStyle:'solid'}}></span>
                    <span className="relative z-10 w-16 h-16 flex items-center justify-center bg-white rounded-lg">
                      <img src={principle.icon} alt={principle.title + ' icon'} className="w-12 h-12 object-contain" />
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-slm-green-700 mb-2 group-hover:text-white transition-colors duration-300">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-inter text-gray-600 group-hover:text-white transition-colors duration-300">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </div>
                {/* Card hover: brown bg, white text */}
                <style>{`
                  .group:hover {
                    background: #712B29 !important;
                  }
                  .group:hover .text-slm-green-700,
                  .group:hover .text-gray-600 {
                    color: #fff !important;
                  }
                `}</style>
              </Card>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes principle-pop {
            0% { opacity: 0; transform: scale(0.92) rotate(-2deg); }
            60% { opacity: 1; transform: scale(1.04) rotate(2deg); }
            100% { opacity: 1; transform: scale(1) rotate(0deg); }
          }
          .animate-principle-pop {
            animation: principle-pop 1.1s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .animate-spin-slow {
            animation: spin 2.5s linear infinite;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-slm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8 relative inline-block">
            Typical <span className="relative">Project
              <span className="absolute left-0 right-0 -bottom-2 h-1 w-full bg-[#712B29] animate-underline-brown" style={{borderRadius:'2px'}}></span>
            </span> Timeline
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-inter font-semibold text-slm-green-700">Small Projects</span>
                <span className="font-inter text-gray-600">3-6 months</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-inter font-semibold text-slm-green-700">Medium Projects</span>
                <span className="font-inter text-gray-600">6-12 months</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-inter font-semibold text-slm-green-700">Large Projects</span>
                <span className="font-inter text-gray-600">12-24 months</span>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-inter font-semibold text-slm-green-700">Master Plans</span>
                <span className="font-inter text-gray-600">18-36 months</span>
              </div>
            </div>
            <p className="font-inter text-gray-500 text-sm mt-6">
              *Timelines vary based on project complexity, scope, and regulatory requirements
            </p>
          </div>
        </div>
        <style>{`
          @keyframes underline-brown {
            0% { width: 0; left: 50%; right: 50%; opacity: 0.5; }
            40% { width: 100%; left: 0; right: 0; opacity: 1; }
            60% { width: 100%; left: 0; right: 0; opacity: 1; }
            100% { width: 0; left: 50%; right: 50%; opacity: 0.5; }
          }
          .animate-underline-brown {
            animation: underline-brown 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
