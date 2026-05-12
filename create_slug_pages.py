import os

# Создаем папки для динамических страниц
os.makedirs('app/portfolio/[slug]', exist_ok=True)
os.makedirs('app/blog/[slug]', exist_ok=True)

# Детальная страница портфолио
portfolio_slug = '''export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Проєкт: {params.slug}</h2>
        <p>Детальна інформація про проєкт.</p>
      </section>
    </main>
  );
}'''

with open('app/portfolio/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(portfolio_slug)

# Детальная страница блога
blog_slug = '''export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Стаття: {params.slug}</h2>
        <p>Текст статті.</p>
      </section>
    </main>
  );
}'''

with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(blog_slug)

print('Done! Slug pages created.')