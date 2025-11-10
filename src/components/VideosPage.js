import React from 'react';
import { FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import local images
import VideoThumbnail from './assest/Video.png';
import HappyCustomersThumbnail from './assest/HappyCustomers.png';

const VideosPage = () => {
  const navigate = useNavigate();

  // Video data
  const videos = [
    { 
      id: 1, 
      thumbnail: VideoThumbnail, 
      title: "Luxury Living Experience", 
      duration: "3:45",
      description: "Take a tour of our premium luxury apartments with top-notch amenities",
      youtubeUrl: "https://youtube.com/shorts/UEcHk-TR3mM?si=fMNDUGJhAWkU0l17"
    },
    { 
      id: 2, 
      thumbnail: HappyCustomersThumbnail, 
      title: "Project Walkthrough", 
      duration: "5:20",
      description: "Complete walkthrough of our newest residential project"
    },
    { 
      id: 3, 
      thumbnail: VideoThumbnail, 
      title: "Interior Design Showcase", 
      duration: "4:15",
      description: "Explore the modern interior designs of our properties"
    },
    { 
      id: 4, 
      thumbnail: HappyCustomersThumbnail, 
      title: "Neighborhood Tour", 
      duration: "6:30",
      description: "Discover the vibrant neighborhood around our properties"
    },
    { 
      id: 5, 
      thumbnail: VideoThumbnail, 
      title: "Construction Progress", 
      duration: "2:50",
      description: "See the construction progress of our upcoming projects"
    },
    { 
      id: 6, 
      thumbnail: HappyCustomersThumbnail, 
      title: "Amenities Tour", 
      duration: "4:05",
      description: "Explore the world-class amenities in our residential complexes"
    }
  ];

  const handleVideoClick = (video) => {
    if (video.youtubeUrl) {
      window.open(video.youtubeUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header with Back Button */}
        <div className="flex items-center mb-12">
          <button 
            onClick={() => navigate('/media')}
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
              className={`relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer ${video.youtubeUrl ? 'ring-2 ring-amber-500 ring-opacity-50' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleVideoClick(video)}
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
                {/* YouTube Indicator */}
                {video.youtubeUrl && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                    YouTube
                  </div>
                )}
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