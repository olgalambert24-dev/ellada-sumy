import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakty",
  description: "Kontakty vydavnychoho budynku Ellada. Adresa, telefon, email m. Sumy.",
};

'use client';

import { useState } from 'react';

export default function KontaktyPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setIsSent(true);
  };

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
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Napysaty nam</h3>
            
            {isSent ? (
              <div className="bg-green-100 text-green-700 px-4 py-3 rounded">
                Diakuemo! Vasha povidomlennia vidpravleno.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Vashe imia</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefon</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Povidomlennia</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-amber-700 text-white py-2 px-4 rounded-lg hover:bg-amber-800">
                  Vidpravyty
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}