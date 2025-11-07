import React from 'react';
import { FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VideosPage = () => {
  const navigate = useNavigate();

  // Video data
  const videos = [
    { 
      id: 1, 
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Luxury Living Experience", 
      duration: "3:45",
      description: "Take a tour of our premium luxury apartments with top-notch amenities"
    },
    { 
      id: 2, 
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Project Walkthrough", 
      duration: "5:20",
      description: "Complete walkthrough of our newest residential project"
    },
    { 
      id: 3, 
      thumbnail: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Interior Design Showcase", 
      duration: "4:15",
      description: "Explore the modern interior designs of our properties"
    },
    { 
      id: 4, 
      thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Neighborhood Tour", 
      duration: "6:30",
      description: "Discover the vibrant neighborhood around our properties"
    },
    { 
      id: 5, 
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Construction Progress", 
      duration: "2:50",
      description: "See the construction progress of our upcoming projects"
    },
    { 
      id: 6, 
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Amenities Tour", 
      duration: "4:05",
      description: "Explore the world-class amenities in our residential complexes"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header with Back Button */}
        <div className="flex items-center mb-12">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center text-blue-800 hover:text-amber-500 transition-colors duration-300"
          >
            <FiChevronLeft className="mr-2" />
            <span className="font-medium">Back to Media</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Videos
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-amber-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our property walkthroughs, project highlights, and client testimonials
          </motion.p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Video Thumbnail */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <div className="bg-amber-500 rounded-full p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full font-medium">
                  {video.duration}
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-8 mt-16">
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 border border-gray-200">
            <FiChevronLeft className="text-xl" />
          </button>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-amber-500 transition-colors duration-300"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-amber-500 transition-colors duration-300"></div>
          </div>
          <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 border border-gray-200">
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;