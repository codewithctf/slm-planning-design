import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "../sanity/client";
import { useEffect, useState } from "react";

const { projectId, dataset } = client.config();
const urlFor = (source: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage,
  image,
  body,
  tags,
  categories[]->{title},
  author->{name, image, bio, twitter, linkedin, facebook, instagram},
}`;

// Related posts query
const RELATED_POSTS_QUERY = `*[_type == "post" && slug.current != $slug][0...3]{title, slug, mainImage}`;

export async function loader({ params }: { params: { slug: string } }) {
  const post = await client.fetch<any>(POST_QUERY, params);
  const relatedPosts = await client.fetch<any[]>(RELATED_POSTS_QUERY, params);
  return { post, relatedPosts };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) =>
      value && (
        <figure className="my-4">
          <img
            src={urlFor(value)?.width(800).url()}
            alt={value.alt || value.caption || ""}
            className="rounded-xl"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-center text-gray-500 text-xs mt-2">{value.caption}</figcaption>
          )}
        </figure>
      ),
  },
  marks: {
    underline: ({ children }: any) => <span style={{ textDecoration: 'underline' }}>{children}</span>,
    code: ({ children }: any) => <code className="bg-gray-100 px-1 rounded text-sm">{children}</code>,
    color: ({ children, value }: any) => <span style={{ color: value?.hex }}>{children}</span>,
    fontFamily: ({ children, value }: any) => <span style={{ fontFamily: value?.family }}>{children}</span>,
  },
};

export default function Component({ loaderData }: { loaderData: { post: any, relatedPosts: any[] } }) {
  const { post, relatedPosts } = loaderData;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(false);
    setError("");
    if (!post) setError("Post not found.");
  }, [post]);

  const coverImage = post?.mainImage || post?.image;
  const postImageUrl = coverImage ? urlFor(coverImage)?.width(550).height(310).url() : null;

  // SEO: Set document title
  useEffect(() => {
    if (post?.title) document.title = `${post.title} | SLM Blog`;
  }, [post]);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="text-red-600 text-center mt-10">{error}</div>;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4" aria-label="Blog article">
      <nav aria-label="Breadcrumb" className="mb-2">
        <ol className="flex gap-2 text-sm text-gray-500">
          <li><Link to="/">Home</Link></li>
          <li>/</li>
          <li aria-current="page">{post.title}</li>
        </ol>
      </nav>
      <Link to="/" className="hover:underline" aria-label="Back to posts">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl transition-opacity duration-700" loading="lazy"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags && post.tags.map((tag: string) => (
          <span key={tag} className="bg-slm-green-100 text-slm-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            {tag}
          </span>
        ))}
        {post.categories && post.categories.map((cat: any) => (
          <span key={cat.title} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
            {cat.title}
          </span>
        ))}
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-500 text-sm mb-2">
          Published: {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
          {post.author?.name && <> | By {post.author.name}</>}
        </p>
        {/* Author info */}
        {post.author?.image && (
          <div className="flex items-center gap-3 mb-4">
            <img src={urlFor(post.author.image)?.width(48).height(48).url()} alt={post.author.name} className="rounded-full w-12 h-12" loading="lazy" />
            <div>
              <span className="font-semibold">{post.author.name}</span>
              {post.author.bio && <PortableText value={post.author.bio} components={portableTextComponents} />}
            </div>
          </div>
        )}
        {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
      </div>
      {/* Social sharing */}
      <div className="flex gap-4 mt-6" aria-label="Share this post">
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="hover:underline">Share on Twitter</a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="hover:underline">Share on Facebook</a>
      </div>
      {/* Author social media footer */}
      {post.author && (post.author.twitter || post.author.linkedin || post.author.facebook || post.author.instagram) && (
        <footer className="mt-10 border-t pt-6 flex flex-col items-center gap-2" aria-label="Author social media">
          <span className="font-semibold mb-2">Connect with the author:</span>
          <div className="flex gap-4">
            {post.author.twitter && (
              <a href={post.author.twitter} target="_blank" rel="noopener noreferrer" aria-label="Author Twitter" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full transition-colors">Twitter</a>
            )}
            {post.author.linkedin && (
              <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Author LinkedIn" className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-full transition-colors">LinkedIn</a>
            )}
            {post.author.facebook && (
              <a href={post.author.facebook} target="_blank" rel="noopener noreferrer" aria-label="Author Facebook" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full transition-colors">Facebook</a>
            )}
            {post.author.instagram && (
              <a href={post.author.instagram} target="_blank" rel="noopener noreferrer" aria-label="Author Instagram" className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full transition-colors">Instagram</a>
            )}
          </div>
        </footer>
      )}
      {/* Related posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="mt-10" aria-label="Related posts">
          <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPosts.map((rel) => (
              <li key={rel.slug.current} className="border rounded-lg p-4 hover:shadow transition-shadow">
                <Link to={`/${rel.slug.current}`} className="font-semibold hover:underline">
                  {rel.mainImage && <img src={urlFor(rel.mainImage)?.width(300).height(170).url()} alt={rel.title} className="rounded mb-2" loading="lazy" />}
                  {rel.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
