import React from 'react';

const ProfileStats = ({ jobsCompleted, rating, earnings }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-emerald-50 p-4 rounded-lg text-center">
        <p className="text-sm text-emerald-600">Trabajos completados</p>
        <p className="text-2xl font-bold text-emerald-700">{jobsCompleted}</p>
      </div>
      <div className="bg-amber-50 p-4 rounded-lg text-center">
        <p className="text-sm text-amber-600">Calificación</p>
        <p className="text-2xl font-bold text-amber-700">{rating}/5.0</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-sm text-blue-600">Ganancias totales</p>
        <p className="text-2xl font-bold text-blue-700">${earnings}</p>
      </div>
    </div>
  );
};

export default ProfileStats;