import React, { useState } from 'react';

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const ProfileAvailability = () => {
  const [availability, setAvailability] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );

  const toggleDay = (day) => {
    setAvailability(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Disponibilidad</h3>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
        {days.map(day => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`py-2 px-1 rounded-lg text-center text-sm ${availability[day] ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'}`}
          >
            {day.substring(0, 3)}
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-sm text-gray-500 mr-2">Horario:</span>
        <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
          <option>Mañanas (8am-12pm)</option>
          <option>Tardes (1pm-6pm)</option>
          <option>Noches (6pm-10pm)</option>
          <option>Flexible</option>
        </select>
      </div>
    </div>
  );
};

export default ProfileAvailability;