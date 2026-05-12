import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posluhy",
  description: "Povnyi spektr polihrafichnykh posluh: vydavnytstvo, dyzain, druk, pisliadrukarska obrobka.",
};


export default function PoslugiPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Послуги</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Книжне видавництво</h3>
            <p>Видання книг різних жанрів та форматів.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Дизайн-студія</h3>
            <p>Розробка макетів, верстка, дизайн обкладинок.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Друкарня</h3>
            <p>Друкарня повного циклу на сучасному обладнанні.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Післядрукарська обробка</h3>
            <p>Брошурування, палітурка, ламінування, тиснення.</p>
          </div>
        </div>
      </section>
    </main>
  );
}