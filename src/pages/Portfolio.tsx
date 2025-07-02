import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { sanityClient } from "@/lib/sanityClient";

const HARDCODED_CATEGORIES = [
  "All",
  "Urban Design",
  "Urban Planning",
  "3D Rendering",
  "Landscape Architecture"
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const query = `*[_type == "project"] | order(year desc){
        _id,
        title,
        description,
        categories[]-> { title },
        mainImage,
        year,
        tags,
        location,
      }`;
      try {
        const data = await sanityClient.fetch(query);
        setProjects(data);
      } catch (err) {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = HARDCODED_CATEGORIES;

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) =>
        Array.isArray(project.categories) &&
        project.categories.some((cat: any) => cat?.title === filter)
      );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
        <HeroCarousel heightClass="h-[38rem]" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Transforming Visions into Reality
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            Explore our portfolio of innovative urban development projects
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

      {/* Filter Navigation */}
      <section className="py-12 bg-slm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-slm-green-600 text-white shadow-lg"
                    : "bg-white text-slm-green-600 hover:bg-slm-green-50 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-slm-green-700 py-12">Loading projects...</div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center text-slm-green-700 py-12">No projects found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project._id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative overflow-hidden group">
                    <div
                      className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${project.mainImage?.asset?._ref ? sanityImageUrl(project.mainImage) : ''})` }}
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      {project.categories?.map((cat: any, idx: number) => (
                        <Badge key={idx} className="bg-slm-green-600 text-white rounded-full px-3 py-1 text-xs font-inter font-medium shadow">
                          {cat?.title}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-slm-green-700">
                        {project.year}
                      </Badge>
                    </div>
                    {/* Project status badge on hover, bottom left */}
                    {project.status && (
                      <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className={`rounded-full px-3 py-1 text-xs font-inter font-medium shadow ${project.status === 'completed' ? 'bg-green-700 text-white' : 'bg-yellow-500 text-white'}`}>
                          {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-slm-green-700">
                      {project.title}
                    </CardTitle>
                    {project.location && (
                      <div className="mb-2">
                        <Badge className="bg-slm-brown-600 text-white text-xs font-inter font-medium">
                          {project.location}
                        </Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="font-inter text-gray-600 mb-2 leading-relaxed">
                      {project.description}
                    </p>
                    {/* Tags below description, split by comma if needed */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(Array.isArray(project.tags)
                        ? project.tags.flatMap((tag: string) => tag.split(',').map(t => t.trim()).filter(Boolean))
                        : typeof project.tags === 'string'
                          ? project.tags.split(',').map((t: string) => t.trim()).filter(Boolean)
                          : [])
                        .map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="inline-block bg-slm-green-50 text-slm-green-700 border border-slm-green-200 rounded-full px-3 py-1 text-xs font-inter font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-slm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-12">
            Our Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-slm-green-600 rounded-full flex items-center justify-center mx-auto">
                <AnimatedCounter to={50} suffix="+" className="text-white text-2xl font-bold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Projects Completed</h3>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-slm-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">25+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Countries Served</h3>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-slm-brown-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">95%</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Client Satisfaction</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;

// Helper for Sanity image URLs
function sanityImageUrl(image: any) {
  if (!image?.asset?._ref) return '';
  // Basic Sanity CDN URL builder for images
  const ref = image.asset._ref;
  const [, id, dimension, format] = ref.split('-');
  return `https://cdn.sanity.io/images/3qxalk7v/production/${id}-${dimension}.${format}`;
}

// AnimatedCounter component
import { useRef } from "react";
function AnimatedCounter({ to, suffix = '', className = '' }: { to: number, suffix?: string, className?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    let start = 0;
    const end = to;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    function run() {
      start += 1;
      setCount(start);
      if (start < end) {
        ref.current = setTimeout(run, stepTime);
      }
    }
    run();
    return () => ref.current && clearTimeout(ref.current);
  }, [to]);
  return <span className={className}>{count}{suffix}</span>;
}
