import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avtoram",
  description: "Informatsiia dlia avtoriv. Yak vydaty knyhu v Sumakh. Etapy, vartist, vidpovidi na pytannia.",
};


export default function AvtoramPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Авторам</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p>Інформація для авторів.</p>
      </section>
    </main>
  );
}