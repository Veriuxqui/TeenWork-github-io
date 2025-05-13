import React from 'react';

const JobCard = ({ job }) => {
  const categoryColors = {
    'Jardinería': 'bg-green-100 text-green-800',
    'Mascotas': 'bg-blue-100 text-blue-800',
    'Tutorías': 'bg-purple-100 text-purple-800',
    'Finanzas': 'bg-yellow-100 text-yellow-800',
    'Tecnología': 'bg-indigo-100 text-indigo-800',
    'Multimedia': 'bg-pink-100 text-pink-800',
    'Diseño': 'bg-red-100 text-red-800',
    'Idiomas': 'bg-cyan-100 text-cyan-800',
    'Fotografía': 'bg-amber-100 text-amber-800',
    'Desarrollo Web': 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${categoryColors[job.category] || 'bg-gray-100 text-gray-800'}`}>
            {job.category}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{job.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-emerald-600">${job.price}</span>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Postularme
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

// DONE