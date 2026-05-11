import os

pages = {
    'app/pro-nas/page.tsx': '''export default function ProNasPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Про нас</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Видавничий будинок "Еллада"</h2>
        <p className="mb-4">Видавничий будинок "Еллада" відомий на поліграфічному ринку України з 2000 року. За цей час у видавництві побачили світ кілька сотень найменувань книжкових видань.</p>
        <p>Звертаючись до нас, Ви можете замовити абсолютно всі види поліграфічних робіт. Працюємо з авторськими матеріалами на будь-якій стадії підготовки.</p>
      </section>
    </main>
  );
}''',

    'app/poslugi/page.tsx': '''export default function PoslugiPage() {
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
}''',

    'app/portfolio/page.tsx': '''export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Портфоліо</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p>Наші роботи та проєкти.</p>
      </section>
    </main>
  );
}''',

    'app/kontakty/page.tsx': '''export default function KontaktyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Контакти</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p>Адреса: м. Суми, Україна</p>
        <p>Телефон: вказати</p>
        <p>Email: вказати</p>
      </section>
    </main>
  );
}''',

    'app/blog/page.tsx': '''export default function BlogPage() {
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
}''',

    'app/vidguki/page.tsx': '''export default function VidgukiPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Відгуки</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p>Відгуки наших клієнтів.</p>
      </section>
    </main>
  );
}''',

    'app/avtoram/page.tsx': '''export default function AvtoramPage() {
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
}''',

    'app/kalkulyator/page.tsx': '''export default function KalkulyatorPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Калькулятор тиражу</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p>Розрахуйте вартість друку онлайн.</p>
      </section>
    </main>
  );
}''',
}

# Create directories and files
for path, content in pages.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Created: {path}')

print('Done! All pages created.')