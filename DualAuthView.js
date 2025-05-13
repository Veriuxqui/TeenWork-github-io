import React, { useState } from 'react';
import AuthForm from './AuthForm';

const DualAuthView = ({ setLoggedIn }) => {
  const [activePanel, setActivePanel] = useState('student');

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActivePanel('student')}
            className={`px-6 py-2 rounded-full transition-colors ${activePanel === 'student' ? 'bg-emerald-600 text-white' : 'text-gray-700'}`}
          >
            Soy Estudiante
          </button>
          <button
            onClick={() => setActivePanel('employer')}
            className={`px-6 py-2 rounded-full transition-colors ${activePanel === 'employer' ? 'bg-amber-500 text-white' : 'text-gray-700'}`}
          >
            Busco Ayuda
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className={`transition-all ${activePanel === 'student' ? 'opacity-100' : 'opacity-60'}`}>
          <AuthForm 
            setLoggedIn={setLoggedIn} 
            userType="student" 
            defaultRegister={true}
          />
        </div>
        <div className={`transition-all ${activePanel === 'employer' ? 'opacity-100' : 'opacity-60'}`}>
          <AuthForm 
            setLoggedIn={setLoggedIn} 
            userType="employer" 
            defaultRegister={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DualAuthView;