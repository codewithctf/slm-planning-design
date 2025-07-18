import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import LandscapeArchitectureCarousel from "@/components/LandscapeArchitectureCarousel";
import { Helmet } from 'react-helmet-async';

const landscapeServices = [
	{
		title: "Park & Open Space Design",
		image: "/assets/park-open-space-design.webp",
		desc: "Designing inclusive public parks, urban plazas, and recreational green spaces that enhance livability and wellbeing.",
	},
	{
		title: "Ecological Restoration",
		image: "/assets/ecological-restoration.webp",
		desc: "Rehabilitating degraded landscapes by reintroducing native ecosystems and improving natural hydrology and habitat function.",
	},
	{
		title: "Green Infrastructure Design",
		image: "/assets/green-infrastructure-design.webp",
		desc: "Implementing nature-based solutions like bioswales, green roofs, and permeable surfaces to manage stormwater and reduce urban heat.",
	},
	{
		title: "Native Plant Design",
		image: "/assets/native-plant-design.webp",
		desc: "Using indigenous plant palettes to support local ecology, reduce maintenance costs, and enhance visual identity.",
	},
	{
		title: "Corporate & Commercial Landscaping",
		image: "/assets/corporate-commercial-landscaping.webp",
		desc: "Designing branded, functional outdoor spaces for offices, retail centers, institutions, and mixed-use developments.",
	},
	{
		title: "Landscape Guidelines & Policy Support",
		image: "/assets/policy-development.webp",
		desc: "Developing landscape standards, open space strategies, and regulatory documents to guide resilient and equitable development.",
	},
];

const LandscapeArchitecture = () => (
	<div className="min-h-screen bg-[#f7ede2]">
		<Helmet>
			<title>Landscape Architecture | SLM Planning & Design</title>
			<meta name="description" content="Explore SLM's landscape architecture services, blending nature and design for beautiful, sustainable outdoor spaces." />
			<meta property="og:title" content="Landscape Architecture | SLM Planning & Design" />
			<meta property="og:description" content="Explore SLM's landscape architecture services, blending nature and design for beautiful, sustainable outdoor spaces." />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="/assets/slm-logo.png" />
			<meta property="og:url" content="https://slmplanning.com/services/landscape-architecture" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Landscape Architecture | SLM Planning & Design" />
			<meta name="twitter:description" content="Explore SLM's landscape architecture services, blending nature and design for beautiful, sustainable outdoor spaces." />
			<meta name="twitter:image" content="/assets/slm-logo.png" />
		</Helmet>
		<Navigation />
		{/* Hero Section with background image and chocolate overlay */}
		<section className="relative h-[28rem] md:h-[38rem] overflow-hidden w-full flex items-center justify-center" style={{ backgroundColor: '#472c1b', backgroundImage: "url('/assets/landscape-architecture.webp')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
			<div className="absolute inset-0 z-10 pointer-events-none" style={{background: "linear-gradient(180deg, rgba(71,44,27,0.85) 60%, rgba(71,44,27,0.6) 100%)"}} />
			<div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-[#f7ede2] px-4">
				<h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
					Landscape Architecture
				</h1>
				<p className="font-inter text-xl md:text-2xl animate-fade-in">
					Designing Ecological Landscapes That Heal, Connect, and Inspire
				</p>
			</div>
			<div
				className="absolute left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
				style={{ bottom: "36px" }}
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
						style={{
							width: "6px",
							height: "12px",
							top: "8px",
							animation:
								"scroll-dot 1.4s cubic-bezier(0.45,0,0.55,1) infinite",
						}}
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
		{/* Section 1: Design Philosophy (cream bg) */}
		<section className="py-10 md:py-20 bg-[#f7ede2]">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-16 px-2 xs:px-4">
				<div className="flex-1 order-1 md:order-1">
					<h3 className="font-playfair text-2xl font-bold text-[#b8895c] mb-4">
						Nature-Led Design for Impactful Outdoor Environments
					</h3>
					<p className="font-inter text-lg text-[#472c1b] mb-4">
						At SLM Planning and Design, our landscape architecture philosophy fuses
						ecological intelligence with creative place-making. We design sustainable,
						functional, and culturally relevant landscapes that enhance biodiversity,
						promote health, and strengthen climate resilience.
					</p>
					<p className="font-inter text-lg text-[#472c1b] mb-4">
						Whether it's a city park, green infrastructure system, or a commercial
						courtyard, our solutions bring together people, nature, and design to
						crеate places that thrive for generations.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-4">
						<Button
							asChild
							className="bg-[#b8895c] hover:bg-[#a06d3b] text-white font-semibold px-6 py-3 w-full sm:w-auto shadow-md"
						>
							<a href="/quote">Start a Landscape Project</a>
						</Button>
					</div>
				</div>
				<div className="flex-1 order-2 md:order-2 flex justify-center items-center relative">
					<img
						src="/assets/landscape-architecture-1.webp"
						alt="Nature-Led Design for Impactful Outdoor Environments"
						className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-2xl border-4 border-[#b8895c] object-cover object-center bg-[#fff8f3]"
					/>
				</div>
			</div>
		</section>
		{/* Landscape Services Section - chocolate/cream cards */}
		<section className="pt-6 md:pt-10 pb-10 md:pb-20 w-full" style={{ background: "#472c1b" }}>
			<div className="max-w-7xl mx-auto mb-10 md:mb-16 py-8 md:py-16 px-2 sm:px-4 rounded-3xl bg-[#f7ede2] shadow-xl">
				<h3 className="font-playfair text-2xl sm:text-4xl font-bold mb-4 md:mb-8 text-center text-[#472c1b]">
					Our Landscape Architecture Services
				</h3>
				<p className="font-inter text-sm sm:text-base text-center text-[#b8895c] mb-4 md:mb-8">
					Design solutions tailored to your project's unique needs and vision.
				</p>
				<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
					{landscapeServices.map((service, idx) => (
						<Card
							key={service.title}
							className="group text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#fff8f3] border-2 border-[#b8895c] rounded-2xl overflow-hidden flex flex-col p-0"
							style={{ minHeight: '320px' }}
						>
							<div className="h-32 sm:h-40 w-full overflow-hidden bg-[#f7ede2] flex items-center justify-center">
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover service-img-animate group-hover:scale-105 transition-transform duration-500"
								style={{ maxWidth: '100%', height: '100%' }}
							/>
						</div>
						<div className="flex-1 flex flex-col justify-end transition-colors duration-300 group-hover:bg-[#b8895c] bg-[#fff8f3] p-4 sm:p-6">
							<CardHeader className="flex flex-col justify-end items-center px-2 pt-4 pb-2">
								<CardTitle className="font-playfair text-base sm:text-lg transition-colors duration-300 group-hover:text-white text-[#472c1b]">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="pb-2 sm:pb-4 px-2 md:px-4">
								<CardDescription className="font-inter text-[#472c1b] transition-colors duration-300 group-hover:text-white text-sm xs:text-base sm:text-lg md:text-base">
									{service.desc}
								</CardDescription>
							</CardContent>
						</div>
					</Card>
					))}
				</div>
			</div>
		</section>
		{/* Section 3: Benefits + Image */}
		<section className="py-10 md:py-20 bg-[#f7ede2]">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-0 px-2 xs:px-4">
				<div className="flex-1 order-1 md:order-1 flex justify-center items-center relative">
					<img
						src="/assets/green-infrastructure-design.webp"
						alt="Landscape Benefits"
						className="w-full max-w-md rounded-2xl shadow-lg animate-fade-in-up border-4 border-[#b8895c] bg-[#fff8f3]"
					/>
				</div>
				<div className="flex-1 order-2 md:order-2">
					<h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#b8895c] mb-4">
						Landscape Architecture Benefits
					</h3>
					<p className="font-inter text-base text-[#472c1b] mb-4">
						Sustainable landscape design delivers measurable value for communities, the environment, and future generations. Our approach enhances resilience, health, and beauty in every project.
					</p>
					<ul className="list-disc list-inside text-[#472c1b] font-inter text-base space-y-2 mb-4">
						<li>Improves public health and wellbeing</li>
						<li>Enhances stormwater and climate resilience</li>
						<li>Boosts property and neighborhood value</li>
						<li>Supports biodiversity and native ecosystems</li>
						<li>Increases access to nature and public spaces</li>
						<li>Builds cultural identity through thoughtful design</li>
					</ul>
				</div>
			</div>
		</section>
		{/* Section 4: Call to Action */}
		<section className="py-10 md:py-20 bg-[#472c1b]">
			<div className="max-w-3xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
				<h3 className="font-playfair text-4xl md:text-5xl font-bold text-[#f7ede2] mb-6">
					Ready to Create Lasting Landscapes?
				</h3>
				<p className="font-inter text-xl text-[#b8895c] mb-8">
					Let's design outdoor spaces that inspire, protect, and serve your
					community.
				</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button
						asChild
						size="lg"
						className="bg-[#b8895c] text-white hover:bg-[#a06d3b] font-semibold px-8 py-3 w-full sm:w-auto shadow-md"
					>
						<a href="/contact">Request Landscape Consultation</a>
					</Button>
					<Button
						asChild
						size="lg"
						className="bg-[#b8895c] text-white hover:bg-[#a06d3b] font-semibold px-8 py-3 w-full sm:w-auto shadow-md"
					>
						<a href="/portfolio">Explore Landscape Projects</a>
					</Button>
				</div>
			</div>
		</section>
		<Footer />
	</div>
);

export default LandscapeArchitecture;
