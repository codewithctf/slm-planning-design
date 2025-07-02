import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../react-router-slm/app/sanity/client";

const builder = imageUrlBuilder(client);

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  author->{name},
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

const BlogArticle = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    client.fetch(POST_QUERY, { slug }).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Article not found.</div>;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link to="/blog" className="hover:underline">← Back to Blog</Link>
      {post.mainImage && (
        <img
          src={builder.image(post.mainImage).width(800).url()}
          alt={post.title}
          className="aspect-video rounded-xl mb-4"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags && post.tags.map((tag) => (
          <span key={tag} className="bg-slm-green-100 text-slm-green-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
        ))}
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-500 text-sm mb-2">
          Published: {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
          {post.author?.name && <> | By {post.author.name}</>}
        </p>
        {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
      </div>
    </main>
  );
};

export default BlogArticle;
