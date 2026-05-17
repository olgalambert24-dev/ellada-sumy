import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог",
  description: "Новини поліграфії, поради для авторів, статті про друк та дизайн.",
};

export default async function BlogPage() {
  const posts = await sanityClient.fetch(postsQuery);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Блог</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <p>Статті скоро з'являться.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <article key={post._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                {post.coverImage && (
                  <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <div className="text-sm text-amber-700 mb-2">{post.category}</div>
                  <h2 className="text-xl font-semibold mb-3">
                    <Link href={`/blog/${post.slug.current}`} className="hover:text-amber-700">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('uk-UA') : ''}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}