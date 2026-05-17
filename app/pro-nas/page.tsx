import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  title: "Про нас | Видавничий будинок «Еллада»",
  description: "Історія видавничого будинку Еллада.",
};

interface PageType {
  title: string;
  content?: any[];
}

export default async function ProNasPage() {
  const page = await sanityClient.fetch<PageType>(pageQuery, { slug: "pro-nas" });

  if (!page) {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <header className="bg-ellada-primary text-white py-6">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold">Про нас</h1>
          </div>
        </header>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <p>Сторінку не знайдено у Sanity. Додайте сторінку з slug "pro-nas".</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">{page.title}</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        {page.content && <PortableText value={page.content} />}
      </section>
    </main>
  );
}