import React from 'react';

const CustomConfirm = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 scale-95 hover:scale-100">
        <p className="mb-6 text-gray-800 text-lg font-medium">{message}</p>
        <div className="flex justify-end space-x-3">
          <button 
            onClick={onCancel} 
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow hover:bg-gray-300 transition duration-200"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomConfirm;
