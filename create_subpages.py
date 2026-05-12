import os

subpages = {
    'app/pro-nas/istoriya/page.tsx': """export default function IstoriyaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Історія</h2>
        <p>Видавничий будинок "Еллада" засновано у 2000 році в місті Суми.</p>
      </section>
    </main>
  );
}""",

    'app/pro-nas/komanda/page.tsx': """export default function KomandaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Команда</h2>
        <p>Наша команда професіоналів.</p>
      </section>
    </main>
  );
}""",

    'app/pro-nas/vyrobnytstvo/page.tsx': """export default function VyrobnytstvoPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Виробництво</h2>
        <p>Сучасне поліграфічне обладнання.</p>
      </section>
    </main>
  );
}""",

    'app/pro-nas/nagorody/page.tsx': """export default function NagorodyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Нагороди</h2>
        <p>Наші досягнення та нагороди.</p>
      </section>
    </main>
  );
}""",

    'app/poslugi/knyzhne-vydannia/page.tsx': """export default function KnyzhneVydanniaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Книжне видавництво</h2>
        <p>Видання книг різних жанрів та форматів.</p>
      </section>
    </main>
  );
}""",

    'app/poslugi/dyayn-studiya/page.tsx': """export default function DyaynStudiyaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Дизайн-студія</h2>
        <p>Розробка макетів, верстка, дизайн обкладинок.</p>
      </section>
    </main>
  );
}""",

    'app/poslugi/drukarnia/page.tsx': """export default function DrukarniaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Друкарня</h2>
        <p>Друкарня повного циклу на сучасному обладнанні.</p>
      </section>
    </main>
  );
}""",

    'app/poslugi/pislyadrukarska-obrobka/page.tsx': """export default function PislyadrukarskaObrobkaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Післядрукарська обробка</h2>
        <p>Брошурування, палітурка, ламінування, тиснення.</p>
      </section>
    </main>
  );
}""",

    'app/avtoram/etapy/page.tsx': """export default function EtapyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Етапи видання книги</h2>
        <p>Опис етапів роботи над книгою.</p>
      </section>
    </main>
  );
}""",

    'app/avtoram/vartist/page.tsx': """export default function VartistPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Вартість видання</h2>
        <p>Розрахунок вартості видання книги.</p>
      </section>
    </main>
  );
}""",

    'app/avtoram/faq/page.tsx': """export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Часті питання</h2>
        <p>Відповіді на найпоширеніші питання.</p>
      </section>
    </main>
  );
}""",
}

for path, content in subpages.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Created: {path}')

print('Done! All subpages created.')