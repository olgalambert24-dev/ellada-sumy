import { sanityClient } from "@/lib/sanity/client";
import { serviceBySlugQuery } from "@/lib/sanity/queries";

export default async function KnyzhneVydanniaPage() {
  const service = await sanityClient.fetch(serviceBySlugQuery('knyzhne-vydannia'));

  if (!service) {
    return <div>Послугу не знайдено</div>;
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        {service.features && service.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Особливості:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {service.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        {service.priceFrom && (
          <p className="text-amber-700 font-semibold">
            Від {service.priceFrom} грн
          </p>
        )}
      </section>
    </main>
  );
}