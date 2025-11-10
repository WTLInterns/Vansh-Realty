import React from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import local images
import HappyClientsImage from './assest/HappyCustomers.png';
import VideoImage from './assest/Video.png';

const HappyClientsPage = () => {
  const navigate = useNavigate();

  // Client testimonials data
  const testimonials = [
    { 
      id: 1, 
      name: "Shubham Handge", 
      location: "Pune", 
      project: "VTP Bellissimo Hinjewadi",
      feedback: "Pune Realty made our property investment seamless. Their team's expertise and attention to detail were impressive. Highly recommended for both NRIs and local buyers!",
      rating: 5,
      image: HappyClientsImage
    },
    { 
      id: 2, 
      name: "Shubham Jagtap", 
      location: "Pune", 
      project: "Lodha World Crest, Kharadi",
      feedback: "As a first-time homebuyer, I was overwhelmed with choices. The team at Pune Realty guided me through every step, ensuring I found the perfect home within my budget.",
      rating: 5,
      image: VideoImage
    },
    { 
      id: 3, 
      name: "Saurab Ganjare", 
      location: "USA", 
      project: "Godrej Imperium, Wakad",
      feedback: "Being based in the US, investing in Indian real estate seemed daunting. Pune Realty's NRI services made the entire process smooth. Their virtual tours were incredibly helpful.",
      rating: 4,
      image: HappyClientsImage
    },
    { 
      id: 4, 
      name: "Aakashida Negi", 
      location: "Hyderabad", 
      project: "Kolte Patil Crimson, Balewadi",
      feedback: "I've worked with several real estate consultants, but none matched the professionalism and market knowledge of Pune Realty. They truly understand Pune's property landscape.",
      rating: 5,
      image: VideoImage
    },
    { 
      id: 5, 
      name: "Arbaj Shiekh", 
      location: "Canada", 
      project: "Shapoorji Pallonji, Hinjewadi",
      feedback: "The documentation support provided by Pune Realty was exceptional. They handled all the legal complexities, allowing me to focus on other aspects of my relocation.",
      rating: 5,
      image: HappyClientsImage
    },
    { 
      id: 6, 
      name: "Jaywant Mahala", 
      location: "Bangalore", 
      project: "Brigade Exotica, Viman Nagar",
      feedback: "Their investment advice proved invaluable. I've seen significant returns on properties they recommended. Their market insights are second to none.",
      rating: 5,
      image: VideoImage
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar 
        key={i} 
        className={i < rating ? "text-amber-500 fill-current" : "text-gray-300"} 
      />
    ));
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
            Happy Clients
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
            Real stories from satisfied homeowners and investors who trusted Pune Realty
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Client Info */}
              <div className="flex items-center mb-5">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>
              
              {/* Feedback */}
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
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

export default HappyClientsPage;