import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import UrbanPlanningCarousel from "@/components/UrbanPlanningCarousel";

const urbanPlanningServices = [
	{
		title: "Master Planning",
		image: "/Assets/master_planning.jpg",
		desc: "Comprehensive long-range planning for communities, districts, and regions that balance growth with sustainability.",
	},
	{
		title: "Zoning & Land Use",
		image: "/Assets/Zoning & Land Use.jpg",
		desc: "Strategic land use planning and zoning code development that supports community vision and economic development.",
	},
	{
		title: "Community Engagement",
		image: "/Assets/community engagement.png",
		desc: "Inclusive planning processes that meaningfully involve residents, stakeholders, and community organizations.",
	},
	{
		title: "Policy Development",
		image: "/Assets/Policy Development.png",
		desc: "Research-based policy recommendations that address local challenges and promote sustainable development.",
	},
	{
		title: "Spatial Analysis & GIS Mapping",
		image: "/Assets/Spatial Analysis & GIS Mapping.jpg",
		desc: "Advanced spatial data analysis and mapping to inform evidence-based planning decisions.",
	},
	{
		title: "Development Control & Planning Advisory",
		image: "/Assets/Development Control & Planning Advisory.png",
		desc: "Guidance on development proposals, compliance, and regulatory frameworks for sustainable growth.",
	},
	{
		title: "Training, Research & Capacity Building",
		image: "/Assets/training and capacity building.jpg",
		desc: "Workshops, research, and training programs to empower communities and professionals.",
	},
	{
		title: "Environmental & Sustainable Planning",
		image: "/Assets/Environmental & Sustainable Planning.jpg",
		desc: "Planning solutions that prioritize environmental stewardship and long-term sustainability.",
	},
];

const UrbanPlanning = () => (
	<div className="min-h-screen bg-white">
		<Navigation />
		{/* Hero Carousel Section */}
		<section className="relative h-[38rem] flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-2 sm:px-4">
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
				<h1 className="font-playfair text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg mb-4">
					Urban Planning
				</h1>
				<p className="font-inter text-xl md:text-2xl text-white text-center drop-shadow-md max-w-2xl">
					Strategic planning solutions that shape sustainable, livable communities for current and future generations.
				</p>
			</div>
		</section>
		{/* Comprehensive Planning Section (white bg) */}
		<section className="py-20 bg-white">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
				<div className="flex-1">
					<h3 className="font-playfair text-2xl font-bold text-slm-green-700 mb-4">
						Comprehensive Planning for Thriving Communities:
					</h3>
					<p className="font-inter text-lg text-gray-700 mb-4">
						Our urban planning services help communities navigate complex growth
						challenges while preserving character, promoting sustainability, and
						enhancing quality of life. We work with municipalities, developers, and community organizations to create plans that balance economic development with environmental stewardship.
					</p>
					<p className="font-inter text-lg text-gray-700 mb-4">
						From small-scale neighborhood plans to comprehensive regional strategies, our team brings deep expertise in land use planning, transportation, housing, and economic development to every project.
					</p>
					<Button asChild className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-6 py-3 mt-2">
						<a href="/quote">Start Planning Project</a>
					</Button>
				</div>
				<div className="flex-1 flex justify-center items-center relative">
					<img src="/Assets/urban planning (2).jpg" alt="Urban Planning Team" className="w-full max-w-md rounded-2xl shadow-2xl urban-img-animate border-4 border-[#FCEFEF]" />
				</div>
			</div>
		</section>
		{/* Urban Planning Services Section - full width soft pink bg */}
		<section
			className="pt-10 pb-20 w-full"
			style={{ background: "#FCEFEF" }}
		>
			<div className="max-w-7xl mx-auto mb-16 py-16 px-2 sm:px-4 rounded-3xl">
				<h3 className="font-playfair text-4xl font-bold mb-8 text-center text-[#712B29]">
					Our Urban Planning Services
				</h3>
				<p className="font-inter text-base text-center text-slm-green-800 mb-8">
					Comprehensive planning solutions tailored to your community's unique needs and vision.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{urbanPlanningServices.map((service, idx) => (
						<Card
							key={service.title}
							className="group text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-[#f7d6d6] rounded-2xl overflow-hidden flex flex-col p-0"
							style={{ minHeight: '370px' }}
						>
							<div className="h-40 w-full overflow-hidden">
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover service-img-animate group-hover:scale-105 transition-transform duration-500"
									style={{ maxWidth: '100%', height: '100%' }}
								/>
							</div>
							<div className="flex-1 flex flex-col justify-end transition-colors duration-300 group-hover:bg-[#712B29] bg-white">
								<CardHeader className="flex flex-col justify-end items-center px-2 pt-4 pb-2">
									<CardTitle className="font-playfair text-lg transition-colors duration-300 group-hover:text-white text-[#712B29]">
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
		{/* Section 4: Benefits + Image */}
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-0">
				<div className="flex-1 order-2 md:order-1 flex justify-center items-center relative">
					<img src="/Assets/urban planning (3).jpg" alt="Urban Planning Benefits" className="w-full max-w-md rounded-2xl shadow-lg animate-fade-in-up" />
				</div>
				<div className="flex-1 order-1 md:order-2">
					<h3 className="font-playfair text-3xl md:text-4xl font-bold text-slm-green-700 mb-4">Benefits of Professional Planning</h3>
					<p className="font-inter text-lg text-gray-700 mb-4">Strategic urban planning delivers lasting value for communities, creating positive economic, social, and environmental outcomes.</p>
					<ul className="list-disc list-inside text-gray-700 font-inter text-base space-y-2 mb-4">
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
		<section className="py-20 bg-slm-green-600">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Ready to Plan Your Community's Future?</h3>
				<p className="font-inter text-xl text-slm-green-100 mb-8">Let's work together to create a comprehensive plan that guides sustainable growth and enhances quality of life.</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button asChild size="lg" className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-8 py-3 w-full sm:w-auto">
						<a href="/contact">Request Planning Consultation</a>
					</Button>
					<Button asChild size="lg" variant="outline" className="border-white text-white font-semibold px-8 py-3 w-full sm:w-auto">
						<a href="/portfolio">View Planning Projects</a>
					</Button>
				</div>
			</div>
		</section>
		<Footer />
	</div>
);

export default UrbanPlanning;
