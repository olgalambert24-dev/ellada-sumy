'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  if (isSent) {
    return (
      <div className="bg-green-100 text-green-700 px-4 py-3 rounded">
        Дякуємо! Ваше повідомлення відправлено.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Ваше ім&apos;я *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Телефон *</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Повідомлення *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <button type="submit" className="w-full bg-amber-700 text-white py-2 px-4 rounded-lg hover:bg-amber-800">
        Відправити
      </button>
    </form>
  );
}