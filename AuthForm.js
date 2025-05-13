import React, { useState } from 'react';
import { users } from '../mock/users';

const AuthForm = ({ setLoggedIn, userType, defaultRegister = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(!defaultRegister);
  const [error, setError] = useState(null);

  const primaryColor = userType === 'student' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-500 hover:bg-amber-600';
  const secondaryColor = userType === 'student' ? 'text-emerald-600 hover:text-emerald-800' : 'text-amber-500 hover:text-amber-700';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (isLogin) {
      const user = users.find(u => u.email === email);
      if (!user) {
        setError('Correo electrónico no registrado');
        return;
      }
      if (password !== 'password123') {
        setError('Contraseña incorrecta');
        return;
      }
      setLoggedIn(true);
    } else {
      if (users.some(u => u.email === email)) {
        setError('Este correo ya está registrado');
        return;
      }
      setLoggedIn(true);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {isLogin ? 'Inicia sesión' : `Regístrate como ${userType === 'student' ? 'Estudiante' : 'Cliente'}`}
      </h2>
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">TeenWork</h3>
        {error && (
          <div className="mt-4 mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            <p>{error}</p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full text-white py-2 rounded-lg transition-colors mb-4 ${primaryColor}`}
        >
          {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
        </button>
        <p className="text-center text-gray-600">
          {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes una cuenta? '}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
            }}
            className={`${secondaryColor} underline`}
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;

// DONE