import React, { useState } from 'react';
import { users } from '../mock/users';
import PriceEditor from './PriceEditor';
import ProfileStats from './ProfileStats';
import ProfileBioEditor from './ProfileBioEditor';
import ProfileAvailability from './ProfileAvailability';

const UserProfileCard = ({ userId }) => {
  const [editingPrices, setEditingPrices] = useState(false);
  const user = users.find((u) => u.id === userId);

  const handleSavePrices = (newPrices) => {
    console.log('Precios actualizados:', newPrices);
    setEditingPrices(false);
  };

  const handleSaveBio = (newBio) => {
    console.log('Biografía actualizada:', newBio);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-emerald-600">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center">{user.name}</h3>
                <p className="text-gray-600 text-center">{user.email}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    ⭐ {user.rating}/5.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
              <button className="text-emerald-600 text-sm flex items-center">
                <span className="mr-1">+</span> Añadir
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <ProfileStats jobsCompleted={24} rating={4.8} earnings={580} />

          <ProfileBioEditor 
            initialBio="Estudiante de ingeniería con experiencia en tutorías de matemáticas y física. También ofrezco servicios de jardinería los fines de semana."
            onSave={handleSaveBio}
          />

          {editingPrices ? (
            <PriceEditor onSave={handleSavePrices} />
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Mis precios</h3>
                <button
                  onClick={() => setEditingPrices(true)}
                  className="text-emerald-600 hover:text-emerald-800 underline"
                >
                  Editar
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Jardinería</span>
                  <span className="font-medium">$20/h</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Cuidado de mascotas</span>
                  <span className="font-medium">$15/h</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Tutorías</span>
                  <span className="font-medium">$25/h</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Limpieza</span>
                  <span className="font-medium">$18/h</span>
                </div>
              </div>
            </div>
          )}

          <ProfileAvailability />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

// DONE