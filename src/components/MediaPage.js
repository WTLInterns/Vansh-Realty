import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import local images
import VideoImage from './assest/Video.png';
import HappyClientsImage from './assest/HappyCustomers.png';

const MediaPage = () => {
  const navigate = useNavigate();

  const mediaSections = [
    {
      id: 1,
      title: "Videos",
      description: "Explore our property walkthroughs and project highlights",
      image: VideoImage,
      onClick: () => navigate('/media/videos')
    },
    {
      id: 2,
      title: "Happy Clients",
      description: "Read testimonials from our satisfied customers",
      image: HappyClientsImage,
      onClick: () => navigate('/media/testimonials')
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Title with Background Image */}
        <div className="text-center mb-16 relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background image for the heading section */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{ backgroundImage: `url(${VideoImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-90"></div>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          
          {/* Content overlay */}
          <div className="relative py-24 px-4">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Media Gallery
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Discover our projects through immersive videos and client experiences
            </motion.p>
            <motion.div 
              className="w-32 h-1 bg-amber-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.4 }}
            ></motion.div>
          </div>
        </div>

        {/* Media Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mediaSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              onClick={section.onClick}
              whileHover={{ y: -15 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
                style={{ backgroundImage: `url(${section.image})` }}
              >
                {/* Enhanced overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.2 }}
                >
                  <motion.h2 
                    className="text-4xl font-bold mb-4 tracking-tight"
                  >
                    {section.title}
                  </motion.h2>
                  <motion.p 
                    className="text-xl opacity-90 mb-8 max-w-lg"
                  >
                    {section.description}
                  </motion.p>
                  
                  {/* Call to action button */}
                  <motion.button
                    className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-amber-500/30"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPage;