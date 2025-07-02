import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import LandscapeArchitectureCarousel from "@/components/LandscapeArchitectureCarousel";

const landscapeServices = [
	{
		title: "Park & Open Space Design",
		image: "/Assets/Park & Open Space Design.jpg",
		desc: "Designing inclusive public parks, urban plazas, and recreational green spaces that enhance livability and wellbeing.",
	},
	{
		title: "Ecological Restoration",
		image: "/Assets/Ecological Restoration.jpg",
		desc: "Rehabilitating degraded landscapes by reintroducing native ecosystems and improving natural hydrology and habitat function.",
	},
	{
		title: "Green Infrastructure Design",
		image: "/Assets/Green Infrastructure Design.jpg",
		desc: "Implementing nature-based solutions like bioswales, green roofs, and permeable surfaces to manage stormwater and reduce urban heat.",
	},
	{
		title: "Native Plant Design",
		image: "/Assets/Native Plant Design.jpg",
		desc: "Using indigenous plant palettes to support local ecology, reduce maintenance costs, and enhance visual identity.",
	},
	{
		title: "Corporate & Commercial Landscaping",
		image: "/Assets/Corporate & Commercial Landscaping.jpg",
		desc: "Designing branded, functional outdoor spaces for offices, retail centers, institutions, and mixed-use developments.",
	},
	{
		title: "Landscape Guidelines & Policy Support",
		image: "/Assets/Policy Development.png",
		desc: "Developing landscape standards, open space strategies, and regulatory documents to guide resilient and equitable development.",
	},
];

const LandscapeArchitecture = () => (
	<div className="min-h-screen bg-white">
		<Navigation />
		{/* Hero Carousel Section */}
		<section className="relative h-[38rem] flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-2 sm:px-4">
			{/* Gradient overlay for text readability */}
			<div
				className="absolute inset-0 z-10 pointer-events-none"
				style={{
					background:
						"linear-gradient(180deg, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)",
				}}
			/>
			{/* LandscapeArchitectureCarousel */}
			<div className="w-full h-full flex items-center justify-center z-0">
				<LandscapeArchitectureCarousel />
			</div>
			{/* Animated Scroll Indicator */}
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
		{/* Section 1: Design Philosophy */}
		<section className="py-20 bg-white">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
				<div className="flex-1 order-1 md:order-1">
					<h3 className="font-playfair text-2xl font-bold text-slm-green-700 mb-4">
						Nature-Led Design for Impactful Outdoor Environments
					</h3>
					<p className="font-inter text-lg text-gray-700 mb-4">
						At SLM Planning and Design, our landscape architecture philosophy fuses
						ecological intelligence with creative place-making. We design sustainable,
						functional, and culturally relevant landscapes that enhance biodiversity,
						promote health, and strengthen climate resilience.
					</p>
					<p className="font-inter text-lg text-gray-700 mb-4">
						Whether it's a city park, green infrastructure system, or a commercial
						courtyard, our solutions bring together people, nature, and design to
						crеate places that thrive for generations.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-4">
						<Button
							asChild
							className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-6 py-3 w-full sm:w-auto"
						>
							<a href="/quote">Start a Landscape Project</a>
						</Button>
					</div>
				</div>
				<div className="flex-1 order-2 md:order-2 flex justify-center items-center relative">
					<img
						src="/Assets/Landscape Architecture (1).jpg"
						alt="Nature-Led Design for Impactful Outdoor Environments"
						className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-2xl border-4 border-[#FCEFEF] object-cover object-center"
					/>
				</div>
			</div>
		</section>
		{/* Landscape Architecture Services Section - full width soft green bg */}
		<section
			className="pt-10 pb-20 w-full"
			style={{ background: "#F0F8F4" }}
		>
			<div className="max-w-7xl mx-auto mb-16 py-16 px-2 sm:px-4 rounded-3xl">
				<h3 className="font-playfair text-4xl font-bold mb-8 text-center text-[#2B7151]">
					Our Landscape Architecture Services
				</h3>
				<p className="font-inter text-base text-center text-slm-green-800 mb-8">
					Thoughtfully crafted to bring harmony between nature, people, and place.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{landscapeServices.map((service, idx) => (
						<Card
							key={service.title}
							className="group text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-[#b6e2c7] rounded-2xl overflow-hidden flex flex-col p-0"
							style={{ minHeight: '370px' }}
						>
							<div className="h-40 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
								{service.image ? (
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover service-img-animate group-hover:scale-105 transition-transform duration-500"
										style={{ maxWidth: '100%', height: '100%' }}
									/>
								) : (
									<span className="text-gray-400 font-inter">
										Image coming soon
									</span>
								)}
							</div>
							<div className="flex-1 flex flex-col justify-end transition-colors duration-300 group-hover:bg-[#2B7151] bg-white">
								<CardHeader className="flex flex-col justify-end items-center px-2 pt-4 pb-2">
									<CardTitle className="font-playfair text-lg transition-colors duration-300 group-hover:text-white text-[#2B7151]">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pb-4 px-2 md:px-4">
									<CardDescription className="font-inter text-gray-700 transition-colors duration-300 group-hover:text-white text-base">
										{service.desc}
									</CardDescription>
								</CardContent>
							</div>
						</Card>
					))}
				</div>
			</div>
			<style>{`
        .service-img-animate {
          animation: serviceImgPop 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes serviceImgPop {
          0% { transform: scale(0.92) rotate(-2deg); opacity: 0; }
          60% { transform: scale(1.04) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>
		</section>
		{/* Section 3: Benefits + Image */}
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-0">
				<div className="flex-1 order-1 md:order-1 flex justify-center items-center relative">
					<img
						src="/Assets/Green Infrastructure Design.jpg"
						alt="Landscape Benefits"
						className="w-full max-w-md rounded-2xl shadow-lg animate-fade-in-up"
					/>
				</div>
				<div className="flex-1 order-2 md:order-2">
					<h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#2B7151] mb-4">
						Landscape Architecture Benefits
					</h3>
					<p className="font-inter text-base text-gray-700 mb-4">
						Sustainable landscape design delivers measurable value for communities, the environment, and future generations. Our approach enhances resilience, health, and beauty in every project.
					</p>
					<ul className="list-disc list-inside text-gray-700 font-inter text-base space-y-2 mb-4">
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
		<section className="py-20 bg-slm-green-600">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
					Ready to Create Lasting Landscapes?
				</h3>
				<p className="font-inter text-xl text-slm-green-100 mb-8">
					Let’s design outdoor spaces that inspire, protect, and serve your
					community.
				</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button
						asChild
						size="lg"
						className="bg-white text-[#2B7151] hover:bg-green-50 font-semibold px-8 py-3 w-full sm:w-auto"
					>
						<a href="/contact">Request Landscape Consultation</a>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="border-white text-white font-semibold px-8 py-3 w-full sm:w-auto"
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
