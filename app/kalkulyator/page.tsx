'use client';

import { useState } from 'react';

export default function KalkulyatorPage() {
  const [params, setParams] = useState({
    pages: 100,
    copies: 50,
    format: 'a4',
    color: 'bw'
  });
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const basePrice = params.color === 'bw' ? 2 : 8; // грн за страницу
    const formatMultiplier = params.format === 'a5' ? 0.7 : params.format === 'a3' ? 1.5 : 1;
    const total = params.pages * params.copies * basePrice * formatMultiplier;
    setPrice(Math.round(total));
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Kalkuliator tiazahu</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Kilkist storinok</label>
              <input
                type="number"
                value={params.pages}
                onChange={(e) => setParams({...params, pages: Number(e.target.value)})}
                className="w-full px-3 py-2 border rounded-lg"
                min="1"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Tirazh (ekz.)</label>
              <input
                type="number"
                value={params.copies}
                onChange={(e) => setParams({...params, copies: Number(e.target.value)})}
                className="w-full px-3 py-2 border rounded-lg"
                min="1"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Format</label>
              <select
                value={params.format}
                onChange={(e) => setParams({...params, format: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="a5">A5</option>
                <option value="a4">A4</option>
                <option value="a3">A3</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Druk</label>
              <select
                value={params.color}
                onChange={(e) => setParams({...params, color: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="bw">Chorno-bilui</option>
                <option value="color">Kolorovui</option>
              </select>
            </div>
            
            <button
              onClick={calculatePrice}
              className="w-full bg-amber-700 text-white py-2 px-4 rounded-lg hover:bg-amber-800"
            >
              Rozrakhuvaty
            </button>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Poperednia vartist</h3>
            <p className="text-4xl font-bold text-amber-700">{price} hrn</p>
            <p className="text-sm text-gray-600 mt-2">* Poperednii rozrakhunok. Ostatochna vartist zalezhyt vid obiednannia.</p>
          </div>
        </div>
      </section>
    </main>
  );
}