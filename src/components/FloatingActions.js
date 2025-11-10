import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917066361266?text=Hello%2C%20this%20is%20Shubham!" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
      >
        <FaWhatsapp size={32} />
      </a>
      
      {/* Enquire Now Button */}
      <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-110 flex items-center justify-center md:px-4 md:py-3">
        <FiPhone size={24} className="md:mr-2" />
      </button>
    </div>
  );
};

export default FloatingActions;
