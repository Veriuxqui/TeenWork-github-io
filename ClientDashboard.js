import React from 'react';
import { jobs } from '../mock/users';

const ClientDashboard = () => {
  const hiredJobs = jobs.slice(0, 3); // Simulando trabajos contratados
  const totalSpent = hiredJobs.reduce((sum, job) => sum + job.price, 0);
  const averageRating = 4.7; // Rating promedio simulado

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Trabajos Contratados</h3>
          <p className="text-3xl font-bold text-amber-500">{hiredJobs.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Gastado</h3>
          <p className="text-3xl font-bold text-amber-500">${totalSpent}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Rating Promedio</h3>
          <p className="text-3xl font-bold text-amber-500">{averageRating}/5</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Tus Trabajos Activos</h2>
          <div className="space-y-4">
            {hiredJobs.map(job => (
              <div key={job.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-amber-500">${job.price}</p>
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-500 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                    En progreso
                  </button>
                  <button className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Contactar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recomendados para ti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.slice(3, 6).map(job => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{job.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-amber-500">${job.price}</span>
                  <button className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
                    Contratar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;