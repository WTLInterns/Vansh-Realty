import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MediaPage = () => {
  const navigate = useNavigate();

  const mediaSections = [
    {
      id: 1,
      title: "Videos",
      description: "Explore our property walkthroughs and project highlights",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      onClick: () => navigate('/media/videos')
    },
    {
      id: 2,
      title: "Happy Clients",
      description: "Read testimonials from our satisfied customers",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      onClick: () => navigate('/media/testimonials')
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Title with Background Image */}
        <div className="text-center mb-16 relative rounded-2xl overflow-hidden">
          {/* Background image for the heading section */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-80"></div>
          </div>
          
          {/* Content overlay */}
          <div className="relative py-20 px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Media
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-amber-500 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </div>
        </div>

        {/* Media Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {mediaSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={section.onClick}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${section.image})` }}
              ></div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <motion.h2 
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  {section.title}
                </motion.h2>
                <motion.p 
                  className="text-lg opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  {section.description}
                </motion.p>
                
                {/* Hover Indicator */}
                <motion.div 
                  className="mt-6 w-12 h-1 bg-amber-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPage;