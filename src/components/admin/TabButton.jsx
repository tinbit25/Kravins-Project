// src/components/admin/TabButton.jsx
import React from 'react';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
