// Import navigation bar and footer components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Import UI card components for service cards
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
// Import custom carousel for 3D rendering images
import ThreeDRenderingCarousel from "../components/ThreeDRenderingCarousel";
import { Helmet } from 'react-helmet-async';

// List of 3D rendering services to display on the page
const renderingServices = [
	{
		title: "Photorealistic 3D Renders",
		image: "/assets/3d-render-3.webp",
		desc: "Stunning, detail-rich visualizations of buildings, landscapes, and spaces that showcase lighting, texture, and realism.",
	},
	{
		title: "Aerial Views & Masterplan Renderings",
		image: "/assets/aerial-views-masterplan-renderings.webp",
		desc: "Large-scale overviews that highlight context, scale, and layout for urban plans, campuses, or mixed-use developments.",
	},
	{
		title: "Concept Sketch Renders",
		image: "/assets/concept-sketch-renders.webp",
		desc: "Artistic, styled renderings that bring early design ideas to life while maintaining flexibility and creative intent.",
	},
	{
		title: "3D Animations & Walkthroughs",
		video: "https://www.youtube.com/embed/xnxuo1YZUhc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=xnxuo1YZUhc&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&enablejsapi=1&widget_referrer=1&color=white&origin=about:blank",
		desc: "Dynamic video animations and virtual tours that engage audiences and present spatial experiences in motion.",
	},
	{
		title: "Interactive Design Presentations",
		image: "/assets/interactive-design-presentations.webp",
		desc: "Custom-rendered assets for slide decks, investor pitches, public exhibitions, and community engagements.",
	},
	{
		title: "Augmented & Virtual Reality Ready Assets",
		image: "/assets/augmented-virtual-reality-ready-assets.webp",
		desc: "Future-proof renderings compatible with AR/VR platforms for immersive presentations and digital co-design sessions.",
	},
];

const ThreeDRendering = () => (
	<div className="min-h-screen bg-white">
		<Helmet>
        <title>3D Rendering | SLM Planning & Design</title>
        <meta name="description" content="Experience photorealistic 3D rendering and visualization services from SLM Planning & Design for your next project." />
        <meta property="og:title" content="3D Rendering | SLM Planning & Design" />
        <meta property="og:description" content="Experience photorealistic 3D rendering and visualization services from SLM Planning & Design for your next project." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/slm-logo.png" />
        <meta property="og:url" content="https://slmplanning.com/services/3d-rendering" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Rendering | SLM Planning & Design" />
        <meta name="twitter:description" content="Experience photorealistic 3D rendering and visualization services from SLM Planning & Design for your next project." />
        <meta name="twitter:image" content="/assets/slm-logo.png" />
      </Helmet>
		<Navigation />
		{/* Hero Carousel Section */}
		<section className="relative h-[28rem] md:h-[38rem] overflow-hidden w-full" style={{ backgroundColor: '#000' }}>
			<ThreeDRenderingCarousel />
			<div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
				<h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
					3D Rendering & Visualization
				</h1>
				<p className="font-inter text-xl md:text-2xl animate-fade-in">
					Bringing Ideas to Life with Precision, Emotion, and Clarity
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
		{/* Section 1: Visualize Before You Build */}
		<section className="py-20 bg-white">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16 px-2 sm:px-4">
				<div className="flex-1 order-1 md:order-1">
					<h3 className="font-playfair text-2xl font-bold text-slm-green-700 mb-4">
						Visualize Before You Build
					</h3>
					<p className="font-inter text-lg text-gray-700 mb-4">
						At SLM Planning and Design, our 3D rendering and visualization
						services help clients and stakeholders clearly understand design
						concepts before construction begins. We transform technical plans
						into compelling visuals that communicate value, inspire confidence,
						and accelerate decision-making.
					</p>
					<p className="font-inter text-lg text-gray-700 mb-4">
						From photorealistic renders to interactive walkthroughs, our
						visualizations bridge imagination and reality — making your vision
						tangible, immersive, and powerful.
					</p>
					<Button
						asChild
						className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-6 py-3 w-full sm:w-auto mt-4"
					>
						<a href="/quote">Request a 3D Visualization</a>
					</Button>
				</div>
				<div className="flex-1 order-2 md:order-2 flex justify-center items-center relative">
					<img
						src="/assets/3d-render.webp"
						alt="3D Rendering"
						className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-2xl border-4 border-[#FCEFEF] object-cover object-center"
					/>
				</div>
			</div>
		</section>
		{/* 3D Rendering Services Section */}
		<section className="pt-6 md:pt-10 pb-10 md:pb-20 w-full" style={{ background: "#F0F8F4" }}>
			<div className="max-w-7xl mx-auto mb-10 md:mb-16 py-8 md:py-16 px-2 sm:px-4 rounded-3xl">
				<h3 className="font-playfair text-2xl sm:text-4xl font-bold mb-4 md:mb-8 text-center text-[#2B7151]">
					Our 3D Rendering Services
				</h3>
				<p className="font-inter text-sm sm:text-base text-center text-slm-green-800 mb-4 md:mb-8">
					Visual solutions tailored to your project's unique needs and vision.
				</p>
				<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
					{renderingServices.map((service, idx) => (
						<Card
							key={service.title}
							className="group text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-[#b6e2c7] rounded-2xl overflow-hidden flex flex-col p-0"
							style={{ minHeight: '320px' }}
						>
							<div className="h-32 sm:h-40 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
								{service.image && (
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover service-img-animate group-hover:scale-105 transition-transform duration-500"
										style={{ maxWidth: '100%', height: '100%' }}
									/>
								)}
								{service.video && (
									<iframe
										title={service.title}
										src={service.video}
										className="w-full h-full rounded-xl"
										allow="autoplay; encrypted-media"
										allowFullScreen
									/>
								)}
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
		{/* Section 3: Why Visualization Matters */}
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-0 px-2 sm:px-4">
				<div className="flex-1 order-1 md:order-1 flex justify-center items-center relative">
					<img
						src="/assets/aerial-views-masterplan-renderings.webp"
						alt="Why Visualization Matters"
						className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-lg animate-fade-in-up object-cover object-center"
					/>
				</div>
				<div className="flex-1 order-2 md:order-2">
					<h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#2B7151] mb-4">
						Why Visualization Matters
					</h3>
					<p className="font-inter text-base text-gray-700 mb-4">
						Visualization transforms complex ideas into clear, persuasive stories.
						It accelerates approvals, builds trust, and helps clients and
						communities see the true value of your project before it's built.
					</p>
					<ul className="list-disc list-inside text-gray-700 font-inter text-base space-y-2 mb-4">
						<li>Communicate complex designs with ease</li>
						<li>Speed up approval and investment processes</li>
						<li>Enhance client and stakeholder engagement</li>
						<li>Reduce design errors through early detection</li>
						<li>Improve public participation in planning</li>
						<li>Build excitement and trust before ground is broken</li>
					</ul>
				</div>
			</div>
		</section>
		{/* Section 4: Call to Action */}
		<section className="py-20 bg-slm-green-600">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
					Let's Visualize Your Next Project
				</h3>
				<p className="font-inter text-xl text-slm-green-100 mb-8">
					Showcase your vision with precision-crafted visuals that resonate with
					decision-makers and the public alike.
				</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button
						asChild
						size="lg"
						className="bg-white text-[#2B7151] hover:bg-green-50 font-semibold px-8 py-3 w-full sm:w-auto"
					>
						<a href="/contact">Book a Visualization Session</a>
					</Button>
					<Button
						asChild
						size="lg"
						className="bg-white text-[#2B7151] hover:bg-green-50 font-semibold px-8 py-3 w-full sm:w-auto"
					>
						<a href="/portfolio">View Our Render Portfolio</a>
					</Button>
				</div>
			</div>
		</section>
		<Footer />
	</div>
);

export default ThreeDRendering;
