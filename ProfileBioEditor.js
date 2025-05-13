import React, { useState } from 'react';

const ProfileBioEditor = ({ initialBio, onSave }) => {
  const [bio, setBio] = useState(initialBio || '');
  const [editing, setEditing] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Sobre mí</h3>
        {editing ? (
          <button
            onClick={() => {
              onSave(bio);
              setEditing(false);
            }}
            className="text-emerald-600 hover:text-emerald-800 font-medium"
          >
            Guardar
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-emerald-600 hover:text-emerald-800 underline"
          >
            Editar
          </button>
        )}
      </div>
      {editing ? (
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows="4"
          placeholder="Cuéntales a los clientes sobre ti, tus habilidades y experiencia..."
        />
      ) : (
        <p className="text-gray-700 whitespace-pre-line">
          {bio || 'Aún no has agregado información sobre ti.'}
        </p>
      )}
    </div>
  );
};

export default ProfileBioEditor;