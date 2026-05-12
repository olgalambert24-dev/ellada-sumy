import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golovna",
  description: "Vydavnychyi budynok Ellada - knyzhne vydavnytstvo, dyzain-studia ta drukarnia povnoho tsyklu v Sumakh z 2000 roku.",
};


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Наші послуги</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Видавництво</h3>
            <p>Друк книг, брошур, каталогів. Робота з авторами та видавництвами.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Дизайн-студія</h3>
            <p>Рекламна, іміджева та ділова поліграфія. Верстка та макетування.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Друкарня</h3>
            <p>Сучасне обладнання. Друкарські та післядрукарські послуги.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Про нас</h2>
          <p className="mb-4">Видавничий будинок "Еллада" відомий на поліграфічному ринку України з 2000 року. За цей час у видавництві побачили світ кілька сотень найменувань книжкових видань.</p>
          <p>Звертаючись до нас, Ви можете замовити абсолютно всі види поліграфічних робіт. Працюємо з авторськими матеріалами на будь-якій стадії підготовки.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Наші переваги</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">+</div>
            <div>
              <h3 className="font-semibold">Власна друкарня</h3>
              <p className="text-gray-600">Поліграфічні машини у місті Суми</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl">+</div>
            <div>
              <h3 className="font-semibold">Індивідуальний підхід</h3>
              <p className="text-gray-600">Професійні консультації та гнучка цінова політика</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl">+</div>
            <div>
              <h3 className="font-semibold">Стислі терміни</h3>
              <p className="text-gray-600">Власне виробництво дозволяє виконувати замовлення швидко</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl">+</div>
            <div>
              <h3 className="font-semibold">Повний цикл</h3>
              <p className="text-gray-600">Від дизайну до готового виробу</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}