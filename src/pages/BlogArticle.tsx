import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../react-router-slm/app/sanity/client";
import { FaUserCircle, FaCalendarAlt, FaClock, FaShareAlt } from "react-icons/fa";
import Footer from "@/components/Footer";

const builder = imageUrlBuilder(client);

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  author->{name, image, twitter, linkedin, website},
  publishedAt,
  body,
  categories[]->{title},
  tags
}`;

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={builder.image(value).width(800).url()}
        alt={value.alt || ""}
        className="rounded-xl my-4"
      />
    ),
  },
};

function estimateReadingTime(text) {
  if (!text) return 0;
  const words = typeof text === "string" ? text.split(" ") : text.map(b => b.children?.map(c => c.text).join(" ")).join(" ").split(" ");
  return Math.ceil(words.length / 200); // 200 wpm
}

const BlogArticle = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showBack, setShowBack] = useState(true);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError("");
    client.fetch(POST_QUERY, { slug }).then((data) => {
      setPost(data);
      setLoading(false);
    }).catch(() => {
      setError("Failed to load article. Please try again later.");
      setLoading(false);
    });
  }, [slug]);

  // Hide/show back button on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShowBack(current < 40 || current < lastScroll.current);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <div className="flex min-h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slm-green-600"></div></div>;
  if (error) return <div className="flex min-h-screen items-center justify-center text-red-600">{error}</div>;
  if (!post) return <div className="flex min-h-screen items-center justify-center text-gray-600">Article not found.</div>;

  const readingTime = estimateReadingTime(post.body);

  return (
    <>
      <main className="container mx-auto min-h-screen max-w-3xl p-4 sm:p-8 flex flex-col gap-4">
        <div className={`sticky top-2 z-10 mb-2 w-fit transition-opacity duration-300 ${showBack ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Link to="/blog" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-slm-green-700 hover:bg-slm-green-50 border border-slm-green-200 transition font-semibold shadow"><span className="text-lg">←</span> Back to Blog</Link>
        </div>
        <section className="bg-white rounded-xl p-4 sm:p-8 mb-4 shadow flex flex-col gap-4">
          {post.mainImage && (
            <img
              src={builder.image(post.mainImage).width(800).url()}
              alt={post.title}
              className="aspect-video rounded-xl mb-2 w-full object-cover"
            />
          )}
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slm-green-800 mb-2">
            <span className="flex items-center gap-1"><FaCalendarAlt /> {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}</span>
            {post.author?.name && <span className="flex items-center gap-1"><FaUserCircle /> {post.author.name}</span>}
            <span className="flex items-center gap-1"><FaClock /> {readingTime} min read</span>
          </div>
          {post.author?.image && (
            <img src={builder.image(post.author.image).width(48).height(48).url()} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-slm-green-300" />
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags && post.tags.map((tag) => (
              <span key={tag} className="bg-slm-green-100 text-slm-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"># {tag}</span>
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            <button className="flex items-center gap-1 px-3 py-1 rounded bg-slm-green-600 text-white hover:bg-slm-green-700 transition" onClick={() => navigator.share ? navigator.share({ title: post.title, url: window.location.href }) : window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`)}><FaShareAlt /> Share</button>
          </div>
        </section>
        <article className="prose max-w-none prose-lg prose-slate">
          {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
        </article>
      </main>
      <Footer author={post.author} />
    </>
  );
};

export default BlogArticle;
