import React from 'react';

const SupportButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 left-6 bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    </button>
  );
};

export default SupportButton;