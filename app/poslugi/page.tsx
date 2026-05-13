import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity/client";
import { servicesQuery } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Послуги",
  description: "Повний спектр поліграфічних послуг: видавництво, дизайн, друк, післядрукарська обробка.",
};

export default async function PoslugiPage() {
  const services = await sanityClient.fetch(servicesQuery);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-amber-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Послуги</h1>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service: any) => (
            <div key={service._id} className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.features && service.features.length > 0 && (
                <ul className="list-disc list-inside text-sm text-gray-500">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              {service.priceFrom && (
                <p className="mt-4 text-amber-700 font-semibold">
                  Від {service.priceFrom} грн
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}