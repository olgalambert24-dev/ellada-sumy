import { Metadata } from "next";
import ContactForm from "../components/shared/contact-form";

export const metadata: Metadata = {
  title: "Kontakty",
  description: "Kontakty vydavnychoho budynku Ellada. Adresa, telefon, email m. Sumy.",
};

export default function KontaktyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Kontakty</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nashi kontakty</h3>
            <p className="mb-2"><strong>Adresa:</strong> m. Sumy, Ukraina</p>
            <p className="mb-2"><strong>Telefon:</strong> +380 (XXX) XXX-XXX</p>
            <p className="mb-2"><strong>Email:</strong> info@ellada-sumy.com</p>
            <p className="mb-2"><strong>Hodyny roboty:</strong> Pn-Pt 9:00-18:00</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Napysaty nam</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}