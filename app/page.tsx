import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { servicesQuery, testimonialsQuery, portfolioQuery } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Видавничий будинок «Еллада» | Друкарня та дизайн-студія в Сумах",
  description: "Книжне видавництво, дизайн-студія та друкарня повного циклу в Сумах з 2000 року.",
};

// Кольори бренду
const colors = {
  primary: "#8B1A2B",
  primaryDark: "#5a1020",
  gold: "#C9A227",
  goldDark: "#B8921F",
  grayBg: "#f9fafb",
  grayText: "#111827",
  grayMuted: "#374151",
};

interface ServiceType {
  _id: string;
  title: string;
  description?: string;
  priceFrom?: number;
  slug?: { current: string };
}

interface TestimonialType {
  _id: string;
  author: string;
  role?: string;
  content: string;
  image?: string;
}

interface PortfolioItemType {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: string;
  category?: string;
}

export default async function HomePage() {
  const services = await sanityClient.fetch(servicesQuery);
  const testimonials = await sanityClient.fetch(testimonialsQuery);
  const portfolio = await sanityClient.fetch(portfolioQuery, { category: "" });

  return (
    <main className="min-h-screen">
      {/* ===== HERO СЕКЦІЯ ===== */}
      <section 
        className="relative text-white py-24 md:py-32"
        style={{ background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.primaryDark})` }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Видавничий будинок «Еллада»
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Книжне видавництво, дизайн-студія та друкарня повного циклу в Сумах з 2000 року
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kalkulyator"
              className="text-white px-8 py-3 rounded-lg font-semibold transition hover:opacity-90"
              style={{ backgroundColor: colors.gold }}
            >
              Розрахувати вартість
            </Link>
            <Link
              href="/avtoram"
              className="border-2 border-white text-white hover:bg-white px-8 py-3 rounded-lg font-semibold transition"
              style={{ hover: { color: colors.primary } }}
            >
              Подати рукопис
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ПЕРЕВАГИ ===== */}
      <section className="py-16" style={{ backgroundColor: colors.grayBg }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "24+", label: "роки досвіду" },
              { number: "500+", label: "видань" },
              { number: "50+", label: "постійних клієнтів" },
              { number: "100%", label: "якість друку" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>
                  {stat.number}
                </div>
                <div className="mt-2" style={{ color: colors.grayMuted }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ПОСЛУГИ (превью) ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.grayText }}>
              Наші послуги
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: colors.grayMuted }}>
              Повний цикл виробництва — від макету до готової продукції
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service: ServiceType) => (
              <Link
                href={`/poslugi/${service.slug?.current || ''}`}
                key={service._id}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition group"
              >
                <h3 
                  className="text-xl font-semibold mb-3 transition group-hover:underline"
                  style={{ color: colors.grayText }}
                >
                  {service.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: colors.grayMuted }}>
                  {service.description}
                </p>
                {service.priceFrom && (
                  <p className="font-semibold text-sm" style={{ color: colors.gold }}>
                    Від {service.priceFrom} грн
                  </p>
                )}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/poslugi"
              className="inline-block border-2 px-6 py-2 rounded-lg transition hover:text-white"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              Всі послуги →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ПОРТФОЛІО (превью) ===== */}
      {portfolio?.length > 0 && (
        <section className="py-16" style={{ backgroundColor: colors.grayBg }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: colors.grayText }}>
                Портфоліо
              </h2>
              <p style={{ color: colors.grayMuted }}>Приклади наших робіт</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.slice(0, 3).map((item: PortfolioItemType) => (
                <Link
                  href={`/portfolio/${item.slug.current}`}
                  key={item._id}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                    {item.coverImage ? (
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <h3 
                    className="font-semibold group-hover:underline"
                    style={{ color: colors.grayText }}
                  >
                    {item.title}
                  </h3>
                  {item.category && (
                    <p className="text-sm" style={{ color: colors.grayMuted }}>
                      {item.category}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                className="inline-block border-2 px-6 py-2 rounded-lg transition hover:text-white"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Все портфоліо →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== ВІДГУКИ ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.grayText }}>
              Відгуки клієнтів
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial: TestimonialType) => (
              <div 
                key={testimonial._id} 
                className="rounded-lg p-6"
                style={{ backgroundColor: colors.grayBg }}
              >
                <p className="mb-4 italic" style={{ color: colors.grayMuted }}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  {testimonial.image && (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full mr-3 object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold" style={{ color: colors.grayText }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm" style={{ color: colors.grayMuted }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Готові до друку?</h2>
          <p className="text-white/90 mb-8">
            Отримайте безкоштовну консультацію та розрахунок вартості вашого проєкту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakty"
              className="text-white px-8 py-3 rounded-lg font-semibold transition hover:opacity-90"
              style={{ backgroundColor: colors.gold }}
            >
              Зв'язатися з нами
            </Link>
            <Link
              href="/kalkulyator"
              className="border-2 border-white text-white hover:bg-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Калькулятор
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}