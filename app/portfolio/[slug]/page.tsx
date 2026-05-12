export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Проєкт: {params.slug}</h2>
        <p>Детальна інформація про проєкт.</p>
      </section>
    </main>
  );
}