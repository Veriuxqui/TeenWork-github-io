import React, { useState } from 'react';

const PriceEditor = ({ initialPrices, onSave }) => {
  const [prices, setPrices] = useState(initialPrices || {
    gardening: 20,
    pets: 15,
    tutoring: 25,
    cleaning: 18,
    moving: 30
  });

  const handlePriceChange = (category, value) => {
    setPrices(prev => ({
      ...prev,
      [category]: Number(value)
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Configura tus precios</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Jardinería</label>
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="number"
              value={prices.gardening}
              onChange={(e) => handlePriceChange('gardening', e.target.value)}
              className="w-20 px-3 py-1 border border-gray-300 rounded-lg"
              min="0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Cuidado de mascotas</label>
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="number"
              value={prices.pets}
              onChange={(e) => handlePriceChange('pets', e.target.value)}
              className="w-20 px-3 py-1 border border-gray-300 rounded-lg"
              min="0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Tutorías</label>
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="number"
              value={prices.tutoring}
              onChange={(e) => handlePriceChange('tutoring', e.target.value)}
              className="w-20 px-3 py-1 border border-gray-300 rounded-lg"
              min="0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Limpieza</label>
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="number"
              value={prices.cleaning}
              onChange={(e) => handlePriceChange('cleaning', e.target.value)}
              className="w-20 px-3 py-1 border border-gray-300 rounded-lg"
              min="0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Mudanzas</label>
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="number"
              value={prices.moving}
              onChange={(e) => handlePriceChange('moving', e.target.value)}
              className="w-20 px-3 py-1 border border-gray-300 rounded-lg"
              min="0"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => onSave(prices)}
        className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Guardar Precios
      </button>
    </div>
  );
};

export default PriceEditor;