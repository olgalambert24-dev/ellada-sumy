import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity/client";
import { testimonialsQuery } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Відгуки",
  description: "Відгуки клієнтів видавничого будинку Еллада.",
};

export default async function VidgukiPage() {
  const testimonials = await sanityClient.fetch(testimonialsQuery);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Відгуки</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        {testimonials.length === 0 ? (
          <p>Відгуки скоро з'являться.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial: any) => (
              <div key={testimonial._id} className="border rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4 object-cover" 
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex text-amber-500">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}