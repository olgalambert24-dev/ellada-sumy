import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Novyny polihrafii, porady dlia avtoriv, stati pro druk ta dyzain.",
};


export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Блог</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p>Новини, статті, поради.</p>
      </section>
    </main>
  );
}