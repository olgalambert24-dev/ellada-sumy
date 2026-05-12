import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro nas",
  description: "Istoriia vydavnychoho budynku Ellada. Polihrafiia povnoho tsyklu v Sumakh z 2000 roku.",
};


export default function ProNasPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Видавничий будинок "Еллада"</h2>
        <p className="mb-4">Видавничий будинок "Еллада" відомий на поліграфічному ринку України з 2000 року. За цей час у видавництві побачили світ кілька сотень найменувань книжкових видань.</p>
        <p>Звертаючись до нас, Ви можете замовити абсолютно всі види поліграфічних робіт. Працюємо з авторськими матеріалами на будь-якій стадії підготовки.</p>
      </section>
    </main>
  );
}