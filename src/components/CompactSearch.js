import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CompactSearch = () => {
  const [projectName, setProjectName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would go here
    console.log({ projectName });
  };

  const searchCards = [
    { 
      id: 1, 
      label: 'All Developers', 
      options: ['All Developers', 'Vansh Realty', 'Prestige Group', 'Godrej Properties', 'Tata Housing']
    },
    { 
      id: 2, 
      label: 'All Locations', 
      options: ['All Locations', 'Kharadi', 'Hinjewadi', 'Baner', 'Wakad', 'Pimple Saudagar']
    },
    { 
      id: 3, 
      label: 'All Projects', 
      options: ['All Projects', 'Imperium Alpha', 'Sky Vista', 'Green Acres', 'Royal Enclave']
    }
  ];

  const [selectedOptions, setSelectedOptions] = useState({
    1: 'All Developers',
    2: 'All Locations',
    3: 'All Projects'
  });

  const handleSelectChange = (cardId, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [cardId]: value
    }));
  };

  return (
    <motion.div 
      className="bg-blue-50 rounded-lg shadow-md p-4 mx-auto mt-0 mb-8 max-w-6xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 items-end">
        {/* All Developers */}
        <motion.div 
          className="relative rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center p-3">
            <select 
              value={selectedOptions[1]}
              onChange={(e) => handleSelectChange(1, e.target.value)}
              className="w-full bg-transparent focus:outline-none text-base font-medium"
            >
              {searchCards[0].options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* All Locations */}
        <motion.div 
          className="relative rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center p-3">
            <select 
              value={selectedOptions[2]}
              onChange={(e) => handleSelectChange(2, e.target.value)}
              className="w-full bg-transparent focus:outline-none text-base font-medium"
            >
              {searchCards[1].options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div 
          className="relative rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center p-3">
            <select 
              value={selectedOptions[3]}
              onChange={(e) => handleSelectChange(3, e.target.value)}
              className="w-full bg-transparent focus:outline-none text-base font-medium"
            >
              {searchCards[2].options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Search by Project Name */}
        <motion.div 
          className="relative rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center p-3">
            <input 
              type="text" 
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Search by Project Name" 
              className="w-full bg-transparent focus:outline-none text-base font-medium"
            />
          </div>
        </motion.div>

        {/* Search Button */}
        <motion.div 
          className="rounded-lg transition-all duration-300 hover:scale-[1.02]"
          whileHover={{ y: -2 }}
        >
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all text-base shadow-md hover:shadow-lg"
          >
            Search
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default CompactSearch;