'use client';

import { useState } from 'react';

export default function KalkulyatorPage() {
  const [params, setParams] = useState({
    pages: 100,
    copies: 50,
    format: 'a4',
    color: 'bw',
    paper: 'offset',
    binding: 'staple',
    cover: 'none'
  });
  const [price, setPrice] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const calculatePrice = () => {
    const colorPrices = {
      bw: 1.5,
      color: 6
    };

    const formatMultipliers = {
      a5: 0.6,
      a4: 1,
      a3: 1.8
    };

    const paperMultipliers = {
      offset: 1,
      coated: 1.3,
      designer: 1.8
    };

    const bindingPrices = {
      staple: 2,
      glue: 8,
      spiral: 12,
      hardcover: 45
    };

    const coverPrices = {
      none: 0,
      simple: 5,
      laminate: 12,
      uv: 20
    };

    const pagePrice = colorPrices[params.color] * formatMultipliers[params.format] * paperMultipliers[params.paper];
    const pagesTotal = params.pages * params.copies * pagePrice;
    const bindingTotal = params.copies * bindingPrices[params.binding];
    const coverTotal = params.copies * coverPrices[params.cover];
    
    const overhead = (pagesTotal + bindingTotal + coverTotal) * 0.1;
    
    const total = Math.round(pagesTotal + bindingTotal + coverTotal + overhead);

    setPrice(total);
    setShowDetails(true);
  };

  const formatLabels = {
    a5: 'A5 (148x210 мм)',
    a4: 'A4 (210x297 мм)',
    a3: 'A3 (297x420 мм)'
  };

  const colorLabels = {
    bw: 'Чорно-білий',
    color: 'Кольоровий'
  };

  const paperLabels = {
    offset: 'Офсетний (80 г/м2)',
    coated: 'Мелований (130 г/м2)',
    designer: 'Дизайнерський'
  };

  const bindingLabels = {
    staple: 'Скоба',
    glue: 'Термоплівка',
    spiral: 'Пружина',
    hardcover: 'Тверда палітурка'
  };

  const coverLabels = {
    none: 'Без обкладинки',
    simple: 'Паперова',
    laminate: 'Ламінована',
    uv: 'УФ-лак'
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Калькулятор вартості друку</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Параметри замовлення</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Кількість сторінок</label>
                  <input
                    type="number"
                    value={params.pages}
                    onChange={(e) => setParams({...params, pages: Math.max(1, Number(e.target.value))})}
                    className="w-full px-3 py-2 border rounded-lg"
                    min="1"
                    max="1000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Тираж (екземплярів)</label>
                  <input
                    type="number"
                    value={params.copies}
                    onChange={(e) => setParams({...params, copies: Math.max(1, Number(e.target.value))})}
                    className="w-full px-3 py-2 border rounded-lg"
                    min="1"
                    max="10000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Формат</label>
                  <select
                    value={params.format}
                    onChange={(e) => setParams({...params, format: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    {Object.entries(formatLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Колір друку</label>
                  <select
                    value={params.color}
                    onChange={(e) => setParams({...params, color: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    {Object.entries(colorLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Папір</label>
                  <select
                    value={params.paper}
                    onChange={(e) => setParams({...params, paper: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    {Object.entries(paperLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Переплет</label>
                  <select
                    value={params.binding}
                    onChange={(e) => setParams({...params, binding: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    {Object.entries(bindingLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Обкладинка</label>
                  <select
                    value={params.cover}
                    onChange={(e) => setParams({...params, cover: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    {Object.entries(coverLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                onClick={calculatePrice}
                className="w-full mt-6 bg-amber-700 text-white py-3 px-4 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
              >
                Розрахувати вартість
              </button>
            </div>
          </div>
          
          <div>
            {showDetails ? (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Попередній розрахунок</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Сторінки:</span>
                    <span>{params.pages} стор. x {params.copies} екз.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Формат:</span>
                    <span>{formatLabels[params.format]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Друк:</span>
                    <span>{colorLabels[params.color]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Папір:</span>
                    <span>{paperLabels[params.paper]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Переплет:</span>
                    <span>{bindingLabels[params.binding]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Обкладинка:</span>
                    <span>{coverLabels[params.cover]}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Вартість:</span>
                    <span className="text-4xl font-bold text-amber-700">{price} грн</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  * Це попередній розрахунок. Остаточна вартість може змінитися залежно від складності замовлення, термінів та додаткових послуг. Для точного розрахунку зверніться до наших менеджерів.
                </p>
                
                <div className="mt-6">
                  <a 
                    href="/kontakty" 
                    className="block w-full text-center bg-amber-700 text-white py-3 px-4 rounded-lg hover:bg-amber-800 transition-colors"
                  >
                    Замовити розрахунок
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-full min-h-[300px]">
                <p className="text-gray-500 text-center">
                  Виберіть параметри та натисніть "Розрахувати вартість"<br/>
                  для отримання попередньої ціни
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}