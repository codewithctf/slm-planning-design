import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import UrbanPlanningCarousel from "@/components/UrbanPlanningCarousel";

const urbanPlanningServices = [
	{
		title: "Master Planning",
		image: "/Assets/master_planning.webp",
		desc: "Comprehensive long-range planning for communities, districts, and regions that balance growth with sustainability.",
	},
	{
		title: "Zoning & Land Use",
		image: "/Assets/Zoning & Land Use.webp",
		desc: "Strategic land use planning and zoning code development that supports community vision and economic development.",
	},
	{
		title: "Community Engagement",
		image: "/Assets/community engagement.webp",
		desc: "Inclusive planning processes that meaningfully involve residents, stakeholders, and community organizations.",
	},
	{
		title: "Policy Development",
		image: "/Assets/Policy Development.webp",
		desc: "Research-based policy recommendations that address local challenges and promote sustainable development.",
	},
	{
		title: "Spatial Analysis & GIS Mapping",
		image: "/Assets/Spatial Analysis & GIS Mapping.webp",
		desc: "Advanced spatial data analysis and mapping to inform evidence-based planning decisions.",
	},
	{
		title: "Development Control & Planning Advisory",
		image: "/Assets/Development Control & Planning Advisory.webp",
		desc: "Guidance on development proposals, compliance, and regulatory frameworks for sustainable growth.",
	},
	{
		title: "Training, Research & Capacity Building",
		image: "/Assets/training and capacity building.webp",
		desc: "Workshops, research, and training programs to empower communities and professionals.",
	},
	{
		title: "Environmental & Sustainable Planning",
		image: "/Assets/Environmental & Sustainable Planning.webp",
		desc: "Planning solutions that prioritize environmental stewardship and long-term sustainability.",
	},
];

const UrbanPlanning = () => (
	<div className="min-h-screen bg-white">
		<Navigation />
		{/* Hero Carousel Section */}
		<section className="relative h-[28rem] md:h-[38rem] flex items-center justify-center overflow-hidden pt-24 md:pt-0 px-2 sm:px-4">
			{/* Gradient overlay for text readability */}
			<div className="absolute inset-0 z-10 pointer-events-none" style={{background: "linear-gradient(180deg, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)"}} />
			<UrbanPlanningCarousel heightClass="h-[38rem]" />
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
        .urban-img-animate {
          animation: urbanImgPop 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes urbanImgPop {
          0% { transform: scale(0.92) rotate(-2deg); opacity: 0; }
          60% { transform: scale(1.04) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>
			{/* Hero Text Overlay */}
			<div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
				<h1 className="font-playfair text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg mb-4">
					Urban Planning
				</h1>
				<p className="font-inter text-base xs:text-lg sm:text-xl md:text-2xl text-white text-center drop-shadow-md max-w-xs xs:max-w-md sm:max-w-2xl">
					Strategic planning solutions that shape sustainable, livable communities for current and future generations.
				</p>
			</div>
		</section>
		{/* Comprehensive Planning Section (white bg) */}
		<section className="py-10 md:py-20 bg-white">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-16 px-2 xs:px-4">
				<div className="flex-1">
					<h3 className="font-playfair text-xl sm:text-2xl font-bold text-slm-green-700 mb-4">
						Comprehensive Planning for Thriving Communities:
					</h3>
					<p className="font-inter text-base sm:text-lg text-gray-700 mb-4">
						Our urban planning services help communities navigate complex growth
						challenges while preserving character, promoting sustainability, and
						enhancing quality of life. We work with municipalities, developers, and community organizations to create plans that balance economic development with environmental stewardship.
					</p>
					<p className="font-inter text-base sm:text-lg text-gray-700 mb-4">
						From small-scale neighborhood plans to comprehensive regional strategies, our team brings deep expertise in land use planning, transportation, housing, and economic development to every project.
					</p>
					<Button asChild className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 mt-2 w-full sm:w-auto text-sm sm:text-base">
						<a href="/quote">Start Planning Project</a>
					</Button>
				</div>
				<div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0">
					<img src="/Assets/urban planning (2).webp" alt="Urban Planning Team" className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-2xl urban-img-animate border-4 border-[#FCEFEF]" />
				</div>
			</div>
		</section>
		{/* Urban Planning Services Section - now matches 3D Rendering styling */}
		<section className="pt-6 md:pt-10 pb-10 md:pb-20 w-full" style={{ background: "#F0F8F4" }}>
			<div className="max-w-7xl mx-auto mb-10 md:mb-16 py-8 md:py-16 px-2 sm:px-4 rounded-3xl">
				<h3 className="font-playfair text-2xl sm:text-4xl font-bold mb-4 md:mb-8 text-center text-[#2B7151]">
					Our Urban Planning Services
				</h3>
				<p className="font-inter text-sm sm:text-base text-center text-slm-green-800 mb-4 md:mb-8">
					Comprehensive planning solutions tailored to your community's unique needs and vision.
				</p>
				<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
					{urbanPlanningServices.map((service, idx) => (
						<Card
							key={service.title}
							className="group text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-[#b6e2c7] rounded-2xl overflow-hidden flex flex-col p-0"
							style={{ minHeight: '320px' }}
						>
							<div className="h-32 sm:h-40 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover service-img-animate group-hover:scale-105 transition-transform duration-500"
									style={{ maxWidth: '100%', height: '100%' }}
								/>
							</div>
							<div className="flex-1 flex flex-col justify-end transition-colors duration-300 group-hover:bg-[#2B7151] bg-white p-4 sm:p-6">
								<CardHeader className="flex flex-col justify-end items-center px-2 pt-4 pb-2">
									<CardTitle className="font-playfair text-base sm:text-lg transition-colors duration-300 group-hover:text-white text-[#2B7151]">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pb-2 sm:pb-4 px-2 md:px-4">
									<CardDescription className="font-inter text-gray-700 transition-colors duration-300 group-hover:text-white text-sm xs:text-base sm:text-lg md:text-base">
										{service.desc}
									</CardDescription>
								</CardContent>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
		{/* Section 4: Benefits + Image */}
		<section className="py-10 md:py-20 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-0 px-2 xs:px-4">
				<div className="flex-1 order-2 md:order-1 flex justify-center items-center relative mt-8 md:mt-0">
					<img src="/Assets/urban planning (3).webp" alt="Urban Planning Benefits" className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-lg animate-fade-in-up" />
				</div>
				<div className="flex-1 order-1 md:order-2">
					<h3 className="font-playfair text-xl sm:text-3xl md:text-4xl font-bold text-slm-green-700 mb-4">Benefits of Professional Planning</h3>
					<p className="font-inter text-base sm:text-lg text-gray-700 mb-4">Strategic urban planning delivers lasting value for communities, creating positive economic, social, and environmental outcomes.</p>
					<ul className="list-disc list-inside text-gray-700 font-inter text-xs sm:text-base space-y-2 mb-4">
						<li>Increased property values through strategic planning</li>
						<li>Improved quality of life for residents</li>
						<li>Enhanced economic development opportunities</li>
						<li>Better infrastructure and transportation systems</li>
						<li>Environmental sustainability and resilience</li>
						<li>Stronger community identity and cohesion</li>
					</ul>
				</div>
			</div>
		</section>
		{/* Section 6: Call to Action */}
		<section className="py-10 md:py-20 bg-slm-green-600">
			<div className="max-w-3xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
				<h3 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Ready to Plan Your Community's Future?</h3>
				<p className="font-inter text-base sm:text-xl text-slm-green-100 mb-6 md:mb-8">Let's work together to create a comprehensive plan that guides sustainable growth and enhances quality of life.</p>
				<div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
					<Button asChild size="lg" className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto text-sm md:text-base">
						<a href="/contact">Request Planning Consultation</a>
					</Button>
					<Button asChild size="lg" variant="outline" className="border-white text-white font-semibold px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto text-sm md:text-base">
						<a href="/portfolio">View Planning Projects</a>
					</Button>
				</div>
			</div>
		</section>
		<Footer />
	</div>
);

export default UrbanPlanning;
