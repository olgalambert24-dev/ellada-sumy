import { Metadata } from "next";
import ContactForm from "../components/shared/contact-form";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Контакти видавничого будинку Еллада. Адреса, телефон, email м. Суми.",
};

export default function KontaktyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Контакти</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Наші контакти</h3>
            <p className="mb-2"><strong>Адреса:</strong> м. Суми, Україна</p>
            <p className="mb-2"><strong>Телефон:</strong> +380 (XXX) XXX-XXX</p>
            <p className="mb-2"><strong>Email:</strong> info@ellada-sumy.com</p>
            <p className="mb-2"><strong>Години роботи:</strong> Пн-Пт 9:00-18:00</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Написати нам</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}