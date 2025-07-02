import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "../sanity/client";

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
  author->{name},
}`;

export async function loader({ params }: { params: { slug: string } }) {
  return { post: await client.fetch<any>(POST_QUERY, params) };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) =>
      value && (
        <img
          src={urlFor(value)?.width(800).url()}
          alt={value.alt || ""}
          className="rounded-xl my-4"
        />
      ),
  },
};

export default function Component({ loaderData }: { loaderData: { post: any } }) {
  const { post } = loaderData;
  const coverImage = post.mainImage || post.image;
  const postImageUrl = coverImage ? urlFor(coverImage)?.width(550).height(310).url() : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link to="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
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
        {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
      </div>
    </main>
  );
}
