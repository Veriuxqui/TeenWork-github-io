import React from 'react';

const LayoutHeader = ({ user, userType }) => {
  const headerColor = userType === 'student' ? 'bg-emerald-600' : 'bg-amber-500';
  
  return (
    <header className={`${headerColor} text-white shadow-lg`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TeenWork</h1>
        <nav className="flex items-center space-x-6">
          <button className="hover:text-white opacity-90 transition-colors">Inicio</button>
          <button className="hover:text-white opacity-90 transition-colors">Trabajos</button>
          <div className="flex items-center space-x-2">
            <button className="hover:text-white opacity-90 transition-colors">Perfil</button>
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {user?.photo ? (
                <img 
                  src={user.photo} 
                  alt="Foto de perfil" 
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className={`${userType === 'student' ? 'text-emerald-600' : 'text-amber-500'} font-bold`}>
                  {user?.name?.charAt(0) || '?'}
                </span>
              )}
            </div>
          </div>
        </nav>
        {!user ? (
          <button className={`bg-white ${userType === 'student' ? 'text-emerald-600' : 'text-amber-500'} px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-colors`}>
            Iniciar sesión
          </button>
        ) : (
          <div className="text-sm">Hola, {user.name.split(' ')[0]}</div>
        )}
      </div>
    </header>
  );
};

export default LayoutHeader;