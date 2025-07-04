// Import navigation bar and footer components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Import UI card components for service cards
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
// Import custom carousel for urban design images
import UrbanDesignCarousel from "@/components/UrbanDesignCarousel";
import { Helmet } from 'react-helmet-async';

// List of urban design services to display on the page
const urbanDesignServices = [
	{
		title: "Public Realm Design",
		image: "/Assets/Public Realm-Design.webp",
		desc: "Designing civic spaces, streetscapes, plazas, and parks that are accessible, inclusive, and visually appealing.",
	},
	{
		title: "Urban Streetscapes",
		image: "/Assets/Urban Streetscapes.webp",
		desc: "Pedestrian-first street designs that integrate green infrastructure, mobility, safety, and placemaking principles.",
	},
	{
		title: "Mixed-Use & District Design",
		image: "/Assets/Mixed-Use & District Design.webp",
		desc: "Master-planning for neighborhoods and town centers with integrated uses, active frontages, and strong identities.",
	},
	{
		title: "Wayfinding & Urban Experience",
		image: "/Assets/Wayfinding & Urban Experience.webp",
		desc: "Crafting legible, intuitive environments through spatial logic, signage, edges, and orientation.",
	},
	{
		title: "Green Infrastructure Integration",
		image: "/Assets/Green Infrastructure Integration.webp",
		desc: "Seamless integration of nature into urban settings for stormwater, climate resilience, and biodiversity.",
	},
	{
		title: "Transit-Oriented Development (TOD)",
		image: "/Assets/Transit-Oriented Development.webp",
		desc: "Design frameworks that prioritize walkability, density, and mixed-use around mobility hubs.",
	},
	{
		title: "Urban Design Guidelines & Toolkits",
		image: "/Assets/Urban Design Guidelines & Toolkits.webp",
		desc: "Creating form-based codes and visual design manuals to guide consistent and adaptive urban development.",
	},
	{
		title: "Design Research & Prototyping",
		image: "/Assets/Design Research & Prototyping.webp",
		desc: "Using behavioral insights, public prototyping, and data to refine spaces that work for real people.",
	},
];

const UrbanDesign = () => (
	<div className="min-h-screen bg-white">
		<Helmet>
        <title>Urban Design | SLM Planning & Design</title>
        <meta name="description" content="See how SLM Planning & Design creates vibrant, sustainable urban environments through innovative urban design services." />
        <meta property="og:title" content="Urban Design | SLM Planning & Design" />
        <meta property="og:description" content="See how SLM Planning & Design creates vibrant, sustainable urban environments through innovative urban design services." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Assets/slm-logo.png" />
        <meta property="og:url" content="https://slmplanning.com/services/urban-design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urban Design | SLM Planning & Design" />
        <meta name="twitter:description" content="See how SLM Planning & Design creates vibrant, sustainable urban environments through innovative urban design services." />
        <meta name="twitter:image" content="/Assets/slm-logo.png" />
      </Helmet>
		<Navigation />
		{/* Hero Carousel Section */}
		<section className="relative h-[28rem] md:h-[38rem] flex items-center justify-center overflow-hidden pt-24 md:pt-0 w-full" style={{ backgroundColor: '#000' }}>
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
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16 px-4 sm:px-6">
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
						src="/Assets/Urban design.webp"
						alt="Urban Design"
						className="w-full max-w-md rounded-2xl shadow-2xl urban-img-animate border-4 border-[#FCEFEF]"
					/>
				</div>
			</div>
		</section>
		{/* Urban Design Services Section - now matches 3D Rendering styling */}
		<section className="pt-6 md:pt-10 pb-10 md:pb-20 w-full" style={{ background: "#F0F8F4" }}>
			<div className="max-w-7xl mx-auto mb-10 md:mb-16 py-8 md:py-16 px-2 sm:px-4 rounded-3xl">
				<h3 className="font-playfair text-2xl sm:text-4xl font-bold mb-4 md:mb-8 text-center text-[#2B7151]">
					Our Urban Design Services
				</h3>
				<p className="font-inter text-sm sm:text-base text-center text-slm-green-800 mb-4 md:mb-8">
					Design solutions tailored to your city's unique needs and vision.
				</p>
				<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
					{urbanDesignServices.map((service, idx) => (
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
		{/* Section 3: Benefits + Image */}
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-0 px-4 sm:px-6">
				<div className="flex-1 order-1 md:order-1 flex justify-center items-center relative">
					<img
						src="/Assets/urban design (3).webp"
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
					Let's co-create environments that reflect your community's values and
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
						className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-8 py-3 w-full sm:w-auto"
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
