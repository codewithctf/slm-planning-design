import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UrbanPlanningCarousel from "@/components/UrbanPlanningCarousel";
import { Button } from "@/components/ui/button";
import { usePayloadApi } from "@/hooks/usePayloadApi";
import { Helmet } from 'react-helmet-async';

const blogTopics = [
  "All",
  "Sustainability",
  "Planning",
  "Urban Design",
  "3D Render",
  "Landscape Architecture",
  "Technology",
  "Climate",
];

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const { callApi } = usePayloadApi();

  useEffect(() => {
    callApi("/api/blogs", "GET").then(res => {
      if (res.data) {
        setPosts(res.data.docs || []);
      }
      setLoading(false);
    });
  }, []);

  const filteredArticles =
    selectedTopic === "All"
      ? posts
      : posts.filter((article) => {
          // Check if any category title matches the selected topic
          if (article.categories && Array.isArray(article.categories)) {
            return article.categories.some((cat: any) =>
              cat.title && cat.title.toLowerCase() === selectedTopic.toLowerCase()
            );
          }
          return false;
        });

  const featuredArticle = filteredArticles[0];

  // Newsletter handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus(null);
    if (!newsletterEmail) {
      setNewsletterStatus("Please enter a valid email address.");
      return;
    }
    // Use Payload API for newsletter
    const { callApi } = usePayloadApi();
    const res = await callApi("/api/newsletter-subscribers", "POST", { email: newsletterEmail });
    if (!res.error) {
      setNewsletterStatus("Thank you for subscribing!");
      setNewsletterEmail("");
    } else {
      setNewsletterStatus(res.error || "Subscription failed. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog | SLM Planning & Design</title>
        <meta name="description" content="Read the latest articles and insights from SLM Planning & Design on urban planning, landscape architecture, and 3D visualization." />
        <meta property="og:title" content="Blog | SLM Planning & Design" />
        <meta property="og:description" content="Read the latest articles and insights from SLM Planning & Design on urban planning, landscape architecture, and 3D visualization." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/slm-logo.png" />
        <meta property="og:url" content="https://slmplanning.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | SLM Planning & Design" />
        <meta name="twitter:description" content="Read the latest articles and insights from SLM Planning & Design on urban planning, landscape architecture, and 3D visualization." />
        <meta name="twitter:image" content="/assets/slm-logo.png" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navigation />
        {/* Hero Section with Carousel */}
        <section className="relative h-[38rem] flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-2 sm:px-4 bg-white">
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)",
            }}
          />
          <UrbanPlanningCarousel heightClass="h-[38rem]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg mb-4">
              Insights & Thought Leadership
            </h1>
            <p className="font-inter text-xl md:text-2xl text-white text-center drop-shadow-md max-w-2xl">
              Stay informed about the latest trends, innovations, and best practices
              in urban planning and sustainable design.
            </p>
          </div>
        </section>
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-8 bg-white">
            <div className="w-full px-2 sm:px-4 md:px-8">
              <div className="w-full flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-2xl p-4 md:p-8 gap-0 md:gap-0">
                <div className="flex-1 flex justify-center items-center min-h-[220px] max-h-[420px] overflow-hidden">
                  <img
                    src={
                      featuredArticle.image
                        ? featuredArticle.image.asset?.url
                        : "/assets/urban-planning.webp"
                    }
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover md:rounded-l-2xl"
                    style={{ maxHeight: "420px" }}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center px-4 py-8 md:py-12 md:px-10">
                  <div className="flex flex-row flex-wrap items-center gap-2 mb-3">
                    <span className="inline-block border border-slm-green-200 text-slm-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    {featuredArticle.tag && (
                      <span className="inline-block border border-slm-green-200 text-slm-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {featuredArticle.tag}
                      </span>
                    )}
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="font-inter text-lg text-gray-700 mb-6">
                    {featuredArticle.body && Array.isArray(featuredArticle.body)
                      ? featuredArticle.body[0]?.children?.[0]?.text
                      : ""}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{featuredArticle.author || "SLM Team"}</span>
                    <span className="hidden sm:inline">|</span>
                    <span>
                      {featuredArticle.publishedAt
                        ? new Date(featuredArticle.publishedAt).toLocaleDateString()
                        : ""}
                    </span>
                  </div>
                  <Button
                    asChild
                    className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-6 py-2 w-fit"
                  >
                    <a href={`/blog/${featuredArticle.slug?.current}`}>
                      Read Full Article
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Latest Articles */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-2 text-center">
              Latest Articles
            </h3>
            <p className="font-inter text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
              Expert insights and industry perspectives from our team of planning
              professionals.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {blogTopics.map((topic) => (
                <Button
                  key={topic}
                  variant={selectedTopic === topic ? "default" : "outline"}
                  className={`border-slm-green-200 text-slm-green-700 hover:bg-slm-green-50 px-4 py-1 text-sm font-semibold rounded-full whitespace-nowrap ${
                    selectedTopic === topic ? "bg-slm-green-600 text-white" : ""
                  }`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div>Loading...</div>
              ) : filteredArticles.length === 0 ? (
                <div>No articles found.</div>
              ) : (
                filteredArticles.map((article, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow flex flex-col h-full overflow-hidden"
                  >
                    <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                      <img
                        src={article.image ? article.image.asset?.url : "/assets/urban-planning.webp"}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between p-5">
                      <div className="flex flex-row flex-wrap items-center gap-2 mb-2">
                        {article.tag && (
                          <span className="inline-block border border-slm-green-200 text-slm-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                            {article.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="font-playfair text-xl md:text-2xl font-bold text-black mb-2">
                        {article.title}
                      </h4>
                      <p className="font-inter text-base text-gray-700 mb-3 flex-1">
                        {article.body && Array.isArray(article.body)
                          ? article.body[0]?.children?.[0]?.text
                          : ""}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                        <span>{article.author || "SLM Team"}</span>
                        <span className="hidden sm:inline">|</span>
                        <span>
                          {article.publishedAt
                            ? new Date(article.publishedAt).toLocaleDateString()
                            : ""}
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-slm-green-700 font-semibold px-0 py-1 w-fit"
                      >
                        <a href={`/blog/${article.slug?.current}`}>Read More</a>
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="py-16 bg-[#472c1b]">
          <div className="max-w-xl mx-auto px-4 text-center flex flex-col items-center">
            <h4 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="font-inter text-lg md:text-xl text-white mb-6 max-w-lg">Subscribe to our newsletter to receive the latest insights, project updates, and industry trends directly in your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="border border-gray-100 rounded-lg px-4 py-3 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-100 text-base md:text-lg"
                required
                autoComplete="email"
                inputMode="email"
                style={{maxWidth:'100%'}}
              />
              <Button type="submit" className="bg-white text-black hover:bg-slm-cream font-semibold px-8 py-3 text-base md:text-lg">
                Subscribe
              </Button>
            </form>
            {newsletterStatus && (
              <p className="mt-3 text-white font-inter text-base">{newsletterStatus}</p>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
