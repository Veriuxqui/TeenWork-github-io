import React from 'react';

const UserTypeSelector = ({ onSelect }) => {
  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">¿Qué te trae por aquí?</h2>
      <div className="space-y-4">
        <button
          onClick={() => onSelect('student')}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-medium"
        >
          Soy estudiante (quiero trabajar)
        </button>
        <button
          onClick={() => onSelect('employer')}
          className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors text-lg font-medium"
        >
          Busco quien me ayude
        </button>
      </div>
      <p className="mt-6 text-gray-500">
        ¿Ya tienes cuenta? <button 
          onClick={() => onSelect('login')}
          className="text-emerald-600 hover:underline"
        >
          Inicia sesión
        </button>
      </p>
    </div>
  );
};

export default UserTypeSelector;