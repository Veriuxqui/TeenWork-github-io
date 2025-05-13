import React, { useState } from 'react';

const ClientRegistrationForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    paymentMethod: 'efectivo'
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (!formData.email || !formData.password) {
      setError('Email y contraseña son requeridos');
      return;
    }
    // Aquí iría la lógica para registrar al cliente
    console.log('Cliente registrado:', formData);
    setLoggedIn(true);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Regístrate como Cliente
      </h2>
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-amber-500">TeenWork</h3>
        {error && (
          <div className="mt-4 mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            <p>{error}</p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="paymentMethod" className="block text-gray-700 mb-2">
            Método de pago preferido
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition-colors mb-4"
        >
          Crear cuenta
        </button>
        <p className="text-center text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <button
            type="button"
            onClick={() => setLoggedIn(true)}
            className="text-amber-500 hover:text-amber-700 underline"
          >
            Inicia sesión
          </button>
        </p>
      </form>
    </div>
  );
};

export default ClientRegistrationForm;