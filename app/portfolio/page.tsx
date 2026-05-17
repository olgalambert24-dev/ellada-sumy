import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity/client";
import { portfolioQuery } from "@/lib/sanity/queries";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Портфоліо",
  description: "Приклади робіт видавничого будинку Еллада.",
};

export default async function PortfolioPage() {
  const items = await sanityClient.fetch(portfolioQuery);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Портфоліо</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        {items.length === 0 ? (
          <p>Роботи скоро з'являться.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item: any) => (
              <article key={item._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                {item.coverImage && (
                  <img src={item.coverImage} alt={item.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <div className="text-sm text-amber-700 mb-2">{item.category}</div>
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="text-sm text-gray-500">Клієнт: {item.client}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}