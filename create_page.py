content = r'''export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Vydavnychyi budynok "Ellada"</h1>
          <p className="mt-2">m. Sumy - polihrafiia povnoho tsyklu z 2000 roku</p>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Nashi posluhy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Vydavnytstvo</h3>
            <p>Druk knyh, broshur, katalohiv</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Dyzain-studia</h3>
            <p>Reklamna ta dilova polihrafiia</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Drukarnia</h3>
            <p>Suchasne obladnannia, yakisnyi druk</p>
          </div>
        </div>
      </section>
      <footer className="bg-amber-800 text-white py-6 text-center">
        <p>2025 Vydavnychyi budynok "Ellada"</p>
      </footer>
    </main>
  );
}
'''

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done! File created.')