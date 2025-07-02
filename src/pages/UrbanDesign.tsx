import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import UrbanDesignCarousel from "@/components/UrbanDesignCarousel";

const urbanDesignServices = [
	{
		title: "Public Realm Design",
		image: "/Assets/Public Realm-Design.jpg",
		desc: "Designing civic spaces, streetscapes, plazas, and parks that are accessible, inclusive, and visually appealing.",
	},
	{
		title: "Urban Streetscapes",
		image: "/Assets/Urban Streetscapes.jpg",
		desc: "Pedestrian-first street designs that integrate green infrastructure, mobility, safety, and placemaking principles.",
	},
	{
		title: "Mixed-Use & District Design",
		image: "/Assets/Mixed-Use & District Design.jpg",
		desc: "Master-planning for neighborhoods and town centers with integrated uses, active frontages, and strong identities.",
	},
	{
		title: "Wayfinding & Urban Experience",
		image: "/Assets/Wayfinding & Urban Experience.jpg",
		desc: "Crafting legible, intuitive environments through spatial logic, signage, edges, and orientation.",
	},
	{
		title: "Green Infrastructure Integration",
		image: "/Assets/Green Infrastructure Integration.jpg",
		desc: "Seamless integration of nature into urban settings for stormwater, climate resilience, and biodiversity.",
	},
	{
		title: "Transit-Oriented Development (TOD)",
		image: "/Assets/Transit-Oriented Development.jpg",
		desc: "Design frameworks that prioritize walkability, density, and mixed-use around mobility hubs.",
	},
	{
		title: "Urban Design Guidelines & Toolkits",
		image: "/Assets/Urban Design Guidelines & Toolkits.jpg",
		desc: "Creating form-based codes and visual design manuals to guide consistent and adaptive urban development.",
	},
	{
		title: "Design Research & Prototyping",
		image: "/Assets/Design Research & Prototyping.jpg",
		desc: "Using behavioral insights, public prototyping, and data to refine spaces that work for real people.",
	},
];

const UrbanDesign = () => (
	<div className="min-h-screen bg-white">
		<Navigation />
		{/* Hero Carousel Section */}
		<section className="relative h-[38rem] flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-2 sm:px-4">
			{/* Headline and Description Text (centered, above carousel) */}
			<div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
				<h1 className="font-playfair text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg mb-4">
					Urban Design
				</h1>
				<p className="font-inter text-xl md:text-2xl text-white text-center drop-shadow-md max-w-2xl">
					Crafting Human-Centered Urban Spaces That Inspire, Connect, and Thrive.
				</p>
			</div>
			{/* Home page style overlay for readability */}
			<div
				className="absolute inset-0 z-10 pointer-events-none"
				style={{
					background:
						"linear-gradient(180deg, rgba(30, 41, 59, 0.55) 0%, rgba(30, 41, 59, 0.35) 60%, rgba(30, 41, 59, 0.15) 100%)",
				}}
			/>
			{/* Hero Carousel Section */}
			<UrbanDesignCarousel heightClass="h-[38rem]" />
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
		</section>
		{/* Section 1: Design Philosophy */}
		<section className="py-20 bg-white">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
				<div className="flex-1 order-1 md:order-1">
					<h3 className="font-playfair text-2xl font-bold text-slm-green-700 mb-4">
						Designing Livable Environments for All:
					</h3>
					<p className="font-inter text-lg text-gray-700 mb-4">
						At SLM Planning and Design, we believe urban spaces should foster
						connection, identity, and sustainability. Our Urban Design services
						bridge architecture, planning, and landscape, translating bold ideas
						into functional, inclusive public spaces. We shape walkable
						neighborhoods, vibrant town centers, and enduring streetscapes that
						reflect the character and aspirations of local communities.
					</p>
					<p className="font-inter text-lg text-gray-700 mb-4">
						Whether revitalizing existing districts or envisioning new mixed-use
						developments, we embed equity, innovation, and nature into every line
						and layer of design.
					</p>
					<Button
						asChild
						className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-6 py-3 mt-2"
					>
						<a href="/quote">Start a Design Project</a>
					</Button>
				</div>
				<div className="flex-1 order-2 md:order-2 flex justify-center items-center relative">
					<img
						src="/Assets/Urban design.jpg"
						alt="Urban Design"
						className="w-full max-w-md rounded-2xl shadow-2xl urban-img-animate border-4 border-[#FCEFEF]"
					/>
				</div>
			</div>
		</section>
		{/* Urban Design Services Section - full width soft pink bg */}
		<section
			className="pt-10 pb-20 w-full"
			style={{ background: "#FCEFEF" }}
		>
			<div className="max-w-7xl mx-auto mb-16 py-16 px-2 sm:px-4 rounded-3xl">
				<h3 className="font-playfair text-4xl font-bold mb-8 text-center text-[#712B29]">
					Our Urban Design Services
				</h3>
				<p className="font-inter text-base text-center text-slm-green-800 mb-8">
					Place-led design strategies that shape beautiful, functional, and socially responsive environments.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{urbanDesignServices.map((service, idx) => (
						<Card
							key={service.title}
							className="group text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-[#f7d6d6] rounded-2xl overflow-hidden flex flex-col p-0"
							style={{ minHeight: '370px' }}
						>
							<div className="h-40 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
								{/* Placeholder for image */}
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
		{/* Section 3: Benefits + Image */}
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-0">
				<div className="flex-1 order-1 md:order-1 flex justify-center items-center relative">
					<img
						src="/Assets/urban design (3).jpg"
						alt="Urban Design Benefits"
						className="w-full max-w-md rounded-2xl shadow-lg animate-fade-in-up"
					/>
				</div>
				<div className="flex-1 order-2 md:order-2">
					<h3 className="font-playfair text-3xl md:text-4xl font-bold text-slm-green-700 mb-4">
						Urban Design Benefits
					</h3>
					<p className="font-inter text-lg text-gray-700 mb-4">
						Discover how expert urban design can transform your community creating vibrant, boosting property values, and enhancing quality of life for all. Our people-centered approach delivers sustainable, beautiful, and inclusive spaces that drive engagement and long-term value.
					</p>
					<ul className="list-disc list-inside text-gray-700 font-inter text-base space-y-2 mb-4">
						<li>More vibrant, walkable, and livable communities</li>
						<li>Boosted public life and neighborhood identity</li>
						<li>Improved climate resilience and green coverage</li>
						<li>Higher land and property values</li>
						<li>Enhanced accessibility and safety</li>
						<li>Stronger social equity and inclusivity</li>
					</ul>
				</div>
			</div>
		</section>
		{/* Section 4: Call to Action */}
		<section className="py-20 bg-slm-green-600">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
					Ready to Reimagine Urban Spaces?
				</h3>
				<p className="font-inter text-xl text-slm-green-100 mb-8">
					Let’s co-create environments that reflect your community’s values and
					your vision for the future.
				</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button
						asChild
						size="lg"
						className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-8 py-3 w-full sm:w-auto"
					>
						<a href="/contact">Request Urban Design Consultation</a>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="border-white text-white font-semibold px-8 py-3 w-full sm:w-auto"
					>
						<a href="/portfolio">View Our Urban Design Projects</a>
					</Button>
				</div>
			</div>
		</section>
		<Footer />
	</div>
);

export default UrbanDesign;
